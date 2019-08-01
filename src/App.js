import React from 'react';
import { hot } from 'react-hot-loader';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import AuthBlock from './components/auth-block/AuthBlock.tsx'
import logo from './logo.svg';
import './App.css';

const GlobalStyles = createGlobalStyle`
@import url(‘https://fonts.googleapis.com/css?family=Roboto');
body {
	padding: 0;
	margin: 0;
	font-family: Roboto, sans-serif;
}

 *,
 *::before,
 *::after {
   box-sizing: border-box;
}
`;
function App() {
  return (
    <div className="App">
	  <Normalize />
	  <GlobalStyles />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<AuthBlock />
        <p>
          Edit <code>src/App11.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default hot(module)(App);
