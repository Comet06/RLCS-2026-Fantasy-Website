import { path, deployLinks, menu, regions, getTeamDetails } from "./main.js";
import { year, members, players, EventPoints, EventSums } from "./current-page-data.js";
import { deployTopPerformers } from "./stats.js";
import { Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements } from "./placements.js";

let Regional1 = {
  'vinn' : ['', 0, '', 0, '', 0],
  'jimm' : ['', 0, '', 0, '', 0],
  'gale' : ['', 0, '', 0, '', 0],
  'maht' : ['', 0, '', 0, '', 0],
  'pots' : ['', 0, '', 0, '', 0],
  'yuri' : ['', 0, '', 0, '', 0],
  'dway' : ['', 0, '', 0, '', 0],
  'ecof' : ['', 0, '', 0, '', 0],
  'come' : ['', 0, '', 0, '', 0],
  'squi' : ['', 0, '', 0, '', 0],
}
let regional1Players = [
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
]

let Regional2 = {
  'come' : ['', 0, '', 0, '', 0],
  'squi' : ['', 0, '', 0, '', 0],
  'vinn' : ['', 0, '', 0, '', 0],
  'jimm' : ['', 0, '', 0, '', 0],
  'ecof' : ['', 0, '', 0, '', 0],
  'gale' : ['', 0, '', 0, '', 0],
  'pots' : ['', 0, '', 0, '', 0],
  'yuri' : ['', 0, '', 0, '', 0],
  'maht' : ['', 0, '', 0, '', 0],
  'dway' : ['', 0, '', 0, '', 0],
}
let regional2Players = [
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
]

let Regional3 = {
  'come' : ['', 0, '', 0, '', 0],
  'squi' : ['', 0, '', 0, '', 0],
  'vinn' : ['', 0, '', 0, '', 0],
  'jimm' : ['', 0, '', 0, '', 0],
  'ecof' : ['', 0, '', 0, '', 0],
  'gale' : ['', 0, '', 0, '', 0],
  'pots' : ['', 0, '', 0, '', 0],
  'yuri' : ['', 0, '', 0, '', 0],
  'maht' : ['', 0, '', 0, '', 0],
  'dway' : ['', 0, '', 0, '', 0],
}
let regional3Players = [
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
]

let Regional4 = {
  'come' : ['', 0, '', 0, '', 0],
  'squi' : ['', 0, '', 0, '', 0],
  'vinn' : ['', 0, '', 0, '', 0],
  'jimm' : ['', 0, '', 0, '', 0],
  'ecof' : ['', 0, '', 0, '', 0],
  'gale' : ['', 0, '', 0, '', 0],
  'pots' : ['', 0, '', 0, '', 0],
  'yuri' : ['', 0, '', 0, '', 0],
  'maht' : ['', 0, '', 0, '', 0],
  'dway' : ['', 0, '', 0, '', 0],
}
let regional4Players = [
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
]

let Regional5 = {
  'come' : ['', 0, '', 0, '', 0],
  'squi' : ['', 0, '', 0, '', 0],
  'vinn' : ['', 0, '', 0, '', 0],
  'jimm' : ['', 0, '', 0, '', 0],
  'ecof' : ['', 0, '', 0, '', 0],
  'gale' : ['', 0, '', 0, '', 0],
  'pots' : ['', 0, '', 0, '', 0],
  'yuri' : ['', 0, '', 0, '', 0],
  'maht' : ['', 0, '', 0, '', 0],
  'dway' : ['', 0, '', 0, '', 0],
}
let regional5Players = [
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
]

let Regional6 = {
  'come' : ['', 0, '', 0, '', 0],
  'squi' : ['', 0, '', 0, '', 0],
  'vinn' : ['', 0, '', 0, '', 0],
  'jimm' : ['', 0, '', 0, '', 0],
  'ecof' : ['', 0, '', 0, '', 0],
  'gale' : ['', 0, '', 0, '', 0],
  'pots' : ['', 0, '', 0, '', 0],
  'yuri' : ['', 0, '', 0, '', 0],
  'maht' : ['', 0, '', 0, '', 0],
  'dway' : ['', 0, '', 0, '', 0],
}
let regional6Players = [
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
{player: 'TBD', score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
]

window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/regional.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    const urlParams = new URLSearchParams(window.location.search);
    const evt = urlParams.get('name');
    if(evt === 'reg1'){
      document.getElementById('event').innerHTML = `Regional 1`
      console.log('Regional 1 page has loaded!');
      determineRegionalSums()
      deployReg(Regional1, EventSums, 1)
      deployRegPlacements(Regional1Placements, 1)
      deployTopPerformers(regional1Players)

    } else if(evt === 'reg2'){
      document.getElementById('event').innerHTML = `Regional 2`
      console.log('Regional 2  page has loaded!');
      determineRegionalSums()
      deployReg(Regional2, EventSums, 2)
      deployRegPlacements(Regional2Placements, 1)
      deployTopPerformers(regional2Players)

    } else if(evt === 'reg3'){
      document.getElementById('event').innerHTML = `Regional 3`
      console.log('Regional 3 page has loaded!');
      determineRegionalSums()
      deployReg(Regional3, EventSums, 3)
      deployRegPlacements(Regional3Placements, 1)
      deployTopPerformers(regional3Players)

    } else if(evt === 'reg4'){
      document.getElementById('event').innerHTML = `Regional 4`
      console.log('Regional 4 page has loaded!');
      determineRegionalSums()
      deployReg(Regional4, EventSums, 4)
      deployRegPlacements(Regional4Placements, 2)
      deployTopPerformers(regional4Players)

    } else if(evt === 'reg5'){
      document.getElementById('event').innerHTML = `Regional 5`
      console.log('Regional 5 page has loaded!');
      determineRegionalSums()
      deployReg(Regional5, EventSums, 5)
      deployRegPlacements(Regional5Placements, 2)
      deployTopPerformers(regional5Players)

    } else if(evt === 'reg6'){
      document.getElementById('event').innerHTML = `Regional 6`
      console.log('Regional 6 page has loaded!');
      determineRegionalSums()
      deployReg(Regional6, EventSums, 6)
      deployRegPlacements(Regional6Placements, 2)
      deployTopPerformers(regional6Players)
    }
  }
});


