import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import "./style.scss";
import AnimatedRoute from "./components/AnimatedRoute";

function App() {
  return (
    <Router>
      <AnimatedRoute />
    </Router>
  );
}

export default App;
