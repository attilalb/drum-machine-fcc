import { useState } from 'react';

import './App.css';

function App() {
  const [display, setDisplay] = useState(0);

  return (
    <>
      <div className="container has-background-light p-5">
        <h1 className="title">Drum Machine</h1>
        <div className="columns my-5">
          <div
            className="column is-8 is-offset-2 box has-background-dark has-text-light is-family-code mx-3"
            id="display"
          >
            Display
          </div>
        </div>
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-4">
              <div className="box has-background-dark has-text-light is-family-code">Q</div>
            </div>
            <div className="column is-4">
              <div className="box has-background-dark has-text-light is-family-code">W</div>
            </div>
            <div className="column is-4">
              <div className="box has-background-dark has-text-light is-family-code">E</div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-4">
              <div className="box has-background-dark has-text-light is-family-code">A</div>
            </div>
            <div className="column is-4">
              <div className="box has-background-dark has-text-light is-family-code">S</div>
            </div>
            <div className="column is-4">
              <div className="box has-background-dark has-text-light is-family-code">D</div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-4">
              <div className="box has-background-dark has-text-light is-family-code">Z</div>
            </div>
            <div className="column is-4">
              <div className="box has-background-dark has-text-light is-family-code">X</div>
            </div>
            <div className="column is-4">
              <div className="box has-background-dark has-text-light is-family-code">C</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
