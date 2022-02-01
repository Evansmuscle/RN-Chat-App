import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class FindChatlogInput {
  @Field(() => Int)
  receiverId: number;

  @Field(() => Int)
  senderId: number;
}
