import { useState, useEffect } from "react";

import FileCard from "./FileCard";
import FolderCard from "./FolderCard";

export default function FileAndFolder() {
  const [filesAndFolders, setFilesAndFolders] = useState([]);
  const [originalData, setOrginalData] = useState([]);

  useEffect(() => {
    import("../../dummyDB/data.json")
      .then((data) => {
        setFilesAndFolders(data.default);
        setOrginalData(data.default);
      })
      .catch((error) => {
        console.error("Error loading JSON data: ", error);
      });
  }, []);

  const selectFolder = (folderName) => {
    setFilesAndFolders(folderName);
  };
  // console.log(filesAndFolders);
  return (
    <div>
      {filesAndFolders.length > 0 && filesAndFolders[0].type !== "folder" && (
        <button onClick={() => setFilesAndFolders(originalData)}>
          Back to main
        </button>
      )}
      {filesAndFolders.map((item) =>
        item.type === "folder" ? (
          <FolderCard
            key={item.name}
            folder={item}
            selectFolder={selectFolder}
          />
        ) : (
          <FileCard key={item.name} file={item} />
        )
      )}
    </div>
  );
}
