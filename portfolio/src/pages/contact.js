import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import HeroImg from './duckWall.png'
const hero = {
    backgroundImage: `url(${HeroImg})`
}
function Contact() {
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
    return (
    <section id='mobile-section-3' className='section-3'>
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
    )
}

export default Contact;