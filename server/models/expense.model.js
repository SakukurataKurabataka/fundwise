const mongoose = require("mongoose");
const { Schema } = mongoose;

const Expense = mongoose.model(
  "Expense",
  new mongoose.Schema({
    expenseDate: Date,
    title: String,
    amount: Number,
    relatedUser: { type: Schema.Types.ObjectId, ref: "UserAccount" },
  })
);
module.exports = Expense;
