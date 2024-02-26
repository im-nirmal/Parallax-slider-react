import React from 'react'
import { Card } from 'react-bootstrap'

function Gallery({data}) {
  return (
    <>
    <div className='d-flex m-5'>
        { data.map((item)=>(
            <Card  style={{  margin:'40px', width: '20rem' }} className=' border border-0'>
            <Card.Img variant="top" src={item.image} />  
          </Card>
        ))
            }
    </div >
    </>
  )
}

export default Gallery