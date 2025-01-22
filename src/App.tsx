import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./css/Home.css";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
