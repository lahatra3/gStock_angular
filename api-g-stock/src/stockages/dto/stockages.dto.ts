import { ApiProperty } from "@nestjs/swagger";

export class CreateStockDto {
    @ApiProperty()
    nom: string;
    
    @ApiProperty()
    description: string;
}
