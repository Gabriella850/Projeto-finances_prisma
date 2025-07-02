"use client"

import BarChartMultiple from "./BarChartMultiple"


export default function Analise() {
  return (
    <div style={{
      marginTop: '50px',
      maxWidth: '590px',
      margin: '50px auto 0 auto',
    }}>
      <h2 style={{
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '20px',
      }}>
        Análise
      </h2>

      <div style={{
        backgroundColor: '#000000',
        borderRadius: '18px',
        padding: '30px',
        color: '#fff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
      }}>
        <BarChartMultiple />
      </div>
    </div>
  )
}
