import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = '';

    for (const fish of database.fish) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="photo of a ${fish.species}" class="fishImage">
                <div>
                    <h2>${fish.name}</h2>
                    <p>${fish.species}</p>
                    <p>${fish.length} inches</p>
                    <p>${fish.location}</p>
                    <p>${fish.diet}</p>
                </div>
            </article>
        `;
    }

    return fishHTML
};