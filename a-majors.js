import { path, deployLinks, menu, points, deployTops, getTeamDetails } from "./main.js";
import { year, members, major1Rounds, major2Rounds, split1, split2, splitSums, EventSums } from "./a-current-page-data.js";

let Major1 = {
  // Swiss Correct(8), POSemi(8), POFinals(3)
  'come' : [0, 0, 0],
  'squi' : [0, 0, 0],
  'vinn' : [0, 0, 0],
  'jimm' : [0, 0, 0],
  'ecof' : [0, 0, 0],
  'gale' : [0, 0, 0],
  'pots' : [0, 0, 0],
  'yuri' : [0, 0, 0],
  'maht' : [0, 0, 0],
  'dway' : [0, 0, 0],
}
export let Major1Placements = {
    'Major' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
}
let Major1Tops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}

let M1Swiss1 = [
  // Round 1
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Round 2
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Round 3
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Round 4
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Round 5
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Round 6
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let M1playoffsQuarter = [
  {team: '', verdict: '', score: 0},//Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},//Lower round 1
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let M1playoffsSemi = [
  {team: '', verdict: '', score: 0},//Quarter
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},//Semi
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let M1playoffsQualify = [
  {team: '', verdict: '', score: 0},//Grand Final
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},//Winner
]


let Major2 = {
  // Swiss Correct(8), POSemi(8), POFinals(3)
  'come' : [0, 0, 0],
  'squi' : [0, 0, 0],
  'vinn' : [0, 0, 0],
  'jimm' : [0, 0, 0],
  'ecof' : [0, 0, 0],
  'gale' : [0, 0, 0],
  'pots' : [0, 0, 0],
  'yuri' : [0, 0, 0],
  'maht' : [0, 0, 0],
  'dway' : [0, 0, 0],
}
export let Major2Placements = {
    'Major' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
}
let Major2Tops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}

let M2Swiss1 = [
  // Round 1
  {team: '', verdict: '', score: 3},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Round 2
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Round 3
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Round 4
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Round 5
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 3},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  // Round 6
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let M2playoffsQuarter = [
  {team: '', verdict: '', score: 0},//Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},//Lower round 1
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let M2playoffsSemi = [
  {team: '', verdict: '', score: 0},//Quarter
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},//Semi
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let M2playoffsQualify = [
  {team: '', verdict: '', score: 0},//Grand Final
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},//Winner
]


window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/major.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    const urlParams = new URLSearchParams(window.location.search);
    const evt = urlParams.get('name');
    if(evt === 'maj1'){
      document.getElementById('event').innerHTML = `Major 1`
      Major1Bracket()
      determineMajorSums()
      deployMaj(major1Rounds)
      deployMajPlacements(Major1Placements, split1)
      deployTops(Major1Tops)
    } else if(evt === 'maj2'){
      document.getElementById('event').innerHTML = `Major 2`
      Major2Bracket()
      determineMajorSums()
      deployMaj(major2Rounds)
      deployMajPlacements(Major2Placements, split2)
      deployTops(Major2Tops)
    }
  }
});


