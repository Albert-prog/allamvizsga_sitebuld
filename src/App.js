import './src/App.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { styled } from '@material-ui/core/styles';

const MyIcon = styled(DehazeIcon)({
  height: 48,
  width: 48,
  padding: 15,
});

function App() {
  return (
    <div className="App">
      <nav>
        <MyIcon className="menuBtn"/>
      </nav>
      <h1>Jelentkezés</h1>
      <input type="text" placeholder="Név"></input>
      <input type="email" placeholder="Email cím"></input>
      <input type="number" placeholder="Telefonszám"></input>
      <div className="checkbox">
      <input type="checkbox"></input>
        <label>Elovastam és elfogadtam az <span>Adatkezelési Tájékoztatót</span></label>
      </div>
      <button>Elküld</button>
    </div>
  );
}

export default App;
