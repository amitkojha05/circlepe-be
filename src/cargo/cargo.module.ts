import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CargoService } from './cargo.service';
import { CargoController } from './cargo.controller';
import { CargoSchema } from './cargo.schema';
import { RealtimeGateway } from '../realtime/realtime.gateway';  // Import WebSocket Gateway

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cargo', schema: CargoSchema }]),
  ],
  controllers: [CargoController],
  providers: [CargoService, RealtimeGateway],  // Add RealtimeGateway to providers
})
export class CargoModule {}
