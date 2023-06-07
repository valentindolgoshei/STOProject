import { IsNotEmpty, IsNumberString } from 'class-validator';

export class GetAutopartParams {
  @IsNotEmpty()
  @IsNumberString()
  autopartId: string;
}
