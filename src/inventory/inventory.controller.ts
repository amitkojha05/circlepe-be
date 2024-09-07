import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './create-inventory.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';  // Import JWT Guard

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  // Protect this route with JWT
  @UseGuards(JwtAuthGuard)
  @Post()
  async createInventory(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  // Protect this route with JWT
  @UseGuards(JwtAuthGuard)
  @Get(':stationId')
  async getInventory(@Param('stationId') stationId: string) {
    return this.inventoryService.findOne(stationId);
  }
}