import { LoginService } from 'src/Users/Services/users.service';
import { SignIn, Register } from '../../Users/Dto/users.dto';
export declare class LoginController {
    private Login;
    constructor(Login: LoginService);
    signIn(credentials: SignIn): Promise<any>;
    register(userData: Register): userData;
}
