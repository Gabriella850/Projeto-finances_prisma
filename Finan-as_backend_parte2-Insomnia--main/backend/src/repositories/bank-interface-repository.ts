import { Bank } from '../entities/bank';

export interface BankRepository {
  list(): Promise<Bank[]>;
  create(bank: Omit<Bank, 'id'>): Promise<Bank>;
  update(id: string, data: Partial<Bank>): Promise<Bank | null>;
  delete(id: string): Promise<void>;
}
