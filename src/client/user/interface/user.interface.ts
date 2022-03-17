import { ObjectType } from '@nestjs/graphql';
import { PaginationInterface } from 'src/common/interfaces/pagination';
import User from 'src/db/models/user.entity';

@ObjectType({ isAbstract: true })
export class IUser extends User {}
@ObjectType({ isAbstract: true })
export class IUsers extends PaginationInterface<IUser>(IUser) {}
