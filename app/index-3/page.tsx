import { About3 } from "@/components/About";
import { CounterSection2 } from "@/components/CounterSection";
import { Cta1 } from "@/components/Cta";
import { Destination2 } from "@/components/Destination";
import { Faq1 } from "@/components/Faq";
import { Feature4 } from "@/components/Feature";
import { Gallery1 } from "@/components/Gallery";
import { Hero3 } from "@/components/Hero";
import { Marquee1, Marquee2 } from "@/components/Marquee";
import { News3 } from "@/components/News";
import { Testimonial3 } from "@/components/Testimonial";
import { TourPlace3 } from "@/components/TourPlace";
import { WhyChooseUs1 } from "@/components/WhyChooseUs";
import RoavioLayout from "@/layout/RoavioLayout";

const Home3 = () => {
  return (
    <RoavioLayout header={3} footer={3}>
      <Hero3 />
      <Marquee1 />
      <About3 />
      <Destination2 />
      <CounterSection2 />
      <TourPlace3 />
      <Feature4 />
      <Faq1 />
      <Gallery1 />
      <Testimonial3 />
      <WhyChooseUs1 />
      <News3 />
      <Marquee2 />
      <Cta1 />
    </RoavioLayout>
  );
};

export default Home3;
