import { EventSums, splitSums, champRounds, playerScores, members, split1QualifiedTeams, split2QualifiedTeams, 
  championshipQualifiedTeams, players, teams, amtAdded, majorPrize, champPrize, dist, split1, split2, prizes, year } from "./a-current-page-data.js";
import { Regional1, Regional2, Regional3, Regional4, Regional5, Regional6, Regional1Tops, Regional2Tops, Regional3Tops, Regional4Tops, Regional5Tops, Regional6Tops, 
  Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements } from "./a-regionals.js";
import { Major1, Major2, Major1Placements, Major2Placements, Major1Tops, Major2Tops, Major1Bracket, Major2Bracket } from "./a-majors.js";
import { Championship, ChampionshipPlacements, ChampionshipTops, ChampionshipBracket } from "./a-championship.js";
const menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";
function toggleMenu(){
  if(menuList.style.maxHeight == "0px"){menuList.style.maxHeight = "600px";}
  else{menuList.style.maxHeight = "0px";}
}
const menu_button = document.getElementById('menuButton');
menu_button.addEventListener('click', function() {toggleMenu()});

export const path = `/RLCS-${year}-Fantasy-Website`
export const path1 = ``// used for Mac dev
window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/index.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    document.getElementById('titleYear').innerHTML = `RLCS Fantasy ${year}`
    console.log('Index page has loaded!');
    deployPrize(prizes)
    determineScore()
    deployScoresS1()
    deployScoresS2()
  } else if (window.location.pathname === `${path}/regional_1.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 1 page has loaded!');
    deployReg(Regional1)
    deployRegPlacements(Regional1Placements, split1)
    deployTops(Regional1Tops)
  } else if (window.location.pathname === `${path}/regional_2.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 2 page has loaded!');
    deployReg(Regional2)
    deployRegPlacements(Regional2Placements, split1)
    deployTops(Regional2Tops)
  } else if (window.location.pathname === `${path}/regional_3.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 3 page has loaded!');
    deployReg(Regional3)
    deployRegPlacements(Regional3Placements, split1)
    deployTops(Regional3Tops)
  } else if (window.location.pathname === `${path}/major_1.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Major 1 page has loaded!');
    Major1Bracket()
    deployMaj(Major1)
    deployMajPlacements(Major1Placements, split1)
    deployTops(Major1Tops)
  } else if (window.location.pathname === `${path}/regional_4.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 4 page has loaded!');
    deployReg(Regional4)
    deployRegPlacements(Regional4Placements, split2)
    deployTops(Regional4Tops)
  } else if (window.location.pathname === `${path}/regional_5.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 5 page has loaded!');
    deployReg(Regional5)
    deployRegPlacements(Regional5Placements, split2)
    deployTops(Regional5Tops)
  } else if (window.location.pathname === `${path}/regional_6.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 6 page has loaded!');
    deployReg(Regional6)
    deployRegPlacements(Regional6Placements, split2)
    deployTops(Regional6Tops)
  } else if (window.location.pathname === `${path}/major_2.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Major 2 page has loaded!');
    Major2Bracket()
    deployMaj(Major2)
    deployMajPlacements(Major2Placements, split2)
    deployTops(Major2Tops)
  } else if (window.location.pathname === `${path}/championship.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Championship page has loaded!');
    ChampionshipBracket()
    determineScore()
    deployChamp(champRounds, splitSums)
    deployChampPlacements(ChampionshipPlacements)
    deployTops(ChampionshipTops)
  } else if (window.location.pathname === `${path}/teams_rankings.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Rankings page has loaded!');
    determineSeasonPoints()
    deploySplitPoints(split1, 1)
    deploySplitPoints(split2, 2)
    deploySplitQuals(split1QualifiedTeams, 1)
    deploySplitQuals(split2QualifiedTeams, 2)
    deploySplitQuals(championshipQualifiedTeams, 3)
  } else if (window.location.pathname === `${path}/players_stats.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    const playerFilter = document.getElementById('playerStats')
    playerFilter.addEventListener('change', handleDropdownPlayerChange);
    populatePlayersTable('player_data_table')
    console.log('Player Stats page has loaded!');
  } else if (window.location.pathname === `${path}/teams_stats.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`

    const teamFilter = document.getElementById('teamStats')
    teamFilter.addEventListener('change', handleDropdownTeamChange);

    determineSeasonPoints()
    populateTeamsTable('team_data_table')

    console.log('Team Stats page has loaded!');
  } else if (window.location.pathname === `${path}/info.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Info page has loaded!');
    document.getElementById('numOfTeams').innerHTML = members.length
    document.getElementById('amount_added').innerHTML = "$" + amtAdded
    deployPrizePoolInfo()
    deployPointsInfo()
    determineSpread()
  } else if (window.location.pathname === `${path}/profile.html`){
    document.getElementById('year').innerHTML = `RLCS ${year}`
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('name');
    const teamName = urlParams.get('name');
    if (playerName||teamName){
        const player = players.find(p => p.name === playerName);
        if (player) {
            createPlayer(player, 0);
            const profilesTitle = document.getElementById('player-profiles-title');
            profilesTitle.innerHTML = player.name
        } else  if (teamName) {
            const team = teams.find(t => t.name === teamName);
            createTeam(team, 0)
            const profilesTitle = document.getElementById('player-profiles-title');
            profilesTitle.innerHTML = team.name
            const playersOnTeam = players.filter(p => p.team === teamName);
            console.log(playersOnTeam)
            playersOnTeam.forEach((player,index) => {
                if(player){
                    console.log(player)
                    createPlayer(player, index+1)
                }
            })
        }
    }
  } else {
    console.log("main event listener is working but nothing else is")
  }
});
// Stats Page
const playerTableHeader = `
<tr>
  <th colspan="11">Player Data</th>
</tr>
<tr>
  <th colspan="4" style="border-bottom: solid #ff0000 2px;">Player Information</th><th colspan="2" style="border-bottom: solid #00ff00 2px;">Team Stats</th>
</tr>
<tr>
  <th>Player Name</th><th>Available</th><th>Region</th><th>Rating</th><th>Team</th><th>Win %</th>
</tr>
`
const teamTableHeader = `
<tr>
  <th colspan="11">Team Data</th>
</tr>
<tr>
  <th colspan="2" style="border-bottom: solid #ff0000 2px;">Team</th><th colspan="3" style="border-bottom: solid #48ff00 2px;">Season Standings</th><th colspan="3" style="border-bottom: solid #001aff 2px;">Team Stats</th>
</tr>
<tr>
  <th>Team Name</th><th>Region</th><th>Split 1</th><th>Split 2</th><th>Season Total</th><th>Rating</th><th>Win %</th><th># of players</th>
</tr>
`

