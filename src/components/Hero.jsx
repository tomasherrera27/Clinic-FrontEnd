import React from 'react'
import banner from '../assets/banner.jpeg';
function Hero() {
  return (
<div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bienvenido a la clinica odontologica</h1>
      <p className="mb-5"> Inicie sus tramites medicos, En el instante</p>
      <button className="btn btn-primary">Iniciar Sesión</button>
    </div>
  </div>
</div>
  )
}

export default Hero