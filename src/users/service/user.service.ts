import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/app.userinterface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  getHello(): string {
    return 'Seja bem vindo ao NestJS!';
  }

  getUsers(): User[] {
    return this.users;
  }

  createUser(user: User): void {
    this.users.push(user);
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
