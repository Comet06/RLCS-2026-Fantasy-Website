import { playerIDs } from "./home_page.js";
let numberOfTeams = 9 //playerIDs.length

let places = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", 
    "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth"]
const spread = [.20, .13, .09, .08, .07, .06, .06, .05, .05, .04, .04, .03, .03, .03, .02, .02]

const amtAdded = 0;
let dist = [.2, .3, .5]
let amountPerMajor = ((amtAdded*dist[1])+400)/2;
let amountForChampionship = (amtAdded*dist[2])+500;

let spreadSum = 0;
for (let i = 0; i<spread.length; i++) {
    if (i<numberOfTeams){
    }
    else {
        spreadSum += spread[i];
        spread[i] = 0;
    }
}
let spreadToAdd = spreadSum/numberOfTeams
for (let i = 0; i<=(numberOfTeams-1); i++) {
    spread[i] += spreadToAdd;
}

let spread_index = 0
// For points calculation
let rounds = ['playin', 'groupA', 'groupB', 'playoff']
export let points = {
    'playin' : [200, 300],
    'groupA' : [300, 400],
    'groupB' : [300, 400],
    'playoff' : [400, 600]
}
// count of available points
let semiFinal = 6
let qualify = 4
let final = 3

let playinTotal = points['playin'][0]*semiFinal + points['playin'][1]*qualify
let groupATotal = points['groupA'][0]*semiFinal + points['groupA'][1]*qualify
let groupBTotal = points['groupB'][0]*semiFinal + points['groupB'][1]*qualify
let playoffTotal = points['playoff'][0]*semiFinal + points['playoff'][1]*final

const myElement = document.querySelector('.rules');
if (myElement) {
    console.log('The specific page has loaded!');
    places.forEach((id)=>{
        document.getElementById(`${id}_prize_major`).innerHTML = "$" + (spread[spread_index]*amountPerMajor).toFixed(2)
        document.getElementById(`${id}_prize_championship`).innerHTML = "$" + (spread[spread_index]*amountForChampionship).toFixed(2)
        document.getElementById(`${id}_prize_percent`).innerHTML = (100*spread[spread_index]).toFixed(2) + "%"
        spread_index += 1
    });
    rounds.forEach((id)=>{
        document.getElementById(`${id}Semi`).innerHTML = points[id][0]
        document.getElementById(`${id}Qualify`).innerHTML = points[id][1]
    });
    document.getElementById('playinTotal').innerHTML = playinTotal
    document.getElementById('groupATotal').innerHTML = groupATotal
    document.getElementById('groupBTotal').innerHTML = groupBTotal
    document.getElementById('playoffTotal').innerHTML = playoffTotal
    document.getElementById('subtotal').innerHTML = playinTotal+groupATotal+groupBTotal+playoffTotal
    document.getElementById('majorfinalTotal').innerHTML = (playinTotal+groupATotal+groupBTotal+playoffTotal)*3
    document.getElementById('finalTotal').innerHTML = (playinTotal+groupATotal+groupBTotal+playoffTotal)*5
} else {
    console.warn('Element with class "rules" not found.');
}