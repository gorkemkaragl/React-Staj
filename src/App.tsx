import BottomNavigation from "./components/BottomNavigation";
import Categories from "./components/Categories";
import Navigation from "./components/Navigation";
import Products from "./components/Products";

const App = () => {
  return <div className="grid gap-4">
    <Navigation></Navigation>
    <Categories></Categories>
    <Products></Products>
    <BottomNavigation></BottomNavigation>
  </div>;
};

export default App;
