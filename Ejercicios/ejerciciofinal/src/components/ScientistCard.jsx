import React from 'react'

export default function ScientistCard({ name, profession, awards, discovery, photo }){
  return (
    <article className="card">
      <div className="avatar">
        <img src={photo} alt={name} />
      </div>
      <div>
        <p className="name">{name}</p>
        <p className="note"><span className="label">Profesión:</span> {profession}</p>
        <p className="note"><span className="label">Premios:</span> {awards}</p>
        <p className="note"><span className="label">Descubrió:</span> {discovery}</p>
      </div>
    </article>
  )
}
