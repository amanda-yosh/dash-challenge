import Companies from './panels/Companies/Companies';
import Header from './panels/Header/Header';
import Analytics from './panels/Analytics/Analytics';
import Users from './panels/Users/Users';

import './App.scss';
import SearchBar from './panels/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main-container'>
        <SearchBar />
        <Analytics />
        <Companies />
        <Users />
      </section>
    </div>
  );
}

export default App;
