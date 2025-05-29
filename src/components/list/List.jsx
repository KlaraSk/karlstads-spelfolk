import ListItem from "../list-item/ListItem";
import { useFetch } from "../../api/useFetch";

function List() {
  const url = "http://localhost:7070/api/tunes";
  const { tunes, isLoading, isError } = useFetch(url);

  return <ul>{<ListItem></ListItem>}</ul>;
}

export default List;
