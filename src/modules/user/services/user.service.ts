import { IUserService } from '@modules/user/interfaces/user.service.interface';
import { CreateUserDto } from '@modules/user/dtos/create-user.dto';
import { IUserRepository } from '@modules/user/interfaces/user.repository.interface';
import { IUser } from '@modules/user/models/user.model';

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(data: CreateUserDto): Promise<IUser> {
    return this.userRepository.create(data);
  }
}
