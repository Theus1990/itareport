const prismaClient = require("../db/prismaClient");

async function createUser(name, email, password) {
  const usuario = await prismaClient.usuario.create({
    data: { name, email, password },
  });

  return usuario;
}

async function findUserByEmail(email) {
  const usuario = await prismaClient.usuario.findUnique({
    where: { email },
  });

  return usuario;
}

async function findUserById(id) {
  return prismaClient.usuario.findUnique({
    where: { id: String(id) },
  });
}

async function findAllUsers() {
  const users = await prismaClient.usuario.findMany();
  return users;
}

async function updateUser(id, name, email) {
  const user = await prismaClient.usuario.update({
    where: { id: String(id) },
    data: { name: email },
  });

  return user;
}

async function deleteUserById(id) {
  return prismaClient.usuario.delete({ where: { id: String(id) } });
}

module.exports = {
  createUser,
  findAllUsers,
  deleteUserById,
  updateUser,
  findUserById,
  findUserByEmail,
};
