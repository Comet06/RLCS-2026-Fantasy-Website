import { path, deployLinks, menu, spread, points } from "./main.js";
import { year, members, amtAdded, dist, majorPrize, champPrize } from "./current-page-data.js";

const amountPerMajor = ((amtAdded*dist[1])+majorPrize)/2;
const amountForChampionship = (amtAdded*dist[2])+champPrize;

const swiss = 8 // How many available guesses
const semiFinal = 6
const qualify = 4
const POsemiFinal = 8
const final = 3

let swissTotal = points['swiss'][0]*swiss
let playinTotal = points['playin'][0]*semiFinal + points['playin'][1]*qualify
let groupATotal = points['groupA'][0]*semiFinal + points['groupA'][1]*qualify
let groupBTotal = points['groupB'][0]*semiFinal + points['groupB'][1]*qualify
let playoffTotal = points['playoff'][0]*POsemiFinal + points['playoff'][1]*final

let majorTotal = (swissTotal + playoffTotal)*3
let champTotal = (playinTotal + groupATotal + groupBTotal + playoffTotal)*5

let Majortotals = [
    {name: "Swiss", event: 'swiss', total: swissTotal},
    {name: "PlayOffs", event: 'playoff', total: playoffTotal},
]
let Champtotals = [
    {name: "Play-In", event: 'playin', total: playinTotal},
    {name: "Group A", event: 'groupA', total: groupATotal},
    {name: "Group B", event: 'groupB', total: groupBTotal},
    {name: "PlayOffs", event: 'playoff', total: playoffTotal},
]

window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/info.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    document.getElementById('numOfTeams').innerHTML = members.length
    document.getElementById('amount_added').innerHTML = "$" + amtAdded
    deployPrizePoolInfo()
    deployMajorPointsInfo()
    deployChampPointsInfo()
    determineSpread()
    console.log('Info page has loaded!');
  } else {
    console.log("main event listener is working but nothing else is")
  }
});

function determineSpread(){
  let spreadSum = 0;
  for (let i = 0; i < spread.length; i++) {
      if (i > members.length){
          spreadSum += spread[i];
          spread[i] = 0;
      }
  }
  let spreadToAdd = spreadSum/members.length
  for (let i = 0; i <= (members.length-1); i++) {
      spread[i] += spreadToAdd;
  }
}
function deployPrizePoolInfo(){
    for (let i = 0; i < members.length; i ++){
        const tableBody = document.getElementById('prize_pool');
        const newRow = document.createElement('tr');
        const place = document.createElement('td');
        const majorPerc = document.createElement('td');
        const championshipPerc = document.createElement('td');
        const percOfPP = document.createElement('td');
        place.textContent = i+1
        if (i < members.length){
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
    for (let i = 0; i < 16; i ++){
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
function deployMajorPointsInfo(){
  const tableBody = document.getElementById('Major_points');
  const newRow3 = document.createElement('tr');
  const title = document.createElement('th');
  const placements1 = document.createElement('th');
  const placements2 = document.createElement('th');
  const titletotalPoints = document.createElement('th');

  title.textContent = ''
  placements1.textContent = '(Picks) Points'
  placements2.textContent = '(Picks) Points'
  titletotalPoints.textContent = ''

  newRow3.appendChild(title)
  newRow3.appendChild(placements1)
  newRow3.appendChild(placements2)
  newRow3.appendChild(titletotalPoints)

  tableBody.appendChild(newRow3)

  Majortotals.forEach((id) =>{
      const tableBody = document.getElementById('Major_points');
      const newRow = document.createElement('tr');
      const round = document.createElement('td');
      const quarter = document.createElement('td');
      const qualified = document.createElement('td');
      const totalPoints = document.createElement('td');
      
      round.textContent = id.name
      if(id.event != 'playoff'){
        quarter.textContent = `(${swiss}) ` + points[id.event][0]
        qualified.textContent = ``
      } else {
        quarter.textContent = `(${POsemiFinal}) ` + points[id.event][0]
        qualified.textContent = `(${final}) ` + points[id.event][1]
      }
      totalPoints.textContent = id.total

      newRow.appendChild(round);
      newRow.appendChild(quarter);
      newRow.appendChild(qualified);
      newRow.appendChild(totalPoints);
      
      tableBody.appendChild(newRow);
  });
  const newRow = document.createElement('tr');
  const round1 = document.createElement('td');
  const quarter1 = document.createElement('td');
  const qualified1 = document.createElement('td');
  const totalPoints1 = document.createElement('td');
  
  round1.textContent = "Major Multiplier"
  quarter1.textContent = "3X"
  quarter1.style = 'text-align: left;'
  qualified1.textContent = "Total Major Points"
  totalPoints1.textContent = majorTotal

  newRow.appendChild(round1);
  newRow.appendChild(quarter1);
  newRow.appendChild(qualified1);
  newRow.appendChild(totalPoints1);
  
  tableBody.appendChild(newRow);

}
function deployChampPointsInfo(){
  const tableBody = document.getElementById('Champ_points');
  const newRow3 = document.createElement('tr');
  const title = document.createElement('th');
  const placements1 = document.createElement('th');
  const placements2 = document.createElement('th');
  const titletotalPoints = document.createElement('th');

  title.textContent = ''
  placements1.textContent = '(Picks) Points'
  placements2.textContent = '(Picks) Points'
  titletotalPoints.textContent = ''

  newRow3.appendChild(title)
  newRow3.appendChild(placements1)
  newRow3.appendChild(placements2)
  newRow3.appendChild(titletotalPoints)

  tableBody.appendChild(newRow3)

  Champtotals.forEach((id) =>{
      const tableBody = document.getElementById('Champ_points');
      const newRow = document.createElement('tr');
      const round = document.createElement('td');
      const quarter = document.createElement('td');
      const qualified = document.createElement('td');
      const totalPoints = document.createElement('td');
      
      round.textContent = id.name
      if(id.event != 'playoff'){
        quarter.textContent = `(${semiFinal}) ` + points[id.event][0]
        qualified.textContent = `(${qualify}) ` + points[id.event][1]
      } else {
        quarter.textContent = `(${POsemiFinal}) ` + points[id.event][0]
        qualified.textContent = `(${final}) ` + points[id.event][1]
      }
      totalPoints.textContent = id.total

      newRow.appendChild(round);
      newRow.appendChild(quarter);
      newRow.appendChild(qualified);
      newRow.appendChild(totalPoints);
      
      tableBody.appendChild(newRow);
  });

  const newRow = document.createElement('tr');
  const round = document.createElement('td');
  const quarter = document.createElement('td');
  const qualified = document.createElement('td');
  const totalPoints = document.createElement('td');


  round.textContent = "Championship Multiplier"
  quarter.textContent = "5X"
  quarter.style = 'text-align: left;'
  qualified.textContent = "Total Championship Points"
  totalPoints.textContent = champTotal

  newRow.appendChild(round);
  newRow.appendChild(quarter);
  newRow.appendChild(qualified);
  newRow.appendChild(totalPoints);
  
  tableBody.appendChild(newRow);
}