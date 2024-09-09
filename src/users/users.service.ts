import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(name: string, email: string, phone: string): Promise<User> {
    return this.userRepository.createUser(name, email, phone);
  }

  async findById(id: number): Promise<User> {
    return this.userRepository.findById(id);
  }
}
