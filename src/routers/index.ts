import { Router } from 'express';
import healthCheckRouter from './healthCheck';
import routerExample from './routerExample';

const router = Router();

router.use(healthCheckRouter);
router.use(routerExample);

export default router;
