import { InputType, Field, Int } from '@nestjs/graphql';

import { User } from '@src/users/entities/user.entity';
import { MaxGroupSize } from '@src/constants';

@InputType()
export class UpdateGroupInput {
  @Field(() => String)
  name?: string;

  @Field(() => [User])
  members?: User[];

  @Field(() => [User])
  admins?: User[];

  @Field(() => String)
  avatar?: string;

  @Field(() => Int)
  maxSize?: MaxGroupSize;
}
