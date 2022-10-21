import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import controllerExample from '../controllers/controllerExample';

const RESOURCE = '/example';

const routerExample = Router();

routerExample.get(`${RESOURCE}/get`, async (req: Request, res: Response, next: NextFunction) => {
  const { search } = req.query;

  try {
    const searchData = await controllerExample(<string>search);

    if (!searchData) {
      res.status(StatusCodes.NO_CONTENT).send();
    } else {
      res.status(StatusCodes.OK).json(searchData);
    }
    next();
  } catch (error) {
    console.log(`ERRO::: Na rota /example/get`);
    next(error);
  }
});

export default routerExample;