// Info Page
const amountPerMajor = ((amtAdded*dist[1])+majorPrize)/2;
const amountForChampionship = (amtAdded*dist[2])+champPrize;
const points = {'playin' : [200, 300], 'groupA' : [300, 400], 'groupB' : [300, 400], 'playoff' : [400, 600]}
const spread = [.20, .13, .09, .08, .07, .06, .06, .05, .05, .04, .04, .03, .03, .03, .02, .02]
const tops = ['score', 'goals', 'assists', 'saves', 'shots']
const regions = ['eu', 'na', 'oce', 'sam', 'mena', 'apac', 'ssa']
const semiFinal = 6 // How many available guesses
const qualify = 4
const POsemiFinal = 8
const final = 3

let playinTotal = points['playin'][0]*semiFinal + points['playin'][1]*qualify
let groupATotal = points['groupA'][0]*semiFinal + points['groupA'][1]*qualify
let groupBTotal = points['groupB'][0]*semiFinal + points['groupB'][1]*qualify
let playoffTotal = points['playoff'][0]*POsemiFinal + points['playoff'][1]*final
let majorTotal = (playinTotal + groupATotal + groupBTotal + playoffTotal)*3
let champTotal = (playinTotal + groupATotal + groupBTotal + playoffTotal)*5
let totals = [
    {name: "Play-In", event: 'playin', total: playinTotal},
    {name: "Group A", event: 'groupA', total: groupATotal},
    {name: "Group B", event: 'groupB', total: groupBTotal},
    {name: "PlayOffs", event: 'playoff', total: playoffTotal},
]

