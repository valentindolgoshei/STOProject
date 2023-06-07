import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAutopartDto {
  @IsNotEmpty()
  @IsString()
  article: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  yearOfProduction: Date;

  @IsNotEmpty()
  @IsString()
  vehicle: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}