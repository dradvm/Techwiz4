// import clsx from "clsx";
// import style from "./Home.module.scss";
import TopPreviewSection from "@components/TopPreviewSection/TopPreviewSection";
import About from "../../components/About/About";
import FeatureItems from "../../components/FeatureItems/FeatureItems";

function Home() {
  return (
    <>
      <TopPreviewSection></TopPreviewSection>
      <About></About>
      <FeatureItems></FeatureItems>
    </>
  );
}

export default Home
