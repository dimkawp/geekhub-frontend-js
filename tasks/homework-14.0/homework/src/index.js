import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//include bootstrap4.0 css
import 'bootstrap/dist/css/bootstrap.min.css';
//include semantic-ui css
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();