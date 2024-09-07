import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TradesModule } from './trades/trades.module';  // Import other modules as well
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Replace with your MongoDB connection string
    TradesModule, AuthModule,  // Ensure the TradesModule is imported here
    // Import other modules as needed (CargoModule, InventoryModule, etc.)
  ],
})
export class AppModule {}