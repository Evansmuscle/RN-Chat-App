import { Injectable } from '@nestjs/common';

import { PrismaService } from '@src/prisma/prisma.service';
import { CreateGroupInput } from './dto/create-group.input';
import { MakeAdminInput } from './dto/make-admin.input';
import { MakeMemberInput } from './dto/make-member.input';
import { UpdateGroupInput } from './dto/update-group.input';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGroupInput: CreateGroupInput) {
    const group = await this.prisma.group.create({
      data: createGroupInput,
    });

    await this.prisma.user.update({
      where: { id: createGroupInput.ownerId },
      include: { ownedGroups: true },
      data: {
        ownedGroups: {
          connect: {
            groupId: group.groupId,
          },
        },
      },
    });

    return group;
  }

  async findAll() {
    return await this.prisma.group.findMany();
  }

  async findOne(groupId: number) {
    return await this.prisma.group.findFirst({ where: { groupId } });
  }

  async update(groupId: number, updateGroupInput: UpdateGroupInput) {
    const group = await this.prisma.group.update({
      where: { groupId },
      data: updateGroupInput,
    });

    return group;
  }

  async makeAdmin({ memberId, groupId }: MakeAdminInput) {
    const group = await this.prisma.group.findFirst({
      where: { groupId },
      include: {
        members: true,
      },
    });

    await this.prisma.user.update({
      where: { id: memberId },
      include: { groups: true },
      data: {
        adminGroups: {
          connect: {
            groupId: group.groupId,
          },
        },
      },
    });

    return group;
  }

  async addMember({ memberId, groupId }: MakeMemberInput) {
    const group = await this.prisma.group.findUnique({
      where: { groupId },
      include: { members: true },
    });

    await this.prisma.user.update({
      where: { id: memberId },
      include: { groups: true },
      data: {
        groups: {
          connect: {
            groupId: group.groupId,
          },
        },
      },
    });

    return group;
  }

  async remove(groupId: number) {
    return await this.prisma.group.delete({ where: { groupId } });
  }
}
