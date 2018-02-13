import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//import WebFont from 'webfontloader';
//WebFont.load({
//    google: {
//      families: ['Roboto Web:300,400,700', 'sans-serif']
//    }
//  });

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
