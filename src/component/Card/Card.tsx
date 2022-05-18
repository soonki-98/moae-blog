import styled from "styled-components";
import Description from "./Description";
import Footer from "./Footer";
import Image from "./Image";

const Card = () => {
  return (
    <Wrapper>
      <Image />
      <Description />
      <Footer />
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: calc(20% - 2rem);
  margin: 1rem;
  border-radius: 6px;
  box-shadow: 0 3px 3px #e6e6e6;
  transition: 0.3s;
  &:hover {
    transform: translateY(-6px);
  }
`;
