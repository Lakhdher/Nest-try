import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNotEmpty, MinLength, IsEnum, IsOptional} from "class-validator";
import { todo } from "../entities/todoEntity";
import { todoStatusEnum } from "../entities/todoStatusEnum";
import { AddTodoDto } from "./Add-todo.dto";

export class updateTodoDto extends PartialType(AddTodoDto){

    // @IsString()
    // @IsNotEmpty()
    // @MinLength(4, {
    //     message: "Name is too short...minimum length is 6"
    // })
    // name: string;

    // @IsString()
    // @IsNotEmpty()
    // description: string;

    @IsEnum(todoStatusEnum)
    @IsOptional()
    status: todoStatusEnum;
}