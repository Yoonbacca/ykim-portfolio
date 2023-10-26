import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sidenav />
      <Home />
      <Work />
      <Projects />
    </div>
  );
}

export default App;
