import { Type } from 'class-transformer';
import { InputType, Field, registerEnumType } from '@nestjs/graphql';

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

@InputType()
export class FilterDto {
  @Field()
  field: string;

  @Field()
  data: string;
}

@InputType()
export class QueryFilterDto {
  @Field({ defaultValue: 1, description: paginationDescription })
  page: number;

  @Field({ nullable: true, defaultValue: 10, description: paginationDescription })
  @Type(() => Number)
  limit: number;

  @Field({ nullable: true, description: orderByDescription })
  orderBy?: string;

  @Field({ nullable: true, description: qDescription })
  q?: string;

  @Field(() => [FilterDto], { nullable: true, description: filterDescription })
  filters?: FilterDto[];

  relations?: string[];
}
