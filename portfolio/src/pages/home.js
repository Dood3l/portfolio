import React from 'react';

function Home () {
    function scrollWin() {
        window.scrollTo({
            top: 960,
            behavior: 'smooth'
          });
      }
    return (
        
    <>
    
    <section className='section-1'>
        <h1 className='hero-title'>Hi, I'm Brian. I'm an associate software engineer.</h1>
        <div className='hero-learnMore'>
        <button className='glow-on-hover' onClick={scrollWin}>Learn more about me</button>
        </div>
    </section>
    <section className='section-2'>

    </section>
    <section className='section-3'>

    </section>
    
    </>
    )
}

export default Home