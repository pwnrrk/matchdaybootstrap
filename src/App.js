import "./App.css";
import "@r.phuwanat/minbootstrap/css/minBootstrap.css";
import "@r.phuwanat/minbootstrap/js/minBootstrap";
import "highlight.js/styles/atom-one-dark.css";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-5">
        <Routes />
      </div>
    </div>
  );
}

export default App;
