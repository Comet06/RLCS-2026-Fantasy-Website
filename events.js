import { path, regions, determineTotalScores, determinePlayerRating, ChampionshipPointsInfo, KickoffPointsInfo, Major1PointsInfo, Major2PointsInfo, EventPoints } from "./main.js";
import { deployTops } from "./stats.js";
import { members, players, teams, Regional1, Regional2, Regional3, Regional4, Regional5, Regional6, Regional1Matchups, Regional2Matchups, 
  Regional3Matchups, Regional4Matchups, Regional5Matchups, Regional6Matchups, KickoffMatchups, Major1Matchups, Major2Matchups, ChampionshipMatchups} from "./members.js";
import { Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements, Placements } from "./placements.js";

// {player: 'TBD', gp: 0, wins: 0, score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
let iden = ''
export let regional1Players = [
{player: '2piece', gp: 15, wins: 10, score: 6018, goals: 11, assists: 3, saves: 37, shots: 37},
{player: 'Abscrazy', gp: 11, wins: 5, score: 4209, goals: 5, assists: 6, saves: 18, shots: 22},
{player: 'Accro', gp: 16, wins: 9, score: 5744, goals: 8, assists: 5, saves: 33, shots: 38},
{player: 'Acronik', gp: 16, wins: 12, score: 5687, goals: 11, assists: 12, saves: 21, shots: 32},
{player: 'Aguz', gp: 11, wins: 4, score: 3508, goals: 3, assists: 4, saves: 19, shots: 30},
{player: 'Ahduhm', gp: 6, wins: 0, score: 2036, goals: 1, assists: 1, saves: 15, shots: 10},
{player: 'Akira0902', gp: 11, wins: 3, score: 3437, goals: 5, assists: 4, saves: 15, shots: 20},
{player: 'Amatel', gp: 11, wins: 3, score: 3152, goals: 6, assists: 4, saves: 10, shots: 21},
{player: 'Apparentlyjack', gp: 11, wins: 4, score: 3874, goals: 6, assists: 2, saves: 20, shots: 34},
{player: 'Archie', gp: 18, wins: 11, score: 7243, goals: 16, assists: 14, saves: 27, shots: 57},
{player: 'Aris', gp: 8, wins: 2, score: 2677, goals: 5, assists: 2, saves: 12, shots: 20},
{player: 'Arju', gp: 14, wins: 6, score: 4492, goals: 5, assists: 8, saves: 22, shots: 32},
{player: 'Arrow', gp: 11, wins: 3, score: 4071, goals: 8, assists: 5, saves: 17, shots: 30},
{player: 'Atomic', gp: 11, wins: 5, score: 3650, goals: 6, assists: 4, saves: 19, shots: 29},
{player: 'Atomik', gp: 17, wins: 9, score: 5892, goals: 9, assists: 9, saves: 31, shots: 43},
{player: 'Atow', gp: 16, wins: 10, score: 4999, goals: 8, assists: 7, saves: 19, shots: 40},
{player: 'Awareant9767', gp: 8, wins: 2, score: 2155, goals: 3, assists: 5, saves: 12, shots: 12},
{player: 'Wavey', gp: 3, wins: 0, score: 1254, goals: 1, assists: 1, saves: 10, shots: 5},
{player: 'Ayyjayy', gp: 7, wins: 1, score: 1989, goals: 2, assists: 2, saves: 13, shots: 15},
{player: 'Aztr', gp: 20, wins: 15, score: 7241, goals: 17, assists: 10, saves: 30, shots: 64},
{player: 'Badnezz', gp: 6, wins: 0, score: 1896, goals: 3, assists: 2, saves: 8, shots: 10},
{player: 'Ballerrees', gp: 16, wins: 12, score: 6350, goals: 15, assists: 18, saves: 23, shots: 55},
{player: 'Beastmode', gp: 11, wins: 5, score: 4153, goals: 10, assists: 4, saves: 18, shots: 31},
{player: 'Bemmz', gp: 10, wins: 4, score: 3149, goals: 6, assists: 3, saves: 11, shots: 23},
{player: 'Brad', gp: 10, wins: 4, score: 3333, goals: 5, assists: 6, saves: 16, shots: 31},
{player: 'Brenox3k', gp: 13, wins: 5, score: 4164, goals: 5, assists: 5, saves: 26, shots: 27},
{player: 'Bunney', gp: 7, wins: 1, score: 1802, goals: 3, assists: 0, saves: 7, shots: 13},
{player: 'Caard', gp: 7, wins: 1, score: 2592, goals: 7, assists: 0, saves: 13, shots: 21},
{player: 'Catalysm', gp: 12, wins: 10, score: 6095, goals: 17, assists: 16, saves: 16, shots: 50},
{player: 'Cheese', gp: 12, wins: 6, score: 4906, goals: 7, assists: 7, saves: 28, shots: 31},
{player: 'Chronic', gp: 11, wins: 10, score: 4593, goals: 9, assists: 5, saves: 20, shots: 29},
{player: 'Closestork5921', gp: 8, wins: 2, score: 3012, goals: 7, assists: 2, saves: 14, shots: 20},
{player: 'Comm', gp: 10, wins: 4, score: 2930, goals: 3, assists: 5, saves: 15, shots: 19},
{player: 'Creamz', gp: 10, wins: 4, score: 3517, goals: 6, assists: 4, saves: 15, shots: 28},
{player: 'Crispy', gp: 13, wins: 8, score: 5039, goals: 7, assists: 10, saves: 21, shots: 36},
{player: 'Crn ', gp: 25, wins: 14, score: 9179, goals: 12, assists: 12, saves: 50, shots: 52},
{player: 'Crr', gp: 12, wins: 10, score: 4695, goals: 10, assists: 8, saves: 16, shots: 52},
{player: 'Daniel', gp: 11, wins: 5, score: 3320, goals: 2, assists: 8, saves: 14, shots: 36},
{player: 'Dapplutox', gp: 13, wins: 5, score: 4407, goals: 10, assists: 4, saves: 16, shots: 36},
{player: 'Darxtz', gp: 11, wins: 4, score: 3554, goals: 4, assists: 5, saves: 17, shots: 19},
{player: 'Davi', gp: 7, wins: 1, score: 2197, goals: 1, assists: 4, saves: 14, shots: 12},
{player: 'Davitrox', gp: 8, wins: 2, score: 2741, goals: 6, assists: 2, saves: 11, shots: 21},
{player: 'Diaz', gp: 11, wins: 10, score: 4440, goals: 10, assists: 6, saves: 18, shots: 41},
{player: 'Droppz', gp: 10, wins: 4, score: 3212, goals: 5, assists: 5, saves: 10, shots: 31},
{player: 'Druee', gp: 9, wins: 3, score: 2780, goals: 3, assists: 1, saves: 20, shots: 19},
{player: 'Drufinho', gp: 26, wins: 16, score: 11288, goals: 24, assists: 24, saves: 45, shots: 77},
{player: 'Dvo', gp: 8, wins: 2, score: 2902, goals: 4, assists: 5, saves: 16, shots: 22},
{player: 'Eco', gp: 12, wins: 7, score: 4689, goals: 11, assists: 12, saves: 13, shots: 46},
{player: 'Ejby', gp: 16, wins: 9, score: 5608, goals: 6, assists: 7, saves: 29, shots: 34},
{player: 'Ethan', gp: 11, wins: 4, score: 4573, goals: 9, assists: 1, saves: 25, shots: 27},
{player: 'Exotiik', gp: 12, wins: 7, score: 3613, goals: 4, assists: 7, saves: 13, shots: 36},
{player: 'Firstkiller', gp: 14, wins: 11, score: 6649, goals: 16, assists: 4, saves: 28, shots: 65},
{player: 'Flare', gp: 11, wins: 4, score: 3973, goals: 7, assists: 1, saves: 21, shots: 27},
{player: 'Fnsi', gp: 12, wins: 7, score: 4193, goals: 9, assists: 7, saves: 19, shots: 21},
{player: 'Folly', gp: 15, wins: 6, score: 5941, goals: 9, assists: 8, saves: 30, shots: 33},
{player: 'Freez astroz', gp: 9, wins: 4, score: 2864, goals: 4, assists: 4, saves: 15, shots: 29},
{player: 'Frosty   ', gp: 12, wins: 6, score: 5423, goals: 10, assists: 6, saves: 28, shots: 30},
{player: 'Furlashh', gp: 12, wins: 8, score: 4547, goals: 13, assists: 8, saves: 16, shots: 33},
{player: 'Garrettg', gp: 7, wins: 1, score: 3018, goals: 6, assists: 1, saves: 20, shots: 13},
{player: 'Gawfs', gp: 11, wins: 4, score: 3486, goals: 5, assists: 6, saves: 11, shots: 30},
{player: 'Giuk', gp: 16, wins: 12, score: 7563, goals: 15, assists: 6, saves: 46, shots: 32},
{player: 'Gramma', gp: 10, wins: 4, score: 3600, goals: 6, assists: 5, saves: 17, shots: 22},
{player: 'Growlii', gp: 9, wins: 3, score: 2676, goals: 2, assists: 5, saves: 12, shots: 25},
{player: 'Gyro', gp: 9, wins: 3, score: 2564, goals: 2, assists: 4, saves: 13, shots: 22},
{player: 'Halloww', gp: 9, wins: 4, score: 3571, goals: 5, assists: 7, saves: 17, shots: 25},
{player: 'Hashir', gp: 9, wins: 4, score: 2757, goals: 7, assists: 3, saves: 11, shots: 23},
{player: 'Hazo', gp: 6, wins: 0, score: 1655, goals: 0, assists: 1, saves: 10, shots: 14},
{player: 'Hyderr', gp: 10, wins: 4, score: 3660, goals: 7, assists: 4, saves: 14, shots: 22},
{player: 'Ianpinheiro', gp: 13, wins: 5, score: 4088, goals: 6, assists: 7, saves: 18, shots: 28},
{player: 'Isma', gp: 7, wins: 1, score: 2207, goals: 1, assists: 2, saves: 13, shots: 13},
{player: 'Iurakye', gp: 1, wins: 0, score: 170, goals: 0, assists: 0, saves: 1, shots: 2},
{player: 'Jb0x', gp: 12, wins: 6, score: 3900, goals: 7, assists: 8, saves: 17, shots: 26},
{player: 'Jocse', gp: 3, wins: 3, score: 1623, goals: 5, assists: 3, saves: 4, shots: 8},
{player: 'Joreuz', gp: 12, wins: 10, score: 4479, goals: 7, assists: 4, saves: 19, shots: 35},
{player: 'Joyo', gp: 11, wins: 4, score: 3276, goals: 2, assists: 5, saves: 15, shots: 36},
{player: 'Juicy', gp: 16, wins: 10, score: 5165, goals: 9, assists: 8, saves: 21, shots: 43},
{player: 'Justin', gp: 16, wins: 12, score: 7260, goals: 16, assists: 11, saves: 29, shots: 61},
{player: 'Jweyt', gp: 6, wins: 0, score: 1888, goals: 2, assists: 3, saves: 10, shots: 10},
{player: 'Kaizen', gp: 11, wins: 4, score: 3354, goals: 6, assists: 9, saves: 9, shots: 24},
{player: 'Kash', gp: 12, wins: 8, score: 4747, goals: 6, assists: 11, saves: 21, shots: 37},
{player: 'Kerian', gp: 7, wins: 1, score: 2377, goals: 1, assists: 4, saves: 14, shots: 19},
{player: 'Kxrvin', gp: 11, wins: 5, score: 3606, goals: 9, assists: 5, saves: 12, shots: 25},
{player: 'Kevinacho', gp: 21, wins: 12, score: 7526, goals: 19, assists: 6, saves: 33, shots: 53},
{player: 'Kha/)"kha0', gp: 12, wins: 7, score: 4518, goals: 13, assists: 5, saves: 16, shots: 42},
{player: 'Klaus', gp: 19, wins: 10, score: 6224, goals: 12, assists: 10, saves: 21, shots: 61},
{player: 'Kevin', gp: 12, wins: 10, score: 3889, goals: 12, assists: 13, saves: 4, shots: 31},
{player: 'Kns', gp: 21, wins: 12, score: 7944, goals: 10, assists: 12, saves: 37, shots: 58},
{player: 'Kofyr', gp: 14, wins: 11, score: 4891, goals: 10, assists: 5, saves: 21, shots: 43},
{player: 'Kv1', gp: 26, wins: 16, score: 10457, goals: 25, assists: 20, saves: 36, shots: 79},
{player: 'Kylo', gp: 14, wins: 7, score: 4625, goals: 8, assists: 6, saves: 24, shots: 32},
{player: 'Lagly', gp: 15, wins: 6, score: 4608, goals: 6, assists: 8, saves: 24, shots: 26},
{player: 'Lct', gp: 16, wins: 12, score: 6779, goals: 18, assists: 14, saves: 23, shots: 50},
{player: 'Le0', gp: 7, wins: 1, score: 2006, goals: 0, assists: 3, saves: 11, shots: 9},
{player: 'Lev', gp: 16, wins: 6, score: 5416, goals: 9, assists: 6, saves: 28, shots: 33},
{player: 'Life', gp: 9, wins: 3, score: 3367, goals: 5, assists: 5, saves: 15, shots: 21},
{player: 'Lj', gp: 14, wins: 11, score: 4328, goals: 5, assists: 6, saves: 22, shots: 30},
{player: 'Lostt', gp: 26, wins: 18, score: 9996, goals: 23, assists: 20, saves: 32, shots: 97},
{player: 'Lucas06', gp: 10, wins: 4, score: 3886, goals: 7, assists: 2, saves: 17, shots: 43},
{player: 'Lunar', gp: 16, wins: 12, score: 8446, goals: 27, assists: 13, saves: 25, shots: 68},
{player: 'Lunatic', gp: 12, wins: 6, score: 4921, goals: 11, assists: 6, saves: 23, shots: 33},
{player: 'Lxucha', gp: 9, wins: 3, score: 3192, goals: 5, assists: 7, saves: 14, shots: 21},
{player: 'Machi', gp: 6, wins: 0, score: 1819, goals: 2, assists: 1, saves: 11, shots: 11},
{player: 'Madhin987', gp: 15, wins: 7, score: 6050, goals: 17, assists: 9, saves: 20, shots: 54},
{player: 'Majicbear', gp: 16, wins: 12, score: 5684, goals: 11, assists: 9, saves: 23, shots: 51},
{player: 'Mav', gp: 10, wins: 4, score: 3110, goals: 2, assists: 2, saves: 17, shots: 20},
{player: 'Maxeew', gp: 12, wins: 8, score: 4720, goals: 13, assists: 7, saves: 15, shots: 28},
{player: 'Mech', gp: 8, wins: 2, score: 3101, goals: 5, assists: 2, saves: 16, shots: 22},
{player: 'Mikeboy', gp: 8, wins: 2, score: 2630, goals: 0, assists: 5, saves: 17, shots: 18},
{player: 'Mildpork', gp: 8, wins: 2, score: 2342, goals: 5, assists: 1, saves: 11, shots: 19},
{player: 'Misery', gp: 21, wins: 12, score: 9442, goals: 13, assists: 16, saves: 51, shots: 71},
{player: 'Misty', gp: 7, wins: 1, score: 2149, goals: 0, assists: 3, saves: 11, shots: 21},
{player: 'Motion', gp: 10, wins: 3, score: 3928, goals: 4, assists: 3, saves: 23, shots: 26},
{player: 'Motta', gp: 26, wins: 16, score: 11870, goals: 31, assists: 24, saves: 34, shots: 93},
{player: 'Mtzr', gp: 15, wins: 8, score: 5794, goals: 14, assists: 9, saves: 20, shots: 44},
{player: 'Nachosky', gp: 17, wins: 7, score: 6206, goals: 12, assists: 7, saves: 29, shots: 42},
{player: 'Nass', gp: 18, wins: 11, score: 6648, goals: 11, assists: 9, saves: 28, shots: 49},
{player: 'Ne0n', gp: 10, wins: 3, score: 4275, goals: 5, assists: 6, saves: 28, shots: 41},
{player: 'Nico', gp: 16, wins: 12, score: 6564, goals: 13, assists: 11, saves: 30, shots: 49},
{player: 'Night', gp: 11, wins: 4, score: 3383, goals: 6, assists: 6, saves: 13, shots: 31},
{player: 'Noly', gp: 13, wins: 5, score: 5048, goals: 11, assists: 5, saves: 19, shots: 36},
{player: 'Nuq', gp: 17, wins: 7, score: 7066, goals: 13, assists: 7, saves: 37, shots: 53},
{player: 'Nvi', gp: 12, wins: 10, score: 4200, goals: 10, assists: 8, saves: 14, shots: 29},
{player: 'Oaly', gp: 12, wins: 10, score: 5697, goals: 14, assists: 12, saves: 22, shots: 46},
{player: 'Oski', gp: 18, wins: 11, score: 8036, goals: 19, assists: 9, saves: 32, shots: 64},
{player: 'Paarth', gp: 10, wins: 4, score: 3606, goals: 7, assists: 6, saves: 15, shots: 27},
{player: 'Pan', gp: 19, wins: 10, score: 6709, goals: 13, assists: 8, saves: 33, shots: 50},
{player: 'Percy', gp: 11, wins: 4, score: 5027, goals: 8, assists: 4, saves: 28, shots: 37},
{player: 'Pigeon', gp: 16, wins: 6, score: 5525, goals: 6, assists: 10, saves: 28, shots: 38},
{player: 'Pluvo', gp: 11, wins: 4, score: 4089, goals: 5, assists: 7, saves: 18, shots: 34},
{player: 'Pndh', gp: 11, wins: 4, score: 3061, goals: 4, assists: 5, saves: 11, shots: 20},
{player: 'Porsas52', gp: 14, wins: 7, score: 5800, goals: 14, assists: 8, saves: 24, shots: 39},
{player: 'Pzy', gp: 13, wins: 8, score: 4626, goals: 6, assists: 11, saves: 22, shots: 44},
{player: 'Radosin', gp: 15, wins: 8, score: 5781, goals: 9, assists: 7, saves: 31, shots: 45},
{player: 'Ray', gp: 6, wins: 0, score: 2062, goals: 4, assists: 2, saves: 9, shots: 18},
{player: 'Reekkan', gp: 7, wins: 1, score: 2852, goals: 2, assists: 1, saves: 17, shots: 16},
{player: 'Rehzzy', gp: 9, wins: 3, score: 2727, goals: 5, assists: 1, saves: 11, shots: 27},
{player: 'Reis', gp: 9, wins: 3, score: 3016, goals: 4, assists: 3, saves: 12, shots: 33},
{player: 'Relatingwave', gp: 14, wins: 6, score: 5180, goals: 7, assists: 9, saves: 25, shots: 28},
{player: 'Resonal', gp: 16, wins: 6, score: 5443, goals: 10, assists: 4, saves: 24, shots: 31},
{player: 'Reveal', gp: 11, wins: 10, score: 4111, goals: 6, assists: 7, saves: 17, shots: 37},
{player: 'Reysbull', gp: 20, wins: 15, score: 7076, goals: 9, assists: 19, saves: 28, shots: 55},
{player: 'Rezears', gp: 17, wins: 9, score: 6860, goals: 10, assists: 9, saves: 36, shots: 61},
{player: 'Rigorous', gp: 15, wins: 7, score: 5295, goals: 8, assists: 12, saves: 22, shots: 34},
{player: 'Rise', gp: 16, wins: 12, score: 5688, goals: 13, assists: 9, saves: 19, shots: 56},
{player: 'Risk', gp: 12, wins: 10, score: 5208, goals: 18, assists: 8, saves: 7, shots: 41},
{player: 'Rmn', gp: 8, wins: 2, score: 2941, goals: 4, assists: 7, saves: 13, shots: 26},
{player: 'Roman', gp: 8, wins: 2, score: 2526, goals: 5, assists: 2, saves: 12, shots: 16},
{player: 'Roods', gp: 17, wins: 7, score: 7224, goals: 8, assists: 11, saves: 39, shots: 44},
{player: 'Rqfts', gp: 14, wins: 7, score: 5389, goals: 12, assists: 8, saves: 26, shots: 24},
{player: 'Rrei', gp: 3, wins: 0, score: 704, goals: 1, assists: 1, saves: 2, shots: 6},
{player: 'Rxii', gp: 9, wins: 3, score: 2554, goals: 4, assists: 1, saves: 14, shots: 23},
{player: 'S5-cosmic', gp: 6, wins: 0, score: 1779, goals: 2, assists: 1, saves: 9, shots: 17},
{player: 'Sadness', gp: 20, wins: 15, score: 8203, goals: 21, assists: 9, saves: 30, shots: 51},
{player: 'Scream33', gp: 7, wins: 1, score: 2508, goals: 1, assists: 3, saves: 16, shots: 13},
{player: 'Seikoo', gp: 11, wins: 4, score: 4008, goals: 5, assists: 3, saves: 18, shots: 31},
{player: 'Sek', gp: 15, wins: 6, score: 4331, goals: 6, assists: 3, saves: 19, shots: 42},
{player: 'Shad', gp: 8, wins: 2, score: 2904, goals: 3, assists: 4, saves: 17, shots: 16},
{player: 'Shezz', gp: 7, wins: 1, score: 3033, goals: 5, assists: 3, saves: 15, shots: 18},
{player: 'Simas', gp: 3, wins: 0, score: 868, goals: 1, assists: 0, saves: 5, shots: 4},
{player: 'Simas', gp: 10, wins: 8, score: 4546, goals: 14, assists: 5, saves: 15, shots: 40},
{player: 'Smokez', gp: 8, wins: 2, score: 3130, goals: 7, assists: 1, saves: 14, shots: 21},
{player: 'Snipjz', gp: 10, wins: 4, score: 3364, goals: 3, assists: 6, saves: 15, shots: 24},
{player: 'Solanun', gp: 8, wins: 2, score: 2474, goals: 2, assists: 5, saves: 14, shots: 17},
{player: 'Sosa', gp: 8, wins: 2, score: 2893, goals: 5, assists: 3, saves: 13, shots: 15},
{player: 'Sosa', gp: 12, wins: 6, score: 4086, goals: 8, assists: 5, saves: 20, shots: 36},
{player: 'Speed', gp: 14, wins: 6, score: 4587, goals: 8, assists: 2, saves: 20, shots: 37},
{player: 'Sphinx', gp: 12, wins: 10, score: 6390, goals: 20, assists: 17, saves: 15, shots: 42},
{player: 'Squig', gp: 7, wins: 1, score: 1441, goals: 2, assists: 0, saves: 3, shots: 14},
{player: 'Squishy', gp: 7, wins: 1, score: 2629, goals: 2, assists: 1, saves: 19, shots: 16},
{player: 'Stizzy', gp: 12, wins: 7, score: 4741, goals: 9, assists: 8, saves: 19, shots: 45},
{player: 'Suco', gp: 25, wins: 14, score: 11720, goals: 19, assists: 11, saves: 63, shots: 82},
{player: 'Svrnd', gp: 3, wins: 0, score: 1013, goals: 2, assists: 2, saves: 5, shots: 8},
{player: 'Swiftt', gp: 26, wins: 18, score: 8236, goals: 18, assists: 18, saves: 26, shots: 65},
{player: 'Taha', gp: 12, wins: 6, score: 5325, goals: 11, assists: 8, saves: 22, shots: 30},
{player: 'Tawk', gp: 15, wins: 10, score: 5863, goals: 10, assists: 8, saves: 27, shots: 44},
{player: 'Tempoh', gp: 16, wins: 9, score: 6185, goals: 11, assists: 5, saves: 32, shots: 43},
{player: 'Thyyder', gp: 7, wins: 1, score: 2534, goals: 6, assists: 0, saves: 13, shots: 15},
{player: 'Tms', gp: 10, wins: 4, score: 4910, goals: 12, assists: 7, saves: 21, shots: 36},
{player: 'Tossis', gp: 6, wins: 0, score: 1764, goals: 2, assists: 2, saves: 10, shots: 11},
{player: 'Tox', gp: 17, wins: 9, score: 6227, goals: 8, assists: 5, saves: 34, shots: 37},
{player: 'Toxiic', gp: 8, wins: 2, score: 3449, goals: 6, assists: 2, saves: 19, shots: 16},
{player: 'Twistt', gp: 9, wins: 3, score: 3418, goals: 4, assists: 2, saves: 20, shots: 26},
{player: 'Umbroken', gp: 19, wins: 10, score: 6416, goals: 10, assists: 8, saves: 33, shots: 40},
{player: 'Validzetsubusoro', gp: 12, wins: 10, score: 4516, goals: 12, assists: 10, saves: 15, shots: 30},
{player: 'Vatira', gp: 16, wins: 10, score: 6150, goals: 14, assists: 6, saves: 22, shots: 65},
{player: 'Vav', gp: 11, wins: 5, score: 3469, goals: 6, assists: 4, saves: 15, shots: 20},
{player: 'Vorce', gp: 10, wins: 3, score: 3356, goals: 5, assists: 3, saves: 13, shots: 25},
{player: 'Wahvey', gp: 15, wins: 10, score: 4697, goals: 7, assists: 9, saves: 17, shots: 37},
{player: 'Wellace', gp: 13, wins: 5, score: 4184, goals: 6, assists: 8, saves: 16, shots: 31},
{player: 'Wisty', gp: 25, wins: 14, score: 10261, goals: 17, assists: 15, saves: 48, shots: 74},
{player: 'Wozyen', gp: 6, wins: 0, score: 2461, goals: 6, assists: 3, saves: 13, shots: 13},
{player: 'Xprt', gp: 13, wins: 5, score: 5779, goals: 13, assists: 9, saves: 28, shots: 36},
{player: 'Yanxnz', gp: 26, wins: 18, score: 11149, goals: 25, assists: 19, saves: 38, shots: 85},
{player: 'Yujin', gp: 15, wins: 8, score: 5378, goals: 9, assists: 8, saves: 22, shots: 45},
{player: 'Zen', gp: 12, wins: 7, score: 6077, goals: 14, assists: 7, saves: 24, shots: 46},
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
const kickoffPointsInfo = `
<h3>Kickoff Max Points</h3>
<table id="Kickoff_points">
  <tbody>
    <tr>
      <th>Round</th><th>Picks</th><th>Points</th><th>Total Points</th>
    </tr>
    <tr>
      <td>Bracket</td><td id="kickoffPicks"></td><td id="kickoffPoints"></td><td id="kickoffTotal"></td>
    </tr>
    <tr>
      <td>Kickoff Multiplier</td><td>2X</td><td>Total Kickoff Points</td><td id="kickoffTotalMulti"></td>
    </tr>
  </tbody>
</table>
`
const major1PointsInfo = `
<h3>Major 1 Max Points</h3>
<table id="Major_points">
  <tbody>
    <tr>
      <th>Round</th><th>(Picks)Points(QF/SF)</th><th>(Picks)Points(F/GF)</th><th>Total Points</th>
    </tr>
    <tr>
      <td>Groups</td><td id="M1groupsQPicks"></td><td></td><td id="M1groupsTotal"></td>
    </tr>
    <tr>
      <td>Playoffs</td><td id="M1playoffsQPicks"></td><td id="M1playoffsFPicks"></td><td id="M1playoffsTotal"></td>
    </tr>
    <tr>
      <td>Major Multiplier</td><td>3X</td><td>Total Major 1 Points</td><td id="M1totalMulti"></td>
    </tr>
  </tbody>
</table>
`
const major2PointsInfo = `
<h3>Major 2 Max Points</h3>
<table id="Major_points">
  <tbody>
    <tr>
      <th>Round</th><th>(Picks)Points(QF/SF)</th><th>(Picks)Points(F/GF)</th><th>Total Points</th>
    </tr>
    <tr>
      <td>Groups</td><td id="M2groupsQPicks"></td><td></td><td id="M2groupsTotal"></td>
    </tr>
    <tr>
      <td>Playoffs</td><td id="M2playoffsQPicks"></td><td id="M2playoffsFPicks"></td><td id="M2playoffsTotal"></td>
    </tr>
    <tr>
      <td>Major Multiplier</td><td>3X</td><td>Total Major 2 Points</td><td id="M2totalMulti"></td>
    </tr>
  </tbody>
</table>
`
const championshipPointsInfo = `
<h3>Championship Max Points</h3>
<table id="Champ_points">
  <tbody>
    <tr>
      <th>Round</th><th>(Picks)Points(QF/SF)</th><th>(Picks)Points(F/GF)</th><th>Total Points</th>
    </tr>
    <tr>
      <td>Playins</td><td id="CPQPicks"></td><td id="CPFPicks"></td><td id="CPTotal"></td>
    </tr>
    <tr>
      <td>Groups</td><td id="CgroupsQPicks"></td><td></td><td id="CgroupsTotal"></td>
    </tr>
    <tr>
      <td>Playoffs</td><td id="CplayoffsQPicks"></td><td id="CplayoffsFPicks"></td><td id="CplayoffsTotal"></td>
    </tr>
    <tr>
      <td>Championship Multiplier</td><td>5X</td><td>Total Championship Points</td><td id="CtotalMulti"></td>
    </tr>
  </tbody>
</table>
`
window.addEventListener('load', function() {
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
      deployMajPlacements(Placements, 1, EventPoints['Major1'].length)
      deployTops(major1Players)
      deployMatchups(Major1Matchups)
      document.getElementById('pointsInfo').innerHTML = major1PointsInfo
      Major1PointsInfo()
    } else if(evt === 'Major 2'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x3)'
      deployMaj('major2')
      deployMajPlacements(Placements, 2, EventPoints['Major2'].length)
      deployTops(major2Players)
      deployMatchups(Major2Matchups)
      document.getElementById('pointsInfo').innerHTML = major2PointsInfo
      Major2PointsInfo()
    } else if(evt === 'Kickoff LAN'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x2)'
      deployMaj('kickoff')
      deployMajPlacements(Placements, 0, EventPoints[`Kickoff`].length)
      deployTops(kickoffLANPlayers)
      deployMatchups(KickoffMatchups)
      document.getElementById('pointsInfo').innerHTML = kickoffPointsInfo
      KickoffPointsInfo()
    } else if(evt === 'Championship') {
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x5)'
      deployMaj('champ')
      deployTops(championshipPlayers)
      deployMatchups(ChampionshipMatchups)
      deployMajPlacements(Placements, 3, EventPoints['Champ'].length)
      document.getElementById('pointsInfo').innerHTML = championshipPointsInfo
      ChampionshipPointsInfo()
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
export function getPlayerScore(searchTerm, eventName){
  const player = eventName.find(p => p.player === searchTerm);
  if (!player) {return 0;}
  if(player.gp === 0){player.gp = 1}
  const score = Math.round(((player.score/10) + player.goals + player.assists + player.saves + player.shots ) * (player.wins/player.gp))
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
        if(i < 3){
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


    if(eventNumber === 0){
      pts.textContent = EventPoints[`Kickoff`][i]
      teamLink.textContent = event['Kickoff'][i]
      if (event['Kickoff'][i] != 'TBD'){
        teamLink.id = (getTeamDetails(event['Kickoff'][i])[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Kickoff'][i])}`
      }
    } else if(eventNumber === 1){
      teamLink.textContent = event['Major1'][i]
      if (event['Major1'][i] != 'TBD'){
        teamLink.id = (getTeamDetails(event['Major1'][i])[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Major1'][i])}`
      }
      pts.textContent = EventPoints[`Major${eventNumber}`][i]
    } else if(eventNumber === 2){
      teamLink.textContent = event['Major2'][i]
      if (event['Major2'][i] != 'TBD'){
        teamLink.id = (getTeamDetails(event['Major2'][i])[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Major2'][i])}`
      }
      pts.textContent = EventPoints[`Major${eventNumber}`][i]
    } else if(eventNumber === 3){
      teamLink.textContent = event['Champ'][i]
      if (event['Champ'][i] != 'TBD'){
        teamLink.id = (getTeamDetails(event['Champ'][i])[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Champ'][i])}`
      }
      pts.textContent = EventPoints[`Champ`][i]
    }
    pts.id = 'points'


    team.appendChild(teamLink)
    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  }
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
    const member1 = members.find(p => p.shortname === event[i]);
    const member2 = members.find(p => p.shortname === event[i+1]);
    if(event[i] != 'TBD'){
      team1.id = member1.shortname
      team1Link.textContent = member1.name
      team1Link.href = `${path}/profile.html?name=${encodeURIComponent(member1.name)}`
    } else {
      team1Link.textContent = event[i]
    }
    vs.textContent = 'vs'
    if(event[i+1] != 'TBD'){
      team2.id = member2.shortname
      team2Link.textContent = member2.name
      team2Link.href = `${path}/profile.html?name=${encodeURIComponent(member2.name)}`
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
