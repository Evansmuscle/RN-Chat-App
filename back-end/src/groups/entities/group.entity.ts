import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

import { MaxGroupSize } from '@src/constants';
import { User } from '@src/users/entities/user.entity';

@ObjectType()
export class Group {
  @Field(() => ID)
  groupId: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  title: string;

  @Field(() => [User])
  members: User[];

  @Field(() => User)
  owner: User;

  @Field(() => Int)
  ownerId: number;

  @Field(() => [User])
  admins: User[];

  @Field(() => String)
  avatar: string;

  @Field(() => Int)
  maxSize: MaxGroupSize;
}
