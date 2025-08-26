import { Bookmark, Home, PlusCircle } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 flex w-full justify-around border-t bg-white border-slate-200 p-4 shadow-xl">
      <button className="rounded-full bg-yellow-300 p-4">
        <Home></Home>
      </button>
      <button>
        <PlusCircle color="gray"></PlusCircle>
      </button>
      <button>
        <Bookmark color="gray"></Bookmark>
      </button>
    </div>
  );
};

export default BottomNavigation;
