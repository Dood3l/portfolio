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
            top: 1945,
            behavior: 'smooth'
          });
    }
    function contact() {
        window.scrollTo({
            top: 2960,
            behavior: 'smooth'
        });
    }
    return (
    <header>
        <nav>
            <div className='logo'>
                <img src='/images/200pxDuc.png' alt='lol' onClick={aboutme}/>
            </div>
            <ul>
                <button onClick={aboutme}>About</button>
                <button onClick={skills}>Skills</button>
                <button onClick={projects}>Work</button>
                <button onClick={contact}>Contact</button>
                <a href='/Resume.pdf' download="Brian K's Resume"><button>Resume</button></a>
            </ul>
            <div className='socials'>
                <a href='https://www.linkedin.com/in/brian-k/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-2x"></i></a>
                <a href='https://github.com/Dood3l' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-2x"></i></a>
            </div>
        </nav>
    </header>
    )
}

export default Header