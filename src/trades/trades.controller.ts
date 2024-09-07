import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TradesService } from './trades.service';
import { CreateTradeDto } from './create-trade.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';  // Import JWT Guard

@Controller('trades')
export class TradesController {
  constructor(private readonly tradesService: TradesService) {}

  // Protect this route with JWT
  @UseGuards(JwtAuthGuard)
  @Post()
  async createTrade(@Body() createTradeDto: CreateTradeDto) {
    return this.tradesService.create(createTradeDto);
  }

  // Protect this route with JWT
  @UseGuards(JwtAuthGuard)
  @Get(':transactionId')
  async getTrade(@Param('transactionId') transactionId: string) {
    return this.tradesService.findOne(transactionId);
  }
}