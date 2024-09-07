import { Schema } from 'mongoose';

export const CargoSchema = new Schema({
  shipmentId: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  destination: { type: String, required: true },
});