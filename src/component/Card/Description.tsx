import styled from "styled-components";

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
      margin: 0;
    }
  }
  #description {
    p {
      overflow-wrap: break-word;
      word-break: break-word;
      height: calc(0.875rem * 1.5 * 4);
      font-size: 0.875rem;
      line-height: 1.5;
      overflow: hidden;
    }
    span {
      font-size: 0.75rem;
    }
  }
`;
