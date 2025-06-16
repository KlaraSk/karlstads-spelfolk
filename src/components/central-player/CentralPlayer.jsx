import { PlayButton, ControlButton } from "../../components-styled/button/Button.styles";
import "./CentralPLayer.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Forward30Icon from "@mui/icons-material/Forward30";
import Replay30Icon from "@mui/icons-material/Replay30";

import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function CentralPlayer() {
  return (
    <section className="central-player flex flex__column">
      <h4 className="heading-4">Låttitel</h4>
      <div className="flex central-player__ctrl-btns">
        <ControlButton aria-label="Spola tillbaka 30 sek">
          <Replay30Icon sx={{ width: "30px", height: "30px" }} />
        </ControlButton>
        <ControlButton aria-label="Föregående låt">
          <FastRewindIcon sx={{ width: "30px", height: "30px" }} />
        </ControlButton>
        <PlayButton aria-label="Spela/pausa">
          <PlayArrowIcon />
        </PlayButton>
        <ControlButton aria-label="Nästa låt">
          <FastForwardIcon sx={{ width: "30px", height: "30px" }} />
        </ControlButton>

        <ControlButton aria-label="Spola fram 30 sek">
          <Forward30Icon sx={{ width: "30px", height: "30px" }} />
        </ControlButton>
        {/* <MoreVertIcon /> */}
      </div>
    </section>
  );
}

export default CentralPlayer;
