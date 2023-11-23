import logo from '../logo.svg';
import '../App.css';
import bio from "../data/bio.js";
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import About from "./About.js"
import Links from "./Links.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
        <About />
        <Links />
        <p>
          {bio.firstName}
        </p>

      </header>
    </div>
  );
}

export default App;
