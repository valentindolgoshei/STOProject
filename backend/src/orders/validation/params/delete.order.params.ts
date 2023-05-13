import { IsNotEmpty, IsNumberString } from 'class-validator';

export class DeleteOrderParams {
  @IsNotEmpty()
  @IsNumberString()
  orderId: number;
}
