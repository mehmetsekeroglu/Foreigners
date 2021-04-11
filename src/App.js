
import './App.css';
import foreigners from './service/foreigners.json'
import Header from './components/Header'
import PersonContainer from './components/PersonContainer'


function App() {
  return (
    <div className="App">
     <Header/>
     <PersonContainer list={foreigners}/>
    </div>
  );
}



export default App;
