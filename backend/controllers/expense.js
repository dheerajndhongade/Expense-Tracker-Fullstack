let Expense = require("../models/expense");

exports.getExpenses = (req, res, next) => {
  Expense.findAll()
    .then((expenses) => {
      res.send(expenses);
    })
    .catch((err) => console.log(err));
};

exports.getExpenseById = (req, res, next) => {
  let id = req.params.id;
  Expense.findByPk(id)
    .then((expense) => {
      res.send(expense);
    })
    .catch((err) => console.log(err));
};

exports.postExpenses = (req, res, next) => {
  let amount = req.body.amount;
  let description = req.body.description;
  let category = req.body.category;
  Expense.create({
    amount: amount,
    description: description,
    category: category,
  })
    .then(() => {
      res.redirect("/expenses");
      console.log("table created");
    })
    .catch((err) => console.log(err));
};

exports.editExpense = (req, res, next) => {
  let id = req.params.id;
  let updatedAmount = req.body.amount;
  let updatedDescription = req.body.description;
  let updatedCategory = req.body.category;
  Expense.findByPk(id)
    .then((expense) => {
      expense.amount = updatedAmount;
      expense.description = updatedDescription;
      expense.category = updatedCategory;
      return expense.save();
    })
    .then(() => {
      res.redirect("/expenses");
    })
    .catch((err) => console.log(err));
};

exports.deleteExpense = (req, res, next) => {
  let id = req.params.id;
  Expense.findByPk(id)
    .then((expense) => {
      return expense.destroy();
    })
    .then(() => {
      res.redirect("/expenses");
    })
    .catch((err) => console.log(err));
};
