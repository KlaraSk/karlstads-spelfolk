import "./ListItem.css";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ListItemInfo from "../list-item-info/ListItemInfo.jsx";

function ListItem({ tune }) {
  return (
    <li className=" list-item flex">
      <div className="flex list-item__top">
        <div className="flex flex__column label-big text-color__beige list-item__nr">
          <span>#</span>
          <span>{tune.tuneNumber}</span>
        </div>
        <h3 className="body-small text-color__dark-grey">{tune.title}</h3>
        <a href={tune.recording}>Melodi</a>
      </div>
      <div className="list-item__bottom flex">
        {tune.category.sub && <span className="list-item__category">{tune.category.sub}</span>}
        <ListItemInfo icon={<LabelOutlinedIcon aria-label="Kategori" />} info={tune.category.main}></ListItemInfo>

        <ListItemInfo icon={<CalendarTodayOutlinedIcon aria-label="Tilläggsdatum" />} info={tune.location}></ListItemInfo>

        <ListItemInfo icon={<LocationOnOutlinedIcon aria-label="Ursprung" />} info={tune.location}></ListItemInfo>

        {tune.composer && <ListItemInfo icon={<MusicNoteOutlinedIcon aria-label="Kompositör" />} info={tune.composer}></ListItemInfo>}
      </div>
    </li>
  );
}

export default ListItem;
