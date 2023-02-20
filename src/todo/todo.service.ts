import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from './dto/Add-todo.dto';
import { updateTodoDto } from './dto/Update-todo.dto';
import { todo } from './entities/todoEntity';
import { todoStatusEnum } from './entities/todoStatusEnum';



@Injectable()
export class TodoService {
    todos: todo[] = [];

    constructor(@Inject('UUID') private readonly uuid: typeof import('uuid')) {
        this.todos = [];
    }

    getTodos(): todo[] {
        return this.todos;
    }

    getTodoById(id: number): todo {
        const todo = this.todos.find((todo) => todo.id === id);
        if(todo){
            return(todo)
            }else{
                throw new NotFoundException("Todo not found");
            }
    }

    addTodo(newTodo: AddTodoDto): todo {
        const ActualTodo = new todo();
        const {name, description} = newTodo;
        ActualTodo.name = name;
        ActualTodo.description = description;
        if(this.todos.length){
            ActualTodo.id = this.todos[this.todos.length-1].id + 1;
        }else{
            ActualTodo.id = 1;
        }
        ActualTodo.created_at = new Date();
        ActualTodo.status = todoStatusEnum.waiting;
        ActualTodo.uuid = this.uuid();
        this.todos.push(ActualTodo);
        return(ActualTodo);
    }

    deleteTodoById(id: number) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if(index >= 0){
            this.todos.splice(index, 1);
        }else{
            throw new NotFoundException("Todo not found");
        }
        return {
            message: "Todo deleted",
            count: 1
        }
    }

    updateTodoById(id: number, newTodo: Partial<updateTodoDto>) {
        const todo = this.getTodoById(id);
        todo.name = newTodo.name? newTodo.name: todo.name;
        todo.description = newTodo.description? newTodo.description: todo.description;
        todo.status = newTodo.status? newTodo.status: todo.status;
        return(todo);
    }

}
