import './App.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
