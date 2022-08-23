import AdBar from "../Components/AdBar";
import Slider from "../Components/Carousel/Slider";
import Footer from "../Components/Footer";
import TrendingSection from "../Components/HomeElements/TrendingSection";
import Navbar from "../Components/NavBar";
import OneNavbar from "../Components/OneNavbar";

const Home = () => {
  return (
    <>
      <div>
        <AdBar />
        {/* <Navbar /> */}
        <OneNavbar />
      </div>
      <Slider/>
      <TrendingSection/>
      <Footer />
    </>
  );
};
export default Home;
