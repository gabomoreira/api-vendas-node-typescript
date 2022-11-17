import { getCustomRepository } from 'typeorm';

import { ProductRepository } from '../repositories/ProductsRepository';
import AppError from '@shared/errors/AppError';
import Product from '../entities/Product';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);
    const products = await productsRepository.find();

    return products;
  }
}

export default ListProductService;
