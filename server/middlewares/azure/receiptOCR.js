const {
  DocumentAnalysisClient,
  PrebuiltModels,
  AzureKeyCredential,
} = require("@azure/ai-form-recognizer");

const fs = require("fs");

const base64ToImage = require("../image/convertImage");

module.exports = async function receiptOCR(imageString) {
  const endpoint = "https://australiaeast.api.cognitive.microsoft.com/";
  const apiKey = "a143b32d9ba747f8b927d3f5d2be7db1";
  var b64string = imageString;

  const decodedimage = base64ToImage(b64string, "./middlewares/azure/");

  const readStream = fs.createReadStream(
    "./middlewares/azure/temp." + decodedimage.imageType
  );

  const client = new DocumentAnalysisClient(
    endpoint,
    new AzureKeyCredential(apiKey)
  );

  // The PrebuiltModels.Receipt `DocumentModel` encodes both the model ID and a stronger return type for the operation
  const poller = await client.beginAnalyzeDocument(
    PrebuiltModels.Receipt,
    readStream,
    {
      onProgress: ({ status }) => {
        console.log(`status: ${status}`);
      },
    }
  );

  const {
    documents: [receiptDocument],
  } = await poller.pollUntilDone();

  if (receiptDocument === undefined) {
    throw new Error("Expected at least one receipt in analysis result.");
  }

  // The fields of the document constitute the extracted receipt data.
  const receipt = receiptDocument.fields;

  console.log(`Receipt data (${receiptDocument.docType})`);
  console.log("  Merchant Name:", receipt.merchantName?.value);

  // The items of the receipt are an example of a `DocumentArrayValue`
  if (receipt.items !== undefined) {
    console.log("Items:");
    for (const { properties: item } of receipt.items.values) {
      console.log("- Description:", item.description?.value);
      console.log("  Total Price:", item.totalPrice?.value);
    }
  }

  console.log("  Total:", receipt.total?.value);

  return receipt.items;
};
