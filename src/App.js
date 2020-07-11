import React from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => console.log("Button clicked!!")}
        type="button"
        buttonStyle="btn--primary--solid"
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
