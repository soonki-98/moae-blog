import styled from "styled-components";
import theme from "../../styles/theme";

const Categori = () => {
  return (
    <CategoriSection>
      <ul>
        <li>
          <h5>
            <a href="/frontend">Front-End</a>
          </h5>
        </li>
        <li>
          <h5>
            <a href="/backend">Back-End</a>
          </h5>
        </li>
        <li>
          <h5>
            <a href="/design">Design</a>
          </h5>
        </li>
        <li>
          <h5>
            <a href="cs">Computer Science</a>
          </h5>
        </li>
      </ul>
    </CategoriSection>
  );
};

export default Categori;

const CategoriSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin-top: 1.5rem;
  ul {
    display: flex;
    margin-left: -10px;
  }
  li {
    padding: 0 10px;
  }
  a {
    position: relative;
    color: ${theme.COLORS.MAINDARK};
    &:hover {
      &::before {
        content: "";
        width: 100%;
        border: 1px solid;
        position: absolute;
        bottom: -10px;
      }
    }
  }
  h5 {
    margin: 0;
  }
`;
