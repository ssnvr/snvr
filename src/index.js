import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './App';

require('typeface-inconsolata')

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));
