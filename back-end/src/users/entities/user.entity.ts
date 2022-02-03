import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Group } from '@src/groups/entities/group.entity';

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

  @Field(() => [Group])
  groups: Group[];

  @Field(() => [Group])
  adminGroups: Group[];

  @Field(() => [Group])
  ownedGroups: Group[];
}
