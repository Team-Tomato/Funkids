import React from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Header width="30" height="30" logoImg={logo} heading="funkids"></Header>

      <Button
        onClick={() => console.log("Button clicked!!")}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--small"
      ></Button>

      <Footer
        year="2020"
        footerColor="footer--danger--outline"
        footerSize="footer--medium"
      ></Footer>
    </div>
  );
}

export default App;
