import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);
    const user: User = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHashed,
    };
    this.users.push(user);
    return user;
  }
  async getAllUser(): Promise<User[]> {
    return this.users;
  }
}
