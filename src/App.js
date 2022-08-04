import { Routes, Route } from 'react-router-dom';
import { Markets } from './containers/Markets/Markets';
import { Coin } from './containers/Coin/Coin';

import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">CMOM Technical Test</header>
        <Routes>
            <Route path="/" element={<Markets />} />
            <Route path="/:coinId" element={<Coin />} />
        </Routes>
    </div>
  );
}

export default App;
