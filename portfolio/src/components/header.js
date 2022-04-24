import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    function projects() {
        window.scrollTo({
            top: 970,
            behavior: 'smooth'
          });
      }
      function aboutme() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
      }
      function contact() {
        window.scrollTo({
            top: 1945,
            behavior: 'smooth'
          });
      }
    return (
    <header>
        <nav>
            <div className='logo'>
                <img src='/images/200pxDuc.png' alt='lol' />
            </div>
            <ul>
                <button onClick={aboutme}>About</button>
                <button onClick={projects}>Work</button>
                <button onClick={contact}>Contact</button>
            </ul>
        </nav>
    </header>
    )
}

export default Header