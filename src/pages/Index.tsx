import {About} from "@/components/soubus/About";
import {Footer} from "@/components/soubus/Footer";
import {Hero} from "@/components/soubus/Hero";
import {Navbar} from "@/components/soubus/Navbar";
import {Problem} from "@/components/soubus/Problem";
import {Solution} from "@/components/soubus/Solution";
import {Survey} from "@/components/soubus/Survey";
import {Team} from "@/components/soubus/Team"
const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent">
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Navbar />
      <Team />
      <Survey />
      <Footer />
    </div>
  );
};

export default Index;
