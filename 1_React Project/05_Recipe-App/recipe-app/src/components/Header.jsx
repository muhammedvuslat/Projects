import {
  FoodInput,
  FormContainer,
  HeaderContainer,
  MealSelect,
  MainButton,
} from "../styles/components.style/Header.style";

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search Recipe"
          onChange={(e) => {
            setQuery(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <MealSelect
          name="mealType"
          id="mealType"
          onChange={(e) => {
            setSelectedMeal(e.target.value);
            // console.log(e.target.value);
          }}
        >
          {mealType.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </MealSelect>
        <MainButton type="submit">Search</MainButton>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
