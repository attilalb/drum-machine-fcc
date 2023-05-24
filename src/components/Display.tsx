const Display = ({ display }: string) => {
  return (
    <div className="my-5 container">
      <div
        className="bg-zinc-700 h-full text-zinc-100 font-mono mx-3 py-4 rounded-md"
        id="display"
      >
        {display}
      </div>
    </div>
  );
};

export default Display;
