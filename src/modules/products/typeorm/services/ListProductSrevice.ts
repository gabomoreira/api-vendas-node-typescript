import { getCustomRepository } from 'typeorm';

import { ProductRepository } from '../repositories/ProductsRepository';
import AppError from '@shared/errors/AppError';
import Product from '../entities/Product';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);
    const products = await productsRepository.find();

    if (!products) {
      throw new AppError('There is no products');
    }

    return products;
  }
}

export default ListProductService;
