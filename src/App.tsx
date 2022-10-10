import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './components/A';
import ComponentB from './components/B';
import { Dispatch, SetStateAction } from 'react';

interface States {
  number1: number,
  number2: number,
  setNumber1: Dispatch<SetStateAction<number>>;
  setNumber2: Dispatch<SetStateAction<number>>;
}

interface Context {
  states: States
}

export const AppContext = React.createContext({} as Context);

function App() {
  const [number1, setNumber1] = React.useState<number>(0);
  const [number2, setNumber2] = React.useState<number>(0);

  const states: States = {
    number1,
    number2,
    setNumber1,
    setNumber2,
  }
  return (
    <AppContext.Provider value={{ states }}>
      <div className="App">
        <ComponentA />
        <ComponentB />
      </div>
    </AppContext.Provider>
  );
}

export default App;