function Major1Bracket(){
  for (let i = 0; i< 16; i++){//Swiss1 round 1-4
    document.getElementById(`s1r1t${i+1}`).innerHTML= `${M1Swiss1[i].team}<span class="score">${M1Swiss1[i].score}</span>`;
    document.getElementById(`s1r2t${i+1}`).innerHTML= `${M1Swiss1[i+16].team}<span class="score">${M1Swiss1[i+16].score}</span>`;
    document.getElementById(`s1r3t${i+1}`).innerHTML= `${M1Swiss1[i+32].team}<span class="score">${M1Swiss1[i+32].score}</span>`;
    const teamR1 = document.getElementById(`s1r1t${i+1}`)
    teamR1.id = M1Swiss1[i].verdict
    const teamR2 = document.getElementById(`s1r2t${i+1}`)
    teamR2.id = M1Swiss1[i+16].verdict
    const teamR3 = document.getElementById(`s1r3t${i+1}`)
    teamR3.id = M1Swiss1[i+32].verdict
  }
  for(let i = 0; i < 12; i++){//Swiss round 4
    document.getElementById(`s1r4t${i+3}`).innerHTML= `${M1Swiss1[i+50].team}<span class="score">${M1Swiss1[i+50].score}</span>`;
    const teamR4 = document.getElementById(`s1r4t${i+3}`)
    teamR4.id = M1Swiss1[i+50].verdict
  }
  for (let i = 0; i < 2; i++){//Swiss1 round 4
    document.getElementById(`s1r4t${i+1}`).innerHTML= M1Swiss1[i+48].team;
    document.getElementById(`s1r4t${i+15}`).innerHTML= M1Swiss1[i+62].team;
  }
  for (let i = 0; i< 6; i++){//Swiss1 round 5
    document.getElementById(`s1r5t${i+4}`).innerHTML= `${M1Swiss1[i+67].team}<span class="score">${M1Swiss1[i+67].score}</span>`;// i+67 is the start of the group of 6
    const teamR5 = document.getElementById(`s1r5t${i+4}`)
    teamR5.id = M1Swiss1[i+67].verdict
  }
  for (let i = 0; i < 3; i++){//Swiss1 round 5
    document.getElementById(`s1r5t${i+1}`).innerHTML= M1Swiss1[i+64].team;
    document.getElementById(`s1r5t${i+10}`).innerHTML= M1Swiss1[i+73].team;
  }
  for (let i = 0; i< 6; i++){//Swiss1 round 6
    document.getElementById(`s1r6t${i+1}`).innerHTML=  M1Swiss1[i+76].team;
  }
  for (let i = 0; i < 4; i ++){//Playoffs
    document.getElementById(`pouqt${i+1}`).innerHTML= `${M1playoffsQuarter[i].team}<span class="score">${M1playoffsQuarter[i].score}</span>`;
    document.getElementById(`porot${i+1}`).innerHTML= `${M1playoffsQuarter[i+4].team}<span class="score">${M1playoffsQuarter[i+4].score}</span>`;
    document.getElementById(`polqt${i+1}`).innerHTML= `${M1playoffsSemi[i].team}<span class="score">${M1playoffsSemi[i].score}</span>`;
    document.getElementById(`polst${i+1}`).innerHTML= `${M1playoffsSemi[i+4].team}<span class="score">${M1playoffsSemi[i+4].score}</span>`;
    const teamPOQ = document.getElementById(`pouqt${i+1}`)
    teamPOQ.id = `${M1playoffsQuarter[i].verdict}`
    const teamPOUS = document.getElementById(`porot${i+1}`)
    teamPOUS.id = `${M1playoffsQuarter[i+4].verdict}`
    const teamPOLS = document.getElementById(`polqt${i+1}`)
    teamPOLS.id = `${M1playoffsSemi[i].verdict}`
    const teamPOQU = document.getElementById(`polst${i+1}`)
    teamPOQU.id = `${M1playoffsSemi[i+4].verdict}`
  }
  for (let i = 0; i < 2; i ++){
    document.getElementById(`pogft${i+1}`).innerHTML=`${M1playoffsQualify[i].team}<span class="score">${M1playoffsQualify[i].score}</span>`;
    const teamPOF = document.getElementById(`pogft${i+1}`)
    teamPOF.id = `${M1playoffsQualify[i].verdict}`
  }
  document.getElementById(`winner`).innerHTML= M1playoffsQualify[2].team;
}
function Major2Bracket(){
  for (let i = 0; i< 16; i++){//Swiss1 round 1-4
    document.getElementById(`s1r1t${i+1}`).innerHTML= `${M2Swiss1[i].team}<span class="score">${M2Swiss1[i].score}</span>`;
    document.getElementById(`s1r2t${i+1}`).innerHTML= `${M2Swiss1[i+16].team}<span class="score">${M2Swiss1[i+16].score}</span>`;
    document.getElementById(`s1r3t${i+1}`).innerHTML= `${M2Swiss1[i+32].team}<span class="score">${M2Swiss1[i+32].score}</span>`;
    const teamR1 = document.getElementById(`s1r1t${i+1}`)
    teamR1.id = M2Swiss1[i].verdict
    const teamR2 = document.getElementById(`s1r2t${i+1}`)
    teamR2.id = M2Swiss1[i+16].verdict
    const teamR3 = document.getElementById(`s1r3t${i+1}`)
    teamR3.id = M2Swiss1[i+32].verdict
  }
  for(let i = 0; i < 12; i++){//Swiss round 4
    document.getElementById(`s1r4t${i+3}`).innerHTML= `${M2Swiss1[i+50].team}<span class="score">${M2Swiss1[i+50].score}</span>`;
    const teamR4 = document.getElementById(`s1r4t${i+3}`)
    teamR4.id = M2Swiss1[i+50].verdict
  }
  for (let i = 0; i < 2; i++){//Swiss1 round 4
    document.getElementById(`s1r4t${i+1}`).innerHTML= M2Swiss1[i+48].team;
    document.getElementById(`s1r4t${i+15}`).innerHTML= M2Swiss1[i+62].team;
  }
  for (let i = 0; i< 6; i++){//Swiss1 round 5
    document.getElementById(`s1r5t${i+4}`).innerHTML= `${M2Swiss1[i+67].team}<span class="score">${M2Swiss1[i+67].score}</span>`;// i+67 is the start of the group of 6
    const teamR5 = document.getElementById(`s1r5t${i+4}`)
    teamR5.id = M2Swiss1[i+67].verdict
  }
  for (let i = 0; i < 3; i++){//Swiss1 round 5
    document.getElementById(`s1r5t${i+1}`).innerHTML= M2Swiss1[i+64].team;
    document.getElementById(`s1r5t${i+10}`).innerHTML= M2Swiss1[i+73].team;
  }
  for (let i = 0; i< 6; i++){//Swiss1 round 6
    document.getElementById(`s1r6t${i+1}`).innerHTML=  M2Swiss1[i+76].team;
  }
  for (let i = 0; i < 4; i ++){//Playoffs
    document.getElementById(`pouqt${i+1}`).innerHTML= `${M2playoffsQuarter[i].team}<span class="score">${M2playoffsQuarter[i].score}</span>`;
    document.getElementById(`porot${i+1}`).innerHTML= `${M2playoffsQuarter[i+4].team}<span class="score">${M2playoffsQuarter[i+4].score}</span>`;
    document.getElementById(`polqt${i+1}`).innerHTML= `${M2playoffsSemi[i].team}<span class="score">${M2playoffsSemi[i].score}</span>`;
    document.getElementById(`polst${i+1}`).innerHTML= `${M2playoffsSemi[i+4].team}<span class="score">${M2playoffsSemi[i+4].score}</span>`;
    const teamPOQ = document.getElementById(`pouqt${i+1}`)
    teamPOQ.id = `${M2playoffsQuarter[i].verdict}`
    const teamPOUS = document.getElementById(`porot${i+1}`)
    teamPOUS.id = `${M2playoffsQuarter[i+4].verdict}`
    const teamPOLS = document.getElementById(`polqt${i+1}`)
    teamPOLS.id = `${M2playoffsSemi[i].verdict}`
    const teamPOQU = document.getElementById(`polst${i+1}`)
    teamPOQU.id = `${M2playoffsSemi[i+4].verdict}`
  }
  for (let i = 0; i < 2; i ++){
    document.getElementById(`pogft${i+1}`).innerHTML=`${M2playoffsQualify[i].team}<span class="score">${M2playoffsQualify[i].score}</span>`;
    const teamPOF = document.getElementById(`pogft${i+1}`)
    teamPOF.id = `${M2playoffsQualify[i].verdict}`
  }
  document.getElementById(`winner`).innerHTML= M2playoffsQualify[2].team;
}
function deployMaj(event){
  members.forEach((id) =>{
    const tableBody = document.getElementById('majorScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const swissStage = document.createElement('td');
    const playoffs = document.createElement('td');
    const total = document.createElement('td');
    
    teamName.id = id.shortname
    swissStage.id = id.shortname
    playoffs.id = id.shortname
    total.id = id.shortname
    
    teamName.textContent = id.name
    swissStage.textContent = event[id.shortname][0]
    playoffs.textContent = event[id.shortname][1]
    total.textContent = event[id.shortname][2]
    
    newRow.appendChild(teamName);
    newRow.appendChild(swissStage);
    newRow.appendChild(playoffs);
    newRow.appendChild(total);
    
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
export function determineMajorSums(){
  members.forEach((id) =>{
    major1Rounds[id.shortname][0] = Major1[`${id.shortname}`][0] * points['swiss'][0] //First number is the correct amount they guess
    major1Rounds[id.shortname][1] = Major1[`${id.shortname}`][1] * points['playoff'][0] + Major1[`${id.shortname}`][2] * points['playoff'][1] //Second number is the points worth per guess
    major2Rounds[id.shortname][0] = Major2[`${id.shortname}`][0] * points['swiss'][0] //First number is the correct amount they guess
    major2Rounds[id.shortname][1] = Major2[`${id.shortname}`][1] * points['playoff'][0] + Major2[`${id.shortname}`][2] * points['playoff'][1] //Second number is the points worth per guess

    major1Rounds[id.shortname][2] = major1Rounds[id.shortname][0] + major1Rounds[id.shortname][1]
    major2Rounds[id.shortname][2] = major2Rounds[id.shortname][0] + major2Rounds[id.shortname][1]

    splitSums[id.shortname][0] = EventSums[id.shortname][0] + EventSums[id.shortname][1] + EventSums[id.shortname][2] + major1Rounds[id.shortname][2]*3 //Split 1 Total
    splitSums[id.shortname][1] = EventSums[id.shortname][3] + EventSums[id.shortname][4] + EventSums[id.shortname][5] + major2Rounds[id.shortname][2]*3 //Split 2 Total
  })
}