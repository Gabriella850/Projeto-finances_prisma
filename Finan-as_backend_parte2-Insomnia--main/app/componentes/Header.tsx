"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ 
  width: '70px',       // igual à largura da imagem
  position: 'relative', // habilita o 'right' funcionar
  right: '-270px',       // move pra direita, ajusta o valor pra o quanto quiser
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
}}>
      <Image
        src={hover ? "/porquinho-branco.svg" : "/porquinho-verde.svg"}
        alt="Porquinho"
        width={70}
        height={70}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
}
