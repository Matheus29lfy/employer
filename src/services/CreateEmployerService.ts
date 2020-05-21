// import AppError from '../errors/AppError';
import { getCustomRepository, getRepository } from 'typeorm';
import Employer from '../models/Employer';
import EmployersRepository from '../repositories/EmployersRepository';

interface Request {
  name: string;
  salary: number;
  age: number;
}

class CreateTransactionService {
  public async execute({ name, salary, age }: Request): Promise<Employer> {
    const employersRepository = getCustomRepository(EmployersRepository);

    const employer = employersRepository.create({
      name,
      salary,
      age,
    });

    await employersRepository.save(employer);

    const { id } = await employersRepository.find();

    if (id) employer.id = id;

    return employer;
  }
}

export default CreateTransactionService;
