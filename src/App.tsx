import { useState } from 'react';
import Display from './components/Display';

import './App.css';

function App() {
  const [display, setDisplay] = useState<string>('Press a drum pad');

  return (
    <div className="container bg-zinc-200 p-5 mx-auto max-w-auto min-w-content">
      <h1 className="text-3xl font-bold">Drum Machine</h1>

      <Display display={display} />
      <div className="container mx-auto flex flex-col gap-4">
        <div className="flex gap-2">
          <div
            className="bg-zinc-700 basis-1/3 text-zinc-100 p-3"
            onClick={() => setDisplay('Bass')}
          >
            Q
          </div>
          <div
            className="bg-zinc-700 basis-1/3 text-zinc-100 p-3"
            onClick={() => setDisplay('Snare')}
          >
            W
          </div>

          <div
            className="bg-zinc-700 basis-1/3 text-zinc-100 p-3"
            onClick={() => setDisplay('Clap')}
          >
            E
          </div>
        </div>
        <div className="flex gap-2">
          <div
            className="bg-zinc-700 basis-1/3 text-zinc-100 p-3"
            onClick={() => setDisplay('Hi-Hat Closed')}
          >
            A
          </div>

          <div
            className="bg-zinc-700 basis-1/3 text-zinc-100 p-3"
            onClick={() => setDisplay('Hi-Hat Open')}
          >
            S
          </div>
          <div
            className="bg-zinc-700 basis-1/3 text-zinc-100 p-3"
            onClick={() => setDisplay('Hi-Hat Pedal')}
          >
            D
          </div>
        </div>
        <div className="flex gap-2">
          <div
            className="bg-zinc-700 basis-1/3 text-zinc-100 p-3"
            onClick={() => setDisplay('Crash')}
          >
            Z
          </div>

          <div
            className="bg-zinc-700 basis-1/3 text-zinc-100 p-3"
            onClick={() => setDisplay('Ride')}
          >
            X
          </div>

          <div
            className="bg-zinc-700 basis-1/3 text-zinc-100 p-3"
            onClick={() => setDisplay('Rimshot')}
          >
            C
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
