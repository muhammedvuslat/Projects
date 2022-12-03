import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const APP_ID = "e9ad5c8c";
  const APP_KEY = "359bb19e1143a5bb4679c215903c1cb7";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipses] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);

    setRecipses(data.hits);
  };
  console.log(recipes);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header setQuery={setQuery} />
    </div>
  );
};

export default Home;
