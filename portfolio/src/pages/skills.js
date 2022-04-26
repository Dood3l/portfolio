import React from 'react';

function Skills() {
    return (
    <section id='mobile-skillset-cont' className='skillset-cont'>
        <h1>My skills</h1>
        <div id='mobile-skills-cont' className='skills-cont'>
            <div className='skills-child'>
                <h3>Frontend</h3>
                <div id='mobile-skillImg-cont' className='skillImg-cont'>
                <div  id='mobile-skills-img' className='skills-img'>
                    <h2>HTML</h2>
                </div>
                <div id='mobile-skills-img' className='skills-img'>
                    <h2>CSS</h2>
                </div>
                <div id='mobile-skills-img' className='skills-img'>
                    <h2>JavaScript</h2>
                </div>
                <div id='mobile-skills-img' className='skills-img'>
                    <h2>Bootstrap</h2>
                </div>
                <div id='mobile-skills-img' className='skills-img'>
                    <h2>ReactJS</h2>
                </div>
            </div>
        </div>
        </div>
        <div className='skills-cont'>
            <div className='skills-child'>
                <h3>Backend</h3>
                <div id='mobile-skillImg-cont' className='skillImg-cont'>
                <div id='mobile-skills-img' className='skills-img2'>
                    <h2>NodeJS</h2>
                </div>
                <div id='mobile-skills-img' className='skills-img2'>
                    <h2>MySQL</h2>
                </div>
            </div>
        </div>
        </div>

    </section>
    )
}

export default Skills;