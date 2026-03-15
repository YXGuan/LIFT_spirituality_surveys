import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSurveyData } from "../data/dataManager";
import "./HomePage.css";

export default function HomePage() {
    const [activeTab, setActiveTab] = useState("icebreakers");
    const [openCategory, setOpenCategory] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(getSurveyData());
    }, []);

    if (!data) return null;
    return (
        <div className="home-page">
            {/* Compact header */}
            <header className="mobile-header">
                <div className="header-left">
                    <span className="header-logo">🌱</span>
                    <span className="header-title">LIFT Church Survey Guide (unofficial)</span>
                </div>
                <Link to="/about" className="header-about-btn">
                    About
                </Link>
            </header >

            {/* Tab switcher — the two main sections */}
            < div className="tab-bar" >
                <button
                    className={`tab-btn ${activeTab === "icebreakers" ? "active" : ""}`}
                    onClick={() => setActiveTab("icebreakers")}
                >
                    <span className="tab-icon">🧊</span>
                    Ice Breakers
                </button>
                <button
                    className={`tab-btn ${activeTab === "spirituality" ? "active" : ""}`}
                    onClick={() => setActiveTab("spirituality")}
                >
                    <span className="tab-icon">💬</span>
                    Spirituality
                </button>
            </div >

            {/* Content area */}
            < main className="tab-content" >
                {activeTab === "icebreakers" && (
                    <IceBreakerTab
                        iceBreakers={data.iceBreakers}
                        openCategory={openCategory}
                        setOpenCategory={setOpenCategory}
                    />
                )
                }
                {activeTab === "spirituality" && (
                    <SpiritualityTab
                        triageQuestion={data.triageQuestion}
                        mainBranches={data.mainBranches}
                    />
                )}
            </main >
        </div >
    );
}

/* ── Ice Breaker Tab ───────────────────────────── */
function IceBreakerTab({ iceBreakers, openCategory, setOpenCategory }) {
    return (
        <div className="icebreaker-tab">
            <p className="tab-hint">
                Tap a category to see questions. Use these to lower tension and build
                rapport before deeper topics.
            </p>

            {iceBreakers.map((cat) => {
                const isOpen = openCategory === cat.id;
                return (
                    <div key={cat.id} className="question-category">
                        <button
                            className={`category-header ${isOpen ? "open" : ""}`}
                            style={{ "--accent": cat.color }}
                            onClick={() => setOpenCategory(isOpen ? null : cat.id)}
                        >
                            <span className="cat-icon">{cat.icon}</span>
                            <div className="cat-text">
                                <span className="cat-name">{cat.category}</span>
                                <span className="cat-usage">{cat.usage}</span>
                            </div>
                            <span className={`cat-chevron ${isOpen ? "rotated" : ""}`}>
                                ›
                            </span>
                        </button>

                        {isOpen && (
                            <div className="question-list">
                                {cat.questions.map((q, i) => (
                                    <div key={i} className="question-card">
                                        <span className="q-text">{q}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

/* ── Spirituality Tab ──────────────────────────── */
function SpiritualityTab({ triageQuestion, mainBranches }) {
    return (
        <div className="spirituality-tab">
            {/* Triage prompt */}
            <div className="triage-card">
                <div className="triage-label">Start with this question</div>
                <p className="triage-question">
                    &ldquo;{triageQuestion.prompt}&rdquo;
                </p>
                <p className="triage-hint">
                    Then tap the branch below that best matches their answer.
                </p>
            </div>

            {/* Branch list */}
            <div className="branch-list">
                {mainBranches.map((branch) => (
                    <Link
                        key={branch.id}
                        to={`/branch/${branch.id}`}
                        className="branch-link"
                        style={{ "--branch-color": branch.color }}
                    >
                        <span className="branch-num">{branch.number}</span>
                        <span className="branch-icon">{branch.icon}</span>
                        <span className="branch-name">{branch.label}</span>
                        {branch.subBranches && (
                            <span className="branch-sub-badge">
                                +{branch.subBranches.length}
                            </span>
                        )}
                        <span className="branch-arrow">›</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
