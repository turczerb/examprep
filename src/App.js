import "./App.css";
import FruitList from "./components/FruitList";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <FruitList />
    </div>
  );
}

export default App;
