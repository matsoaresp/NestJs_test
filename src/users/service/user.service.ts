import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { CreateUserParams } from '../utils/types';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}

  getHello(): string {
    return 'Seja bem vindo ao NestJS!';
  }

  getUsers(): User[] {
    return this.users;
  }

  async createUser(createUserDetails: CreateUserParams){
    const newUser = this.userRepository.create({...createUserDetails, createdAt: new Date(),
    });
    await this.userRepository.save(newUser);
    
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  deleteUsersById(id: number): void {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
