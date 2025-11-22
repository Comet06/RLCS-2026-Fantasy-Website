import { path, deployLinks, menu, regions, determineTotalScores, points, determinePlayerRating } from "./main.js";
import { deployTops } from "./stats.js";
import { year, members, players, teams, EventPoints, Regional1, Regional2, Regional3, Regional4, Regional5, Regional6, Regional1Matchups, Regional2Matchups, 
  Regional3Matchups, Regional4Matchups, Regional5Matchups, Regional6Matchups, KickoffMatchups, Major1Matchups, Major2Matchups, ChampionshipMatchups} from "./current-fantasy-members.js";
import { Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements, kickoffLANPlacements, Major1Placements, Major2Placements, ChampionshipPlacements } from "./placements.js";

// {player: 'TBD', gp: 0, wins: 0, score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
let iden = ''
export let regional1Players = [
{player: 'Apparentlyjack', gp: 11, wins: 4, score: 3874, goals: 6, assists: 2, saves: 20, shots: 34},
{player: 'Archie', gp: 11, wins: 7, score: 4931, goals: 11, assists: 11, saves: 19, shots: 39},
{player: 'Ethan', gp: 11, wins: 4, score: 4573, goals: 9, assists: 1, saves: 25, shots: 27},
{player: 'Gawfs', gp: 11, wins: 4, score: 3486, goals: 5, assists: 6, saves: 11, shots: 30},
{player: 'Giuk', gp: 11, wins: 8, score: 5256, goals: 11, assists: 3, saves: 33, shots: 25},
{player: 'Joyo', gp: 11, wins: 4, score: 3276, goals: 2, assists: 5, saves: 15, shots: 36},
{player: 'Nico', gp: 11, wins: 8, score: 4744, goals: 9, assists: 8, saves: 23, shots: 31},
{player: 'Oski', gp: 11, wins: 7, score: 5514, goals: 16, assists: 7, saves: 17, shots: 48},
{player: 'Pluvo', gp: 11, wins: 4, score: 4089, goals: 5, assists: 7, saves: 18, shots: 34},
{player: 'Seikoo', gp: 11, wins: 4, score: 4008, goals: 5, assists: 3, saves: 18, shots: 31},
{player: 'Acro', gp: 11, wins: 8, score: 4108, goals: 8, assists: 8, saves: 16, shots: 24},
{player: 'Nass', gp: 11, wins: 7, score: 4315, goals: 8, assists: 6, saves: 15, shots: 33},
{player: 'Gramma', gp: 10, wins: 4, score: 3600, goals: 6, assists: 5, saves: 17, shots: 22},
{player: 'Hyderr', gp: 10, wins: 4, score: 3660, goals: 7, assists: 4, saves: 14, shots: 22},
{player: 'Atomik', gp: 10, wins: 6, score: 3805, goals: 5, assists: 6, saves: 23, shots: 23},
{player: 'Motion', gp: 10, wins: 3, score: 3928, goals: 4, assists: 3, saves: 23, shots: 26},
{player: 'Ne0n', gp: 10, wins: 3, score: 4275, goals: 5, assists: 6, saves: 28, shots: 41},
{player: 'Rezears', gp: 10, wins: 6, score: 4002, goals: 7, assists: 5, saves: 20, shots: 38},
{player: 'Tox', gp: 10, wins: 6, score: 4209, goals: 4, assists: 4, saves: 26, shots: 25},
{player: 'Mtzr', gp: 10, wins: 7, score: 4344, goals: 10, assists: 8, saves: 17, shots: 31},
{player: 'Radosin', gp: 10, wins: 7, score: 4540, goals: 8, assists: 6, saves: 24, shots: 37},
{player: 'Tms', gp: 10, wins: 4, score: 4910, goals: 12, assists: 7, saves: 21, shots: 36},
{player: 'Vorce', gp: 10, wins: 3, score: 3356, goals: 5, assists: 3, saves: 13, shots: 25},
{player: 'Yujin', gp: 10, wins: 7, score: 3920, goals: 8, assists: 7, saves: 14, shots: 30},
{player: 'Arju', gp: 10, wins: 6, score: 3591, goals: 5, assists: 8, saves: 18, shots: 28},
{player: 'Comm', gp: 10, wins: 4, score: 2930, goals: 3, assists: 5, saves: 15, shots: 19},
{player: 'Creamz', gp: 10, wins: 4, score: 3517, goals: 6, assists: 4, saves: 15, shots: 28},
{player: 'Firstkiller', gp: 10, wins: 7, score: 4719, goals: 10, assists: 4, saves: 21, shots: 51},
{player: 'Kofyr', gp: 10, wins: 7, score: 3552, goals: 7, assists: 3, saves: 17, shots: 32},
{player: 'Lj', gp: 10, wins: 7, score: 3490, goals: 5, assists: 3, saves: 19, shots: 25},
{player: 'Noly', gp: 10, wins: 5, score: 4112, goals: 9, assists: 5, saves: 16, shots: 28},
{player: 'Paarth', gp: 10, wins: 4, score: 3606, goals: 7, assists: 6, saves: 15, shots: 27},
{player: 'Relatingwave', gp: 10, wins: 6, score: 4111, goals: 7, assists: 8, saves: 19, shots: 22},
{player: 'Speed', gp: 10, wins: 6, score: 3663, goals: 7, assists: 2, saves: 17, shots: 29},
{player: 'Wellace', gp: 10, wins: 5, score: 3520, goals: 6, assists: 8, saves: 12, shots: 28},
{player: 'Xprt', gp: 10, wins: 5, score: 5335, goals: 13, assists: 9, saves: 25, shots: 35},
{player: 'Atow', gp: 9, wins: 6, score: 2875, goals: 5, assists: 4, saves: 9, shots: 23},
{player: 'Rxii', gp: 9, wins: 3, score: 2554, goals: 4, assists: 1, saves: 14, shots: 23},
{player: 'Tempoh', gp: 9, wins: 6, score: 3455, goals: 7, assists: 1, saves: 20, shots: 26},
{player: 'Vatira', gp: 9, wins: 6, score: 3600, goals: 9, assists: 2, saves: 13, shots: 39},
{player: 'Accro', gp: 9, wins: 6, score: 2886, goals: 2, assists: 3, saves: 17, shots: 22},
{player: 'Ejby', gp: 9, wins: 6, score: 3455, goals: 6, assists: 5, saves: 17, shots: 24},
{player: 'Growlii', gp: 9, wins: 3, score: 2676, goals: 2, assists: 5, saves: 12, shots: 25},
{player: 'Juicy', gp: 9, wins: 6, score: 2772, goals: 4, assists: 5, saves: 11, shots: 26},
{player: 'Rehzzy', gp: 9, wins: 3, score: 2727, goals: 5, assists: 1, saves: 11, shots: 27},
{player: 'Brenox3k', gp: 9, wins: 4, score: 3106, goals: 4, assists: 4, saves: 18, shots: 20},
{player: 'Dapplutox', gp: 9, wins: 4, score: 3179, goals: 7, assists: 4, saves: 12, shots: 29},
{player: 'Ianpinheiro', gp: 9, wins: 4, score: 3004, goals: 5, assists: 5, saves: 13, shots: 20},
{player: 'Lxucha', gp: 9, wins: 3, score: 3192, goals: 5, assists: 7, saves: 14, shots: 21},
{player: 'Reis', gp: 9, wins: 3, score: 3016, goals: 4, assists: 3, saves: 12, shots: 33},
{player: 'Twistt', gp: 9, wins: 3, score: 3418, goals: 4, assists: 2, saves: 20, shots: 26},
{player: '2piece', gp: 9, wins: 6, score: 3633, goals: 7, assists: 2, saves: 22, shots: 20},
{player: 'Tawk', gp: 9, wins: 6, score: 3629, goals: 7, assists: 4, saves: 19, shots: 24},
{player: 'Wahvey', gp: 9, wins: 6, score: 2796, goals: 3, assists: 6, saves: 12, shots: 19},
{player: 'Mikeboy', gp: 8, wins: 2, score: 2630, goals: 0, assists: 5, saves: 17, shots: 18},
{player: 'Smokez', gp: 8, wins: 2, score: 3130, goals: 7, assists: 1, saves: 14, shots: 21},
{player: 'Toxiic', gp: 8, wins: 2, score: 3449, goals: 6, assists: 2, saves: 19, shots: 16},
{player: 'Davitrox', gp: 8, wins: 2, score: 2741, goals: 6, assists: 2, saves: 11, shots: 21},
{player: 'Kns', gp: 8, wins: 4, score: 2843, goals: 5, assists: 4, saves: 13, shots: 19},
{player: 'Rmn', gp: 8, wins: 2, score: 2941, goals: 4, assists: 7, saves: 13, shots: 26},
{player: 'Crn', gp: 8, wins: 6, score: 3150, goals: 5, assists: 3, saves: 17, shots: 23},
{player: 'Kevinacho', gp: 8, wins: 4, score: 2495, goals: 4, assists: 4, saves: 12, shots: 17},
{player: 'Misery', gp: 8, wins: 4, score: 3821, goals: 8, assists: 5, saves: 21, shots: 28},
{player: 'Nachosky', gp: 8, wins: 3, score: 3198, goals: 8, assists: 3, saves: 12, shots: 30},
{player: 'Nuq', gp: 8, wins: 3, score: 3184, goals: 6, assists: 3, saves: 16, shots: 23},
{player: 'Roods', gp: 8, wins: 3, score: 3161, goals: 2, assists: 7, saves: 15, shots: 22},
{player: 'Shad', gp: 8, wins: 2, score: 2904, goals: 3, assists: 4, saves: 17, shots: 16},
{player: 'Suco', gp: 8, wins: 6, score: 4074, goals: 6, assists: 2, saves: 20, shots: 30},
{player: 'Wisty', gp: 8, wins: 6, score: 2673, goals: 3, assists: 6, saves: 10, shots: 19},
{player: 'Cheese', gp: 8, wins: 6, score: 3360, goals: 5, assists: 5, saves: 18, shots: 22},
{player: 'Frosty', gp: 8, wins: 6, score: 3630, goals: 7, assists: 4, saves: 19, shots: 17},
{player: 'Sosa', gp: 8, wins: 6, score: 3169, goals: 6, assists: 4, saves: 16, shots: 27},
{player: 'Exotiik', gp: 7, wins: 6, score: 2298, goals: 4, assists: 6, saves: 5, shots: 23},
{player: 'Joreuz', gp: 7, wins: 6, score: 2279, goals: 3, assists: 3, saves: 7, shots: 18},
{player: 'Kerian', gp: 7, wins: 1, score: 2377, goals: 1, assists: 4, saves: 14, shots: 19},
{player: 'Thyyder', gp: 7, wins: 1, score: 2534, goals: 6, assists: 0, saves: 13, shots: 15},
{player: 'Crr', gp: 7, wins: 6, score: 2942, goals: 8, assists: 6, saves: 7, shots: 31},
{player: 'Oaly', gp: 7, wins: 6, score: 3686, goals: 11, assists: 6, saves: 13, shots: 31},
{player: 'Scream33', gp: 7, wins: 1, score: 2508, goals: 1, assists: 3, saves: 16, shots: 13},
{player: 'Stizzy', gp: 7, wins: 6, score: 2511, goals: 6, assists: 6, saves: 6, shots: 31},
{player: 'Zen', gp: 7, wins: 6, score: 3467, goals: 11, assists: 5, saves: 9, shots: 31},
{player: 'Folly', gp: 7, wins: 3, score: 2282, goals: 4, assists: 4, saves: 9, shots: 14},
{player: 'Le0', gp: 7, wins: 1, score: 2006, goals: 0, assists: 3, saves: 11, shots: 9},
{player: 'Umbroken', gp: 7, wins: 6, score: 2596, goals: 5, assists: 2, saves: 15, shots: 14},
{player: 'Caard', gp: 7, wins: 1, score: 2592, goals: 7, assists: 0, saves: 13, shots: 21},
{player: 'Davi', gp: 7, wins: 1, score: 2197, goals: 1, assists: 4, saves: 14, shots: 12},
{player: 'Klaus', gp: 7, wins: 6, score: 2565, goals: 5, assists: 6, saves: 10, shots: 26},
{player: 'Lagly', gp: 7, wins: 3, score: 2275, goals: 3, assists: 4, saves: 13, shots: 10},
{player: 'Lucas06', gp: 7, wins: 4, score: 3179, goals: 6, assists: 1, saves: 14, shots: 36},
{player: 'Mav', gp: 7, wins: 4, score: 2184, goals: 2, assists: 1, saves: 13, shots: 16},
{player: 'Pan', gp: 7, wins: 6, score: 2556, goals: 5, assists: 4, saves: 12, shots: 22},
{player: 'Sek', gp: 7, wins: 3, score: 1547, goals: 2, assists: 0, saves: 6, shots: 15},
{player: 'Snipjz', gp: 7, wins: 4, score: 2385, goals: 1, assists: 5, saves: 10, shots: 15},
{player: 'Chronic', gp: 7, wins: 6, score: 2747, goals: 4, assists: 3, saves: 13, shots: 19},
{player: 'Diaz', gp: 7, wins: 6, score: 2665, goals: 5, assists: 3, saves: 12, shots: 26},
{player: 'Reveal', gp: 7, wins: 6, score: 2661, goals: 3, assists: 3, saves: 13, shots: 25},
{player: 'Jweyts', gp: 6, wins: 0, score: 1888, goals: 2, assists: 3, saves: 10, shots: 10},
{player: 'Badnezz', gp: 6, wins: 0, score: 1896, goals: 3, assists: 2, saves: 8, shots: 10},
{player: 'Aztr', gp: 6, wins: 6, score: 2288, goals: 8, assists: 2, saves: 7, shots: 24},
{player: 'Bemmz', gp: 6, wins: 3, score: 1751, goals: 3, assists: 2, saves: 5, shots: 12},
{player: 'Reysbull', gp: 6, wins: 6, score: 1991, goals: 1, assists: 7, saves: 8, shots: 16},
{player: 'Sadness', gp: 6, wins: 6, score: 2502, goals: 6, assists: 3, saves: 7, shots: 21},
{player: 'Brad', gp: 6, wins: 3, score: 2232, goals: 3, assists: 6, saves: 11, shots: 18},
{player: 'Droppz', gp: 6, wins: 3, score: 2304, goals: 5, assists: 3, saves: 8, shots: 20},
{player: 'Atomic', gp: 5, wins: 2, score: 1165, goals: 1, assists: 1, saves: 6, shots: 11},
{player: 'Beastmode', gp: 5, wins: 2, score: 2017, goals: 6, assists: 1, saves: 7, shots: 17},
{player: 'Daniel', gp: 5, wins: 2, score: 1303, goals: 0, assists: 5, saves: 4, shots: 15},
{player: 'Druee', gp: 5, wins: 2, score: 1568, goals: 3, assists: 1, saves: 8, shots: 15},
{player: 'Gyro', gp: 5, wins: 2, score: 1492, goals: 1, assists: 3, saves: 8, shots: 13},
{player: 'Justin', gp: 5, wins: 2, score: 2193, goals: 4, assists: 4, saves: 8, shots: 20},
{player: 'Lev', gp: 5, wins: 0, score: 1720, goals: 4, assists: 3, saves: 8, shots: 10},
{player: 'Life', gp: 5, wins: 2, score: 2106, goals: 4, assists: 4, saves: 9, shots: 12},
{player: 'Majicbear', gp: 5, wins: 2, score: 1535, goals: 4, assists: 1, saves: 4, shots: 16},
{player: 'Pigeon', gp: 5, wins: 0, score: 1934, goals: 2, assists: 2, saves: 10, shots: 12},
{player: 'Resonal', gp: 5, wins: 0, score: 1787, goals: 3, assists: 2, saves: 8, shots: 9},
{player: 'Rise', gp: 5, wins: 2, score: 1146, goals: 1, assists: 1, saves: 5, shots: 15},
{player: 'Aris', gp: 4, wins: 1, score: 1513, goals: 2, assists: 2, saves: 8, shots: 13},
{player: 'Dvo', gp: 4, wins: 1, score: 1107, goals: 1, assists: 1, saves: 5, shots: 9},
{player: 'M80 mech', gp: 4, wins: 1, score: 1981, goals: 3, assists: 2, saves: 11, shots: 8},
{player: 'Wozyen', gp: 3, wins: 0, score: 1523, goals: 4, assists: 2, saves: 8, shots: 7},
{player: 'Wozyen', gp: 3, wins: 0, score: 938, goals: 2, assists: 1, saves: 5, shots: 6},
{player: 'Drufinho', gp: 3, wins: 3, score: 1743, goals: 5, assists: 5, saves: 4, shots: 13},
{player: 'Isma', gp: 3, wins: 0, score: 831, goals: 0, assists: 2, saves: 5, shots: 4},
{player: 'Lostt', gp: 3, wins: 3, score: 1316, goals: 3, assists: 2, saves: 4, shots: 15},
{player: 'Motta', gp: 3, wins: 3, score: 1640, goals: 4, assists: 10, saves: 2, shots: 7},
{player: 'Shezz', gp: 3, wins: 0, score: 1323, goals: 3, assists: 1, saves: 6, shots: 5},
{player: 'Aguz', gp: 3, wins: 0, score: 1227, goals: 3, assists: 1, saves: 8, shots: 8},
{player: 'Darxtz', gp: 3, wins: 0, score: 867, goals: 0, assists: 2, saves: 5, shots: 1},
{player: 'Flare', gp: 3, wins: 0, score: 1035, goals: 1, assists: 1, saves: 7, shots: 5},
{player: 'Kv1exe', gp: 3, wins: 3, score: 1781, goals: 10, assists: 2, saves: 1, shots: 14},
{player: 'Reekkan', gp: 3, wins: 0, score: 1236, goals: 1, assists: 1, saves: 8, shots: 6},
{player: 'Swiftt/', gp: 3, wins: 3, score: 1226, goals: 5, assists: 2, saves: 1, shots: 11},
{player: 'Yanxnz', gp: 3, wins: 3, score: 1183, goals: 2, assists: 5, saves: 2, shots: 8},
{player: 'Ahduhm', gp: 3, wins: 0, score: 855, goals: 0, assists: 0, saves: 7, shots: 4},
{player: 'Ayyjayy', gp: 3, wins: 0, score: 819, goals: 1, assists: 0, saves: 6, shots: 7},
{player: 'Crispy', gp: 3, wins: 3, score: 1680, goals: 5, assists: 3, saves: 5, shots: 15},
{player: 'Garrettg', gp: 3, wins: 0, score: 1296, goals: 3, assists: 0, saves: 8, shots: 6},
{player: 'Hazo', gp: 3, wins: 0, score: 705, goals: 0, assists: 0, saves: 4, shots: 6},
{player: 'Night', gp: 3, wins: 0, score: 856, goals: 1, assists: 0, saves: 6, shots: 5},
{player: 'Percy', gp: 3, wins: 0, score: 1320, goals: 1, assists: 0, saves: 10, shots: 7},
{player: 'Pndh', gp: 3, wins: 0, score: 514, goals: 0, assists: 1, saves: 2, shots: 2},
{player: 'Pzy', gp: 3, wins: 3, score: 1458, goals: 2, assists: 5, saves: 7, shots: 13},
{player: 'S5-cosmic', gp: 3, wins: 0, score: 694, goals: 0, assists: 0, saves: 4, shots: 7},
{player: 'Simas', gp: 3, wins: 3, score: 1622, goals: 6, assists: 4, saves: 4, shots: 12},
{player: 'Squishy', gp: 3, wins: 0, score: 972, goals: 0, assists: 1, saves: 8, shots: 5},

]
let kickoffLANPlayers = []
export let regional2Players = []
export let regional3Players = []
let major1Players = []
export let regional4Players = []
export let regional5Players = []
export let regional6Players = []
let major2Players = []
let championshipPlayers = []
const regionalTable = `
<tr>
  <th>Team Name</th><th>Position</th><th>Player</th><th>Team</th><th>Points</th><th>Total</th>
</tr>
`
const kickofftable = `
<tr>
  <th>Team</th><th>Total</th>
</tr>
`
const majortable = `
<tr>
  <th>Team</th><th>Group Stage</th><th>Playoffs</th><th>Total</th>
</tr>
`
const champtable = `
<tr>
  <th>Championship</th><th>Play-in</th><th>Groups</th><th>Playoffs</th><th>Total</th>
</tr>
`