function createPlayer(id, index) {
    const profilesContainer = document.getElementById(`player-profiles${index+1}`);
    const Playerpage = `${path}/profile.html?name=${encodeURIComponent(id.name)}`;
    const Teampage = `${path}/profile.html?name=${encodeURIComponent(id.team)}`;
    if(id.gp < 1){id.gp = 1}
    const profileHTML = `
        <div class="profile-card">
            <h2 class="player-name"><a href="${Playerpage}">${id.name} <span id="${id.watch}">(${id.watch})</a></span></h2>
            <div class="profile-details">
                <a id="${(id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","")}" href="${Teampage}"><strong>Team:</strong> ${id.team}</a>
                <p><strong>Availability:</strong> ${id.availability}</p>
                <p><strong>Region:</strong><span id="${(id.region).toLowerCase()}"> ${id.region}</span></p>
                <p><strong>Rating:</strong> ${id.rating}</p>
                <p><strong>Win Percentage:</strong> ${id.winPerc}%</p>
                <p><strong>Total Score:</strong> ${id.score}</p>
                <p><strong>Total Goals:</strong> ${id.goals}</p>
                <p><strong>Total Assists:</strong> ${id.assists}</p>
                <p><strong>Total Saves:</strong> ${id.saves}</p>
                <p><strong>Total Shots:</strong> ${id.shots}</p>
                <p><strong>Score per game:</strong> ${(id.score/id.gp).toFixed(2)}</p>
                <p><strong>Goals per game:</strong> ${(id.goals/id.gp).toFixed(2)}</p>
                <p><strong>Assists per game:</strong> ${(id.assists/id.gp).toFixed(2)}</p>
                <p><strong>Saves per game:</strong> ${(id.saves/id.gp).toFixed(2)}</p>
                <p><strong>Shots per game:</strong> ${(id.shots/id.gp).toFixed(2)}</p>
            </div>
        </div>
    `;
    profilesContainer.innerHTML = profileHTML;
}
function createTeam(id, index) {
    const profilesContainer = document.getElementById(`player-profiles${index+1}`);
    let page = `${path}/profile.html?name=${encodeURIComponent(id.name)}`;
    if (id.gp < 1){id.gp = 1}
    const profileTeamHTML = `
        <div class="profile-card">
            <h2 class="player-name"><a href="${page}">${id.name}</a></h2>
            <div class="profile-details">
                <p><strong>Region:</strong><span id="${(id.region).toLowerCase()}">${id.region}</span></p>
                <p><strong>Rating:</strong> ${id.rating}</p>
                <p><strong>Win Percentage:</strong> ${id.winPerc}%</p>
                <p><strong>Total Score:</strong> ${id.score}</p>
                <p><strong>Total Goals:</strong> ${id.goals}</p>
                <p><strong>Total Assists:</strong> ${id.assists}</p>
                <p><strong>Total Saves:</strong> ${id.saves}</p>
                <p><strong>Total Shots:</strong> ${id.shots}</p>
                <p><strong>Score per game:</strong> ${(id.score/id.gp).toFixed(2)}</p>
                <p><strong>Goals per game:</strong> ${(id.goals/id.gp).toFixed(2)}</p>
                <p><strong>Assists per game:</strong> ${(id.assists/id.gp).toFixed(2)}</p>
                <p><strong>Saves per game:</strong> ${(id.saves/id.gp).toFixed(2)}</p>
                <p><strong>Shots per game:</strong> ${(id.shots/id.gp).toFixed(2)}</p>
            </div>
        </div>
    `;
    profilesContainer.innerHTML += profileTeamHTML;
}
function handleDropdownPlayerChange(event){
  console.log('changing sort to ' + event.target.value)
  if(event.target.value === 'availability'){
    players.sort((a, b) => b.availability - a.availability)
    populatePlayersTable('player_data_table')
  } else if(event.target.value === 'region'){
    players.sort((a, b) => a.region - b.region)
    populatePlayersTable('player_data_table')
  } else if(event.target.value === 'rating'){
    players.sort((a, b) => b.rating - a.rating)
    populatePlayersTable('player_data_table')
  } else if(event.target.value === 'winPerc'){
    players.sort((a, b) => b.winPerc - a.winPerc)
    populatePlayersTable('player_data_table')
  } else if(event.target.value === 'score'){
    players.sort((a, b) => b.score - a.score)
    populatePlayersTable('player_data_table')
  } else if(event.target.value === 'goals'){
    players.sort((a, b) => b.goals - a.goals)
    populatePlayersTable('player_data_table')
  } else if(event.target.value === 'assists'){
    players.sort((a, b) => b.assists - a.assists)
    populatePlayersTable('player_data_table')
  } else if(event.target.value === 'saves'){
    players.sort((a, b) => b.saves - a.saves)
    populatePlayersTable('player_data_table')
  } else if(event.target.value === 'shots'){
    players.sort((a, b) => b.shots - a.shots)
    populatePlayersTable('player_data_table')
  }
}
function handleDropdownTeamChange(event){
  console.log('changing sort to ' + event.target.value)
  if(event.target.value === 'region'){
    teams.sort((a, b) => a.region - b.region)
    populateTeamsTable('team_data_table')
  } else if(event.target.value === 'split1'){
    teams.sort((a, b) => b.split1Pts - a.split1Pts)
    populateTeamsTable('team_data_table')
  } else if(event.target.value === 'split2'){
    teams.sort((a, b) => b.split2Pts - a.split2Pts)
    populateTeamsTable('team_data_table')
  } else if(event.target.value === 'seasonTotal'){
    teams.sort((a, b) => b.totalSeasonPts - a.totalSeasonPts)
    populateTeamsTable('team_data_table')
  } else if(event.target.value === 'rating'){
    teams.sort((a, b) => b.rating - a.rating)
    populateTeamsTable('team_data_table')
  } else if(event.target.value === 'winPerc'){
    teams.sort((a, b) => b.winPerc - a.winPerc)
    populateTeamsTable('team_data_table')
  } else if(event.target.value === 'score'){
    teams.sort((a, b) => b.score - a.score)
    populateTeamsTable('team_data_table')
  } else if(event.target.value === 'goals'){
    teams.sort((a, b) => b.goals - a.goals)
    populateTeamsTable('team_data_table')
  } else if(event.target.value === 'assists'){
    teams.sort((a, b) => b.assists - a.assists)
    populateTeamsTable('team_data_table')
  } else if(event.target.value === 'saves'){
    teams.sort((a, b) => b.saves - a.saves)
    populateTeamsTable('team_data_table')
  } else if(event.target.value === 'shots'){
    teams.sort((a, b) => b.shots - a.shots)
    populateTeamsTable('team_data_table')
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
function determineScore(){
  members.forEach((id)=>{
    champRounds[id.shortname][0] = Championship[`${id.shortname}`][0] * points['playin'][0] + Championship[`${id.shortname}`][1] * points['playin'][1] //First number is the correct amount they guess
    champRounds[id.shortname][1] = Championship[`${id.shortname}`][2] * points['groupA'][0] + Championship[`${id.shortname}`][3] * points['groupA'][1] //Second number is the points worth per guess
    champRounds[id.shortname][2] = Championship[`${id.shortname}`][4] * points['groupB'][0] + Championship[`${id.shortname}`][5] * points['groupB'][1]
    champRounds[id.shortname][3] = Championship[`${id.shortname}`][6] * points['playoff'][0] + Championship[`${id.shortname}`][7] * points['playoff'][1]
    for (let i = 3; i < Regional1[id.shortname].length; i += 4){//Regional sum of all your players
      EventSums[id.shortname][0] += Regional1[id.shortname][i];
      EventSums[id.shortname][1] += Regional2[id.shortname][i];
      EventSums[id.shortname][2] += Regional3[id.shortname][i];
      EventSums[id.shortname][3] += Regional4[id.shortname][i];
      EventSums[id.shortname][4] += Regional5[id.shortname][i];
      EventSums[id.shortname][5] += Regional6[id.shortname][i];
    }
    // Adding Multipliers to Major 1, 2, and championship
    Major1[id.shortname][0] = Major1[id.shortname][0]*3
    Major2[id.shortname][0] = Major2[id.shortname][0]*3
    // Adding each split event up into one sum for prize distribution
    splitSums[id.shortname][0] = EventSums[id.shortname][0] + EventSums[id.shortname][1] + EventSums[id.shortname][2] + Major1[id.shortname][0] //Split 1 Total
    splitSums[id.shortname][1] = EventSums[id.shortname][3] + EventSums[id.shortname][4] + EventSums[id.shortname][5] + Major2[id.shortname][0] //Split 2 Total
    splitSums[id.shortname][2] = (champRounds[id.shortname][0] + champRounds[id.shortname][1] + champRounds[id.shortname][2] + champRounds[id.shortname][3])*5 //Total of all championship rounds
    splitSums[id.shortname][3] = splitSums[id.shortname][0] + splitSums[id.shortname][1] + splitSums[id.shortname][2] // Grand Total
    // Deploying scores to the array of playerScores Objects
    playerScores[id.shortname] = [EventSums[id.shortname][0], EventSums[id.shortname][1], EventSums[id.shortname][2], Major1[id.shortname][0], splitSums[id.shortname][0], 
                                  EventSums[id.shortname][3], EventSums[id.shortname][4], EventSums[id.shortname][5], Major2[id.shortname][0], splitSums[id.shortname][1], splitSums[id.shortname][2], splitSums[id.shortname][3]];
  })
}
function determineSpread(){
  let spreadSum = 0;
  for (let i = 0; i<spread.length; i++) {
      if (i>members.length){
          spreadSum += spread[i];
          spread[i] = 0;
      }
  }
  let spreadToAdd = spreadSum/members.length
  for (let i = 0; i<=(members.length-1); i++) {
      spread[i] += spreadToAdd;
  }
}
function determineTeamStats(){
  const weight = [
    {region: "EU", weight: 1},
    {region: "NA", weight: 1},
    {region: "OCE", weight: .8},
    {region: "SAM", weight: .9},
    {region: "MENA", weight: .9},
    {region: "APAC", weight: .7},
    {region: "SSA", weight: .6},
  ]
  teams.forEach((id) =>{
    if(id.gp > 0){
      if(id.region != ""){
        let base = id.goals + id.assists + id.saves + id.saves + (id.score/100)
        const regionWeight = weight.find(weight => weight.region === id.region)
        id.rating = (base * id.winPerc/100 * regionWeight.weight).toFixed(0)
      } else {
        let base = id.goals + id.assists + id.saves + id.saves + (id.score/100)
        id.rating = (base * id.winPerc/100 * .5).toFixed(0)
      }
    } else {
      id.winPerc = 0
      if(id.region != ""){
        let base = id.goals + id.assists + id.saves + id.saves + (id.score/100)
        const regionWeight = weight.find(weight => weight.region === id.region)
        id.rating = (base * id.winPerc/100 * regionWeight.weight).toFixed(0)
      } else {
        let base = id.goals + id.assists + id.saves + id.saves + (id.score/100)
        id.rating = (base * id.winPerc/100 * .5).toFixed(0)
      }
    }
  })
}
function deployPrizePoolInfo(){
    for (let i = 0; i < members.length; i ++){
        const tableBody = document.getElementById('prize_pool');
        const newRow = document.createElement('tr');
        const place = document.createElement('td');
        const majorPerc = document.createElement('td');
        const championshipPerc = document.createElement('td');
        const percOfPP = document.createElement('td');
        place.textContent = i+1
        if (i < members.length){
            majorPerc.textContent = "$" + (spread[i] * amountPerMajor).toFixed(2)
            championshipPerc.textContent = "$" + (spread[i] * amountForChampionship).toFixed(2)
            percOfPP.textContent = (spread[i]*100).toFixed(2) + "%"
        } else {
            majorPerc.textContent = 0
            championshipPerc.textContent = 0
            percOfPP.textContent = 0
        }
        
        newRow.appendChild(place);
        newRow.appendChild(majorPerc);
        newRow.appendChild(championshipPerc);
        newRow.appendChild(percOfPP);
        
        tableBody.appendChild(newRow);
    }
    const tableBody = document.getElementById('prize_pool');
    const newRow = document.createElement('tr');
    const place = document.createElement('td');
    const majorPerc = document.createElement('td');
    const championshipPerc = document.createElement('td');
    const percOfPP = document.createElement('td');
    let totalMajor = 0
    let totalChamp = 0
    let totalPerc = 0
    for (let i = 0; i < 16; i ++){
        totalMajor += spread[i] * amountPerMajor
        totalChamp += spread[i] * amountForChampionship
        totalPerc += spread[i]
    }
    
    place.textContent = "Total"
    majorPerc.textContent = "$" + (totalMajor).toFixed(0)
    championshipPerc.textContent = "$" + (totalChamp).toFixed(0)
    percOfPP.textContent = (totalPerc*100).toFixed(0) + "%"
    
    newRow.appendChild(place);
    newRow.appendChild(majorPerc);
    newRow.appendChild(championshipPerc);
    newRow.appendChild(percOfPP);
    
    tableBody.appendChild(newRow);
}
function deployPointsInfo(){
    // for (let i = 0; i < rounds.length; i ++){
    totals.forEach((id) =>{
        const tableBody = document.getElementById('bracket_points');
        const newRow = document.createElement('tr');
        const round = document.createElement('td');
        const quarter = document.createElement('td');
        const qualified = document.createElement('td');
        const totalPoints = document.createElement('td');
        
        round.textContent = id.name
        quarter.textContent = points[id.event][0]
        qualified.textContent = points[id.event][1]
        totalPoints.textContent = id.total

        newRow.appendChild(round);
        newRow.appendChild(quarter);
        newRow.appendChild(qualified);
        newRow.appendChild(totalPoints);
        
        tableBody.appendChild(newRow);
    })
    const tableBody = document.getElementById('bracket_points');
    const newRow1 = document.createElement('tr');
    const round1 = document.createElement('td');
    const quarter1 = document.createElement('td');
    const qualified1 = document.createElement('td');
    const totalPoints1 = document.createElement('td');

    const newRow = document.createElement('tr');
    const round = document.createElement('td');
    const quarter = document.createElement('td');
    const qualified = document.createElement('td');
    const totalPoints = document.createElement('td');
    
    round1.textContent = "Major Multiplier"
    quarter1.textContent = "3X"
    quarter1.style = 'text-align: left;'
    qualified1.textContent = "Total Major Points"
    totalPoints1.textContent = majorTotal

    round.textContent = "Championship Multiplier"
    quarter.textContent = "5X"
    quarter.style = 'text-align: left;'
    qualified.textContent = "Total Championship Points"
    totalPoints.textContent = champTotal

    newRow1.appendChild(round1);
    newRow1.appendChild(quarter1);
    newRow1.appendChild(qualified1);
    newRow1.appendChild(totalPoints1);

    newRow.appendChild(round);
    newRow.appendChild(quarter);
    newRow.appendChild(qualified);
    newRow.appendChild(totalPoints);
    
    tableBody.appendChild(newRow1);
    tableBody.appendChild(newRow);
}
function deployTops(event){
  tops.forEach((id) => {
    for (let i = 0; i < 20; i += 2){
      const tableBody = document.getElementById(`${id}`);
      const newRow = document.createElement('tr');
      const playerLink = document.createElement('a');
      const player = document.createElement('td');
      const pts = document.createElement('td');

      playerLink.textContent = event[id][i]
      playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id][i])}`
      player.id = 'team'
      pts.textContent = event[id][i+1]
      pts.id = 'points'

      player.appendChild(playerLink)
      newRow.appendChild(player);
      newRow.appendChild(pts);
      
      tableBody.appendChild(newRow);
    }
  })
}
function deployReg(event){
  members.forEach((id) =>{
    for (let i = 0; i < event[id.shortname].length+1; i += 2){
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

        teamName.id = id.shortname
        Player.id = id.shortname
        Team.id = id.shortname
        Region.id = id.shortname
        Points.id = id.shortname
        teamName.rowSpan = 3
        
        teamName.textContent = id.name
        playerLink.textContent = event[id.shortname][i]
        playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`
        teamLink.textContent = getPlayerDetails(event[id.shortname][i])[1]
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(teamLink.textContent)}`
        
        Region.textContent = getPlayerDetails(event[id.shortname][i])[0]
        Points.textContent = event[id.shortname][i+1]
        
        Player.appendChild(playerLink)
        Team.appendChild(teamLink)
        
        
        newRow.appendChild(teamName);
        newRow.appendChild(Player);
        newRow.appendChild(Team);
        newRow.appendChild(Region);
        newRow.appendChild(Points);
        
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
        teamLink.textContent = getPlayerDetails(event[id.shortname][i])[1]
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(teamLink.textContent)}`
        
        Region.textContent = getPlayerDetails(event[id.shortname][i])[0]
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
function deployRegPlacements(event, pointsArray){
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

      pts.textContent = pointsArray['Regional'][i]
      pts.id = 'points'

      newRow.appendChild(team);
      newRow.appendChild(pts);
      
      tableBody.appendChild(newRow);
    }
  })
}
function deployMaj(event){
  members.forEach((id) =>{
    const tableBody = document.getElementById('majorScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const teamPoints = document.createElement('td');
    
    teamName.id = id.shortname
    teamPoints.id = id.shortname
    teamName.textContent = id.name
    teamPoints.textContent = event[id.shortname][0]
    
    newRow.appendChild(teamName);
    newRow.appendChild(teamPoints);
    
    tableBody.appendChild(newRow);
  })
}
function deployMajPlacements(event, pointsArray){
  for (let i = 0; i < 16; i ++){
    const tableBody = document.getElementById('Major-placements');
    const newRow = document.createElement('tr');
    const teamLink = document.createElement('a');
    const team = document.createElement('td');
    const pts = document.createElement('td');

    team.id = (getTeamDetails(event['Major'][i])[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
    teamLink.textContent = event['Major'][i]
    if (event['Major'][i] != 'TBD'){
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Major'][i])}`
    }
    team.appendChild(teamLink)
    
    pts.textContent = pointsArray['Major'][i]
    pts.id = 'points'


    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  }
}
function deployChamp(event, event2){
  console.log('champ function working')
  // ChampionshipBracket()
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
    const place = document.createElement('td');
    const team = document.createElement('td');
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
function deployPrize(pool){
  members.forEach((id) =>{
      const tableBody = document.getElementById('prizeTable');
      const newRow = document.createElement('tr');
      const teamName = document.createElement('td');
      const split1Winnings = document.createElement('td');
      const split2Winnings = document.createElement('td');
      const championshipWinnings = document.createElement('td');
      const totalWinnings = document.createElement('td');
      
      teamName.id = id.shortname
      split1Winnings.id = id.shortname
      split2Winnings.id = id.shortname
      championshipWinnings.id = id.shortname
      totalWinnings.id = id.shortname
      teamName.textContent = id.name
      split1Winnings.textContent = "$" + (pool[id.shortname][0]).toFixed(2)
      split2Winnings.textContent = "$" + (pool[id.shortname][1]).toFixed(2)
      championshipWinnings.textContent = "$" + (pool[id.shortname][2]).toFixed(2)
      totalWinnings.textContent = "$" + (pool[id.shortname][0] +pool[id.shortname][1] +pool[id.shortname][2]).toFixed(2)
      

      newRow.appendChild(teamName);
      newRow.appendChild(split1Winnings);
      newRow.appendChild(split2Winnings);
      newRow.appendChild(championshipWinnings);
      newRow.appendChild(totalWinnings);
      
      tableBody.appendChild(newRow);
  })
}
function deployScoresS1(){
  members.forEach((id)=>{
    // deploying scores to table
    const tableBody = document.getElementById('totalScoresS1');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const reg1Total = document.createElement('td');
    const reg2Total = document.createElement('td');
    const reg3Total = document.createElement('td');
    const maj1Total = document.createElement('td');
    const split1Total = document.createElement('td');
    
    teamName.id = id.shortname
    reg1Total.id = id.shortname
    reg2Total.id = id.shortname
    reg3Total.id = id.shortname
    maj1Total.id = id.shortname
    split1Total.id = id.shortname

    teamName.textContent = id.name
    reg1Total.textContent = playerScores[id.shortname][0]
    reg2Total.textContent = playerScores[id.shortname][1]
    reg3Total.textContent = playerScores[id.shortname][2]
    maj1Total.textContent = playerScores[id.shortname][3]
    split1Total.textContent = playerScores[id.shortname][4]
    

    newRow.appendChild(teamName);
    newRow.appendChild(reg1Total)
    newRow.appendChild(reg2Total)
    newRow.appendChild(reg3Total)
    newRow.appendChild(maj1Total)
    newRow.appendChild(split1Total)
    
    tableBody.appendChild(newRow);
  })
}
function deployScoresS2(){
  members.forEach((id)=>{
    // deploying scores to table
    const tableBody = document.getElementById('totalScoresS2');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const reg4Total = document.createElement('td');
    const reg5Total = document.createElement('td');
    const reg6Total = document.createElement('td');
    const maj2Total = document.createElement('td');
    const split2Total = document.createElement('td');
    const championshipTotal = document.createElement('td');
    const total = document.createElement('td');
    
    teamName.id = id.shortname
    reg4Total.id = id.shortname
    reg5Total.id = id.shortname
    reg6Total.id = id.shortname
    maj2Total.id = id.shortname
    split2Total.id = id.shortname
    championshipTotal.id = id.shortname
    total.id = id.shortname

    teamName.textContent = id.name
    reg4Total.textContent = playerScores[id.shortname][5]
    reg5Total.textContent = playerScores[id.shortname][6]
    reg6Total.textContent = playerScores[id.shortname][7]
    maj2Total.textContent = playerScores[id.shortname][8]
    split2Total.textContent = playerScores[id.shortname][9]
    championshipTotal.textContent = playerScores[id.shortname][10]
    total.textContent = playerScores[id.shortname][11]
    

    newRow.appendChild(teamName);
    newRow.appendChild(reg4Total)
    newRow.appendChild(reg5Total)
    newRow.appendChild(reg6Total)
    newRow.appendChild(maj2Total)
    newRow.appendChild(split2Total)
    newRow.appendChild(championshipTotal)
    newRow.appendChild(total)
    
    tableBody.appendChild(newRow);
  })
}
function getPlayerDetails(searchTerm){
  const player = players.find(player => player.name === searchTerm);

  if (!player) {
    return []; // Or handle the case where no team is found
  }

  const details = [
    player.region || 'N/A',
    player.team || 'N/A'
  ];
  return details;
}
function getTeamDetails(searchTerm){
  const team = teams.find(team => team.name === searchTerm);

  if (!team) {
    return []; // Or handle the case where no team is found
  }

  const details = [
    team.region || 'N/A',
    team.split1Pts,
    team.split2Pts,
    team.totalSeasonPts,
    team.name
  ];
  return details;
}
function deploySplitPoints(event, index){
  for(let i = 0; i < 16; i++){
    const tableBody = document.getElementById(`split${index}`);
    const newRow = document.createElement('tr');
    const regionalPts = document.createElement('td');
    const majorPts = document.createElement('td');

    regionalPts.textContent = event['Regional'][i]
    majorPts.textContent = event['Major'][i]
    
    newRow.appendChild(regionalPts);
    newRow.appendChild(majorPts);
    
    tableBody.appendChild(newRow);
  }
}
function deploySplitQuals(event, index){
  event.forEach((id) =>{
    const tableBody = document.getElementById(`split${index}quals`);
    const newRow = document.createElement('tr');
    const teamLink = document.createElement('a');
    const region = document.createElement('td');
    const team = document.createElement('td');
    const pts = document.createElement('td');
    if (id === 'EU' || id === 'NA' || id === 'OCE' || id === 'SAM' || id === 'MENA' || id === 'APAC' || id === 'SSA' || id === "LCQ Region #1" || id === "LCQ Region #2" || id === "LCQ Region #3" || id === "LCQ Region #4"){
      region.textContent = id
      team.textContent = ''
      pts.textContent = 0
    } else {
      region.textContent = getTeamDetails(id)[0]
      team.id = (getTeamDetails(id)[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
      teamLink.textContent = id;
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(getTeamDetails(id)[4])}`;
      if (event === split1QualifiedTeams){
        console.log('Split 1')
        pts.textContent = getTeamDetails(id)[1]
      } else if(event === split2QualifiedTeams){
        console.log('Split 2')
        pts.textContent = getTeamDetails(id)[2]
      } else if (event === championshipQualifiedTeams){
        console.log('Championship')
        pts.textContent = getTeamDetails(id)[3]
      }
      team.appendChild(teamLink);
    }

    newRow.appendChild(region);
    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  })
}
function populatePlayersTable(tableBodyId) {
  const tableBody = document.getElementById(tableBodyId);
  tableBody.innerHTML = '';
  tableBody.innerHTML = playerTableHeader
  players.forEach((id) => {
    if (id.availability != "0"){
      const newRow = document.createElement('tr');
      const nameCell = document.createElement('td');
      const nameLink = document.createElement('a');
      const watchID = id.watch.toLowerCase()
      const availCell = document.createElement('td');
      const availID = id.availability.toLowerCase();
      const regionCell = document.createElement('td');
      const regionID = id.region.toLowerCase();
      const ratingCell = document.createElement('td');
      const teamCell = document.createElement('td');
      const teamLink = document.createElement('a');
      const winPercCell = document.createElement('td');
      const teamId = (id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","");
      
      newRow.classList.add('player-data');

      nameLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`;
      if (id.team != "F/A" && id.team != "TBD"){
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(id.team)}`;
      }
      
      nameCell.id = watchID;
      availCell.id = availID;
      regionCell.id = regionID;
      teamCell.id = teamId;
      
      nameLink.textContent = id.name;
      availCell.textContent = id.availability;
      regionCell.textContent = id.region;
      ratingCell.textContent = id.rating;
      teamLink.textContent = id.team;
      winPercCell.textContent = id.winPerc + "%";
      
      nameCell.appendChild(nameLink);
      newRow.appendChild(nameCell);
      newRow.appendChild(availCell);
      newRow.appendChild(regionCell);
      newRow.appendChild(ratingCell);
      teamCell.appendChild(teamLink);
      newRow.appendChild(teamCell);
      newRow.appendChild(winPercCell);

      tableBody.appendChild(newRow);
    }
  });
}
function populateTeamsTable(tableBodyId) {
  determineTeamStats()
  const tableBody = document.getElementById(tableBodyId);
  tableBody.innerHTML = '';
  tableBody.innerHTML = teamTableHeader
    teams.forEach((id, index) => {
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
      const playersOnTeam = players.filter(p => p.team === id.name);
      const numOfPlayersCell = document.createElement('td');
      let countOfPlayers = 0

      newRow.classList.add('player-data');
      newRow.setAttribute('data-player', `player${index + 1}`);
      teamLink.textContent = id.name;
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
    if (id.name != "TBD"){
      S1points.textContent = id.split1Pts;
      S2points.textContent = id.split2Pts;
      seasonPoints.textContent = id.totalSeasonPts;
    }
    ratingCell.textContent = id.rating;
    winPercCell.textContent = id.winPerc;
    numOfPlayersCell.textContent = countOfPlayers;
    if (numOfPlayersCell.textContent > -1){
      newRow.appendChild(teamCell);
      newRow.appendChild(regionCell);
      newRow.appendChild(S1points);
      newRow.appendChild(S2points);
      newRow.appendChild(seasonPoints);
      newRow.appendChild(ratingCell);
      newRow.appendChild(winPercCell);
      newRow.appendChild(numOfPlayersCell);
      tableBody.appendChild(newRow);
    }
  });
}