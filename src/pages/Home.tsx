import LandingPage from "../components/LandingPage";
import Works from "../components/Works";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import EducationAndWork from "../components/EducationAndWork";
import TrustedClients from "../components/TrustedClients";
import GameDesign from "../components/GameDesign";
import AudioPlayer from "../components/AudioPlayer";

const Home = () => {
  return (
    <div>
      <AudioPlayer />  {/* Persistent across sections */}
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
