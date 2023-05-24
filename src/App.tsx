import { useState } from 'react';
import Display from './components/Display';

import './App.css';
import DrumPad from './components/DrumPad';

function App() {
  const [display, setDisplay] = useState<string>('');

  return (
    <div className="container bg-zinc-200 p-5 mx-auto max-w-auto min-w-content rounded-lg">
      <h1 className="text-3xl text-zinc-700 font-bold">Drum Machine</h1> 
      <Display display={display} />
      <div className="container mx-auto flex flex-col gap-4">
        <div className="flex gap-2">
          <DrumPad setDisplay={setDisplay} soundName="Heater-1" soundId="Heater 1" keyName="Q"/>
          <DrumPad setDisplay={setDisplay} soundName="Heater-2" soundId="Heater 2" keyName="W"/>
          <DrumPad setDisplay={setDisplay} soundName="Heater-3" soundId="Heater 3" keyName="E"/>
        </div>
        <div className="flex gap-2">  
          <DrumPad setDisplay={setDisplay} soundName="Heater-4_1" soundId="Heater 4" keyName="A"/>
          <DrumPad setDisplay={setDisplay} soundName="Heater-6" soundId="Clap" keyName="S"/>
          <DrumPad setDisplay={setDisplay} soundName="Dsc_Oh" soundId="Open HH" keyName="D"/>
        </div>
        <div className="flex gap-2">
          <DrumPad setDisplay={setDisplay} soundName="Kick_n_Hat" soundId="Kick'n'hat" keyName="Z"/>
          <DrumPad setDisplay={setDisplay} soundName="RP4_KICK_1" soundId="Kick" keyName="X"/>
          <DrumPad setDisplay={setDisplay} soundName="Cev_H2" soundId="Closed HH" keyName="C"/>
        </div>
      </div>
    </div>
  );
}

export default App;
