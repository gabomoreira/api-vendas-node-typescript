import { Router } from 'express';

import productsRouter from '@modules/products/routes/products.routes';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default routes;
