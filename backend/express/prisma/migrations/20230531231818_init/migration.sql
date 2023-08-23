/*
  Warnings:

  - The primary key for the `pandregio` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `pandregio` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`pandenId`, `regioId`);
