import React from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/Card/card";
import logo from './logo2.png';
import SpeechToImage from "./components/speech-to-image/Speech.jsx";

import Voice from "./components/speech-to-text/voice"

function App() {

  const headerLinks ={
    'Home' : '/home',
    'About Us': '/about',
    'Contact Us': '/contact'
  }

  return (
    <div className="App">

      <Header 
        width="30" 
        height="30" 
        logoImg={logo} 
        heading="funkids"
        theme="dark"
        headerLinks={headerLinks}
      ></Header>

      <Button />
      <SpeechToImage />
      <Voice/>

      <Card
        title = "Card Title"
        content = "Here Paste the Card Content"
        buttonLabel = "Submit"
        color = "lightblue"
        width = "20rem"
        onClick = ""
      />

      <Footer
        year="2020"
        footerColor="footer--danger--outline"
        footerSize="footer--medium"
      ></Footer>
    </div>
  );
}

export default App;