export function determineRegionalSums(){
  members.forEach((id) =>{
    for (let i = 1; i < Regional1[id.shortname].length; i += 2){//Regional sum of all your players
      EventSums[id.shortname][0] += Regional1[id.shortname][i];
      EventSums[id.shortname][1] += Regional2[id.shortname][i];
      EventSums[id.shortname][2] += Regional3[id.shortname][i];
      EventSums[id.shortname][3] += Regional4[id.shortname][i];
      EventSums[id.shortname][4] += Regional5[id.shortname][i];
      EventSums[id.shortname][5] += Regional6[id.shortname][i];
    }
  })
}
function deployReg(event, event2, eventNumber){
  members.forEach((id) =>{
    for (let i = 0; i < 6; i += 2){
      if (i === 0){
        const tableBody = document.getElementById('regionalScoreCard');
        const newRow = document.createElement('tr');
        const teamName = document.createElement('td');
        const playerLink = document.createElement('a');
        const teamLink = document.createElement('a');
        const Player = document.createElement('td');
        const Team = document.createElement('td');
        const Region = document.createElement('td');
        const Points = document.createElement('td');
        const Total = document.createElement('td');

        teamName.id = id.shortname
        Player.id = id.shortname
        Team.id = id.shortname
        Region.id = id.shortname
        Points.id = id.shortname
        Total.id = id.shortname
        teamName.rowSpan = 3
        Total.rowSpan = 3
        
        teamName.textContent = id.name
        playerLink.textContent = event[id.shortname][i]
        playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`
        teamLink.textContent = getPlayerDetails(event[id.shortname][i])[0]
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(teamLink.textContent)}`
        
        Region.textContent = getTeamDetails(teamLink.textContent)[0]
        Points.textContent = event[id.shortname][i+1]
        Total.textContent = event2[id.shortname][eventNumber-1] //EventSums[0]
        
        Player.appendChild(playerLink)
        Team.appendChild(teamLink)
        
        
        newRow.appendChild(teamName);
        newRow.appendChild(Player);
        newRow.appendChild(Team);
        newRow.appendChild(Region);
        newRow.appendChild(Points);
        newRow.appendChild(Total);
        
        tableBody.appendChild(newRow);
      } else {
        const tableBody = document.getElementById('regionalScoreCard');
        const newRow = document.createElement('tr');
        const playerLink = document.createElement('a');
        const teamLink = document.createElement('a');
        const Player = document.createElement('td');
        const Team = document.createElement('td');
        const Region = document.createElement('td');
        const Points = document.createElement('td');

        Player.id = id.shortname
        Team.id = id.shortname
        Region.id = id.shortname
        Points.id = id.shortname

        playerLink.textContent = event[id.shortname][i]
        playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`
        teamLink.textContent = getPlayerDetails(event[id.shortname][i])[0]
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(teamLink.textContent)}`
        
        Region.textContent = getTeamDetails(teamLink.textContent)[0]
        Points.textContent = event[id.shortname][i+1]
        
        Player.appendChild(playerLink)
        Team.appendChild(teamLink)
        
        
        newRow.appendChild(Player);
        newRow.appendChild(Team);
        newRow.appendChild(Region);
        newRow.appendChild(Points);
        
        tableBody.appendChild(newRow);
      }
    }
  })
}
function deployRegPlacements(event, eventNumber){
  regions.forEach((id) => {
    for (let i = 0; i < 16; i ++){
      const tableBody = document.getElementById(`${id}`);
      const newRow = document.createElement('tr');
      const teamLink = document.createElement('a');
      const team = document.createElement('td');
      const pts = document.createElement('td');

      teamLink.textContent = event[id][i]
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id][i])}`
      team.appendChild(teamLink)

      pts.textContent = EventPoints[`Regional${eventNumber}`][i]
      pts.id = 'points'

      newRow.appendChild(team);
      newRow.appendChild(pts);
      
      tableBody.appendChild(newRow);
    }
  })
}
function getPlayerDetails(searchTerm){
  const player = players.find(p => p.player === searchTerm);

  if (!player) {
    return []; // Or handle the case where no team is found
  }

  const details = [
    player.team || 'N/A'
  ];
  return details;
}