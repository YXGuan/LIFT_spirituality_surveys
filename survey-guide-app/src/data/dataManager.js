import Papa from "papaparse";
import { iceBreakers as defaultIceBreakers, triageQuestion as defaultTriage, mainBranches as defaultBranches } from "./surveyData";

export const saveImportedData = (data) => {
    localStorage.setItem("importedSurveyData", JSON.stringify(data));
};

export const clearImportedData = () => {
    localStorage.removeItem("importedSurveyData");
};

export const getSurveyData = () => {
    const stored = localStorage.getItem("importedSurveyData");
    if (!stored) {
        return {
            iceBreakers: defaultIceBreakers,
            triageQuestion: defaultTriage,
            mainBranches: defaultBranches,
            isCustom: false
        };
    }

    try {
        const customData = JSON.parse(stored);
        return {
            ...customData,
            isCustom: true
        };
    } catch (e) {
        console.error("Failed to parse stored data", e);
        return {
            iceBreakers: defaultIceBreakers,
            triageQuestion: defaultTriage,
            mainBranches: defaultBranches,
            isCustom: false
        };
    }
};

export const processCsvData = (csvText) => {
    return new Promise((resolve, reject) => {
        Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                try {
                    const rows = results.data;

                    // Base structures to fill
                    const newIceBreakers = JSON.parse(JSON.stringify(defaultIceBreakers));
                    const newBranches = JSON.parse(JSON.stringify(defaultBranches));
                    let newTriage = { ...defaultTriage };

                    rows.forEach((row) => {
                        const { id, type, prompt, guidance, cautions } = row;
                        const parsedQuestions = prompt ? prompt.split('|').map(q => q.trim()).filter(Boolean) : [];
                        const parsedCautions = cautions ? cautions.split('|').map(c => c.trim()).filter(Boolean) : [];

                        if (type === "ice_breaker") {
                            const cat = newIceBreakers.find(c => c.id === id);
                            if (cat) cat.questions = parsedQuestions;
                        }
                        else if (type === "triage") {
                            newTriage.prompt = prompt;
                        }
                        else if (type === "branch") {
                            const branch = newBranches.find(b => b.id === id);
                            if (branch) {
                                branch.questions = parsedQuestions;
                                if (guidance) branch.guidance = guidance;
                                if (parsedCautions.length > 0) branch.cautions = parsedCautions;
                            }
                        }
                        else if (type === "sub_branch") {
                            // find parent (religious-non-christian) and update sub branch
                            const parent = newBranches.find(b => b.id === "religious-non-christian");
                            if (parent && parent.subBranches) {
                                const sub = parent.subBranches.find(s => s.id === id);
                                if (sub) {
                                    sub.questions = parsedQuestions;
                                }
                            }
                        }
                    });

                    resolve({
                        iceBreakers: newIceBreakers,
                        triageQuestion: newTriage,
                        mainBranches: newBranches
                    });

                } catch (error) {
                    reject("Error processing CSV data: " + error.message);
                }
            },
            error: (error) => {
                reject(error.message);
            }
        });
    });
};
