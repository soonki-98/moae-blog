import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import theme from "../../styles/theme";

const Header = () => {
  return (
    <Wrapper>
      <h1>
        <a href="/.">Moaeblog</a>
      </h1>
      <section>
        <button id="search-btn">
          <GoSearch size={20} />
        </button>
        <button id="login-btn">로그인</button>
      </section>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  h1 {
    margin: 0;
  }
  section {
    display: flex;
    button {
      display: flex;
      align-items: center;
      margin: 0 10px;
      padding: 7px 18px;
      border: none;
      cursor: pointer;
    }
  }
  #login-btn {
    border: 1px solid;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: ${theme.COLORS.MAIN};
    transition: 0.3s;
    &:hover {
      opacity: 0.9;
    }
  }
  #search-btn {
    border-radius: 50%;
    background: none;
    padding: 10px;
    transition: 0.3s;
    &:hover {
      background-color: #eeeeee;
    }
  }
`;
