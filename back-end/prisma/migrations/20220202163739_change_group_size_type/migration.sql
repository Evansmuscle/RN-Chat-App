/*
  Warnings:

  - The `maxSize` column on the `Group` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Group" DROP COLUMN "maxSize",
ADD COLUMN     "maxSize" INTEGER NOT NULL DEFAULT 50;

-- DropEnum
DROP TYPE "MaxGroupSize";
