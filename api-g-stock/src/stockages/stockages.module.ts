import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stockages } from 'src/entities/Stockages';
import { StockagesController } from './stockages.controller';
import { StockagesService } from './stockages.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stockages])
  ],
  controllers: [StockagesController],
  providers: [StockagesService]
})
export class StockagesModule {}
