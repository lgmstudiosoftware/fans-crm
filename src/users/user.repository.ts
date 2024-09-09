import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createUser(name: string, email: string, phone: string): Promise<User> {
    return this.userModel.create({ name, email, phone });
  }

  async findById(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }
}