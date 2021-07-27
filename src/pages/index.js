import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Portrait from '../components/Portrait/Portrait';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  //todo 반응형, Section grid 수정 필요
  //todo Portrait Component 필요
  //todo Hero, BgAnimation 겹치게 해야 함
  return (
    <Layout>
        <Section /* grid */ flex row>
          <Hero/>
          {/* <BgAnimation/> */}
          <Portrait/> 
        </Section>
        <Projects />
        <Technologies/>
        <Timeline />
        <Acomplishments />
    </Layout>
  );
};

export default Home;
