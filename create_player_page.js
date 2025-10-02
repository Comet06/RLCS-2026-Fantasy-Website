import { players, teams } from "./player_data.js";

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('name');
    const teamName = urlParams.get('name');
    if (playerName||teamName){
        const player = players.find(p => p.name === playerName);
        if (player) {
            createPlayerProfiles(player); // Call your existing function with the specific player
        } else  if (teamName) {
            const team = teams.find(t => t.shortname === teamName);
            createTeamProfiles(team, 0)
            const profilesTitle = document.getElementById('player-profiles-title');
            profilesTitle.innerHTML = team.name
            const playersOnTeam = players.filter(p => p.shortname === teamName);
            playersOnTeam.forEach((player,index) => {
                if(player){
                    createTeamProfiles(player, index + 1)
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
            <h2 class="player-name">${player.name} <span id="${player.watch}">${player.watch}</span></h2>
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
    const profileTeamHTML = `
        <div class="profile-card">
            <h2 class="player-name">${id.name} <span id="${id.watch}">${id.watch}</span></h2>
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
}