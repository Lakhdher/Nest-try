import { Controller, ParseIntPipe } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Body, Delete, Param, Post, Put, Query } from '@nestjs/common/decorators';
import { AddTodoDto } from './dto/Add-todo.dto';
import { GetPaginatedTodoDto } from './dto/Get-paginated-todo.dto';
import { updateTodoDto } from './dto/Update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class ToDoController {

    constructor(
        private todoService: TodoService
    ) {}

    @Get()
    getTodos(
        @Query() query : GetPaginatedTodoDto
    ){
        console.log(query)
        return(this.todoService.getTodos());    
    }

    @Get('/:id')
    gettodobyid(
        @Param("id", ParseIntPipe) id
    ){
        return(this.todoService.getTodoById(id));
    }

    @Post()
    addTodo(
        @Body() newtodo: AddTodoDto,
    ) {
        return(this.todoService.addTodo(newtodo));
    }
    
    @Delete("/:id")
    deleteTodo(
        @Param("id", ParseIntPipe) id
    ) {
        return(this.todoService.deleteTodoById(id));
    }

    @Put("/:id")
    updateTodos(
        @Param("id", ParseIntPipe) id,
        @Body() newtodo: updateTodoDto
    ) {
        return(this.todoService.updateTodoById(id, newtodo));
    }
}
