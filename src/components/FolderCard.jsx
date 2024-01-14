import { useState } from "react";
import FileCard from "./FileCard";

// Display folder
const FolderCard = ({ folder, selectFolder }) => {
  //   console.log(folder);
  return (
    <div>
      <h2 onClick={() => selectFolder(folder.files)}>Folder: {folder.name}</h2>
      <h3>{folder.type}</h3>
    </div>
  );
};

export default FolderCard;
