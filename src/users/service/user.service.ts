import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { CreateUserParams } from '../utils/types';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}

  getHello(): string {
    return 'Seja bem vindo ao NestJS!';
  }

  getUsers() {
    return this.userRepository.find();
  }

  async createUser(createUserDetails: CreateUserParams){
    const newUser = this.userRepository.create({...createUserDetails, createdAt: new Date(),
    });
    await this.userRepository.save(newUser);
    
  }

   async getUserById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  deleteUsersById(id: number): void {
    this.userRepository.delete({id});
  }
}
