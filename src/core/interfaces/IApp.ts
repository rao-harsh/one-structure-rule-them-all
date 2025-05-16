export interface IApp {
  initMiddleware(): void;
  initRoutes(): void;
  initDatabase(): void;
  initServer(): void;
}
