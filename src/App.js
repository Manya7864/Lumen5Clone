import './App.css';
import { Navbar } from '../src/components/navbar/Navbar';
import { Footer } from '../src/components/footer/Footer';
import { Routes, Route} from 'react-router-dom'
import Login from './context/Login';

function App() {
  return (
    <div className="App">
{/* uncomment Navbar and Footer to see changes */}
     <Navbar/>
   
     <Routes>
      {/* <Route path='login' element={<Login/>} /> */}     
     </Routes>


     
     <Footer/>
    </div>
  );
}

export default App;
