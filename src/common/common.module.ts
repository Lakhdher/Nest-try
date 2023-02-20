import { Global, Module } from '@nestjs/common';
import { v4 } from 'uuid';

@Global()
@Module({
    providers: [{
        provide: 'UUID',
        useValue: v4,
    }],
    exports: ['UUID']
})
export class CommonModule {}
