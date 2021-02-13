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
    async signIn(user) {
        return this.Login.signIn(user);
    }
    register(user) {
        return this.Login.register(user);
    }
    getRoles() {
        return this.Login.getRoles();
    }
};
__decorate([
    common_1.Post('/signIn'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.SignIn]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "signIn", null);
__decorate([
    common_1.Post('/register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.Register]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "register", null);
__decorate([
    common_1.Get('/roles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getRoles", null);
LoginController = __decorate([
    common_1.Controller('login'),
    __metadata("design:paramtypes", [users_service_1.LoginService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=users.controller.js.map