window.addEventListener('load', function() {
  deployLinks()
  menu()
  document.getElementById('year').innerHTML = `RLCS ${year}`
  if (window.location.pathname === `${path}/event.html`) {
    const urlParams = new URLSearchParams(window.location.search);
    const evt = urlParams.get('name');
    console.log(`${evt} page has loaded!`);
    document.getElementById('event').innerHTML = `${evt}`
    document.getElementById('titlePage').innerHTML = `${evt}`
    determineTotalScores()
    determinePlayerRating()
    if(evt === 'Regional 1'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional1Placements, 1)
      deployReg(Regional1, 1, regional1Players)
      deployMatchups(Regional1Matchups)
      deployTops(regional1Players)
    } else if(evt === 'Regional 2'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional2Placements, 1)
      deployReg(Regional2, 2, regional2Players)
      deployMatchups(Regional2Matchups)
      deployTops(regional2Players)
    } else if(evt === 'Regional 3'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional3Placements, 1)
      deployReg(Regional3, 3, regional3Players)
      deployMatchups(Regional3Matchups)
      deployTops(regional3Players)
    } else if(evt === 'Regional 4'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional4Placements, 2)
      deployReg(Regional4, 4, regional4Players)
      deployMatchups(Regional4Matchups)
      deployTops(regional4Players)
    } else if(evt === 'Regional 5'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional5Placements, 2)
      deployReg(Regional5, 5, regional5Players)
      deployMatchups(Regional5Matchups)
      deployTops(regional5Players)
    } else if(evt === 'Regional 6'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployRegPlacements(Regional6Placements, 2)
      deployReg(Regional6, 6, regional6Players)
      deployMatchups(Regional6Matchups)
      deployTops(regional6Players)
    } else if(evt === 'Major 1'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x3)'
      deployMaj('major1')
      deployMajPlacements(Major1Placements, 1, EventPoints['Major1'].length)
      deployTops(major1Players)
      deployMatchups(Major1Matchups)
    } else if(evt === 'Major 2'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x3)'
      deployMaj('major2')
      deployMajPlacements(Major2Placements, 2, EventPoints['Major2'].length)
      deployTops(major2Players)
      deployMatchups(Major2Matchups)
    } else if(evt === 'Kickoff LAN'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x2)'
      deployMaj('kickoff')
      deployMajPlacements(kickoffLANPlacements, 0, EventPoints[`Kickoff`].length)
      deployTops(kickoffLANPlayers)
      deployMatchups(KickoffMatchups)
    } else if(evt === 'Championship') {
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x5)'
      deployMaj('champ')
      deployTops(championshipPlayers)
      deployMatchups(ChampionshipMatchups)
      deployMajPlacements(ChampionshipPlacements, 3, EventPoints['Champ'].length)
    }
  }
});

