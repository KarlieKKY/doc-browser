import { useContext } from "react";
import { SortContext } from "./FileAndFolder";

export default function SortFileAndFolder({ col_name }) {
  const { sortBy, setSortBy, isAscending, setIsAscending } =
    useContext(SortContext);

  const colNameRender = (col_name) => {
    if (col_name === sortBy && isAscending) {
      return "↑ ";
    } else if (col_name === sortBy && !isAscending) {
      return "↓ ";
    } else {
      return "";
    }
  };

  function handleClick(event, col_name) {
    event.preventDefault();
    if (sortBy !== col_name) {
      setSortBy(col_name);
      setIsAscending(true);
    } else {
      setIsAscending(!isAscending);
    }
  }

  return (
    <>
      <button onClick={(event) => handleClick(event, col_name)}>
        {colNameRender(col_name) + col_name}
      </button>
    </>
  );
}
