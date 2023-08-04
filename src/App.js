import './App.css';
import { BrowserRouter } from "react-router-dom"; 
import { AppRouter } from './components/AppRouter';


function App() {
  return (
    <BrowserRouter>
        <div className='app_container w-100 h-100'>
            <AppRouter />
        </div>
    </BrowserRouter>
  );
}

export default App;
