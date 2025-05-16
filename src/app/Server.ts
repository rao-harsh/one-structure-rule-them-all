import { App } from '@app/App';

export class Server {
  private port: number;
  private app: App;

  constructor(port: number) {
    this.port = port;
    this.app = new App();
  }

  public listen() {
    this.app.initServer();
  }
}
