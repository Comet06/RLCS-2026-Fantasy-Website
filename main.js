import { playerScores, members, teams, prizes, year, players, 
  Regional1, Regional2, Regional3, Regional4, Regional5, Regional6, Rounds, majorEvents, Sums} from "./current-fantasy-members.js";
import { deployTops } from "./stats.js";


export const path = `/RLCS-${year}-Fantasy-Website`
export const path1 = ``// used for Mac dev
window.addEventListener('load', function() {
  deployLinks()
  document.getElementById('year').innerHTML = `RLCS ${year}`
  menu()
  determineTotalScores()
  if (window.location.pathname === `${path}/index.html`) {
    document.getElementById('titleYear').innerHTML = `RLCS Fantasy ${year}`
    deployHome(prizes)
    deployTops(players)
  } else if (window.location.pathname === `${path}/form_major.html`){
    console.log('Major Bracket form page has loaded!')
  } else if (window.location.pathname === `${path}/form_championship.html`) {
    console.log('Championship Bracket form page has loaded!')
  }
});


// Info Page
export const tops = ['score', 'goals', 'assists', 'saves', 'shots']
export const topsCharts = ['TopScores', 'TopGoals', 'TopAssists', 'TopSaves', 'TopShots']
export const points = {'kickoff': [100],'groups': [400], 'playin' : [100, 200], 'playoff' : [400, 600]}
export const spread = [.20, .13, .09, .08, .07, .06, .06, .05, .05, .04, .04, .03, .03, .03, .02, .02]
export const regions = ['eu', 'na', 'oce', 'sam', 'mena', 'apac', 'ssa']
// Homepage
export function determineTotalScores(){
  members.forEach((id) =>{//Regionals
    for (let i = 1; i < Regional1[id.shortname].length-1; i += 2){//Regional sum of all your players not including sub(-1)
      Sums[id.shortname][0] += Regional1[id.shortname][i];
      Sums[id.shortname][1] += Regional2[id.shortname][i];
      Sums[id.shortname][2] += Regional3[id.shortname][i];
      Sums[id.shortname][3] += Regional4[id.shortname][i];
      Sums[id.shortname][4] += Regional5[id.shortname][i];
      Sums[id.shortname][5] += Regional6[id.shortname][i];
    }
    Sums[id.shortname][6] += Sums[id.shortname][0] + Sums[id.shortname][1] + Sums[id.shortname][2]
    Sums[id.shortname][7] += Sums[id.shortname][3] + Sums[id.shortname][4] + Sums[id.shortname][5]
  })
  members.forEach((id) =>{//Majors and kickoff
    Rounds[id.shortname][0] = majorEvents[`${id.shortname}`][0]*points['kickoff'][0]*2

    Rounds[id.shortname][1] = majorEvents[`${id.shortname}`][1] * points['groups'][0] //Groups (take index of event picks and multiplies the point value)
    Rounds[id.shortname][2] = majorEvents[`${id.shortname}`][2] * points['playoff'][0] + majorEvents[`${id.shortname}`][3] * points['playoff'][1] //Second number is the points worth per guess
    Rounds[id.shortname][3] = (Rounds[id.shortname][1] + Rounds[id.shortname][2])*3 //Total

    Rounds[id.shortname][4] = majorEvents[`${id.shortname}`][4] * points['groups'][0] //Groups
    Rounds[id.shortname][5] = majorEvents[`${id.shortname}`][5] * points['playoff'][0] + majorEvents[`${id.shortname}`][6] * points['playoff'][1] //Second number is the points worth per guess
    Rounds[id.shortname][6] = (Rounds[id.shortname][4] + Rounds[id.shortname][5])*3//Total

    Sums[id.shortname][6] += Rounds[id.shortname][0] + Rounds[id.shortname][3] //Split 1 Total
    Sums[id.shortname][7] += Rounds[id.shortname][6] //Split 2 Total
  })
  members.forEach((id)=>{//Championship
    Rounds[id.shortname][7] = majorEvents[`${id.shortname}`][7] * points['playin'][0] + majorEvents[`${id.shortname}`][8] * points['playin'][1] //playins
    Rounds[id.shortname][8] = majorEvents[`${id.shortname}`][9] * points['groups'][0] //Groups(switch from group stage to 4 groups)
    Rounds[id.shortname][9] = majorEvents[`${id.shortname}`][10] * points['playoff'][0] + majorEvents[`${id.shortname}`][11] * points['playoff'][1] //playoffs
    Rounds[id.shortname][10] = (Rounds[id.shortname][7] + Rounds[id.shortname][8] + Rounds[id.shortname][9])*5 //Total of all championship rounds

    Sums[id.shortname][8] += Rounds[id.shortname][10] //Total of all championship rounds
  })
  members.forEach((id)=>{//Totals
    Sums[id.shortname][9] += Sums[id.shortname][6] + Sums[id.shortname][7] + Sums[id.shortname][8] // Grand Total

    playerScores[id.shortname] = [Sums[id.shortname][0], Sums[id.shortname][1], Sums[id.shortname][2], Rounds[id.shortname][3], Sums[id.shortname][6], 
                                  Sums[id.shortname][3], Sums[id.shortname][4], Sums[id.shortname][5], Rounds[id.shortname][6], Sums[id.shortname][7], Sums[id.shortname][8], Sums[id.shortname][9], Rounds[id.shortname][0]];
  })
}
function deployHome(pool){
  members.forEach((id)=>{
    const tableBody = document.getElementById('split1');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const reg1Total = document.createElement('td');
    const koffTotal = document.createElement('td');
    const reg2Total = document.createElement('td');
    const reg3Total = document.createElement('td');
    const maj1Total = document.createElement('td');
    
    teamName.id = id.shortname
    reg1Total.id = id.shortname
    koffTotal.id = id.shortname
    reg2Total.id = id.shortname
    reg3Total.id = id.shortname
    maj1Total.id = id.shortname

    teamName.textContent = id.name
    reg1Total.textContent = playerScores[id.shortname][0]
    koffTotal.textContent = playerScores[id.shortname][12]
    reg2Total.textContent = playerScores[id.shortname][1]
    reg3Total.textContent = playerScores[id.shortname][2]
    maj1Total.textContent = playerScores[id.shortname][3]
    

    newRow.appendChild(teamName);
    newRow.appendChild(reg1Total)
    newRow.appendChild(koffTotal)
    newRow.appendChild(reg2Total)
    newRow.appendChild(reg3Total)
    newRow.appendChild(maj1Total)
    
    tableBody.appendChild(newRow);
  })
  members.forEach((id)=>{
    // deploying scores to table
    const tableBody = document.getElementById('split2');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const reg4Total = document.createElement('td');
    const reg5Total = document.createElement('td');
    const reg6Total = document.createElement('td');
    const maj2Total = document.createElement('td');
    
    teamName.id = id.shortname
    reg4Total.id = id.shortname
    reg5Total.id = id.shortname
    reg6Total.id = id.shortname
    maj2Total.id = id.shortname

    teamName.textContent = id.name
    reg4Total.textContent = playerScores[id.shortname][5]
    reg5Total.textContent = playerScores[id.shortname][6]
    reg6Total.textContent = playerScores[id.shortname][7]
    maj2Total.textContent = playerScores[id.shortname][8]
    

    newRow.appendChild(teamName);
    newRow.appendChild(reg4Total)
    newRow.appendChild(reg5Total)
    newRow.appendChild(reg6Total)
    newRow.appendChild(maj2Total)
    
    tableBody.appendChild(newRow);
  })
  members.forEach((id)=>{
    // deploying scores to table
    const tableBody = document.getElementById('totals');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const split1Total = document.createElement('td');
    const split2Total = document.createElement('td');
    const championshipTotal = document.createElement('td');
    const total = document.createElement('td');
    
    teamName.id = id.shortname
    split1Total.id = id.shortname
    split2Total.id = id.shortname
    championshipTotal.id = id.shortname
    total.id = id.shortname

    teamName.textContent = id.name
    split1Total.textContent = playerScores[id.shortname][4]
    split2Total.textContent = playerScores[id.shortname][9]
    championshipTotal.textContent = playerScores[id.shortname][10]
    total.textContent = playerScores[id.shortname][11]
    

    newRow.appendChild(teamName);
    newRow.appendChild(split1Total)
    newRow.appendChild(split2Total)
    newRow.appendChild(championshipTotal)
    newRow.appendChild(total)
    
    tableBody.appendChild(newRow);
  })
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
// Site Wide
export function deployLinks(){
  const profileHTML = `
    <nav class="navbar">
      <h1 id="year"></h1>
      <ul class="nav-links" id="menuList">
        <li><a href="index.html">Home</a></li>
        <li class="dropdown">
          <a href="#">Main Events</a>
            <div class="dropdown-content">
              <a href="regional.html?name=${encodeURIComponent('Regional 1')}">Regional 1</a>
              <a href="kickoff_lan.html?name=${encodeURIComponent('Kickoff LAN')}">Kickoff LAN</a>
              <a href="regional.html?name=${encodeURIComponent('Regional 2')}">Regional 2</a>
              <a href="regional.html?name=${encodeURIComponent('Regional 3')}">Regional 3</a>
              <a href="major.html?name=${encodeURIComponent('Major 1')}">Major 1</a>
              <a href="regional.html?name=${encodeURIComponent('Regional 4')}">Regional 4</a>
              <a href="regional.html?name=${encodeURIComponent('Regional 5')}">Regional 5</a>
              <a href="regional.html?name=${encodeURIComponent('Regional 6')}">Regional 6</a>
              <a href="major.html?name=${encodeURIComponent('Major 2')}">Major 2</a>
              <a href="championship.html">Championship</a>
            </div>
        </li>
        <li class="dropdown">
          <a href="#">Seasons 1-9</a>
            <div class="dropdown-content">
              <a href="stats_legacy.html?name=${encodeURIComponent('season1')}">Season 1</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season2')}">Season 2</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season3')}">Season 3</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season4')}">Season 4</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season5')}">Season 5</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season6')}">Season 6</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season7')}">Season 7</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season8')}">Season 8</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season9')}">Season 9</a>
            </div>
        </li>
        <li class="dropdown">
          <a href="#">Seasons X+</a>
            <div class="dropdown-content">
              <a href="stats_legacy.html?name=${encodeURIComponent('seasonX')}">Season X</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season21-22')}">Season 21-22</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season22-23')}">Season 22-23</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season24')}">Season 24</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('season25')}">Season 25</a>
            </div>
        </li>
        <li class="dropdown">
          <a href="#">Fantasy Seasons</a>
            <div class="dropdown-content">
                <a href="https://comet06.github.io/RLCS-2025-Fantasy-Website/index.html">2025</a>
                <a href="https://comet06.github.io/RLCS-2026-Fantasy-Website/index.html">2026</a>
            </div>
        </li>
        <li><a href="form_major.html">Bracket Form</a></li>
        <li><a href="stats.html?name=${encodeURIComponent('player')}">Player Stats</a></li>
        <li><a href="stats.html?name=${encodeURIComponent('team')}">Team Stats</a></li>
        <li><a href="teams_rankings.html">Rankings</a></li>
        <li><a href="info.html">Rules</a></li>
      </ul>
      <div class="menu-icon">
          <button id="menuButton">Menu</button>
      </div>
    </nav>
  `;
  document.getElementById(`Links`).innerHTML = profileHTML;
}
export function menu(){
  const menuList = document.getElementById("menuList")
  menuList.style.maxHeight = "0px";
  function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){menuList.style.maxHeight = "1500px";}
    else{menuList.style.maxHeight = "0px";}
  }
  const menu_button = document.getElementById('menuButton');
  menu_button.addEventListener('click', function() {toggleMenu()});
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