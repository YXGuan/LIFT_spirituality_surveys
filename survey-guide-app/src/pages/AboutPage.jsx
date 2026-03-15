import { Link } from "react-router-dom";
import { frameworkPurpose } from "../data/surveyData";
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <div className="about-page">
            <header className="about-header">
                <Link to="/" className="back-btn">
                    ← Back
                </Link>
                <span className="about-header-label">About</span>
            </header>

            <main className="about-body">
                <div className="about-icon-wrap">
                    <span className="about-icon">🌱</span>
                </div>
                <h1 className="about-title">LIFT Survey Guide</h1>
                <p className="about-version">Decision-Tree Spirituality Framework v2</p>

                <section className="about-section">
                    <h2>Purpose</h2>
                    <p>{frameworkPurpose}</p>
                </section>

                <section className="about-section">
                    <h2>How to use</h2>
                    <div className="how-step">
                        <span className="step-num">1</span>
                        <div>
                            <strong>Ice Breakers</strong>
                            <p>
                                If the setting feels cold, awkward, or rushed, start with 1–2
                                ice breakers. If the respondent is already engaged, skip
                                straight to the triage question.
                            </p>
                        </div>
                    </div>
                    <div className="how-step">
                        <span className="step-num">2</span>
                        <div>
                            <strong>Triage Question</strong>
                            <p>
                                Ask: "Are you spiritual? How would you describe your
                                spirituality?" — this classifies which conversation path to
                                follow.
                            </p>
                        </div>
                    </div>
                    <div className="how-step">
                        <span className="step-num">3</span>
                        <div>
                            <strong>Follow-Up Branch</strong>
                            <p>
                                Based on their response, tap the matching branch to see
                                tailored follow-up questions, guidance, and cautions.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Important notes</h2>
                    <ul className="about-notes">
                        <li>This app is a reference tool for surveyors — it does not collect any data.</li>
                        <li>The framework is for exploratory design, not for forcing a scripted conversation.</li>
                        <li>
                            Each branch provides recommended questions, but the conversation
                            should stay natural and responsive to the person.
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
