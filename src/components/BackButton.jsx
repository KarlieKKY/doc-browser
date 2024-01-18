import { useContext } from "react";
import { SortContext } from "./FileAndFolder";

export default function BackButton() {
  const { dirList, setDirList } = useContext(SortContext);

  function handleClick(event) {
    event.preventDefault();
    setDirList(dirList.slice(0, -1));
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded ${
        dirList.length === 0
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-blue-500 hover:text-white hover:border-transparent"
      }`}
    >
      Back
    </button>
  );
}
