import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class GetOrderParams {
  @IsNotEmpty()
  @IsNumberString()
  orderId: number;
}
