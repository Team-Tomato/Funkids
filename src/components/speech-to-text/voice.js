import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import Button from "../Button"
import "./voice.css"

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>

    <Button
        onClick={SpeechRecognition.startListening}
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--large"
        className="btn-spacing"
      > Start </Button>

    <Button
        onClick={SpeechRecognition.stopListening}
        type="button"
        buttonStyle="btn--danger--solid"
        buttonSize="btn--medium"
        className="btn-spacing"
      > Stop </Button>

    <Button
        onClick={resetTranscript}
        type="button"
        buttonStyle="btn--warning--solid"
        buttonSize="btn--medium"
        className="btn-spacing"
      > Reset </Button>

      <h1 className="mt-5 voice-text">{transcript}</h1>

    </div>
  )
}
export default Dictaphone