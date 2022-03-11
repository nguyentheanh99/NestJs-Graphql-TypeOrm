export declare class FilterDto {
    field: string;
    data: string;
}
export declare class QueryFilterDto {
    page: number;
    limit: number;
    orderBy?: string;
    q?: string;
    filters?: FilterDto[];
    relations?: string[];
}
