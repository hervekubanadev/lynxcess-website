import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProblemSection from "@/components/ProblemSection";
import FiveWhysSection from "@/components/FiveWhysSection";
import SolutionSection from "@/components/SolutionSection";
import PrototypeSection from "@/components/PrototypeSection";
import TeamSection from "@/components/TeamSection";
import ChallengesSection from "@/components/ChallengesSection";
import ImpactSection from "@/components/ImpactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      {splashDone && (
        <div className="min-h-screen bg-background overflow-x-hidden">
          <Navbar />
          <HeroSection />
          <MissionSection />
          <ProblemSection />
          <FiveWhysSection />
          <SolutionSection />
          <PrototypeSection />
          <TeamSection />
          <ChallengesSection />
          <ImpactSection />
          <FooterSection />
        </div>
      )}
    </>
  );
};

export default Index;
