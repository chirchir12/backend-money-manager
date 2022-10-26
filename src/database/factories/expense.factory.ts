import {
  randAmount,
  randBetweenDate,
  randNumber,
  randParagraph,
} from '@ngneat/falso';
import { Connection } from 'typeorm';
import { define } from 'typeorm-seeding';
import { Expense } from '../../expense/entities/expense.entity';

define(Expense, () => {
  const expense = new Expense();
  const categories = [1, 8, 9, 10, 11];
  expense.actorId = 1;
  expense.category = categories[randNumber({ min: 0, max: categories.length })];
  expense.amount = randAmount({ min: 100, max: 20000 });
  expense.comment = randParagraph();
  expense.date = randBetweenDate({
    from: new Date('01/01/2022'),
    to: new Date(),
  });

  return expense;
});
