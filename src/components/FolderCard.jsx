import { useContext } from "react";
import { SortContext } from "./FileAndFolder";

// Display folder
const FolderCard = ({ folder }) => {
  const { setData } = useContext(SortContext);

  return (
    <tr>
      <td
        onClick={() => setData(folder.files)}
        style={{ backgroundColor: "gray" }}
      >
        {folder.name}
      </td>
      <td>{folder.added}</td>
      <td>{folder.type}</td>
    </tr>
  );
};

export default FolderCard;
