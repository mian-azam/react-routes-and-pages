import {Routes, Route} from 'react-router-dom';

import Header from "./components/Header";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Tutorials from "./pages/Tutorials";
import About from "./pages/About"
import './styles/index.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/documentation" element={<Documentation />}/>
          <Route exact path="/tutorials" element={<Tutorials />}/>
          <Route exact path="/about-us" element={<About />}/>
        </Routes>
      </main>
    </>

  );
}

export default App;
