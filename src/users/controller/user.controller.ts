import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import  {CreateDto} from '../dto/CreateUser.dto'
import type { User } from '../interfaces/app.userinterface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Get('all')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('create')
  createUser(@Body() createdUserDto: CreateDto) {
   const {...createUSerDatails} =  createdUserDto  
   this.userService.createUser(createUSerDatails)
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    const user = this.userService.getUserById(+id);
    if (!user) {
      return { message: 'User not found' };
    } else {
      return user;
    }
  }
  @Post('delete/:id')
  deleteUser(@Param('id') id: number) {
    this.userService.deleteUsersById(id);
    return { message: 'User deleted successfully' };
  }
}
