import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

import { User } from '@src/users/entities/user.entity';

@ObjectType()
export class Message {
  @Field(() => ID)
  id: number;

  @Field(() => User)
  sender: User;

  @Field(() => Int)
  senderId: number;

  @Field(() => User)
  receiver: User;

  @Field(() => Int)
  receiverId: number;

  @Field(() => String)
  content: string;
}
