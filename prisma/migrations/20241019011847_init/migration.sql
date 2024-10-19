-- CreateEnum
CREATE TYPE "StatusAccountEnum" AS ENUM ('Aproved', 'Rejected', 'Analizing');

-- CreateTable
CREATE TABLE "UserPassenger" (
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

    CONSTRAINT "UserPassenger_pkey" PRIMARY KEY ("UserId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPassenger_EmailAdress_key" ON "UserPassenger"("EmailAdress");
