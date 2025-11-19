import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import type { User } from '../interfaces/app.userinterface';

@Controller('users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('create')
  createUser(@Body() newUser: User) {
    this.appService.createUser(newUser);
    return { message: 'Usuario criado com sucesso! ' };
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    const user = this.appService.getUserById(+id);
    if (!user) {
      return { message: 'User not found' };
    } else {
      return user;
    }
  }
  @Post('delete/:id')
  deleteUser(@Param('id') id: number) {
    this.appService.deleteUsersById(id);
    return { message: 'User deleted successfully' };
  }
}
