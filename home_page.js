import { points } from "./info.js";
import { ChampionshipBracket } from "./brackets.js";
import { players } from "./player_data.js"

export const memberNames = ['Flip Lord', 'Doofenschmirtz Inc.', 'Goofy Goobers', '24 Karat Gold', 'Skibideeznuts', 'Team Canada', 'Potus', 'Brother Yuri', 'Mahtoose', 'Dwayne']
export const playerIDs = ['flip', 'doof', 'goof', 'gold', 'skib', 'cana', 'pots', 'yuri', 'maht', 'sock'] //Potentials: , 'juno', 'kids', 

let Regional1 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
}
let Regional2 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
}
let Regional3 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
}
let Major1 = {
  'flip' : [0],
  'doof' : [0],
  'goof' : [0],
  'gold' : [0],
  'skib' : [0],
  'cana' : [0],
  'pots' : [0],
  'yuri' : [0],
  'maht' : [0],
  'sock' : [0],
}
let Regional4 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
}
let Regional5 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
}
let Regional6 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
}
let Major2 = {
  'flip' : [0],
  'doof' : [0],
  'goof' : [0],
  'gold' : [0],
  'skib' : [0],
  'cana' : [0],
  'pots' : [0],
  'yuri' : [0],
  'maht' : [0],
  'sock' : [0],
}

let EventSums = {
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
  'sock' : [0, 0, 0, 0, 0, 0]
}
let splitSums = {
  // split 1/2, Championship
  'flip' : [0, 0, 0],
  'doof' : [0, 0, 0],
  'goof' : [0, 0, 0],
  'gold' : [0, 0, 0],
  'skib' : [0, 0, 0],
  'cana' : [0, 0, 0],
  'pots' : [0, 0, 0],
  'yuri' : [0, 0, 0],
  'maht' : [0, 0, 0],
  'sock' : [0, 0, 0]
}
let champRounds = {
  // this is for calculating the totals for playin, groupA, groupB, playoffs, total *****Do not manipulate this data*****
  'flip' : [0, 0, 0, 0, 0],
  'doof' : [0, 0, 0, 0, 0],
  'goof' : [0, 0, 0, 0, 0],
  'gold' : [0, 0, 0, 0, 0],
  'skib' : [0, 0, 0, 0, 0],
  'cana' : [0, 0, 0, 0, 0],
  'pots' : [0, 0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0, 0],
  'maht' : [0, 0, 0, 0, 0],
  'sock' : [0, 0, 0, 0, 0]
}
let Championship = {
  // Update this to make changes to Championship page
  //(max): PISemi(6), PIQuals(4), GASemi(6), GAQuals(4), GBSemi(6), GBQuals(4), POSemi(8), POFinals(3)
  'flip' : [0, 0, 0, 0, 0, 0, 0, 0],
  'doof' : [0, 0, 0, 0, 0, 0, 0, 0],
  'goof' : [0, 0, 0, 0, 0, 0, 0, 0],
  'gold' : [0, 0, 0, 0, 0, 0, 0, 0],
  'skib' : [0, 0, 0, 0, 0, 0, 0, 0],
  'cana' : [0, 0, 0, 0, 0, 0, 0, 0],
  'pots' : [0, 0, 0, 0, 0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0, 0, 0, 0, 0],
  'maht' : [0, 0, 0, 0, 0, 0, 0, 0],
  'sock' : [0, 0, 0, 0, 0, 0, 0, 0]
}

let playerScores = {
  'flip' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'doof' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'goof' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'gold' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'skib' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'cana' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'pots' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'maht' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'sock' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};


