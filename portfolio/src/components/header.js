import React from 'react'

function Header() {
    function aboutme() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    }
    function skills() {
        window.scrollTo({
            top: 970,
            behavior: 'smooth'
            });
    }
    function projects() {
        window.scrollTo({
            top: 1890,
            behavior: 'smooth'
          });
    }
    function contact() {
        window.scrollTo({
            top: 5000,
            behavior: 'smooth'
        });
    }
    return (
    <header>
        <nav>
            <div id='mobile-logo'className='logo'>
                <img src='/images/200pxDuc.png' alt='lol' onClick={aboutme}/>
            </div>
            <ul id='mobile'>
                <button id='mobile-btn' onClick={aboutme}>About</button>
                <button id='mobile-btn' onClick={skills}>Skills</button>
                <button id='mobile-btn' onClick={projects}>Work</button>
                <button id='mobile-btn' onClick={contact}>Contact</button>
                <a href='/resumeRevised.pdf' download="Brian K's Resume"><button id='mobile-btn'>Resume</button></a>
            </ul>
            <div id='mobile-socials' className='socials'>
                <a href='https://www.linkedin.com/in/brian-k/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-2x"></i></a>
                <a href='https://github.com/Dood3l' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-2x"></i></a>
            </div>
        </nav>
    </header>
    )
}

export default Header