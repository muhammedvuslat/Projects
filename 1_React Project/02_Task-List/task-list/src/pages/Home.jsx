import axios from "axios";
import { useEffect, useState } from "react";
import TutorailList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://6384a20c4ce192ac605e5da9.mockapi.io/api/vtask";

  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setTutorials(data);
      console.log(tutorials);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <TutorailList />
    </>
  );
};
export default Home;
