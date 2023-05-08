const Display = (display: string) => {
  return (
    <div className="columns my-5">
      <div
        className="column is-8 is-offset-2 box has-background-dark has-text-light is-family-code mx-3"
        id="display"
      >
        {display}
      </div>
    </div>
  );
};

export default Display;
