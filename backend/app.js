let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let port = 7000;

let expenseRouter = require("./routes/expense");
let sequelize = require("./utils/databse");

let app = express();
app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use(expenseRouter);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Running in ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
