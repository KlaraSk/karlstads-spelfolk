import { useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./Soundbutton.css";
import PauseIcon from "@mui/icons-material/Pause";
import useSound from "use-sound";
import { StyledButton, SoundButton2 } from "../../components-styled/button/Button.styles.js";

function SoundButton({ recording, aria, btntext }) {
  //useSound använder en tom sträng i väntan på att "recording" ska laddas in. När "recording" är redo triggas hooken och React laddar om den med det nya värdet -- ljudet kan spelas.
  const [play, { pause, stop, sound }] = useSound(recording ?? "", { volume: 0.5 });
  const [isPlaying, setIsPlaying] = useState(false);

  // Togglar play och pause
  const handleClick = () => {
    console.log(sound);

    if (sound && sound.playing()) {
      pause();
      setIsPlaying(false);
    } else {
      // if (sound) sound.seek(0); //Nollställer låten, kör från start.
      play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (!sound) return;

    const handleEnd = () => {
      setIsPlaying(false);
    };

    sound.on("end", handleEnd);
    return () => {
      sound.off("end", handleEnd);
    };
  }, [sound]);
  return (
    // <SoundButton2>
    //   {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    //   <span className="label-big sound-button__text">{btntext}</span>
    // </SoundButton2>

    <button className="sound-button flex" onClick={handleClick} aria-label={aria}>
      {isPlaying ? <PauseIcon className="sound-button__icon" /> : <PlayArrowIcon className="sound-button__icon" />}
      <span className="label-big sound-button__text">{btntext}</span>
    </button>
  );
}

export default SoundButton;
