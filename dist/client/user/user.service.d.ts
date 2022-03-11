import { Repository } from 'typeorm';
import User from '@/db/models/user.entity';
declare class UserService {
    readonly userRepo: Repository<User>;
    constructor(userRepo: Repository<User>);
}
export default UserService;
