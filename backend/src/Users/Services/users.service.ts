import { Injectable } from '@nestjs/common';
import { connection } from 'src/database/database';

@Injectable()
export class LoginService {

async signIn(user: userSignin){
    const conn = await connection();
    const result = await conn.query('SELECT * FROM users WHERE username = ? AND password = ?', [user.username, user.password]);
    const verifyData:any =  result;
    if(verifyData[0].length > 0){
        return verifyData[0];
    }else{
        return "user not found";
    };
};

register(userData: userData){
    return userData;
};

}
