import { Router } from 'express';

// import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateEmployerService from '../services/CreateEmployerService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const employersRouter = Router();

employersRouter.get('/', async (request, response) => {
  // TODO
});

employersRouter.post('/post', async (request, response) => {
  const { name, salary, age } = request.body;

  const createEmployer = new CreateEmployerService();

  const employer = createEmployer.execute({
    name,
    salary,
    age,
  });

  return response.json({ employer });
});

employersRouter.delete('/:id', async (request, response) => {
  // TODO
});

employersRouter.put('/import', async (request, response) => {
  // TODO
});

export default employersRouter;
