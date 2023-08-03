import { NextFunction, Request, Response } from "express";

export function verifyCreateAnotation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, value, date } = req.body;

  if (!title || !value || !date) {
    return res.status(400).json({
      error:
        "Para criar uma anotação, todos os campos tem que ser preenchidos.",
    });
  }

  if (!title) {
    return res.status(400).json({
      error: "É preciso que você adicione algum título para criar uma anotação.",
    });
  }

  if (!value) {
    return res.status(400).json({
      error:
        "É necessário adicionar uma descrição para criar a anotação.",
    });
  }

  if (!date) {
    return res.status(400).json({
      error: "Adicione uma data para criar a anotação.",
    });
  }
  next();
}
