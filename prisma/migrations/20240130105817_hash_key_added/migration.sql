/*
  Warnings:

  - Added the required column `hash` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `account` ADD COLUMN `hash` VARCHAR(191) NOT NULL;
