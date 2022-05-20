import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdThumbUp, MdOutlineShare, MdOutlineThumbUpAlt } from "react-icons/md";
import theme from "../../styles/theme";

interface Props {
  children: React.ReactNode;
}

const PostContainer = ({ children }: Props) => {
  const [isLike, setIsLike] = useState(false);

  const toggleIsLike = () => {
    setIsLike(!isLike);
  };

  return (
    <Wrapper>
      <Side direction="left">
        <LikeAndShare>
          {isLike ? (
            <MdThumbUp color="#ce4c4c" onClick={toggleIsLike} />
          ) : (
            <MdOutlineThumbUpAlt onClick={toggleIsLike} />
          )}
          <MdOutlineShare />
        </LikeAndShare>
      </Side>
      <Main>{children}</Main>
      <Side direction="right">
        <p>자바스크립트 번들러 만들기</p>
        <p>자바스크립트 </p>
        <p>자바스크립트 만들기</p>
      </Side>
    </Wrapper>
  );
};

export default PostContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  @media (max-width: 568px) {
    width: 100vw;
  }
`;

const Side = styled.section<{
  direction: "left" | "right";
}>`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 200px;
  width: 20%;
  height: fit-content;
  ${({ direction }) => {
    switch (direction) {
      case "left":
        return css`
          align-items: center;
          right: 10rem;
        `;
      case "right":
        return css`
          align-items: "flex-end";
          left: 20rem;
          &::before {
            position: absolute;
            content: "";
            height: 100%;
            border: 1px solid;
            left: -10px;
          }
        `;
    }
  }}
  p {
    margin: 0;
    font-size: 14px;
    line-height: ${theme.FONT.SMALL.lineHeight};
  }
  @media (max-width: 568px) {
    display: none;
  }
`;

const Main = styled.main`
  width: 60%;
  @media (max-width: 568px) {
    width: 90%;
  }
`;

const LikeAndShare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid;
  border-radius: 50px;
  padding: 1rem;
  font-size: 40px;
  svg {
    margin: 5px;
    border: 1px solid ${theme.COLORS.MAINDARK};
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
  }
`;
