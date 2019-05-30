import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          /* Edit <code>src/App.js</code> and save to reload.
          , website design, complex system development and graphic design agency. We also offer effective online marketing solutions such as organic search engine optimization and social media marketing.
          Fun fact: we’ve been in business for the last 13 years as Evolution in DesignZ, we simply decided to re-brand. Check out our old website to learn more about who we are and who we work with.
          Check back soon for our new website! We promise we’re working on it, in between client projects. */
        }
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coming Soon</h1>
        <p> Hi there! Thanks for stopping by. We’re a Toronto based IT Service Provider. Check back soon for our new website!.</p>
        <a href="mailto:imran.ali@shayzaan.com">
          imran.ali@shayzaan.com
        </a>
      </header>
    </div>
  );
}
export default App;
