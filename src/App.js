import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.js";
import Home from "./components/home/home";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
