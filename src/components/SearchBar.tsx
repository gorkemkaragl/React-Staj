import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-4 py-2 bg-blue-50 ">
      <div className="flex bg-white rounded-full border border-gray-200 px-4 py-1 pr-1">
        <input
          type="text"
          className=" flex-1 px-1 outline-0"
          placeholder="Search for products"
        />
        <button className="bg-blue-500 rounded-full p-2 hover:bg-blue-800">
          <Search color="white"></Search>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
