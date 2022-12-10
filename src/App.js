import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './pages/Home/Home/Home';


function App() {
  return (
    <div className="App">
      <Toaster />
      <Home></Home>
    </div>
  );
}

export default App;
