import { randAmount, randBetweenDate, randParagraph } from '@ngneat/falso';
import { define } from 'typeorm-seeding';
import { Income } from '../../income/entities/income.entity';

define(Income, () => {
  const income = new Income();
  income.actorId = 1;
  income.comment = randParagraph();
  income.amount = randAmount({ min: 50000, max: 100000 });
  income.source = 'salary';
  income.date = randBetweenDate({
    from: new Date('01/01/2022'),
    to: new Date(),
  });
  return income;
});
