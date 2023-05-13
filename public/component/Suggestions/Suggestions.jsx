import Card from './cards/Card.jsx'
import './Suggestions.css'

export default function Suggestions (prop) {
  return (
    <div className='allcards'>
      {prop.datos.map((datos) => (
        <Card
          key={datos.usuario}
          image={datos.imagen}
          nombre={datos.nombre}
          usuario={datos.usuario}
          follow={datos.follow}
        />
      ))}
    </div>
  )
}
