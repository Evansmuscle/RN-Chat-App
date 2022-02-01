import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field(() => Int)
  senderId: number;

  @Field(() => Int)
  receiverId: number;

  @Field()
  content: string;
}
