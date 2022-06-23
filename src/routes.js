import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import List from "./pages/List";
import Counter from "./pages/Counter";
import SelectName from "./pages/SelectName";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/select" element={<SelectName />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes