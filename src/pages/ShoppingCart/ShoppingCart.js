import clsx from "clsx";
import style from "./Home.module.scss";

function Home() {
  return (
    <h1 className={clsx(style["home"])}>
      Home
    </h1>
  );
}

export default Home
