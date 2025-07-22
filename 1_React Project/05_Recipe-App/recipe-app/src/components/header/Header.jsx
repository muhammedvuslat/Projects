import React, { useState } from "react";
import HeaderDiv, {
  HeaderButton,
  HeaderForm,
  HeaderTitle,
  InputStyle,
  SelectStyle,
} from "./Header.style";

const Header = ({ setSelectMeal, setSearchValue }) => {
  const mealType = ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];
  const [changeSearch, setChangeSearch] = useState("");
  const [changeMeal, setChangeMeal] = useState("--");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!changeSearch?.trim() || changeMeal === "--") {
      alert("Please write an item in the search field");
      return;
    }
    setSearchValue(changeSearch.toLocaleLowerCase());
    setSelectMeal(changeMeal.toLowerCase());
  };

  return (
    <>
      <HeaderDiv>
        <HeaderTitle>React Recipe APP</HeaderTitle>
        <HeaderForm onSubmit={handleSubmit}>
          <InputStyle
            type="text"
            placeholder="Search"
            onChange={(e) => setChangeSearch(e.target.value)}
          ></InputStyle>
          <HeaderButton>Search</HeaderButton>
          <SelectStyle
            name=""
            id=""
            onChange={(e) => setChangeMeal(e.target.value)}
          >
            <option value="--">Select Meal</option>
            {mealType.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </SelectStyle>
        </HeaderForm>
      </HeaderDiv>
    </>
  );
};

export default Header;
