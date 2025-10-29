import { path, deployLinks, menu, weight, regions, getTeamDetails } from "./main.js";
import { year, players, teams, split1, split2 } from "./a-current-page-data.js";
import { Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements } from "./a-regionals.js";
import { Major1Placements, Major2Placements } from "./a-majors.js";
import { playersSeason1, playersSeason2, playersSeason3, playersSeason4, playersSeason5, playersSeason6, playersSeason7, playersSeason8,
  playersSeason9, playersSeasonX, playersSeason21, playersSeason22, playersSeason24, playersSeason25 } from "./Previous-Seasons.js";

// Stats Page
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // Add 1 because getMonth() is zero-based
const years = today.getFullYear();
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
    <option value="reset">Reset</option>
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
  <th colspan="11">Player Data</th>
</tr>
<tr>
  <th colspan="3" id="name">Player Information</th><th colspan="5" id="perGame">Player Stats: Per Game</th>
</tr>
<tr>
  <th>Player Name</th><th>Rating</th><th>Win %</th><th>Score</th><th>Goals</th><th>Assists</th><th>Saves</th><th>Shots</th>
</tr>
`
const playerTableHeader = `
<tr>
  <th colspan="11">Player Data</th>
</tr>
<tr>
  <th colspan="4" id="name">Player Information</th><th colspan="5" id="perGame">Player Stats: Per Game</th><th colspan="2" id="teamStats">Team Stats</th>
</tr>
<tr>
  <th>Player Name</th><th>Available</th><th>Rating</th><th>Win %</th><th>Score</th><th>Goals</th><th>Assists</th><th>Saves</th><th>Shots</th><th>Team</th><th>Region</th>
</tr>
`
const teamTableHeader = `
<tr>
  <th colspan="13">Team Data</th>
</tr>
<tr>
  <th colspan="2" id="name">Team</th><th colspan="3" id="standings">Season Standings</th><th colspan="3" id="teamStats">Team Stats</th><th colspan="5" id="perGame">Per Game</th>
</tr>
<tr>
  <th>Team Name</th><th>Region</th><th>Split 1</th><th>Split 2</th><th>Season Total</th><th># of players</th><th>Rating</th><th>Win %</th><th>Score</th><th>Goals</th><th>Assists</th><th>Saves</th><th>Shots</th>
