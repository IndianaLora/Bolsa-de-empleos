import { LoginService } from 'src/Users/Services/users.service';
import { SignIn, Register } from '../Dto/users.dto';
export declare class LoginController {
    private Login;
    constructor(Login: LoginService);
    signIn(user: SignIn): Promise<any>;
    register(user: Register): Promise<string>;
    getRoles(): Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
}
