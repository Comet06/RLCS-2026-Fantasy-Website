import { EventSums, splitSums, major1Rounds, major2Rounds, playerScores, members, teams, prizes, year, players, kickoffRounds } from "./current-page-data.js";
import { determineRegionalSums } from "./regionals.js";
import { determineMajorSums } from "./majors.js";
import { determineChampionshipSums } from "./championship.js";
import { deployTopPerformers } from "./stats.js";


export const path = `/RLCS-${year}-Fantasy-Website`
export const path1 = ``// used for Mac dev
window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/index.html` || window.location.pathname === `${path}/index2.html`) {
    deployLinks()
    menu()
    // 0 = split1, 1 = split2, 2 = championship
    // sortPlayerScores(0)
    document.getElementById('year').innerHTML = `RLCS ${year}`
    document.getElementById('titleYear').innerHTML = `RLCS Fantasy ${year}`
    deployPrize(prizes)
    determineRegionalSums()
    determineMajorSums()
    determineChampionshipSums()
    determineTotalScores()
    deployScoresS1()
    deployScoresS2()
    deployScoresS3()
    deployTopPerformers(players)
  } else if (window.location.pathname === `${path}/major_form.html`){
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    document.getElementById('scripts').innerHTML = `
      <script src="a-major-form.js"></script>
    `
    console.log('Bracket form page has loaded!')
  } else if (window.location.pathname === `${path}/championship_form.html`) {
      deployLinks()
      document.getElementById('year').innerHTML = `RLCS ${year}`
    }
});





// Info Page
const tops = ['score', 'goals', 'assists', 'saves', 'shots']
export const points = {'swiss': [200], 'playin' : [200, 300], 'groupA' : [300, 400], 'groupB' : [300, 400], 'playoff' : [400, 600]}
export const spread = [.20, .13, .09, .08, .07, .06, .06, .05, .05, .04, .04, .03, .03, .03, .02, .02]
export const regions = ['eu', 'na', 'oce', 'sam', 'mena', 'apac', 'ssa']
// Homepage
function determineTotalScores(){
  members.forEach((id)=>{
    splitSums[id.shortname][3] = splitSums[id.shortname][0] + splitSums[id.shortname][1] + splitSums[id.shortname][2] // Grand Total

    playerScores[id.shortname] = [EventSums[id.shortname][0], EventSums[id.shortname][1], EventSums[id.shortname][2], major1Rounds[id.shortname][2], splitSums[id.shortname][0], 
                                  EventSums[id.shortname][3], EventSums[id.shortname][4], EventSums[id.shortname][5], major2Rounds[id.shortname][2], splitSums[id.shortname][1], splitSums[id.shortname][2], splitSums[id.shortname][3], kickoffRounds[id.shortname][0]];
  })
}
function sortPlayerScores(index){
  determineRegionalSums()
  determineMajorSums()
  determineChampionshipSums()
  determineTotalScores()
  const split1Sorted = Object.entries(splitSums);
  split1Sorted.sort((a, b) => b[1][index] - a[1][index]);
  const sortedSplitSums = Object.fromEntries(split1Sorted);
  console.log(sortedSplitSums);
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
}
function deployScoresS3(){
  members.forEach((id)=>{
    // deploying scores to table
    const tableBody = document.getElementById('totalScoresS3');
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
}
// Site Wide
export function deployLinks(){
  const profileHTML = `
    <nav class="navbar">
      <h1 id="year"></h1>
      <ul class="nav-links" id="menuList">
        <li><a href="index.html">Home</a></li>
        <li class="dropdown">
          <a href="#">Events</a>
            <div class="dropdown-content">
              <a href="regional.html?name=${encodeURIComponent('reg1')}">Regional 1</a>
              <a href="kickoff_lan.html?name=${encodeURIComponent('koff')}">Kickoff LAN</a>
              <a href="regional.html?name=${encodeURIComponent('reg2')}">Regional 2</a>
              <a href="regional.html?name=${encodeURIComponent('reg3')}">Regional 3</a>
              <a href="major.html?name=${encodeURIComponent('maj1')}">Major 1</a>
              <a href="regional.html?name=${encodeURIComponent('reg4')}">Regional 4</a>
              <a href="regional.html?name=${encodeURIComponent('reg5')}">Regional 5</a>
              <a href="regional.html?name=${encodeURIComponent('reg6')}">Regional 6</a>
              <a href="major.html?name=${encodeURIComponent('maj2')}">Major 2</a>
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
        <li><a href="stats.html?name=${encodeURIComponent('player')}">Player Stats</a></li>
        <li><a href="stats.html?name=${encodeURIComponent('team')}">Team Stats</a></li>
        <li><a href="teams_rankings.html">Rankings</a></li>
        <li class="dropdown">
          <a href="#">Fantasy Seasons</a>
            <div class="dropdown-content">
                <a href="https://comet06.github.io/RLCS-2025-Fantasy-Website/index.html">2025</a>
                <a href="https://comet06.github.io/RLCS-2026-Fantasy-Website/index.html">2026</a>
            </div>
        </li>
        <!-- <li class="dropdown">
          <a href="#">Forms</a>
            <div class="dropdown-content">
                <a href="major_form.html">Major Form</a>
                <a href="championship_form.html">Champ Form</a>
            </div>
        </li>-->
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
export function deployTops(event){
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