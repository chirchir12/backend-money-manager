import { IsDate, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateIncomeDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  source: string;

  @IsNotEmpty()
  comment: string;

  @IsDateString()
  date: Date;
}
