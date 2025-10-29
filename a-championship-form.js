import { path, year } from "./main.js"

// Seeding Average of 2nd major starting seed and ending seed then region rank
let PlayinTeams = [
    {team: 'Gen.G Mobil1 Racing', wins: 0, losses: 0, playinSeed: 1}, //Qualified seed 1
    {team: 'Virtus.pro', wins: 0, losses: 0, playinSeed: 2}, //Qualified seed 2
    {team: 'TSM', wins: 0, losses: 0, playinSeed: 3}, //Qualified seed 3
    {team: 'FUT Esports', wins: 0, losses: 0, playinSeed: 5}, //Qualified seed 4
    {team: 'ROC Esports', wins: 0, losses: 0, playinSeed: 4}, //LCQ Seed 1
    {team: 'Ninjas in Pyjamas', wins: 0, losses: 0, playinSeed: 6}, //LCQ Seed 2
    {team: 'Shopify Rebellion', wins: 0, losses: 0, playinSeed: 7}, //LCQ Seed 3
    {team: 'MIBR', wins: 0, losses: 0, playinSeed: 8}, //LCQ Seed 4
]
let GroupTeamsinitial = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6', 'Team7', 'Team8', 
                    'Team9', 'Team10', 'Team11', 'Team12', 'Playin Seed 1', 'Playin Seed 2', 'Playin Seed 3', 'Playin Seed 4']
let GroupTeams = []
let run = true
let playinsFinished = false
let playinQ = ['', '', '', '']//4
let playinUS = ['', '', '', '']
let playinLS = ['', '', '', '']
let playinF = ['', '', '', '']

let groupAQ = ['', '', '', '']
let groupAUS = ['', '', '', '']
let groupALS = ['', '', '', '']
let groupAF = ['', '', '', '']

let groupBQ = ['', '', '', '']
let groupBUS = ['', '', '', '']
let groupBLS = ['', '', '', '']
let groupBF = ['', '', '', '']

let playoffsQ = ['', '', '', '']
let playoffsS = ['', '', '', '']
let playoffsG = ['', '']

let playoffTeams = ['', '', '', '', '', '', '', '']

window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/championship_form.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    injectPlayins()
    injectGroups()
  }
})
    
function injectPlayins(){
  for(let i = 0; i < 8; i++){
    document.getElementById(`PIseed${i+1}`).innerHTML = PlayinTeams[i].team
  }
}
// Playins
function playin(match, section, winner, loser){
  const teamWinner = PlayinTeams.find(t => t.team === winner);
  const teamLoser = PlayinTeams.find(t => t.team === loser);
  teamLoser.losses++
  teamWinner.wins++
  if(section === 'U'){
    if(match === 1){
      playinUS[0] = winner
      playinQ[0] = loser
    } else if(match === 2){
      playinUS[1] = winner
      playinQ[1] = loser
    } else if(match === 3){
      playinUS[2] = winner
      playinQ[2] = loser
    } else if(match === 4){
      playinUS[3] = winner
      playinQ[3] = loser
    } else if(match === 5){
      playinF[0] = winner
      playinLS[2] = loser

    } else if(match === 6){
      playinF[1] = winner
      playinLS[0] = loser
    }
  } else if(section === 'L'){
    if(match === 1){
      playinLS[1] = winner
    } else if(match === 2){
      playinLS[3] = winner
    } else if(match === 3){
      playinF[2] = winner
    } else if(match === 4){
      playinF[3] = winner
    }
  }
  injectPlayinVerdicts()
}
function injectPlayinVerdicts(){
  for(let i = 0; i < 4; i++){
      playinQ.forEach((id)=>{
      if (i === playinQ.indexOf(id)){
        document.getElementById(`piq${i+1}`).innerHTML = id
      }
    })
    playinUS.forEach((id)=>{
      if (i === playinUS.indexOf(id)){
        document.getElementById(`pius${i+1}`).innerHTML = id
      }
    })
    playinLS.forEach((id)=>{
      if (i === playinLS.indexOf(id)){
        document.getElementById(`pils${i+1}`).innerHTML = id
      }
    })
    playinF.forEach((id)=>{
      if (i === playinF.indexOf(id)){
        document.getElementById(`pf${i+1}`).innerHTML = id
      }
    })
  }
  playinF.forEach((id)=>{
    if(id === ''){
      run = false
    }
  })
  if(run){
    PlayinTeams.sort((a, b) => a.playinSeed - b.playinSeed)
    PlayinTeams.sort((a, b) => b.wins - a.wins)
    PlayinTeams.sort((a, b) => a.losses - b.losses)
    playinsFinished = true
    injectGroups()
  } else {
    run = true
  }
}

