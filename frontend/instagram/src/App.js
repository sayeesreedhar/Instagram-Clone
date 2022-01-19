import Homepage from './components/Homepage/Homepage';
import Loginpage from './components/Loginpage';

function App() {
  return (
    <div>
      {localStorage.getItem("users")==null||localStorage.getItem("users")==undefined?<Loginpage/>:<Homepage/>}
      
    </div>
  );
}

export default App;
