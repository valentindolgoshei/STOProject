import { IsNotEmpty, IsNumberString } from "class-validator";

export class UpdateAutopartParams {
  @IsNotEmpty()
  @IsNumberString()
  autopartId: number;
}
