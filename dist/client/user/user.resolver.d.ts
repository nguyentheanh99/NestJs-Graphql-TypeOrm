import UserService from './user.service';
import { QueryFilterDto } from '@/common/dto/queryFilter';
import { IUser, IUsers } from './interface/user.interface';
export default class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(queryParams: QueryFilterDto): Promise<IUsers>;
    getUser(id: number): Promise<IUser>;
}
