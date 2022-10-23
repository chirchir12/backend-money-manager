import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepo.save({
      ...createCategoryDto,
      name: createCategoryDto.name.toLowerCase(),
    });
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepo.find();
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepo.findOne({ where: { id } });

    if (!category) {
      throw new NotFoundException('not found');
    }
    return category;
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    try {
      const category = await this.findOne(id);
      const updateCategory = Object.assign({}, category, {
        ...updateCategoryDto,
        name: updateCategoryDto.name.toLowerCase(),
      });

      return this.categoryRepo.save(updateCategory);
    } catch (error) {
      throw error;
    }
  }

  async findByName(name: string) {
    return await this.categoryRepo.findOne({
      where: { name: name.toLowerCase() },
    });
  }

  async remove(id: number) {
    try {
      const category = await this.findOne(id);
      return await this.categoryRepo.remove(category);
    } catch (error) {
      throw error;
    }
  }
}
