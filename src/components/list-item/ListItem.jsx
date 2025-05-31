function ListItem({ tune }) {
  return (
    <li>
      <a href={tune.recording}> {tune.title}</a>
    </li>
  );
}

export default ListItem;
