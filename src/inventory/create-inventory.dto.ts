import { IsString, IsNumber } from 'class-validator';

export class CreateInventoryDto {
  @IsString()  // stationId must be a string
  stationId: string;

  @IsString()  // item must be a string
  item: string;

  @IsNumber()  // quantity must be a number
  quantity: number;
}