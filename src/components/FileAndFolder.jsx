import { useState, createContext } from "react";

import {
  getAllData,
  getDataSortByKey,
  getCurrentData,
  getFilteredData,
} from "../../utils/utils";

import FileCard from "./FileCard";
import FolderCard from "./FolderCard";
import SortFileAndFolder from "./SortFileAndFolder";
import FilterBar from "./FilterBar";
import BackButton from "./BackButton";
import BackToMainButton from "./BackToMainButton";

export const SortContext = createContext();

export default function FileAndFolder() {
  const [dirList, setDirList] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [sortBy, setSortBy] = useState("Name");
  const [isAscending, setIsAscending] = useState(true);

  function getDisplayData() {
    const currentData = getCurrentData(getAllData(), dirList);
    const sortedData = getDataSortByKey(currentData, sortBy, isAscending);
    const filteredData = getFilteredData(sortedData, filterTerm);
    if (filteredData.length === 0) {
      return null;
    }
    return filteredData;
  }
  console.log(filterTerm.length);
  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
        isAscending,
        setIsAscending,
        filterTerm,
        setFilterItem: setFilterTerm,
        dirList,
        setDirList,
      }}
    >
      <section className="flex flex-col items-center min-h-screen">
        <div className="mb-4 space-y-4 space-x-2 ">
          <BackToMainButton />
          <BackButton />
          <FilterBar />
        </div>
        <table className="table-fixed w-full">
          <tbody>
            <tr>
              <th className="w-32">
                <SortFileAndFolder col_name="Name" />
              </th>
              <th className="w-20">
                <SortFileAndFolder col_name="Date" />
              </th>
              <th className="w-16">
                <SortFileAndFolder col_name="Type" />
              </th>
              <th className="w-24">
                <SortFileAndFolder col_name="Size" />
              </th>
            </tr>
            {getDisplayData() ? (
              getDisplayData().map((item) =>
                item.type === "folder" ? (
                  <FolderCard key={item.name} folder={item} />
                ) : (
                  <FileCard key={item.name} file={item} />
                )
              )
            ) : filterTerm.length > 0 ? (
              <tr>
                <td colSpan="4">
                  <p className="text-center">File not found</p>
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan="4">
                  <p className="text-center">This folder is empty</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </SortContext.Provider>
  );
}
