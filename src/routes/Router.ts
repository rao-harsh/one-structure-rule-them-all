import { Router } from 'express';
import { IRouterLoader } from '@core/interfaces/IRouter';
import userRouter from '@modules/user/routes/user.routes';

export class RouterLoader implements IRouterLoader {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  load(): Router {
    this.router.use('/v1/users', userRouter);
    return this.router;
  }
}
