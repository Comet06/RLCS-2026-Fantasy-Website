import { path, deployLinks, menu, points, getTeamDetails } from "./main.js";
import { year, members, champRounds, splitSums } from "./current-page-data.js";
import { deployTopPerformers } from "./stats.js";
import { ChampionshipPlacements } from "./placements.js";

let Championship = {
  //(max): PISemi(6), PIQuals(4), GASemi(6), GAQuals(4), GBSemi(6), GBQuals(4), POSemi(8), POFinals(3)
  'come' : [0, 0, 0, 0, 0, 0, 0, 0],
  'squi' : [0, 0, 0, 0, 0, 0, 0, 0],
  'vinn' : [0, 0, 0, 0, 0, 0, 0, 0],
  'jimm' : [0, 0, 0, 0, 0, 0, 0, 0],
  'ecof' : [0, 0, 0, 0, 0, 0, 0, 0],
  'gale' : [0, 0, 0, 0, 0, 0, 0, 0],
  'pots' : [0, 0, 0, 0, 0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0, 0, 0, 0, 0],
  'maht' : [0, 0, 0, 0, 0, 0, 0, 0],
  'dway' : [0, 0, 0, 0, 0, 0, 0, 0],
}
let championshipPlayers = [
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
  if (window.location.pathname === `${path}/championship.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    determineChampionshipSums()
    deployChamp(champRounds, splitSums)
    deployChampPlacements(ChampionshipPlacements)
    deployTopPerformers(championshipPlayers)
  }
});

export function determineChampionshipSums(){
  members.forEach((id)=>{
    champRounds[id.shortname][0] = Championship[`${id.shortname}`][0] * points['playin'][0] + Championship[`${id.shortname}`][1] * points['playin'][1] //First number is the correct amount they guess
    champRounds[id.shortname][1] = Championship[`${id.shortname}`][2] * points['groupA'][0] + Championship[`${id.shortname}`][3] * points['groupA'][1] //Second number is the points worth per guess
    champRounds[id.shortname][2] = Championship[`${id.shortname}`][4] * points['groupB'][0] + Championship[`${id.shortname}`][5] * points['groupB'][1]
    champRounds[id.shortname][3] = Championship[`${id.shortname}`][6] * points['playoff'][0] + Championship[`${id.shortname}`][7] * points['playoff'][1]
    
    splitSums[id.shortname][2] = (champRounds[id.shortname][0] + champRounds[id.shortname][1] + champRounds[id.shortname][2] + champRounds[id.shortname][3])*5 //Total of all championship rounds
  })
}
function deployChamp(event, event2){
  members.forEach((id)=>{
    const tableBody = document.getElementById('championshipScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const playinCell = document.createElement('td');
    const groupACell = document.createElement('td');
    const groupBCell = document.createElement('td');
    const playoffCell = document.createElement('td');
    const totalCell = document.createElement('td');
    
    teamName.id = id.shortname
    playinCell.id = id.shortname
    groupACell.id = id.shortname
    groupBCell.id = id.shortname
    playoffCell.id = id.shortname
    totalCell.id = id.shortname
    teamName.textContent = id.name
    playinCell.textContent = event[id.shortname][0]
    groupACell.textContent = event[id.shortname][1]
    groupBCell.textContent = event[id.shortname][2]
    playoffCell.textContent = event[id.shortname][3]
    totalCell.textContent = event2[id.shortname][2]
    
    newRow.appendChild(teamName);
    newRow.appendChild(playinCell);
    newRow.appendChild(groupACell);
    newRow.appendChild(groupBCell);
    newRow.appendChild(playoffCell);
    newRow.appendChild(totalCell);
    
    tableBody.appendChild(newRow);
  })
}
function deployChampPlacements(event){
  for (let i = 0; i < 40; i += 2){
    const tableBody = document.getElementById('champ-placements');
    const newRow = document.createElement('tr');
    const teamLink = document.createElement('a');
    const team = document.createElement('td');
    const place = document.createElement('td');

    teamLink.textContent = event['Champ'][i+1]
    if (event['Champ'][i+1] != 'TBD'){
      team.id = (getTeamDetails(event['Champ'][i+1])[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Champ'][i+1])}`
    }
    team.appendChild(teamLink)
    
    place.textContent = event['Champ'][i]
    place.id = 'points'


    newRow.appendChild(team);
    newRow.appendChild(place);
    
    tableBody.appendChild(newRow);
  }
}