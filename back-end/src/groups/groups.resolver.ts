import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GroupsService } from './groups.service';
import { Group } from './entities/group.entity';
import { CreateGroupInput } from './dto/create-group.input';
import { UpdateGroupInput } from './dto/update-group.input';
import { MakeAdminInput } from './dto/make-admin.input';
import { MakeMemberInput } from './dto/make-member.input';

@Resolver(() => Group)
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Mutation(() => Group)
  async createGroup(
    @Args('createGroupInput') createGroupInput: CreateGroupInput,
  ) {
    return await this.groupsService.create(createGroupInput);
  }

  @Query(() => [Group], { name: 'groups' })
  async findAll() {
    return await this.groupsService.findAll();
  }

  @Query(() => Group, { name: 'group' })
  async findOne(@Args('id', { type: () => Int }) groupId: number) {
    return await this.groupsService.findOne(groupId);
  }

  @Mutation(() => Group)
  async updateGroup(
    @Args('groupId', { type: () => Int }) groupId: number,
    @Args('updateGroupInput')
    updateGroupInput: UpdateGroupInput,
  ) {
    return await this.groupsService.update(groupId, updateGroupInput);
  }

  @Mutation(() => Group, { name: 'makeAdmin' })
  async makeAdmin(@Args('makeAdminInput') makeAdminInput: MakeAdminInput) {
    return await this.groupsService.makeAdmin(makeAdminInput);
  }

  @Mutation(() => Group, { name: 'makeMember' })
  async makeMember(@Args('makeMemberInput') makeMemberInput: MakeMemberInput) {
    return await this.groupsService.addMember(makeMemberInput);
  }

  @Mutation(() => Group)
  async removeGroup(@Args('id', { type: () => Int }) id: number) {
    return await this.groupsService.remove(id);
  }
}
