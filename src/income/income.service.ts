import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { Income } from './entities/income.entity';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private readonly incomeRepository: Repository<Income>,
  ) {}
  create(createIncomeDto: CreateIncomeDto, userId) {
    return this.incomeRepository.save({ ...createIncomeDto, actorId: userId });
  }

  async findAll(query: { pageNumber: string; pageSize: string } | null) {
    const take: number = +query.pageSize || 25;
    const page: number = +query.pageNumber || 1;
    const skip = (page - 1) * take;
    const [result, total] = await this.incomeRepository.findAndCount({
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
        pagesTotal: Math.round(total / take),
      },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} income`;
  }

  update(id: number, updateIncomeDto: UpdateIncomeDto) {
    return `This action updates a #${id} income`;
  }
}
