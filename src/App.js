import React from 'react';
import { hot } from 'react-hot-loader';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
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
	  <Router>
      <header className="App-header">
	  <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{color: "white"}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{color: "white"}}>About</NavLink>
            </li>
            <li>
              <NavLink to="/topics" activeStyle={{color: "white"}}>Topics</NavLink>
            </li>
          </ul>
        </nav>
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
	  	<Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
	  </Router>
    </div>
  );
}

export default hot(module)(App);


function Home() {
	return <h2>Home</h2>;
  }
  
  function About() {
	return <h2>About</h2>;
  }

// functional comp
//   function Topic({ match }) {
//	 return <h3>Requested Param: {match.params.id}</h3>;
//   }
  class Topic extends React.Component {
	  render(){
		return <h3>Requested Param: {this.props.match.params.id}</h3>;
	  }
  }
  
  function Topics({ match }) {
	return (
	  <div>
		<h2>Topics</h2>
  
		<ul>
		  <li>
			<NavLink to={`${match.url}/components`}>Components</NavLink>
		  </li>
		  <li>
			<NavLink to={`${match.url}/props-v-state`}>Props v. State</NavLink>
		  </li>
		</ul>
  
		<Route path={`${match.path}/:id`} component={Topic} />
		<Route
		  exact
		  path={match.path}
		  render={() => <h3>Please select a topic.</h3>}
		/>
	  </div>
	);
  }