export function getPlayerDetails(searchTerm, playersArray){
  const player = playersArray.find(p => p.player === searchTerm);
  if (!player) {
    return [];
  }
  const details = [
    player.team || 'N/A', //0
    player.name || 'N/A', //1
    player.shortname || 'N/A', //2
    player.team.toLowerCase().replaceAll(' ', '_').replaceAll('.', '') || 'N/A', //3
    player.gp || 'N/A', //4
    player.wins || 'N/A', //5
    player.score || 'N/A', //6
    player.goals || 'N/A', //7
    player.assists || 'N/A', //8
    player.saves || 'N/A', //9
    player.shots || 'N/A', //10
  ];
  return details;
}
export function getTeamDetails(searchTerm){
  const team = teams.find(t => t.team === searchTerm);

  if (!team) {
    return []; // Or handle the case where no team is found
  }

  const details = [
    team.region || 'N/A',
    team.split1Pts,
    team.split2Pts,
    team.totalSeasonPts,
    team.team
  ];
  return details;
}
function getMemberDetails(searchTerm){
  const member = members.find(p => p.shortname === searchTerm);
  if (!member) {
    return [];
  }
  const details = [
    member.name || 'N/A',
    member.shortname || 'N/A',
  ];
  return details;
}
export function getPlayerScore(searchTerm, eventName){
  const player = eventName.find(p => p.player === searchTerm);
  if (!player) {return 0;}
  if(player.gp === 0){player.gp = 1}
  const score = Math.round(((player.score/100) + player.goals + player.assists + player.saves + player.shots ) * player.wins * (player.wins/player.gp))
  return score;
}

