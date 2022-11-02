import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'


const Header = () => {
  return (
    <nav>
        <h1>StarBucks.</h1>
        <main>
            <HashLink to = {'/#home'}>Home</HashLink>
            <Link to = {'/contact'}>Contact Us</Link>
            <HashLink to = {'/#about'}>About</HashLink>
            <HashLink to = {'/#brand'}>Brand</HashLink>
            <Link to = {'/Service'}>Service</Link>

        </main>
    </nav>
  )
}

export default Header