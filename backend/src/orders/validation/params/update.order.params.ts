import { IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateOrderParams {
  @IsNotEmpty()
  @IsNumberString()
  userId: number;

  @IsNotEmpty()
  @IsNumberString()
  orderId: number;
}
