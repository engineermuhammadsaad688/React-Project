import React, { useState } from 'react'
import Card from './Card'
import data from './data'
import Navbar from './Navbar'
import Container from './Container'

const Tours = () => {
  const [tours,setTours]=useState(data)

    function removeTour(id){
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
      function callname (a){
console.log('info',a)
      }


  
  return (
    <div className='navbar'>
<Navbar/>
<Container tours={tours} removeTour={removeTour} callname={callname}/>

      </div>

  )

}

export default Tours