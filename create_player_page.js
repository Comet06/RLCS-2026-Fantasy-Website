import { players, teams } from "./player_data.js";

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('name');
    const teamName = urlParams.get('name');
    
    if (playerName) {
        // Find the player object that matches the name from the URL
        const player = players.find(p => p.name === playerName);
        const team = teams.find(p => p.team === teamName);

        if (player) {
            createPlayerProfiles(player); // Call your existing function with the specific player
        } else if (team){
            createTeamProfiles(team);
        } else {
            // Handle case where player is not found
            const profilesContainer = document.getElementById('player-profiles');
            profilesContainer.innerHTML = '<p>Player not found.</p>';
        }
    } else {
        // Handle case where no name was provided in the URL
        const profilesContainer = document.getElementById('player-profiles');
        profilesContainer.innerHTML = '<p>No player specified.</p>';
    }
});

function createPlayerProfiles(player) {
    const profilesContainer = document.getElementById('player-profiles');
    const profilesTitle = document.getElementById('player-profiles-title');

    const profileHTML = `
        <div class="profile-card">
            <h2 class="player-name" id="${player.watch}">${player.name}</h2>
            <div class="profile-details">
                <p><strong>Availability:</strong> ${player.availability}</p>
                <p id="${player.shortname}"><strong>Team:</strong> ${player.team}</p>
                <p id="${player.region}"><strong>Region:</strong> ${player.region}</p>
                <p><strong>Rank:</strong> ${player.rank}</p>
                <p><strong>Rating:</strong> ${player.rating}</p>
                <p><strong>Win Percentage:</strong> ${player.winperc}%</p>
                <p><strong>Score per game:</strong> ${player.score}</p>
                <p><strong>Goals per game:</strong> ${player.goals}</p>
                <p><strong>Assists per game:</strong> ${player.assists}</p>
                <p><strong>Saves per game:</strong> ${player.saves}</p>
                <p><strong>Shots per game:</strong> ${player.shots}</p>
            </div>
        </div>
    `;
    profilesContainer.innerHTML = profileHTML;
    profilesTitle.innerHTML = player.name;
}
function createTeamProfiles(team) {
    const profilesContainer = document.getElementById('player-profiles');
    const profilesTitle = document.getElementById('player-profiles-title');
    console.log('function is working')
    const profileHTML = `
        <div class="profile-card">
            <h2 class="player-name">${team.team}</h2>
            <div class="profile-details">
                <p><strong>Region:</strong> ${team.region}</p>
                <p><strong>Rating:</strong> ${team.rating}</p>
                <p><strong>Win Percentage:</strong> ${team.winperc}%</p>
                <p><strong>Score per game:</strong> ${team.score}</p>
                <p><strong>Goals per game:</strong> ${team.goals}</p>
                <p><strong>Assists per game:</strong> ${team.assists}</p>
                <p><strong>Saves per game:</strong> ${team.saves}</p>
                <p><strong>Shots per game:</strong> ${team.shots}</p>
            </div>
        </div>
    `;
    profilesContainer.innerHTML += profileHTML;
    profilesTitle.innerHTML = team.team

}