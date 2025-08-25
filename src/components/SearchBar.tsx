import { Search, Settings2 } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-4">
      <div className="relative flex items-center gap-4 rounded-full bg-gray-200 p-2 px-6">
        <Search size={20}></Search>
        <input className="flex-1 outline-0" type="text" placeholder="Search any recipe" />
        <div className="rounded-xl bg-white p-2 shadow-xl">
          <Settings2 size={20}></Settings2>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
