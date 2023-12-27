import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home.view";
import Landing from "./views/landing/landing.view";
import Detail from "./views/detail/detail.view";
import Cards from "./components/cards/cards.component";
import About from "./views/about/about.view";
import Form from "./views/form/form.view";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/drivers" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
