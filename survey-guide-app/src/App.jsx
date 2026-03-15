import { useState, useEffect } from "react";
import Header from "./components/Header";
import OverviewSection from "./components/OverviewSection";
import IceBreakerSection from "./components/IceBreakerSection";
import TriageSection from "./components/TriageSection";
import BranchesSection from "./components/BranchesSection";
import "./App.css";

const SECTION_IDS = ["overview", "icebreakers", "triage", "branches"];

function App() {
  const [activeLayer, setActiveLayer] = useState("overview");

  // Scroll spy: update active nav pill based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // offset for sticky header
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveLayer(SECTION_IDS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLayerClick = (layerId) => {
    setActiveLayer(layerId);
    const element = document.getElementById(layerId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app">
      <Header onLayerClick={handleLayerClick} activeLayer={activeLayer} />

      <main className="app-main">
        <OverviewSection />
        <div className="section-divider" />
        <IceBreakerSection />
        <div className="section-divider" />
        <TriageSection />
        <div className="section-divider" />
        <BranchesSection />
      </main>

      <footer className="app-footer">
        <p>
          LIFT Survey Guide — Decision-Tree Spirituality Framework v2
        </p>
      </footer>
    </div>
  );
}

export default App;
