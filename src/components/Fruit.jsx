const Fruit = (props) => {
  return (
    <div className="fruit">
      <h1>{props.genus}</h1>
      <p>{props.name}</p>
      <p>{props.family}</p>
      <p>{props.order}</p>
      <button>Show more</button>
    </div>
  );
};

export default Fruit;
