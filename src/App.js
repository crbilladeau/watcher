import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='app'>
      <GlobalStyle />
      <Dashboard />
    </div>
  );
}

// global styles
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-color: #111;
  }
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

export default App;
