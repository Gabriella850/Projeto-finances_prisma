"use client";

import React, { useState } from "react";

type Categoria = {
  nome: string;
  numero: number;
  valor: string;
  icone: string;
};

export default function Categorias() {
  const categorias: Categoria[] = [
    { nome: 'Alimentação', numero: 10, valor: 'R$ 1508,15', icone: '/hamburger.svg' },
    { nome: 'Mercado', numero: 8, valor: 'R$ 508,80', icone: '/shopping-basket.svg' },
    { nome: 'Transporte', numero: 5, valor: 'R$ 800,00', icone: '/carro.svg' },
    { nome: 'Lazer', numero: 6, valor: 'R$ 1200,00', icone: '/coqueiro.svg' },
    { nome: 'Saúde', numero: 4, valor: 'R$ 950,00', icone: '/comprimido.svg' },
    { nome: 'Educação', numero: 7, valor: 'R$ 1100,00', icone: '/educacao.svg' },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div style={{ marginTop: '11px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '6px',
        }}
      >
        {categorias.map((cat, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
              backgroundColor: hoverIndex === idx ? '#fff' : '#2d3436',
              borderRadius: '8px',
              padding: '5px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              height: '58px',
              boxSizing: 'border-box',
              width: '100%',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            <img
              src={cat.icone}
              alt={`${cat.nome} ícone`}
              style={{ width: 18, height: 18, objectFit: 'contain' }}
            />
            <div style={{ overflow: 'hidden' }}>
              <p
                style={{
                  color: hoverIndex === idx ? '#000' : '#fff',
                  fontWeight: 'bold',
                  marginBottom: '1px',
                  fontSize: '0.8rem',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'color 0.3s ease',
                }}
              >
                {cat.nome}
              </p>
              <p style={{ color: hoverIndex === idx ? '#333' : '#b2bec3', fontSize: '0.7rem', margin: 0 }}>
                {cat.numero}
              </p>
              <p style={{ color: hoverIndex === idx ? '#c0392b' : '#e74c3c', fontSize: '0.7rem', margin: 0 }}>
                {cat.valor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
