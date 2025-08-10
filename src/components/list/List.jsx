import { useContext } from "react";
import ListItem from "../list-item/ListItem.jsx";
import "./List.css";
import { CurrentTuneContext } from "../../App.jsx";

function List() {
  const { playList } = useContext(CurrentTuneContext);

  return (
    <section>
      {playList && (
        <ul className="list flex flex__column">
          {playList.map((tune) => {
            return <ListItem key={tune.tuneId} tune={tune} />;
          })}
        </ul>
      )}
    </section>
  );
}

export default List;
