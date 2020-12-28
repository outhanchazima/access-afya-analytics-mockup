import './App.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <main className="main">
        <h1>Dashboard</h1>
        <Dashboard/>
      </main>
      
    </div>
  );
}

export default App;
