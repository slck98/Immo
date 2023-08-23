-- CreateTable
CREATE TABLE `Regio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `naam` VARCHAR(45) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PandenToRegio` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PandenToRegio_AB_unique`(`A`, `B`),
    INDEX `_PandenToRegio_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PandenToRegio` ADD CONSTRAINT `_PandenToRegio_A_fkey` FOREIGN KEY (`A`) REFERENCES `Panden`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PandenToRegio` ADD CONSTRAINT `_PandenToRegio_B_fkey` FOREIGN KEY (`B`) REFERENCES `Regio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
