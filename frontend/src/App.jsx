import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PriceList from "./pages/PriceList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price-list" element={<PriceList />} />
      </Routes>
    </BrowserRouter>
  );
}