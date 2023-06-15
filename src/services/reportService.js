const prismaClient = require("../db/prismaClient");

async function createReport(title, content, adress, userId) {
  const report = await prismaClient.Denuncia.create({
    data: { title, content, adress, userId },
  });

  return report;
}

module.exports = {
  createReport,
};
