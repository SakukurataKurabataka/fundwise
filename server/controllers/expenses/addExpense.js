const mongoose = require("mongoose");
const db = require("../../models");
const Expense = db.expense;
const UserAccount = db.userAccount;

module.exports = addExpense = async (userId, expenseDate, title, amount) => {
  const user = await UserAccount.findById(userId, "_id email name");

  if (!user) {
    throw new Error("No User Found");
  }
  if (!userId) {
    throw new Error("No ID Given");
  }
  if (!expenseDate) {
    throw new Error("No Date Given");
  }
  if (!title) {
    throw new Error("No Title Given");
  }
  if (!amount) {
    throw new Error("No Amount Given");
  }

  console.log(user);

  const expense = new Expense({
    expenseDate,
    title,
    amount,
    relatedUser: user._id,
  });

  expense.save();

  return expense;
};
