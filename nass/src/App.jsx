import Header from "./components/Header/Header";
import Facilities from "./components/Facilities/Facilities";
import Clientsay from "./components/Clientsay/Clientsay";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        {/* <div className="white-gradient" /> */}

        <div className="div-cont" />
        <Header />
        <Facilities />
        <Clientsay />
        <hr className="h-d-line" />

        <Footer />
        
      </div>
    </div>
  );
}

export default App;
