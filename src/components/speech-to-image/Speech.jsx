import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Showimage from './Showimage.jsx';
import './Speech.css';

// CHANGED ACCORDING TO THE LATEST 3.0.2 VERSION

const Listening = () => {
  const { transcript, resetTranscript, listening, finalTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null
    }


  let disp_button;
  disp_button = listening ? <button className="stop_button" onClick={SpeechRecognition.stopListening} /> : <button className="start_button" onClick={SpeechRecognition.startListening} /> 

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

  )
}

export default Listening;
