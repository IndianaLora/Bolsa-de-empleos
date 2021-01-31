import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from 'src/services/login/login.service';
import { SignIn, Register } from '../../dto/login/login.dto'

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
