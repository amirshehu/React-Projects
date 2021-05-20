import React from 'react';
import {Link} from 'react-router-dom';


const PageNotFound = () => (
    <div>
        {/* client side routing page does not refresh JS swaps out the dom*/}
        404 - <Link to ='/'>go home</Link>

        {/* server side routing causes page to refresh */}
        {/* 404 - <a href ='/'>go home</a> */}
    </div>
);

export default PageNotFound;