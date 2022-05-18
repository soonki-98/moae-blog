import styled from "styled-components";
import theme from "../../styles/theme";

const Footer = () => {
  return (
    <Wrapper>
      <div id="writer">
        <img
          src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90"
          alt=""
        />
        아이유
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  padding-top: 0;
  #writer {
    display: flex;
    align-items: center;
    font-size: ${theme.FONT.SMALL.fontSize};
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
`;
