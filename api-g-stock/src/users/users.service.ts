import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { CreateUsersDto, ParamUsersIdDto } from './dto/users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>
    ) {}

    async create(donnees: CreateUsersDto): Promise<void> {
        await this.usersRepository
        .createQueryBuilder()
        .insert()
        .into(Users)
        .values({
            nom: donnees.nom,
            email: donnees.email,
            password: () => "SHA2('"+ donnees.password +"')"
        })
        .execute();
    }

    async findAll(): Promise<Users[]> {
        return await this.usersRepository
        .createQueryBuilder('u')
        .select(['u.id as id', 'u.email as email', 'u.created_at as created_at'])
        .getRawMany();
    }

    async find(donnees: ParamUsersIdDto): Promise<Users> {
        return await this.usersRepository
        .createQueryBuilder('u')
        .select(['u.id as id', 'u.email as email', 'u.created_at as created_at'])
        .where(`u.id=:identifiant`, { identifiant: donnees.user_id })
        .getRawOne()
    }
}
