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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = __importDefault(require("./user.service"));
const user_entity_1 = __importDefault(require("@/db/models/user.entity"));
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const queryFilter_1 = require("@/common/dto/queryFilter");
const user_interface_1 = require("./interface/user.interface");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            return nestjs_typeorm_paginate_1.paginate(this.userService.userRepo, queryParams);
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.userRepo.findOne(id);
        });
    }
};
__decorate([
    graphql_1.Query(() => user_interface_1.IUsers, { name: 'getUsers' }),
    __param(0, graphql_1.Args('queryParams')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queryFilter_1.QueryFilterDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    graphql_1.Query(() => user_interface_1.IUser, { nullable: true }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => user_entity_1.default),
    __metadata("design:paramtypes", [user_service_1.default])
], UserResolver);
exports.default = UserResolver;
//# sourceMappingURL=user.resolver.js.map