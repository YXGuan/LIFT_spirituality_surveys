import { triageQuestion } from "../data/surveyData";
import "./TriageSection.css";

export default function TriageSection() {
    return (
        <section className="triage-section" id="triage">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-icon">🎯</div>
                    <div>
                        <h2 className="section-title">Main Triage Question</h2>
                        <p className="section-subtitle">{triageQuestion.description}</p>
                    </div>
                </div>

                <div className="triage-prompt-card">
                    <div className="triage-prompt-glow"></div>
                    <div className="triage-prompt-label">Ask this question</div>
                    <blockquote className="triage-prompt-text">
                        &ldquo;{triageQuestion.prompt}&rdquo;
                    </blockquote>
                    <p className="triage-prompt-hint">
                        Based on their response, navigate to the appropriate branch below ↓
                    </p>
                </div>
            </div>
        </section>
    );
}
