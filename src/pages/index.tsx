import type { NextPage } from "next";
import { Categori } from "../component/Categori";
import { Header } from "../component/Header";
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Categori />
    </div>
  );
};

export default Home;
