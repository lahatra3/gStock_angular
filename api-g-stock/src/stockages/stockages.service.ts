import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stockages } from 'src/entities/Stockages';
import { Repository } from 'typeorm';
import { CreateStockDto } from './dto/stockages.dto';

@Injectable()
export class StockagesService {
    constructor(
        @InjectRepository(Stockages)
        private stockRepository: Repository<Stockages>
    ) {}

    async create(donnees: CreateStockDto): Promise<void> {
        await this.stockRepository
        .createQueryBuilder()
        .insert()
        .into(Stockages)
        .values({
            nom: donnees.nom,
            description: donnees.description
        })
        .execute();
    }

    async findAll(): Promise<Stockages[]> {
        return await this.stockRepository
        .createQueryBuilder('s')
        .select([
            's.id as id', 's.nom as nom', 
            's.description as description',
            's.created_at as created_at'
        ])
        .getRawMany();
    }
}
