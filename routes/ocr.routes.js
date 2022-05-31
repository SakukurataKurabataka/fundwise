const receiptOCR = require("../middlewares/azure/receiptOCR");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });
  app.post("/api/receiptAnalyzer", async (req, res) => {
    try {
      const receipt = await receiptOCR(req.body.imageString);

      if (receipt) {
        res.status(200).send(receipt);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
};
