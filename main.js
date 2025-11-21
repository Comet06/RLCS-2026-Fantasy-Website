import { members, prizes, year, players, Regional1, Regional2, Regional3, Regional4, Regional5, Regional6} from "./current-fantasy-members.js";
import { getPlayerScore, regional1Players, regional2Players, regional3Players, regional4Players, regional5Players, regional6Players } from "./events.js";
import { deployTops } from "./stats.js";
const CurrentForm = 'kickoff' // next form page for major event

export const path = `/RLCS-${year}-Fantasy-Website`
export const path1 = ``// used for Mac dev
window.addEventListener('load', function() {
  deployLinks()
  menu()
  document.getElementById('year').innerHTML = `RLCS ${year}`
  if (window.location.pathname === `${path}/index.html`) {
    document.getElementById('titleYear').innerHTML = `RLCS Fantasy ${year}`
    determineTotalScores()
    deployHome()
    deployTops(players)
  }
});


// Info Page
export const tops = ['score', 'goals', 'assists', 'saves', 'shots']
export const topsCharts = ['TopScores', 'TopGoals', 'TopAssists', 'TopSaves', 'TopShots']
export const points = {'matchups': [500], 'kickoff': [200],'groups': [400], 'playin' : [100, 200], 'playoff' : [400, 600]}
export const spread = [.20, .13, .09, .08, .07, .06, .06, .05, .05, .04, .04, .03, .03, .03, .02, .02]
export const regions = [
  {reg: 'eu', spots: 4, chspots: 6},
  {reg: 'na', spots: 5, chspots: 5},
  {reg: 'oce', spots: 1, chspots: 1},
  {reg: 'sam', spots: 2, chspots: 3},
  {reg: 'mena', spots: 2, chspots: 3},
  {reg: 'apac', spots: 1, chspots: 1},
  {reg: 'ssa', spots: 1, chspots: 1},
]
// Homepage
export function determineTotalScores(){
  members.forEach((id) =>{
    //Regionals
    for (let i = 0; i < Regional1[id.shortname].length-2; i++){
      id.R1 += getPlayerScore(Regional1[id.shortname][i], regional1Players);
      id.R2 += getPlayerScore(Regional2[id.shortname][i], regional2Players);
      id.R3 += getPlayerScore(Regional3[id.shortname][i], regional3Players);
      id.R4 += getPlayerScore(Regional4[id.shortname][i], regional4Players);
      id.R5 += getPlayerScore(Regional5[id.shortname][i], regional5Players);
      id.R6 += getPlayerScore(Regional6[id.shortname][i], regional6Players);
    }
    //Kickoff
    id.KO += id.KO * points['kickoff'][0]*2
    //Major 1
    id.M1G += id.M1G * points['groups'][0]
    id.M1PS += id.M1PS * points['playoff'][0]
    id.M1PF += id.M1PF * points['playoff'][1]
    id.M1T += (id.M1G + id.M1PS + id.M1PF)*3
    //Major 2
    id.M2G += id.M2G * points['groups'][0]
    id.M2PS += id.M2PS * points['playoff'][0]
    id.M2PF += id.M2PF * points['playoff'][1]
    id.M1T += (id.M2G + id.M2PS + id.M2PF)*3
    //Championship
    id.CHPI = id.CHPI * points['playin'][0]
    id.CHG += id.CHG * points['groups'][0] //Groups(switch from group stage to 4 groups)
    id.CHPS += id.CHPS * points['playoff'][0]
    id.CHPF += id.CHPF * points['playoff'][1] //playoffs
    id.CHT += (id.CHPI + id.CHG + id.CHPS + id.CHPF)*6
    //Split 1 and 2
    id.S1 += (id.R1 + id.R2 + id.R3 + id.M1T + id.KO)
    id.S2 += (id.R4 + id.R5 + id.R6 + id.M2T)
  })
}
function deployHome(){
  members.sort((a,b)=> a.split1loss - b.split1loss)
  members.sort((a,b)=> b.split1wins - a.split1wins)
  members.forEach((id)=>{
    const tableBody = document.getElementById('split1');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const memberLink = document.createElement('a');
    const reg1Total = document.createElement('td');
    const reg2Total = document.createElement('td');
    const reg3Total = document.createElement('td');
    const reg4Total = document.createElement('td');
    const reg5Total = document.createElement('td');
    const reg6Total = document.createElement('td');
    
    teamName.id = id.shortname
    reg1Total.id = id.shortname
    reg2Total.id = id.shortname
    reg3Total.id = id.shortname
    reg4Total.id = id.shortname
    reg5Total.id = id.shortname
    reg6Total.id = id.shortname

    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    reg1Total.textContent = id.R1
    reg2Total.textContent = id.R2
    reg3Total.textContent = id.R3
    reg4Total.textContent = id.R4
    reg5Total.textContent = id.R5
    reg6Total.textContent = id.R6
    
    teamName.appendChild(memberLink)
    newRow.appendChild(teamName);
    newRow.appendChild(reg1Total)
    newRow.appendChild(reg2Total)
    newRow.appendChild(reg3Total)
    newRow.appendChild(reg4Total)
    newRow.appendChild(reg5Total)
    newRow.appendChild(reg6Total)
    tableBody.appendChild(newRow);
  })
  members.forEach((id)=>{
    const tableBody = document.getElementById('lans');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const memberLink = document.createElement('a');
    const koffTotal = document.createElement('td');
    const maj1Total = document.createElement('td');
    const maj2Total = document.createElement('td');
    const championshipTotal = document.createElement('td');
    
    teamName.id = id.shortname
    koffTotal.id = id.shortname
    maj1Total.id = id.shortname
    maj2Total.id = id.shortname
    championshipTotal.id = id.shortname

    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    koffTotal.textContent = id.KO
    maj1Total.textContent = id.M1T
    maj2Total.textContent = id.M2T
    championshipTotal.textContent = id.CHT
    

    teamName.appendChild(memberLink)
    // newRow.appendChild(teamName);
    newRow.appendChild(koffTotal)
    newRow.appendChild(maj1Total)
    newRow.appendChild(maj2Total)
    newRow.appendChild(championshipTotal)
    tableBody.appendChild(newRow);
  })
  members.forEach((id)=>{
    // deploying scores to table
    const tableBody = document.getElementById('totals');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const memberLink = document.createElement('a');
    const matchWins = document.createElement('td');
    const matchLosses = document.createElement('td');
    const split1Total = document.createElement('td');
    const split2Total = document.createElement('td');
    const championshipTotal = document.createElement('td');
    
    teamName.id = id.shortname
    matchWins.id = id.shortname
    matchLosses.id = id.shortname
    split1Total.id = id.shortname
    split2Total.id = id.shortname
    championshipTotal.id = id.shortname

    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    matchWins.textContent = id.split1wins + id.split2wins + id.champwins
    split1Total.textContent = id.S1
    split2Total.textContent = id.S2
    championshipTotal.textContent = id.CHT
    

    teamName.appendChild(memberLink)
    // newRow.appendChild(teamName);
    newRow.appendChild(matchWins);
    newRow.appendChild(split1Total)
    newRow.appendChild(split2Total)
    newRow.appendChild(championshipTotal)
    tableBody.appendChild(newRow);
  })
  members.forEach((id) =>{
    const tableBody = document.getElementById('prizeTable');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const matchupWins = document.createElement('td')
    const memberLink = document.createElement('a');
    const split1Winnings = document.createElement('td');
    const split2Winnings = document.createElement('td');
    const championshipWinnings = document.createElement('td');
    const totalWinnings = document.createElement('td');
    
    teamName.id = id.shortname
    matchupWins.id = id.shortname
    split1Winnings.id = id.shortname
    split2Winnings.id = id.shortname
    championshipWinnings.id = id.shortname
    totalWinnings.id = id.shortname
    
    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    matchupWins.textContent = '$' + ((id.split1wins * 10) + (id.split2wins * 10)).toFixed(2)
    split1Winnings.textContent = "$" + (prizes[id.shortname][0]).toFixed(2)
    split2Winnings.textContent = "$" + (prizes[id.shortname][1]).toFixed(2)
    championshipWinnings.textContent = "$" + (prizes[id.shortname][2]).toFixed(2)
    totalWinnings.textContent = "$" + (prizes[id.shortname][0] +prizes[id.shortname][1] +prizes[id.shortname][2]).toFixed(2)
    

    teamName.appendChild(memberLink)
    // newRow.appendChild(teamName);
    newRow.appendChild(matchupWins);
    newRow.appendChild(split1Winnings);
    newRow.appendChild(split2Winnings);
    newRow.appendChild(championshipWinnings);
    newRow.appendChild(totalWinnings);
    
    if(id.shortname != 'plac'){
      tableBody.appendChild(newRow);
    }
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
              <a href="event.html?name=${encodeURIComponent('Regional 1')}">Regional 1</a>
              <a href="event.html?name=${encodeURIComponent('Kickoff LAN')}">Kickoff LAN</a>
              <a href="event.html?name=${encodeURIComponent('Regional 2')}">Regional 2</a>
              <a href="event.html?name=${encodeURIComponent('Regional 3')}">Regional 3</a>
              <a href="event.html?name=${encodeURIComponent('Major 1')}">Major 1</a>
              <a href="event.html?name=${encodeURIComponent('Regional 4')}">Regional 4</a>
              <a href="event.html?name=${encodeURIComponent('Regional 5')}">Regional 5</a>
              <a href="event.html?name=${encodeURIComponent('Regional 6')}">Regional 6</a>
              <a href="event.html?name=${encodeURIComponent('Major 2')}">Major 2</a>
              <a href="event.html?name=${encodeURIComponent('Championship')}">Championship</a>
            </div>
        </li>
        <li class="dropdown">
          <a href="#">Seasons 1-9</a>
            <div class="dropdown-content">
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 1')}">Season 1</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 2')}">Season 2</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 3')}">Season 3</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 4')}">Season 4</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 5')}">Season 5</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 6')}">Season 6</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 7')}">Season 7</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 8')}">Season 8</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 9')}">Season 9</a>
            </div>
        </li>
        <li class="dropdown">
          <a href="#">Seasons X+</a>
            <div class="dropdown-content">
              <a href="stats_legacy.html?name=${encodeURIComponent('Season X')}">Season X</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 21-22')}">Season 21-22</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 22-23')}">Season 22-23</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 24')}">Season 24</a>
              <a href="stats_legacy.html?name=${encodeURIComponent('Season 25')}">Season 25</a>
            </div>
        </li>
        <li class="dropdown">
          <a href="#">Fantasy Seasons</a>
            <div class="dropdown-content">
                <a href="https://comet06.github.io/RLCS-2025-Fantasy-Website/index.html">2025</a>
                <a href="https://comet06.github.io/RLCS-2026-Fantasy-Website/index.html">2026</a>
            </div>
        </li>
        <li><a href="form_${CurrentForm}.html?name=${encodeURIComponent(`${CurrentForm}`)}"">Bracket Form</a></li>
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