import { path, deployLinks, menu, points, deployTops, getTeamDetails } from "./main.js";
import { year, members, champRounds, splitSums } from "./a-current-page-data.js";

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
let ChampionshipPlacements = {
    'Champ' : ['1st', 'TBD', '2nd', 'TBD', '3rd-4th', 'TBD', '3rd-4th', 'TBD', '5th-6th', 'TBD', '5th-6th', 'TBD', '7th-8th', 'TBD', '7th-8th', 'TBD', '9th-12th', 'TBD', '9th-12th', 'TBD', '9th-12th', 'TBD', '9th-12th', 'TBD', '13th-16th', 'TBD', '13th-16th', 'TBD', '13th-16th', 'TBD', '13th-16th', 'TBD', '17th-18th', 'TBD', '17th-18th', 'TBD', '19th-20th', 'TBD', '19th-20th', 'TBD']
}
let ChampionshipTops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}

let playins = [
  // Quarter Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Quarter Lower
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Semi Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Semi Lower
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 4},
  // Qualify Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Qualify Lower
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let GroupA = [
  // Quarter Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Quarter Lower
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Semi Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Semi Lower
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 4},
  // Qualify Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Qualify Lower
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let GroupB = [
  // Quarter Upper
  {team: '', verdict: '', score: 3},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Quarter Lower
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Semi Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Semi Lower
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 4},
  // Qualify Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Qualify Lower
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let playoffsQuarter = [
  {team: '', verdict: '', score: 0},//Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},//Lower Round 1
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let playoffsSemi = [
  {team: '', verdict: '', score: 0},//Quarter
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},//Semi
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let playoffsQualify = [
  {team: '', verdict: '', score: 0},//Grand Final
  {team: '', verdict: '', score: 0},

  {team: '', verdict: '', score: 0},//Winner
]


window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/championship.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    ChampionshipBracket()
    determineChampionshipSums()
    deployChamp(champRounds, splitSums)
    deployChampPlacements(ChampionshipPlacements)
    deployTops(ChampionshipTops)
  }
});


