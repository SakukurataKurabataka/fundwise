const controller = require("../controllers/expense.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/expense/:id", async (req, res) => {
    const userId = req.params.id;

    try {
      const queryExpenses = await controller.getAllExpensesByUserID(userId);

      if (!queryExpenses) {
        res.status(500).send({ message: "Failed to Fetch Expenses" });
      }

      res.send(queryExpenses);
    } catch (err) {
      res.send({ message: err });
    }
  });

  app.post("/api/expense", async (req, res) => {
    const { userId, expenseDate, title, amount } = req.body;

    try {
      const expense = await controller.addExpense(
        userId,
        expenseDate,
        title,
        amount
      );

      if (!expense) {
        res.status(500).send({ message: "Failed to Create Expense" });
      }

      res.send({ message: "Succesfully Created Expense" });
    } catch (err) {
      res.send({ message: err });
    }
  });

  app.delete("/api/expense/:id", async (req, res) => {
    const expenseId = req.params.id;

    try {
      const deletedExpense = await controller.deleteExpense(expenseId);

      if (!deletedExpense) {
        res.status(500).send({ message: "Failed to Delete. No Expense Found" });
      }

      res.send({ message: "Succesfully Delete Expense" });
    } catch (err) {
      res.send({ message: err });
    }
  });
};
