import React from 'react'
import ScientistCard from './components/ScientistCard.jsx'

const data = [
  {
    name: 'Maria Skłodowska-Curie',
    profession: 'física y química',
    awards: '4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)',
    discovery: 'polonio (elemento químico)',
    photo: '/assets/marie.svg'
  },
  {
    name: 'Katsuko Saruhashi',
    profession: 'geoquímica',
    awards: '2 (Premio Miyake de geoquímica, Premio Tanaka)',
    discovery: 'un método para medir el dióxido de carbono en el agua de mar',
    photo: '/assets/katsuko.svg'
  }
]

export default function App(){
  return (
    <main className="container">
      <h1>Científicos Notables</h1>
      {data.map((s, i) => <ScientistCard key={i} {...s} />)}
    </main>
  )
}
