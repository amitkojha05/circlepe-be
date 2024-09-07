import { IsString, IsNumber } from 'class-validator';

export class CreateTradeDto {
  @IsString()
  transactionId: string;

  @IsNumber()
  amount: number;
}