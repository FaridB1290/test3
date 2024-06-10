-- CreateEnum
CREATE TYPE "EnumCommerceTypeField" AS ENUM ('Option1');

-- CreateEnum
CREATE TYPE "EnumPanierMystereEtat" AS ENUM ('Option1');

-- CreateEnum
CREATE TYPE "EnumMethodePaiementTypeField" AS ENUM ('Option1');

-- CreateTable
CREATE TABLE "Commerce" (
    "adresse" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "nom" TEXT,
    "nomJuridique" TEXT,
    "numTva" TEXT,
    "typeField" "EnumCommerceTypeField",
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "utilisateurId" TEXT,

    CONSTRAINT "Commerce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utilisateur" (
    "confirmationEmail" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "id" TEXT NOT NULL,
    "motDePasse" TEXT,
    "nom" TEXT,
    "telephone" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PanierMystere" (
    "commerceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "etat" "EnumPanierMystereEtat",
    "id" TEXT NOT NULL,
    "nom" TEXT,
    "prix" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PanierMystere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "clientAdresse" TEXT,
    "clientEmail" TEXT,
    "clientNom" TEXT,
    "commerceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "message" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vente" (
    "clientAdresse" TEXT,
    "clientNom" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "panierMystereId" TEXT,
    "quantite" INTEGER,
    "total" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "message" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "utilisateurId" TEXT,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MethodePaiement" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "typeField" "EnumMethodePaiementTypeField",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MethodePaiement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Commerce" ADD CONSTRAINT "Commerce_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PanierMystere" ADD CONSTRAINT "PanierMystere_commerceId_fkey" FOREIGN KEY ("commerceId") REFERENCES "Commerce"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_commerceId_fkey" FOREIGN KEY ("commerceId") REFERENCES "Commerce"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_panierMystereId_fkey" FOREIGN KEY ("panierMystereId") REFERENCES "PanierMystere"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;
