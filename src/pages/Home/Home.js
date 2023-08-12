// import clsx from "clsx";
// import style from "./Home.module.scss";
import TopPreviewSection from "@components/TopPreviewSection/TopPreviewSection";
import About from "../../components/About/About";
import FeatureItems from "../../components/FeatureItems/FeatureItems";
import SiteMap from "../../components/SiteMap/SiteMap";

function Home() {
  return (
    <>
      <TopPreviewSection></TopPreviewSection>
      <About></About>
      <FeatureItems></FeatureItems>
      <SiteMap></SiteMap>
    </>
  );
}

export default Home
