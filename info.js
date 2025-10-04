import { members, points } from "./home_page.js";
const spread = [.20, .13, .09, .08, .07, .06, .06, .05, .05, .04, .04, .03, .03, .03, .02, .02]
const amtAdded = 70;

let dist = [.2, .3, .5]
let amountPerMajor = ((amtAdded*dist[1])+400)/2;
let amountForChampionship = (amtAdded*dist[2])+500;
let spreadSum = 0;


for (let i = 0; i<spread.length; i++) {
    if (i>members.length){
        spreadSum += spread[i];
        spread[i] = 0;
    }
}
let spreadToAdd = spreadSum/members.length
for (let i = 0; i<=(members.length-1); i++) {
    spread[i] += spreadToAdd;
}

// count of available points
let semiFinal = 6
let qualify = 4
let final = 3

let playinTotal = points['playin'][0]*semiFinal + points['playin'][1]*qualify
let groupATotal = points['groupA'][0]*semiFinal + points['groupA'][1]*qualify
let groupBTotal = points['groupB'][0]*semiFinal + points['groupB'][1]*qualify
let playoffTotal = points['playoff'][0]*semiFinal + points['playoff'][1]*final

let totals = [
    {name: "Play-In", event: 'playin', total: playinTotal},
    {name: "Group A", event: 'groupA', total: groupATotal},
    {name: "Group B", event: 'groupB', total: groupBTotal},
    {name: "PlayOffs", event: 'playoff', total: playoffTotal},
]


const myElement = document.querySelector('.rules');
if (myElement) {
    document.getElementById('numOfTeams').innerHTML = members.length
    document.getElementById('amount_added').innerHTML = "$" + amtAdded
    deployPrizePoolInfo()
    deployPointsInfo()
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
function deployPointsInfo(){
    // for (let i = 0; i < rounds.length; i ++){
    totals.forEach((id) =>{
        const tableBody = document.getElementById('bracket_points');
        const newRow = document.createElement('tr');
        const round = document.createElement('td');
        const quarter = document.createElement('td');
        const qualified = document.createElement('td');
        const totalPoints = document.createElement('td');
        
        round.textContent = id.name
        quarter.textContent = points[id.event][0]
        qualified.textContent = points[id.event][1]
        totalPoints.textContent = id.total

        newRow.appendChild(round);
        newRow.appendChild(quarter);
        newRow.appendChild(qualified);
        newRow.appendChild(totalPoints);
        
        tableBody.appendChild(newRow);
    })
    const tableBody = document.getElementById('bracket_points');
    const newRow1 = document.createElement('tr');
    const round1 = document.createElement('td');
    const quarter1 = document.createElement('td');
    const qualified1 = document.createElement('td');
    const totalPoints1 = document.createElement('td');

    const newRow = document.createElement('tr');
    const round = document.createElement('td');
    const quarter = document.createElement('td');
    const qualified = document.createElement('td');
    const totalPoints = document.createElement('td');
    
    round1.textContent = "Major Multiplier"
    quarter1.textContent = "3X"
    qualified1.textContent = "Total Major Points"
    totalPoints1.textContent = 0

    round.textContent = "Championship Multiplier"
    quarter.textContent = "5X"
    qualified.textContent = "Total Championship Points"
    totalPoints.textContent = 0

    newRow1.appendChild(round1);
    newRow1.appendChild(quarter1);
    newRow1.appendChild(qualified1);
    newRow1.appendChild(totalPoints1);

    newRow.appendChild(round);
    newRow.appendChild(quarter);
    newRow.appendChild(qualified);
    newRow.appendChild(totalPoints);
    
    tableBody.appendChild(newRow1);
    tableBody.appendChild(newRow);
}