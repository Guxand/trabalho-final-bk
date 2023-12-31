import { Request, Response } from "express";
import { anotationRepository } from "../../server";
import { CreateAnotationUseCase } from "../../usecase";

export class CreateAnotationController {
  public execute(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { title, value, date } = req.body;

      const createAnotationUseCase = new CreateAnotationUseCase(
        anotationRepository
      );

      const response = createAnotationUseCase.execute({
        userId,
        title,
        value,
        date,
      });

      return res.status(201).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
