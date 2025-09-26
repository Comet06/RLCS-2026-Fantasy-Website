import { players, teams } from "./player_data.js";

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('name');
    const teamName = urlParams.get('name');
    if (playerName){
        const player = players.find(p => p.name === playerName);
        if (player) {
            createPlayerProfiles(player); // Call your existing function with the specific player
        } else  if (teamName) {
            const team = teams.find(t => t.shortname === teamName);
            const player1Index = players.findIndex(p => p.shortname === teamName);
            const player1 = players[player1Index];
            const player2Index = players.findIndex((p, index) => p.shortname === teamName && index > player1Index);
            const player2 = players[player2Index];
            const player3Index = players.findIndex((p, index) => p.shortname === teamName && index > player2Index);
            const player3 = players[player3Index];

            const listOfCards = [team, player1, player2, player3]
            listOfCards.forEach((id, index) => {
                if(id){
                    createTeamProfiles(id, index)
                } else {
                    // Handle case where player is not found
                    const profilesContainer = document.getElementById(`player-profiles${index+1}`);
                    profilesContainer.innerHTML = '<p>Player not found.</p>';
                }
            })
        } else {
            // Handle case where player is not found
            const profilesContainer = document.getElementById('player-profiles1');
            profilesContainer.innerHTML = '<p>Player not found.</p>';
        }
    } else {
        // Handle case where no name was provided in the URL
        const profilesContainer = document.getElementById('player-profiles1');
        profilesContainer.innerHTML = '<p>No player specified.</p>';
    }
});

function createPlayerProfiles(player) {
    const profilesContainer = document.getElementById('player-profiles1');
    const profilesTitle = document.getElementById('player-profiles-title');

    const profileHTML = `
        <div class="profile-card">
            <h2 class="player-name" id="${player.watch}">${player.name}</h2>
            <div class="profile-details">
                <p><strong>Availability:</strong> ${player.availability}</p>
                <p id="${player.shortname}"><strong>Team:</strong> ${player.team}</p>
                <p id="${player.region}"><strong>Region:</strong> ${player.region}</p>
                <p><strong>Rating:</strong> ${player.rating}</p>
                <p><strong>Win Percentage:</strong> ${player.winPerc}%</p>
                <p><strong>Score per game:</strong> ${player.scorePG}</p>
                <p><strong>Goals per game:</strong> ${player.goalsPG}</p>
                <p><strong>Assists per game:</strong> ${player.assistsPG}</p>
                <p><strong>Saves per game:</strong> ${player.savesPG}</p>
                <p><strong>Shots per game:</strong> ${player.shotsPG}</p>
            </div>
        </div>
    `;
    profilesContainer.innerHTML = profileHTML;
    profilesTitle.innerHTML = player.name;
}
function createTeamProfiles(id, index) {
    console.log(id)
    const profilesContainer = document.getElementById(`player-profiles${index+1}`);
    const profilesTitle = document.getElementById('player-profiles-title');
    const profileTeamHTML = `
        <div class="profile-card">
            <h2 class="player-name">${id.name}</h2>
            <div class="profile-details">
                <p id="${id.region.toLowerCase()}"><strong>Region:</strong> ${id.region}</p>
                <p><strong>Win Percentage:</strong> ${id.winPerc}%</p>
                <p><strong>Score per game:</strong> ${id.scorePG}</p>
                <p><strong>Goals per game:</strong> ${id.goalsPG}</p>
                <p><strong>Assists per game:</strong> ${id.assistsPG}</p>
                <p><strong>Saves per game:</strong> ${id.savesPG}</p>
                <p><strong>Shots per game:</strong> ${id.shotsPG}</p>
            </div>
        </div>
    `;
    profilesContainer.innerHTML += profileTeamHTML;
    profilesTitle.innerHTML = id.team
}