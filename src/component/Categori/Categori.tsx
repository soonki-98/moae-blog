import styled from "styled-components";

const Categori = () => {
  return (
    <CategoriSection>
      <ul>
        <li>
          <a href="/frontend">Front-End</a>
        </li>
        <li>
          <a href="/backend">Back-End</a>
        </li>
        <li>
          <a href="/design">Design</a>
        </li>
        <li>
          <a href="cs">Computer Science</a>
        </li>
      </ul>
    </CategoriSection>
  );
};

export default Categori;

const CategoriSection = styled.section`
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 0 4rem;
  height: 4rem;
  ul {
    display: flex;
    margin-left: -10px;
  }
  li {
    padding: 0 10px;
  }
  a {
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(25, 20, 16);
  }
`;
