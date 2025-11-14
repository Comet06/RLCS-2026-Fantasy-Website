import { path, deployLinks, menu, regions } from "./main.js";
import { getTeamDetails } from "./events.js";
import { year, players, teams, EventPoints, members, Regional1 } from "./current-fantasy-members.js";
import { Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements, Major1Placements, Major2Placements } from "./placements.js";
import { playersSeason1, playersSeason2, playersSeason3, playersSeason4, playersSeason5, playersSeason6, playersSeason7, playersSeason8,
  playersSeason9, playersSeasonX, playersSeason21, playersSeason22, playersSeason24, playersSeason25 } from "./Previous-Seasons.js";

export const eventName = Regional1
// Stats Page
const weight = [
  {region: "EU", weight: 1},
  {region: "NA", weight: 1},
  {region: "OCE", weight: .8},
  {region: "SAM", weight: .9},
  {region: "MENA", weight: .9},
  {region: "APAC", weight: .7},
  {region: "SSA", weight: .6},
]
export let Tops = { //Do not edit
    'score' :   [],
    'goals' :   [],
    'assists' : [],
    'saves' :   [],
    'shots' :   [],
}
const playerTableType = `
<p id="retired">Retired</p><p id="rookie">Rookie</p><p id="inactive">Inactive</p><p id="sub">Sub</p><p id="coach">Coach</p><br>
<label>Sort By:</label>
<select id="playerStats">
    <option value="name">Name</option>
    <option value="rating">Rating</option>
    <option value="team">Team</option>
    <option value="winPerc">Win Percentage</option>
    <option value="score">Score</option>
    <option value="goals">Goals</option>
    <option value="assists">Assists</option>
    <option value="saves">Saves</option>
    <option value="shots">Shots</option>
</select>
`
const teamTableType = `
<label>Sort By:</label>
<select id="teamStats">
    <option value="name">Team</option>
    <option value="region">Region</option>
    <option value="rating">Rating</option>
    <option value="split1">Split 1 Points</option>
    <option value="split2">Split 2 Points</option>
    <option value="seasonTotal">Total Season Points</option>
    <option value="winPerc">Win Percentage</option>
    <option value="score">Score</option>
    <option value="goals">Goals</option>
    <option value="assists">Assists</option>
    <option value="saves">Saves</option>
    <option value="shots">Shots</option>
</select>
`
const legacyPlayerTableHeader = `
<tr>
  <th colspan="3" id="name">Player Information</th><th colspan="5" id="perGame">Player Stats: Per Game</th>
</tr>
<tr>
  <th>Player Name</th><th>Rating</th><th>Win %</th><th>Score</th><th>Goals</th><th>Assists</th><th>Saves</th><th>Shots</th>
</tr>
`
// <th>#</th><th>Player Name</th><th>Available</th><th>Rating</th><th>Win %</th><th>Score</th><th>Goals</th><th>Assists</th><th>Saves</th><th>Shots</th><th>Team</th><th>Region</th>
const playerTableHeader = `
<tr>
  <th colspan="3" id="name">Player Information</th><th colspan="2" id="perGame">Player Stats: Per Game</th><th colspan="1" id="teamStats">Team Stats</th>
</tr>
<tr>
  <th>#</th><th>Player Name</th><th>Available</th><th>Rating</th><th>Win %</th><th>Team</th>
</tr>
`
// <th>Team Name</th><th>Region</th><th>Split 1</th><th>Split 2</th><th>Season Total</th><th># of players</th><th>Rating</th><th>Win %</th><th>Score</th><th>Goals</th><th>Assists</th><th>Saves</th><th>Shots</th>
const teamTableHeader = `
<tr>
  <th colspan="2" id="name">Team</th><th colspan="3" id="standings">Season Standings</th><th colspan="3" id="teamStats">Team Stats</th>
</tr>
<tr>
  <th>Team Name</th><th>Region</th><th>Split 1</th><th>Split 2</th><th>Season Total</th><th>Rating</th><th>Win %</th>
</tr>
`
const weightedParagraph = `
<ul id="hide_list">
  <li><strong>Region Weighting</strong></li>
  <li>${weight[0].region} multiplier: ${weight[0].weight}</li>
  <li>${weight[1].region} multiplier: ${weight[1].weight}</li>
  <li>${weight[2].region} multiplier: ${weight[2].weight}</li>
  <li>${weight[3].region} multiplier: ${weight[3].weight}</li>
  <li>${weight[4].region} multiplier: ${weight[4].weight}</li>
  <li>${weight[5].region} multiplier: ${weight[5].weight}</li>
  <li>${weight[6].region} multiplier: ${weight[6].weight}</li>
  </ul>
  `

