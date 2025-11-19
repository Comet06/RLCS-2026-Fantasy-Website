import { path, deployLinks, menu, regions, determineTotalScores } from "./main.js";
import { deployTops } from "./stats.js";
import { year, members, teams, EventPoints, Regional1, Regional2, Regional3, Regional4, Regional5, Regional6, Regional1Matchups, Regional2Matchups, 
  Regional3Matchups, Regional4Matchups, Regional5Matchups, Regional6Matchups, Rounds, Sums, KickoffMatchups, Major1Matchups, Major2Matchups, ChampionshipMatchups} from "./current-fantasy-members.js";
import { Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements, kickoffLANPlacements, Major1Placements, Major2Placements, ChampionshipPlacements } from "./placements.js";

// {player: 'TBD', gp: 0, wins: 0, score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
export let regional1Players = []
let kickoffLANPlayers = []
export let regional2Players = []
export let regional3Players = []
let major1Players = []
export let regional4Players = []
export let regional5Players = []
export let regional6Players = []
let major2Players = []
let championshipPlayers = []
const regionalTable = `
<tr>
  <th>Team Name</th><th>Player</th><th>Points</th><th>Total</th>
</tr>
`
const kickofftable = `
<tr>
  <th>Team</th><th>Total</th>
</tr>
`
const majortable = `
<tr>
  <th>Team</th><th>Group Stage</th><th>Playoffs</th><th>Total</th>
</tr>
`
const champtable = `
<tr>
  <th>Championship</th><th>Play-in</th><th>Groups</th><th>Playoffs</th><th>Total</th>
</tr>
`

