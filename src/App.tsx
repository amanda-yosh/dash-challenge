import Companies from './panels/Companies/Companies';
import Header from './panels/Header/Header';
import Analytics from './panels/Analytics/Analytics';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main-container'>
        <Analytics />
        <Companies />
      </section>
    </div>
  );
}

export default App;
