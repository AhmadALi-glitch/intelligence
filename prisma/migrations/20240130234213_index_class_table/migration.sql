-- CreateIndex
CREATE FULLTEXT INDEX `Class_name_idx` ON `Class`(`name`);

-- CreateIndex
CREATE FULLTEXT INDEX `Class_name_description_idx` ON `Class`(`name`, `description`);

-- CreateIndex
CREATE FULLTEXT INDEX `Class_description_idx` ON `Class`(`description`);
