import { useContext } from "react";
import { SortContext } from "./FileAndFolder";

// Display folder
const FolderCard = ({ folder }) => {
  const { dirList, setDirList } = useContext(SortContext);

  const handleClick = (e, newDir) => {
    e.preventDefault();
    setDirList([...dirList, newDir]);
  };

  return (
    <tr>
      <td
        onClick={(e) => handleClick(e, folder.name)}
        className="bg-slate-300 hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent rounded"
      >
        {folder.name}
      </td>
      <td>{folder.added}</td>
      <td>{folder.type}</td>
    </tr>
  );
};

export default FolderCard;
