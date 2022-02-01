import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGroupInput {
  @Field(() => Int)
  ownerId: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  avatar: string;
}
