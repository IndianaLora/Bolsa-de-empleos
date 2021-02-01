import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

signIn(credentials: userSignin){
    return credentials;
}

register(userData: userData){
    return userData;
}

}
