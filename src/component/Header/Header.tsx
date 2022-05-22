import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import theme from "../../styles/theme";
import React from "react";
import { useSession } from "next-auth/react";
import UserSection from "./UserSection";
import LoginSection from "./LoginSection";
import TitleSection from "./TitleSection";
import { useRecoilState } from "recoil";
import searchBarAtom from "../../recoil/searchBarAtom";
import SearchSection from "./SearchSection";

interface Props {
  user?: string;
}

const Header = ({ user }: Props) => {
  const session = useSession();
  const [isSearchBarOpen, setIsSearchBarOpen] = useRecoilState(searchBarAtom);

  const toggleIsSearchBarOpen = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  return (
    <Wrapper>
      <TitleSection user={user} />
      <section>
        <button id="search-btn" onClick={toggleIsSearchBarOpen}>
          <GoSearch size={20} />
        </button>
        {session.data ? <UserSection img={session.data.user?.image} /> : <LoginSection />}
      </section>
      {isSearchBarOpen && <SearchSection />}
    </Wrapper>
  );
};

export default React.memo(Header);

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
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
  .login-btn {
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
  @media (max-width: 568px) {
    #write-btn {
      display: none;
    }
    .login-btn {
      font-size: ${theme.FONT.SMALL.fontSize};
    }
    section {
      button {
        margin: 0;
      }
    }
  }
`;
