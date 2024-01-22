import HeroComponent from "../../components/HeroComponents/HeroComponent";
import FaqComponent from "../../components/FaqComponents/FaqComponent";
import OurServicesComponent from "../../components/OurServicesComponents/OurServicesComponent";
import WhyUsComponent from "../../components/WhyUsComponents/WhyUsComponent";
import SewaMobilComponent from "../../components/SewaMobilComponents/SewaMobilComponent";
import TestimonialComponent from "../../components/TestimonialComponents/TestimonialComponent";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <OurServicesComponent />
      <WhyUsComponent />
      <TestimonialComponent />
      <SewaMobilComponent />
      <FaqComponent />
    </div>
  );
};
export default HomePage;
