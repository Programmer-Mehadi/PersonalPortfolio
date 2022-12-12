import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/routes';


function App() {
  return (
    <div className="App font-mono">
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
