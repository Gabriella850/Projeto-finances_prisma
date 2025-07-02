"use client";

import React, { useState } from "react";

interface CardProps {
  title: string;
  amount: string;
  color?: "green" | "red";
  showIcon?: boolean;
  iconType?: 'default' | 'baixo';
}

const Card: React.FC<CardProps> = ({
  title,
  amount,
  color,
  showIcon = false,
  iconType = 'default'
}) => {
  const [isHoveredContainer, setIsHoveredContainer] = useState(false);
  const [isHoveredAmount, setIsHoveredAmount] = useState(false);

  // Identifica se é balanço
  const isBalanco = title.toLowerCase() === "balanço" || title.toLowerCase() === "balanco";

  // Fundo verde só se for balanço e estiver hover no container
  const backgroundColor =
    isBalanco && isHoveredContainer
      ? "#2ecc71"
      : "#111";

  // Cor do número:
  // Balanço sempre branco
  // Entrada (green) branco normal, verde no hover do número
  // Saída (red) branco normal, vermelho no hover do número
  // Caso contrário branco
  const amountColor =
    isBalanco
      ? "#ffffff"
      : color === "green"
      ? isHoveredAmount
        ? "#2ecc71"
        : "#ffffff"
      : color === "red"
      ? isHoveredAmount
        ? "#e74c3c"
        : "#ffffff"
      : "#ffffff";

  const iconConfig = {
    default: {
      src: "/ícone.png",
      size: { width: '60px', height: '60px' },
      position: { top: '12px', right: '12px' }
    },
    baixo: {
      src: "/iconebaixo.png",
      size: { width: '38px', height: '38px' },
      position: { top: '15px', right: '15px' }
    }
  };

  const currentIcon = iconConfig[iconType];

  return (
    <div
      onMouseEnter={() => setIsHoveredContainer(true)}
      onMouseLeave={() => {
        setIsHoveredContainer(false);
        setIsHoveredAmount(false);
      }}
      style={{
        backgroundColor,
        color: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        minHeight: '140px',
        transition: 'background-color 0.3s ease'
      }}
    >
      {showIcon && (
        <img
          src={currentIcon.src}
          alt="Ícone"
          style={{
            position: 'absolute',
            ...currentIcon.position,
            ...currentIcon.size,
            filter: 'brightness(0) invert(1)',
            objectFit: 'contain',
            transition: 'all 0.3s ease'
          }}
        />
      )}
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginRight: showIcon ? '40px' : '0'
        }}
      >
        {title}
      </h2>
      <p
        onMouseEnter={() => setIsHoveredAmount(true)}
        onMouseLeave={() => setIsHoveredAmount(false)}
        style={{
          fontSize: '1.25rem',
          marginTop: '10px',
          color: amountColor,
          fontWeight: 'bold',
          cursor: 'default',
          transition: 'color 0.3s ease'
        }}
      >
        {amount}
      </p>
    </div>
  );
};

export default Card;