window.addEventListener('load', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const evt = urlParams.get('name');
  deployLinks()
  menu()
  document.getElementById('year').innerHTML = `RLCS ${year}`
  if (window.location.pathname === `${path}/stats.html`) {
    // document.getElementById('last_updated').innerHTML = `UPDATED 11/7/25 Currently Showing 2025 Data`
    if(evt === 'player'){
      document.getElementById('table_type').innerHTML = playerTableType
      document.getElementById('title').innerHTML = 'Player Statistics'

      const playerSort = document.getElementById('playerStats')
      playerSort.addEventListener('change', handleDropdownPlayer);

      populatePlayersTable(players)
      console.log('Player Stats page has loaded!');
    } else if(evt === 'team'){
      document.getElementById('weighted_multiplier').innerHTML = weightedParagraph
      document.getElementById('table_type').innerHTML = teamTableType
      document.getElementById('title').innerHTML = 'Team Statistics'

      const teamSort = document.getElementById('teamStats')
      teamSort.addEventListener('change', handleDropdownTeam);

      teams.sort((a, b) => b.winPerc - a.winPerc)
      determineSeasonPoints()
      populateTeamsTable(teams)
      console.log('Team Stats page has loaded!');
    }
  } else if(window.location.pathname === `${path}/stats_legacy.html`){
    document.getElementById('page_title').innerHTML = `${evt}`
    document.getElementById('title').innerHTML = 'Player Statistics'
    if(evt === 'Season 1'){
      playersSeason1.sort((a, b) => b.gp - a.gp)
      playersSeason1.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason1)
    } else if(evt === 'Season 2'){
      playersSeason2.sort((a, b) => b.gp - a.gp)
      playersSeason2.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason2)
    } else if(evt === 'Season 3'){
      playersSeason3.sort((a, b) => b.gp - a.gp)
      playersSeason3.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason3)
    } else if(evt === 'Season 4'){
      playersSeason4.sort((a, b) => b.gp - a.gp)
      playersSeason4.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason4)
    } else if(evt === 'Season 5'){
      playersSeason5.sort((a, b) => b.gp - a.gp)
      playersSeason5.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason5)
    } else if(evt === 'Season 6'){
      playersSeason6.sort((a, b) => b.gp - a.gp)
      playersSeason6.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason6)
    } else if(evt === 'Season 7'){
      playersSeason7.sort((a, b) => b.gp - a.gp)
      playersSeason7.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason7)
    } else if(evt === 'Season 8'){
      playersSeason8.sort((a, b) => b.gp - a.gp)
      playersSeason8.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason8)
    } else if(evt === 'Season 9'){
      playersSeason9.sort((a, b) => b.gp - a.gp)
      playersSeason9.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason9)
    } else if(evt === 'Season X'){
      playersSeasonX.sort((a, b) => b.gp - a.gp)
      playersSeasonX.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeasonX)
    } else if(evt === 'Season 21-22'){
      playersSeason21.sort((a, b) => b.gp - a.gp)
      playersSeason21.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason21)
    } else if(evt === 'Season 22-23'){
      playersSeason22.sort((a, b) => b.gp - a.gp)
      playersSeason22.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason22)
    } else if(evt === 'Season 24'){
      playersSeason24.sort((a, b) => b.gp - a.gp)
      playersSeason24.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason24)
    } else if(evt === 'Season 25'){
      playersSeason25.sort((a, b) => b.gp - a.gp)
      playersSeason25.sort((a, b) => b.wins - a.wins)
      populateLegacyPlayersTable(playersSeason25)
    }
  }
});


