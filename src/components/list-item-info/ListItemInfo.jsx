import "./ListItemInfo.css";

function ListItemInfo({ info, icon }) {
  return (
    <div className="flex text-color__dark-grey list-item-info">
      {icon} <span className="body-base list-item__info ">{info}</span>
    </div>
  );
}

export default ListItemInfo;
