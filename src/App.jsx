import Main from "./components/Main";
import AllProjects from "./components/AllProjects";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
