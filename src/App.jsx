import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sidenav />
      <Home />
    </div>
  );
}

export default App;
