import '../style/App.css';
import Autocomplete from './autocomplete';

function App() {

  let data = [
    { name: 'Poland', population: 410000 },
    { name: 'Portugal', population: 460000 },
    { name: 'Pakistan', population: 520000 },
    { name: 'Puertoryko', population: 520000 },
    { name: 'Germany', population: 660000 },
    { name: 'Guatemala', population: 660000 },
    { name: 'Guana', population: 660000 },
    { name: 'Zupa rybna', population: 2 }
  ];

  return (
    <>
      <div className="App">
        <Autocomplete data={data} />
      </div>

    </>
  );
}

export default App;