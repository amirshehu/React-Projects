import React from 'react'
import {  Link} from 'react-router-dom'

const Portfolio = () => {
    return (
        <div>
            <h2>My Projects</h2>
            <p>check them out</p> 
            <Link to='/portfolio/1'>Item 1</Link>
            <Link to='/portfolio/2'>Item 2</Link>  
        </div>
    );
}

export default Portfolio;