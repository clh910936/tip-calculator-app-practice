import React, { useReducer } from 'react';
import Container from './components/Container';
import { MyReducer, InitialReducerState} from './util/reducer.js';
import './styles/App.css';

function App() {
  const [state, dispatch] = useReducer(MyReducer, InitialReducerState);
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href='https://fonts.googleapis.com/css2?family=Space+Mono&display=swap' rel="stylesheet" />
      <Container state={state} dispatch={dispatch}/>
      <p>New Feature</p>
    </div>
  );
}

export default App;
