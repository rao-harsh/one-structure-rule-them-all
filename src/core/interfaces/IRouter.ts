import { Router } from 'express';

export interface IRouterLoader {
  load(): Router;
}
