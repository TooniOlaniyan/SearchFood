import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  return (
    <div className="w-full">
      <Header />
      <div className='p-10'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App
