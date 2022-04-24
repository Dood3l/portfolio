import axios from 'axios'
import { React, useState, } from 'react';
import HeroImg from './duckWall.png'
const hero = {
    backgroundImage: `url(${HeroImg})`
}
function Home () {
    const [name, setName] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");


    const submit = () => {
        axios.post('/api/contact', {
            name: name,
            last_name: last_name,
            email: email,
        }).then((data) => {
            console.log(data)
        })
    }
    function contact() {
        window.scrollTo({
            top: 1945,
            behavior: 'smooth'
          });
      }
      
    return (
        
    <>
    
    <section className='section-1'>
        <div className='section-1-hero'>
            <h1 className='hero-title'>Hi, I'm Brian. I'm an associate software engineer.</h1>
            <p className='aboutMe'>Hardworking and dependable worker, capable of grasping concepts quickly with the ability to apply them. Dedicated to producing quality of high standard. Organized with high-level multitasking capability.</p>
            <div className='hero-learnMore'>
            <button className='glow-on-hover' onClick={contact}>Get in touch</button>
            </div>
        </div>
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
        <form method='POST' className="content-box" action="/contact">
            <div className="left" style={hero}></div>
            <div className="right">
                <h2 className='contact-h2'>Contact Us</h2>
                <input name="first name" placeholder='First Name' className='field' onChange={(e) => {
                                    setName(e.target.value)
                                }} required />
                <input name="last name" placeholder='Last Name' className='field' onChange={(e) => {
                                    setLast_Name(e.target.value)
                                }} required />
                <input type='text' name="email" placeholder='Email' className='field' onChange={(e) => {
                                    setEmail(e.target.value)
                                }} required />
                <button onClick={submit} type='submit' className='contactPage-btn'><span className='send'>Send</span></button>
            </div>
        </form>
        </section>
    </section>
    
    </>
    )
}

export default Home