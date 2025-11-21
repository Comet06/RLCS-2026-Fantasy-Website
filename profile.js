import { path, deployLinks, menu } from "./main.js";
import { year, players, teams, members, Regional1, Regional2, Regional3, Regional4, Regional5, Regional6 } from "./current-fantasy-members.js";
import { determineTeamsRanks, eventName } from "./stats.js";
import { getPlayerDetails, getPlayerScore, regional1Players, regional2Players, regional3Players, regional4Players, regional5Players, regional6Players } from "./events.js";

window.addEventListener('load', function(){
  if(window.location.pathname === `${path}/profile.html`){
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('name');
    const teamName = urlParams.get('name');
    const memberName = urlParams.get('name');
    if(playerName||teamName||memberName){
        const player = players.find(p => p.player === playerName);
        const team = teams.find(t => t.team === teamName);
        const member = members.find(m => m.name === memberName)
        if(player){
            createPlayer(player, 0);
            const profilesTitle = document.getElementById('player-profiles-title');
            profilesTitle.innerHTML = player.player
        } else if(team){
            createTeam(team, 0)
            const profilesTitle = document.getElementById('player-profiles-title');
            profilesTitle.innerHTML = team.team
            const playersOnTeam = players.filter(p => p.team === teamName);
            playersOnTeam.sort((a, b) => a.role.localeCompare(b.role))
            playersOnTeam.forEach((player,index) => {
                if(player.role != 'sub'){
                    createPlayer(player, index+1)
                }
            })
        } else if(memberName){
            document.getElementById('member').innerHTML = `<h2 class="player-name" id="">${member.name} | Wins: ${member.split1wins + member.split2wins} | Losses ${member.split1loss + member.split2loss}</h2>`
            createMember(member, Regional1, 1, regional1Players)
            createMember(member, Regional2, 2, regional2Players)
            createMember(member, Regional3, 3, regional3Players)
            createMember(member, Regional4, 4, regional4Players)
            createMember(member, Regional5, 5, regional5Players)
            createMember(member, Regional6, 6, regional6Players)
            const profilesTitle = document.getElementById('player-profiles-title');
            profilesTitle.innerHTML = member.name
        }
    }
    console.log('Profile page has loaded!')
  } else {
    console.log("main event listener is working but nothing else is")
  }
});

