import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import StatsBar from "./components/StatsBar";
// import WhyReach from "./components/WhyReach";
// import Programme from "./components/Programme";
// import Impact from "./components/Impact";
// import CallToAction from "./components/CallToAction";
// import Footer from "./components/Footer";
import ApplyModal from "./components/ApplyModal";

export default function App() {
  const [applyOpen, setApplyOpen] = useState(false);
  const openApply = useCallback(() => setApplyOpen(true), []);
  const closeApply = useCallback(() => setApplyOpen(false), []);

  return (
    <>
      <Navbar onApply={openApply} />
      <main>
        <Hero onApply={openApply} />
        {/* <StatsBar />
        <WhyReach />
        <Programme onApply={openApply} />
        <Impact />
        <CallToAction onApply={openApply} /> */}
      </main>
      {/* <Footer /> */}
      <ApplyModal open={applyOpen} onClose={closeApply} />
    </>
  );
}
