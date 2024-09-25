import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CardSidebarContainer from "./components/CardSidebarContainer/CardSidebarContainer";
import Navbar from "./components/Navbar/Navbar";
import OurRecipes from "./components/OurRecipes/OurRecipes";
import { toast } from "react-toastify";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  const handleWantToCook = (recipe) => {
    const isExist = wantToCook.find(
      (recipeItem) => recipeItem.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setWantToCook([...wantToCook, recipe]);
    } else {
      toast("This item already exists!");
    }
  };
  const handlePreparing = (cookItem) => {
    const removeItem = wantToCook.filter(
      (item) => item.recipe_id !== cookItem.recipe_id
    );
    setWantToCook(removeItem);
    const addItemToCooking = wantToCook.find(
      (item) => item.recipe_id === cookItem.recipe_id
    );
    setCurrentlyCooking([...currentlyCooking, addItemToCooking]);
  };
  return (
    <div className="container mx-auto w-11/12 md:w-10/12 max-w-[1320px]">
      <header>
        {/* navbar-section */}
        <Navbar></Navbar>
        {/* banner-section */}
        <Banner></Banner>
      </header>
      <main>
        <OurRecipes></OurRecipes>
        <CardSidebarContainer
          recipes={recipes}
          handleWantToCook={handleWantToCook}
          wantToCook={wantToCook}
          handlePreparing={handlePreparing}
          currentlyCooking={currentlyCooking}
        ></CardSidebarContainer>
      </main>
    </div>
  );
}

export default App;
