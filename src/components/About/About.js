import React from 'react'
import { Container } from 'react-bootstrap';
import { Facebook, Linkedin } from 'react-bootstrap-icons'
import upwork from '../../images/upwork.svg'


export default function About() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
  <div className="text-center">
    <h1>About this App</h1>
    <p>This is a Portfolio app Made as a sample to showcase how my Apps works</p>
    <h1>Ways to Contact</h1>
    <p>You can Contact me Via Given Links:</p>
    <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary" href="https://www.upwork.com/workwith/muzmmilkhan2"><img src={upwork} height={'16px'} alt='Upwork Logo'></img></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="https://www.facebook.com/profile.php?id=100009482720934"><Facebook></Facebook></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/muzamil-khan-a91357212"><Linkedin></Linkedin></a></li>
      </ul>
  </div>
</Container>

  )
}
