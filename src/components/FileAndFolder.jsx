import { useState, createContext, useEffect } from "react";

import { getAllData, getDataSortByKey } from "../../utils/utils";

import FileCard from "./FileCard";
import FolderCard from "./FolderCard";
import SortFileAndFolder from "./SortFileAndFolder";

export const SortContext = createContext();

export default function FileAndFolder() {
  const [data, setData] = useState(getAllData());
  const [sortBy, setSortBy] = useState("Name");
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const sortedData = getDataSortByKey(data, sortBy, isAscending);
    setData(sortedData);
    console.log(data);
  }, [sortBy, isAscending]);

  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
        isAscending,
        setIsAscending,
        data,
        setData,
      }}
    >
      <section>
        {data.length > 0 && (
          <button onClick={() => setData(getAllData())}>Back to main</button>
        )}
        <table>
          <tbody>
            <tr>
              <th>
                <SortFileAndFolder col_name="Name" />
              </th>
              <th>
                <SortFileAndFolder col_name="Date" />
              </th>
              <th>
                <SortFileAndFolder col_name="Type" />
              </th>
              <th>
                <SortFileAndFolder col_name="Size" />
              </th>
            </tr>
            {data.map((item) =>
              item.type === "folder" ? (
                <FolderCard key={item.name} folder={item} />
              ) : (
                <FileCard key={item.name} file={item} />
              )
            )}
          </tbody>
        </table>
      </section>
    </SortContext.Provider>
  );
}
