/*
  Warnings:

  - Added the required column `content` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lesson` ADD COLUMN `content` JSON NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
