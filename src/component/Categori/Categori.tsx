import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const Categori = () => {
  const categories = [
    {
      id: "1283078as",
      name: "Front-End",
      link: "frontend",
    },
    {
      id: "1237uyxzc",
      name: "Back-End",
      link: "backend",
    },
    {
      id: "123213uyxzc",
      name: "Design",
      link: "design",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "computerscience",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "computerscience",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "computerscience",
    },
  ];

  return (
    <CategoriSection>
      <ul>
        {categories.map((categori) => {
          return (
            <li key={categori.id}>
              <h5>
                <a href={`/categori/${categori.link}`}>{categori.name}</a>
              </h5>
            </li>
          );
        })}
      </ul>
    </CategoriSection>
  );
};

export default React.memo(Categori);

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
  @media (max-width: 568px) {
    ul {
      width: 100%;
      overflow: hidden;
    }
    h5 {
      font-size: ${theme.FONT.HEAD6};
    }
  }
`;
