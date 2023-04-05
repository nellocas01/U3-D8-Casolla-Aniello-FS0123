import { Container } from "react-bootstrap";
import TheIceAge from "./TheIceAge";
import LordOfTheRings from "./LordOfTheRings";
import TheChroniclesOfNarnia from "./TheChroniclesOfNarnia";

function Main() {
  return (
    <>
      <h5 className="text-white fs-2 ms-3 px-2">The-Ice-Age</h5>
      <Container>
        <TheIceAge />
      </Container>

      <h5 className="text-white fs-2 ms-3 px-2">Lord-Of-The-Rings</h5>
      <Container>
        <LordOfTheRings />
      </Container>

      <h5 className="text-white fs-2 ms-3 px-2">The-Chronicles-Of-Narnia</h5>
      <Container>
        <TheChroniclesOfNarnia />
      </Container>
    </>
  );
}

export default Main;
