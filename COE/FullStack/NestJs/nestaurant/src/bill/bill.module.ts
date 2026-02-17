import { Module } from '@nestjs/common';
import { BillsService } from './bills/bills.service';
import { BillsController } from './bills/bills.controller';

import { KitchenModule } from 'src/kitchen/kitchen.module';

@Module({
  imports :[KitchenModule],
  providers: [BillsService],
  controllers: [BillsController]
})
export class BillModule {}
