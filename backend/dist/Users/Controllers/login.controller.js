"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../Services/users.service");
const users_dto_1 = require("../Dto/users.dto");
let LoginController = class LoginController {
    constructor(Login) {
        this.Login = Login;
    }
    signIn(credentials) {
        return this.Login.signIn(credentials);
    }
    register(userData) {
        return this.Login.register(userData);
    }
};
__decorate([
    common_1.Post('/signIn'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.SignIn]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "signIn", null);
__decorate([
    common_1.Post('/register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.Register]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "register", null);
LoginController = __decorate([
    common_1.Controller('login'),
    __metadata("design:paramtypes", [users_service_1.LoginService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map