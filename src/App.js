import './App.css';
import Register from './components/Register';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';

function App() {

const isRegistered = useSelector(state=>state.register.isRegistered)
  return (
    <div className="App">
{!isRegistered && <Register/>}
{isRegistered && <Auth/>}
  </div>
  );
}

export default App;
