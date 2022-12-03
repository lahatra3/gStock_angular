import { Body, Controller, Get, NotAcceptableException, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateStockDto } from './dto/stockages.dto';
import { StockagesService } from './stockages.service';

@ApiBearerAuth()
@Controller('stockages')
export class StockagesController {
    constructor(
        private readonly stockService: StockagesService
    ) {}

    @UseGuards(AuthGuard('jwtGStock'))
    @Post('create')
    async createStock(@Body() donnees: CreateStockDto) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.stockService.create(donnees);
    }

    @UseGuards(AuthGuard('jwtGStock'))
    @Get('all')
    async findAllStock() {
        return await this.stockService.findAll();
    }
}
