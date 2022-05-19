import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const PostContainer = ({ children }: Props) => {
  return (
    <Wrapper>
      <Left></Left>
      <Main>{children}</Main>
      <Right></Right>
    </Wrapper>
  );
};

export default PostContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60vw;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
`;

const Left = styled.section`
  width: 15%;
`;

const Main = styled.main`
  width: 70%;
`;

const Right = styled.section`
  width: 15%;
`;
