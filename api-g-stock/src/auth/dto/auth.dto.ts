import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}

export class AuthResponse {
    id: number;
    email: string;
}

export class AuthResponseToken {
    access_token: string;
}
