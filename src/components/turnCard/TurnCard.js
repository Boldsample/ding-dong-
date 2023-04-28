import React from 'react'
import './turncard.css'
import cardImg from '../../imgs/Hand.png'

const TurnCard = () => {
  return (
    <div className='turn__card'>
      <div className="turn-img__container">
        <img src={cardImg} alt="" width='50px' />
      </div>
      <div className='turn-name__container'>
        <h2>Juan Jacobo Viera</h2>
        <p>Module 2</p>
      </div>
    </div>
  )
}

export default TurnCard