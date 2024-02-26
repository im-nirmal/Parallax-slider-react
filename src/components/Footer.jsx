import React from 'react'

function Footer() {
  return (
    <div style={{height:'300px'}} className='mt-5 w-100 '>
        <div className='footer-content d-flex justify-content-evenly'>
        <div className="guides d-flex flex-column">
                {/* <h5>LINKS</h5> */}
                <a href="" style={{textDecoration:'none'}} className='text-dark fw-semibold'>Home</a>
                <a href="" style={{textDecoration:'none'}} className='text-dark fw-semibold'>About</a>
                <a href="" style={{textDecoration:'none'}} className='text-dark fw-semibold'>Contact Us</a>
            </div>

            <div className="guides d-flex flex-column">
                {/* <h5>LINKS</h5> */}
                <a href="" style={{textDecoration:'none'}} className='text-dark fw-semibold'>Gallery</a>
                <a href="" style={{textDecoration:'none'}} className='text-dark fw-semibold'>Location</a>
                <a href="" style={{textDecoration:'none'}} className='text-dark fw-semibold'>Connect</a>
            </div>

        </div>

        <p className='text-center mt-5'>Copyright &copy; 2024 . Built with React</p>
    </div>
  )
}

export default Footer