import { InputType, Field, Int } from '@nestjs/graphql';

import { User } from '@src/users/entities/user.entity';
import { MaxGroupSize } from '@src/constants';

@InputType()
export class UpdateGroupInput {
  @Field(() => String)
  title?: string;

  @Field(() => String)
  avatar?: string;
}
