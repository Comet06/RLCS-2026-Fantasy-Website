import { path, deployLinks, menu, regions, points, getTeamDetails } from "./main.js";
import { year, members, players, Regional1, Regional2, Regional3, Regional4, Regional5, Regional6, kickoffRounds, major1Rounds, 
  major2Rounds, EventPoints, splitSums, EventSums, kickoffLAN, Major1, Major2, champRounds, Championship, 
  Regional1Matchups, Regional2Matchups, Regional3Matchups, Regional4Matchups, Regional5Matchups, Regional6Matchups } from "./current-fantasy-members.js";
import { deployTops } from "./stats.js";
import { Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements, 
  kickoffLANPlacements, Major1Placements, Major2Placements,ChampionshipPlacements } from "./placements.js";

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
  if (window.location.pathname === `${path}/regional.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    const urlParams = new URLSearchParams(window.location.search);
    const evt = urlParams.get('name');
    determineRegionalSums()
    if(evt === 'reg1'){
      document.getElementById('event').innerHTML = `Regional 1`
      console.log('Regional 1 page has loaded!');
      deployReg(Regional1, EventSums, 1)
      deployRegPlacements(Regional1Placements, 1)
      deployTops(regional1Players)
      deployRegMatchups(Regional1Matchups)
    } else if(evt === 'reg2'){
      document.getElementById('event').innerHTML = `Regional 2`
      console.log('Regional 2  page has loaded!');
      deployReg(Regional2, EventSums, 2)
      deployRegPlacements(Regional2Placements, 1)
      deployTops(regional2Players)
      deployRegMatchups(Regional2Matchups)
    } else if(evt === 'reg3'){
      document.getElementById('event').innerHTML = `Regional 3`
      console.log('Regional 3 page has loaded!');
      deployReg(Regional3, EventSums, 3)
      deployRegPlacements(Regional3Placements, 1)
      deployTops(regional3Players)
      deployRegMatchups(Regional3Matchups)
    } else if(evt === 'reg4'){
      document.getElementById('event').innerHTML = `Regional 4`
      console.log('Regional 4 page has loaded!');
      deployReg(Regional4, EventSums, 4)
      deployRegPlacements(Regional4Placements, 2)
      deployTops(regional4Players)
      deployRegMatchups(Regional4Matchups)
    } else if(evt === 'reg5'){
      document.getElementById('event').innerHTML = `Regional 5`
      console.log('Regional 5 page has loaded!');
      deployReg(Regional5, EventSums, 5)
      deployRegPlacements(Regional5Placements, 2)
      deployTops(regional5Players)
      deployRegMatchups(Regional5Matchups)
    } else if(evt === 'reg6'){
      document.getElementById('event').innerHTML = `Regional 6`
      console.log('Regional 6 page has loaded!');
      deployReg(Regional6, EventSums, 6)
      deployRegPlacements(Regional6Placements, 2)
      deployTops(regional6Players)
      deployRegMatchups(Regional6Matchups)
    }
  } else if (window.location.pathname === `${path}/major.html`) {
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
  } else if (window.location.pathname === `${path}/championship.html`) {
      deployLinks()
      menu()
      document.getElementById('year').innerHTML = `RLCS ${year}`
      determineChampionshipSums()
      deployChamp(champRounds, splitSums)
      deployChampPlacements(ChampionshipPlacements)
      deployTops(championshipPlayers)
  }
});

export function determineRegionalSums(){
  members.forEach((id) =>{
    for (let i = 1; i < Regional1[id.shortname].length-1; i += 2){//Regional sum of all your players
      EventSums[id.shortname][0] += Regional1[id.shortname][i];
      EventSums[id.shortname][1] += Regional2[id.shortname][i];
      EventSums[id.shortname][2] += Regional3[id.shortname][i];
      EventSums[id.shortname][3] += Regional4[id.shortname][i];
      EventSums[id.shortname][4] += Regional5[id.shortname][i];
      EventSums[id.shortname][5] += Regional6[id.shortname][i];
    }
  })
}
export function determineMajorSums(){
  members.forEach((id) =>{
    major1Rounds[id.shortname][0] = Major1[`${id.shortname}`][0] * points['groups'][0] //Groups (take index of event picks and multiplies the point value)
    major1Rounds[id.shortname][1] = Major1[`${id.shortname}`][1] * points['playoff'][0] + Major1[`${id.shortname}`][2] * points['playoff'][1] //Second number is the points worth per guess
    major1Rounds[id.shortname][2] = major1Rounds[id.shortname][0] + major1Rounds[id.shortname][1] //Total

    major2Rounds[id.shortname][0] = Major2[`${id.shortname}`][0] * points['groups'][0] //Groups
    major2Rounds[id.shortname][1] = Major2[`${id.shortname}`][1] * points['playoff'][0] + Major2[`${id.shortname}`][2] * points['playoff'][1] //Second number is the points worth per guess
    major2Rounds[id.shortname][2] = major2Rounds[id.shortname][0] + major2Rounds[id.shortname][1]//Total

    kickoffRounds[id.shortname][0] = kickoffLAN[`${id.shortname}`][0]*points['kickoff'][0]

    splitSums[id.shortname][0] = EventSums[id.shortname][0] + EventSums[id.shortname][1] + EventSums[id.shortname][2] + kickoffRounds[id.shortname][0]*2 + major1Rounds[id.shortname][2]*3 //Split 1 Total
    splitSums[id.shortname][1] = EventSums[id.shortname][3] + EventSums[id.shortname][4] + EventSums[id.shortname][5] + major2Rounds[id.shortname][2]*3 //Split 2 Total
  })
}
export function determineChampionshipSums(){
  members.forEach((id)=>{
    champRounds[id.shortname][0] = Championship[`${id.shortname}`][0] * points['playin'][0] + Championship[`${id.shortname}`][1] * points['playin'][1] //playins
    champRounds[id.shortname][1] = Championship[`${id.shortname}`][2] * points['groups'][0] //Groups
    champRounds[id.shortname][2] = Championship[`${id.shortname}`][2] * points['playoff'][0] + Championship[`${id.shortname}`][3] * points['playoff'][1] //playoffs
    champRounds[id.shortname][3] = (champRounds[id.shortname][0] + champRounds[id.shortname][1] + champRounds[id.shortname][2] + champRounds[id.shortname][3])*5 //Total of all championship rounds
    
    splitSums[id.shortname][2] = (champRounds[id.shortname][0] + champRounds[id.shortname][1] + champRounds[id.shortname][2] + champRounds[id.shortname][3])*5 //Total of all championship rounds
  })
}
function getPlayerDetails(searchTerm, playersArray){
  const player = playersArray.find(p => p.player === searchTerm);
  if (!player) {
    return [];
  }
  const details = [
    player.team || 'N/A',
    player.name || 'N/A',
    player.shortname || 'N/A',
  ];
  return details;
}
function getMemberDetails(searchTerm){
  const member = members.find(p => p.shortname === searchTerm);
  if (!member) {
    return [];
  }
  const details = [
    member.name || 'N/A',
    member.shortname || 'N/A',
  ];
  return details;
}

function deployReg(event, event2, eventNumber){
  members.forEach((id) =>{
    for (let i = 0; i < event[id.shortname].length; i += 2){
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
        teamName.rowSpan = event[id.shortname].length/2
        Total.rowSpan = event[id.shortname].length/2
        
        teamName.textContent = id.name
        playerLink.textContent = event[id.shortname][i]
        playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`
        teamLink.textContent = getPlayerDetails(event[id.shortname][i], players)[0]
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
        if(i === (event[id.shortname].length)-2){
          playerLink.textContent = `${event[id.shortname][i]} (sub)`
        } else {
          playerLink.textContent = event[id.shortname][i]
        }
        Player.id = id.shortname
        Team.id = id.shortname
        Region.id = id.shortname
        Points.id = id.shortname
        playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`
        teamLink.textContent = getPlayerDetails(event[id.shortname][i], players)[0]
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
function deployRegMatchups(event){
  for (let i = 0; i < 8; i += 2){
    const tableBody = document.getElementById('matchups');
    const newRow = document.createElement('tr');
    const team1 = document.createElement('td');
    const vs = document.createElement('td');
    const team2 = document.createElement('td');

    team1.id = getMemberDetails(event[i])[1]
    team1.textContent = getMemberDetails(event[i])[0]
    vs.textContent = 'vs'
    team2.id = getMemberDetails(event[i+1])[1]
    team2.textContent = getMemberDetails(event[i+1])[0]
            
    newRow.appendChild(team1);
    newRow.appendChild(vs);
    newRow.appendChild(team2);
    
    tableBody.appendChild(newRow);
  }
}
function deployRegPlacements(event, eventNumber){
  regions.forEach((id) => {
    for (let i = 0; i < event[id].length; i ++){
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
  for (let i = 0; i < event['Major'].length; i ++){
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
function deployMajPlacements(event, eventNumber){
  for (let i = 0; i < event['Major'].length; i ++){
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

function deployChamp(event, event2){
  members.forEach((id)=>{
    const tableBody = document.getElementById('championshipScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const playinCell = document.createElement('td');
    const groupsCell = document.createElement('td');
    const playoffCell = document.createElement('td');
    const totalCell = document.createElement('td');
    
    teamName.id = id.shortname
    playinCell.id = id.shortname
    groupsCell.id = id.shortname
    playoffCell.id = id.shortname
    totalCell.id = id.shortname
    teamName.textContent = id.name
    playinCell.textContent = event[id.shortname][0]
    groupsCell.textContent = event[id.shortname][1]
    playoffCell.textContent = event[id.shortname][3]
    totalCell.textContent = event2[id.shortname][2]
    
    newRow.appendChild(teamName);
    newRow.appendChild(playinCell);
    newRow.appendChild(groupsCell);
    newRow.appendChild(playoffCell);
    newRow.appendChild(totalCell);
    
    tableBody.appendChild(newRow);
  })
}
function deployChampPlacements(event){
  for (let i = 0; i < event['Champ'].length; i += 2){
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