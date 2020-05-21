import { EntityRepository, Repository } from 'typeorm';

import Employer from '../models/Employer';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Employer)
class EmployersRepository extends Repository<Employer> {
  // public async getBalance(): Promise<Balance> {
  // TODO
  // }
}

export default EmployersRepository;
