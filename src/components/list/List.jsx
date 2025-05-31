import { useEffect } from "react";
import ListItem from "../list-item/ListItem";

function List({ tunes }) {
  useEffect(() => {
    console.log(tunes);
  }, [tunes]);

  return (
    <>
      {tunes && (
        <ul className="list">
          {tunes.map((tune) => {
            return <ListItem key={tune.tuneId} tune={tune} />;
          })}
        </ul>
      )}
    </>
  );
}

export default List;
