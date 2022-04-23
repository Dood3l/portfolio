import React from 'react';

function Contact() {
    return (
        <main className="contact-container">
        <form className="content-box">
            <div className="left"></div>
            <div className="right">
                <h2>Thank you for reaching out. How may I help?</h2>
                <input type="text" className="field" pattern="[A-Za-z]*" placeholder="Full Name" required/>
                <input type="email" className="field" placeholder="Email" required/>
                <input type="tel" className="field" placeholder="Ex: 704-444-4444" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                <textarea className="field" placeholder="Have any comments?"></textarea>
                <button className="contactPage-btn">Send</button>
            </div>
        </form>
        </main>
    )
}

export default Contact;