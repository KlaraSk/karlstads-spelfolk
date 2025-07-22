import { PlayButton, ControlButton } from "../../components-styled/button/Button.styles.js";
import "./CentralPLayer.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Forward30Icon from "@mui/icons-material/Forward30";
import Replay30Icon from "@mui/icons-material/Replay30";
import { useContext, useRef, useEffect, useState } from "react";
import { CurrentTuneContext } from "../../pages/home-page/HomePage.jsx";
import { calculateTime } from "../../../utils/utils.js";

function CentralPlayer() {
  // State
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Context
  const { currentTune, recording, isPlaying, setIsPlaying } = useContext(CurrentTuneContext);

  // References
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  // Updates the duration when the user changes tune and the metadata for the audio element has been loaded.
  useEffect(() => {
    const audio = audioPlayer.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      const seconds = Math.floor(audio.duration);
      setDuration(seconds);
      progressBar.current.max = seconds;
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [recording]);

  // Autoplay tune and toggles play/pause if recording or isPlaying changes
  useEffect(() => {
    if (recording && isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else if (!isPlaying) {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }, [recording, isPlaying]);

  // Toggle play/pause in the CentralPlayer play/pause button
  const togglePlayPause = () => {
    if (recording) {
      const prevValue = isPlaying;
      setIsPlaying(!prevValue);
      if (!prevValue) {
        audioPlayer.current.play();

        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
      }
    } else return;
  };

  // Updates progressBar while isPlaying is true
  const whilePlaying = () => {
    if (!isPlaying) return;

    progressBar.current.value = audioPlayer.current.currentTime;
    setCurrentTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  // Sets the audio player's current time when the user rewinds or fast-forwards.
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    const newTime = Number(progressBar.current.value) - 30;

    progressBar.current.value = Math.max(newTime, 0);
    changeRange();
  };

  const forwardThirty = () => {
    const newTime = Number(progressBar.current.value) + 30;
    progressBar.current.value = Math.min(newTime, duration);
    changeRange();
  };

  const onEnd = () => {
    cancelAnimationFrame(animationRef.current);
    setIsPlaying(false);
  };

  return (
    <section className="central-player flex flex__column">
      {currentTune && <h4 className="heading-4">{currentTune.title}</h4>}

      <div className=" flex central-player__ctrl-btns">
        <audio ref={audioPlayer} src={recording} onEnded={onEnd}></audio>
        {
          <ControlButton aria-label="Spola tillbaka 30 sek" onClick={backThirty}>
            <Replay30Icon sx={{ width: "30px", height: "30px" }} />
          </ControlButton>
        }

        {
          <PlayButton aria-label="Spela/pausa" onClick={togglePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </PlayButton>
        }
        {
          <ControlButton aria-label="Spola fram 30 sek" onClick={forwardThirty}>
            <Forward30Icon sx={{ width: "30px", height: "30px" }} />
          </ControlButton>
        }

        {/* current time */}
        <span className="label-small flex central-player__current-time">{calculateTime(currentTime)}</span>
        {/* progress bar */}
        <input type="range" className="central-player__progress-bar" defaultValue="0" ref={progressBar} onChange={changeRange} />
        <span className="label-small flex central-player__duration">{calculateTime(duration)}</span>
      </div>
    </section>
  );
}

export default CentralPlayer;
