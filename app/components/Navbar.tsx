import React from 'react'
import Image from 'next/image' // Import the Image component

import Link from 'next/link'
import logo from '../asset/logo_.png'

const Navbar = () => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div id="logo">
          <Image src={logo} alt="MyOnlineMeal.com" width={100} height={50} />
        </div>
        <ul>
          <li className="item"><Link href={'/'}>Home</Link></li>
          <li className="item"><Link href={'services'}>Services</Link></li>
          <li className="item"><Link href={'clients'}>Our Clients</Link></li>
          <li className="item"><Link href={'contact'}>Contact Us</Link></li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
