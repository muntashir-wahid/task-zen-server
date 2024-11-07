const prisma = require("../../database/client");

const catchAsync = require("../utils/catchAsync");

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
