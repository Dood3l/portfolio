import React from 'react';

function Home () {
    return (
    <>
    
    <section className='slide-background'>
        <h1 className='project-header'>My Projects</h1>
    <div id="slide-container">
        <span id="slider-image-1"></span>
        <span id="slider-image-2"></span>
        <span id="slider-image-3"></span>
        <div id="image-container">
            <a href='https://brian-ecommerceheroku.herokuapp.com/' target="_blank" rel="noopener noreferrer"><img src="/images/Screenshot (5).png" id="slider-image" alt="slideImg1"/></a>
            <img src="/images/3.jpeg" id="slider-image" alt="slideImg2"/>
            <img src="/images/4.jpg" id="slider-image" alt="slideImg3"/>
        </div>
        <div id="button-container">
            <a href="#slider-image-1" id="slider-button" aria-label="btn1"></a>
            <a href="#slider-image-2" id="slider-button" aria-label="btn2"></a>
            <a href="#slider-image-3" id="slider-button" aria-label="btn3"></a>
        </div>
    </div>
    </section>
    </>
    )
}

export default Home