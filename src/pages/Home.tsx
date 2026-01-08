import LandingPage from "../components/LandingPage";
import Works from "../components/Works";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import EducationAndWork from "../components/EducationAndWork";
import TrustedClients from "../components/TrustedClients";
import GameDesign from "../components/GameDesign";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Works />
      <Projects />
      <Experience />
      <EducationAndWork />
      <TrustedClients />
      <GameDesign />
    </div>
  );
};

export default Home;
