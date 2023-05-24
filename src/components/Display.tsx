const Display = ({ display }: string) => {
  return (

      <div
        className="bg-zinc-700 my-5 h-full text-zinc-100 font-mono mx-3 py-4 rounded-md"
        id="display"
      >
        {display}
      </div>
   
  );
};

export default Display;
