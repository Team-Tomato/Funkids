import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import Showimage from './Showimage.jsx';
import './Speech.css';

const propTypes = {
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  finalTranscript: PropTypes.string,
  listening : PropTypes.bool
};

const options = {
  autoStart: false,
  continuous: false
}


const Listening = ({
  transcript,
  resetTranscript,
  startListening,
  stopListening,
  finalTranscript,
  listening,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  let disp_button;
  disp_button = listening ? <button className="stop_button" onClick={stopListening} /> : <button className="start_button" onClick={startListening} /> 

  return (

    <div>
    { finalTranscript === "" ?
      <div className="container">
        
        {disp_button}
        <button className="button" onClick={resetTranscript}>Reset</button>
        <br/> 
        {
          (!listening && finalTranscript === "" && transcript==="") &&
          <div style={{fontSize: '18px', fontFamily: 'sans-serif'}}>
            CLICK THE BUTTON TO SPEAK.....
            <br/>
            <br/>
            Example: (A for) or just (A)
          </div> 
        }

        {
          listening && 
            <div className="start">Start Speaking ....</div>
        }

        <br/>

        {
          (listening || transcript!=="") &&
            <div className="line"></div>
        }

        <div className="interim">{transcript}</div>
        
        <br/>

      </div> 
      
      :

      <Showimage inputstr={finalTranscript} reset={resetTranscript} />
    }
    </div>

  );
};

Listening.propTypes = propTypes;

export default SpeechRecognition(options)(Listening);
