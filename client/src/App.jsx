import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home.view";
import Landing from "./views/landing/landing.view";
import Detail from "./views/detail/detail.view";
import Cards from "./components/cards/cards.component";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/drivers" element={<Cards />} />
      </Routes>
    </>
  );
}

export default App;
