import axios from "axios";
import { React, useState } from "react";
import Header from "../components/Header";
import { HeaderText, HomeDiv } from "../styles/pages.style/Home.style";
import Cards from "../components/Cards";

const Home = () => {
  const APP_ID = "e9ad5c8c";
  const APP_KEY = "359bb19e1143a5bb4679c215903c1cb7";

  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");
  const [recipes, setRecipes] = useState(null);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  // url web erişimi için = https://api.edamam.com/search?q=egg&app_id=e9ad5c8c&app_key=359bb19e1143a5bb4679c215903c1cb7&mealType=dinner

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the form");
    }
  };

  // const consol = () => {
  //   console.log(recipes);
  //   // console.log(recipes.length);

  //   // getData();
  // };

  console.log(recipes);
  return (
    <HomeDiv recipes={recipes}>
      {/* <button
        onClick={() => {
          getData();
          consol();
        }}
      >
        Getir
      </button> */}
      <div>
        <Header
          setQuery={setQuery}
          setSelectedMeal={setSelectedMeal}
          mealType={mealType}
          getData={getData}
        />
      </div>

      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </HomeDiv>
  );
};

export default Home;