</tr>
`
const weightedParagraph = `
<ul id="hide_list">
  <li><strong>Region Weighting</strong></li>
  <li>${weight[0].region} multiplier: ${weight[0].weight}.</li>
  <li>${weight[1].region} multiplier: ${weight[1].weight}.</li>
  <li>${weight[2].region} multiplier: ${weight[2].weight}.</li>
  <li>${weight[3].region} multiplier: ${weight[3].weight}.</li>
  <li>${weight[4].region} multiplier: ${weight[4].weight}.</li>
  <li>${weight[5].region} multiplier: ${weight[5].weight}.</li>
  <li>${weight[6].region} multiplier: ${weight[6].weight}.</li>
  </ul>
  `

let playersUnfiltered = players
window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/stats.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    document.getElementById('last_updated').innerHTML = `WEBSITE STILL IN DEVELOPMENT(UPDATED ${month}/${day}/${years})`
    const urlParams = new URLSearchParams(window.location.search);
    const evt = urlParams.get('name');
    if(evt === 'player'){
      document.getElementById('table_type').innerHTML = playerTableType
      document.getElementById('title').innerHTML = 'Player Statistics'

      const playerSort = document.getElementById('playerStats')
      playerSort.addEventListener('change', handleDropdownPlayer);

      players.sort((a, b) => b.winPerc - a.winPerc)
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
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    document.getElementById('last_updated').innerHTML = `WEBSITE STILL IN DEVELOPMENT(UPDATED ${month}/${day}/${years})`
    const urlParams = new URLSearchParams(window.location.search);
    const evt = urlParams.get('name');
    if(evt === 'season1'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 1'
      playersSeason1.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason1)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season2'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 2'
      playersSeason2.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason2)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season3'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 3'
      playersSeason3.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason3)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season4'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 4'
      playersSeason4.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason4)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season5'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 5'
      playersSeason5.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason5)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season6'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 6'
      playersSeason6.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason6)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season7'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 7'
      playersSeason7.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason7)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season8'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 8'
      playersSeason8.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason8)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season9'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 9'
      playersSeason9.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason9)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'seasonX'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season X'
      playersSeasonX.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeasonX)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season21-22'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 21-22'
      playersSeason21.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason21)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season22-23'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 22-23'
      playersSeason22.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason22)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season24'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 24'
      playersSeason24.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason24)
      console.log('Team Stats page has loaded!');
    } else if(evt === 'season25'){
      document.getElementById('title').innerHTML = 'Player Statistics'
      document.getElementById('page_title').innerHTML = 'Season 25'
      playersSeason25.sort((a, b) => b.rating() - a.rating())
      populateLegacyPlayersTable(playersSeason25)
      console.log('Team Stats page has loaded!');
    }
  } else {
    console.log("main event listener is working but nothing else is")
  }
});


function handleDropdownPlayer(event){
  console.log('changing sort to ' + event.target.value)
  if(event.target.value === 'name'){
    players.sort((a, b) => a.name.localeCompare(b.name))
    populatePlayersTable(players)
  } else if(event.target.value === 'rating'){
    players.sort((a, b) => b.rating() - a.rating())
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
  } else if(event.target.value === 'reset'){
    populatePlayersTable(playersUnfiltered)
  }
}
function handleDropdownTeam(event){
  console.log('changing sort to ' + event.target.value)
  if(event.target.value === 'name'){
    teams.sort((a, b) => a.name.localeCompare(b.name))
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
    teams.sort((a, b) => b.winPerc - a.winPerc)
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
function determineSeasonPoints() {
  teams.forEach((id) => {
    regions.forEach((reg) => {
        const regional1Teams = Regional1Placements[reg];
        const team1Index = regional1Teams.indexOf(id.name);
        if (team1Index !== -1) {
          id.split1Pts += split1['Regional'][team1Index];
        }
        const regional2Teams = Regional2Placements[reg];
        const team2Index = regional2Teams.indexOf(id.name);
        if (team2Index !== -1) {
          id.split1Pts += split1['Regional'][team2Index];
        }
        const regional3Teams = Regional3Placements[reg];
        const team3Index = regional3Teams.indexOf(id.name);
        if (team3Index !== -1) {
          id.split1Pts += split1['Regional'][team3Index];
        }
        const regional4Teams = Regional4Placements[reg];
        const team4Index = regional4Teams.indexOf(id.name);
        if (team4Index !== -1) {
          id.split2Pts += split2['Regional'][team4Index];
        }
        const regional5Teams = Regional5Placements[reg];
        const team5Index = regional5Teams.indexOf(id.name);
        if (team5Index !== -1) {
          id.split2Pts += split2['Regional'][team5Index];
        }
        const regional6Teams = Regional6Placements[reg];
        const team6Index = regional6Teams.indexOf(id.name);
        if (team6Index !== -1) {
          id.split2Pts += split2['Regional'][team6Index];
        }
    });
    const major1Teams = Major1Placements['Major'];
    const team7Index = major1Teams.indexOf(id.name);
    if (team7Index !== -1) {
      id.split1Pts += split1['Major'][team7Index];
    }
    const major2Teams = Major2Placements['Major'];
    const team8Index = major2Teams.indexOf(id.name);
    if (team8Index !== -1) {
      id.split2Pts += split2['Major'][team8Index];
    }
    id.totalSeasonPts += id.split1Pts + id.split2Pts;
  });
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
    const noStats = document.createElement('td');

    const roleID = id.role.toLowerCase()
    
    nameCell.id = roleID;
    const rank = determineLegacyRanks(Players, id.rating())
    nameCell.textContent = id.name + " (" + rank + ")";
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
    } else {
      noStats.textContent = 'No Data to Display'
      noStats.style = 'color: red;'
      noStats.colSpan = 7
      newRow.appendChild(noStats);
    }

    tableBody.appendChild(newRow);
  });
}
function populatePlayersTable(Players) {
  const tableBody = document.getElementById('data_table');
  tableBody.innerHTML = '';
  tableBody.innerHTML = playerTableHeader
  Players.forEach((id) => {
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
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
    let availID = ''
    const teamId = (id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","");
    
    
    nameLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`;
    if (id.team != "F/A" && id.team != "TBD"){
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(id.team)}`;
    }
    
    nameCell.id = roleID;
    teamCell.id = teamId;
    const rank = determineRanks(id.rating())
    nameLink.textContent = id.name + " (" + rank + ")";
    if(id.team === 'F/A'){
      availCell.textContent = 'No';
      availID = 'no'
    } else if(id.role === 'coach' || id.role === 'inactive' || id.role === 'retired'){
      availCell.textContent = "No";
      availID = 'no'
    } else {
      availCell.textContent = "Yes";
      availID = 'yes'
    }
    availCell.id = availID;
    ratingCell.textContent = id.rating()
    teamLink.textContent = id.team;
    teamRegion.textContent = getTeamDetails(id.team)[0]
    
    nameCell.appendChild(nameLink);
    newRow.appendChild(nameCell);
    newRow.appendChild(availCell);
    
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
    } else {
      noStats.textContent = 'No Data to Display'
      noStats.style = 'color: red;'
      noStats.colSpan = 7
      newRow.appendChild(noStats);
    }

    teamCell.appendChild(teamLink);
    newRow.appendChild(teamCell);
    newRow.appendChild(teamRegion)
    if(availID != 'no'){
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
    const teamId = (id.name).toLowerCase().replaceAll(" ","_").replaceAll(".","");
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
    
    const playersOnTeam = players.filter(p => p.team === id.name);
    let countOfPlayers = 0
    
    newRow.setAttribute('data-player', `player${index + 1}`);
    const rank = determineTeamsRanks(id.rating())
    teamLink.textContent = id.name + " (" + rank + ")";
    teamLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`;
    
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
    newRow.appendChild(numOfPlayersCell);
    let regionWeight = .5
    weight.forEach((amt)=>{
      if(amt.region === id.region){
        regionWeight = amt.weight
      }
    })
    if (id.gp > 0){
      ratingCell.textContent = (((id.score / 100) + id.goals + id.assists + id.saves + id.shots) * (id.wins/id.gp) * regionWeight).toFixed(0)
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
      noStats.textContent = 'No Data to Display'
      noStats.style = 'color: red;'
      noStats.colSpan = 8
      newRow.appendChild(noStats);
    }

    if (numOfPlayersCell.textContent > 0 && id.region != ""){
      tableBody.appendChild(newRow);
    }
  });
}
function determineLegacyRanks(Players, rating){
  Players.sort((a,b) => b.rating - a.rating)
  Players.forEach((id)=>{

  })
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
export function determineRanks(rating){
  players.sort((a,b) => b.rating - a.rating)
  players.forEach((id)=>{

  })
  let high = players[0].rating()
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
export function determineTeamsRanks(rating){
  teams.sort((a,b) => b.rating - a.rating)
  let high = teams[0].rating()
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