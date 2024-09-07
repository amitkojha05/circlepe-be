import { Schema } from 'mongoose';

export const TradeSchema = new Schema({
  transactionId: { type: String, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});