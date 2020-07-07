import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Header width="30" height="30" logoImg={logo} heading="funkids"></Header>
    </div>
  );
}

export default App;
