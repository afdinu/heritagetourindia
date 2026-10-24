import { About1 } from "@/components/About";
import { Activities1 } from "@/components/Activities";
import { Adventure1 } from "@/components/Adventure";
import { Benefit1 } from "@/components/Benefit";
import { Brand1 } from "@/components/Brand";
import { Contact1 } from "@/components/Contact";
import { ContactFrom1 } from "@/components/ContactFrom";
import { CounterSection1 } from "@/components/CounterSection";
import { Feature1 } from "@/components/Feature";
import { Hero1 } from "@/components/Hero";
import { News1 } from "@/components/News";
import { Testimonial1 } from "@/components/Testimonial";
import { Tour1 } from "@/components/Tour";
import { TourPlace1 } from "@/components/TourPlace";
import RoavioLayout from "@/layout/RoavioLayout";

const HomePage = () => {
  return (
    <RoavioLayout>
      <Hero1 />
      <ContactFrom1 />
      <Tour1 />
      <About1 />
      <TourPlace1 />
      <Benefit1 />
      <Adventure1 />
      <Feature1 />
      <CounterSection1 />
      <Activities1 />
      <Testimonial1 />
      <News1 />
      <Brand1 />
      <Contact1 />
    </RoavioLayout>
  );
};

export default HomePage;
