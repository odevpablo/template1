import './App.css';
import View from './components/view';
import Logo from "./imgs/logorpadv.png"


function App() {
  return (
    <div className="App">
        <img src={Logo} width={150} alt="RpAdvocacia" title='rp' id='logo'/>
        <View/>
    </div>
  );
}

export default App;
