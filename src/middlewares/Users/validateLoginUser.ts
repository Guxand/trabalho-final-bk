import { NextFunction, Request, Response } from "express";

export function validateLoginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message:
        "É preciso que insira um e-mail e uma senha para realizar o Login. ",
    });
  }

  next();
}
