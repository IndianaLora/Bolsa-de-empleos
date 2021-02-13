"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("../../database/database");
let LoginService = class LoginService {
    async signIn(user) {
        const conn = await database_1.connection();
        const result = await conn.query('SELECT * FROM users WHERE username = ? AND password = ?', [user.username, user.password]);
        const verifyData = result;
        if (verifyData[0].length > 0) {
            return verifyData[0];
        }
        else {
            return "user not found";
        }
        ;
    }
    ;
    register(userData) {
        return userData;
    }
    ;
};
LoginService = __decorate([
    common_1.Injectable()
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map