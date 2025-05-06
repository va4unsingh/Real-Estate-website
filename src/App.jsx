import { Contact } from "lucide-react";
import "./App.css";
import About from "./component/About";

import Header from "./component/Header";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
