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
const class_transformer_1 = require("class-transformer");
const graphql_1 = require("@nestjs/graphql");
const filterDescription = `
- Filter equal: filters:[{field: "name", operator: eq, data: "Jayce"}]
- Filter not equal: filters:[{field: "name", operator: neq, data: "Jayce"}]
- Filter less than: filters:[{field: "age", operator: lt, data: 40}]
- Filter greater than: filters:[{field: "age", operator: gt, data: 40}]
- Filter less than and equal: filters:[{field: "age", operator: lte, data: 40}]
- Filter greater than and equal: filters:[{field: "age", operator: gte, data: 40}]
- Filter field in many choice: filters:[{field: "name", operator: in, data: "Alex,Julia"}]
- Filter field not in many choice: filters:[{field: "name", operator: nin, data: "Alex,Julia"}]
- Filter field by text: filters:[{field: "name", operator: like, data: "Jayce"}]`;
const qDescription = `
- Query by text. Ex: q:"abcxyz"
`;
const paginationDescription = `
- Paginate with limit and offset. Ex: limit:10, page:1
`;
const orderByDescription = `
- Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "createdAt:DESC"
`;
let FilterDto = class FilterDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], FilterDto.prototype, "field", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], FilterDto.prototype, "data", void 0);
FilterDto = __decorate([
    graphql_1.InputType()
], FilterDto);
exports.FilterDto = FilterDto;
let QueryFilterDto = class QueryFilterDto {
};
__decorate([
    graphql_1.Field({ defaultValue: 1, description: paginationDescription }),
    __metadata("design:type", Number)
], QueryFilterDto.prototype, "page", void 0);
__decorate([
    graphql_1.Field({ nullable: true, defaultValue: 10, description: paginationDescription }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], QueryFilterDto.prototype, "limit", void 0);
__decorate([
    graphql_1.Field({ nullable: true, description: orderByDescription }),
    __metadata("design:type", String)
], QueryFilterDto.prototype, "orderBy", void 0);
__decorate([
    graphql_1.Field({ nullable: true, description: qDescription }),
    __metadata("design:type", String)
], QueryFilterDto.prototype, "q", void 0);
__decorate([
    graphql_1.Field(() => [FilterDto], { nullable: true, description: filterDescription }),
    __metadata("design:type", Array)
], QueryFilterDto.prototype, "filters", void 0);
QueryFilterDto = __decorate([
    graphql_1.InputType()
], QueryFilterDto);
exports.QueryFilterDto = QueryFilterDto;
//# sourceMappingURL=queryFilter.js.map