import "./ListItem.css";
import Sell from "@mui/icons-material/Sell";
import ListItemInfo from "../list-item-info/ListItemInfo.jsx";

function ListItem({ tune }) {
  return (
    <li className="list-item">
      <span className="list-item__nr">{tune.tuneNumber}</span>
      <a href={tune.recording}> {tune.title}</a>
      <div>
        <Sell />
        <span className="list-item__category">{tune.category.main}</span>
      </div>

      {tune.category.sub && <span className="list-item__category">{tune.category.sub}</span>}
      {/* <ListItemInfo icon={Sell}></ListItemInfo> */}
    </li>
  );
}

export default ListItem;

// category
// :
// {main: 'Polska', sub: null}
// composer
// :
// null
// isComposedByUs
// :
// false
// location
// :
// "Eda"

// tuneId
// :
// "5fg78"
// tuneNumber
// :
// 1
