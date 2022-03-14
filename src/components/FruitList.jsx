import { useState, useEffect } from "react";
import Fruit from "./Fruit";
import data from "../data";

const FruitList = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="fruit-list">
      {data.map((item, index) => {
        return (
          <Fruit
            key={index}
            genus={item.genus}
            name={item.name}
            family={item.family}
            order={item.order}
          />
        );
      })}
    </div>
  );
};

export default FruitList;
