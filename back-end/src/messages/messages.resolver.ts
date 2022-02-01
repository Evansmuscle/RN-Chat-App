import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';
import { FindChatlogInput } from './dto/find-chatlog.input';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Mutation(() => Message)
  async createMessage(
    @Args('createMessageInput') createMessageInput: CreateMessageInput,
  ) {
    return await this.messagesService.create(createMessageInput);
  }

  @Query(() => [Message], { name: 'messages' })
  async findAll() {
    return await this.messagesService.findAll();
  }

  @Query(() => [Message], { name: 'chatlog' })
  async findChatlog(
    @Args('findChatlogInput') findChatlogInput: FindChatlogInput,
  ) {
    return await this.messagesService.findChatlog(findChatlogInput);
  }

  @Query(() => Message, { name: 'message' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.messagesService.findOne(id);
  }

  @Mutation(() => Message)
  async removeMessage(@Args('id', { type: () => Int }) id: number) {
    return await this.messagesService.remove(id);
  }
}
