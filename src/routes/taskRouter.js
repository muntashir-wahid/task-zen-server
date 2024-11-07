const express = require("express");

const { createTask, getAllTasks } = require("../controllers/taskController");

const router = express.Router();
router.route("/").get(getAllTasks).post(createTask);

// router
//   .route("/:id")
//   .get(getReview)
//   .patch(restrictTo("user", "admin"), updateReview)
//   .delete(restrictTo("user", "admin"), deleteReview);

module.exports = router;
