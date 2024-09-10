import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({
      ...createUserDto
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