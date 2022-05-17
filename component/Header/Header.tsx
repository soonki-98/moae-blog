import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>Moaeblog</h1>
      <section>
        <button>검색</button>
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
    button {
      margin: 0 10px;
    }
  }
`;
