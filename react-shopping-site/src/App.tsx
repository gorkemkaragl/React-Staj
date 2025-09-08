import BottomNavigation from "./components/BottomNavigation";
import BreadCrumb from "./components/BreadCrumb";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SearchBar from "./components/Searchbar";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <BreadCrumb></BreadCrumb>
      <Categories></Categories>
      <Products></Products>
      <BottomNavigation></BottomNavigation>
    </div>
  );
};

export default App;
