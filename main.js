import { championshipPlayers, getPlayerScore, getTeamDetails, kickoffLANPlayers, major1Players, major2Players, regional1Players, regional2Players, regional3Players, regional4Players, regional5Players, regional6Players } from "./events.js";
import { members, prizes, players, teams, Regional1, Regional2, Regional3, Regional4, Regional5, Regional6 } from "./members.js";
import { deployTops } from "./stats.js";

export const year = '2026'
export const path = `/RLCS-${year}-Fantasy-Website`
export const path1 = ``// used for Mac dev
export const tops = ['score', 'goals', 'assists', 'saves', 'shots']
export const topsCharts = ['TopScores', 'TopGoals', 'TopAssists', 'TopSaves', 'TopShots']
export const points = {'matchups': [500], 'kickoff': [200], 'groups': [400], 'playin' : [200], 'playoff' : [400, 600]}
export const picks = {'kickoff': [7], 'major1': [8, 8, 3],  'major2': [12, 10, 3], 'championship': [10, 12, 8, 3]}
export const spread = [.20, .13, .09, .08, .07, .06, .06, .05, .05, .04, .04, .03, .03, .03, .02, .02]
export const dist = [.0, .4, .6]
export const amtAdded = 0;
export const majorPrize = 200
export const champPrize = 500
const CurrentForm = 'major1' // next form page for major event
const numOfMembers = members.length - 1
const amountPerMajor = ((amtAdded * dist[1]) + majorPrize) / 2;
const amountForChampionship = (amtAdded * dist[2]) + champPrize;
export let EventPoints = {
    'Regional1': [15, 10, 7, 7, 5, 5, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1],
    'Regional2': [18, 12, 8, 8, 6, 6, 4, 4, 2, 2, 2, 2, 1, 1, 1, 1],
    'Kickoff': ['Qualifies to Major 1', '', '', '', '', '', '', ''],
    'Major1': [30, 20, 14, 14, 10, 10, 6, 6, 5, 5, 5, 5, 3, 3, 3, 3],
    'Major2': [36, 24, 16, 16, 12, 12, 8, 8, 6, 6, 6, 6, 4, 4, 4, 4],
    'Champ': ['1st', '2nd', '3rd-4th', '3rd-4th', '5th-6th', '5th-6th', '7th-8th', '7th-8th', '9th-12th', '9th-12th', '9th-12th', '9th-12th', '13th-16th', '13th-16th', '13th-16th', '13th-16th', '17th-18th', '17th-18th', '19th-20th', '19th-20th'],
}
export const regions = [
  {reg: 'eu', spots: 5, chspots: 6, multiplier: 1},
  {reg: 'na', spots: 4, chspots: 5, multiplier: 1},
  {reg: 'sam', spots: 2, chspots: 3, multiplier: .9},
  {reg: 'mena', spots: 2, chspots: 3, multiplier: .9},
  {reg: 'oce', spots: 1, chspots: 1, multiplier: .8},
  {reg: 'apac', spots: 1, chspots: 1, multiplier: .7},
  {reg: 'ssa', spots: 1, chspots: 1, multiplier: .6},
]

window.addEventListener('load', function() {
  initialize()
  document.getElementById('year').innerHTML = `RLCS ${year}`
  if (window.location.pathname === `${path}/index.html`) {
    console.log('Home page has loaded!');
    document.getElementById('titleYear').innerHTML = `RLCS Fantasy ${year}`
    determineTotalScores()
    determinePlayerRating()
    deployHome()
    deployTops(players)
  } else if (window.location.pathname === `${path}/info.html`) {
    document.getElementById('numOfTeams').innerHTML = numOfMembers
    document.getElementById('amount_added').innerHTML = "$" + amtAdded
    determineSpread()
    deployPrizePoolInfo()
    KickoffPointsInfo()
    Major1PointsInfo()
    Major2PointsInfo()
    ChampionshipPointsInfo()
    console.log('Info page has loaded!');
  }
});

