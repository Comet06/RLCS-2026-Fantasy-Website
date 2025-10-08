import { 
  members, Regional1, Regional1Tops, Regional1Placements, Regional2, Regional2Tops, Regional2Placements, Regional3, Regional3Tops, Regional3Placements,
  Major1, Major1Tops, Major1Placements, split1QualifiedTeams, Regional4, Regional4Tops, Regional4Placements, Regional5, Regional5Tops, Regional5Placements, 
  Regional6, Regional6Tops, Regional6Placements, Major2, Major2Tops, Major2Placements, split2QualifiedTeams, 
  Championship, ChampionshipTops, ChampionshipPlacements, championshipQualifiedTeams, players, teams, amtAdded,  amountPerMajor, amountForChampionship, split1, split2, prizes, year
} from "./a-current-page-data.js";

import { playersPrevious, teamsPrevious } from "./a-previous-page-data.js";
const previous = document.getElementById('legacy_data');

const menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";
function toggleMenu(){
  if(menuList.style.maxHeight == "0px")
  {
      menuList.style.maxHeight = "600px";
  }
  else{
      menuList.style.maxHeight = "0px";
  }
}
const menu_button = document.getElementById('menuButton');
menu_button.addEventListener('click', function() {toggleMenu()});

// Stats Page
const currentSeason = document.getElementById('current_data');
const playerTable = document.getElementById('player_data_table');
const teamTable = document.getElementById('team_data_table');
const playerTableHeader = `
<tr>
  <th colspan="11">Player Data</th>
</tr>
<tr>
  <th colspan="4" style="border-bottom: solid #ff0000 2px;">Player Information</th><th colspan="1" style="border-bottom: solid #00ff00 2px;">Team Stats</th><th colspan="6" style="border-bottom: solid #001aff 2px;">Player Stats Per Game</th><th></th>
</tr>
<tr>
  <th>Player Name</th><th>Available</th><th>Region</th><th>Rating</th><th>Team</th><th>Win %</th><th>Score</th><th>Goals</th><th>Assists</th><th>Saves</th><th>Shots</th>
</tr>
`
const teamTableHeader = `
<tr>
  <th colspan="11">Team Data</th>
</tr>
<tr>
  <th colspan="3" style="border-bottom: solid #ff0000 2px;">Team</th><th colspan="7" style="border-bottom: solid #001aff 2px;">Team Stats Total</th>
</tr>
<tr>
  <th>Team Name</th><th>Region</th><th>Rating</th><th>Win %</th><th>Score</th><th>Goals</th><th>Assists</th><th>Saves</th><th>Shots</th><th># of players</th>
</tr>
`
// Regional/Major/Championship pages
const tops = ['score', 'goals', 'assists', 'saves', 'shots']
const regions = ['eu', 'na', 'oce', 'sam', 'mena', 'apac', 'ssa']


