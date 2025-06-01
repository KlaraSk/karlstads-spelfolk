import { useEffect } from "react";
import ListItem from "../list-item/ListItem";

function List({ tunes }) {
  useEffect(() => {
    console.log(tunes);
  }, [tunes]);

  return (
    <>
      <h2 className="heading-3 text-color__light-grey list__title">Nr</h2>
      <h2 className="heading-3 text-color__light-grey list__title">Title</h2>
      <h2 className="heading-3 text-color__light-grey list__title">Tillagd datum</h2>
      <h2 className="heading-3 text-color__light-grey list__title">Kategori</h2>
      <h2 className="heading-3 text-color__light-grey list__title">Egna skapelser</h2>
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
