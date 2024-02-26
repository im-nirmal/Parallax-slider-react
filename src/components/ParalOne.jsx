import React from 'react'
import { Parallax } from 'react-parallax'


function ParalOne() {
  return (
    <>
        <Parallax className='paral1' bgImage='https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' strength={200} blur={{min:-15,max:15}}>
            
           <h2 className='fst-italic fs-1 text-warning text-center mt-5' > What we drive says a lot about who we are</h2>
            
           
        </Parallax>
        

        <Parallax className='paral1' bgImage='https://images.unsplash.com/photo-1517672651691-24622a91b550?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' strength={800}>

        </Parallax>
    </>
  )
}

export default ParalOne