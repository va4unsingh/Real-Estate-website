import "./App.css";
import About from "./component/About";

import Header from "./component/Header";
import Projects from "./component/Projects";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
