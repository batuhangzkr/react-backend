import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();
export type TLogin = {
  name: string;
  password: string;
};

export type TProfile = {
  name: string;
  password: string;
};

router.post("/profile", (req, res) => {
  const token = req.body.token;
  const data = jwt.verify(token, process.env.SECRET as any) as TProfile;

  res.send(data);
});

router.post("/login", (req, res, next) => {
  const { name, password } = req.body as TLogin;

  const jsonData = {
    name,
    password: bcrypt.hashSync(password, 10),
  };

  const token = jwt.sign(jsonData, process.env.SECRET as any);

  res.cookie("token", token);
  res.send({ token });
  next();
});

export const authRouter = router;
