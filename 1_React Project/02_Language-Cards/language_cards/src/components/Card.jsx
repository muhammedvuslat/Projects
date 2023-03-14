import Container from "react-bootstrap/Container"; // Bu şekilde Tavsiye edilir
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import Language from "./Language";
const Card = () => {
  console.log(data);
  return (
    <Container style={{ background: "#29b4f4" }} className="rounded-4 mt-4 p-4">
      <h1 className="text-white my-2">Language</h1>
      <Row className="g-3 justify-content-center ">
        {data.map((dataLang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Language {...dataLang} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Card;
