import { frameworkPurpose } from "../data/surveyData";
import "./OverviewSection.css";

export default function OverviewSection() {
    return (
        <section className="overview-section" id="overview">
            <div className="overview-hero">
                <div className="overview-badge">
                    <span className="badge-dot"></span>
                    Survey Conductor's Reference
                </div>
                <h2 className="overview-title">
                    Decision-Tree
                    <br />
                    <span className="title-gradient">Spirituality Framework</span>
                </h2>
                <p className="overview-description">{frameworkPurpose}</p>

                <div className="overview-flow">
                    <div className="flow-step">
                        <div className="flow-number">1</div>
                        <div className="flow-content">
                            <h4>Ice Breakers</h4>
                            <p>Lower tension and build rapport</p>
                        </div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                        <div className="flow-number">2</div>
                        <div className="flow-content">
                            <h4>Triage Question</h4>
                            <p>Classify the respondent's posture</p>
                        </div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                        <div className="flow-number">3</div>
                        <div className="flow-content">
                            <h4>Follow-Up Branch</h4>
                            <p>Adapt questions to their worldview</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
