import { useState } from "react";
import "./BranchDetail.css";

export default function BranchDetail({ branch, onClose }) {
    const [activeSubBranch, setActiveSubBranch] = useState(null);

    return (
        <div
            className="branch-detail"
            style={{ "--detail-color": branch.color, "--detail-gradient": branch.gradient }}
        >
            {/* Header */}
            <div className="detail-header">
                <div className="detail-header-left">
                    <span className="detail-icon">{branch.icon}</span>
                    <div>
                        <div className="detail-number">Branch {branch.number}</div>
                        <h3 className="detail-title">{branch.label}</h3>
                    </div>
                </div>
                <button className="detail-close" onClick={onClose}>
                    ✕
                </button>
            </div>

            {/* Signal */}
            <div className="detail-block signal-block">
                <div className="block-label">
                    <span className="block-label-icon">📡</span>
                    What this usually signals
                </div>
                <p className="block-text">{branch.signal}</p>
            </div>

            {/* Guidance */}
            <div className="detail-block guidance-block">
                <div className="block-label">
                    <span className="block-label-icon">🧭</span>
                    How the follow-up should change
                </div>
                <p className="block-text">{branch.guidance}</p>
            </div>

            {/* Questions */}
            <div className="detail-block questions-block">
                <div className="block-label">
                    <span className="block-label-icon">💬</span>
                    Question Options
                </div>
                <ul className="detail-questions">
                    {branch.questions.map((q, i) => (
                        <li key={i} className="detail-question-item">
                            <span className="detail-q-marker">{i + 1}</span>
                            <span>{q}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Cautions */}
            <div className="detail-block cautions-block">
                <div className="block-label">
                    <span className="block-label-icon">⚠️</span>
                    Comments & Cautions
                </div>
                <ul className="detail-cautions">
                    {branch.cautions.map((c, i) => (
                        <li key={i} className="detail-caution-item">
                            {c}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sub-branches */}
            {branch.subBranches && (
                <div className="detail-block sub-branches-block">
                    <div className="block-label">
                        <span className="block-label-icon">🔀</span>
                        Tradition-Specific Sub-Routes
                    </div>
                    <p className="sub-branch-note">
                        This category needs sub-routes because the next question should not
                        be the same for each tradition.
                    </p>

                    <div className="sub-branch-tabs">
                        {branch.subBranches.map((sub) => (
                            <button
                                key={sub.id}
                                className={`sub-branch-tab ${activeSubBranch === sub.id ? "active" : ""}`}
                                onClick={() =>
                                    setActiveSubBranch(
                                        activeSubBranch === sub.id ? null : sub.id
                                    )
                                }
                            >
                                <span className="sub-tab-icon">{sub.icon}</span>
                                <span>{sub.label}</span>
                            </button>
                        ))}
                    </div>

                    {activeSubBranch && (
                        <div className="sub-branch-content">
                            {branch.subBranches
                                .filter((s) => s.id === activeSubBranch)
                                .map((sub) => (
                                    <div key={sub.id} className="sub-branch-detail">
                                        <h4 className="sub-branch-title">
                                            {sub.icon} {sub.label}
                                        </h4>
                                        <ul className="detail-questions">
                                            {sub.questions.map((q, i) => (
                                                <li key={i} className="detail-question-item">
                                                    <span className="detail-q-marker">{i + 1}</span>
                                                    <span>{q}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
