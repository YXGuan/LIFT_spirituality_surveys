import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mainBranches } from "../data/surveyData";
import "./BranchPage.css";

export default function BranchPage() {
    const { branchId } = useParams();
    const branch = mainBranches.find((b) => b.id === branchId);
    const [activeSubBranch, setActiveSubBranch] = useState(null);

    if (!branch) {
        return (
            <div className="branch-page">
                <header className="branch-header">
                    <Link to="/" className="back-btn">
                        ← Back
                    </Link>
                </header>
                <div className="branch-body" style={{ padding: "40px 20px", textAlign: "center" }}>
                    <p style={{ color: "#64748b" }}>Branch not found.</p>
                </div>
            </div>
        );
    }

    const activeSub = branch.subBranches?.find((s) => s.id === activeSubBranch);

    return (
        <div className="branch-page" style={{ "--bc": branch.color }}>
            {/* Header */}
            <header className="branch-header">
                <Link to="/" className="back-btn">
                    ← Back
                </Link>
                <span className="branch-page-label">
                    Branch {branch.number}
                </span>
            </header>

            {/* Title */}
            <div className="branch-title-bar">
                <span className="branch-title-icon">{branch.icon}</span>
                <h1 className="branch-title-text">{branch.label}</h1>
            </div>

            <div className="branch-body">
                {/* Signal */}
                <section className="info-section">
                    <h2 className="info-label">📡 What this signals</h2>
                    <p className="info-text">{branch.signal}</p>
                </section>

                {/* Guidance */}
                <section className="info-section">
                    <h2 className="info-label">🧭 How to follow up</h2>
                    <p className="info-text">{branch.guidance}</p>
                </section>

                {/* Questions — THE HERO */}
                <section className="questions-section">
                    <h2 className="info-label">💬 Questions to ask</h2>
                    <div className="questions-list">
                        {branch.questions.map((q, i) => (
                            <div key={i} className="question-item">
                                <span className="question-num">{i + 1}</span>
                                <span className="question-txt">{q}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cautions */}
                <section className="cautions-section">
                    <h2 className="info-label">⚠️ Cautions</h2>
                    {branch.cautions.map((c, i) => (
                        <div key={i} className="caution-item">
                            {c}
                        </div>
                    ))}
                </section>

                {/* Sub-branches */}
                {branch.subBranches && (
                    <section className="sub-section">
                        <h2 className="info-label">🔀 Tradition-specific questions</h2>
                        <p className="sub-note">
                            Select their tradition for tailored questions:
                        </p>

                        <div className="sub-pills">
                            {branch.subBranches.map((sub) => (
                                <button
                                    key={sub.id}
                                    className={`sub-pill ${activeSubBranch === sub.id ? "active" : ""}`}
                                    onClick={() =>
                                        setActiveSubBranch(
                                            activeSubBranch === sub.id ? null : sub.id
                                        )
                                    }
                                >
                                    <span>{sub.icon}</span>
                                    <span>{sub.label}</span>
                                </button>
                            ))}
                        </div>

                        {activeSub && (
                            <div className="sub-questions">
                                <h3 className="sub-questions-title">
                                    {activeSub.icon} {activeSub.label}
                                </h3>
                                <div className="questions-list">
                                    {activeSub.questions.map((q, i) => (
                                        <div key={i} className="question-item">
                                            <span className="question-num">{i + 1}</span>
                                            <span className="question-txt">{q}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>
                )}
            </div>
        </div>
    );
}
