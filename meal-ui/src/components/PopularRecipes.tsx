import RecipeCard from "./RecipeCard";

const PopularRecipes = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <h1 className="text-2xl font-bold">Popular Recipes</h1>
      <div className="flex gap-4">
        {/* kolon1 */}
        <div className="flex flex-1 flex-col">
          <RecipeCard id={"1"}></RecipeCard>
        </div>
        {/* kolon2 */}
        <div className="flex flex-1 flex-col">
          <RecipeCard id={"2"}></RecipeCard>
        </div>
      </div>
    </div>
  );
};

export default PopularRecipes;
