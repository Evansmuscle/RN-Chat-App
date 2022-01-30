import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const sameEmail = await this.prisma.user.count({
      where: {
        email: createUserInput.email,
      },
    });
    const sameName = await this.prisma.user.count({
      where: {
        userName: createUserInput.userName,
      },
    });

    if (sameEmail > 0) {
      return 'A user with that email already exists';
    }

    if (sameName > 0) {
      return 'A user with that name already exists';
    }

    const newUser = this.prisma.user.create({ data: createUserInput });

    return newUser;
  }

  async findAll() {
    return await this.prisma.user.findMany();
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
