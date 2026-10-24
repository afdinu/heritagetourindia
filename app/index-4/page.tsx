import { Contact3 } from "@/components/Contact";
import { CounterSection3 } from "@/components/CounterSection";
import { Cta2 } from "@/components/Cta";
import { Destination3, Destination4 } from "@/components/Destination";
import { Feature5 } from "@/components/Feature";
import { Hero4 } from "@/components/Hero";
import { News4 } from "@/components/News";
import { Team1 } from "@/components/Team";
import { Travel1 } from "@/components/Travel";
import { Video } from "@/components/Video";
import RoavioLayout from "@/layout/RoavioLayout";

const Home4 = () => {
  return (
    <RoavioLayout header={4} footer={4}>
      <Hero4 />
      <Travel1 />
      <Destination3 />
      <Destination4 />
      <Team1 />
      <CounterSection3 />
      <Feature5 />
      <Video />
      <Contact3 />
      <News4 />
      <Cta2 />
    </RoavioLayout>
  );
};

export default Home4;
