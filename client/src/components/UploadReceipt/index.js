import React from "react";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";

export const UploadReceipt = ({ className }) => {
  const handleInputChange = (e) => {
    let reader = new FileReader();
    let image64 = 0;
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        console.log(e.target.result);

        axios
          .post(
            "http://localhost:8080/api/receiptAnalyzer",
            { imageString: e.target.result },
            {
              headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": "a143b32d9ba747f8b927d3f5d2be7db1",
              },
            }
          )
          .then((data) => {
            console.log(data);
          });
      };
    }
  };

  return (
    <div
      className={`border-4 border-gray-600 rounded-lg h-80 w-80 relative flex items-center justify-center cursor-pointer ${className}`}
    >
      <input
        type="file"
        accept="image/*"
        className="w-full h-full absolute opacity-0"
        onChange={handleInputChange}
      />
      <FaPlusCircle className="w-9 h-9" />
    </div>
  );
};
