import { CreateUserDto } from '@modules/user/dtos/create-user.dto';
import { IUser } from '@modules/user/models/user.model';

export interface IUserRepository {
  create(user: CreateUserDto): Promise<IUser>;
}
