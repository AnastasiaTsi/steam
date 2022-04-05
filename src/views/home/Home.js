import React from "react";
import SlideShow from "./components/slideShow/SlideShow";
import NavigationTabs from "./components/navigationtabs/NavigationTabs";
import NavBar from "../../components/header/Header";
import PageFormat from "../../components/PageFormat";

const Home = () => {
  return (
    <>
      <NavBar />
      <PageFormat>
        <SlideShow />
        <NavigationTabs />
      </PageFormat>
    </>
  );
};

export default Home;
