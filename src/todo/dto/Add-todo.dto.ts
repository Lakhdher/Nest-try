import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class AddTodoDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(4, {
        message: "Name is too short...minimum length is 6"
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

}