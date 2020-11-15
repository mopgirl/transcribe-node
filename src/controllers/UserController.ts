import { Get, JsonController } from 'routing-controllers';

type User = { name: string, age: number }
const users: Array<User> = [{ name : 'test', age : 25 }];

@JsonController('/users')
export class UserController {
    @Get('/')
    getAll() {
        return users;
    }
}
