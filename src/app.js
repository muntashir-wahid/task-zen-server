const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

// const router = require("./routers");
// const errorController = require("./controllers/error/error.controller");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/v1/welcome", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to TaskZen Server",
  });
});

// app.all("*", (req, _, next) => {
//   next(
//     new Error(
//       `Can't find ${req.originalUrl} for ${req.method} method on the server!.`
//     )
//   );
// });

// app.use(errorController);

module.exports = app;
