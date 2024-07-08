import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import controllerGetExample from '../controllers/controllerGetExample';
import controllerPostExample from '../controllers/controllerPostExample';
import { ResultGet } from '../controllers/models/getTest';
import { ResultPost } from '../controllers/models/postTest';

const RESOURCE = '/example';

const routerExample = Router();

routerExample.get(`${RESOURCE}/get`, async (req: Request, res: Response, next: NextFunction) => {
  const { search } = req.query;

  try {
    const searchData = await controllerGetExample(<ResultGet>search);

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

routerExample.post(`${RESOURCE}/post`, async (req, res, next) => {
  const body = req.body;

  try {
    const searchData = await controllerPostExample(<ResultPost>body);

    if (!searchData) {
      res.status(204).send();
    } else {
      res.status(200).json(searchData);
    }
    next();
  } catch (error) {
    console.log(`ERRO::: Na rota /example/post`);
    next(error);
  }
});

export default routerExample;
