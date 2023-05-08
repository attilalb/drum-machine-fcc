import { useState } from 'react';
import Display from './comps/Display';

import './App.css';

function App() {
  const [display, setDisplay] = useState('Press a drum pad');

  return (
    <>
      <div className="container has-background-light p-5">
        <h1 className="title">Drum Machine</h1>
        <div className="columns my-5">
          <div
            className="column is-8 is-offset-2 box has-background-dark has-text-light is-family-code mx-3"
            id="display"
          >
            {display}
          </div>
        </div>
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-4">
              <div
                className="box has-background-dark has-text-light is-family-code"
                onClick={() => setDisplay('Bass')}
              >
                Q
              </div>
            </div>
            <div className="column is-4">
              <div
                className="box has-background-dark has-text-light is-family-code"
                onClick={() => setDisplay('Snare')}
              >
                W
              </div>
            </div>
            <div className="column is-4">
              <div
                className="box has-background-dark has-text-light is-family-code"
                onClick={() => setDisplay('Clap')}
              >
                E
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-4">
              <div
                className="box has-background-dark has-text-light is-family-code"
                onClick={() => setDisplay('Hi-Hat Closed')}
              >
                A
              </div>
            </div>
            <div className="column is-4">
              <div
                className="box has-background-dark has-text-light is-family-code"
                onClick={() => setDisplay('Hi-Hat Open')}
              >
                S
              </div>
            </div>
            <div className="column is-4">
              <div
                className="box has-background-dark has-text-light is-family-code"
                onClick={() => setDisplay('Hi-Hat Pedal')}
              >
                D
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-4">
              <div
                className="box has-background-dark has-text-light is-family-code"
                onClick={() => setDisplay('Crash')}
              >
                Z
              </div>
            </div>
            <div className="column is-4">
              <div
                className="box has-background-dark has-text-light is-family-code"
                onClick={() => setDisplay('Ride')}
              >
                X
              </div>
            </div>
            <div className="column is-4">
              <div
                className="box has-background-dark has-text-light is-family-code"
                onClick={() => setDisplay('Rimshot')}
              >
                C
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
