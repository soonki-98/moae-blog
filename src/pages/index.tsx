import type { NextPage } from "next";
import Card from "../component/Card/Card";
import { Categori } from "../component/Categori";
import { Header } from "../component/Header";
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Categori />
      <section style={{ margin: "-1rem", display: "flex", flexWrap: "wrap", width: "100%" }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default Home;
