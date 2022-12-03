import { Body, Controller, Get, NotAcceptableException, 
    Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateUsersDto, ParamUsersIdDto } from './dto/users.dto';
import { UsersService } from './users.service';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post('create')
    async createUsers(@Body() donnees: CreateUsersDto) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.usersService.create(donnees);
    }

    @Get('all')
    async findAllUsers() {
        return await this.usersService.findAll();
    }

    @Get(':user_id')
    async findUsersById(@Param() donnees: ParamUsersIdDto) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.usersService.find(donnees);
    }

    @UseGuards(AuthGuard('jwtGStock'))
    @Get('')
    async findUser(@Request() req: any) {
        const donnees = { user_id: +(req.user.id) };
        return await this.usersService.find(donnees);
    }
}
