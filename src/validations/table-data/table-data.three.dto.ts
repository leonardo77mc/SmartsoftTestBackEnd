import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DataThreeDto {
  @ApiProperty() @IsNumber() @IsNotEmpty() T3C1: number;
  @ApiProperty() @IsString() @IsNotEmpty() T3C2: string;
  @ApiProperty() @IsDate() @IsNotEmpty() T3C3: Date;
}