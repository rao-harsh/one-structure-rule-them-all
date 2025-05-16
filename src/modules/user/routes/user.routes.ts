import { Router } from 'express';
import { UserController } from '@modules/user/controllers/user.controller';
import { UserService } from '@modules/user/services/user.service';
import { UserRepository } from '@modules/user/repositories/user.repository';

export class UserRoutes {
  public router: Router;

  private userController: UserController;
  private userService: UserService;
  private userRepository: UserRepository;

  constructor() {
    this.router = Router();

    // Dependency injection
    this.userRepository = new UserRepository();
    this.userService = new UserService(this.userRepository);
    this.userController = new UserController(this.userService);

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/', (req, res) => this.userController.createUser(req, res));
  }
}

export default new UserRoutes().router;
