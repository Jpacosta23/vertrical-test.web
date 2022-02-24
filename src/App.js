import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Photo from "./pages/Photo/Photo";
import Navigation from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/photo/:id" element={<Photo />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
