import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  createUser(user: User): Promise<User> {
    return this.userModel.create({
      ...user
    });
  }

  findById(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  findOne(username: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        email: username
      }
    })
  }
}