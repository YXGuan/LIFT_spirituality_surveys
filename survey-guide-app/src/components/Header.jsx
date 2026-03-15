import { useState, useEffect } from "react";
import "./Header.css";

export default function Header({ onLayerClick, activeLayer }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const layers = [
        { id: "overview", label: "Overview", icon: "📋" },
        { id: "icebreakers", label: "Ice Breakers", icon: "🧊" },
        { id: "triage", label: "Triage", icon: "🎯" },
        { id: "branches", label: "Branches", icon: "🌿" },
    ];

    return (
        <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-inner">
                <div className="header-brand">
                    <div className="brand-icon">
                        <span className="brand-emoji">🌱</span>
                    </div>
                    <div className="brand-text">
                        <h1 className="brand-title">LIFT Survey Guide</h1>
                        <p className="brand-subtitle">
                            Decision-Tree Spirituality Framework
                        </p>
                    </div>
                </div>

                <nav className="header-nav">
                    {layers.map((layer) => (
                        <button
                            key={layer.id}
                            className={`nav-pill ${activeLayer === layer.id ? "active" : ""}`}
                            onClick={() => onLayerClick(layer.id)}
                        >
                            <span className="nav-pill-icon">{layer.icon}</span>
                            <span className="nav-pill-label">{layer.label}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
