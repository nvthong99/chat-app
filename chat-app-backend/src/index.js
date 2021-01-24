const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("combined"));
const PORT = process.env.PORT || 3000;
const connectDb = require("./Db/MongooseDb");
const userRouter = require("./routers/user");
app.use(express.json());
connectDb();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", userRouter);

app.listen(8080, () => {
  console.log("Sever started localhost:" + PORT);
});
