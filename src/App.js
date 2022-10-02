import { Routes, Route } from "react-router-dom";
import Screen1 from "./Pages/Screen1";
import Screen2 from "./Pages/Screen2";
import Screen3 from "./Pages/Screen3";
import Screen4 from "./Pages/Screen4";

function App() {
  return (
    <div>
       <Routes>
        <Route exact path="/" element={<Screen1 />} />
        <Route exact path="/screen2" element={<Screen2 />} />
        <Route exact path="/screen3" element={<Screen3 />} />
        <Route exact path="/screen4" element={<Screen4 />} />
    </Routes>
   </div>
  );
}

export default App;
