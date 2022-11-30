import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://6384a20c4ce192ac605e5da9.mockapi.io/api/vtask";

  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutor={tutorials} getTutorials={getTutorials} />
    </>
  );
};
export default Home;
