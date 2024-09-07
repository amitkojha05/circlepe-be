import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CreateCargoDto } from './create-cargo.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';  // Import JWT Guard

@Controller('cargo')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  // Protect this route with JWT
  @UseGuards(JwtAuthGuard)
  @Post()
  async createCargo(@Body() createCargoDto: CreateCargoDto) {
    return this.cargoService.create(createCargoDto);
  }

  // Protect this route with JWT
  @UseGuards(JwtAuthGuard)
  @Get(':shipmentId')
  async getCargo(@Param('shipmentId') shipmentId: string) {
    return this.cargoService.findOne(shipmentId);
  }
}