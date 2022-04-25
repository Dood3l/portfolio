import axios from 'axios'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import HeroImg from './duckWall.png'
const hero = {
    backgroundImage: `url(${HeroImg})`
}
function Home () {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_a1ulv47', 'template_jsf79fv', form.current, 'aDfn1XB63PSrnMY8C')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    function contact() {
        window.scrollTo({
            top: 2960,
            behavior: 'smooth'
          });
      }
      
    return (
        
    <>
    
    <section className='section-1'>
        <div className='section-1-hero'>
            <h1 className='hero-title'>Hi, I'm Brian. I'm an associate software engineer.</h1>
            <div className='hero-aboutme-cont'>
            <h6 className='aboutMe'>Hardworking and dependable worker, capable of grasping concepts quickly with the ability to apply them. Dedicated to producing quality of high standard. Organized with high-level multitasking capability.</h6>
            </div>
            <div className='hero-learnMore'>
            <button className='glow-on-hover' onClick={contact}>Get in touch</button>
            </div>
        </div>
    </section>

    <section className='skillset-cont'>

    </section>

    <section className='section-2'>
        <h1>Sites I've created/worked on</h1>
        <div class="cards">
      <a href='https://brian-ecommerceheroku.herokuapp.com/'  target="_blank" rel="noopener noreferrer"><img src="/images/ecom-screenshot.png"  className='card-img' alt="" /></a>
      <a href='https://netflix-redesign-project.herokuapp.com/'  target="_blank" rel="noopener noreferrer"><img src="/images/netflix-screenshot.png" className='card-img' alt="" /></a>
      <a href='https://rth-final.bk000002.repl.co/'  target="_blank" rel="noopener noreferrer"><img src="/images/gateway-screenshot.png" className='card-img' alt="" /></a>
      <img src="/images/netflix-screenshot.png" className='card-img' alt="" />
        </div>
    </section>

    <section className='section-3'>
        <section className="contact-container">
        <form className="content-box" ref={form} onSubmit={sendEmail}>
            <div className="left" style={hero}></div>
            <div className="right">
                <h2 className='contact-h2'>Thank you for reaching out! How may I help?</h2>
                <input type="text" name="user_name" placeholder="Full Name" className='field' required/>

                <input type='email' name="user_email" placeholder='Email' className='field' required/>

                <textarea name="message" placeholder='Message' className='field' required/>

                <input type="submit" value="Send" className='contactPage-btn'/>
            </div>
        </form>
        </section>
    </section>
    
    </>
    )
}

export default Home