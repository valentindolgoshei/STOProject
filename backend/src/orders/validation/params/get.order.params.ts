import { IsNotEmpty, IsNumberString } from 'class-validator';

export class GetOrderParams {
  @IsNotEmpty()
  @IsNumberString()
  orderId: number;
}
