import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Welcome from "./pages/welcome";
import Social from "./pages/social";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Testimonial from "./pages/testimonial";
import Project from "./pages/project";
import About from "./pages/about";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/social":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/skills":
        title = "";
        metaDescription = "";
        break;
      case "/testimonial":
        title = "";
        metaDescription = "";
        break;
      case "/project":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/social" element={<Social />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;
