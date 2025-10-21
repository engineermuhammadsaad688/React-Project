import React, { useState } from 'react'
import data from './data'
import Navbar from './Navbar'
import Container from './Container'

const Tours = () => {
  const [tours,setTours]=useState(data)

    function removeTour(id){
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  return (
    <div className='navbar'>
<Navbar/>
<Container tours={tours} removeTour={removeTour} />

      </div>

  )

}

export default Tours