// Group Stage
function injectGroups(){
  // Set seeds 1-12
  GroupTeams = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6', 'Team7', 'Team8', 
                    'Team9', 'Team10', 'Team11', 'Team12', PlayinTeams[0].team, PlayinTeams[1].team, PlayinTeams[2].team, PlayinTeams[3].team]
  if(playinsFinished){
    for(let i = 0; i < 16; i++){
      document.getElementById(`Gseed${i+1}`).innerHTML = GroupTeams[i]
    }
  } else {
    for(let i = 0; i < 16; i++){
      document.getElementById(`Gseed${i+1}`).innerHTML = GroupTeamsinitial[i]
    }
  }
}
function groupUpper(match, group, winner, loser){
  // match 1-4 = Quarterfinals
  // match 5-6 = Semifinals
  if(group === 'A'){
    if(match < 5){
      groupAUS[match-1] = winner
      groupAQ[match-1] = loser
    } else if(match === 5){
        groupAF[0] = winner
        groupALS[2] = loser
        playoffTeams[0] = winner
    } else if(match === 6){
        groupAF[1] = winner
        groupALS[0] = loser
        playoffTeams[3] = winner
    }
  } else if(group === 'B'){
    if(match < 5){
      groupBUS[match-1] = winner
      groupBQ[match-1] = loser
    } else if(match === 5){
      groupBF[0] = winner
      groupBLS[2] = loser
      playoffTeams[2] = winner
    } else if(match === 6){
      groupBF[1] = winner
      groupBLS[0] = loser
      playoffTeams[1] = winner
    }
  }
  injectGroupVerdicts(winner, loser)
}
function groupLower(match, group, winner){
  // match 1-2 = Quarterfinals
  // match 3-4 = Semifinals
  if(group === 'A'){
    if(match === 1){
      groupALS[1] = winner
    } else if(match === 2){
      groupALS[3] = winner
    } else if(match === 3){
      groupAF[2] = winner
      playoffTeams[7] = winner
    } else if(match === 4){
      groupAF[3] = winner
      playoffTeams[4] = winner
    }
  } else if(group === 'B'){
    if(match === 1){
      groupBLS[1] = winner
    } else if(match === 2){
      groupBLS[3] = winner
    } else if(match === 3){
      groupBF[2] = winner
      playoffTeams[6] = winner
    } else if(match === 4){
      groupBF[3] = winner
      playoffTeams[5] = winner
    }
  }
  injectGroupVerdicts()
}
function injectGroupVerdicts(){
  for(let i = 0; i < 4; i++){
    groupAQ.forEach((id)=>{
      if (i === groupAQ.indexOf(id)){
        document.getElementById(`gaq${i+1}`).innerHTML = id
      }
    })
    groupAUS.forEach((id)=>{
      if (i === groupAUS.indexOf(id)){
        document.getElementById(`gaus${i+1}`).innerHTML = id
      }
    })
    groupALS.forEach((id)=>{
      if (i === groupALS.indexOf(id)){
        document.getElementById(`gals${i+1}`).innerHTML = id
      }
    })
    groupAF.forEach((id)=>{
      if (i === groupAF.indexOf(id)){
        document.getElementById(`gaf${i+1}`).innerHTML = id
      }
    })
  }
  for(let i = 0; i < 4; i++){
    groupBQ.forEach((id)=>{
      if (i === groupBQ.indexOf(id)){
        document.getElementById(`gbq${i+1}`).innerHTML = id
      }
    })
    groupBUS.forEach((id)=>{
      if (i === groupBUS.indexOf(id)){
        document.getElementById(`gbus${i+1}`).innerHTML = id
      }
    })
    groupBLS.forEach((id)=>{
      if (i === groupBLS.indexOf(id)){
        document.getElementById(`gbls${i+1}`).innerHTML = id
      }
    })
    groupBF.forEach((id)=>{
      if (i === groupBF.indexOf(id)){
        document.getElementById(`gbf${i+1}`).innerHTML = id
      }
    })
  }
  playoffTeams.forEach((id)=>{
    if(id === ''){
      run = false
    }
  })
  if(run){
    injectPlayoffs()
  } else {
    run = true
  }
}

// Playoffs
function injectPlayoffs(){
  for(let i = 0; i < 8; i++){
    document.getElementById(`POseed${i+1}`).innerHTML = playoffTeams[i]
  }
}
function upper(match, winner, loser){
  if(match === 1){
    playoffsS[2] = winner
    playoffsQ[0] = loser
  } else if(match === 2){
    playoffsS[0] = winner
    playoffsQ[2] = loser
  }
  injectPlayoffVerdicts()
}
function lower(match, winner){
  if(match === 1){
    playoffsQ[1] = winner
  } else if(match === 2){
    playoffsQ[3] = winner
  } else if(match === 3){
    playoffsS[1] = winner
  } else if(match === 4){
    playoffsS[3] = winner
  } else if(match === 5){
    playoffsG[0] = winner
  } else if(match === 6){
    playoffsG[1] = winner
  }
  injectPlayoffVerdicts()
}
function grand(winner){
  document.getElementById("winner").innerHTML=winner;
}
function injectPlayoffVerdicts(){
  playoffsQ.forEach((id)=>{
    for(let i = 0; i < id.length; i++){
      if (i === playoffsQ.indexOf(id)){
        document.getElementById(`q${i+1}`).innerHTML = id
      }
    }
  })
  playoffsS.forEach((id)=>{
    for(let i = 0; i < id.length; i++){
      if (i === playoffsS.indexOf(id)){
        document.getElementById(`s${i+1}`).innerHTML = id
      }
    }
  })
  playoffsG.forEach((id)=>{
    for(let i = 0; i < id.length; i++){
      if (i === playoffsG.indexOf(id)){
        document.getElementById(`g${i+1}`).innerHTML = id
      }
    }
  })
}
function win(positionWinner, positionLoser){
  const teamWinner = document.getElementById(positionWinner)
  teamWinner.id = "win"
  const teamLoser = document.getElementById(positionLoser)
  teamLoser.id = "lose"
}