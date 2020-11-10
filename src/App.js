import './css/App.css';

import Navbar from './components/shared/Navbar';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;
