import logo from '../logo.svg';
import '../App.css';
import bio from "../data/bio.js";
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import About from "./About.js"
import Links from "./Links.js"
import TableOfContents from "./TableOfContents.js"
import DisplaySelectedContent from "./DisplaySelectedContent"
import Title from "./Title"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>

      <TableOfContents />

      <DisplaySelectedContent />

      <p>
      </p>
    </div>
  );
}

export default App;
