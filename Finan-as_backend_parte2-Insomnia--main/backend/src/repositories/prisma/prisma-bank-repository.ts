import { prisma } from '../../../lib/prisma'; // seu cliente Prisma configurado
import { Bank } from '@prisma/client';     // tipo gerado pelo Prisma
import { BankRepository } from '../bank-interface-repository'; // sua interface

export class PrismaBankRepository implements BankRepository {
  async list(): Promise<Bank[]> {
    return await prisma.bank.findMany();
  }

  async create(data: Omit<Bank, 'id'>): Promise<Bank> {
    return await prisma.bank.create({ data });
  }

  async update(id: string, data: Partial<Omit<Bank, 'id'>>): Promise<Bank | null> {
    try {
      return await prisma.bank.update({
        where: { id },
        data,
      });
    } catch {
      return null;
    }
  }

  async delete(id: string): Promise<void> {
    await prisma.bank.delete({ where: { id } });
  }
}
