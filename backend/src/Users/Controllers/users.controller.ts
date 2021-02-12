import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from 'src/Users/Services/users.service';
import { SignIn, Register } from '../Dto/users.dto'

@Controller('login')
export class LoginController {

constructor(private Login: LoginService){}

@Post('/signIn')
async signIn(@Body() user:SignIn){
    return this.Login.signIn(user);
}

@Post('/register')
register(@Body() user:Register){
    return this.Login.register(user);
}

@Get('/roles')
getRoles(){
    return this.Login.getRoles();
}

}
