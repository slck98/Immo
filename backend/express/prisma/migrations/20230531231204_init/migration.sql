/*
  Warnings:

  - You are about to drop the column `straat` on the `typepand` table. All the data in the column will be lost.
  - You are about to drop the `_pandentoregio` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[naam]` on the table `Regio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[naam]` on the table `TypePand` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `naam` to the `TypePand` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_pandentoregio` DROP FOREIGN KEY `_PandenToRegio_A_fkey`;

-- DropForeignKey
ALTER TABLE `_pandentoregio` DROP FOREIGN KEY `_PandenToRegio_B_fkey`;

-- AlterTable
ALTER TABLE `typepand` DROP COLUMN `straat`,
    ADD COLUMN `naam` VARCHAR(45) NOT NULL;

-- DropTable
DROP TABLE `_pandentoregio`;

-- CreateTable
CREATE TABLE `PandRegio` (
    `pandenId` INTEGER NOT NULL,
    `regioId` INTEGER NOT NULL,
    `pandRegiocol` VARCHAR(191) NOT NULL,
    `gebruikersId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`pandenId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gebruikers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `voorNaam` VARCHAR(45) NOT NULL,
    `achterNaam` VARCHAR(45) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `wachtwoord` VARCHAR(150) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Gebruikers_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Regio_naam_key` ON `Regio`(`naam`);

-- CreateIndex
CREATE UNIQUE INDEX `TypePand_naam_key` ON `TypePand`(`naam`);

-- AddForeignKey
ALTER TABLE `PandRegio` ADD CONSTRAINT `PandRegio_pandenId_fkey` FOREIGN KEY (`pandenId`) REFERENCES `Panden`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PandRegio` ADD CONSTRAINT `PandRegio_regioId_fkey` FOREIGN KEY (`regioId`) REFERENCES `Regio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PandRegio` ADD CONSTRAINT `PandRegio_gebruikersId_fkey` FOREIGN KEY (`gebruikersId`) REFERENCES `Gebruikers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
