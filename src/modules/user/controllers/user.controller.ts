import { Request, Response } from 'express';
import { CreateUserSchema } from '@modules/user/dtos/create-user.dto';
import { IUserController } from '@modules/user/interfaces/user.controller.interface';
import { IUserService } from '@modules/user/interfaces/user.service.interface';

export class UserController implements IUserController {
  constructor(private readonly userService: IUserService) {}

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const data = CreateUserSchema.parse(req.body);
      const result = await this.userService.createUser(data);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
