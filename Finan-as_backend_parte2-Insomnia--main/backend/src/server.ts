import Fastify from 'fastify';

import { transactionsRoutes } from './routes/transactions-route';
import { banksRoutes } from './routes/bank-route';
import { categoriesRoutes } from './routes/categories-route';

async function bootstrap() {
  const app = Fastify();

  app.register(transactionsRoutes);
  app.register(banksRoutes);
  app.register(categoriesRoutes);

  await app.listen({ port: 3001 });
console.log('Server running on http://localhost:3001');

}

bootstrap();
