import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
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
  async createUser(@Body() createdUserDto: CreateDto) {
   const {...createUSerDatails} =  createdUserDto  
   try{
    await this.userService.createUser(createUSerDatails)
    return {message: "Usuario criado com sucesso!"};
   }catch (error){
    throw new NotFoundException('Erro ao cadastrar usúario')
   }
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
