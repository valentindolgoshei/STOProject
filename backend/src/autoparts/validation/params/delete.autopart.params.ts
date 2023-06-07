import { IsNotEmpty, IsNumberString } from 'class-validator';

export class DeleteAutopartParams {
  @IsNumberString()
  @IsNotEmpty()
  autopartId: number;
}
