import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class MakeMemberInput {
  @Field(() => Int)
  memberId: number;

  @Field(() => Int)
  groupId: number;
}
