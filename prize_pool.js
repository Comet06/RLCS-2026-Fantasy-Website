let numberOfTeams = document.getElementById("numOfTeams").innerText;
let num1 = document.getElementById("first").innerText;
let num2 = document.getElementById("second").innerText;
let num3 = document.getElementById("third").innerText;
let num4 = document.getElementById("fourth").innerText;
let num5 = document.getElementById("fifth").innerText;
let num6 = document.getElementById("sixth").innerText;
let num7 = document.getElementById("seventh").innerText;
let num8 = document.getElementById("eighth").innerText;
let num9 = document.getElementById("ninth").innerText;
let num10 = document.getElementById("tenth").innerText;
let num11 = document.getElementById("eleventh").innerText;
let num12 = document.getElementById("twelfth").innerText;
let num13 = document.getElementById("thirteenth").innerText;
let num14 = document.getElementById("fourteenth").innerText;
let num15 = document.getElementById("fifteenth").innerText;
let num16 = document.getElementById("sixteenth").innerText;

const spread = [.20, .13, .09, .08, .07, .06, .06, .05, .05, .04, .04, .03, .03, .03, .02, .02]
const spreadSumList = [];
let spreadSum = 0;

const amtAdded = 0;

const percentDistRegional = .2;
const percentDistMajor = .3;
const percentDistChampionship = .5;

let amountForAllMajor = (amtAdded*percentDistMajor)+400;
let amountPerMajor = amountForAllMajor/2;
let amountForChampionship = (amtAdded*percentDistChampionship)+500;


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

document.getElementById('first_prize_major').innerHTML = "$" + (spread[0]*amountPerMajor).toFixed(2)
document.getElementById('second_prize_major').innerHTML = "$" + (spread[1]*amountPerMajor).toFixed(2)
document.getElementById('third_prize_major').innerHTML = "$" + (spread[2]*amountPerMajor).toFixed(2)
document.getElementById('fourth_prize_major').innerHTML = "$" + (spread[3]*amountPerMajor).toFixed(2)
document.getElementById('fifth_prize_major').innerHTML = "$" + (spread[4]*amountPerMajor).toFixed(2)
document.getElementById('sixth_prize_major').innerHTML = "$" + (spread[5]*amountPerMajor).toFixed(2)
document.getElementById('seventh_prize_major').innerHTML = "$" + (spread[6]*amountPerMajor).toFixed(2)
document.getElementById('eighth_prize_major').innerHTML = "$" + (spread[7]*amountPerMajor).toFixed(2)
document.getElementById('ninth_prize_major').innerHTML = "$" + (spread[8]*amountPerMajor).toFixed(2)
document.getElementById('tenth_prize_major').innerHTML = "$" + (spread[9]*amountPerMajor).toFixed(2)
document.getElementById('eleventh_prize_major').innerHTML = "$" + (spread[10]*amountPerMajor).toFixed(2)
document.getElementById('twelfth_prize_major').innerHTML = "$" + (spread[11]*amountPerMajor).toFixed(2)
document.getElementById('thirteenth_prize_major').innerHTML = "$" + (spread[12]*amountPerMajor).toFixed(2)
document.getElementById('fourteenth_prize_major').innerHTML = "$" + (spread[13]*amountPerMajor).toFixed(2)
document.getElementById('fifteenth_prize_major').innerHTML = "$" + (spread[14]*amountPerMajor).toFixed(2)
document.getElementById('sixteenth_prize_major').innerHTML = "$" + (spread[15]*amountPerMajor).toFixed(2)

