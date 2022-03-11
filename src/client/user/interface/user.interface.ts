import { ObjectType } from '@nestjs/graphql';
import { PaginationInterface } from '@/common/interfaces/pagination';
import User from '@/db/models/user.entity';

@ObjectType({ isAbstract: true })
export class IUser extends User {}
@ObjectType({ isAbstract: true })
export class IUsers extends PaginationInterface<IUser>(IUser) {}
