-- CreateEnum
CREATE TYPE "TaskStatuses" AS ENUM ('INCOMPLETE', 'TO_DO', 'UNDER_REVIEW', 'COMPLETED', 'OVERDUE');

-- CreateTable
CREATE TABLE "tasks" (
    "uid" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "assigneeName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "TaskStatuses" NOT NULL DEFAULT 'TO_DO',
    "totalAttachments" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("uid")
);
