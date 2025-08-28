import { Menu, ShoppingCart } from "lucide-react";

const Navigation = () => {
  const cartCount = 15; // Example cart item count
  return (
    <header className="flex items-center gap-4 px-6 py-4 bg-white">
      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
        <Menu></Menu>
      </button>
      <h1 className="flex-1 text-xl font-bold">Store</h1>
      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors relative">
        <ShoppingCart></ShoppingCart>
        {cartCount > 0 && (
          <div className="absolute bg-red-500 rounded-full w-5 h-5 text-xs items-center flex top-0 right-0  justify-center text-white">
            {cartCount}
          </div>
        )}
      </button>
    </header>
  );
};

export default Navigation;
