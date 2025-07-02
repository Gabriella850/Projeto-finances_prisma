import { Transaction } from '../entities/transaction';

export interface TransactionRepository {
  list(): Promise<Transaction[]>;
  create(data: Omit<Transaction, 'id'>): Promise<Transaction>;
  update(id: string, data: Partial<Transaction>): Promise<Transaction | null>;
  delete(id: string): Promise<void>;
}
