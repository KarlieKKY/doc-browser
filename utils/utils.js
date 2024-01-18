import data from "../dummyDB/data.json" assert { type: "json" };

export function getAllData() {
  return data;
}

export function getDataSortByKey(data, key, isAscending) {
  let copyData = [...data];
  let isALarger;
  return copyData.sort((a, b) => {
    if (key === "Name") {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      isALarger = nameA >= nameB ? 1 : -1;
    } else if (key === "Date") {
      const dateA = a.added;
      const dateB = b.added;
      isALarger = dateA >= dateB ? 1 : -1;
    } else if (key === "Size") {
      const sizeA = a.size === undefined ? 0 : a.size;
      const sizeB = b.size === undefined ? 0 : b.size;
      isALarger = sizeA - sizeB;
    } else if (key === "Type") {
      const typeA = a.type;
      const typeB = b.type;
      isALarger = typeA >= typeB ? 1 : -1;
    }
    return isAscending ? isALarger : -isALarger;
  });
}

export function getCurrentData(data, dirList) {
  if (dirList.length === 0) {
    return data;
  }
  const targetData = data.find((item) => item.name === dirList[0]);
  return getCurrentData(targetData.files, dirList.slice(1));
}

export function getFilteredData(data, filterTerm) {
  return data.filter((item) =>
    item.name.toLowerCase().includes(filterTerm.toLowerCase())
  );
}
