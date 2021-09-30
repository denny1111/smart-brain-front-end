import React from 'react'
import Particles from 'react-particles-js'
import './Particles.css'

function Particless  (){
    return (
      <Particles
      className='particles'
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            }
          },
          move: {
              speed: 1
            },
        },
      }}
    />
    )
}

export default Particless
