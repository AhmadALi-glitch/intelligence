/*
  Warnings:

  - A unique constraint covering the columns `[accountEmail]` on the table `Mentor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountEmail]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountEmail` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountEmail` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mentor` ADD COLUMN `accountEmail` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `student` ADD COLUMN `accountEmail` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('STUDENT', 'MENTOR') NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Account_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Mentor_accountEmail_key` ON `Mentor`(`accountEmail`);

-- CreateIndex
CREATE UNIQUE INDEX `Student_accountEmail_key` ON `Student`(`accountEmail`);

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_accountEmail_fkey` FOREIGN KEY (`accountEmail`) REFERENCES `Account`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mentor` ADD CONSTRAINT `Mentor_accountEmail_fkey` FOREIGN KEY (`accountEmail`) REFERENCES `Account`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
