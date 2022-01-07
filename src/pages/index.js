import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Experiece from '../components/Experience/Experience';
import Timeline from '../components/TimeLine/TimeLine';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
// import '../components/Experience/ExperienceStyles.css';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Experiece />
      <Acomplishments />
      <Timeline />
      <Contact />
    </Layout>
  );
};

export default Home;
