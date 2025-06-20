import "./App.css";
import About from "./component/About";
import Header from "./component/Header";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";

import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";
import { useEffect } from "react";
// import "react-toastify/dist/ReactToastify.css"

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