function deployReg(event, eventNumber, playersArray){
  document.getElementById('ScoreCard').innerHTML = regionalTable

  members.forEach((id) =>{
    switch (eventNumber){
      case 1:
        iden = id.R1
        break
      case 2:
        iden = id.R2
        break
      case 3:
        iden = id.R3
        break
      case 4:
        iden = id.R4
        break
      case 5:
        iden = id.R5
        break
      case 6:
        iden = id.R6
        break
    }
    for (let i = 0; i < event[id.shortname].length; i++){
        const tableBody = document.getElementById('ScoreCard');
        const newRow = document.createElement('tr');
        const memberName = document.createElement('td');
        const memberLink = document.createElement('a');
        const teamName = document.createElement('td');
        const teamLink = document.createElement('a');
        const teamRegion = document.createElement('td');
        const position = document.createElement('td')
        const Player = document.createElement('td');
        const playerLink = document.createElement('a');
        const Points = document.createElement('td');
        const Total = document.createElement('td');
        const team = getPlayerDetails(event[id.shortname][i], players)[0]
        const region = getTeamDetails(team)[0]

        position.id = id.shortname
        Player.id = id.shortname
        Points.id = id.shortname
        if(i === 0 || i === 1 || i === 2){
          position.textContent = 'Player'
        } else {
          position.textContent = 'Sub'
        }
        Points.textContent = getPlayerScore(event[id.shortname][i], playersArray)
        if(i === 0){
          memberName.rowSpan = event[id.shortname].length
          
          memberName.id = id.shortname
          memberLink.textContent = id.name
          memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
          
          
          memberName.appendChild(memberLink)
          newRow.appendChild(memberName);
          
          Total.id = id.shortname
          Total.textContent = iden
          Total.rowSpan = event[id.shortname].length
        }
        
        playerLink.textContent = event[id.shortname][i]
        playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`
        teamName.id = id.shortname
        teamRegion.id = id.shortname
        teamLink.textContent = team
        teamRegion.textContent = region
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(team)}`
        
        Player.appendChild(playerLink)
        teamName.appendChild(teamLink)
                
        newRow.appendChild(position);
        newRow.appendChild(Player);
        newRow.appendChild(teamName);
        // newRow.appendChild(teamRegion);
        newRow.appendChild(Points);
        if(i === 0){
          newRow.appendChild(Total);
        }
        tableBody.appendChild(newRow);
    }
  })
}
function deployMaj(iden){
  if(iden.includes('major')){
    document.getElementById('ScoreCard').innerHTML = majortable
  } else if(iden === 'champ'){
    document.getElementById('ScoreCard').innerHTML = champtable
  } else {
    document.getElementById('ScoreCard').innerHTML = kickofftable
  }
  members.forEach((id) =>{
    const tableBody = document.getElementById('ScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const memberLink = document.createElement('a');

    const playinCell = document.createElement('td');
    const groupsCell = document.createElement('td');
    const playoffsCell = document.createElement('td');
    const totalCell = document.createElement('td');


    
    teamName.id = id.shortname
    playinCell.id = id.shortname
    groupsCell.id = id.shortname
    playoffsCell.id = id.shortname
    totalCell.id = id.shortname
    
    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    teamName.appendChild(memberLink)
    newRow.appendChild(teamName);

    if(iden === 'major1'){
      groupsCell.textContent = id.M1G
      playoffsCell.textContent = id.M1PS + id.M1PF
      totalCell.textContent = id.M1T
      newRow.appendChild(groupsCell);
      newRow.appendChild(playoffsCell);
      newRow.appendChild(totalCell);
    } else if(iden === 'major2'){
      groupsCell.textContent = id.M2G
      playoffsCell.textContent = id.M2PS + id.M2PF
      totalCell.textContent = id.M2T
      newRow.appendChild(groupsCell);
      newRow.appendChild(playoffsCell);
      newRow.appendChild(totalCell);
    } else if(iden === 'champ'){
      playinCell.textContent = id.CHPI
      groupsCell.textContent = id.CHG
      playoffsCell.textContent = id.CHPS + id.CHPF
      totalCell.textContent = id.CHT
      newRow.appendChild(playinCell);
      newRow.appendChild(groupsCell);
      newRow.appendChild(playoffsCell);
      newRow.appendChild(totalCell);
    } else {
      totalCell.textContent = id.KO
      newRow.appendChild(totalCell);
    }

    tableBody.appendChild(newRow);
  })
}

function deployMatchups(event){
  for (let i = 0; i < 10; i += 2){
    const tableBody = document.getElementById('matchups');
    const newRow = document.createElement('tr');
    const team1Link = document.createElement('a');
    const team2Link = document.createElement('a');
    const team1 = document.createElement('td');
    const vs = document.createElement('td');
    const team2 = document.createElement('td');
    if(event[i] != 'TBD'){
      team1.id = getMemberDetails(event[i])[1]
      team1Link.textContent = getMemberDetails(event[i])[0]
      team1Link.href = `${path}/profile.html?name=${encodeURIComponent(getMemberDetails(event[i])[0])}`
    } else {
      team1Link.textContent = event[i]
    }
    vs.textContent = 'vs'
    if(event[i+1] != 'TBD' && event[i+1] != 'Bye'){
      team2.id = getMemberDetails(event[i+1])[1]
      team2Link.textContent = getMemberDetails(event[i+1])[0]
      team2Link.href = `${path}/profile.html?name=${encodeURIComponent(getMemberDetails(event[i+1])[0])}`
    } else {
      team2Link.textContent = event[i+1]
    }
            
    team1.appendChild(team1Link)
    team2.appendChild(team2Link)
    newRow.appendChild(team1);
    newRow.appendChild(vs);
    newRow.appendChild(team2);
    
    tableBody.appendChild(newRow);
  }
}

function deployRegPlacements(event, eventNumber){
  const placements = `
    <table class="section" id="EU">
      <tbody>
        <tr><th colspan="2">EU</th></tr>
      </tbody>
    </table>
    <table class="section" id="NA">
      <tbody>
        <tr><th colspan="2">NA</th></tr>
      </tbody>
    </table>
    <table class="section" id="OCE">
      <tbody>
        <tr><th colspan="2">OCE</th></tr>
      </tbody>
    </table>
    <table class="section" id="SAM">
      <tbody>
        <tr><th colspan="2">SAM</th></tr>
      </tbody>
    </table>
    <table class="section" id="MENA">
      <tbody>
        <tr><th colspan="2">MENA</th></tr>
      </tbody>
    </table>
    <table class="section" id="APAC">
      <tbody>
        <tr><th colspan="2">APAC</th></tr>
      </tbody>
    </table>
    <table class="section" id="SSA">
      <tbody>
        <tr><th colspan="2">SSA</th></tr>
      </tbody>
    </table>
  `
  document.getElementById('placements').innerHTML = placements
  regions.forEach((id) => {
    for (let i = 0; i < event[id.reg].length; i ++){
      const tableBody = document.getElementById(`${id.reg.toUpperCase()}`);
      const newRow = document.createElement('tr');
      const teamLink = document.createElement('a');
      const team = document.createElement('td');
      const pts = document.createElement('td');
      if(event[id.reg][i].length > 0){
        teamLink.textContent = event[id.reg][i]
        const teamUppercase = getTeamDetails(event[id.reg][i])[4]
        if(teamUppercase){
          teamLink.id = teamUppercase.toLowerCase().replaceAll(" ","_").replaceAll(".","")
          teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.reg][i])}`
          team.appendChild(teamLink)
        } else {
          teamLink.style = 'color: red;'
          team.appendChild(teamLink)
        }
      } else {
        team.textContent = "TBD"
      }

      pts.textContent = EventPoints[`Regional${eventNumber}`][i]
      pts.id = 'points'

      newRow.appendChild(team);
      newRow.appendChild(pts);
      
      tableBody.appendChild(newRow);
    }
  })
}
function deployMajPlacements(event, eventNumber, length){
  const placements = `
    <table class="section" id="majplacements">
      <tbody>
      </tbody>
    </table>
  `
  document.getElementById('placements').innerHTML = placements
  for (let i = 0; i < length; i ++){
    const tableBody = document.getElementById('majplacements');
    const newRow = document.createElement('tr');
    const teamLink = document.createElement('a');
    const team = document.createElement('td');
    const pts = document.createElement('td');
    teamLink.textContent = event['Major'][i]
    if (event['Major'][i] != 'TBD'){
      teamLink.id = (getTeamDetails(event['Major'][i])[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Major'][i])}`
    }
    team.appendChild(teamLink)

    if(eventNumber === 0){
      pts.textContent = EventPoints[`Kickoff`][i]
    } else if(eventNumber === 1 || eventNumber === 2){
      pts.textContent = EventPoints[`Major${eventNumber}`][i]
    } else if(eventNumber === 3){
      console.log('hello')
      pts.textContent = EventPoints[`Champ`][i]
    }
    pts.id = 'points'


    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  }
}