/*
  Warnings:

  - You are about to drop the column `title` on the `class` table. All the data in the column will be lost.
  - Added the required column `name` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Student_name_key` ON `student`;

-- AlterTable
ALTER TABLE `class` DROP COLUMN `title`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
