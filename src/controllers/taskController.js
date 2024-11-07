const prisma = require("../../database/client");

const catchAsync = require("../utils/catchAsync");
const { uploadToCloudinary } = require("../utils/handleFile");

exports.createTask = catchAsync(async (req, res) => {
  const { clientName, assigneeName, description, status } = req.body;

  const task = await prisma.tasks.create({
    data: {
      clientName,
      assigneeName,
      description,
      status,
    },
  });

  res.status(201).json({
    status: "success",
    data: {
      task,
    },
  });
});

exports.getAllTasks = catchAsync(async (req, res) => {
  const { status } = req.query;

  const tasks = await prisma.tasks.findMany({
    where: {
      status,
    },
  });

  res.status(200).json({
    status: "success",
    count: tasks.length,
    data: {
      tasks,
    },
  });
});

exports.createTaskAttachment = catchAsync(async (req, res) => {
  const { taskUid } = req.params;
  const file = req.file;
  const fileType = file.mimetype.split("/").pop();
  const fileName = file.originalname;

  const cloudinaryResponse = await uploadToCloudinary(file, {
    format: fileType,
  });

  const attachment = await prisma.$transaction(async (transactionClient) => {
    const file = await transactionClient.taskAttachments.create({
      data: {
        fileName,
        fileUrl: cloudinaryResponse.secure_url,
        taskUid,
      },
    });

    await transactionClient.tasks.update({
      where: {
        uid: taskUid,
      },
      data: {
        totalAttachments: { increment: 1 },
      },
    });

    return file;
  });

  res.status(201).json({
    status: "success",
    data: {
      attachment,
    },
  });
});

exports.getAllTaskAttachment = catchAsync(async (req, res) => {
  const { taskUid } = req.params;

  const attachments = await prisma.taskAttachments.findMany({
    where: {
      taskUid,
    },
  });

  res.status(200).json({
    status: "success",

    data: {
      attachments,
    },
  });
});
