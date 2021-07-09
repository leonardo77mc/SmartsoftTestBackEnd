import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class DataOneDto {
  @ApiProperty() @IsNumber() @IsNotEmpty() T1C1: number;
  @ApiProperty() @IsString() @IsNotEmpty() T1C2: string;
  @ApiProperty() @IsNumber() @IsOptional() T1C3: number;
  @ApiProperty() @IsDate() @IsOptional() T1C4: Date;
}

