import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context/store';

const PhotosApp = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

ReactDOM.render(<PhotosApp />, document.getElementById('root'));
