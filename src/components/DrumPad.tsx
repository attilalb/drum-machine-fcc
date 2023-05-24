const linkBase = 'https://s3.amazonaws.com/freecodecamp/drums/';

const DrumPad = ({ setDisplay, soundName, keyName, soundId }) => {
  const handleClick = () => {
    const sound = document.getElementById(keyName) as HTMLAudioElement;
    sound.play();
    setDisplay(soundId);
  };

  return (
    <div
      id={soundId}
      className="bg-zinc-700 basis-1/3 text-zinc-100 p-3 drum-pad"
      onClick={handleClick}
    >
      <audio
        id={keyName}
        src={linkBase + soundName + '.mp3'}
        className="clip"
      ></audio>
      {keyName}
    </div>
  );
};

export default DrumPad;
