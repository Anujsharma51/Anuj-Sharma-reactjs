import React from 'react';
import AllRouters from './AllRoutes/AllRouters';

import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <AllRouters/>
    </div>
  );
}

export default App;
