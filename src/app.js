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

// app.all("*", (req, _, next) => {
//   next(
//     new Error(
//       `Can't find ${req.originalUrl} for ${req.method} method on the server!.`
//     )
//   );
// });

app.use((req, res, next, err) => {
  console.log(err);
});

module.exports = app;
