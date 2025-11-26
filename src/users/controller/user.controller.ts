import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
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
    try{
      return this.userService.getUsers();
    }catch(error){
      throw new NotFoundException ("Erro ao listar usuários")
    }
    
  }

  @Post('create')
  async createUser(@Body() createdUserDto: CreateDto) {
   const {...createUSerDatails} =  createdUserDto  
   try{
    await this.userService.createUser(createUSerDatails)
    return {message: "Usuario criado com sucesso!"};
   }catch (error){
    throw new BadRequestException('Erro ao cadastrar usuário')
   }
  }

  @Get(':id')
async getUserById(@Param('id') id: number) {
  const user = await this.userService.getUserById(id);
  if (!user) {
    throw new NotFoundException("Usuário não encontrado");
  }
  return user;
}


  @Delete('delete/:id')
  async deleteUser(@Param('id') id: number) {
    try{
      await this.userService.deleteUsersById(id); 
      return { message: 'User deleted successfully' };

    }catch(error){
      throw new NotFoundException("Erro ao excluir usuário")
    }
  }
}
