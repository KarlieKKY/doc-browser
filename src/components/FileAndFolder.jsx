import { useState } from "react";
let fileData;
import("../../dummyDB/data.json")
  .then((data) => {
    fileData = data.default;
  })
  .catch((error) => {
    console.error("Error loading JSON data: ", error);
  });

import FileCard from "./FileCard";
import FolderCard from "./FolderCard";

export default function FileAndFolder() {
  const [filesAndFolders, setFilesAndFolders] = useState(fileData);

  return (
    <div>
      {filesAndFolders.map((item) =>
        item.type === "folder" ? (
          <FolderCard key={item.name} folder={item} />
        ) : (
          <FileCard key={item.name} file={item} />
        )
      )}
    </div>
  );
}
