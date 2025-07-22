import { useContext } from "react";
import "./Soundbutton.css";
import { CurrentTuneContext } from "../../pages/home-page/HomePage.jsx";

function SoundButton({ aria, children, tune }) {
  // Context
  const { currentTune, setCurrentTune, recording, setRecording, isPlaying, setIsPlaying } = useContext(CurrentTuneContext);

  // Toggle play/pause
  const handleClick = () => {
    const isSameTune = currentTune && tune.title === currentTune.title;
    const clickedIsLead = children[1].props.children === "Melodi";
    const clickedRecording = clickedIsLead ? tune.recordings.main : tune.recordings.sub;

    if (!isPlaying) {
      // Nothing is playing
      setCurrentTune({ ...tune, isPlaying: true });
      setIsPlaying(true);
      setRecording(clickedRecording);
    } else if (isSameTune) {
      // Same tune as before
      if (recording === clickedRecording) {
        // Same recoding, pause
        setCurrentTune({ ...tune, isPlaying: false });
        setIsPlaying(false);
      } else {
        // Same tune, another recording
        setRecording(clickedRecording);
      }
    } else {
      // New tune
      setCurrentTune({ ...tune, isPlaying: true });
      setRecording(clickedRecording);
    }
  };

  return (
    <button className="sound-button flex" onClick={handleClick} aria-label={aria}>
      {children}
    </button>
  );
}

export default SoundButton;
