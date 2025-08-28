import { Bell, Home, Icon, Receipt, ShoppingCart, User } from "lucide-react";
const navItems = [
  {
    id: "home",
    icon: <Home size={24}></Home>,
  },
  {
    id: "notifications",
    icon: <Bell size={24}></Bell>,
  },
  {
    id: "shoppingCart",
    icon: <ShoppingCart size={24}></ShoppingCart>,
  },
  {
    id: "receipt",
    icon: <Receipt size={24}></Receipt>,
  },
  {
    id: "account",
    icon: <User size={24}></User>,
  },
];

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-300">
      <div className="flex justify-around items-center py-3 max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="flex items-center justify-center p-3 rounded-xl
        hover:bg-gray-100 transition-color text-gray-500 hover:text-black"
          >
            {item.icon}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
