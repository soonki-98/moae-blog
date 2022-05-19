import styled from "styled-components";
import theme from "../../styles/theme";

const PostHeader = () => {
  return (
    <Wrapper>
      <InputContainer>
        <input id="title" placeholder="제목을 입력하세요" />
        <hr />
        <input id="tags" placeholder="태그를 작성하세요" />
      </InputContainer>
      <SubmitContainer>
        <button id="submit" type="button">
          제출하기
        </button>
        <button id="goback" type="button">
          돌아가기
        </button>
      </SubmitContainer>
    </Wrapper>
  );
};

export default PostHeader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 6rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  input {
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    background: ${theme.COLORS.BG1};
  }
  #title {
    font-size: ${theme.FONT.HEAD1.fontSize};
    font-weight: ${theme.FONT.HEAD1.fontWeight};
    margin-bottom: 2rem;
    color: ${theme.COLORS.MAINDARK};
  }
  #tags {
    font-size: ${theme.FONT.HEAD4};
    max-width: 50%;
    color: #333333;
  }
  position: relative;
  hr {
    color: ${theme.COLORS.MAIN};
    background-color: ${theme.COLORS.MAIN};
    width: 15%;
    position: absolute;
    bottom: 30%;
    height: 5px;
    border: none;
  }
`;

const SubmitContainer = styled.div`
  button {
    padding: 6px 15px;
    border-radius: 6px;
    border: none;
    font-size: ${theme.FONT.HEAD5.fontSize};
    font-weight: bold;
    cursor: pointer;
  }
  #submit {
    background-color: ${theme.COLORS.MAIN};
    color: #fff;
    &:hover {
      opacity: 0.9;
    }
  }
  #goback {
    margin-left: 2rem;
    background-color: ${theme.COLORS.BG1};
    color: ${theme.COLORS.MAIN};
    &:hover {
      filter: brightness(90%);
    }
  }
`;
