import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <Wrapper>
      <h1>
        <a href="/.">Moaeblog</a>
      </h1>
      <section>
        <button>
          <GoSearch />
        </button>
        <button>login</button>
      </section>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0 4rem;
  height: 4rem;
  margin-bottom: 50px;
  h1 {
    margin: 0;
  }
  section {
    display: flex;
    button {
      display: flex;
      align-items: center;
      margin: 0 10px;
      background: none;
      padding: 5px;
      border: none;
      cursor: pointer;
    }
  }
`;
