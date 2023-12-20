import { Route, Routes } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
