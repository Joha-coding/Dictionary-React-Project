import "./App.css";
import Garlic_Branding from "./Garlic_Branding.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={Garlic_Branding}
            alt="Garlic logo"
            className="App-logo img-fluid"
          />
        </header>
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://github.com/Joha-coding"
            target="_blank"
            rel="noreferrer"
          >
            Joha
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/Joha-coding/New-York-Project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://mellow-pie-5a1106.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
