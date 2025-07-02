import { randomUUID } from 'node:crypto';

export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  description: string;
  type: TransactionType;
  value: number;
  bank: string;
  date: string;
  installments: string;
}

export interface Bank {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export const db = {
  transactions: [] as Transaction[],
  banks: [] as Bank[],
  categories: [] as Category[],
};
