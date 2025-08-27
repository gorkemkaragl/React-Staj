import { Check, Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="bg-white p-3 grid gap-1 text-sm rounded shadow">
      <img
        src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/acer-conceptd-7-ezel-1.jpg"
        alt=""
      />
      <span className="font-semibold">Acer Concept 7 Ezel</span>
      <span className="text-gray-500">Business Laptop</span>
      <div className="flex gap-1">
        <Star size={16} color="#ccc"></Star>
        <Star size={16} color="#ccc"></Star>
        <Star size={16} color="#ccc"></Star>
        <Star size={16} color="#ccc"></Star>
        <Star size={16} color="#ccc"></Star>
      </div>
      <div className="flex gap-1 items-center">
        <Check size={16} color="#1111ff"></Check>
        <span>In Stock</span>
      </div>

      <span className="text-blue-500">$3.800,00</span>
      <button className="bg-blue-600 text-white rounded-md py-3 px-4 hover:bg-blue-800">
        Add To Cart
      </button>
      <span>
        SKU:
        <span className="text-gray-500">30890</span>
      </span>
    </div>
  );
};

export default ProductCard;
