import React from 'react'
import { Facebook, Linkedin } from 'react-bootstrap-icons'
import upwork from '../../images/upwork.svg'

export default function Footer() {
  return (
    <footer style={{bottom: "0",position: "relative", width: '100%'}} className='footer fixed-bottom'><div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          Logo
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">&copy; Sample Website by Muzamil</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary" href="https://www.upwork.com/workwith/muzmmilkhan2"><img src={upwork} height={'16px'} alt='Upwork Logo'></img></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="https://www.facebook.com/profile.php?id=100009482720934"><Facebook></Facebook></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/muzamil-khan-a91357212"><Linkedin></Linkedin></a></li>
      </ul>
    </footer>
  </div></footer>
  )
}
