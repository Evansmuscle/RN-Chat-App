import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class MakeAdminInput {
  @Field(() => Int)
  memberId: number;

  @Field(() => Int)
  groupId: number;
}
