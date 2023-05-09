import './App.css';
import Header from'./components/header/Header'
import Landpage from './pages/landpage/Landpage';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
          <Header/>
          <Landpage/>
          <Footer/>
    </div>
  )

}

export default App;
