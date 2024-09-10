import {Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }

  findOne(username: string): Promise<User> {
    return this.userRepository.findOne(username);
  }

  async findById(id: number): Promise<User> {
    if (isNaN(id) || id <= 0) {
      throw new BadRequestException(`Invalid ID: ${id}`);
    }

    const
      user = await this.userRepository.findById(id);

    if (!user) {
      throw new BadRequestException(`User with ID ${id} not found`);
    }

    return user
  }
}
