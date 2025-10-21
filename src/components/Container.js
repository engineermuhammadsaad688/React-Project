import React from 'react'
import Card from './Card'

const Container = ({tours,removeTour}) => {
  return (
    <>
      <div className='container'>
        { tours.map((tour)=>(
      <Card  tour={tour} removeTour={removeTour} />
        ))}



      </div>
      </>
  )
}

export default Container