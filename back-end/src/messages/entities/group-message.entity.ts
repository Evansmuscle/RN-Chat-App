import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

import { Group } from '@src/groups/entities/group.entity';
import { User } from '@src/users/entities/user.entity';

@ObjectType()
export class GroupMessage {
  @Field(() => ID)
  id: number;

  @Field(() => User)
  sender: User;

  @Field(() => Int)
  senderId: number;

  @Field(() => Group)
  receiver: Group;

  @Field(() => Int)
  receiverId: number;

  @Field(() => String)
  content: string;
}
