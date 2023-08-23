/*
  Warnings:

  - Made the column `typePandId` on table `panden` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `panden` DROP FOREIGN KEY `Panden_typePandId_fkey`;

-- AlterTable
ALTER TABLE `panden` MODIFY `typePandId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Panden` ADD CONSTRAINT `Panden_typePandId_fkey` FOREIGN KEY (`typePandId`) REFERENCES `TypePand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
