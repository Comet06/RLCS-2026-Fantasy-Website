export let Major1 = {
  'come' : [0],
  'squi' : [0],
  'vinn' : [0],
  'jimm' : [0],
  'ecof' : [0],
  'gale' : [0],
  'pots' : [0],
  'yuri' : [0],
  'maht' : [0],
  'dway' : [0]
}
export let Major1Placements = {
    'Major' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', ''],
}
export let Major1Tops = {
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

export function Major1Bracket(){
  for (let i = 0; i< 16; i++){//Swiss1 round 1-4
    document.getElementById(`s1r1t${i+1}`).innerHTML=`<span id="${M1Swiss1[i].verdict}">${M1Swiss1[i].team}</span>`;
    document.getElementById(`s1r2t${i+1}`).innerHTML=`<span id="${M1Swiss1[i+16].verdict}">${M1Swiss1[i+16].team}</span>`;
    document.getElementById(`s1r3t${i+1}`).innerHTML=`<span id="${M1Swiss1[i+32].verdict}">${M1Swiss1[i+32].team}</span>`;
    document.getElementById(`s1r4t${i+1}`).innerHTML=`<span id="${M1Swiss1[i+48].verdict}">${M1Swiss1[i+48].team}</span>`;
  }
  for (let i = 0; i< 12; i++){//Swiss1 round 5
    document.getElementById(`s1r5t${i+1}`).innerHTML=`<span id="${M1Swiss1[i+64].verdict}">${M1Swiss1[i+64].team}</span>`;
  }
  for (let i = 0; i< 6; i++){//Swiss1 round 6
    document.getElementById(`s1r6t${i+1}`).innerHTML=`<span id="${M1Swiss1[i+76].verdict}">${M1Swiss1[i+76].team}</span>`;
  }
  for (let i = 0; i < 4; i ++){//Playoffs
    document.getElementById(`pouqt${i+1}`).innerHTML= `<span id="${M1playoffsQuarter[i].verdict}">${M1playoffsQuarter[i].team}</span>`;
    document.getElementById(`porot${i+1}`).innerHTML= `<span id="${M1playoffsQuarter[i+4].verdict}">${M1playoffsQuarter[i+4].team}</span>`;
    document.getElementById(`polqt${i+1}`).innerHTML= `<span id="${M1playoffsSemi[i].verdict}">${M1playoffsSemi[i].team}</span>`;
    document.getElementById(`polst${i+1}`).innerHTML= `<span id="${M1playoffsSemi[i+4].verdict}">${M1playoffsSemi[i+4].team}</span>`;
  }
  for (let i = 0; i < 2; i ++){
    document.getElementById(`pogft${i+1}`).innerHTML=`<span id="${M1playoffsQualify[i].verdict}">${M1playoffsQualify[i].team}</span>`;
  }
  document.getElementById(`winner`).innerHTML= `<span id="${M1playoffsQualify[2].verdict}">${M1playoffsQualify[2].team}</span>`;
}

export let Major2 = {
  'come' : [0],
  'squi' : [0],
  'vinn' : [0],
  'jimm' : [0],
  'ecof' : [0],
  'gale' : [0],
  'pots' : [0],
  'yuri' : [0],
  'maht' : [0],
  'dway' : [0]
}
export let Major2Placements = {
    'Major' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', ''],
}
export let Major2Tops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}

let M2Swiss1 = [
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

export function Major2Bracket(){
  for (let i = 0; i< 16; i++){//Swiss1 round 1-4
    document.getElementById(`s1r1t${i+1}`).innerHTML=`<span id="${M2Swiss1[i].verdict}">${M2Swiss1[i].team}</span>`;
    document.getElementById(`s1r2t${i+1}`).innerHTML=`<span id="${M2Swiss1[i+16].verdict}">${M2Swiss1[i+16].team}</span>`;
    document.getElementById(`s1r3t${i+1}`).innerHTML=`<span id="${M2Swiss1[i+32].verdict}">${M2Swiss1[i+32].team}</span>`;
    document.getElementById(`s1r4t${i+1}`).innerHTML=`<span id="${M2Swiss1[i+48].verdict}">${M2Swiss1[i+48].team}</span>`;
  }
  for (let i = 0; i< 12; i++){//Swiss1 round 5
    document.getElementById(`s1r5t${i+1}`).innerHTML=`<span id="${M2Swiss1[i+64].verdict}">${M2Swiss1[i+64].team}</span>`;
  }
  for (let i = 0; i< 6; i++){//Swiss1 round 6
    document.getElementById(`s1r6t${i+1}`).innerHTML=`<span id="${M2Swiss1[i+76].verdict}">${M2Swiss1[i+76].team}</span>`;
  }
  for (let i = 0; i < 4; i ++){//Playoffs
    document.getElementById(`pouqt${i+1}`).innerHTML= `<span id="${M2playoffsQuarter[i].verdict}">${M2playoffsQuarter[i].team}</span>`;
    document.getElementById(`porot${i+1}`).innerHTML= `<span id="${M2playoffsQuarter[i+4].verdict}">${M2playoffsQuarter[i+4].team}</span>`;
    document.getElementById(`polqt${i+1}`).innerHTML= `<span id="${M2playoffsSemi[i].verdict}">${M2playoffsSemi[i].team}</span>`;
    document.getElementById(`polst${i+1}`).innerHTML= `<span id="${M2playoffsSemi[i+4].verdict}">${M2playoffsSemi[i+4].team}</span>`;
  }
  for (let i = 0; i < 2; i ++){
    document.getElementById(`pogft${i+1}`).innerHTML=`<span id="${M2playoffsQualify[i].verdict}">${M2playoffsQualify[i].team}</span>`;
  }
  document.getElementById(`winner`).innerHTML= `<span id="${M2playoffsQualify[2].verdict}">${M2playoffsQualify[2].team}</span>`;
}