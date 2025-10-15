export let Championship = {
  //(max): PISemi(6), PIQuals(4), GASemi(6), GAQuals(4), GBSemi(6), GBQuals(4), POSemi(8), POFinals(3)
  'come' : [0, 0, 0, 0, 0, 0, 0, 0],
  'squi' : [0, 0, 0, 0, 0, 0, 0, 0],
  'vinn' : [0, 0, 0, 0, 0, 0, 0, 0],
  'jimm' : [0, 0, 0, 0, 0, 0, 0, 0],
  'ecof' : [0, 0, 0, 0, 0, 0, 0, 0],
  'gale' : [0, 0, 0, 0, 0, 0, 0, 0],
  'pots' : [0, 0, 0, 0, 0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0, 0, 0, 0, 0],
  'maht' : [0, 0, 0, 0, 0, 0, 0, 0],
  'dway' : [0, 0, 0, 0, 0, 0, 0, 0],
}
export let ChampionshipPlacements = {
    'Champ' : ['1st', 'TBD', '2nd', 'TBD', '3rd-4th', 'TBD', '3rd-4th', 'TBD', '5th-6th', 'TBD', '5th-6th', 'TBD', '7th-8th', 'TBD', '7th-8th', 'TBD', '9th-12th', 'TBD', '9th-12th', 'TBD', '9th-12th', 'TBD', '9th-12th', 'TBD', '13th-16th', 'TBD', '13th-16th', 'TBD', '13th-16th', 'TBD', '13th-16th', 'TBD', '17th-18th', 'TBD', '17th-18th', 'TBD', '19th-20th', 'TBD', '19th-20th', 'TBD']
}
export let ChampionshipTops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}

let Seeds = ['', '', '', '', //Uppers
             '', '', '', ''] //lowers
let playinQuarter = [
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
]
let playinSemi = [
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let playinQualify = [
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},

  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let GroupAQuarter = [
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
]
let GroupASemi = [
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let GroupAQualify = [
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},

  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let GroupBQuarter = [
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
]
let GroupBSemi = [
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let GroupBQualify = [
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let playoffsQuarter = [
  {team: '', verdict: '', score: 0},//Upper
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},//Lower Round 1
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let playoffsSemi = [
  {team: '', verdict: '', score: 0},//Quarter
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  
  {team: '', verdict: '', score: 0},//Semi
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
  {team: '', verdict: '', score: 0},
]
let playoffsQualify = [
  {team: '', verdict: '', score: 0},//Grand Final
  {team: '', verdict: '', score: 0},

  {team: '', verdict: '', score: 0},//Winner
]

export function ChampionshipBracket(){
  for (let i = 0; i < 8; i ++){//Playins
    document.getElementById(`puqt${i+1}`).innerHTML= `<span id="${playinQuarter[i].verdict}">${playinQuarter[i].team}</span>`;
  }
  for (let i = 0; i < 4; i ++){
    document.getElementById(`plqt${i+1}`).innerHTML= `<span id="${playinQuarter[i+8].verdict}">${playinQuarter[i+8].team}</span>`;
    document.getElementById(`pust${i+1}`).innerHTML= `<span id="${playinSemi[i].verdict}">${playinSemi[i].team}</span>`;
    document.getElementById(`plst${i+1}`).innerHTML= `<span id="${playinSemi[i+4].verdict}">${playinSemi[i+4].team}</span>`;
    document.getElementById(`pqt${i+1}`).innerHTML= `<span id="${playinQualify[i].verdict}">${playinQualify[i].team}</span>`;
  }
  for (let i = 0; i < 8; i ++){//GroupA
    document.getElementById(`gauqt${i+1}`).innerHTML= `<span id="${GroupAQuarter[i].verdict}">${GroupAQuarter[i].team}</span>`;
  }
  for (let i = 0; i < 4; i ++){
    document.getElementById(`galqt${i+1}`).innerHTML= `<span id="${GroupAQuarter[i+8].verdict}">${GroupAQuarter[i+8].team}</span>`;
    document.getElementById(`gaust${i+1}`).innerHTML= `<span id="${GroupASemi[i].verdict}">${GroupASemi[i].team}</span>`;
    document.getElementById(`galst${i+1}`).innerHTML= `<span id="${GroupASemi[i+4].verdict}">${GroupASemi[i+4].team}</span>`;
    document.getElementById(`gaqt${i+1}`).innerHTML= `<span id="${GroupAQualify[i].verdict}">${GroupAQualify[i].team}</span>`;
  }
  for (let i = 0; i < 8; i ++){//GroupB
    document.getElementById(`gbuqt${i+1}`).innerHTML= `<span id="${GroupBQuarter[i].verdict}">${GroupBQuarter[i].team}</span>`;
  }
  for (let i = 0; i < 4; i ++){
    document.getElementById(`gblqt${i+1}`).innerHTML=`<span id="${GroupBQuarter[i+8].verdict}">${GroupBQuarter[i+8].team}</span>`;
    document.getElementById(`gbust${i+1}`).innerHTML=`<span id="${GroupBSemi[i].verdict}">${GroupBSemi[i].team}</span>`;
    document.getElementById(`gblst${i+1}`).innerHTML=`<span id="${GroupBSemi[i+4].verdict}">${GroupBSemi[i+4].team}</span>`;
    document.getElementById(`gbqt${i+1}`).innerHTML=`<span id="${GroupBQualify[i].verdict}">${GroupBQualify[i].team}</span>`;
  }
  for (let i = 0; i < 4; i ++){//Playoffs
    document.getElementById(`pouqt${i+1}`).innerHTML= `<span id="${playoffsQuarter[i].verdict}">${playoffsQuarter[i].team}</span>`;
    document.getElementById(`porot${i+1}`).innerHTML= `<span id="${playoffsQuarter[i+4].verdict}">${playoffsQuarter[i+4].team}</span>`;
    document.getElementById(`polqt${i+1}`).innerHTML= `<span id="${playoffsSemi[i].verdict}">${playoffsSemi[i].team}</span>`;
    document.getElementById(`polst${i+1}`).innerHTML= `<span id="${playoffsSemi[i+4].verdict}">${playoffsSemi[i+4].team}</span>`;
  }
  for (let i = 0; i < 2; i ++){
    document.getElementById(`pogft${i+1}`).innerHTML=`<span id="${playoffsQualify[i].verdict}">${playoffsQualify[i].team}</span>`;
  }
  document.getElementById(`winner`).innerHTML= `<span id="${playoffsQualify[2].verdict}">${playoffsQualify[2].team}</span>`;
}