/*
  Warnings:

  - You are about to drop the `UserPassenger` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserPassenger";

-- CreateTable
CREATE TABLE "userPassenger" (
    "UserId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "EmailAdress" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "PhoneNumber" INTEGER NOT NULL,
    "StatusAccount" "StatusAccountEnum" NOT NULL,
    "RacesCanceleds" INTEGER NOT NULL,
    "RacesCompleteds" INTEGER NOT NULL,
    "LastConnectedDevice" TEXT NOT NULL,
    "Documentation" TEXT NOT NULL,
    "UserImg" TEXT NOT NULL,

    CONSTRAINT "userPassenger_pkey" PRIMARY KEY ("UserId")
);

-- CreateIndex
CREATE UNIQUE INDEX "userPassenger_EmailAdress_key" ON "userPassenger"("EmailAdress");
