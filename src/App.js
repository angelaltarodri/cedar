import './App.css';
import logo from './images/logogrande_bn.png'
import Article from './components/Articles/Article';
function App() {

  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (window.scrollY >= 300)
      document.getElementById("Menu").style.position = "sticky"
      document.getElementById("Menu").style.top = "0px"
  }
  return (
    <div className="App">
      <div className="Nav">
        <img src={logo} alt="logo-cedar" className="logo_grande"/>  
      </div>
      <div className="Background">
        <div className="Container">
          <div id="Menu">
            <div>
              ARTÍCULOS
            </div>
          </div>
          <Article />
        </div>
      </div>
    </div>
  );
}

export default App;
