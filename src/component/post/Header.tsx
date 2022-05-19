import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const PostHeader = () => {
  return (
    <Wrapper>
      <Title>
        <h1>타이틀</h1>
      </Title>
      <WriteInfo>
        <b>@soonki</b>
        <span>2022년 05월 22일</span>
      </WriteInfo>
      <Tags>
        <li>
          <button>react</button>
        </li>
        <li>
          <button>react</button>
        </li>
        <li>
          <button>react</button>
        </li>
      </Tags>
    </Wrapper>
  );
};

export default React.memo(PostHeader);

const Wrapper = styled.div`
  padding-right: 4rem;
`;

const Title = styled.div`
  h1 {
    font-weight: bolder;
  }
`;

const WriteInfo = styled.div`
  b {
    margin-right: 15px;
  }
`;

const Tags = styled.ul`
  display: flex;
  margin-top: 1rem;
  li {
    margin-right: 15px;
  }
  button {
    color: ${theme.COLORS.MAINDARK};
    border-radius: 20px;
    border: none;
    background-color: #eaeaea;
    padding: 7px 18px;
    font-size: 15px;
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
  }
`;
