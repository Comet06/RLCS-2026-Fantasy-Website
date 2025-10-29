import { path, deployLinks, menu } from "./main.js";
import { year, players, teams } from "./a-current-page-data.js";
import { determineRanks } from "./stats.js";

window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/profile.html`){
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('name');
    const teamName = urlParams.get('name');
    if (playerName||teamName){
        const player = players.find(p => p.name === playerName);
        if (player) {
            createPlayer(player, 0);
            const profilesTitle = document.getElementById('player-profiles-title');
            profilesTitle.innerHTML = player.name
        } else  if (teamName) {
            const team = teams.find(t => t.name === teamName);
            createTeam(team, 0)
            const profilesTitle = document.getElementById('player-profiles-title');
            profilesTitle.innerHTML = team.name
            const playersOnTeam = players.filter(p => p.team === teamName);
            playersOnTeam.sort((a, b) => a.role.localeCompare(b.role))
            playersOnTeam.forEach((player,index) => {
                if(player){
                    createPlayer(player, index+1)
                }
            })
        }
    }
    console.log('Profile page has loaded!')
  } else {
    console.log("main event listener is working but nothing else is")
  }
});


function createPlayer(id, index) {
    const profilesContainer = document.getElementById(`player-profiles${index+1}`);
    const Playerpage = `${path}/profile.html?name=${encodeURIComponent(id.name)}`;
    const Teampage = `${path}/profile.html?name=${encodeURIComponent(id.team)}`;
    const rating = (((id.score / 100) + id.goals + id.assists + id.saves + id.shots) * (id.wins/id.gp)).toFixed(0)
    let ranking = `(Rank: ${determineRanks(rating)})`
    if(id.role === 'coach'){
      ranking = ``
    }
    let role = ''
    if(id.gp < 1){id.gp = 1}
    if(id.role === ''){role = ``} else {role =`(${id.role})`}
    const profileHTML = `
        <div class="profile-card">
            <h2 class="player-name"><a href="${Playerpage}">${id.name} ${ranking}<span id="${id.role}">${role}</a></span></h2>
            <div class="profile-details">
                <a id="${(id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","")}" href="${Teampage}"><strong>Team:</strong> ${id.team}</a>
                <p><strong>Rating:</strong> ${id.rating()}</p>
                <p><strong>Win Percentage:</strong> ${(id.wins/id.gp*100).toFixed(2)}%</p>
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
    profilesContainer.innerHTML = profileHTML;
}
function createTeam(id, index) {
    const profilesContainer = document.getElementById(`player-profiles${index+1}`);
    let page = `${path}/profile.html?name=${encodeURIComponent(id.name)}`;
    const rank = determineRanks(id.rating())
    if (id.gp < 1){id.gp = 1}
    const profileTeamHTML = `
        <div class="profile-card">
            <h2 class="player-name"><a href="${page}">${id.name} (Rank:${rank})</a></h2>
            <div class="profile-details">
                <p><strong>Region:</strong><span id="${(id.region).toLowerCase()}">${id.region}</span></p>
                <p><strong>Rating:</strong> ${id.rating()}</p>
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