import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
  ): Promise<User> {
    return this.usersService.createUser(name, email, phone);
  }

  @Get('get-user/:id')
  findById(@Param('id') id: number): Promise<User> {
    return this.usersService.findById(id);
  }
}