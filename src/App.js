import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import './App.css'


function App() {

  return (
    
    <div className="App">
      
      <BrowserRouter >
        <NavBar />
        <AppRouter/>
      </BrowserRouter>
        


    </div>
  );
}

export default App;
