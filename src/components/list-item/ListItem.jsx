import "./ListItem.css";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ListItemInfo from "../list-item-info/ListItemInfo.jsx";
import SoundButton from "../soundbutton/SoundButton.jsx";
import { formatDate } from "../../../utils/utils.js";
import { StyledButton } from "../../components-styled/button/Button.styles.js";

function ListItem({ tune }) {
  console.log(tune);

  return (
    <li className=" list-item flex flex__column">
      <div className="list-item__top flex">
        <div className=" body-large flex list-item__column-1">
          <span className=" grid list-item__number">{tune.tuneNumber}</span>

          <h3 className="body-large text-color__dark-grey list-item__title ">{tune.title}</h3>
        </div>

        <div className="flex list-item__recordings">
          {tune.recordings.sub && <SoundButton recording={tune.recordings.sub} aria={"Spela melodin"} btntext={"Stämma"} />}
          <SoundButton recording={tune.recordings.main} aria={"Spela melodin"} btntext={"Melodi"} />
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

// ListItemBig
// function ListItem({ tune }) {
//   console.log(tune);

//   return (
//     <li className=" list-item grid grid__6-col ">
//       <div className="flex flex__column body-base ">
//         {/* <span>#</span> */}
//         <span>{tune.tuneNumber}</span>
//       </div>
//       <h3 className="body-base text-color__dark-grey ">{tune.title}</h3>
//       <ListItemInfo
//         icon={<CalendarTodayOutlinedIcon aria-label="Tilläggsdatum" sx={{ display: { sm: "inline", md: "none" } }} />}
//         info={formatDate(tune.createdAt)}
//       ></ListItemInfo>

//       <ListItemInfo
//         icon={<LabelOutlinedIcon aria-label="Kategori" sx={{ display: { sm: "inline", md: "none" } }} />}
//         info={tune.category.sub ? tune.category.sub : tune.category.main}
//       ></ListItemInfo>
//       <ListItemInfo
//         icon={<LocationOnOutlinedIcon aria-label="Ursprung" sx={{ display: { sm: "inline", md: "none" } }} />}
//         info={tune.location ?? "Okänt"}
//       ></ListItemInfo>
//       <ListItemInfo
//         icon={<MusicNoteOutlinedIcon aria-label="Kompositör" sx={{ display: { sm: "inline", md: "none" } }} />}
//         info={tune.composer ? tune.composer : "Okänd"}
//       ></ListItemInfo>
//       <div className="flex list-item__recordings">
//         <SoundButton recording={tune.recordings.main} aria={"Spela melodin"} btntext={"Melodi"} />
//         {tune.recordings.sub && <SoundButton recording={tune.recordings.sub} aria={"Spela melodin"} btntext={"Stämma"} />}
//       </div>
//     </li>
//   );
// }

// export default ListItem;
