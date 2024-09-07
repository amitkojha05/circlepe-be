import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory } from './inventory.interface';
import { RealtimeGateway } from '../realtime/realtime.gateway';  // Import WebSocket Gateway

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel('Inventory') private readonly inventoryModel: Model<Inventory>,
    private readonly realtimeGateway: RealtimeGateway,  // Inject RealtimeGateway
  ) {}

  async create(inventoryData: Inventory): Promise<Inventory> {
    const newInventory = new this.inventoryModel(inventoryData);
    const result = await newInventory.save();

    // Emit real-time update when inventory is created
    this.realtimeGateway.emitInventoryUpdate(result);

    return result;
  }

  async findOne(stationId: string): Promise<Inventory> {
    return this.inventoryModel.findOne({ stationId }).exec();
  }
}