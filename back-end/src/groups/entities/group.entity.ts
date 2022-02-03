import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { GroupMessage } from '@src/messages/entities/group-message.entity';

import { User } from '@src/users/entities/user.entity';

@ObjectType()
export class Group {
  @Field(() => ID)
  groupId: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  title: string;

  @Field(() => [User], { nullable: true })
  members?: User[];

  @Field(() => Int)
  ownerId: number;

  @Field(() => [User], { nullable: true })
  admins?: User[];

  @Field(() => String)
  avatar: string;

  @Field(() => Int)
  maxSize: number;

  @Field(() => [GroupMessage])
  groupMessages: GroupMessage[];
}