function initialize(){
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
  const menuList = document.getElementById("menuList")
  menuList.style.maxHeight = "0px";
  function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){menuList.style.maxHeight = "1500px";}
    else{menuList.style.maxHeight = "0px";}
  }
  const menu_button = document.getElementById('menuButton');
  menu_button.addEventListener('click', function() {toggleMenu()});
  teams.forEach(team => {
    team.gp = 0;
    team.wins = 0;
    team.score = 0;
    team.goals = 0;
    team.assists = 0;
    team.saves = 0;
    team.shots = 0;
    team.split1Pts = 0;
    team.split2Pts = 0;
    team.totalSeasonPts = 0;
  });
  players.forEach(player => {
    player.gp = 0;
    player.wins = 0;
    player.score = 0;
    player.goals = 0;
    player.assists = 0;
    player.saves = 0;
    player.shots = 0;
    player.rank = '';
    player.rating = 0;
  })
  members.forEach(member => {
    member.R1 = 0;
    member.R2 = 0;
    member.R3 = 0;
    member.R4 = 0;
    member.R5 = 0;
    member.R6 = 0;
    member.M1T = 0;
    member.M2T = 0;
    member.CHT = 0;
    member.S1 = 0;
    member.S2 = 0;
  })
}
export function determineTotalScores(){
  addPlayersScore(regional1Players)
  addPlayersScore(kickoffLANPlayers)
  addPlayersScore(regional2Players)
  addPlayersScore(regional3Players)
  addPlayersScore(major1Players)
  addPlayersScore(regional4Players)
  addPlayersScore(regional5Players)
  addPlayersScore(regional6Players)
  addPlayersScore(major2Players)
  addPlayersScore(championshipPlayers)
  members.forEach((id) =>{
    //Regionals
    if(id.shortname != 'plac'){
      for (let i = 0; i < Regional1[id.shortname].length-2; i++){
        id.R1 += getPlayerScore(Regional1[id.shortname][i], regional1Players);
        id.R2 += getPlayerScore(Regional2[id.shortname][i], regional2Players);
        id.R3 += getPlayerScore(Regional3[id.shortname][i], regional3Players);
        id.R4 += getPlayerScore(Regional4[id.shortname][i], regional4Players);
        id.R5 += getPlayerScore(Regional5[id.shortname][i], regional5Players);
        id.R6 += getPlayerScore(Regional6[id.shortname][i], regional6Players);
      }
    } else {
      for (let i = 0; i < Regional1[id.shortname].length; i++){
        id.R1 += getPlayerScore(Regional1[id.shortname][i], regional1Players);
        id.R2 += getPlayerScore(Regional2[id.shortname][i], regional2Players);
        id.R3 += getPlayerScore(Regional3[id.shortname][i], regional3Players);
        id.R4 += getPlayerScore(Regional4[id.shortname][i], regional4Players);
        id.R5 += getPlayerScore(Regional5[id.shortname][i], regional5Players);
        id.R6 += getPlayerScore(Regional6[id.shortname][i], regional6Players);
      }
    }
    //Kickoff
    id.KO *= points['kickoff'][0]*2
    //Major 1
    id.M1G *= points['groups'][0]
    id.M1PS *= points['playoff'][0]
    id.M1PF *= points['playoff'][1]
    id.M1T += (id.M1G + id.M1PS + id.M1PF)*3
    //Major 2
    id.M2G *= points['groups'][0]
    id.M2PS *= points['playoff'][0]
    id.M2PF *= points['playoff'][1]
    id.M1T += (id.M2G + id.M2PS + id.M2PF)*3
    //Championship
    id.CHPI *= points['playin'][0]
    id.CHG *= points['groups'][0] //Groups(switch from group stage to 4 groups)
    id.CHPS *= points['playoff'][0]
    id.CHPF *= points['playoff'][1] //playoffs
    id.CHT += (id.CHPI + id.CHG + id.CHPS + id.CHPF)*6
    //Split 1 and 2
    id.S1 += (id.R1 + id.R2 + id.R3 + id.M1T + id.KO)
    id.S2 += (id.R4 + id.R5 + id.R6 + id.M2T)
  })
}
export function determineRanks(arrayName, rating){
  arrayName.sort((a,b) => b.rating - a.rating)
  let high = arrayName[0].rating
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
export function determinePlayerRating(){
  players.forEach((id)=>{
    id.rating = getPlayerScore(id.player, players)
    id.rank = determineRanks(players, id.rating)
  })
}
export function KickoffPointsInfo(){
  document.getElementById('kickoffPicks').innerHTML = picks['kickoff'][0]
  document.getElementById('kickoffPoints').innerHTML = points['kickoff'][0]
  document.getElementById('kickoffTotal').innerHTML = picks['kickoff'][0] * points['kickoff'][0]
  document.getElementById('kickoffTotalMulti').innerHTML = points['kickoff'][0] * picks['kickoff'][0] * 2
}
export function Major1PointsInfo(){
  const M1groupsTotal = points['groups'][0] * picks['major1'][0]
  const M1playoffTotal = points['playoff'][0] * picks['major1'][1] + points['playoff'][1] * picks['major1'][2]
  const M1Total = (M1groupsTotal + M1playoffTotal) * 3
  document.getElementById('M1groupsQPicks').innerHTML = `(${picks['major1'][0]}) ` + points['groups'][0]
  document.getElementById('M1groupsTotal').innerHTML = M1groupsTotal
  document.getElementById('M1playoffsQPicks').innerHTML = `(${picks['major1'][1]}) ` + points['playoff'][0]
  document.getElementById('M1playoffsFPicks').innerHTML = `(${picks['major1'][2]}) ` + points['playoff'][1]
  document.getElementById('M1playoffsTotal').innerHTML = M1playoffTotal
  document.getElementById('M1totalMulti').innerHTML = M1Total
}
export function Major2PointsInfo(){
  const M2groupsTotal = points['groups'][0] * picks['major2'][0]
  const M2playoffTotal = points['playoff'][0] * picks['major2'][1] + points['playoff'][1] * picks['major2'][2]
  const M2Total = (M2groupsTotal + M2playoffTotal) * 3
  document.getElementById('M2groupsQPicks').innerHTML = `(${picks['major2'][0]}) ` + points['groups'][0]
  document.getElementById('M2groupsTotal').innerHTML = M2groupsTotal
  document.getElementById('M2playoffsQPicks').innerHTML = `(${picks['major2'][1]}) ` + points['playoff'][0]
  document.getElementById('M2playoffsFPicks').innerHTML = `(${picks['major2'][2]}) ` + points['playoff'][1]
  document.getElementById('M2playoffsTotal').innerHTML = M2playoffTotal
  document.getElementById('M2totalMulti').innerHTML = M2Total
}
export function ChampionshipPointsInfo(){
  const playinTotal = points['playin'][0] * picks['championship'][0]
  const CHgroupsTotal = points['groups'][0] * picks['championship'][1]
  const CHplayoffTotal = points['playoff'][0] * picks['championship'][2] + points['playoff'][1] * picks['championship'][3]
  const champTotal = (playinTotal + CHgroupsTotal + CHplayoffTotal) * 5
  document.getElementById('CPQPicks').innerHTML = `(${picks['championship'][0]}) ` + points['playin'][0]
  document.getElementById('CPTotal').innerHTML = playinTotal
  document.getElementById('CgroupsQPicks').innerHTML = `(${picks['championship'][1]}) ` + points['groups'][0]
  document.getElementById('CgroupsTotal').innerHTML = CHgroupsTotal
  document.getElementById('CplayoffsQPicks').innerHTML = `(${picks['championship'][2]}) ` + points['playoff'][0]
  document.getElementById('CplayoffsFPicks').innerHTML = `(${picks['championship'][3]}) ` + points['playoff'][1]
  document.getElementById('CplayoffsTotal').innerHTML = CHplayoffTotal
  document.getElementById('CtotalMulti').innerHTML = champTotal
}
function addPlayersScore(playersArray){
  playersArray.forEach((id)=>{
    const findPlayer = players.find(x => x.player === id.player)
    if(findPlayer){
      findPlayer.gp += id.gp
      findPlayer.wins += id.wins
      findPlayer.score += id.score
      findPlayer.goals += id.goals
      findPlayer.assists += id.assists
      findPlayer.saves += id.saves
      findPlayer.shots += id.shots
    }
  })
}
function deployHome(){
  members.sort((a,b)=> b.S1 - a.S1)
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
    if(id.shortname != 'plac'){
      tableBody.appendChild(newRow);
    }
  })
  members.forEach((id)=>{
    const tableBody = document.getElementById('lans');
    const newRow = document.createElement('tr');
    const memberLink = document.createElement('a');
    const koffTotal = document.createElement('td');
    const maj1Total = document.createElement('td');
    const maj2Total = document.createElement('td');
    const championshipTotal = document.createElement('td');
    
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
    
    newRow.appendChild(koffTotal)
    newRow.appendChild(maj1Total)
    newRow.appendChild(maj2Total)
    newRow.appendChild(championshipTotal)
    if(id.shortname != 'plac'){
      tableBody.appendChild(newRow);
    }
  })
  members.forEach((id)=>{
    // deploying scores to table
    const tableBody = document.getElementById('totals');
    const newRow = document.createElement('tr');
    const memberLink = document.createElement('a');
    const matchWins = document.createElement('td');
    const matchLosses = document.createElement('td');
    const split1Total = document.createElement('td');
    const split2Total = document.createElement('td');
    const championshipTotal = document.createElement('td');
    
    matchWins.id = id.shortname
    matchLosses.id = id.shortname
    split1Total.id = id.shortname
    split2Total.id = id.shortname
    championshipTotal.id = id.shortname

    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    matchWins.textContent = id.wins
    split1Total.textContent = id.S1
    split2Total.textContent = id.S2
    championshipTotal.textContent = id.CHT
    
    newRow.appendChild(matchWins);
    newRow.appendChild(split1Total)
    newRow.appendChild(split2Total)
    newRow.appendChild(championshipTotal)
    if(id.shortname != 'plac'){
      tableBody.appendChild(newRow);
    }
  })
  members.forEach((id) =>{
    const tableBody = document.getElementById('prizeTable');
    const newRow = document.createElement('tr');
    const matchupWins = document.createElement('td')
    const memberLink = document.createElement('a');
    const split1Winnings = document.createElement('td');
    const split2Winnings = document.createElement('td');
    const championshipWinnings = document.createElement('td');
    const totalWinnings = document.createElement('td');
    
    matchupWins.id = id.shortname
    split1Winnings.id = id.shortname
    split2Winnings.id = id.shortname
    championshipWinnings.id = id.shortname
    totalWinnings.id = id.shortname
    
    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    matchupWins.textContent = '$' + (id.wins * 10).toFixed(2)
    split1Winnings.textContent = "$" + (prizes[id.shortname][0]).toFixed(2)
    split2Winnings.textContent = "$" + (prizes[id.shortname][1]).toFixed(2)
    championshipWinnings.textContent = "$" + (prizes[id.shortname][2]).toFixed(2)
    totalWinnings.textContent = "$" + (id.wins * 10 + prizes[id.shortname][0] +prizes[id.shortname][1] +prizes[id.shortname][2]).toFixed(2)
    
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
function determineSpread(){
  let spreadSum = 0;
  for (let i = 0; i < spread.length; i++) {
      if (i >= numOfMembers){
          spreadSum += spread[i];
          spread[i] = 0;
      }
  }
  let spreadToAdd = spreadSum/numOfMembers
  for (let i = 0; i < numOfMembers; i++) {
      spread[i] += spreadToAdd;
  }
}
function deployPrizePoolInfo(){
    for (let i = 0; i < numOfMembers; i ++){
        const tableBody = document.getElementById('prize_pool');
        const newRow = document.createElement('tr');
        const place = document.createElement('td');
        const majorPerc = document.createElement('td');
        const championshipPerc = document.createElement('td');
        const percOfPP = document.createElement('td');
        place.textContent = i+1
        if (i < numOfMembers){
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
    for (let i = 0; i < numOfMembers; i ++){
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