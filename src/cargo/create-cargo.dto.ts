import { IsString, IsNumber } from 'class-validator';

export class CreateCargoDto {
  @IsString()  // shipmentId must be a string
  shipmentId: string;

  @IsString()  // description must be a string
  description: string;

  @IsNumber()  // weight must be a number
  weight: number;

  @IsString()  // destination must be a string
  destination: string;
}