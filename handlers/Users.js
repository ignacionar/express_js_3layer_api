import UserInstance from '../entities/User.js';

export const getUsers = (req, res) => {
  const users = UserInstance.GetUsers();

  res.status(200).json({status: "success", data: users})
}

export const createUser = (req, res) => {
  const { name, email, username } = req.body;

  const newUser = UserInstance.CreateUser({ name, email, username });

  res.status(200).json({ message: 'Successfully created user', data: newUser });
}