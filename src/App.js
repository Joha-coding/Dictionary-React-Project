import "./App.css";
import Garlic_Branding from "./Garlic_Branding.png";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={Garlic_Branding}
          alt="Garlic logo"
          className="App-logo img-fluid"
        />
        <a href="#" className="btn btn-primary shadow">
          Test Bootstrap
        </a>
      </header>
    </div>
  );
}
