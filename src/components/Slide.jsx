import React from 'react'
import { Carousel } from 'react-bootstrap'


function Slide({slideData}) {
  return (
    <>
        <div>
         
                <Carousel interval={1000}>
                { slideData.map((item)=>(
                <Carousel.Item>
                    <img src={item.image} alt="" />
                        
                </Carousel.Item>
          
        ))
            }
            </Carousel>
        </div>
    </>
  )
}

export default Slide