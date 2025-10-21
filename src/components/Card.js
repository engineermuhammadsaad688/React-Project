import React, { useState } from 'react'

const Card = ({ tour,removeTour }) => {
  const { id, name, info, price, img } = tour
  const [readMore, setReadMore] = useState(false)

  function handleClick(){
    setReadMore(!readMore)
  }

    function removeCard(){
      removeTour(id)
  }

  return (

    <>
      <div className='card' key={id}>
        <div className='card-1'>
          <div className='top'>
            <div className='days'>
              {price}
            </div>
          </div>
          <img src={img} alt={name} />
          {name}
          <p>
            {readMore ? info : `${info.substring(0, 200)}...` }
            <button onClick={handleClick} style={{border:'none',background:'none',color:'#10b981'}}>
              {readMore?'Show Less' :'Read More'  }
            </button>
          </p>
          <div style={{ paddingLeft: '58px' }}>
            <button className='btn' onClick={removeCard}>not interested</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card