import styled from "styled-components";
import theme from "../../styles/theme";

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
    font-size: ${theme.FONT.HEAD5.fontSize};
    font-weight: ${theme.FONT.HEAD5.fontWeight};
    color: ${theme.COLORS.MAINDARK};
  }
`;
