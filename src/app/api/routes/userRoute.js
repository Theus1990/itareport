import { createUserController } from "../../controllers/createUserController";
const userController = require("../controllers/userController");

const express = require("express");
const router = express.Router();

router.post("/usuario", userController.createUser);
router.get("/usuario", userController.findAllUsers);
router.get("/user/:id", userController.findUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;

/*
export async function POST(req) {
  const data = await req.json();
  const result = await createUserController(data);
  return new Response(JSON.stringify(result.json), { status: result.status });
}

export async function GET(req) {
  const message = "GET";

  return new Response(message, { status: 200 });
}

export async function GET(request) {
  const method = "GET";

  return new Response(method, { status: 200 });
}
*/
