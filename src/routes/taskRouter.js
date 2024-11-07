const express = require("express");

const {
  createTask,
  getAllTasks,
  getAllTaskAttachment,
  createTaskAttachment,
} = require("../controllers/taskController");
const { upload } = require("../utils/handleFile");

const router = express.Router();
router.route("/").get(getAllTasks).post(createTask);

router
  .route("/:taskUid/attachments")
  .get(getAllTaskAttachment)
  .post(upload.single("file"), createTaskAttachment);

module.exports = router;
