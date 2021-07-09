import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class DataTwoDto {
  @ApiProperty() @IsNumber() @IsNotEmpty() T2C1: number;
  @ApiProperty() @IsString() @IsOptional() T2C2: string;
  @ApiProperty() @IsNumber() @IsOptional() T2C3: number;
  @ApiProperty() @IsDate() @IsNotEmpty() T2C4: Date;
  @ApiProperty() @IsNumber() @IsNotEmpty() T2C5: number;
}