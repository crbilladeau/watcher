import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { GlobalProvider } from './context/GlobalState';

import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import ShowPage from './components/ShowPage';

function App() {
  return (
    <GlobalProvider>
      <div className='app'>
        <GlobalStyle />
        <Nav />

        <Switch>
          <Route path='/:media/:showId' component={ShowPage} />
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

// global styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }  
  html {
    box-sizing: border-box;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
  }
  body {
    background: rgb(199,0,211);
    background: linear-gradient(135deg, rgba(199,0,211,1) 0%, rgba(53,0,211,1) 32%, rgba(93,0,211,1) 100%);
  }
`;

export default App;
