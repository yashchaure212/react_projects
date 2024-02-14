import { useState } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Recomended from "./Recomended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //data
  const products = data;

  //Input Filter.
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filterdItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //Radio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Buttons filter
  const handleCLick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filterdItems;
    }

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, prevPrice, newPrice, reviews}) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        prevPrice={prevPrice}
        newPrice = {newPrice}
        reviews = {reviews}
      />
    )); 
  }

  const result = filteredData(products, selectedCategory, query);


  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Recomended handleCLick={handleCLick} />
      <Products result={result} />
    </>
  );
}

export default App;
