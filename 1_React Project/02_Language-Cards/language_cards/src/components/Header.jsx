// import { Container } from "react-bootstrap"; //! Bu şekilde kullanılıbilinir
import Container from "react-bootstrap/Container"; // Bu şekilde Tavsiye edilir
import Image from "react-bootstrap/Image";
import headerLogo from "../assets/react.svg";
const Header = () => {
  return (
    <Container>
      <Image style={{ width: "250px" }} fluid src={headerLogo} />
    </Container>
  );
};
export default Header;
