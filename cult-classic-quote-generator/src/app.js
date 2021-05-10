import React from 'react';
import ReactDOM from 'react-dom';

import QuotesApp from './components/quotes';
import './styles/styles.scss';

// import styles from 'style-loader'
// import css from 'css-loader'

// const Layout = (props) => {
//     return (
//         <div>
//             <header></header>
//             <footer></footer>
//         </div>
//     )
// }

ReactDOM.render(<QuotesApp />, document.getElementById("Quotes"))