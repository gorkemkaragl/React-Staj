import BottomNavigation from "./components/BottomNavigation";
import Categories from "./components/Categories";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";

const App = () => {
  return <div className="min-h-screen bg-background max-w-md mx-auto relative">
    <Navigation></Navigation>
    <SearchBar></SearchBar>
    <Categories></Categories>
    <Products></Products>
    <BottomNavigation></BottomNavigation>
  </div>;
};

export default App;
