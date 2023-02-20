import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './todo/todo.module';
import { PremierModule } from './premier/premier.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ ToDoModule, PremierModule, CommonModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
