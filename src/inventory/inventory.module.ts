import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { InventorySchema } from './inventory.schema';
import { RealtimeGateway } from '../realtime/realtime.gateway';  // Import WebSocket Gateway

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Inventory', schema: InventorySchema }]),
  ],
  controllers: [InventoryController],
  providers: [InventoryService, RealtimeGateway],  // Add RealtimeGateway to providers
})
export class InventoryModule {}