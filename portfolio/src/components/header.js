import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
    <header>
        <nav>
            <Link to="/"><h1 id="logo">Brian K - Software Engineer</h1></Link>
            <ul>
                <Link to="/"><li>Portfolio</li></Link>
                <Link to ="/resume"><li>Resume</li></Link>
            </ul>
        </nav>
    </header>
    )
}

export default Header