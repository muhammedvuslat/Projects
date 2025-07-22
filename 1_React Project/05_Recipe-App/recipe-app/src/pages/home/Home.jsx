import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import Cards from "../../components/cards/Cards";

const Home = () => {
  const [selectMeal, setSelectMeal] = useState();
  const [searchValue, setSearchValue] = useState();
  const [recipes, setRecipes] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ID = process.env.REACT_APP_API_ID;
  const BASE_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${selectMeal}`;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(BASE_URL);
      setRecipes(data.hits);
    };
    getData();

    console.log(selectMeal);
    console.log(searchValue);
    console.log(recipes);
    return () => {};
  }, [selectMeal, searchValue, BASE_URL]);
  return (
    <>
      <Header setSelectMeal={setSelectMeal} setSearchValue={setSearchValue} />
      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </>
  );
};

export default Home;
