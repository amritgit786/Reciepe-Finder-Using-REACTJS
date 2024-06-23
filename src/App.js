import "./App.css";
import Navbar from "./Components/commom/Navbar";
import Home from "./pages/Home";
import Reciepes from "./pages/Reciepes";
import ReciepeDetails from "./Components/ReciepeDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reciepe" element={<Reciepes />} />
          <Route path="/reciepe/:reciepeId" element={<ReciepeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
