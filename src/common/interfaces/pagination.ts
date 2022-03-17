import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
class MetaPaginationInterface {
  @Field()
  totalItems: number;

  @Field()
  itemCount: number;

  @Field()
  itemsPerPage: number;

  @Field()
  totalPages: number;

  @Field()
  currentPage: number;
}

export function PaginationInterface<ItemsInterface>(Items: any): any {
  //Create Abstract class
  @ObjectType({ isAbstract: true })
  abstract class PaginationInterface {
    @Field(() => MetaPaginationInterface)
    meta: MetaPaginationInterface;

    @Field(() => [Items])
    items: ItemsInterface[];
    
  }
  return PaginationInterface;
}
