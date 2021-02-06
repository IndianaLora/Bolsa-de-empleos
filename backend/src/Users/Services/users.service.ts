import { Injectable } from '@nestjs/common';
import { connection } from 'src/database/database';

@Injectable()
export class LoginService {

async signIn(user: userSignin){
    const conn = await connection();
    const query = await conn.query('SELECT * FROM USERS WHERE username = ? AND password = ?', [user.username, user.password]);
    const verifyData:any =  query;
    if(verifyData[0].length > 0){
        return verifyData[0];
    }else{
        return "user not found";
    };
};

async register(user: userRegister){
    const conn = await connection();
    const query = await conn.query('INSERT INTO USERS (name,lastname,username,password,email,rol) VALUES (?,?,?,?,?,?)', [user.name,user.lastname,user.username,user.password,user.email,user.rol]);
    return "user registered";
};

async getRoles(){
    const conn = await connection();
    const query = await conn.query('SELECT * FROM USERS_ROLES');
    return query[0];
}

}
