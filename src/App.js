import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Work from "./components/Work";

function App() {

  return (
    <div className="app">
      <Header/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
