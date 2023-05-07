import './App.css';
import Header from'./components/header/Header'
import Landpage from './pages/landpage/Landpage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
          <Header/>
          <Landpage/>
    </div>
  )

}

export default App;
