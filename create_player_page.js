import { players, teams, year } from "./a-current-page-data.js";
import { playersPrevious, teamsPrevious } from "./a-previous-page-data.js";
import { path } from "./main.js";
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('name');
    const teamName = urlParams.get('name');
    if (playerName||teamName){
        const player = playersPrevious.find(p => p.name === playerName);
        if (player) {
            createPlayerProfiles(player); // Call your existing function with the specific player
        } else  if (teamName) {
            const team = teamsPrevious.find(t => t.shortname === teamName);
            createTeamProfiles(team, 0)
            const profilesTitle = document.getElementById('player-profiles-title');
            profilesTitle.innerHTML = team.name
            const playersOnTeam = playersPrevious.filter(p => p.shortname === teamName);
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
    const team = `${path}/profile.html?name=${encodeURIComponent(player.shortname)}`;
    if(player.gp < 1){player.gp = 1}

    const profileHTML = `
        <div class="profile-card">
            <h2 class="player-name">${player.name} <span id="${player.watch}">(${player.watch})</span></h2>
            <div class="profile-details">
                <p><strong>Availability:</strong> ${player.availability}</p>
                <a id="${player.shortname}" href="${team}"><strong>Team:</strong> ${player.team}</a>
                <p id="${player.region}"><strong>Region:</strong> ${player.region}</p>
                <p><strong>Rating:</strong> ${player.rating}</p>
                <p><strong>Win Percentage:</strong> ${player.winPerc}%</p>
                <p><strong>Total Score:</strong> ${player.score}</p>
                <p><strong>Total Goals:</strong> ${player.goals}</p>
                <p><strong>Total Assists:</strong> ${player.assists}</p>
                <p><strong>Total Saves:</strong> ${player.saves}</p>
                <p><strong>Total Shots:</strong> ${player.shots}</p>
                <p><strong>Score per game:</strong> ${(player.score/player.gp).toFixed(2)}</p>
                <p><strong>Goals per game:</strong> ${(player.goals/player.gp).toFixed(2)}</p>
                <p><strong>Assists per game:</strong> ${(player.assists/player.gp).toFixed(2)}</p>
                <p><strong>Saves per game:</strong> ${(player.saves/player.gp).toFixed(2)}</p>
                <p><strong>Shots per game:</strong> ${(player.shots/player.gp).toFixed(2)}</p>
            </div>
        </div>
    `;
    profilesContainer.innerHTML = profileHTML;
    profilesTitle.innerHTML = player.name;
}
function createTeamProfiles(id, index) {
    const profilesContainer = document.getElementById(`player-profiles${index+1}`);
    let player = `${path}/profile.html?name=${encodeURIComponent(id.name)}`;
    if (id.gp < 1){id.gp = 1}
    console.log(id.shortname)
    console.log(id.watch)
    if(id.watch === ""){
        player = `${path}/profile.html?name=${encodeURIComponent(id.shortname)}`
    }
    const profileTeamHTML = `
        <div class="profile-card">
            <h2 class="player-name"><a href="${player}">${id.name} <span id="${id.watch}">(${id.watch})</span></a></h2>
            <div class="profile-details">
                <p id="${id.region.toLowerCase()}"><strong>Region:</strong> ${id.region}</p>
                <p><strong>Win Percentage:</strong> ${id.winPerc}%</p>
                <p><strong>Total Score:</strong> ${id.score}</p>
                <p><strong>Total Goals:</strong> ${id.goals}</p>
                <p><strong>Total Assists:</strong> ${id.assists}</p>
                <p><strong>Total Saves:</strong> ${id.saves}</p>
                <p><strong>Total Shots:</strong> ${id.shots}</p>
                <p><strong>Score per game:</strong> ${(id.score/id.gp).toFixed(2)}</p>
                <p><strong>Goals per game:</strong> ${(id.goals/id.gp).toFixed(2)}</p>
                <p><strong>Assists per game:</strong> ${(id.assists/id.gp).toFixed(2)}</p>
                <p><strong>Saves per game:</strong> ${(id.saves/id.gp).toFixed(2)}</p>
                <p><strong>Shots per game:</strong> ${(id.shots/id.gp).toFixed(2)}</p>
            </div>
        </div>
    `;
    profilesContainer.innerHTML += profileTeamHTML;
}