import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Home from './components/Home';
import Work from './components/Work';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sidenav />
      <Home />
      <Work />
    </div>
  );
}

export default App;
