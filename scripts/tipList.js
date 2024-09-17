import { database } from "./aquariumData.js";

export const tipList = () => {
    let tipHTML = "<ul class='tips'>";

    for (const tip of database.tips) {
        tipHTML += `
            <h3>${tip.topic}</h3>
            <li class="tip">${tip.text}</li>
        `;
    }

    tipHTML += "</ul>"

    return tipHTML
}