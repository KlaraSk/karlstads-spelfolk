import { useEffect } from "react";
import ListItem from "../list-item/ListItem";
import "./List.css";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import ListItemInfo from "../list-item-info/ListItemInfo.jsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function List({ tunes }) {
  useEffect(() => {
    console.log(tunes);
  }, [tunes]);

  return (
    <section>
      {/* <div className="grid grid__6-col list-headings">
        <h2 className="heading-3 text-color__light-grey flex list__title">Nr {<KeyboardArrowDownIcon />}</h2>
        <h2 className="heading-3 text-color__light-grey flex list__title">Title {<KeyboardArrowDownIcon />}</h2>
        <h2 className="heading-3 text-color__light-grey flex list__title">Datum {<KeyboardArrowDownIcon />}</h2>
        <h2 className="heading-3 text-color__light-grey flex list__title">Kategori {<KeyboardArrowDownIcon />}</h2>
        <h2 className="heading-3 text-color__light-grey flex list__title">Ursprung {<KeyboardArrowDownIcon />}</h2>
        <h2 className="heading-3 text-color__light-grey flex list__title">Låtskapare {<KeyboardArrowDownIcon />}</h2>
        <h2 className="heading-3  text-color__light-grey flex list__title">Inspelningar {<KeyboardArrowDownIcon />}</h2>
      </div> */}
      {tunes && (
        <ul className="list flex flex__column">
          {tunes.map((tune) => {
            return <ListItem key={tune.tuneId} tune={tune} />;
          })}
        </ul>
      )}
    </section>
  );
}

export default List;
