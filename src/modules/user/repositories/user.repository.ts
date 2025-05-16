import { IUserRepository } from '@modules/user/interfaces/user.repository.interface';
import { CreateUserDto } from '@modules/user/dtos/create-user.dto';
import { IUser, UserModel } from '@modules/user/models/user.model';

export class UserRepository implements IUserRepository {
  async create(data: CreateUserDto): Promise<IUser> {
    // const user = new UserModel(data);
    // return await user.save();
    return {
      id: '1',
      name: data.name,
      email: data.email
    } as IUser;
  }
}
