import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/prisma/prisma.service';
import { CreateMessageInput } from './dto/create-message.input';
import { FindChatlogInput } from './dto/find-chatlog.input';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMessageInput: CreateMessageInput) {
    const message = await this.prisma.message.create({
      data: createMessageInput,
    });

    return message;
  }

  async findAll() {
    return await this.prisma.message.findMany();
  }

  async findChatlog({ receiverId, senderId }: FindChatlogInput) {
    const chatLog = await this.prisma.message.findMany({
      where: { senderId, receiverId },
    });

    return chatLog;
  }

  async findOne(id: number) {
    return await this.prisma.message.findFirst({ where: { id } });
  }

  async remove(id: number) {
    return await this.prisma.message.delete({ where: { id } });
  }
}
