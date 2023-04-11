import React from 'react'
import linkdn from '../assets/ln.png'
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import D from '../assets/D3.png'

const Footer = () => {
  return (
    <>
    <div className="bg-dark">
    <div class="container my-4">
  <div class="row">
    <div class="col">
      <div className="centered">
      <img src={linkdn} alt="" />
      </div>
    </div>
    <div class="col">
    <div className="centered">
    <img src={fb} alt="" />
    </div>
    </div>
    <div class="col">
    <div className="centered">
    <img src={insta} alt="" />
    </div>
    </div>
    <div class="col">
    <div className="centered">
    <img src={D} alt="" />
    </div>
    
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Footer