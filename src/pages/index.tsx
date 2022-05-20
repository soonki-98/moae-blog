import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { CardSection } from "../component/Card";
import Card from "../component/Card/Card";
import Carousel from "../component/Carousel/Carousel";
import HotPosts from "../component/HotPosts/HotPosts";
import TopBar from "../component/TopBar/TopBar";
import theme from "../styles/theme";

const Home: NextPage = () => {
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
    <div>
      <TopBar type="scrollHeader" />
      <TopBar />
      <HotPosts />
      <CardSection>
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
      </CardSection>
    </div>
  );
};

export default Home;
