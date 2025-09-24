import AboutUs from "../sections/AboutUs";
import Banner from "../sections/Banner";
import Blog from "../sections/Blog";
import Contact from "../sections/Contact";
import Offers from "../sections/Offers";
import OnlineBooking from "../sections/OnlineBooking";
import Services from "../sections/Services";
import Specialists from "../sections/Specialists";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  return (
    <div className="pt-[50px]">
      <Banner />
      <AboutUs />
      <Services />
      <Specialists />
      <Offers />
      <Blog />
      <Testimonials />
      <Contact />
      <OnlineBooking />
    </div>
  );
};

export default Home;
