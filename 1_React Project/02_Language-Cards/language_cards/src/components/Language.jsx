import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ img, name, options }) => {
  const [showImage, setShowImage] = useState(true);
  console.log(showImage);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-2 h-100 lang-card"
      type="button"
      onClick={(e) => setShowImage(!showImage)}
    >
      {showImage && (
        <Container>
          <Image className="lang-logo" src={img} alt="img_logo" width="70%" />
          <h3 className="display-6">{name}</h3>
        </Container>
      )}
      {!showImage && (
        <ol className=" h-100 d-flex flex-column justify-content-center">
          {options.map((optionsMap) => {
            return <li className="h5 text-start">{optionsMap}</li>;
          })}
        </ol>
      )}
    </Container>
  );
};
export default Language;