export function ChampionshipBracket(){
  for (let i = 0; i < 8; i ++){//Playins
    document.getElementById(`puqt${i+1}`).innerHTML= `${playins[i].team}<span class="score">${playins[i].score}</span>`;
    const team = document.getElementById(`puqt${i+1}`)
    team.id = `${playins[i].verdict}`
    // Group A
    document.getElementById(`gauqt${i+1}`).innerHTML= `${GroupA[i].team}<span class="score">${GroupA[i].score}</span>`;
    const teamGA = document.getElementById(`gauqt${i+1}`)
    teamGA.id = `${GroupA[i].verdict}`
    // Group B
    document.getElementById(`gbuqt${i+1}`).innerHTML= `${GroupB[i].team}<span class="score">${GroupB[i].score}</span>`;
    const teamGB = document.getElementById(`gbuqt${i+1}`)
    teamGB.id = `${GroupB[i].verdict}`
  }
  for (let i = 0; i < 4; i ++){
    // Playin
    document.getElementById(`plqt${i+1}`).innerHTML= `${playins[i+8].team}<span class="score">${playins[i+8].score}</span>`;
    document.getElementById(`pust${i+1}`).innerHTML= `${playins[i+12].team}<span class="score">${playins[i+12].score}</span>`;
    document.getElementById(`plst${i+1}`).innerHTML= `${playins[i+16].team}<span class="score">${playins[i+16].score}</span>`;
    document.getElementById(`pqt${i+1}`).innerHTML= `${playins[i+20].team}<span class="score">${playins[i+20].score}</span>`;
    const teamPQ = document.getElementById(`plqt${i+1}`)
    teamPQ.id = `${playins[i+8].verdict}`
    const teamPUS = document.getElementById(`pust${i+1}`)
    teamPUS.id = `${playins[i+12].verdict}`
    const teamPLS = document.getElementById(`plst${i+1}`)
    teamPLS.id = `${playins[i+16].verdict}`
    const teamPQU = document.getElementById(`pqt${i+1}`)
    teamPQU.id = `${playins[i+20].verdict}`
    // Group A
    document.getElementById(`galqt${i+1}`).innerHTML= `${GroupA[i+8].team}<span class="score">${GroupA[i+8].score}</span>`;
    document.getElementById(`gaust${i+1}`).innerHTML= `${GroupA[i+12].team}<span class="score">${GroupA[i+12].score}</span>`;
    document.getElementById(`galst${i+1}`).innerHTML= `${GroupA[i+16].team}<span class="score">${GroupA[i+16].score}</span>`;
    document.getElementById(`gaqt${i+1}`).innerHTML= `${GroupA[i+20].team}<span class="score">${GroupA[i+20].score}</span>`;
    const teamGAQ = document.getElementById(`galqt${i+1}`)
    teamGAQ.id = `${GroupA[i+8].verdict}`
    const teamGAUS = document.getElementById(`gaust${i+1}`)
    teamGAUS.id = `${GroupA[i+12].verdict}`
    const teamGALS = document.getElementById(`galst${i+1}`)
    teamGALS.id = `${GroupA[i+16].verdict}`
    const teamGAQU = document.getElementById(`gaqt${i+1}`)
    teamGAQU.id = `${GroupA[i+20].verdict}`
    // Group B
    document.getElementById(`gblqt${i+1}`).innerHTML=`${GroupB[i+8].team}<span class="score">${GroupB[i+8].score}</span>`;
    document.getElementById(`gbust${i+1}`).innerHTML=`${GroupB[i+12].team}<span class="score">${GroupB[i+12].score}</span>`;
    document.getElementById(`gblst${i+1}`).innerHTML=`${GroupB[i+16].team}<span class="score">${GroupB[i+16].score}</span>`;
    document.getElementById(`gbqt${i+1}`).innerHTML=`${GroupB[i+20].team}<span class="score">${GroupB[i+20].score}</span>`;
    const teamGBQ = document.getElementById(`gblqt${i+1}`)
    teamGBQ.id = `${GroupB[i+8].verdict}`
    const teamGBUS = document.getElementById(`gbust${i+1}`)
    teamGBUS.id = `${GroupB[i+12].verdict}`
    const teamGBLS = document.getElementById(`gblst${i+1}`)
    teamGBLS.id = `${GroupB[i+16].verdict}`
    const teamGBQU = document.getElementById(`gbqt${i+1}`)
    teamGBQU.id = `${GroupB[i+20].verdict}`
    // Playoffs
    document.getElementById(`pouqt${i+1}`).innerHTML= `${playoffsQuarter[i].team}<span class="score">${playoffsQuarter[i].score}</span>`;
    document.getElementById(`porot${i+1}`).innerHTML= `${playoffsQuarter[i+4].team}<span class="score">${playoffsQuarter[i+4].score}</span>`;
    document.getElementById(`polqt${i+1}`).innerHTML= `${playoffsSemi[i].team}<span class="score">${playoffsSemi[i].score}</span>`;
    document.getElementById(`polst${i+1}`).innerHTML= `${playoffsSemi[i+4].team}<span class="score">${playoffsSemi[i+4].score}</span>`;
    const teamPOQ = document.getElementById(`pouqt${i+1}`)
    teamPOQ.id = `${playoffsQuarter[i].verdict}`
    const teamPOUS = document.getElementById(`porot${i+1}`)
    teamPOUS.id = `${playoffsQuarter[i+4].verdict}`
    const teamPOLS = document.getElementById(`polqt${i+1}`)
    teamPOLS.id = `${playoffsSemi[i].verdict}`
    const teamPOQU = document.getElementById(`polst${i+1}`)
    teamPOQU.id = `${playoffsSemi[i+4].verdict}`
  }
  for (let i = 0; i < 2; i ++){
    document.getElementById(`pogft${i+1}`).innerHTML=`${playoffsQualify[i].team}<span class="score">${playoffsQualify[i].score}</span>`;
  }
  document.getElementById(`winner`).innerHTML= `${playoffsQualify[2].team}</span>`;
}
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

    team.id = (getTeamDetails(event['Champ'][i+1])[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
    teamLink.textContent = event['Champ'][i+1]
    if (event['Champ'][i+1] != 'TBD'){
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