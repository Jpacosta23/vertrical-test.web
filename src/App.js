import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Photo from "./pages/Photo/Photo";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/photo/:id" element={<Photo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
