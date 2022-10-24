import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateExpenseDto {
  @IsNumber()
  @IsNotEmpty()
  readonly category: number;

  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @IsNotEmpty()
  readonly comment: string;

  @IsDateString()
  @IsNotEmpty()
  readonly date: Date;
}
