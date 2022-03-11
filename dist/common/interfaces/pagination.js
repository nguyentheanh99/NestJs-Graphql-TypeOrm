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
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
let MetaPaginationInterface = class MetaPaginationInterface {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], MetaPaginationInterface.prototype, "totalItems", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], MetaPaginationInterface.prototype, "itemCount", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], MetaPaginationInterface.prototype, "itemsPerPage", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], MetaPaginationInterface.prototype, "totalPages", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], MetaPaginationInterface.prototype, "currentPage", void 0);
MetaPaginationInterface = __decorate([
    graphql_1.ObjectType({ isAbstract: true })
], MetaPaginationInterface);
function PaginationInterface(Items) {
    let PaginationInterface = class PaginationInterface {
    };
    __decorate([
        graphql_1.Field(() => MetaPaginationInterface),
        __metadata("design:type", MetaPaginationInterface)
    ], PaginationInterface.prototype, "meta", void 0);
    __decorate([
        graphql_1.Field(() => [Items]),
        __metadata("design:type", Array)
    ], PaginationInterface.prototype, "items", void 0);
    PaginationInterface = __decorate([
        graphql_1.ObjectType({ isAbstract: true })
    ], PaginationInterface);
    return PaginationInterface;
}
exports.PaginationInterface = PaginationInterface;
//# sourceMappingURL=pagination.js.map