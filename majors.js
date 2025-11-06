import { path, deployLinks, menu, points } from "./main.js";
import { year, members, kickoffRounds, major1Rounds, major2Rounds, EventPoints, splitSums, EventSums } from "./current-page-data.js";
import { deployTops } from "./stats.js";
import { kickoffLANPlacements, Major1Placements, Major2Placements } from "./placements.js";

let kickoffLAN = {
  // bracket correct(7),
  'come' : [0],
  'squi' : [0],
  'vinn' : [0],
  'jimm' : [0],
  'ecof' : [0],
  'gale' : [0],
  'pots' : [0],
  'yuri' : [0],
  'maht' : [0],
  'dway' : [0],
}
let kickoffLANPlayers = [
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

let Major1 = {
  // Swiss Correct(8), POSemi(8), POFinals(3)
  'come' : [0, 0, 0],
  'squi' : [0, 0, 0],
  'vinn' : [0, 0, 0],
  'jimm' : [0, 0, 0],
  'ecof' : [0, 0, 0],
  'gale' : [0, 0, 0],
  'pots' : [0, 0, 0],
  'yuri' : [0, 0, 0],
  'maht' : [0, 0, 0],
  'dway' : [0, 0, 0],
}
let major1Players = [
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

let Major2 = {
  // Swiss Correct(8), POSemi(8), POFinals(3)
  'come' : [0, 0, 0],
  'squi' : [0, 0, 0],
  'vinn' : [0, 0, 0],
  'jimm' : [0, 0, 0],
  'ecof' : [0, 0, 0],
  'gale' : [0, 0, 0],
  'pots' : [0, 0, 0],
  'yuri' : [0, 0, 0],
  'maht' : [0, 0, 0],
  'dway' : [0, 0, 0],
}
let major2Players = [
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
  if (window.location.pathname === `${path}/major.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    const urlParams = new URLSearchParams(window.location.search);
    const evt = urlParams.get('name');
    if(evt === 'maj1'){
      document.getElementById('event').innerHTML = `Major 1`
      determineMajorSums()
      deployMaj(major1Rounds)
      deployMajPlacements(Major1Placements, 1)
      deployTops(major1Players)
    } else if(evt === 'maj2'){
      document.getElementById('event').innerHTML = `Major 2`
      determineMajorSums()
      deployMaj(major2Rounds)
      deployMajPlacements(Major2Placements, 2)
      deployTops(major2Players)
    }
  } else if (window.location.pathname === `${path}/kickoff_lan.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    const urlParams = new URLSearchParams(window.location.search);
    const evt = urlParams.get('name');
    if(evt === 'koff'){
      document.getElementById('event').innerHTML = `Kickoff LAN`
      determineMajorSums()
      deploykickoff(kickoffRounds)
      deploykickoffPlacements(kickoffLANPlacements, 0)
      deployTops(kickoffLANPlayers)
    }
  }
});

function deployMaj(event){
  members.forEach((id) =>{
    const tableBody = document.getElementById('majorScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const swissStage = document.createElement('td');
    const playoffs = document.createElement('td');
    const total = document.createElement('td');
    
    teamName.id = id.shortname
    swissStage.id = id.shortname
    playoffs.id = id.shortname
    total.id = id.shortname
    
    teamName.textContent = id.name
    swissStage.textContent = event[id.shortname][0]
    playoffs.textContent = event[id.shortname][1]
    total.textContent = event[id.shortname][2]
    
    newRow.appendChild(teamName);
    newRow.appendChild(swissStage);
    newRow.appendChild(playoffs);
    newRow.appendChild(total);
    
    tableBody.appendChild(newRow);
  })
}
function deploykickoff(event){
  members.forEach((id) =>{
    const tableBody = document.getElementById('majorScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const total = document.createElement('td');
    
    teamName.id = id.shortname
    total.id = id.shortname
    
    teamName.textContent = id.name
    total.textContent = event[id.shortname][0]
    
    newRow.appendChild(teamName);
    newRow.appendChild(total);
    
    tableBody.appendChild(newRow);
  })
}
function deploykickoffPlacements(event, eventNumber){
  for (let i = 0; i < 8; i ++){
    const tableBody = document.getElementById('Major-placements');
    const newRow = document.createElement('tr');
    const teamLink = document.createElement('a');
    const team = document.createElement('td');
    const pts = document.createElement('td');
    
    teamLink.textContent = event['Major'][i]
    if (event['Major'][i] != 'TBD'){
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Major'][i])}`
    }
    team.appendChild(teamLink)
    if(eventNumber === 0 && i < 1){
      pts.textContent = 'Qualified to Major 1'
    } else if(eventNumber === 0 && i >= 1){
      pts.textContent = ''
    } else {
      pts.textContent = EventPoints[`Major${eventNumber}`][i]
    }
    pts.id = 'points'


    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  }
}
function deployMajPlacements(event, eventNumber){
  for (let i = 0; i < 16; i ++){
    const tableBody = document.getElementById('Major-placements');
    const newRow = document.createElement('tr');
    const teamLink = document.createElement('a');
    const team = document.createElement('td');
    const pts = document.createElement('td');
    
    teamLink.textContent = event['Major'][i]
    if (event['Major'][i] != 'TBD'){
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Major'][i])}`
    }
    team.appendChild(teamLink)
    if(eventNumber === 0 && i < 1){
      pts.textContent = 'Qualified to Major 1'
    } else if(eventNumber === 0 && i >= 1){
      pts.textContent = ''
    } else {
      pts.textContent = EventPoints[`Major${eventNumber}`][i]
    }
    pts.id = 'points'


    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  }
}
export function determineMajorSums(){
  members.forEach((id) =>{
    major1Rounds[id.shortname][0] = Major1[`${id.shortname}`][0] * points['swiss'][0] //First number is the correct amount they guess
    major1Rounds[id.shortname][1] = Major1[`${id.shortname}`][1] * points['playoff'][0] + Major1[`${id.shortname}`][2] * points['playoff'][1] //Second number is the points worth per guess
    major2Rounds[id.shortname][0] = Major2[`${id.shortname}`][0] * points['swiss'][0] //First number is the correct amount they guess
    major2Rounds[id.shortname][1] = Major2[`${id.shortname}`][1] * points['playoff'][0] + Major2[`${id.shortname}`][2] * points['playoff'][1] //Second number is the points worth per guess

    major1Rounds[id.shortname][2] = major1Rounds[id.shortname][0] + major1Rounds[id.shortname][1]
    major2Rounds[id.shortname][2] = major2Rounds[id.shortname][0] + major2Rounds[id.shortname][1]
    kickoffRounds[id.shortname][0] = kickoffLAN[`${id.shortname}`][0]*100

    splitSums[id.shortname][0] = EventSums[id.shortname][0] + EventSums[id.shortname][1] + EventSums[id.shortname][2] + kickoffRounds[id.shortname][0]*2 + major1Rounds[id.shortname][2]*3 //Split 1 Total
    splitSums[id.shortname][1] = EventSums[id.shortname][3] + EventSums[id.shortname][4] + EventSums[id.shortname][5] + major2Rounds[id.shortname][2]*3 //Split 2 Total
  })
}