import { ApiProperty } from "@nestjs/swagger";

export class CreateUsersDto {
    @ApiProperty()
    nom: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}


export class ParamUsersIdDto {
    @ApiProperty()
    user_id: number;
}