// Site Wide
export const path = `/RLCS-${year}-Fantasy-Website`
window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/index.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    document.getElementById('titleYear').innerHTML = `RLCS Fantasy ${year}`
    console.log('Index page has loaded!');
    determineScore(Regional1, Regional2, Regional3, Major1, Regional4, Regional5, Regional6, Major2, Championship)
    deployScores()
    deployPrize(prizes)
  } else if (window.location.pathname === `${path}/regional_1.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 1 page has loaded!');
    deployReg(Regional1, players)
    deployRegPlacements(Regional1Placements)
    deployTops(Regional1Tops)
  } else if (window.location.pathname === `${path}/regional_2.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 2 page has loaded!');
    deployReg(Regional2, players)
    deployRegPlacements(Regional2Placements)
    deployTops(Regional2Tops)
  } else if (window.location.pathname === `${path}/regional_3.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 3 page has loaded!');
    deployReg(Regional3, players)
    deployRegPlacements(Regional3Placements)
    deployTops(Regional3Tops)
  } else if (window.location.pathname === `${path}/major_1.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Major 1 page has loaded!');
    deployMaj(Major1)
    deployMajPlacements(Major1Placements)
    deployTops(Major1Tops)
  } else if (window.location.pathname === `${path}/regional_4.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 4 page has loaded!');
    deployReg(Regional4, players)
    deployRegPlacements(Regional4Placements)
    deployTops(Regional4Tops)
  } else if (window.location.pathname === `${path}/regional_5.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 5 page has loaded!');
    deployReg(Regional5, players)
    deployRegPlacements(Regional5Placements)
    deployTops(Regional5Tops)
  } else if (window.location.pathname === `${path}/regional_6.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Regional 6 page has loaded!');
    deployReg(Regional6, players)
    deployRegPlacements(Regional6Placements)
    deployTops(Regional6Tops)
  } else if (window.location.pathname === `${path}/major_2.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Major 2 page has loaded!');
    deployMaj(Major2)
    deployMajPlacements(Major2Placements)
    deployTops(Major2Tops)
  } else if (window.location.pathname === `${path}/championship.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Championship page has loaded!');
    determineScore(Regional1, Regional2, Regional3, Major1, Regional4, Regional5, Regional6, Major2, Championship)
    deployChamp(champRounds)
    deployChampPlacements(ChampionshipPlacements)
    deployTops(ChampionshipTops)
  } else if (window.location.pathname === `${path}/teams_rankings.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Rankings page has loaded!');
    deploySplitPoints(split1, 1)
    deploySplitPoints(split2, 2)
    deploySplitQuals(split1QualifiedTeams, 1)
    deploySplitQuals(split2QualifiedTeams, 2)
    deploySplitQuals(championshipQualifiedTeams, 3)
  } else if (window.location.pathname === `${path}/players_stats.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Player Stats page has loaded!');
    populatePlayersTable(players, 'player_data_table')
    populateTeamsTable(teams, 'team_data_table')
    console.log('Current data loaded');

    previous.addEventListener('click', function() {
      playerTable.innerHTML = playerTableHeader;
      teamTable.innerHTML = teamTableHeader;
      populatePlayersTable(playersPrevious, 'player_data_table')
      populateTeamsTable(teamsPrevious, 'team_data_table')
      console.log('Season Data loaded');
    });
    
    currentSeason.addEventListener('click', function() {
      playerTable.innerHTML = playerTableHeader;
      teamTable.innerHTML = teamTableHeader;
      populatePlayersTable(players, 'player_data_table')
      populateTeamsTable(teams, 'team_data_table')
      console.log('Season Data loaded');
    });
  } else if (window.location.pathname === `${path}/info.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    console.log('Info page has loaded!');
    document.getElementById('numOfTeams').innerHTML = members.length
    document.getElementById('amount_added').innerHTML = "$" + amtAdded
    deployPrizePoolInfo(amountPerMajor, amountForChampionship)
    deployPointsInfo()
    determineSpread()
  } else {
    console.log("main event listener is working but nothing else is")
  }
});



const points = {
    'playin' : [200, 300],
    'groupA' : [300, 400],
    'groupB' : [300, 400],
    'playoff' : [400, 600]
}
let EventSums = { //*****Do not manipulate this data*****
  // Regionals 1-6
  'flip' : [0, 0, 0, 0, 0, 0],
  'doof' : [0, 0, 0, 0, 0, 0],
  'goof' : [0, 0, 0, 0, 0, 0],
  'gold' : [0, 0, 0, 0, 0, 0],
  'skib' : [0, 0, 0, 0, 0, 0],
  'cana' : [0, 0, 0, 0, 0, 0],
  'pots' : [0, 0, 0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0, 0, 0],
  'maht' : [0, 0, 0, 0, 0, 0],
  'sock' : [0, 0, 0, 0, 0, 0],
}
let splitSums = { //*****Do not manipulate this data*****
  // split 1-2, Championship, Grand total
  'flip' : [0, 0, 0, 0],
  'doof' : [0, 0, 0, 0],
  'goof' : [0, 0, 0, 0],
  'gold' : [0, 0, 0, 0],
  'skib' : [0, 0, 0, 0],
  'cana' : [0, 0, 0, 0],
  'pots' : [0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0],
  'maht' : [0, 0, 0, 0],
  'sock' : [0, 0, 0, 0],
}
let champRounds = { //*****Do not manipulate this data*****
  // this is for calculating the totals for playin, groupA, groupB, playoffs, total
  'flip' : [0, 0, 0, 0, 0],
  'doof' : [0, 0, 0, 0, 0],
  'goof' : [0, 0, 0, 0, 0],
  'gold' : [0, 0, 0, 0, 0],
  'skib' : [0, 0, 0, 0, 0],
  'cana' : [0, 0, 0, 0, 0],
  'pots' : [0, 0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0, 0],
  'maht' : [0, 0, 0, 0, 0],
  'sock' : [0, 0, 0, 0, 0],
}
let playerScores = { //*****Do not manipulate this data*****
    'flip': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'doof': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'goof': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'gold': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'skib': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'cana': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'pots': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'yuri': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'maht': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'sock': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};