document.getElementById('first_prize_championship').innerHTML = "$" + (spread[0]*amountForChampionship).toFixed(2)
document.getElementById('second_prize_championship').innerHTML = "$" + (spread[1]*amountForChampionship).toFixed(2)
document.getElementById('third_prize_championship').innerHTML = "$" + (spread[2]*amountForChampionship).toFixed(2)
document.getElementById('fourth_prize_championship').innerHTML = "$" + (spread[3]*amountForChampionship).toFixed(2)
document.getElementById('fifth_prize_championship').innerHTML = "$" + (spread[4]*amountForChampionship).toFixed(2)
document.getElementById('sixth_prize_championship').innerHTML = "$" + (spread[5]*amountForChampionship).toFixed(2)
document.getElementById('seventh_prize_championship').innerHTML = "$" + (spread[6]*amountForChampionship).toFixed(2)
document.getElementById('eighth_prize_championship').innerHTML = "$" + (spread[7]*amountForChampionship).toFixed(2)
document.getElementById('ninth_prize_championship').innerHTML = "$" + (spread[8]*amountForChampionship).toFixed(2)
document.getElementById('tenth_prize_championship').innerHTML = "$" + (spread[9]*amountForChampionship).toFixed(2)
document.getElementById('eleventh_prize_championship').innerHTML = "$" + (spread[10]*amountForChampionship).toFixed(2)
document.getElementById('twelfth_prize_championship').innerHTML = "$" + (spread[11]*amountForChampionship).toFixed(2)
document.getElementById('thirteenth_prize_championship').innerHTML = "$" + (spread[12]*amountForChampionship).toFixed(2)
document.getElementById('fourteenth_prize_championship').innerHTML = "$" + (spread[13]*amountForChampionship).toFixed(2)
document.getElementById('fifteenth_prize_championship').innerHTML = "$" + (spread[14]*amountForChampionship).toFixed(2)
document.getElementById('sixteenth_prize_championship').innerHTML = "$" + (spread[15]*amountForChampionship).toFixed(2)

document.getElementById('first_prize_percent').innerHTML = (100*spread[0]).toFixed(2) + "%"
document.getElementById('second_prize_percent').innerHTML = (100*spread[1]).toFixed(2) + "%"
document.getElementById('third_prize_percent').innerHTML = (100*spread[2]).toFixed(2) + "%"
document.getElementById('fourth_prize_percent').innerHTML = (100*spread[3]).toFixed(2) + "%"
document.getElementById('fifth_prize_percent').innerHTML = (100*spread[4]).toFixed(2) + "%"
document.getElementById('sixth_prize_percent').innerHTML = (100*spread[5]).toFixed(2) + "%"
document.getElementById('seventh_prize_percent').innerHTML = (100*spread[6]).toFixed(2) + "%"
document.getElementById('eighth_prize_percent').innerHTML = (100*spread[7]).toFixed(2) + "%"
document.getElementById('ninth_prize_percent').innerHTML = (100*spread[8]).toFixed(2) + "%"
document.getElementById('tenth_prize_percent').innerHTML = (100*spread[9]).toFixed(2) + "%"
document.getElementById('eleventh_prize_percent').innerHTML = (100*spread[10]).toFixed(2) + "%"
document.getElementById('twelfth_prize_percent').innerHTML = (100*spread[11]).toFixed(2) + "%"
document.getElementById('thirteenth_prize_percent').innerHTML = (100*spread[12]).toFixed(2) + "%"
document.getElementById('fourteenth_prize_percent').innerHTML = (100*spread[13]).toFixed(2) + "%"
document.getElementById('fifteenth_prize_percent').innerHTML = (100*spread[14]).toFixed(2) + "%"
document.getElementById('sixteenth_prize_percent').innerHTML = (100*spread[15]).toFixed(2) + "%"


// For points calculation
const playinSemifinal = 200
const playInQualify = 300

const groupASemifinal = 300
const groupAQualify = 400

const groupBSemifinal = 300
const groupBQualify = 400

const playoffSemifinal = 400
const playoffFinal = 600

let semiFinal = 6
let qualify = 4
let final = 3

let playinTotal = playinSemifinal*semiFinal + playInQualify*qualify
let groupATotal = groupASemifinal*semiFinal + groupAQualify*qualify
let groupBTotal = groupBSemifinal*semiFinal + groupBQualify*qualify
let playoffTotal = playoffSemifinal*semiFinal + playoffFinal*final

document.getElementById('playinSemi').innerHTML = playinSemifinal
document.getElementById('playinQualify').innerHTML = playInQualify
document.getElementById('groupASemi').innerHTML = groupASemifinal
document.getElementById('groupAQualify').innerHTML = groupAQualify
document.getElementById('groupBSemi').innerHTML = groupBSemifinal
document.getElementById('groupBQualify').innerHTML = groupBQualify
document.getElementById('playoffSemi').innerHTML = playoffSemifinal
document.getElementById('playoffQualify').innerHTML = playoffFinal

document.getElementById('playinTotal').innerHTML = playinTotal
document.getElementById('groupATotal').innerHTML = groupATotal
document.getElementById('groupBTotal').innerHTML = groupBTotal
document.getElementById('playoffTotal').innerHTML = playoffTotal

document.getElementById('subtotal').innerHTML = playinTotal+groupATotal+groupBTotal+playoffTotal
document.getElementById('finalTotal').innerHTML = (playinTotal+groupATotal+groupBTotal+playoffTotal)*5