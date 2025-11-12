import { path, deployLinks, menu, regions, getTeamDetails, determineTotalScores } from "./main.js";
import { deployTops } from "./stats.js";
import { year, members, players, EventPoints, Regional1, Regional2, Regional3, Regional4, Regional5, Regional6, 
  Regional1Matchups, Regional2Matchups, Regional3Matchups, Regional4Matchups, Regional5Matchups, Regional6Matchups, 
  Rounds, Sums} from "./current-fantasy-members.js";
import { Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements, kickoffLANPlacements, Major1Placements, Major2Placements,ChampionshipPlacements } from "./rankings.js";

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
  deployLinks()
  menu()
  document.getElementById('year').innerHTML = `RLCS ${year}`
  const urlParams = new URLSearchParams(window.location.search);
  const evt = urlParams.get('name');
  console.log(`${evt} page has loaded!`);
  if (window.location.pathname === `${path}/regional.html`) {
    determineTotalScores()
    document.getElementById('event').innerHTML = `${evt}`
    if(evt === 'Regional 1'){
      deployReg(Regional1, Sums, 1)
      deployRegPlacements(Regional1Placements, 1)
      deployTops(regional1Players)
      deployRegMatchups(Regional1Matchups)
    } else if(evt === 'Regional 2'){
      deployReg(Regional2, Sums, 2)
      deployRegPlacements(Regional2Placements, 1)
      deployTops(regional2Players)
      deployRegMatchups(Regional2Matchups)
    } else if(evt === 'Regional 3'){
      deployReg(Regional3, Sums, 3)
      deployRegPlacements(Regional3Placements, 1)
      deployTops(regional3Players)
      deployRegMatchups(Regional3Matchups)
    } else if(evt === 'Regional 4'){
      deployReg(Regional4, Sums, 4)
      deployRegPlacements(Regional4Placements, 2)
      deployTops(regional4Players)
      deployRegMatchups(Regional4Matchups)
    } else if(evt === 'Regional 5'){
      deployReg(Regional5, Sums, 5)
      deployRegPlacements(Regional5Placements, 2)
      deployTops(regional5Players)
      deployRegMatchups(Regional5Matchups)
    } else if(evt === 'Regional 6'){
      deployReg(Regional6, Sums, 6)
      deployRegPlacements(Regional6Placements, 2)
      deployTops(regional6Players)
      deployRegMatchups(Regional6Matchups)
    }
  } else if (window.location.pathname === `${path}/major.html`) {
    determineTotalScores()
    document.getElementById('event').innerHTML = `${evt}`
    if(evt === 'Major 1'){
      deployMaj(Rounds, 1)
      deployMajPlacements(Major1Placements, 1)
      deployTops(major1Players)
    } else if(evt === 'Major 2'){
      deployMaj(Rounds, 4)
      deployMajPlacements(Major2Placements, 2)
      deployTops(major2Players)
    }
  } else if (window.location.pathname === `${path}/kickoff_lan.html`) {
    determineTotalScores()
    document.getElementById('event').innerHTML = `${evt}`
    if(evt === 'Kickoff LAN'){
      deploykickoff(Rounds, 0)
      deploykickoffPlacements(kickoffLANPlacements, 0)
      deployTops(kickoffLANPlayers)
    }
  } else if (window.location.pathname === `${path}/championship.html`) {
    determineTotalScores()
    deployChamp(Rounds)
    deployChampPlacements(ChampionshipPlacements)
    deployTops(championshipPlayers)
  }
});

export function getPlayerDetails(searchTerm, playersArray){
  const player = playersArray.find(p => p.player === searchTerm);
  if (!player) {
    return [];
  }
  const details = [
    player.team || 'N/A', //0
    player.name || 'N/A', //1
    player.shortname || 'N/A', //2
    player.team.toLowerCase().replaceAll(' ', '_').replaceAll('.', '') || 'N/A', //3
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
        const memberLink = document.createElement('a');
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
        
        memberLink.textContent = id.name
        memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
        playerLink.textContent = event[id.shortname][i]
        playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`
        teamLink.textContent = getPlayerDetails(event[id.shortname][i], players)[0]
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(teamLink.textContent)}`
        
        Region.textContent = getTeamDetails(teamLink.textContent)[0]
        
        Points.textContent = event[id.shortname][i+1]
        Total.textContent = event2[id.shortname][eventNumber-1] //EventSums[0]
        
        teamName.appendChild(memberLink)
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
        const memberLink = document.createElement('a');
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
    const team1Link = document.createElement('a');
    const team2Link = document.createElement('a');
    const team1 = document.createElement('td');
    const vs = document.createElement('td');
    const team2 = document.createElement('td');

    team1.id = getMemberDetails(event[i])[1]
    team1Link.textContent = getMemberDetails(event[i])[0]
    team1Link.href = `${path}/profile.html?name=${encodeURIComponent(getMemberDetails(event[i])[0])}`
    vs.textContent = 'vs'
    team2.id = getMemberDetails(event[i+1])[1]
    team2Link.textContent = getMemberDetails(event[i+1])[0]
    team2Link.href = `${path}/profile.html?name=${encodeURIComponent(getMemberDetails(event[i+1])[0])}`
            
    team1.appendChild(team1Link)
    team2.appendChild(team2Link)
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
    const memberLink = document.createElement('a');
    const total = document.createElement('td');
    
    teamName.id = id.shortname
    total.id = id.shortname
    
    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    total.textContent = event[id.shortname][0]
    
    teamName.appendChild(memberLink)
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

function deployMaj(event, start){
  members.forEach((id) =>{
    const tableBody = document.getElementById('majorScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const memberLink = document.createElement('a');
    const swissStage = document.createElement('td');
    const playoffs = document.createElement('td');
    const total = document.createElement('td');
    
    teamName.id = id.shortname
    swissStage.id = id.shortname
    playoffs.id = id.shortname
    total.id = id.shortname
    
    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    swissStage.textContent = event[id.shortname][start]
    playoffs.textContent = event[id.shortname][start+1]
    total.textContent = event[id.shortname][start+2]
    
    teamName.appendChild(memberLink)
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

function deployChamp(event){
  members.forEach((id)=>{
    const tableBody = document.getElementById('championshipScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const memberLink = document.createElement('a');
    const playinCell = document.createElement('td');
    const groupsCell = document.createElement('td');
    const playoffCell = document.createElement('td');
    const totalCell = document.createElement('td');
    
    teamName.id = id.shortname
    playinCell.id = id.shortname
    groupsCell.id = id.shortname
    playoffCell.id = id.shortname
    totalCell.id = id.shortname

    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    playinCell.textContent = event[id.shortname][7]
    groupsCell.textContent = event[id.shortname][8]
    playoffCell.textContent = event[id.shortname][9]
    totalCell.textContent = event[id.shortname][10]
    
    teamName.appendChild(memberLink)
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