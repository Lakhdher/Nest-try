import { Global, Module } from '@nestjs/common';
import { ToDoController } from './todo.controller';
import { TodoService } from './todo.service';

@Global()
@Module({
  controllers: [ToDoController],
  providers: [TodoService]
})
export class ToDoModule {}
