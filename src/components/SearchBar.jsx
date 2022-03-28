import { useState } from "react";
import data from "../data";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
    if (search.length > 2) {
      return filterData();
    } else {
      return props.setFruitData(data);
    }
  };

  const filterData = () =>
    props.setFruitData(
      data.filter((el) => {
        //if no input the return the original
        if (search === "") {
          return el;
        }
        //return the item which contains the user input
        else {
          console.log(el);
          return (
            el.name.toLowerCase().includes(search) ||
            el.genus.toLowerCase().includes(search)
          );
        }
      })
    );

  return (
    <div className="search">
      <h1>Search</h1>
      <input type="text" placeholder="search " onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBar;
