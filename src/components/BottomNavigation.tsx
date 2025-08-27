import { Filter, Heart, Menu, ShoppingCart, User } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 bg-white shadow border-t border-gray-100 w-full flex justify-around py-2">
      <button className="grid justify-items-center">
        <Menu></Menu>
        <span>Menu</span>
      </button>
      <button className="grid justify-items-center">
        <Filter></Filter>
        Filters
      </button>
      <button className="grid justify-items-center">
        <Heart></Heart>
        Wishlist
      </button>
      <button className="grid justify-items-center">
        <ShoppingCart></ShoppingCart>
        Cart
      </button>
      <button className="grid justify-items-center">
        <User></User>
        Acount
      </button>
    </div>
  );
};

export default BottomNavigation;
