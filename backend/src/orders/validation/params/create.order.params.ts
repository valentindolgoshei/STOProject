import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateOrderParams {
  @IsNotEmpty()
  @IsNumberString()
  userId: number;
}
