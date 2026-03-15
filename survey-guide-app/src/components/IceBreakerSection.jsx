import { useState } from "react";
import { iceBreakers } from "../data/surveyData";
import "./IceBreakerSection.css";

export default function IceBreakerSection() {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <section className="icebreaker-section" id="icebreakers">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-icon">🧊</div>
                    <div>
                        <h2 className="section-title">Ice Breaker Layer</h2>
                        <p className="section-subtitle">
                            These questions run in parallel to the serious spiritual
                            questions. They help reduce tension, build rapport, and give a
                            natural bridge into deeper topics.
                        </p>
                    </div>
                </div>

                <div className="icebreaker-usage-tips">
                    <div className="tip-card">
                        <span className="tip-icon">❄️</span>
                        <p>
                            If the setting feels cold, awkward, or rushed, start with 1–2 ice
                            breakers before the spiritual triage question.
                        </p>
                    </div>
                    <div className="tip-card">
                        <span className="tip-icon">💬</span>
                        <p>
                            If the respondent is already engaged and reflective, skip straight
                            to the worldview triage question.
                        </p>
                    </div>
                    <div className="tip-card">
                        <span className="tip-icon">🎯</span>
                        <p>
                            Ice breakers can be funny, practical, or identity-based. Their job
                            is not to be profound; their job is to open the person up.
                        </p>
                    </div>
                </div>

                <div className="icebreaker-grid">
                    {iceBreakers.map((category) => (
                        <div
                            key={category.id}
                            className={`icebreaker-card ${activeCategory === category.id ? "expanded" : ""}`}
                            style={{ "--card-accent": category.color }}
                            onClick={() =>
                                setActiveCategory(
                                    activeCategory === category.id ? null : category.id
                                )
                            }
                        >
                            <div className="icebreaker-card-header">
                                <div className="icebreaker-card-icon">{category.icon}</div>
                                <div className="icebreaker-card-meta">
                                    <h3 className="icebreaker-card-title">
                                        {category.category}
                                    </h3>
                                    <p className="icebreaker-card-usage">{category.usage}</p>
                                </div>
                                <div
                                    className={`expand-indicator ${activeCategory === category.id ? "open" : ""}`}
                                >
                                    ▾
                                </div>
                            </div>

                            <div className="icebreaker-questions-list">
                                {category.questions.map((q, i) => (
                                    <div key={i} className="icebreaker-question-item">
                                        <span className="question-bullet">•</span>
                                        <span className="question-text">{q}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
