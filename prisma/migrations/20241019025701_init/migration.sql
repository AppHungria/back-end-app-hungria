-- CreateEnum
CREATE TYPE "StatusAccountEnum" AS ENUM ('Aproved', 'Rejected', 'Analizing');

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
    "UserImg" TEXT,

    CONSTRAINT "userPassenger_pkey" PRIMARY KEY ("UserId")
);

-- CreateIndex
CREATE UNIQUE INDEX "userPassenger_EmailAdress_key" ON "userPassenger"("EmailAdress");
