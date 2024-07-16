
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import About from "./pages/about";
import Profile from "./pages/Profile";
function App() {
  return (
    <div>
        <BrowserRouter>

      
        <Header />
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
