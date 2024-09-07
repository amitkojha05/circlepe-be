import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cargo } from './cargo.interface';
import { RealtimeGateway } from '../realtime/realtime.gateway';  // Import WebSocket Gateway

@Injectable()
export class CargoService {
  constructor(
    @InjectModel('Cargo') private readonly cargoModel: Model<Cargo>,
    private readonly realtimeGateway: RealtimeGateway,  // Inject RealtimeGateway
  ) {}

  async create(cargoData: Cargo): Promise<Cargo> {
    const newCargo = new this.cargoModel(cargoData);
    const result = await newCargo.save();

    // Emit real-time update when cargo is created
    this.realtimeGateway.emitCargoUpdate(result);

    return result;
  }

  async findOne(shipmentId: string): Promise<Cargo> {
    return this.cargoModel.findOne({ shipmentId }).exec();
  }
}
