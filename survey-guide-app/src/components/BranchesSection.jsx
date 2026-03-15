import { useState } from "react";
import { mainBranches } from "../data/surveyData";
import BranchDetail from "./BranchDetail";
import "./BranchesSection.css";

export default function BranchesSection() {
    const [activeBranch, setActiveBranch] = useState(null);

    const handleBranchClick = (branchId) => {
        setActiveBranch(activeBranch === branchId ? null : branchId);
    };

    const selectedBranch = mainBranches.find((b) => b.id === activeBranch);

    return (
        <section className="branches-section" id="branches">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-icon">🌿</div>
                    <div>
                        <h2 className="section-title">Main Branches</h2>
                        <p className="section-subtitle">
                            Based on the triage response, select the appropriate worldview
                            branch. Each branch contains tailored follow-up questions,
                            guidance, and caution notes.
                        </p>
                    </div>
                </div>

                <div className="branches-layout">
                    <div className="branches-grid">
                        {mainBranches.map((branch) => (
                            <button
                                key={branch.id}
                                className={`branch-card ${activeBranch === branch.id ? "active" : ""}`}
                                style={{
                                    "--branch-color": branch.color,
                                    "--branch-gradient": branch.gradient,
                                }}
                                onClick={() => handleBranchClick(branch.id)}
                            >
                                <div className="branch-card-number">{branch.number}</div>
                                <div className="branch-card-icon">{branch.icon}</div>
                                <div className="branch-card-label">{branch.label}</div>
                                {branch.subBranches && (
                                    <div className="branch-has-sub">
                                        +{branch.subBranches.length} sub-routes
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className={`branch-detail-panel ${activeBranch ? "open" : ""}`}>
                        {selectedBranch ? (
                            <BranchDetail
                                key={selectedBranch.id}
                                branch={selectedBranch}
                                onClose={() => setActiveBranch(null)}
                            />
                        ) : (
                            <div className="branch-detail-empty">
                                <span className="empty-icon">👈</span>
                                <p>Select a branch to see its details</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
