import React from 'react'
import Card from './Card'

const Container = ({tours,removeTour,callname}) => {
console.log('tours',tours)
  return (
    <>
      <div className='container'>
        { tours.map((tour)=>(
      <Card  tour={tour} removeTour={removeTour} callname={callname}/>
        ))}



      </div>
      </>
  )
}

export default Container