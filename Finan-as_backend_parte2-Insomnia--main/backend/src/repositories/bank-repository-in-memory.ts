import { BankRepository } from './bank-interface-repository';
import { Bank } from '../entities/bank';
import { randomUUID } from 'node:crypto';

export class InMemoryBankRepository implements BankRepository {
  private banks: Bank[] = [];

  async list(): Promise<Bank[]> {
    return Promise.resolve(this.banks);
  }

  async create(data: Omit<Bank, 'id'>): Promise<Bank> {
    const bank: Bank = { id: randomUUID(), ...data };
    this.banks.push(bank);
    return Promise.resolve(bank);
  }

  async update(id: string, data: Partial<Bank>): Promise<Bank | null> {
    const index = this.banks.findIndex(b => b.id === id);
    if (index === -1) return Promise.resolve(null);
    this.banks[index] = { ...this.banks[index], ...data };
    return Promise.resolve(this.banks[index]);
  }

  async delete(id: string): Promise<void> {
    this.banks = this.banks.filter(b => b.id !== id);
    return Promise.resolve();
  }
}
  