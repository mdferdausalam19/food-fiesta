import "./App.css";
import Banner from "./components/Banner/Banner";
import CardSidebarContainer from "./components/CardSidebarContainer/CardSidebarContainer";
import Navbar from "./components/Navbar/Navbar";
import OurRecipes from "./components/OurRecipes/OurRecipes";

function App() {
  return (
    <div className="container mx-auto w-10/12 max-w-[1320px]">
      <header>
        {/* navbar-section */}
        <Navbar></Navbar>
        {/* banner-section */}
        <Banner></Banner>
      </header>
      <main>
        <OurRecipes></OurRecipes>
        <CardSidebarContainer></CardSidebarContainer>
      </main>
    </div>
  );
}

export default App;
