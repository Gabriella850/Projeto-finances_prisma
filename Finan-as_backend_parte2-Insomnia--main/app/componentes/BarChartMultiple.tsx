"use client" // ISSO É CRUCIAL

import React, { useEffect, useState } from "react" // Importe useEffect e useState
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend } from "recharts" // Importa TUDO do Recharts diretamente

const data = [
  { month: "Jan", gastos: 186, quantidade: 80 },
  { month: "Feb", gastos: 305, quantidade: 200 },
  { month: "Mar", gastos: 237, quantidade: 120 },
  { month: "Apr", gastos: 73, quantidade: 190 },
  { month: "May", gastos: 209, quantidade: 130 },
  { month: "Jun", gastos: 214, quantidade: 140 },
]

export default function BarChartMultiple() {
  // Estado para controlar se o componente já foi montado no cliente
  const [hasMounted, setHasMounted] = useState(false)

  // useEffect para setar hasMounted para true APENAS no cliente, após a montagem
  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Se o componente ainda não foi montado no cliente, não renderize o gráfico.
  // Isso evita que o Recharts tente renderizar no SSR e cause o erro de hidratação.
  if (!hasMounted) {
    return null // Retorna nulo ou um placeholder enquanto o gráfico não está pronto.
                // Ex: <div style={{ height: 300, width: 500, background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Carregando gráfico...</div>
  }

  // Se o componente já foi montado no cliente, renderize o gráfico normalmente.
  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <h2 style={{ color: "#fff", marginBottom: "10px" }}>Bar Chart - Multiple</h2>
      <p style={{ color: "#ccc", marginBottom: "20px" }}>January - June 2024</p>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <Tooltip />
        <Legend />
        <Bar dataKey="gastos" fill="#8884d8" radius={4} name="Gastos" />
        <Bar dataKey="quantidade" fill="#82ca9d" radius={4} name="Quantidade" />
      </BarChart>
    </div>
  )
}