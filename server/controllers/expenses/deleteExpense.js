const mongoose = require("mongoose");
const db = require("../../models");
const Expense = db.expense;
const UserAccount = db.userAccount;

module.exports = addExpense = async (expenseId) => {
  const deleteExpense = await Expense.findByIdAndDelete(expenseId);

  return deleteExpense;
};