function createPlayer(id, index) {
    const profilesContainer = document.getElementById(`player-profiles${index+1}`);
    const Playerlink = `${path}/profile.html?name=${encodeURIComponent(id.player)}`;
    const Teamlink = `${path}/profile.html?name=${encodeURIComponent(id.team)}`;

    let drafted = false
    let draftID = ''
    let draftedBy = 'Available'
    let memberName = ''
    let memberlink = ''

    if(id.gp < 1){id.gp = 1}
    members.forEach((id2)=>{
      const playerInSpot = players.find(p =>
        eventName[id2.shortname].includes(p.player) && p.player === id.player
      );
      if (playerInSpot) {
        drafted = true;
        memberName = [id2.name, id2.shortname];
      }
    })
    if(drafted){
      draftedBy = memberName[0]
      draftID = memberName[1]
      memberlink = `${path}/profile.html?name=${encodeURIComponent(memberName[0])}`
    }

    const profileHTML = `
        <div class="profile-card">
            <h2 class="player-name"><a href="${Playerlink}">${id.player}<span id="${id.role}">${id.role}</a></span></h2>
            <p><strong>Team:</strong><span><a style="padding: 2px; border-radius:5px;" id="${(id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","")}" href="${Teamlink}">${id.team}</a>   </p>
            <br>
            <div class="profile-details">
                <p><strong>Rating:</strong> ${id.rating}</p>
                <p><strong>Rank: ${id.rank}</strong></p>
                <p><strong>Win Percentage:</strong> ${(id.wins/id.gp*100).toFixed(2)}%</p>
                <p><strong>Total Score:</strong> ${id.score}</p>
                <p><strong>Total Goals:</strong> ${id.goals}</p>
                <p><strong>Total Assists:</strong> ${id.assists}</p>
                <p><strong>Total Saves:</strong> ${id.saves}</p>
                <p><strong>Total Shots:</strong> ${id.shots}</p><br>
                <p><strong>Per Game</strong></p>
                <div id="border_box">
                    <p><strong>Score per game:</strong> ${(id.score/id.gp).toFixed(2)}</p>
                    <p><strong>Goals per game:</strong> ${(id.goals/id.gp).toFixed(2)}</p>
                    <p><strong>Assists per game:</strong> ${(id.assists/id.gp).toFixed(2)}</p>
                    <p><strong>Saves per game:</strong> ${(id.saves/id.gp).toFixed(2)}</p>
                    <p><strong>Shots per game:</strong> ${(id.shots/id.gp).toFixed(2)}</p><br>
                </div>
                
                <p><strong>Drafted By:</strong><a href="${memberlink}" id="${draftID}">${draftedBy}</a></p>
            </div>
        </div>
    `;
    const profileCoachHTML = `
        <div class="profile-card">
            <h2 class="player-name"><a href="${Playerlink}">${id.player}<span id="${id.role}">${id.role}</a></span></h2>
            <div class="profile-details">
            <p><strong>Team:</strong><a style="padding: 2px; border-radius:5px;" id="${(id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","")}" href="${Teamlink}">${id.team}</a></p>
            </div>
        </div>
    `;
    if(id.role === 'coach'){
        profilesContainer.innerHTML = profileCoachHTML;    
    } else {
        profilesContainer.innerHTML = profileHTML;
    }
}
function createTeam(id, index) {
    const profilesContainer = document.getElementById(`player-profiles${index+1}`);
    const ranking = determineTeamsRanks(id.rating)
    if (id.gp < 1){id.gp = 1}
    const profileTeamHTML = `
        <div class="profile-card">
            <h2><span  class="player-name" id="${(id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","")}">${id.team}</span></h2><br>
            <p><strong>Region:</strong><span id="${(id.region).toLowerCase()}">${id.region}</span></p>
            <div class="profile-details">
                <p><strong>Rating:</strong> ${id.rating}</p>
                <p><strong>Rank: </strong>${ranking}</p>
                <p><strong>Win Percentage:</strong> ${(id.wins/id.gp*100).toFixed(2)}%</p>
                <p><strong>Total Score:</strong> ${id.score}</p>
                <p><strong>Total Goals:</strong> ${id.goals}</p>
                <p><strong>Total Assists:</strong> ${id.assists}</p>
                <p><strong>Total Saves:</strong> ${id.saves}</p>
                <p><strong>Total Shots:</strong> ${id.shots}</p><br>
                <p><strong>Per Game</strong></p>
                <div id="border_box">
                    <p><strong>Score per game:</strong> ${(id.score/id.gp).toFixed(2)}</p>
                    <p><strong>Goals per game:</strong> ${(id.goals/id.gp).toFixed(2)}</p>
                    <p><strong>Assists per game:</strong> ${(id.assists/id.gp).toFixed(2)}</p>
                    <p><strong>Saves per game:</strong> ${(id.saves/id.gp).toFixed(2)}</p>
                    <p><strong>Shots per game:</strong> ${(id.shots/id.gp).toFixed(2)}</p>
                </div>
            </div>
        </div>
    `;
    profilesContainer.innerHTML += profileTeamHTML;
}
function createMember(id, eventNumber, index, playersArray) {
  const profilesContainer = document.getElementById(`player-profiles${index}`);
  const shortnameData = eventNumber[id.shortname];

  let playersHtml = '';
  shortnameData.forEach((playerID, i) => {
    if (playerID) { // Check if playerID is not empty
      const playerDetails = getPlayerDetails(playerID, players);
      const playerName = playerDetails[0];
      const playerTeamId = playerDetails[3];
      const playerScore = getPlayerScore(playerID, playersArray);

      playersHtml += `
        <li>Player ${i + 1}: <a href="${path}/profile.html?name=${encodeURIComponent(playerID)}">${playerID}</a></li>
        <li>Team: <span style="padding:2px; border-radius:5px;" id="${playerTeamId}"><a href="${path}/profile.html?name=${encodeURIComponent(playerName)}">${playerName}</a></span></li>
        <li>Points: ${playerScore}</li>
      `;
    }
  });

  const profileTeamHTML = `
    <div class="profile-card">
        <div>
            <h2>Regional ${index}</h2>
            <ul id="hide_list">
                ${playersHtml}
            </ul>
        </div>
    </div>`;

  profilesContainer.innerHTML = profileTeamHTML;
}