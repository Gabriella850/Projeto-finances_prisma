import { TransactionRepository } from './transaction-interface-repository';
import { Transaction } from '../entities/transaction';
import { randomUUID } from 'node:crypto';

export class InMemoryTransactionRepository implements TransactionRepository {
  private transactions: Transaction[] = [];

  list() {
    return this.transactions;
  }

  create(data: Omit<Transaction, 'id'>) {
    const transaction: Transaction = { id: randomUUID(), ...data };
    this.transactions.push(transaction);
    return transaction;
  }

  update(id: string, data: Partial<Transaction>) {
    const index = this.transactions.findIndex(t => t.id === id);
    if (index === -1) return null;
    this.transactions[index] = { ...this.transactions[index], ...data };
    return this.transactions[index];
  }

  delete(id: string) {
    this.transactions = this.transactions.filter(t => t.id !== id);
  }
}