let path1 = '/RLCS-2026-Fantasy-Website'
let path = ''
window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/index.html`) {
    console.log('Index page has loaded!');
    deployScores()
  } else if (window.location.pathname === `${path}/regional_1.html`) {
    console.log('Regional 1 page has loaded!');
    deployReg1()
  } else if (window.location.pathname === `${path}/regional_2.html`) {
    console.log('Regional 2 page has loaded!');
    deployReg2()
  } else if (window.location.pathname === `${path}/regional_3.html`) {
    console.log('Regional 3 page has loaded!');
    deployReg3()
  } else if (window.location.pathname === `${path}/major_1.html`) {
    console.log('Major 1 page has loaded!');
    deployMaj1()
  } else if (window.location.pathname === `${path}/regional_4.html`) {
    console.log('Regional 4 page has loaded!');
    deployReg4()
  } else if (window.location.pathname === `${path}/regional_5.html`) {
    console.log('Regional 5 page has loaded!');
    deployReg5()
  } else if (window.location.pathname === `${path}/regional_6.html`) {
    console.log('Regional 6 page has loaded!');
    deployReg6()
  } else if (window.location.pathname === `${path}/major_2.html`) {
    console.log('Major 2 page has loaded!');
    deployMaj2()
  } else if (window.location.pathname === `${path}/championship.html`) {
    console.log('Championship page has loaded!');
    deployChamp()
  } else {
    console.log("main event listener is working but nothing else is")
  }
});

function deployScores() {
  console.log('homepage script is working')

  playerIDs.forEach((id)=>{
  //adding regional points from each player into event sums
    for (let i = 3; i < 12; i += 4) {
      EventSums[id][0] += Regional1[id][i];
      EventSums[id][1] += Regional2[id][i];
      EventSums[id][2] += Regional3[id][i];
      EventSums[id][3] += Regional4[id][i];
      EventSums[id][4] += Regional5[id][i];
      EventSums[id][5] += Regional6[id][i];
    }
  });

  // adding each split event up into one sum for prize distribution
  playerIDs.forEach((id)=>{
    splitSums[id][0] = EventSums[id][0] + EventSums[id][1] + EventSums[id][2] + Major1[id][0]*3
    splitSums[id][1] = EventSums[id][3] + EventSums[id][4] + EventSums[id][5] + Major2[id][0]*3
  });

  // Adding all championship points into splitSums[2]
  for (let i = 0; i < 5; i++) {
    playerIDs.forEach((id)=>{
      splitSums[id][2] += champRounds[id][i]
    });
  }

  // Updating Home Page Scores
  playerIDs.forEach((id)=>{
    playerScores[id] = [EventSums[id][0], EventSums[id][1], EventSums[id][2], Major1[id][0]*3, splitSums[id][0], 
                        EventSums[id][3], EventSums[id][4], EventSums[id][5], Major2[id][0]*3, splitSums[id][1], 
                        splitSums[id][2]*5, splitSums[id][0] + splitSums[id][1] + splitSums[id][2]*5];
  });
  for (const playerName in playerScores) {
    if (playerScores.hasOwnProperty(playerName)) {
      const statsArray = playerScores[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);

      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}

function deployReg1(){
  console.log('reg1 function working')
  playerIDs.forEach((id)=>{
    for (let i = 0; i < 12; i += 4){
      Regional1[id][i+1] = getTeam(players, Regional1[id][i])
      Regional1[id][i+2] = getRegion(players, Regional1[id][i])
  }})
  for (const playerName in Regional1) {
    if (Regional1.hasOwnProperty(playerName)) {
      const statsArray = Regional1[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployReg2(){
  console.log('reg2 function working')
  playerIDs.forEach((id)=>{
  for (let i = 0; i < 13; i += 4){
    Regional2[id][i+1] = getTeam(players, Regional2[id][i])
    Regional2[id][i+2] = getRegion(players, Regional2[id][i])
  }})
  for (const playerName in Regional2) {
    if (Regional2.hasOwnProperty(playerName)) {
      const statsArray = Regional2[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployReg3(){
  console.log('reg3 function working')
  playerIDs.forEach((id)=>{
  for (let i = 0; i < 13; i += 4){
    Regional3[id][i+1] = getTeam(players, Regional3[id][i])
    Regional3[id][i+2] = getRegion(players, Regional3[id][i])
  }})
  for (const playerName in Regional3) {
    if (Regional3.hasOwnProperty(playerName)) {
      const statsArray = Regional3[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployMaj1(){
  console.log('major 1 function working')
  for (const playerName in Major1) {
    if (Major1.hasOwnProperty(playerName)) {
      const statsArray = Major1[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}

function deployReg4(){
  console.log('reg4 function working')
  playerIDs.forEach((id)=>{
  for (let i = 0; i < 13; i += 4){
    Regional4[id][i+1] = getTeam(players, Regional4[id][i])
    Regional4[id][i+2] = getRegion(players, Regional4[id][i])
  }})
  for (const playerName in Regional4) {
    if (Regional4.hasOwnProperty(playerName)) {
      const statsArray = Regional4[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployReg5(){
  console.log('reg5 function working')
  playerIDs.forEach((id)=>{
  for (let i = 0; i < 13; i += 4){
    Regional5[id][i+1] = getTeam(players, Regional5[id][i])
    Regional5[id][i+2] = getRegion(players, Regional5[id][i])
  }})
  for (const playerName in Regional5) {
    if (Regional5.hasOwnProperty(playerName)) {
      const statsArray = Regional5[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployReg6(){
  console.log('reg6 function working')
  playerIDs.forEach((id)=>{
  for (let i = 0; i < 13; i += 4){
    Regional6[id][i+1] = getTeam(players, Regional6[id][i])
    Regional6[id][i+2] = getRegion(players, Regional6[id][i])
  }})
  for (const playerName in Regional6) {
    if (Regional6.hasOwnProperty(playerName)) {
      const statsArray = Regional6[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployMaj2(){
  console.log('major 2 function working')
  for (const playerName in Major2) {
    if (Major2.hasOwnProperty(playerName)) {
      const statsArray = Major2[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}

function deployChamp(){
  console.log('champ function working')
  // ChampionshipBracket()
  playerIDs.forEach((id)=>{
    champRounds[id][0] = Championship[`${id}`][0]*points['playin'][0]+Championship[`${id}`][1]*points['playin'][1]
    champRounds[id][1] = Championship[`${id}`][2]*points['groupA'][0]+Championship[`${id}`][3]*points['groupA'][1]
    champRounds[id][2] = Championship[`${id}`][4]*points['groupB'][0]+Championship[`${id}`][5]*points['groupB'][1]
    champRounds[id][3] = Championship[`${id}`][6]*points['playoff'][0]+Championship[`${id}`][7]*points['playoff'][1]
    champRounds[id][4] = champRounds[id][0] + champRounds[id][1] + champRounds[id][2] + champRounds[id][3]
  });

  for (const playerName in champRounds) {
    if (champRounds.hasOwnProperty(playerName)) {
      const statsArray = champRounds[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}

function getRegion(playerData, searchTerm) {
  const player = playerData.find(player => player.name === searchTerm);
  return player ? player.region : null;
}
function getTeam(playerData, searchTerm) {
  const player = playerData.find(player => player.name === searchTerm);
  return player ? player.team : null;
}
