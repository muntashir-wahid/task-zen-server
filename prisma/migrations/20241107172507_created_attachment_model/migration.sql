-- CreateTable
CREATE TABLE "task_attachments" (
    "uid" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "taskUid" TEXT NOT NULL,

    CONSTRAINT "task_attachments_pkey" PRIMARY KEY ("uid")
);

-- AddForeignKey
ALTER TABLE "task_attachments" ADD CONSTRAINT "task_attachments_taskUid_fkey" FOREIGN KEY ("taskUid") REFERENCES "tasks"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
