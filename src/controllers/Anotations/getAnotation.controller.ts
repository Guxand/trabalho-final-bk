import { Request, Response } from "express";
import { anotationRepository } from "../../server";
import { GetAnotationUseCase } from "../../usecase";

export class GetAnotationController {
  execute(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const getAnotationUseCase = new GetAnotationUseCase(anotationRepository);

      const response = getAnotationUseCase.execute({
        id,
      });

      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
