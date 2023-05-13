import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  auto: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsDateString()
  receivedOn: Date;

  @IsNotEmpty()
  @IsDateString()
  expectedCompletionOn: Date;

  @IsNotEmpty()
  @IsNumber()
  expectedCost: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumberString()
  customer: string;
}