export function deployTops(array){
  deployTopPerformers(array, 'TopScores', 'score')
  deployTopPerformers(array, 'TopGoals', 'goals')
  deployTopPerformers(array, 'TopAssists', 'assists')
  deployTopPerformers(array, 'TopSaves', 'saves')
  deployTopPerformers(array, 'TopShots', 'shots')
}
function deployTopPerformers(PlayersArray, where, type){
  if(PlayersArray.length > 1){
    determineTops(PlayersArray)
  }
  for(let i = 0; i < 20; i += 2){
    const tableBody = document.getElementById(where);
    const newRow = document.createElement('tr');
    const player = document.createElement('td');
    const stat = document.createElement('td');
    const playerLink1 = document.createElement('a');
    if(PlayersArray.length > 0){
      playerLink1.textContent = Tops[type][i]
      stat.textContent = Tops[type][i+1]
    } else {
      playerLink1.textContent = 'TBD'
      stat.textContent = 0
    }
    
    if(Tops[type][i] != 'TBD' && playerLink1.textContent != 'TBD'){
      playerLink1.href = `${path}/profile.html?name=${encodeURIComponent(Tops[type][i])}`
    }
    
    player.appendChild(playerLink1)
    
    
    newRow.appendChild(player)
    newRow.appendChild(stat)
    tableBody.appendChild(newRow);
  }
}
export function determineSeasonPoints() {
  teams.forEach((id) => {
    regions.forEach((reg) => {
        const regional1Teams = Regional1Placements[reg];
        const team1Index = regional1Teams.indexOf(id.team);
        if (team1Index !== -1) {
          id.split1Pts += EventPoints['Regional1'][team1Index];
        }
        const regional2Teams = Regional2Placements[reg];
        const team2Index = regional2Teams.indexOf(id.team);
        if (team2Index !== -1) {
          id.split1Pts += EventPoints['Regional1'][team2Index];
        }
        const regional3Teams = Regional3Placements[reg];
        const team3Index = regional3Teams.indexOf(id.team);
        if (team3Index !== -1) {
          id.split1Pts += EventPoints['Regional1'][team3Index];
        }
        const regional4Teams = Regional4Placements[reg];
        const team4Index = regional4Teams.indexOf(id.team);
        if (team4Index !== -1) {
          id.split2Pts += EventPoints['Regional2'][team4Index];
        }
        const regional5Teams = Regional5Placements[reg];
        const team5Index = regional5Teams.indexOf(id.team);
        if (team5Index !== -1) {
          id.split2Pts += EventPoints['Regional2'][team5Index];
        }
        const regional6Teams = Regional6Placements[reg];
        const team6Index = regional6Teams.indexOf(id.team);
        if (team6Index !== -1) {
          id.split2Pts += EventPoints['Regional2'][team6Index];
        }
    });
    const major1Teams = Major1Placements['Major'];
    const team7Index = major1Teams.indexOf(id.team);
    if (team7Index !== -1) {
      id.split1Pts += EventPoints['Major1'][team7Index];
    }
    const major2Teams = Major2Placements['Major'];
    const team8Index = major2Teams.indexOf(id.team);
    if (team8Index !== -1) {
      id.split2Pts += EventPoints['Major2'][team8Index];
    }
    id.totalSeasonPts += id.split1Pts + id.split2Pts;
  });
}
export function determineTeamsRanks(rating){
  teams.sort((a,b) => b.rating - a.rating)
  let high = teams[0].rating
  if(rating > (high/6*5)){
    return 'S'
  } else if(rating > (high/6*4)){
    return 'A'
  } else if(rating > (high/6*3)){
    return 'B'
  } else if(rating > (high/6*2)){
    return 'C'
  } else if(rating > (high/6)){
    return 'D'
  } else {
    return "F"
  }
}
function determineTops(PlayersArray){
  PlayersArray.sort((a, b)=> b.score - a.score)
  for(let i = 0; i < 20; i += 2){
    Tops['score'][i] = PlayersArray[0+i/2].player
    Tops['score'][i+1] = PlayersArray[0+i/2].score
  }
  PlayersArray.sort((a, b)=> b.goals - a.goals)
  for(let i = 0; i < 20; i += 2){
    Tops['goals'][i] = PlayersArray[0+i/2].player
    Tops['goals'][i+1] = PlayersArray[0+i/2].goals
  }
  PlayersArray.sort((a, b)=> b.assists - a.assists)
  for(let i = 0; i < 20; i += 2){
    Tops['assists'][i] = PlayersArray[0+i/2].player
    Tops['assists'][i+1] = PlayersArray[0+i/2].assists
  }
  PlayersArray.sort((a, b)=> b.saves - a.saves)
  for(let i = 0; i < 20; i += 2){
    Tops['saves'][i] = PlayersArray[0+i/2].player
    Tops['saves'][i+1] = PlayersArray[0+i/2].saves
  }
  PlayersArray.sort((a, b)=> b.shots - a.shots)
  for(let i = 0; i < 20; i += 2){
    Tops['shots'][i] = PlayersArray[0+i/2].player
    Tops['shots'][i+1] = PlayersArray[0+i/2].shots
  }
}
function handleDropdownPlayer(event){
  console.log('changing sort to ' + event.target.value)
  if(event.target.value === 'name'){
    players.sort((a, b) => a.player.localeCompare(b.player))
    populatePlayersTable(players)
  } else if(event.target.value === 'rating'){
    players.sort((a, b) => b.rating - a.rating)
    populatePlayersTable(players)
  } else if(event.target.value === 'winPerc'){
    players.sort((a, b) => b.wins/b.gp - a.wins/a.gp)
    populatePlayersTable(players)
  } else if(event.target.value === 'score'){
    players.sort((a, b) => b.score/b.gp - a.score/a.gp)
    populatePlayersTable(players)
  } else if(event.target.value === 'goals'){
    players.sort((a, b) => b.goals/b.gp - a.goals/a.gp)
    populatePlayersTable(players)
  } else if(event.target.value === 'assists'){
    players.sort((a, b) => b.assists/b.gp - a.assists/a.gp)
    populatePlayersTable(players)
  } else if(event.target.value === 'saves'){
    players.sort((a, b) => b.saves/b.gp - a.saves/a.gp)
    populatePlayersTable(players)
  } else if(event.target.value === 'shots'){
    players.sort((a, b) => b.shots/b.gp - a.shots/a.gp)
    populatePlayersTable(players)
  } else if(event.target.value === 'team'){
    players.sort((a, b) => a.team.localeCompare(b.team))
    populatePlayersTable(players)
  }

}
function handleDropdownTeam(event){
  console.log('changing sort to ' + event.target.value)
  if(event.target.value === 'name'){
    teams.sort((a, b) => a.team.localeCompare(b.team))
    populateTeamsTable(teams)
  } else if(event.target.value === 'region'){
    teams.sort((a, b) => a.region.localeCompare(b.region))
    populateTeamsTable(teams)
  } else if(event.target.value === 'split1'){
    teams.sort((a, b) => b.split1Pts - a.split1Pts)
    populateTeamsTable(teams)
  } else if(event.target.value === 'split2'){
    teams.sort((a, b) => b.split2Pts - a.split2Pts)
    populateTeamsTable(teams)
  } else if(event.target.value === 'seasonTotal'){
    teams.sort((a, b) => b.totalSeasonPts - a.totalSeasonPts)
    populateTeamsTable(teams)
  } else if(event.target.value === 'rating'){
    teams.sort((a, b) => b.rating() - a.rating())
    populateTeamsTable(teams)
  } else if(event.target.value === 'winPerc'){
    teams.sort((a, b) => b.wins/b.gp - a.wins/a.gp)
    populateTeamsTable(teams)
  } else if(event.target.value === 'score'){
    teams.sort((a, b) => b.score/b.gp - a.score/a.gp)
    populateTeamsTable(teams)
  } else if(event.target.value === 'goals'){
    teams.sort((a, b) => b.goals/b.gp - a.goals/a.gp)
    populateTeamsTable(teams)
  } else if(event.target.value === 'assists'){
    teams.sort((a, b) => b.assists/b.gp - a.assists/a.gp)
    populateTeamsTable(teams)
  } else if(event.target.value === 'saves'){
    teams.sort((a, b) => b.saves/b.gp - a.saves/a.gp)
    populateTeamsTable(teams)
  } else if(event.target.value === 'shots'){
    teams.sort((a, b) => b.shots/b.gp - a.shots/a.gp)
    populateTeamsTable(teams)
  }
}
function populateLegacyPlayersTable(Players) {
  const tableBody = document.getElementById('data_table');
  tableBody.innerHTML = '';
  tableBody.innerHTML = legacyPlayerTableHeader
  Players.forEach((id) => {
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    const ratingCell = document.createElement('td');
    const winPercCell = document.createElement('td');
    const score = document.createElement('td');
    const goals = document.createElement('td');
    const assists = document.createElement('td');
    const saves = document.createElement('td');
    const shots = document.createElement('td');

    const roleID = id.role.toLowerCase()
    
    nameCell.id = roleID;
    const rank = determineLegacyRanks(Players, id.rating())
    nameCell.textContent = id.player + " (" + rank + ")";
    ratingCell.textContent = id.rating()
    
    newRow.appendChild(nameCell);
    
    if (id.gp > 0){
      newRow.appendChild(ratingCell);
      winPercCell.textContent = (id.wins/id.gp*100).toFixed(2) + "%";
      score.textContent = (id.score/id.gp).toFixed(0)
      goals.textContent = (id.goals/id.gp).toFixed(2)
      assists.textContent = (id.assists/id.gp).toFixed(2)
      saves.textContent = (id.saves/id.gp).toFixed(2)
      shots.textContent = (id.shots/id.gp).toFixed(2)
      newRow.appendChild(winPercCell);
      newRow.appendChild(score);
      newRow.appendChild(goals);
      newRow.appendChild(assists);
      newRow.appendChild(saves);
      newRow.appendChild(shots);
      tableBody.appendChild(newRow);
    }
  });
}
function determineLegacyRanks(Players, rating){
  Players.sort((a,b) => b.rating - a.rating)
  let high = Players[0].rating()
  if(rating > (high/6*5)){
    return 'S'
  } else if(rating > (high/6*4)){
    return 'A'
  } else if(rating > (high/6*3)){
    return 'B'
  } else if(rating > (high/6*2)){
    return 'C'
  } else if(rating > (high/6)){
    return 'D'
  } else {
    return "F"
  }
}
function populatePlayersTable(Players) {
  const tableBody = document.getElementById('data_table');
  tableBody.innerHTML = '';
  tableBody.innerHTML = playerTableHeader
  let i = 1
  Players.forEach((id) => {
    const newRow = document.createElement('tr');

    const num = document.createElement('td');
    const nameCell = document.createElement('td');
    const memberLink = document.createElement('a');
    const availCell = document.createElement('td');
    const ratingCell = document.createElement('td');
    const teamCell = document.createElement('td');
    const winPercCell = document.createElement('td');
    const score = document.createElement('td');
    const goals = document.createElement('td');
    const assists = document.createElement('td');
    const saves = document.createElement('td');
    const shots = document.createElement('td');
    const noStats = document.createElement('td');
    const teamRegion = document.createElement('td');
    

    const nameLink = document.createElement('a');
    const teamLink = document.createElement('a');

    const roleID = id.role.toLowerCase()
    const teamId = (id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","");
    num.textContent = i
    
    nameLink.href = `${path}/profile.html?name=${encodeURIComponent(id.player)}`;
    if (id.team != "F/A" && id.team != "TBD"){
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(id.team)}`;
    }
    

    let drafted = false
    let memberName = ''

    nameCell.id = roleID;
    teamCell.id = teamId;
    const rank = id.rank
    if(id.rating != 0){
      nameLink.textContent = id.player + " (" + rank + ")";
    } else {
      nameLink.textContent = id.player;
    }
    ratingCell.textContent = id.rating
    teamLink.textContent = id.team;
    teamRegion.textContent = getTeamDetails(id.team)[0]
    
    newRow.appendChild(num);
    nameCell.appendChild(nameLink);
    newRow.appendChild(nameCell);

    members.forEach((id2)=>{
      const playerSpot1 = players.find(p => p.player === eventName[id2.shortname][0])
      const playerSpot2 = players.find(p => p.player === eventName[id2.shortname][1])
      const playerSpot3 = players.find(p => p.player === eventName[id2.shortname][2])
      const playerSpot4 = players.find(p => p.player === eventName[id2.shortname][3])
      if(playerSpot1){
        if(playerSpot1.player === id.player){
          drafted = true
          memberName = id2.name
        }
      }
      if(playerSpot2){
        if(playerSpot2.player === id.player){
          drafted = true
          memberName = id2.name
        }
      }
      if(playerSpot3){
        if(playerSpot3.player === id.player){
          drafted = true
          memberName = id2.name
        }
      }
      if(playerSpot4){
        if(playerSpot4.player === id.player){
          drafted = true
          memberName = id2.name
        }
      }
    })
    if(drafted){
      memberLink.textContent = memberName
      memberLink.href = `${path}/profile.html?name=${encodeURIComponent(memberName)}`
      availCell.style = 'color: yellowgreen;'
      availCell.appendChild(memberLink)
    } else {
      if(id.team === 'F/A' || id.role === 'coach' || id.role === 'inactive' || id.role === 'retired' || id.role === 'sub'){
        availCell.textContent = 'No';
        availCell.id = 'no'
      } else {
        availCell.textContent = "Yes";
        availCell.id = 'yes'
      }
    }
    newRow.appendChild(availCell);
    
    if (id.gp < 1){id.gp = 1}
    
    newRow.appendChild(ratingCell);
    winPercCell.textContent = (id.wins/id.gp*100).toFixed(2) + "%";
    score.textContent = (id.score/id.gp).toFixed(0)
    goals.textContent = (id.goals/id.gp).toFixed(2)
    assists.textContent = (id.assists/id.gp).toFixed(2)
    saves.textContent = (id.saves/id.gp).toFixed(2)
    shots.textContent = (id.shots/id.gp).toFixed(2)
    newRow.appendChild(winPercCell);
    // newRow.appendChild(score);
    // newRow.appendChild(goals);
    // newRow.appendChild(assists);
    // newRow.appendChild(saves);
    // newRow.appendChild(shots);

    teamCell.appendChild(teamLink);
    newRow.appendChild(teamCell);
    // newRow.appendChild(teamRegion)

    if(availCell.id != 'no' && i < 101){
      i += 1
      tableBody.appendChild(newRow);
    }
  });
}
function populateTeamsTable(Teams) {
  const tableBody = document.getElementById('data_table');
  tableBody.innerHTML = '';
  tableBody.innerHTML = teamTableHeader
  Teams.forEach((id, index) => {
    const newRow = document.createElement('tr');
    const teamCell = document.createElement('td');
    const teamLink = document.createElement('a');
    const teamId = (id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","");
    const regionID = id.region.toLowerCase();
    const regionCell = document.createElement('td');
    const S1points = document.createElement('td');
    const S2points = document.createElement('td');
    const seasonPoints = document.createElement('td');
    const ratingCell = document.createElement('td');
    const winPercCell = document.createElement('td');
    const numOfPlayersCell = document.createElement('td');
    const score = document.createElement('td');
    const goals = document.createElement('td');
    const assists = document.createElement('td');
    const saves = document.createElement('td');
    const shots = document.createElement('td');
    const noStats = document.createElement('td');
    
    const playersOnTeam = players.filter(p => p.team === id.team);
    let countOfPlayers = 0
    
    newRow.setAttribute('data-player', `player${index + 1}`);
    const rank = determineTeamsRanks(id.rating)
    teamLink.textContent = id.team + " (" + rank + ")";
    teamLink.href = `${path}/profile.html?name=${encodeURIComponent(id.team)}`;
    
    playersOnTeam.forEach((player) => {
      if(player){
        countOfPlayers += 1;
      } else {
      }
    })

    teamCell.appendChild(teamLink);
    teamCell.id = teamId;
    regionCell.textContent = id.region;
    regionCell.id = regionID;

    S1points.textContent = id.split1Pts;
    S2points.textContent = id.split2Pts;
    seasonPoints.textContent = id.totalSeasonPts;
    numOfPlayersCell.textContent = countOfPlayers;
    
    newRow.appendChild(teamCell);
    newRow.appendChild(regionCell);
    newRow.appendChild(S1points);
    newRow.appendChild(S2points);
    newRow.appendChild(seasonPoints);
    // newRow.appendChild(numOfPlayersCell);
    let regionWeight = .5
    weight.forEach((amt)=>{
      if(amt.region === id.region){
        regionWeight = amt.weight
      }
    })
    if (id.gp > 0){
      ratingCell.textContent = id.rating
      winPercCell.textContent = (id.wins/id.gp*100).toFixed(2);
      score.textContent = (id.score/id.gp).toFixed(0)
      goals.textContent = (id.goals/id.gp).toFixed(2)
      assists.textContent = (id.assists/id.gp).toFixed(2)
      saves.textContent = (id.saves/id.gp).toFixed(2)
      shots.textContent = (id.shots/id.gp).toFixed(2)
      newRow.appendChild(ratingCell);
      newRow.appendChild(winPercCell);
      newRow.appendChild(score);
      newRow.appendChild(goals);
      newRow.appendChild(assists);
      newRow.appendChild(saves);
      newRow.appendChild(shots);
    } else {
      id.gp = 1
      ratingCell.textContent = id.rating
      winPercCell.textContent = (id.wins/id.gp*100).toFixed(2);
      score.textContent = (id.score/id.gp).toFixed(0)
      goals.textContent = (id.goals/id.gp).toFixed(2)
      assists.textContent = (id.assists/id.gp).toFixed(2)
      saves.textContent = (id.saves/id.gp).toFixed(2)
      shots.textContent = (id.shots/id.gp).toFixed(2)
      newRow.appendChild(ratingCell);
      newRow.appendChild(winPercCell);
      // newRow.appendChild(score);
      // newRow.appendChild(goals);
      // newRow.appendChild(assists);
      // newRow.appendChild(saves);
      // newRow.appendChild(shots);
    }

    if (numOfPlayersCell.textContent > 0 && id.region != ""){
      tableBody.appendChild(newRow);
    }
  });
}