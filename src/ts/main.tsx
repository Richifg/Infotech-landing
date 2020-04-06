import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// imports for webpack
import 'normalize.css';
import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
