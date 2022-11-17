import { getCustomRepository } from 'typeorm';

import { ProductRepository } from '../repositories/ProductsRepository';
import AppError from '@shared/errors/AppError';
import Product from '../entities/Product';

interface IRequest {
  id: string;
}

class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    return product;
  }
}

export default ShowProductService;