window.addEventListener('load', function() {
  deployLinks()
  menu()
  document.getElementById('year').innerHTML = `RLCS ${year}`
  if (window.location.pathname === `${path}/event.html`) {
    const urlParams = new URLSearchParams(window.location.search);
    const evt = urlParams.get('name');
    console.log(`${evt} page has loaded!`);
    document.getElementById('event').innerHTML = `${evt}`
    document.getElementById('titlePage').innerHTML = `${evt}`
    determineTotalScores()
    if(evt === 'Regional 1'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional1Placements, 1)
      deployReg(Regional1, Sums, 1, regional1Players)
      deployMatchups(Regional1Matchups)
      deployTops(regional1Players)
    } else if(evt === 'Regional 2'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional2Placements, 1)
      deployReg(Regional2, Sums, 2, regional2Players)
      deployMatchups(Regional2Matchups)
      deployTops(regional2Players)
    } else if(evt === 'Regional 3'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional3Placements, 1)
      deployReg(Regional3, Sums, 3, regional3Players)
      deployMatchups(Regional3Matchups)
      deployTops(regional3Players)
    } else if(evt === 'Regional 4'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional4Placements, 2)
      deployReg(Regional4, Sums, 4, regional4Players)
      deployMatchups(Regional4Matchups)
      deployTops(regional4Players)
    } else if(evt === 'Regional 5'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional5Placements, 2)
      deployReg(Regional5, Sums, 5, regional5Players)
      deployMatchups(Regional5Matchups)
      deployTops(regional5Players)
    } else if(evt === 'Regional 6'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional6Placements, 2)
      deployReg(Regional6, Sums, 6, regional6Players)
      deployMatchups(Regional6Matchups)
      deployTops(regional6Players)
    } else if(evt === 'Major 1'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x3 Multiplier)'
      deployMaj(Rounds, 1, 'major')
      deployMajPlacements(Major1Placements, 1, EventPoints['Major1'].length)
      deployTops(major1Players)
      deployMatchups(Major1Matchups)
    } else if(evt === 'Major 2'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x3 Multiplier)'
      deployMaj(Rounds, 4, 'major')
      deployMajPlacements(Major2Placements, 2, EventPoints['Major1'].length)
      deployTops(major2Players)
      deployMatchups(Major2Matchups)
    } else if(evt === 'Kickoff LAN'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x2 Multiplier)'
      deployMaj(Rounds, 0, 'kickoff')
      deployMajPlacements(kickoffLANPlacements, 0, EventPoints[`Kickoff`].length)
      deployTops(kickoffLANPlayers)
      deployMatchups(KickoffMatchups)
    } else if(evt === 'Championship') {
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x5 Multiplier)'
      deployMaj(Rounds, 0, 'champ')
      deployTops(championshipPlayers)
      deployMatchups(ChampionshipMatchups)
      deployMajPlacements(ChampionshipPlacements, 3, EventPoints['Champ'].length)
    }
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
export function getTeamDetails(searchTerm){
  const team = teams.find(t => t.team === searchTerm);

  if (!team) {
    return []; // Or handle the case where no team is found
  }

  const details = [
    team.region || 'N/A',
    team.split1Pts,
    team.split2Pts,
    team.totalSeasonPts,
    team.team
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
export function getPlayerScore(searchTerm, eventName){
  const player = eventName.find(p => p.player === searchTerm);
  if (!player) {
    return 0;
  }
  let score = 0
  if(player.gp > 0){
    score = Math.round(((player.score/100) + player.goals + player.assists + player.saves + player.shots ) * (player.wins/player.gp));
  }
  return score;
}

function deployReg(event, event2, eventNumber, playersArray){
  document.getElementById('ScoreCard').innerHTML = regionalTable
  members.forEach((id) =>{
    for (let i = 0; i < event[id.shortname].length; i++){
      if (i === 0){
        const tableBody = document.getElementById('ScoreCard');
        const newRow = document.createElement('tr');
        const memberName = document.createElement('td');
        const Player = document.createElement('td');
        const memberLink = document.createElement('a');
        const playerLink = document.createElement('a');
        const Points = document.createElement('td');
        const Total = document.createElement('td');

        memberName.id = id.shortname
        Player.id = id.shortname
        Points.id = id.shortname
        Total.id = id.shortname
        memberName.rowSpan = event[id.shortname].length
        Total.rowSpan = event[id.shortname].length
        
        memberLink.textContent = id.name
        memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
        playerLink.textContent = event[id.shortname][i]
        playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`

        Points.textContent = getPlayerScore(event[id.shortname][i], playersArray)
        Total.textContent = event2[id.shortname][eventNumber-1]
        
        memberName.appendChild(memberLink)
        Player.appendChild(playerLink)
        
        
        newRow.appendChild(memberName);
        newRow.appendChild(Player);
        newRow.appendChild(Points);
        newRow.appendChild(Total);
        
        tableBody.appendChild(newRow);

      } else {
        const tableBody = document.getElementById('ScoreCard');
        const newRow = document.createElement('tr');
        const Player = document.createElement('td');
        const playerLink = document.createElement('a');
        const Points = document.createElement('td');
        if(i === (event[id.shortname].length)-1){
          playerLink.textContent = `${event[id.shortname][i]} (sub)`
        } else {
          playerLink.textContent = event[id.shortname][i]
        }
        Player.id = id.shortname
        Points.id = id.shortname
        playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`
        Points.textContent = getPlayerScore(event[id.shortname][i], playersArray)
        
        Player.appendChild(playerLink)
        
        
        newRow.appendChild(Player);
        newRow.appendChild(Points);
        
        tableBody.appendChild(newRow);
      }
    }
  })
}
function deployMaj(event, start, type){
  if(type === 'major'){
    document.getElementById('ScoreCard').innerHTML = majortable
  } else if(type === 'champ'){
    document.getElementById('ScoreCard').innerHTML = champtable
  } else {
    document.getElementById('ScoreCard').innerHTML = kickofftable
  }
  members.forEach((id) =>{
    const tableBody = document.getElementById('ScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const memberLink = document.createElement('a');

    const playinCell = document.createElement('td');
    const groupsCell = document.createElement('td');
    const playoffsCell = document.createElement('td');
    const totalCell = document.createElement('td');


    
    teamName.id = id.shortname
    playinCell.id = id.shortname
    groupsCell.id = id.shortname
    playoffsCell.id = id.shortname
    totalCell.id = id.shortname
    
    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    teamName.appendChild(memberLink)
    newRow.appendChild(teamName);

    if(type === 'major'){
      groupsCell.textContent = event[id.shortname][start]
      playoffsCell.textContent = event[id.shortname][start+1]
      totalCell.textContent = event[id.shortname][start+2]
      newRow.appendChild(groupsCell);
      newRow.appendChild(playoffsCell);
    } else if(type === 'champ'){
      playinCell.textContent = event[id.shortname][7]
      groupsCell.textContent = event[id.shortname][8]
      playoffsCell.textContent = event[id.shortname][9]
      totalCell.textContent = event[id.shortname][10]
      newRow.appendChild(playinCell);
      newRow.appendChild(groupsCell);
      newRow.appendChild(playoffsCell);
    } else {
      totalCell.textContent = event[id.shortname][0]
    }
    newRow.appendChild(totalCell);

    tableBody.appendChild(newRow);
  })
}

function deployMatchups(event){
  for (let i = 0; i < 10; i += 2){
    const tableBody = document.getElementById('matchups');
    const newRow = document.createElement('tr');
    const team1Link = document.createElement('a');
    const team2Link = document.createElement('a');
    const team1 = document.createElement('td');
    const vs = document.createElement('td');
    const team2 = document.createElement('td');
    if(event[i] != 'TBD'){
      team1.id = getMemberDetails(event[i])[1]
      team1Link.textContent = getMemberDetails(event[i])[0]
      team1Link.href = `${path}/profile.html?name=${encodeURIComponent(getMemberDetails(event[i])[0])}`
    } else {
      team1Link.textContent = event[i]
    }
    vs.textContent = 'vs'
    if(event[i+1] != 'TBD' && event[i+1] != 'Bye'){
      team2.id = getMemberDetails(event[i+1])[1]
      team2Link.textContent = getMemberDetails(event[i+1])[0]
      team2Link.href = `${path}/profile.html?name=${encodeURIComponent(getMemberDetails(event[i+1])[0])}`
    } else {
      team2Link.textContent = event[i+1]
    }
            
    team1.appendChild(team1Link)
    team2.appendChild(team2Link)
    newRow.appendChild(team1);
    newRow.appendChild(vs);
    newRow.appendChild(team2);
    
    tableBody.appendChild(newRow);
  }
}

function deployRegPlacements(event, eventNumber){
  const placements = `
    <table class="section" id="eu">
      <tbody>
        <tr><th colspan="2">EU</th></tr>
      </tbody>
    </table>
    <table class="section" id="na">
      <tbody>
        <tr><th colspan="2">NA</th></tr>
      </tbody>
    </table>
    <table class="section" id="oce">
      <tbody>
        <tr><th colspan="2">OCE</th></tr>
      </tbody>
    </table>
    <table class="section" id="sam">
      <tbody>
        <tr><th colspan="2">SAM</th></tr>
      </tbody>
    </table>
    <table class="section" id="mena">
      <tbody>
        <tr><th colspan="2">MENA</th></tr>
      </tbody>
    </table>
    <table class="section" id="apac">
      <tbody>
        <tr><th colspan="2">APAC</th></tr>
      </tbody>
    </table>
    <table class="section" id="ssa">
      <tbody>
        <tr><th colspan="2">SSA</th></tr>
      </tbody>
    </table>
  `
  document.getElementById('placements').innerHTML = placements
  regions.forEach((id) => {
    for (let i = 0; i < event[id.reg].length; i ++){
      const tableBody = document.getElementById(`${id.reg}`);
      const newRow = document.createElement('tr');
      const teamLink = document.createElement('a');
      const team = document.createElement('td');
      const pts = document.createElement('td');
      if(event[id.reg][i].length > 0){
        teamLink.textContent = event[id.reg][i]
        teamLink.id = (getTeamDetails(event[id.reg][i])[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.reg][i])}`
        team.appendChild(teamLink)
      } else {
        team.textContent = "TBD"
      }

      pts.textContent = EventPoints[`Regional${eventNumber}`][i]
      pts.id = 'points'

      newRow.appendChild(team);
      newRow.appendChild(pts);
      
      tableBody.appendChild(newRow);
    }
  })
}
function deployMajPlacements(event, eventNumber, length){
  const placements = `
    <table class="section" id="majplacements">
      <tbody>
      </tbody>
    </table>
  `
  document.getElementById('placements').innerHTML = placements
  for (let i = 0; i < length; i ++){
    const tableBody = document.getElementById('majplacements');
    const newRow = document.createElement('tr');
    const teamLink = document.createElement('a');
    const team = document.createElement('td');
    const pts = document.createElement('td');
    teamLink.textContent = event['Major'][i]
    if (event['Major'][i] != 'TBD'){
      teamLink.id = (getTeamDetails(event['Major'][i])[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Major'][i])}`
    }
    team.appendChild(teamLink)

    if(eventNumber === 0){
      pts.textContent = EventPoints[`Kickoff`][i]
    } else if(eventNumber === 1 || eventNumber === 2){
      pts.textContent = EventPoints[`Major${eventNumber}`][i]
    } else if(eventNumber === 3){
      console.log('hello')
      pts.textContent = EventPoints[`Champ`][i]
    }
    pts.id = 'points'


    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  }
}