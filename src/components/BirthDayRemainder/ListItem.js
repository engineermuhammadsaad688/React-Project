import React from 'react'

const ListItem = ({person}) => {
  console.log('person',person)
  const{id,name,age,ifo,img}=person;
  return (
<div className='img'key={id}>
  <div className='circle'>
<img src={img} alt={name}/>

  </div>
  <div className='line'>
<div>{name}</div>
<div>{age}</div>
<div> {ifo}</div>
  </div>

</div>
  )
}


export default ListItem