import { IsNumber, IsOptional } from "class-validator";

// create the class
export class GetPaginatedTodoDto {
    // add the properties
    @IsNumber()
    @IsOptional()
    page: number;

    @IsNumber()
    @IsOptional()
    item: number;
}