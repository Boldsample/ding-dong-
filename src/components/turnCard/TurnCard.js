import React from 'react'
import './turncard.css'

const TurnCard = () => {
  return (
    <div className='turn__card'>
      <div className='turn-name__container'>
        <h2>Juan Jacobo Viera</h2>
        <span className='turn-name__triangle'></span>
      </div>
      <div className='turn-module__container'>
        <p>Module 2</p>
      </div>
    </div>
  )
}

export default TurnCard