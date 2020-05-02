import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
// to be bundled in root
import '../../content.json';

// imports for webpack
import 'normalize.css';
import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
