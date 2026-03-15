import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { processCsvData, saveImportedData, clearImportedData } from "../data/dataManager";
import "./UploadSection.css";

export default function UploadSection({ onDataUpdated }) {
    const fileInputRef = useRef(null);
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setStatus("Reading file...");
        setError("");

        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const text = e.target.result;
                setStatus("Processing CSV...");
                const newSurveyData = await processCsvData(text);

                saveImportedData({
                    iceBreakers: newSurveyData.iceBreakers,
                    triageQuestion: newSurveyData.triageQuestion,
                    mainBranches: newSurveyData.mainBranches,
                });

                setStatus("Data updated successfully!");
                onDataUpdated();

                setTimeout(() => setStatus(""), 3000);
            } catch (err) {
                setError(err.toString());
                setStatus("");
            }
        };
        reader.onerror = () => {
            setError("Failed to read file");
            setStatus("");
        };

        reader.readAsText(file);
        // Reset input so the same file can be selected again if needed
        event.target.value = "";
    };

    const handleResetData = () => {
        if (confirm("Are you sure you want to revert to the default questions?")) {
            clearImportedData();
            setStatus("Reverted to defaults");
            onDataUpdated();
            setTimeout(() => setStatus(""), 3000);
        }
    };

    return (
        <div className="upload-section">
            <h3>Custom Questions</h3>
            <p>You can import your own questions using the CSV template.</p>

            <div className="upload-actions">
                <a href="/survey_questions_template.csv" download className="dl-btn">
                    Download Template
                </a>

                <button
                    className="up-btn"
                    onClick={() => fileInputRef.current.click()}
                >
                    <Upload size={16} /> Import CSV
                </button>
                <input
                    type="file"
                    accept=".csv"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                />

                <button className="reset-btn" onClick={handleResetData}>
                    Reset Defaults
                </button>
            </div>

            {status && <div className="status-msg success">{status}</div>}
            {error && <div className="status-msg error">{error}</div>}
        </div>
    );
}
