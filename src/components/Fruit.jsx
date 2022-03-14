import { useState } from "react";

const Fruit = (props) => {
  const [showMore, setShowMore] = useState(false);

  return showMore ? (
    <div className="fruit">
      <h1>{props.genus}</h1>
      <p>{props.name}</p>
      <p>{props.family}</p>
      <p>{props.order}</p>
      <p> Fat:{props.nutritions.fat}</p>
      <p> Sugar:{props.nutritions.sugar}</p>
      <p> Protein:{props.nutritions.protein}</p>

      <button onClick={() => setShowMore(!showMore)}>Show less</button>
    </div>
  ) : (
    <div className="fruit">
      <h1>{props.genus}</h1>
      <p>{props.name}</p>
      <p>{props.family}</p>
      <p>{props.order}</p>

      <button onClick={() => setShowMore(!showMore)}>Show more</button>
    </div>
  );
};

export default Fruit;

//show more stattel érjük el turneri ? true:false hogy tudjunk többet mutatni a gyümölcs adataiból
