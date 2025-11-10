import Header from "@/components/Header";
import LatestUpdates from "@/components/LatestUpdates";
import AboutUs from "./components/AboutUs";
import EventsAndInitiatives from "./components/EventsAndInitiatives";
import Incubation from "./components/Incubation";
import Team from "./components/Team";
import Contact from "./components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div id="home" className="flex flex-col lg:flex-row lg:gap-12 mb-16 items-center">
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4">INNOVATE. ELEVATE. IGNITE.</h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Welcome to the Innovation and Entrepreneurship Development Cell (IEDC) at CUSAT, where ideas transform into reality. We are a student-run organization dedicated to fostering a culture of innovation and entrepreneurship.
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full text-lg font-semibold">
              Join Us
            </button>
          </div>
          <div className="w-full max-w-md lg:w-1/3 lg:max-w-none mt-8 lg:mt-0">
            <LatestUpdates />
          </div>
        </div>

        <div id="about" className="mb-16">
          <AboutUs />
        </div>

        <div id="events" className="mb-16">
          <EventsAndInitiatives />
        </div>

        <div id="incubation" className="mb-16">
          <Incubation />
        </div>

        <div id="team" className="mb-16">
          <Team />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;