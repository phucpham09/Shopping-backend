import { IsNumber, IsPositive } from 'class-validator';

export class IdDto {
  @IsNumber()
  @IsPositive()
  readonly id: number;
}
