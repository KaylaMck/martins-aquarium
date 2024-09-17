import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = '';

    for (const fish of database.fish) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.species} photo" class="fish_image">
                <div class="fish_details">
                    <h2 class="fish_name">${fish.name}</h2>
                    <h3 class="fish_species">${fish.species}</h3>
                    <p class="fish_length">${fish.length} inches</p>
                    <p class="fish_location">${fish.location}</p>
                    <p class="fish_diet">${fish.diet}</p>
                </div>
            </article>
        `;
    }

    return fishHTML
};