import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { AuthDto, AuthResponse, AuthResponseToken } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        private jwtService: JwtService
    ) {}

    private async signUsersToken(donnees: AuthResponse): Promise<string> {
        return await this.jwtService.signAsync({
            id: donnees.id,
            email: donnees.email
        })
    }

    async signIn(donnees: AuthDto): Promise<AuthResponseToken> {
        const response: Users = await this.usersRepository
            .createQueryBuilder('u')
            .select(['u.id as id', 'u.email as email'])
            .where(`u.email=:email AND u.password=SHA2(:password, 256)`, {
                email: donnees.email,
                password: donnees.password
            })
            .getRawOne();
        if(!response) throw new UnauthorizedException('Credentials incorrects !');
        return {
            access_token: await this.signUsersToken(response)
        };
    }
}
