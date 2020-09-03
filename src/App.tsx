import React, {StrictMode} from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <div>
      <StrictMode>
        <AppRouter />
      </StrictMode>
    </div>
  );
}

export default App;
