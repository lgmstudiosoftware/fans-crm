import {Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(name: string, email: string, phone: string): Promise<User> {
    return this.userRepository.createUser(name, email, phone);
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
