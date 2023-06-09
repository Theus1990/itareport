-- CreateTable
CREATE TABLE "Usuario" (
    "id_user" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "cpf" VARCHAR(15) NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Denuncia" (
    "id_report" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "validated" BOOLEAN NOT NULL DEFAULT false,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "categoriaId" UUID NOT NULL,
    "enderecoId" UUID NOT NULL,

    CONSTRAINT "Denuncia_pkey" PRIMARY KEY ("id_report")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Denuncia" ADD CONSTRAINT "Denuncia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
