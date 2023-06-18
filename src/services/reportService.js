const prismaClient = require("../db/prismaClient");

async function createReport(titulo, conteudo, endereco, id) {
  const report = await prismaClient.Denuncia.create({
    data: { title: titulo,
            content: conteudo,
            adress: endereco,
            userId: id },
  });

  return report;
}

async function findReportById(id) {
  const repor = prismaClient.Denuncia.findFirst({
    where: { id_report: id },
  });

  return repor;
}

async function findAllReport() {
  const reports = await prismaClient.Denuncia.findMany();
  return reports;
}

async function UpdateReport() {
  return null;
}

async function deleteReportById(id) {
  return prismaClient.Denuncia.delete({ where: { id_report: String(id) } });
}
module.exports = {
  createReport,
  findReportById,
  findAllReport,
  UpdateReport,
  deleteReportById
};
