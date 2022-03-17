import { Args, Query, Resolver } from '@nestjs/graphql';
import UserService from './user.service';
import User from '../../db/models/user.entity';
import { paginate, paginateRaw, Pagination } from 'nestjs-typeorm-paginate';
import { QueryFilterDto } from 'src/common/dto/queryFilter';
import { IUser, IUsers } from './interface/user.interface';

@Resolver(() => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => IUsers,  { name: 'getUsers' }) 
  // Define return value in API
  public async getUsers(@Args('queryParams') queryParams: QueryFilterDto): Promise<IUsers> {
    return paginate(this.userService.userRepo, queryParams);
  }

  @Query(() => IUser, { nullable: true })
  public async getUser(@Args('id') id: number): Promise<IUser> {
    return this.userService.userRepo.findOne(id);
  }
}
