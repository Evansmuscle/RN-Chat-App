import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  userName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  stars: number;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;

  // TODO: Add group and message resolvers, and their entities.
}
