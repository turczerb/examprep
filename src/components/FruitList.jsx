import { useState, useEffect } from "react";
import Fruit from "./Fruit";
import data from "../data";
import SearchBar from "./SearchBar";

const FruitList = (props) => {
  const [loading, setLoading] = useState(false);
  const [fruitData, setFruitData] = useState(data);

  return fruitData.length > 0 ? (
    <div>
      <SearchBar data={fruitData} setFruitData={setFruitData} />
      <div className="fruit-list">
        {fruitData.map((item, index) => {
          return (
            <Fruit
              key={index}
              genus={item.genus}
              name={item.name}
              family={item.family}
              order={item.order}
              nutritions={item.nutritions}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      <SearchBar data={fruitData} setFruitData={setFruitData} />
      <div>no fruit found</div>
    </div>
  );
};

export default FruitList;
