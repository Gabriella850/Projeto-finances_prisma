"use client";
import React, { useEffect, useState } from 'react';
import Card from './componentes/Card';
import Header from './componentes/Header';
import Analise from './componentes/Analise';
import Categorias from './componentes/Categorias';

interface Transaction {
  desc: string;
  tipo: string;
  valor: string;
  banco: string;
  data: string;
  parcelas: string;
}

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const res = await fetch('http://localhost:3333/transactions');
        if (!res.ok) throw new Error('Falha ao buscar transações');
        const data = await res.json();
        setTransactions(data);
      } catch (err: any) {
        setError(err.message || 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }
    fetchTransactions();
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#2d3436', 
      color: 'white', 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Header />

      {/* Ícones flutuantes lado a lado */}
      <div style={{ position: 'relative', height: '0' }}>
        <div style={{
          position: 'absolute',
          right: '320px',
          top: '-60px',
          display: 'flex',
          gap: '10px',
          zIndex: 100
        }}>
          {/* Ícone de adicionar */}
          <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#00b894',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
          }}>
            <img
              src="/circle-plus.svg"
              alt="Adicionar"
              style={{ width: '24px', height: '24px' }}
            />
          </div>

          {/* Ícone da lua */}
          <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#636e72',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
          }}>
            <img
              src="/moon.svg"
              alt="Modo escuro"
              style={{ width: '24px', height: '24px' }}
            />
          </div>
        </div>
      </div>

      {/* Grade de Cards */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '30px',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          width: '100%',
          maxWidth: '900px'
        }}>
          <Card 
            title="Entrada" 
            amount="+R$7.840,56" 
            color="green" 
            showIcon={true}
            iconType="default"
          />
          <Card 
            title="Saída" 
            amount="-R$1.580,45" 
            color="red"
            showIcon={true}
            iconType="baixo"
          />
          <Card 
            title="Balanço" 
            amount="R$6.260,11" 
            color="green"
            showIcon={true}
            iconType="default"
          />
        </div>
      </div>

     {/* Seção de Análise e Categorias */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '30px',
        gap: '10px'
      }}>
        <div style={{ flex: '1 1 0%', maxWidth: '60%' }}>
          <Analise />
        </div>
        <div style={{ 
          width: '100%',
          maxWidth: '300px',
          marginTop: '58px',
          position: 'relative',
          left: '-120px'  
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '10px'
          }}>
            Categorias
          </h2>
          <div style={{
            backgroundColor: '#111',
            borderRadius: '12px',
            padding: '25px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}>
            <Categorias />
          </div>
        </div>
      </div>

      {/* Seção de Transações */}
      <div style={{ marginTop: '30px', marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '20px',
        }}>
          Transações
        </h2>

        {loading && <p>Carregando transações...</p>}
        {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

        {!loading && !error && (
          <>
            {/* Cabeçalho das colunas */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '10px',
              fontWeight: 'bold', 
              color: 'white',
              textTransform: 'uppercase', 
            }}>
              <div style={{ flex: 1 }}>Descrição</div>
              <div style={{ flex: 1 }}>Tipo</div>
              <div style={{ flex: 1 }}>Valor</div>
              <div style={{ flex: 1 }}>Banco</div>
              <div style={{ flex: 1 }}>Data</div>
              <div style={{ flex: 1 }}>Parcelas</div>
            </div>

            {/* Lista de transações */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {transactions.map((t, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  backgroundColor: '#444', 
                  padding: '10px', 
                  borderRadius: '8px',
                  marginBottom: '8px'
                }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img 
                      src="/shopping-basket.svg" 
                      alt="Ícone de compra" 
                      style={{ width: '20px', height: '20px' }} 
                    />
                    {t.desc}
                  </div>
                  <div style={{ flex: 1 }}>{t.tipo}</div>
                  <div style={{ flex: 1 }}>{t.valor}</div>
                  <div style={{ flex: 1 }}>{t.banco}</div>
                  <div style={{ flex: 1 }}>{t.data}</div>
                  <div style={{ flex: 1 }}>{t.parcelas}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
