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
        const playerSpot1 = players.find(p => p.player === eventName[id2.shortname][0])
        const playerSpot2 = players.find(p => p.player === eventName[id2.shortname][1])
        const playerSpot3 = players.find(p => p.player === eventName[id2.shortname][2])
        const playerSpot4 = players.find(p => p.player === eventName[id2.shortname][3])
        if(playerSpot1){if(playerSpot1.player === id.player){drafted = true; memberName = [id2.name, id2.shortname]}}
        if(playerSpot2){if(playerSpot2.player === id.player){drafted = true; memberName = [id2.name, id2.shortname]}}
        if(playerSpot3){if(playerSpot3.player === id.player){drafted = true; memberName = [id2.name, id2.shortname]}}
        if(playerSpot4){if(playerSpot4.player === id.player){drafted = true; memberName = [id2.name, id2.shortname]}}
    })
    if(drafted){
      draftedBy = memberName[0]
      draftID = memberName[1]
      memberlink = `${path}/profile.html?name=${encodeURIComponent(memberName)}`
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
                
                <h2><strong>Drafted By:</strong><a href="${memberlink}" id="${draftID}">${draftedBy}</a></h2>
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
            <p><strong>Region:</strong><span style="padding: 5px; border-radius:5px;" id="${(id.region).toLowerCase()}">${id.region}</span></p>
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
    const player1 = [eventNumber[id.shortname][0], getPlayerDetails(eventNumber[id.shortname][0], players)[0], getPlayerDetails(eventNumber[id.shortname][0], players)[3], getPlayerScore(eventNumber[id.shortname][0], playersArray)]
    const player2 = [eventNumber[id.shortname][1], getPlayerDetails(eventNumber[id.shortname][1], players)[0], getPlayerDetails(eventNumber[id.shortname][1], players)[3], getPlayerScore(eventNumber[id.shortname][1], playersArray)]
    const player3 = [eventNumber[id.shortname][2], getPlayerDetails(eventNumber[id.shortname][2], players)[0], getPlayerDetails(eventNumber[id.shortname][2], players)[3], getPlayerScore(eventNumber[id.shortname][2], playersArray)]
    const sub = [eventNumber[id.shortname][3], getPlayerDetails(eventNumber[id.shortname][3], players)[0], getPlayerDetails(eventNumber[id.shortname][3], players)[3], getPlayerScore(eventNumber[id.shortname][3], playersArray)]
    let roster = []
    if(eventNumber[id.shortname][0] != ''){roster.push(player1[0], player1[1], player1[2], player1[3])} else {roster.push('', '', '', '')}//roster[0-3]
    if(eventNumber[id.shortname][1] != ''){roster.push(player2[0], player2[1], player2[2], player2[3])} else {roster.push('', '', '', '')}//roster[4-7]
    if(eventNumber[id.shortname][2] != ''){roster.push(player3[0], player3[1], player3[2], player3[3])} else {roster.push('', '', '', '')}//roster[8-11]
    if(eventNumber[id.shortname][3] != ''){roster.push(sub[0], sub[1], sub[2], sub[3])} else {roster.push('', '', '', '')}//roster[12-15]
    const profileTeamHTML = `
        <div class="profile-card">
            <div>
                <h2>Regional ${index}</h2>
                <ul id="hide_list">
                    <li>Player 1: <a href="${path}/profile.html?name=${encodeURIComponent(roster[0])}">${roster[0]}</a></li>
                    <li>Team: <span style="padding:2px; border-radius:5px;" id="${roster[2]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[1])}">${roster[1]}</a></span></li>
                    <li>Points: ${roster[3]}</li>
                    <li>Player 2: <a href="${path}/profile.html?name=${encodeURIComponent(roster[4])}">${roster[4]}</a></li>
                    <li>Team: <span style="padding:2px; border-radius:5px;" id="${roster[6]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[5])}">${roster[5]}</a></span></li>
                    <li>Points: ${roster[7]}</li>
                    <li>Player 3: <a href="${path}/profile.html?name=${encodeURIComponent(roster[8])}">${roster[8]}</a></li>
                    <li>Team: <span style="padding:2px; border-radius:5px;" id="${roster[10]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[9])}">${roster[9]}</a></span></li>
                    <li>Points: ${roster[11]}</li>
                    <li>Sub: <span><a href="${path}/profile.html?name=${encodeURIComponent(roster[12])}">${roster[12]}</a></span></li>
                    <li>Team: <span style="padding:2px; border-radius:5px;" id="${roster[14]}"><a href="${path}/profile.html?name=${encodeURIComponent(roster[13])}">${roster[13]}</a></span></li>
                    <li>Points: ${roster[15]}</li>
                </ul>
            </div>
        </div>
    `;
    profilesContainer.innerHTML += profileTeamHTML;
}