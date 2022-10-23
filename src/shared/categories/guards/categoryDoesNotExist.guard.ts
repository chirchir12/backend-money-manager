import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CategoriesService } from '../categories.service';

@Injectable()
export class CategoryExist implements CanActivate {
  constructor(private readonly categoryService: CategoriesService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateName(request);
  }

  private async validateName(request): Promise<boolean> {
    const category = await this.categoryService.findByName(request.body.name);
    if (category) {
      throw new BadRequestException('Category name already exist');
    }
    return true;
  }
}
