-- CreateTable
CREATE TABLE `Afbeeldingen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(150) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `pandenId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Afbeeldingen` ADD CONSTRAINT `Afbeeldingen_pandenId_fkey` FOREIGN KEY (`pandenId`) REFERENCES `Panden`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
