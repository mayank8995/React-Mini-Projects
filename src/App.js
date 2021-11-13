import logo from './logo.svg';
import './App.css';
import Carousal from './Carousal/Carousal'
import CarousalSecond from './CarousalSecond/CarousalSecond';
import Counter from './Counter/Counter'; 
function App() {
  return (
    <div className="App">
      <CarousalSecond />
      <Counter />
    </div>
  );
}

export default App;
