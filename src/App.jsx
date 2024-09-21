import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="container mx-auto w-10/12 max-w-[1320px]">
        {/* navbar-section */}
        <Navbar></Navbar>
        {/* banner-section */}
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
