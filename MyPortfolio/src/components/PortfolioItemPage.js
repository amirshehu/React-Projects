import React from 'react';

const PortfolioProject = (props) => (
    <div>
        <p>this page is for the item with id of {props.match.params.id}</p>
        {console.log(props.match.params.id)}
    </div>
);

export default PortfolioProject;