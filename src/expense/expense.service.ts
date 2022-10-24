import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepo: Repository<Expense>,
  ) {}
  async create(
    createExpenseDto: CreateExpenseDto,
    userId: number,
  ): Promise<Expense> {
    return await this.expenseRepo.save({
      ...createExpenseDto,
      actorId: userId,
    });
  }

  async findAll(query: { pageNumber: string; pageSize: string } | null) {
    const take: number = +query.pageSize || 25;
    const page: number = +query.pageNumber || 1;
    const skip = (page - 1) * take;
    const [result, total] = await this.expenseRepo.findAndCount({
      order: { date: 'DESC' },
      take,
      skip,
    });

    if (!total || total === 0) {
      throw new NotFoundException('Not found');
    }

    return {
      result,
      pagination: {
        pageNumber: page,
        pageSize: take,
        recordTotal: total,
        pagesTotal: Math.ceil(total / take),
      },
    };
  }

  async findOne(id: number) {
    const expense = await this.expenseRepo.findOne({
      where: { id },
    });
    if (!expense) {
      throw new NotFoundException('Not found');
    }
    return expense;
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    try {
      const expense = await this.findOne(id);
      const updatedExpense = Object.assign(
        {},
        { ...expense },
        updateExpenseDto,
      );
      return await this.expenseRepo.save(updatedExpense);
    } catch (error) {
      throw error;
    }
  }
}
