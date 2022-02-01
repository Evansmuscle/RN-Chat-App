import { Injectable } from '@nestjs/common';

import { PrismaService } from '@src/prisma/prisma.service';
import { CreateGroupInput } from './dto/create-group.input';
import { UpdateGroupInput } from './dto/update-group.input';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGroupInput: CreateGroupInput) {
    const group = await this.prisma.group.create({ data: createGroupInput });

    return group;
  }

  async findAll() {
    return await this.prisma.group.findMany();
  }

  async findOne(groupId: number) {
    return await this.prisma.group.findFirst({ where: { groupId } });
  }

  // TODO: Fix update group input, the problem is caused because this is an input type and you're trying to change the id
  // async update(groupId: number, updateGroupInput: UpdateGroupInput) {
  //   const group = await this.prisma.group.update({
  //     where: { groupId },
  //     data: updateGroupInput,
  //   });
  // }

  async remove(groupId: number) {
    return await this.prisma.group.delete({ where: { groupId } });
  }
}
