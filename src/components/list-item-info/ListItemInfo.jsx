function ListItemInfo({ info, icon }) {
  return (
    <div className="flex text-color__dark-grey">
      {icon} <span className="label-small list-item__info ">{info}</span>
    </div>
  );
}

export default ListItemInfo;
