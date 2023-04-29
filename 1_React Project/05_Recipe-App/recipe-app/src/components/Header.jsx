import {
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  MealSelect,
  MainButton,
} from "../styles/components.style/Header.style";

const Header = ({
  setQuery,
  setSelectedMeal,
  mealType,
  getData,
  selectedMeal,
  query,
}) => {
  const handleSubmit = (e) => {
    e.preaventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>Recipe app</MainHeader>
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
