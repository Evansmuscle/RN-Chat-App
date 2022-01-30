import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    const userEmail = this.prisma.user.findFirst({
      where: {
        email: createUserInput.email,
      },
    });
    const userName = this.prisma.user.findFirst({
      where: {
        userName: createUserInput.userName,
      },
    });

    if (userEmail) {
      return 'A user with that email already exists';
    }

    if (userName) {
      return 'A user with that name already exists';
    }

    const newUser = this.prisma.user.create({ data: createUserInput });

    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return {
      id,
      userName: 'Mel',
      email: 'hello@test.com',
      password: 'test',
    };
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
