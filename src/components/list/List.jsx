import ListItem from "../list-item/ListItem.jsx";
import "./List.css";

function List({ tunes }) {
  return (
    <section>
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
