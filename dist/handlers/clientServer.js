"use strict";
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
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const aws_serverless_express_1 = require("aws-serverless-express");
const express_1 = __importDefault(require("express"));
const client_module_1 = require("@/client/client.module");
let cachedServer;
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const expressApp = express_1.default();
        const app = yield core_1.NestFactory.create(client_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
        yield app.init();
        return aws_serverless_express_1.createServer(expressApp);
    });
}
function handler(event, context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!cachedServer) {
            const server = yield bootstrap();
            cachedServer = server;
        }
        return aws_serverless_express_1.proxy(cachedServer, event, context, 'PROMISE').promise;
    });
}
exports.handler = handler;
//# sourceMappingURL=clientServer.js.map