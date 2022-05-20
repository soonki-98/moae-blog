import { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { Card } from "../Card";
import Carousel from "../Carousel/Carousel";

const HotPosts = () => {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    if (window.document.documentElement.clientWidth <= 568) setDevice("mobile");
    else setDevice("desktop");
  }, []);

  const userInfo = {
    profileImage:
      "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
    name: "아이유",
  };

  const cardProps = {
    id: "1231245",
    title: "타이틀",
    description: "내용",
    date: "2022-05-22",
    userInfo,
    titleImage:
      "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
  };

  return (
    <Wrapper>
      <h3>이주의 게시글</h3>
      <Carousel slideToShow={device === "desktop" ? 5 : 2} autoplaySpeed={8000} arrowLocation="bottom-side">
        <Card {...cardProps} width={"100%"} />
        <Card {...cardProps} width={"100%"} />
        <Card {...cardProps} width={"100%"} />
        <Card {...cardProps} width={"100%"} />
        <Card {...cardProps} width={"100%"} />
        <Card {...cardProps} width={"100%"} />
        <Card {...cardProps} width={"100%"} />
        <Card {...cardProps} width={"100%"} />
        <Card {...cardProps} width={"100%"} />
        <Card {...cardProps} width={"100%"} />
      </Carousel>
    </Wrapper>
  );
};

export default HotPosts;

const Wrapper = styled.div`
  max-height: 700px;
  margin: 2rem 0 4rem 0;
  background: ${theme.COLORS.MAIN};
  padding: 2rem 0 4rem 0;
  h3 {
    padding: 0 6rem;
    margin: 0;
    color: #ececec;
  }

  @media (max-width: 568px) {
    h3 {
      font-size: ${theme.FONT.HEAD5.fontSize};
    }
  }
`;
