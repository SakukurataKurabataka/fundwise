const mongoose = require("mongoose");
const db = require("../../models");
const Expense = db.expense;
const UserAccount = db.userAccount;

module.exports = getAllExpensesByUserID = async (userId) => {
  const queryExpenses = await Expense.find({ relatedUser: userId });

  return queryExpenses;
};
