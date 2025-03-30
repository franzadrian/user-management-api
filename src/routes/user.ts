import { Router } from "express";
import { userService } from "../_helpers/service";

export const userRouter = Router();

// DELETE /api/users/:id
userRouter.delete("/:id", async (req, res, next) => {
  userService
    .delete(Number(req.params.id))
    .then(() => res.json({ message: "User deleted" }))
});

// PUT /api/users/:id
userRouter.put("/:id", async (req, res, next) => {
  userService
    .update(req.params.id as unknown as number, req.body)
    .then(() => res.json({ message: "User updated" }))

    .catch(next);
});

// LISTING  /api/users
userRouter.get("/", async (req, res, next) => {
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch(next);
});

// RETRIEVAL /api/users/:id
userRouter.get("/:id", async (req, res, next) => {
  userService
    .getById(req.params.id as unknown as number)
    .then((users) => res.json(users))
    .catch(next);

});

// POST /api/users
userRouter.post("/", async (req, res, next) => {
  userService
    .create(req.body)
    .then(() => res.json({ message: "User created" }))
    .catch(next);
});

