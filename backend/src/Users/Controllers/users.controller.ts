import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from 'src/Users/Services/users.service';
import { SignIn, Register } from '../Dto/users.dto'

@Controller('login')
export class LoginController {

constructor(private Login: LoginService){}

@Post('/signIn')
signIn(@Body() credentials:SignIn){
    return this.Login.signIn(credentials);
}

@Post('/register')
register(@Body() userData:Register){
    return this.Login.register(userData);
}

}
