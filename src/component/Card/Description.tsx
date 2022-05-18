import styled from "styled-components";
import theme from "../../styles/theme";

const Description = () => {
  return (
    <Wrapper>
      <div id="title">
        <h3>타이틀</h3>
      </div>
      <div id="description">
        <p>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </p>
        <span>2022년 5월 25일</span>
      </div>
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  #title {
    h3 {
      font-size: ${theme.FONT.HEAD6.fontSize};
      font-weight: ${theme.FONT.HEAD6.fontWeight};
      margin: 0;
    }
  }
  #description {
    p {
      overflow-wrap: break-word;
      word-break: break-word;
      height: calc(${theme.FONT.SMALL.fontSize} * 1.5 * 4);
      font-size: ${theme.FONT.SMALL.fontSize};
      line-height: 1.5;
      overflow: hidden;
    }
    span {
      font-size: ${theme.FONT.SMALL.fontSize};
    }
  }
`;
