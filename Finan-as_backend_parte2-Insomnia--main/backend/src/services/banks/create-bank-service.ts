// create-bank-service.ts
import { Bank } from '../../entities/bank';
import { BankRepository } from '../../repositories/bank-interface-repository';
import { randomUUID } from 'node:crypto';

export class CreateBankService {
  constructor(private bankRepo: BankRepository) {}

  async execute(data: Omit<Bank, 'id'>): Promise<Bank> {
    const bank: Bank = { id: randomUUID(), ...data };
    return await this.bankRepo.create(bank);
  }
}
