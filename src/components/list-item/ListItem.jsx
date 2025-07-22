import "./ListItem.css";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ListItemInfo from "../list-item-info/ListItemInfo.jsx";
import SoundButton from "../soundbutton/SoundButton.jsx";
import { formatDate } from "../../../utils/utils.js";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useContext } from "react";
import { CurrentTuneContext } from "../../pages/home-page/HomePage.jsx";

function ListItem({ tune }) {
  // Context
  const { recording, isPlaying, setIsPlaying } = useContext(CurrentTuneContext);

  return (
    <li className=" list-item flex flex__column">
      <div className="list-item__top flex">
        <div className=" body-large flex list-item__column-1">
          <span className=" grid list-item__number">{tune.tuneNumber}</span>

          <h3 className="body-large text-color__dark-grey list-item__title ">{tune.title}</h3>
        </div>

        <div className="flex list-item__recordings">
          {tune.recordings.sub && (
            <SoundButton tune={tune} aria={"Spela melodin"}>
              {isPlaying && tune.recordings.sub === recording ? (
                <PauseIcon className="sound-button__icon" />
              ) : (
                <PlayArrowIcon className="sound-button__icon" />
              )}

              <span className="label-big sound-button__text">Stämma</span>
            </SoundButton>
          )}
          <SoundButton tune={tune} aria={"Spela melodin"}>
            {isPlaying && tune.recordings.main === recording ? (
              <PauseIcon className="sound-button__icon" />
            ) : (
              <PlayArrowIcon className="sound-button__icon" />
            )}

            <span className="label-big sound-button__text">Melodi</span>
          </SoundButton>
        </div>
      </div>

      <div className="list-item__middle flex">
        <ListItemInfo icon={<CalendarTodayOutlinedIcon aria-label="Tilläggsdatum" />} info={formatDate(tune.createdAt)}></ListItemInfo>

        <ListItemInfo
          icon={<LabelOutlinedIcon aria-label="Kategori" />}
          info={tune.category.sub ? tune.category.sub : tune.category.main}
        ></ListItemInfo>
        <ListItemInfo icon={<LocationOnOutlinedIcon aria-label="Ursprung" />} info={tune.location ?? "Okänt"}></ListItemInfo>
        <ListItemInfo
          icon={<MusicNoteOutlinedIcon aria-label="Kompositör" />}
          info={tune.composer ? tune.composer : "Okänd"}
        ></ListItemInfo>
      </div>
    </li>
  );
}

export default ListItem;
