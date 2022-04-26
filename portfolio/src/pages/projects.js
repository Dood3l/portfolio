import React from 'react';

function Projects() {
    return (
    <section id='mobile-section-2' className='section-2'>
        <h1>Sites I've created/worked on</h1>
        <div id='mobile-cards' class="cards">
            <a href='https://brian-ecommerceheroku.herokuapp.com/'  target="_blank" rel="noopener noreferrer"><img src="/images/ecom-screenshot.png"  className='card-img' alt="" /></a>
            <a href='https://netflix-redesign-project.herokuapp.com/'  target="_blank" rel="noopener noreferrer"><img src="/images/netflix-screenshot.png" className='card-img' alt="" /></a>
            <a href='https://rth-final.bk000002.repl.co/'  target="_blank" rel="noopener noreferrer"><img src="/images/gateway-screenshot.png" className='card-img' alt="" /></a>
            <a href='https://euphonious-begonia-69b1aa.netlify.app' target="_blank" rel="noopener noreferrer"><img src="/images/spacexMock.png" className='card-img' alt="" /></a>
        </div>
    </section>
    )
}

export default Projects;