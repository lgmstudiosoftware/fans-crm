import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  createUser(
    @Body() createUserDto: CreateUserDto
  ): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Get('get-user/:id')
  findById(@Param('id') id: number): Promise<User> {
    return this.usersService.findById(id);
  }
}