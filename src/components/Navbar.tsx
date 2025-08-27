import { Menu, User, Waves } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4 bg-white">
      <Menu></Menu>
      <div className="flex items-center gap-2">
        <Waves color="#1111ff"></Waves>
        <span className="text-2xl font-bold">WoodMart.</span>
      </div>
      <User></User>
    </div>
  );
};

export default Navbar;
