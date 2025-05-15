import { Request, Response } from "express";

// Dummy data for example
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

export const getUsers = (req: Request, res: Response): void => {
  res.status(200).json({
    status: "success",
    data: users,
  });
};

export const getUserById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    res.status(404).json({
      status: "error",
      message: `User with id ${id} not found`,
    });
    return;
  }

  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const createUser = (req: Request, res: Response): void => {
  // biasanya anjay we would validate input and save to database
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).json({
      status: "error",
      message: "Name and email are required",
    });
    return;
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({
    status: "success",
    data: newUser,
  });
};
