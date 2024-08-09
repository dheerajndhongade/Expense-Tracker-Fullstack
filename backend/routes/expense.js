let express = require("express");
let controller = require("../controllers/expense");

let router = express.Router();

router.get("/expenses", controller.getExpenses);

router.get("/expenses/:id", controller.getExpenseById);

router.post("/expenses", controller.postExpenses);

router.put("/expenses/:id", controller.editExpense);

router.delete("/expenses/:id", controller.deleteExpense);

module.exports = router;