// Info Page
const spread = [.20, .13, .09, .08, .07, .06, .06, .05, .05, .04, .04, .03, .03, .03, .02, .02]
const semiFinal = 6
const qualify = 4
const final = 3

let playinTotal = points['playin'][0]*semiFinal + points['playin'][1]*qualify
let groupATotal = points['groupA'][0]*semiFinal + points['groupA'][1]*qualify
let groupBTotal = points['groupB'][0]*semiFinal + points['groupB'][1]*qualify
let playoffTotal = points['playoff'][0]*semiFinal + points['playoff'][1]*final
let totals = [
    {name: "Play-In", event: 'playin', total: playinTotal},
    {name: "Group A", event: 'groupA', total: groupATotal},
    {name: "Group B", event: 'groupB', total: groupBTotal},
    {name: "PlayOffs", event: 'playoff', total: playoffTotal},
]


function determineScore(reg1, reg2, reg3, maj1, reg4, reg5, reg6, maj2, champ){
  members.forEach((id)=>{
    champRounds[id.shortname][0] = champ[`${id.shortname}`][0]*points['playin'][0]+champ[`${id.shortname}`][1]*points['playin'][1] //Play-Ins
    champRounds[id.shortname][1] = champ[`${id.shortname}`][2]*points['groupA'][0]+champ[`${id.shortname}`][3]*points['groupA'][1] //Group A
    champRounds[id.shortname][2] = champ[`${id.shortname}`][4]*points['groupB'][0]+champ[`${id.shortname}`][5]*points['groupB'][1] //Group B
    champRounds[id.shortname][3] = champ[`${id.shortname}`][6]*points['playoff'][0]+champ[`${id.shortname}`][7]*points['playoff'][1] //Playoffs
    for (let i = 3; i < reg1[id.shortname].length; i += 4) {
      EventSums[id.shortname][0] += reg1[id.shortname][i]; //Regional sum of all your players
      EventSums[id.shortname][1] += reg2[id.shortname][i];
      EventSums[id.shortname][2] += reg3[id.shortname][i];
      EventSums[id.shortname][3] += reg4[id.shortname][i];
      EventSums[id.shortname][4] += reg5[id.shortname][i];
      EventSums[id.shortname][5] += reg6[id.shortname][i];
    }
    // Adding Multipliers to Major 1, 2, and championship
    maj1[id.shortname][0] = maj1[id.shortname][0]*3
    maj2[id.shortname][0] = maj2[id.shortname][0]*3
    // Adding each split event up into one sum for prize distribution
    splitSums[id.shortname][0] = EventSums[id.shortname][0] + EventSums[id.shortname][1] + EventSums[id.shortname][2] + maj1[id.shortname][0] //Split 1 Total
    splitSums[id.shortname][1] = EventSums[id.shortname][3] + EventSums[id.shortname][4] + EventSums[id.shortname][5] + maj2[id.shortname][0] //Split 2 Total
    splitSums[id.shortname][2] = (champRounds[id.shortname][0] + champRounds[id.shortname][1] + champRounds[id.shortname][2] + champRounds[id.shortname][3])*5 //Total of all championship rounds
    splitSums[id.shortname][3] = splitSums[id.shortname][0] + splitSums[id.shortname][1] + splitSums[id.shortname][2] // Grand Total
    // Deploying scores to the array of playerScores Objects
    playerScores[id.shortname] = [EventSums[id.shortname][0], EventSums[id.shortname][1], EventSums[id.shortname][2], maj1[id.shortname][0], splitSums[id.shortname][0], 
                                  EventSums[id.shortname][3], EventSums[id.shortname][4], EventSums[id.shortname][5], maj2[id.shortname][0], splitSums[id.shortname][1], splitSums[id.shortname][2], splitSums[id.shortname][3]];
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
function deployPrizePoolInfo(major, champ){
    for (let i = 0; i < members.length; i ++){
        const tableBody = document.getElementById('prize_pool');
        const newRow = document.createElement('tr');
        const place = document.createElement('td');
        const majorPerc = document.createElement('td');
        const championshipPerc = document.createElement('td');
        const percOfPP = document.createElement('td');
        place.textContent = i+1
        if (i < members.length){
            majorPerc.textContent = "$" + (spread[i] * major).toFixed(2)
            championshipPerc.textContent = "$" + (spread[i] * champ).toFixed(2)
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
        totalMajor += spread[i] * major
        totalChamp += spread[i] * champ
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
    qualified1.textContent = "Total Major Points"
    totalPoints1.textContent = 0

    round.textContent = "Championship Multiplier"
    quarter.textContent = "5X"
    qualified.textContent = "Total Championship Points"
    totalPoints.textContent = 0

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
            const team = document.createElement('td');
            const pts = document.createElement('td');

            team.textContent = event[id][i]
            team.id = 'team'
            pts.textContent = event[id][i+1]
            pts.id = 'points'


            newRow.appendChild(team);
            newRow.appendChild(pts);
            
            tableBody.appendChild(newRow);
        }
    })
}
function deployReg(event, players){
  members.forEach((id) =>{
    const tableBody = document.getElementById('regionalScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    teamName.textContent = id.name
    teamName.rowSpan = 4
    teamName.id = id.shortname
    tableBody.appendChild(newRow);
    newRow.appendChild(teamName);
    for (let i = 0; i < event[id.shortname].length; i += 4){
      event[id.shortname][i+1] = getTeam(players, event[id.shortname][i])
      event[id.shortname][i+2] = getRegion(players, event[id.shortname][i])
      const tableBody = document.getElementById('regionalScoreCard');
      const newRow = document.createElement('tr');
      const playerLink = document.createElement('a');
      const teamLink = document.createElement('a');
      const Player = document.createElement('td');
      const Team = document.createElement('td');
      const Region = document.createElement('td');
      const Points = document.createElement('td');
      const teamShort = getTeamShort(event[id.shortname][i+1])

      Player.id = id.shortname
      Team.id = id.shortname
      Region.id = id.shortname
      Points.id = id.shortname

      playerLink.textContent = event[id.shortname][i]
      playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`
      teamLink.textContent = event[id.shortname][i+1]
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(teamShort)}`

      Region.textContent = event[id.shortname][i+2]
      Points.textContent = event[id.shortname][i+3]

      Player.appendChild(playerLink)
      Team.appendChild(teamLink)
      

      newRow.appendChild(Player);
      newRow.appendChild(Team);
      newRow.appendChild(Region);
      newRow.appendChild(Points);
      
      tableBody.appendChild(newRow);
    }
  })
}
function deployRegPlacements(event){
  regions.forEach((id) => {
    for (let i = 0; i < 48; i += 3){
      const tableBody = document.getElementById(`${id}`);
      const newRow = document.createElement('tr');
      const newLink = document.createElement('a');
      const team = document.createElement('td');
      const pts = document.createElement('td');

      team.id = event[id][i+1]
      newLink.textContent = event[id][i]
      newLink.href = `${path}/profile.html?name=${encodeURIComponent(team.id)}`
      team.appendChild(newLink)

      pts.textContent = event[id][i+2]
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
function deployMajPlacements(event){
  for (let i = 0; i < 48; i += 3){
    const tableBody = document.getElementById('Major-placements');
    const newRow = document.createElement('tr');
    const newLink = document.createElement('a');
    const team = document.createElement('td');
    const pts = document.createElement('td');

    team.id = event['Major'][i+1]
    newLink.textContent = event['Major'][i]
    newLink.href = `${path}/profile.html?name=${encodeURIComponent(team.id)}`
    team.appendChild(newLink)
    
    pts.textContent = event['Major'][i+2]
    pts.id = 'points'


    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  }
}
function deployChamp(event){
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
    totalCell.textContent = event[id.shortname][4]
    
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
  for (let i = 0; i < 60; i += 3){
    const tableBody = document.getElementById('champ-placements');
    const newRow = document.createElement('tr');
    const newLink = document.createElement('a');
    const place = document.createElement('td');
    const team = document.createElement('td');

    team.id = event['Champ'][i+2]
    newLink.textContent = event['Champ'][i+1]
    newLink.href = `${path}/profile.html?name=${encodeURIComponent(team.id)}`
    team.appendChild(newLink)
    
    place.textContent = event['Champ'][i+3]
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
function deployScores(){
  members.forEach((id)=>{
    // deploying scores to table
    const tableBody = document.getElementById('totalScores');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const reg1Total = document.createElement('td');
    const reg2Total = document.createElement('td');
    const reg3Total = document.createElement('td');
    const maj1Total = document.createElement('td');
    const split1Total = document.createElement('td');
    const reg4Total = document.createElement('td');
    const reg5Total = document.createElement('td');
    const reg6Total = document.createElement('td');
    const maj2Total = document.createElement('td');
    const split2Total = document.createElement('td');
    const championshipTotal = document.createElement('td');
    const total = document.createElement('td');
    
    teamName.id = id.shortname
    reg1Total.id = id.shortname
    reg2Total.id = id.shortname
    reg3Total.id = id.shortname
    maj1Total.id = id.shortname
    split1Total.id = id.shortname
    reg4Total.id = id.shortname
    reg5Total.id = id.shortname
    reg6Total.id = id.shortname
    maj2Total.id = id.shortname
    split2Total.id = id.shortname
    championshipTotal.id = id.shortname
    total.id = id.shortname

    teamName.textContent = id.name
    reg1Total.textContent = playerScores[id.shortname][0]
    reg2Total.textContent = playerScores[id.shortname][1]
    reg3Total.textContent = playerScores[id.shortname][2]
    maj1Total.textContent = playerScores[id.shortname][3]
    split1Total.textContent = playerScores[id.shortname][4]
    reg4Total.textContent = playerScores[id.shortname][5]
    reg5Total.textContent = playerScores[id.shortname][6]
    reg6Total.textContent = playerScores[id.shortname][7]
    maj2Total.textContent = playerScores[id.shortname][8]
    split2Total.textContent = playerScores[id.shortname][9]
    championshipTotal.textContent = playerScores[id.shortname][10]
    total.textContent = playerScores[id.shortname][11]
    

    newRow.appendChild(teamName);
    newRow.appendChild(reg1Total)
    newRow.appendChild(reg2Total)
    newRow.appendChild(reg3Total)
    newRow.appendChild(maj1Total)
    newRow.appendChild(split1Total)
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
function getRegion(playerData, searchTerm) {
  const player = playerData.find(player => player.name === searchTerm);
  return player ? player.region : null;
}
function getTeam(playerData, searchTerm) {
  const player = playerData.find(player => player.name === searchTerm);
  return player ? player.team : null;
}
function getTeamShort(searchTerm){
  const short = teams.find(team => team.name === searchTerm);
  return short ? short.shortname : null;
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
    const newLink = document.createElement('a');
    const region = document.createElement('td');
    const team = document.createElement('td');
    const pts = document.createElement('td');

    region.textContent = id.region
    team.id = getTeamShort(id.team)
    newLink.textContent = id.team;
    newLink.href = `${path}/profile.html?name=${encodeURIComponent(team.id)}`;
    pts.textContent = id.points
    team.appendChild(newLink);

    newRow.appendChild(region);
    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  })
}
function populatePlayersTable(playersArray, tableBodyId) {
  const tableBody = document.getElementById(tableBodyId);
  playersArray.forEach((player) => {
    if (player.availability != "No"){
      const newRow = document.createElement('tr');
      const nameCell = document.createElement('td');
      const nameLink = document.createElement('a');
      const watchID = player.watch.toLowerCase()
      const availCell = document.createElement('td');
      const availID = player.availability.toLowerCase();
      const regionCell = document.createElement('td');
      const regionID = player.region.toLowerCase();
      const ratingCell = document.createElement('td');
      const teamCell = document.createElement('td');
      const newLink = document.createElement('a');
      const winPercCell = document.createElement('td');
      const scoreCell = document.createElement('td');
      const goalsCell = document.createElement('td');
      const assistsCell = document.createElement('td');
      const savesCell = document.createElement('td');
      const shotsCell = document.createElement('td');
      const teamId = player.shortname;
      
      newRow.classList.add('player-data');

      nameLink.href = `${path}/profile.html?name=${encodeURIComponent(player.name)}`;
      newLink.href = `${path}/profile.html?name=${encodeURIComponent(player.shortname)}`;
      
      nameCell.id = watchID;
      availCell.id = availID;
      regionCell.id = regionID;
      teamCell.id = teamId;
      
      nameLink.textContent = player.name;
      availCell.textContent = player.availability;
      regionCell.textContent = player.region;
      ratingCell.textContent = player.rating;
      newLink.textContent = player.team;
      winPercCell.textContent = player.winPerc + "%";
      if (player.gp != 0){
        scoreCell.textContent = (player.score/player.gp).toFixed(0);
        goalsCell.textContent = (player.goals/player.gp).toFixed(2);
        assistsCell.textContent = (player.assists/player.gp).toFixed(2);
        savesCell.textContent = (player.saves/player.gp).toFixed(2);
        shotsCell.textContent = (player.shots/player.gp).toFixed(2);
      } else {
        scoreCell.textContent = 0
        goalsCell.textContent = 0
        assistsCell.textContent = 0
        savesCell.textContent = 0
        shotsCell.textContent = 0
      }
      
      nameCell.appendChild(nameLink);
      newRow.appendChild(nameCell);
      newRow.appendChild(availCell);
      newRow.appendChild(regionCell);
      newRow.appendChild(ratingCell);
      teamCell.appendChild(newLink);
      newRow.appendChild(teamCell);
      newRow.appendChild(winPercCell);
      newRow.appendChild(scoreCell);
      newRow.appendChild(goalsCell);
      newRow.appendChild(assistsCell);
      newRow.appendChild(savesCell);
      newRow.appendChild(shotsCell);

      tableBody.appendChild(newRow);
    }
  });
}
function populateTeamsTable(teamsArray, tableBodyId) {
  const tableBody = document.getElementById(tableBodyId);
    teamsArray.forEach((team, index) => {
      const newRow = document.createElement('tr');
      const teamCell = document.createElement('td');
      const newLink = document.createElement('a');
      const teamId = team.shortname;
      const regionID = team.region.toLowerCase();
      const regionCell = document.createElement('td');
      const ratingCell = document.createElement('td');
      const winPercCell = document.createElement('td');
      const scoreCell = document.createElement('td');
      const goalsCell = document.createElement('td');
      const assistsCell = document.createElement('td');
      const savesCell = document.createElement('td');
      const shotsCell = document.createElement('td');
      const playersOnTeam = players.filter(p => p.shortname === team.shortname);
      const numOfPlayersCell = document.createElement('td');
      let countOfPlayers = 0

      newRow.classList.add('player-data');
      newRow.setAttribute('data-player', `player${index + 1}`);
      newLink.textContent = team.name;
      newLink.href = `${path}/profile.html?name=${encodeURIComponent(team.shortname)}`;
      
      playersOnTeam.forEach((player) => {
          if(player){
            countOfPlayers += 1;
          } else {
          }
    })

    teamCell.appendChild(newLink);
    teamCell.id = teamId;
    regionCell.textContent = team.region;
    regionCell.id = regionID;
    ratingCell.textContent = team.rating;
    winPercCell.textContent = team.winPerc;
    numOfPlayersCell.textContent = countOfPlayers;
    if (team.gp != 0) {
      scoreCell.textContent = (team.score/team.gp).toFixed(0);
      goalsCell.textContent = (team.goals/team.gp).toFixed(2);
      assistsCell.textContent = (team.assists/team.gp).toFixed(2);
      savesCell.textContent = (team.saves/team.gp).toFixed(2);
      shotsCell.textContent = (team.shots/team.gp).toFixed(2);
    }  else {
      scoreCell.textContent = 0
      goalsCell.textContent = 0
      assistsCell.textContent = 0
      savesCell.textContent = 0
      shotsCell.textContent = 0
    }

    newRow.appendChild(teamCell);
    newRow.appendChild(regionCell);
    newRow.appendChild(ratingCell);
    newRow.appendChild(winPercCell);
    newRow.appendChild(scoreCell);
    newRow.appendChild(goalsCell);
    newRow.appendChild(assistsCell);
    newRow.appendChild(savesCell);
    newRow.appendChild(shotsCell);
    newRow.appendChild(numOfPlayersCell);

    // Add the newly created row to the table body
    tableBody.appendChild(newRow);
  });
}