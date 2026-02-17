import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KitchenModule } from './kitchen/kitchen.module';
import { BillModule } from './bill/bill.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';

@Module({
  imports: [KitchenModule, BillModule],
  // controllers: [AppController],
  // providers: [AppService],
 

})
export class AppModule {
  configure(consumer : MiddlewareConsumer)
  {
    consumer.apply(LoggerMiddleware)
    .forRoutes({path:'*' , method:RequestMethod.ALL})
  }
}
