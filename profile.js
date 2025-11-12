import { path, deployLinks, menu } from "./main.js";
import { year, players, teams, members, Regional1, Regional2, Regional3, Regional4, Regional5, Regional6 } from "./current-fantasy-members.js";
import { determineTeamsRanks } from "./stats.js";
import { getPlayerDetails } from "./events.js";

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
            createMember(member, Regional1, 1)
            createMember(member, Regional2, 2)
            createMember(member, Regional3, 3)
            createMember(member, Regional4, 4)
            createMember(member, Regional5, 5)
            createMember(member, Regional6, 6)
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
    let ranking = `(Rank: ${id.rank})`
    let role = ''

    if(id.role === 'coach'){ranking = ``}
    if(id.gp < 1){id.gp = 1}
    if(id.role === ''){role = ``} else {role =`(${id.role})`}
    const profileHTML = `
        <div class="profile-card">
            <h2 class="player-name"><a href="${Playerlink}">${id.player}<span id="${id.role}">${role}</a></span></h2>
            <h2>${ranking}</h2>
            <div class="profile-details">
                <a style="padding: 5px;" id="${(id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","")}" href="${Teamlink}"><strong>Team:</strong> ${id.team}</a>
                <p><strong>Rating:</strong> ${id.rating}</p>
                <p><strong>Win Percentage:</strong> ${(id.wins/id.gp*100).toFixed(2)}%</p>
                <p><strong>Total Score:</strong> ${id.score}</p>
                <p><strong>Total Goals:</strong> ${id.goals}</p>
                <p><strong>Total Assists:</strong> ${id.assists}</p>
                <p><strong>Total Saves:</strong> ${id.saves}</p>
                <p><strong>Total Shots:</strong> ${id.shots}</p>
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
    const profileCoachHTML = `
        <div class="profile-card">
            <h2 class="player-name"><a href="${Playerlink}">${id.player} ${ranking}<span id="${id.role}">${role}</a></span></h2>
            <div class="profile-details">
                <a  style="padding: 5px;" id="${(id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","")}" href="${Teamlink}"><strong>Team:</strong> ${id.team}</a>
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
    const rank = determineTeamsRanks(id.rating)
    if (id.gp < 1){id.gp = 1}
    const profileTeamHTML = `
        <div class="profile-card">
            <h2><span  class="player-name" id="${(id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","")}">${id.team}</span></h2>
            <h2 id="rank">(Rank:${rank})</h2>
            <div class="profile-details">
                <p><strong>Region:</strong><span style="padding: 5px; border-radius:5px;" id="${(id.region).toLowerCase()}">${id.region}</span></p>
                <p><strong>Rating:</strong> ${id.rating}</p>
                <p><strong>Win Percentage:</strong> ${(id.wins/id.gp*100).toFixed(2)}%</p>
                <p><strong>Total Score:</strong> ${id.score}</p>
                <p><strong>Total Goals:</strong> ${id.goals}</p>
                <p><strong>Total Assists:</strong> ${id.assists}</p>
                <p><strong>Total Saves:</strong> ${id.saves}</p>
                <p><strong>Total Shots:</strong> ${id.shots}</p>
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
function createMember(id, eventNumber, index) {
    const profilesContainer = document.getElementById(`player-profiles${index}`);
    const player1 = [eventNumber[id.shortname][0], getPlayerDetails(eventNumber[id.shortname][0], players)[0], getPlayerDetails(eventNumber[id.shortname][0], players)[3]]
    const player2 = [eventNumber[id.shortname][2], getPlayerDetails(eventNumber[id.shortname][2], players)[0], getPlayerDetails(eventNumber[id.shortname][2], players)[3]]
    const player3 = [eventNumber[id.shortname][4], getPlayerDetails(eventNumber[id.shortname][4], players)[0], getPlayerDetails(eventNumber[id.shortname][4], players)[3]]
    const sub = [eventNumber[id.shortname][6], getPlayerDetails(eventNumber[id.shortname][6], players)[0], getPlayerDetails(eventNumber[id.shortname][6], players)[3]]
    let roster = []
    if(eventNumber[id.shortname][0] != ''){roster.push(player1[0], player1[1], player1[2])} else {roster.push('', '', '')}//roster[0-2]
    if(eventNumber[id.shortname][2] != ''){roster.push(player2[0], player2[1], player2[2])} else {roster.push('', '', '')}//roster[3-5]
    if(eventNumber[id.shortname][4] != ''){roster.push(player3[0], player3[1], player3[2])} else {roster.push('', '', '')}//roster[6-8]
    if(eventNumber[id.shortname][6] != ''){roster.push(sub[0], sub[1], sub[2])} else {roster.push('', '', '')}//roster[9-11]
    console.log(roster)
    const profileTeamHTML = `
        <div class="profile-card">
            <div class="profile-details">
                <h2>Regional ${index}</h2>
                <h3>Player 1:<span style="padding: 5px; border-radius:5px;" id="${roster[2]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[0])}">${roster[0]}</a></span></h3>
                <h3>Team :<span style="padding: 5px; border-radius:5px;" id="${roster[2]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[1])}">${roster[1]}</a></span></h3>
                <h3>Points: ${eventNumber[id.shortname][1]}</h3><br>
                <h3>Player 2:<span style="padding: 5px; border-radius:5px;" id="${roster[5]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[3])}">${roster[3]}</a></span></h3>
                <h3>Team :<span style="padding: 5px; border-radius:5px;" id="${roster[5]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[4])}">${roster[4]}</a></span></h3>
                <h3>Points: ${eventNumber[id.shortname][1]}</h3><br>
                <h3>Player 3:<span style="padding: 5px; border-radius:5px;" id="${roster[8]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[6])}">${roster[6]}</a></span></h3>
                <h3>Team :<span style="padding: 5px; border-radius:5px;" id="${roster[8]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[7])}">${roster[7]}</a></span></h3>
                <h3>Points: ${eventNumber[id.shortname][1]}</h3><br>
                <h3>Sub:<span style="padding: 5px; border-radius:5px;" id="${roster[11]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[9])}">${roster[9]}</a></span></h3>
                <h3>Team :<span style="padding: 5px; border-radius:5px;" id="${roster[11]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[10])}">${roster[10]}</a></span></h3>
                <h3>Points: ${eventNumber[id.shortname][1]}</h3><br>
            </div>
        </div>
    `;
    profilesContainer.innerHTML += profileTeamHTML;
}