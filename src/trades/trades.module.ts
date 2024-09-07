import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TradesService } from './trades.service';
import { TradesController } from './trades.controller';
import { TradeSchema } from './trades.schema';
import { RealtimeGateway } from '../realtime/realtime.gateway';  // Import WebSocket Gateway

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Trade', schema: TradeSchema }]),
  ],
  controllers: [TradesController],
  providers: [TradesService, RealtimeGateway],  // Add RealtimeGateway to providers
})
export class TradesModule {}