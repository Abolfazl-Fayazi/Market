import "../src/asset//styles/sass/Home.scss";
import Header from "./components/header";
import TopBar from "./components/topBar";
const Home = () => {
  return (
    <div home__container>
      <TopBar />
      <Header />
    </div>
  );
};

export default Home;
