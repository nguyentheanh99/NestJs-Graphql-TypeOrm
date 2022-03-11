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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_module_1 = require("./user/user.module");
const user_entity_1 = __importDefault(require("@/db/models/user.entity"));
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'data/rocketseat.db',
                logging: true,
                entities: [user_entity_1.default],
                migrations: [__dirname + '/src/db/migrations/*{.ts,.js}'],
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                playground: true,
                installSubscriptionHandlers: true,
            }),
            user_module_1.UserModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=client.module.js.map