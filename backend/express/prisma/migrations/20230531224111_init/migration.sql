/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Panden` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `straat` VARCHAR(45) NOT NULL,
    `huisnummer` VARCHAR(45) NOT NULL,
    `bus` VARCHAR(45) NOT NULL,
    `postcode` INTEGER NOT NULL,
    `gemeente` VARCHAR(45) NOT NULL,
    `prijs` INTEGER NOT NULL,
    `aantalKamers` INTEGER NOT NULL,
    `oppervlakte` INTEGER NOT NULL,
    `beschrijving` VARCHAR(191) NOT NULL,
    `type` ENUM('TeKoop', 'TeHuur') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `isVerkochtVerhuurd` BOOLEAN NOT NULL DEFAULT false,
    `typePandId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypePand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `straat` VARCHAR(45) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Panden` ADD CONSTRAINT `Panden_typePandId_fkey` FOREIGN KEY (`typePandId`) REFERENCES `TypePand`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
