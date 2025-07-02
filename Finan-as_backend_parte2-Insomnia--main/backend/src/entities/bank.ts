// entities/bank.ts

export interface Bank {
  id: string;
  name: string;
  code: string;       // código do banco (ex: '001' para Banco do Brasil)
  agency: string;     // número da agência
  accountNumber: string; // número da conta
}
