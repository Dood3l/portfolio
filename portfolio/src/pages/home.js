import React from 'react';
import Contact from './contact';
import Projects from './projects';
import Skills from './skills';

function Home () {
    

    function contact() {
        window.scrollTo({
            top: 3400,
            behavior: 'smooth'
          });
      }
      
    return (
        
    <>
    
    <section className='section-1'>
        <div className='section-1-hero'>
            <h1 id='mobile-hero-title' className='hero-title'>Hi, I'm Brian. I'm an associate software engineer.</h1>
            <div className='hero-aboutme-cont'>
            <h6 className='aboutMe'>Hardworking and dependable worker, capable of grasping concepts quickly with the ability to apply them. Dedicated to producing quality of high standard. Organized with high-level multitasking capability.</h6>
            </div>
            <div className='hero-learnMore'>
            <button id='mobile-glow' className='glow-on-hover' onClick={contact}>Get in touch</button>
            </div>
        </div>
    </section>

    <Skills />

    <Projects />

    <Contact />
    
    </>
    )
}

export default Home