import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateIncomeDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  source: string;

  @IsNotEmpty()
  comment: string;
}
