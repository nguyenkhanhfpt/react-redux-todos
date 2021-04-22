import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import RouterPage from "./Router/index";

function App() {
  return (
    <Router>
      <div className="App">
        <RouterPage />
      </div>
    </Router>
  );
}

export default App;
