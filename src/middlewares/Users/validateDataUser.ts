import { NextFunction, Request, Response } from "express";
import { UserDTO } from "../../usecase";

export function validateDataUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user: UserDTO = req.body;

  if (!user.name || !user.email || !user.password) {
    return res.status(400).json({
      status: "Todos os dados precisam ser informados (nome, e-mail e senha).",
      success: false,
    });
  }

  if (user.name.length < 3) {
    return res.status(400).json({
      status: "O nome precisa ter no mínimo 3 carecteres. Tente novamente!",
      success: false,
    });
  }

  if (!user.email.includes("@") || !user.email.includes(".com")) {
    return res.status(400).json({
      status: "E-mail inválido. Tente novamente!",
      success: false,
    });
  }

  if (user.password.length < 6) {
    return res.status(400).json({
      status: "A senha precisa ter no mínimo 6 carecteres. Tente novamente!",
      success: false,
    });
  }

  next();
}
