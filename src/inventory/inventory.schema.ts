import { Schema } from 'mongoose';

export const InventorySchema = new Schema({
  stationId: { type: String, required: true },
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
});