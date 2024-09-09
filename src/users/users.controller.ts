import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  createUser(
    @Body() user: User
  ): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Get('get-user/:id')
  findById(@Param('id') id: number): Promise<User> {
    return this.usersService.findById(id);
  }
}