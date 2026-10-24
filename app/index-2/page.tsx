import { About2 } from "@/components/About";
import { Adventure2 } from "@/components/Adventure";
import { Benefit2 } from "@/components/Benefit";
import { Commitmentature1 } from "@/components/Commitmentature";
import { Contact2 } from "@/components/Contact";
import { Destination1 } from "@/components/Destination";
import { Feature2, Feature3 } from "@/components/Feature";
import { Hero2 } from "@/components/Hero";
import { News2 } from "@/components/News";
import { Testimonial2 } from "@/components/Testimonial";
import { TourPlace2 } from "@/components/TourPlace";
import RoavioLayout from "@/layout/RoavioLayout";

const Home2 = () => {
  return (
    <RoavioLayout header={2} footer={2}>
      <Hero2 />
      <Feature2 />
      <Adventure2 />
      <About2 />
      <Feature3 />
      <TourPlace2 />
      <Commitmentature1 />
      <Benefit2 />
      <Destination1 />
      <Testimonial2 />
      <News2 />
      <Contact2 />
    </RoavioLayout>
  );
};

export default Home2;
