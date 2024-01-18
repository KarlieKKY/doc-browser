import { useContext } from "react";
import { SortContext } from "./FileAndFolder";

export default function FilterBar() {
  const { filterItem, setFilterItem } = useContext(SortContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <input
            value={filterItem}
            onChange={(e) => setFilterItem(e.target.value)}
            type="text"
            id="filename-search"
            placeholder="Filter by file name..."
            required
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
      </form>
    </>
  );
}
