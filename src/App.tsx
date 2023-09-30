import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import TicketPage from "@/pages/ticket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/tickets/:id" element={<TicketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
