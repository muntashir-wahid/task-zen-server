const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const taskRouter = require("./routes/taskRouter");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/v1/tasks", taskRouter);

app.use((_, res, __, err) => {
  res.status(err.statusCode).json({
    status: err.status || "error",
    message: err.message || "Something went wrong",
  });
});

module.exports = app;
