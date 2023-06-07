import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  auto: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  defect: string;

  @IsNotEmpty()
  @IsString()
  status: string;

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
  @IsString()
  customer: string;
}
