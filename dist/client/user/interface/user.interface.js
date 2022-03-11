"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const pagination_1 = require("@/common/interfaces/pagination");
const user_entity_1 = __importDefault(require("@/db/models/user.entity"));
let IUser = class IUser extends user_entity_1.default {
};
IUser = __decorate([
    graphql_1.ObjectType({ isAbstract: true })
], IUser);
exports.IUser = IUser;
let IUsers = class IUsers extends pagination_1.PaginationInterface(IUser) {
};
IUsers = __decorate([
    graphql_1.ObjectType({ isAbstract: true })
], IUsers);
exports.IUsers = IUsers;
//# sourceMappingURL=user.interface.js.map