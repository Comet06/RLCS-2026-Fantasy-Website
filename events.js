import { members, players, teams, Regional1, Regional2, Regional3, Regional4, Regional5, Regional6, Regional1Matchups, Regional2Matchups, 
  Regional3Matchups, Regional4Matchups, Regional5Matchups, Regional6Matchups, KickoffMatchups, Major1Matchups, Major2Matchups, ChampionshipMatchups} from "./members.js";
import { path, regions, determineTotalScores, determinePlayerRating, ChampionshipPointsInfo, KickoffPointsInfo, Major1PointsInfo, Major2PointsInfo, EventPoints, points } from "./main.js";
import { Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements, Placements } from "./placements.js";
import { deployTops } from "./stats.js";

// {player: 'TBD', gp: 0, wins: 0, score: 0, goals: 0, assists: 0, saves: 0, shots: 0},
let iden = ''
export let regional1Players = [
{player: '2die4', gp: 23, wins: 18, score: 8930, goals: 23, assists: 13, saves: 35, shots: 80},
{player: '2piece', gp: 22, wins: 13, score: 8707, goals: 14, assists: 4, saves: 55, shots: 50},
{player: '7kexii', gp: 19, wins: 10, score: 7124, goals: 9, assists: 18, saves: 37, shots: 40},
{player: 'Abdullah', gp: 21, wins: 12, score: 9126, goals: 12, assists: 15, saves: 53, shots: 73},
{player: 'Abo mzoon', gp: 8, wins: 3, score: 3085, goals: 6, assists: 1, saves: 16, shots: 24},
{player: 'Abscrazy', gp: 11, wins: 5, score: 4209, goals: 5, assists: 6, saves: 18, shots: 22},
{player: 'Accro', gp: 23, wins: 12, score: 7776, goals: 11, assists: 9, saves: 40, shots: 54},
{player: 'Acronik', gp: 28, wins: 17, score: 10135, goals: 16, assists: 18, saves: 47, shots: 61},
{player: 'Aguz', gp: 11, wins: 4, score: 3508, goals: 3, assists: 4, saves: 19, shots: 30},
{player: 'Ahduhm', gp: 6, wins: 0, score: 2036, goals: 1, assists: 1, saves: 15, shots: 10},
{player: 'Ajf', gp: 9, wins: 3, score: 3211, goals: 2, assists: 5, saves: 22, shots: 22},
{player: 'Akira0902', gp: 11, wins: 3, score: 3437, goals: 5, assists: 4, saves: 15, shots: 20},
{player: 'Amatel', gp: 11, wins: 3, score: 3152, goals: 6, assists: 4, saves: 10, shots: 21},
{player: 'Amphis', gp: 27, wins: 17, score: 9519, goals: 19, assists: 14, saves: 32, shots: 72},
{player: 'Anyeelo', gp: 13, wins: 6, score: 4584, goals: 10, assists: 10, saves: 10, shots: 41},
{player: 'Apparentlyjack', gp: 11, wins: 4, score: 3874, goals: 6, assists: 2, saves: 20, shots: 34},
{player: 'Apples', gp: 10, wins: 4, score: 3255, goals: 8, assists: 3, saves: 10, shots: 24},
{player: 'Archie', gp: 18, wins: 11, score: 7243, goals: 16, assists: 14, saves: 27, shots: 57},
{player: 'Aris', gp: 8, wins: 2, score: 2677, goals: 5, assists: 2, saves: 12, shots: 20},
{player: 'Arju', gp: 14, wins: 6, score: 4492, goals: 5, assists: 8, saves: 22, shots: 32},
{player: 'Arrow', gp: 11, wins: 3, score: 4071, goals: 8, assists: 5, saves: 17, shots: 30},
{player: 'Atomic', gp: 11, wins: 5, score: 3650, goals: 6, assists: 4, saves: 19, shots: 29},
{player: 'Atomik', gp: 17, wins: 9, score: 5892, goals: 9, assists: 9, saves: 31, shots: 43},
{player: 'Atow', gp: 28, wins: 18, score: 8924, goals: 14, assists: 12, saves: 35, shots: 80},
{player: 'Awareant9767', gp: 8, wins: 2, score: 2155, goals: 3, assists: 5, saves: 12, shots: 12},
{player: 'Ayyjayy', gp: 7, wins: 1, score: 1989, goals: 2, assists: 2, saves: 13, shots: 15},
{player: 'Aztr', gp: 20, wins: 15, score: 7241, goals: 17, assists: 10, saves: 30, shots: 64},
{player: 'B2sel', gp: 25, wins: 13, score: 9161, goals: 11, assists: 15, saves: 49, shots: 64},
{player: 'Badnezz', gp: 6, wins: 0, score: 1896, goals: 3, assists: 2, saves: 8, shots: 10},
{player: 'Bal', gp: 11, wins: 5, score: 4121, goals: 6, assists: 6, saves: 21, shots: 28},
{player: 'Balakeplease', gp: 11, wins: 4, score: 3674, goals: 3, assists: 7, saves: 20, shots: 19},
{player: 'Ballerrees', gp: 16, wins: 12, score: 6350, goals: 15, assists: 18, saves: 23, shots: 55},
{player: 'Bananacat', gp: 7, wins: 1, score: 3152, goals: 5, assists: 5, saves: 16, shots: 24},
{player: 'Bananahead', gp: 23, wins: 17, score: 10425, goals: 35, assists: 12, saves: 32, shots: 83},
{player: 'Baz', gp: 11, wins: 4, score: 3897, goals: 9, assists: 3, saves: 17, shots: 27},
{player: 'Beastmode', gp: 11, wins: 5, score: 4153, goals: 10, assists: 4, saves: 18, shots: 31},
{player: 'Bemmz', gp: 10, wins: 4, score: 3149, goals: 6, assists: 3, saves: 11, shots: 23},
{player: 'Big gez', gp: 11, wins: 5, score: 3637, goals: 6, assists: 7, saves: 17, shots: 31},
{player: 'Bigfoot0', gp: 13, wins: 6, score: 4225, goals: 12, assists: 4, saves: 17, shots: 34},
{player: 'Bluii', gp: 8, wins: 3, score: 2147, goals: 3, assists: 5, saves: 9, shots: 20},
{player: 'Boitjie tweex', gp: 18, wins: 10, score: 6248, goals: 18, assists: 6, saves: 20, shots: 49},
{player: 'Brad', gp: 10, wins: 4, score: 3333, goals: 5, assists: 6, saves: 16, shots: 31},
{player: 'Brenox3k', gp: 13, wins: 5, score: 4164, goals: 5, assists: 5, saves: 26, shots: 27},
{player: 'Bunney', gp: 7, wins: 1, score: 1802, goals: 3, assists: 0, saves: 7, shots: 13},
{player: 'Caard', gp: 7, wins: 1, score: 2592, goals: 7, assists: 0, saves: 13, shots: 21},
{player: 'Cabdllah', gp: 9, wins: 3, score: 3775, goals: 6, assists: 2, saves: 24, shots: 21},
{player: 'Caleb', gp: 25, wins: 14, score: 8458, goals: 18, assists: 10, saves: 28, shots: 78},
{player: 'Catalysm', gp: 12, wins: 10, score: 6095, goals: 17, assists: 16, saves: 16, shots: 50},
{player: 'Chancla', gp: 7, wins: 1, score: 2945, goals: 8, assists: 1, saves: 11, shots: 23},
{player: 'Cheese', gp: 22, wins: 8, score: 9050, goals: 13, assists: 15, saves: 46, shots: 53},
{player: 'Cheetah', gp: 8, wins: 2, score: 2502, goals: 2, assists: 1, saves: 14, shots: 18},
{player: 'Chikage', gp: 15, wins: 7, score: 5474, goals: 9, assists: 9, saves: 28, shots: 36},
{player: 'Chronic', gp: 21, wins: 13, score: 9036, goals: 16, assists: 7, saves: 42, shots: 64},
{player: 'Chub', gp: 17, wins: 7, score: 5165, goals: 8, assists: 7, saves: 18, shots: 37},
{player: 'Closestork5921', gp: 8, wins: 2, score: 3012, goals: 7, assists: 2, saves: 14, shots: 20},
{player: 'Cometten', gp: 7, wins: 1, score: 2255, goals: 5, assists: 1, saves: 9, shots: 15},
{player: 'Comm', gp: 10, wins: 4, score: 2930, goals: 3, assists: 5, saves: 15, shots: 19},
{player: 'Creamz', gp: 10, wins: 4, score: 3517, goals: 6, assists: 4, saves: 15, shots: 28},
{player: 'Crispy', gp: 23, wins: 10, score: 8583, goals: 11, assists: 12, saves: 43, shots: 56},
{player: 'Crn ', gp: 25, wins: 14, score: 9179, goals: 12, assists: 12, saves: 50, shots: 52},
{player: 'Crr', gp: 24, wins: 17, score: 8507, goals: 17, assists: 16, saves: 26, shots: 86},
{player: 'Cyx511', gp: 7, wins: 1, score: 1371, goals: 1, assists: 2, saves: 8, shots: 6},
{player: 'Czudo', gp: 12, wins: 6, score: 4384, goals: 11, assists: 5, saves: 18, shots: 27},
{player: 'Daltonza9644', gp: 7, wins: 1, score: 2165, goals: 2, assists: 4, saves: 13, shots: 17},
{player: 'Daniel', gp: 11, wins: 5, score: 3320, goals: 2, assists: 8, saves: 14, shots: 36},
{player: 'Dapplutox', gp: 13, wins: 5, score: 4407, goals: 10, assists: 4, saves: 16, shots: 36},
{player: 'Dapz', gp: 24, wins: 12, score: 7897, goals: 21, assists: 4, saves: 32, shots: 73},
{player: 'Dark', gp: 11, wins: 5, score: 4373, goals: 12, assists: 9, saves: 17, shots: 25},
{player: 'Darxtz', gp: 11, wins: 4, score: 3554, goals: 4, assists: 5, saves: 17, shots: 19},
{player: 'Davi', gp: 7, wins: 1, score: 2197, goals: 1, assists: 4, saves: 14, shots: 12},
{player: 'Davitrox', gp: 8, wins: 2, score: 2741, goals: 6, assists: 2, saves: 11, shots: 21},
{player: 'Dcln', gp: 24, wins: 12, score: 8525, goals: 15, assists: 12, saves: 31, shots: 65},
{player: 'Devour   ', gp: 6, wins: 0, score: 1912, goals: 1, assists: 1, saves: 15, shots: 11},
{player: 'Diaz', gp: 21, wins: 13, score: 8001, goals: 15, assists: 11, saves: 31, shots: 87},
{player: 'Dralii', gp: 21, wins: 16, score: 8942, goals: 23, assists: 20, saves: 27, shots: 83},
{player: 'Drknown', gp: 14, wins: 6, score: 5409, goals: 6, assists: 7, saves: 30, shots: 47},
{player: 'Droppz', gp: 10, wins: 4, score: 3212, goals: 5, assists: 5, saves: 10, shots: 31},
{player: 'Druee', gp: 9, wins: 3, score: 2780, goals: 3, assists: 1, saves: 20, shots: 19},
{player: 'Drufinho', gp: 26, wins: 16, score: 11288, goals: 24, assists: 24, saves: 45, shots: 77},
{player: 'Duggy', gp: 17, wins: 8, score: 5629, goals: 12, assists: 8, saves: 26, shots: 30},
{player: 'Dvo', gp: 8, wins: 2, score: 2902, goals: 4, assists: 5, saves: 16, shots: 22},
{player: 'Eco', gp: 12, wins: 7, score: 4689, goals: 11, assists: 12, saves: 13, shots: 46},
{player: 'Ejby', gp: 23, wins: 12, score: 7570, goals: 8, assists: 10, saves: 36, shots: 48},
{player: 'Eliakimza', gp: 25, wins: 13, score: 9135, goals: 20, assists: 12, saves: 35, shots: 72},
{player: 'Ethan', gp: 11, wins: 4, score: 4573, goals: 9, assists: 1, saves: 25, shots: 27},
{player: 'Euxsy', gp: 11, wins: 5, score: 4144, goals: 9, assists: 3, saves: 22, shots: 28},
{player: 'Exfusion', gp: 12, wins: 4, score: 4473, goals: 6, assists: 6, saves: 27, shots: 28},
{player: 'Exotiik', gp: 17, wins: 8, score: 5037, goals: 6, assists: 8, saves: 21, shots: 42},
{player: 'Extreme', gp: 11, wins: 4, score: 3467, goals: 4, assists: 7, saves: 13, shots: 34},
{player: 'Fades', gp: 27, wins: 17, score: 10030, goals: 15, assists: 12, saves: 54, shots: 57},
{player: 'Fera', gp: 6, wins: 0, score: 1798, goals: 2, assists: 2, saves: 12, shots: 12},
{player: 'Fever', gp: 23, wins: 17, score: 8893, goals: 16, assists: 19, saves: 37, shots: 75},
{player: 'Fiasco', gp: 10, wins: 4, score: 3649, goals: 5, assists: 8, saves: 19, shots: 28},
{player: 'Fiberr', gp: 19, wins: 15, score: 6746, goals: 16, assists: 12, saves: 20, shots: 55},
{player: 'Firstkiller', gp: 35, wins: 27, score: 15613, goals: 34, assists: 14, saves: 65, shots: 140},
{player: 'Flare', gp: 11, wins: 4, score: 3973, goals: 7, assists: 1, saves: 21, shots: 27},
{player: 'Fnsi', gp: 12, wins: 7, score: 4193, goals: 9, assists: 7, saves: 19, shots: 21},
{player: 'Folly', gp: 15, wins: 6, score: 5941, goals: 9, assists: 8, saves: 30, shots: 33},
{player: 'Freez astroz', gp: 9, wins: 4, score: 2864, goals: 4, assists: 4, saves: 15, shots: 29},
{player: 'Friction', gp: 11, wins: 3, score: 3859, goals: 9, assists: 3, saves: 22, shots: 30},
{player: 'Frosty', gp: 22, wins: 8, score: 11467, goals: 14, assists: 12, saves: 72, shots: 46},
{player: 'Fsol', gp: 18, wins: 9, score: 7021, goals: 13, assists: 8, saves: 38, shots: 46},
{player: 'Furlashh', gp: 12, wins: 8, score: 4547, goals: 13, assists: 8, saves: 16, shots: 33},
{player: 'Garrettg', gp: 7, wins: 1, score: 3018, goals: 6, assists: 1, saves: 20, shots: 13},
{player: 'Gawfs', gp: 11, wins: 4, score: 3486, goals: 5, assists: 6, saves: 11, shots: 30},
{player: 'Ghaazi', gp: 21, wins: 12, score: 7527, goals: 14, assists: 9, saves: 34, shots: 61},
{player: 'Giuk', gp: 28, wins: 17, score: 10954, goals: 22, assists: 8, saves: 63, shots: 50},
{player: 'Glowz', gp: 9, wins: 3, score: 3173, goals: 3, assists: 2, saves: 21, shots: 15},
{player: 'Goldninja', gp: 19, wins: 10, score: 6908, goals: 19, assists: 4, saves: 30, shots: 46},
{player: 'Gramma', gp: 10, wins: 4, score: 3600, goals: 6, assists: 5, saves: 17, shots: 22},
{player: 'Growlii', gp: 9, wins: 3, score: 2676, goals: 2, assists: 5, saves: 12, shots: 25},
{player: 'Gunz', gp: 23, wins: 17, score: 8776, goals: 18, assists: 22, saves: 25, shots: 78},
{player: 'Gus', gp: 19, wins: 15, score: 7797, goals: 21, assists: 16, saves: 22, shots: 59},
{player: 'Gyro', gp: 9, wins: 3, score: 2564, goals: 2, assists: 4, saves: 13, shots: 22},
{player: 'Halloww', gp: 9, wins: 4, score: 3571, goals: 5, assists: 7, saves: 17, shots: 25},
{player: 'Hashir', gp: 9, wins: 4, score: 2757, goals: 7, assists: 3, saves: 11, shots: 23},
{player: 'Hazo', gp: 6, wins: 0, score: 1655, goals: 0, assists: 1, saves: 10, shots: 14},
{player: 'Hntr', gp: 25, wins: 14, score: 7886, goals: 20, assists: 8, saves: 26, shots: 68},
{player: 'Husam', gp: 11, wins: 3, score: 3541, goals: 4, assists: 6, saves: 16, shots: 33},
{player: 'Hyderr', gp: 10, wins: 4, score: 3660, goals: 7, assists: 4, saves: 14, shots: 22},
{player: 'Ianpinheiro', gp: 13, wins: 5, score: 4088, goals: 6, assists: 7, saves: 18, shots: 28},
{player: 'Inuxty', gp: 2, wins: 0, score: 384, goals: 0, assists: 0, saves: 0, shots: 7},
{player: 'Isl6nii', gp: 11, wins: 5, score: 4476, goals: 6, assists: 12, saves: 23, shots: 25},
{player: 'Isma', gp: 7, wins: 1, score: 2207, goals: 1, assists: 2, saves: 13, shots: 13},
{player: 'Iurakye', gp: 1, wins: 0, score: 170, goals: 0, assists: 0, saves: 1, shots: 2},
{player: 'Jb0x', gp: 12, wins: 6, score: 3900, goals: 7, assists: 8, saves: 17, shots: 26},
{player: 'Jeff', gp: 19, wins: 11, score: 7429, goals: 19, assists: 9, saves: 33, shots: 49},
{player: 'Jocse', gp: 3, wins: 3, score: 1623, goals: 5, assists: 3, saves: 4, shots: 8},
{player: 'Joreuz', gp: 24, wins: 17, score: 9727, goals: 19, assists: 6, saves: 47, shots: 70},
{player: 'Joyo', gp: 11, wins: 4, score: 3276, goals: 2, assists: 5, saves: 15, shots: 36},
{player: 'Juicy', gp: 28, wins: 18, score: 9029, goals: 19, assists: 13, saves: 34, shots: 75},
{player: 'Justin', gp: 32, wins: 23, score: 13748, goals: 28, assists: 17, saves: 66, shots: 110},
{player: 'Jweyt', gp: 6, wins: 0, score: 1888, goals: 2, assists: 3, saves: 10, shots: 10},
{player: 'Kaizen', gp: 11, wins: 4, score: 3354, goals: 6, assists: 9, saves: 9, shots: 24},
{player: 'Kam', gp: 11, wins: 5, score: 3161, goals: 4, assists: 5, saves: 15, shots: 16},
{player: 'Kash', gp: 12, wins: 8, score: 4747, goals: 6, assists: 11, saves: 21, shots: 37},
{player: 'Kekkles', gp: 18, wins: 9, score: 5562, goals: 12, assists: 11, saves: 15, shots: 44},
{player: 'Kerian', gp: 7, wins: 1, score: 2377, goals: 1, assists: 4, saves: 14, shots: 19},
{player: 'Kevin', gp: 12, wins: 10, score: 3889, goals: 12, assists: 13, saves: 4, shots: 31},
{player: 'Kevinacho', gp: 21, wins: 12, score: 7526, goals: 19, assists: 6, saves: 33, shots: 53},
{player: 'Kha', gp: 12, wins: 7, score: 4518, goals: 13, assists: 5, saves: 16, shots: 42},
{player: 'Kiileerrz', gp: 21, wins: 16, score: 9794, goals: 29, assists: 14, saves: 31, shots: 89},
{player: 'King', gp: 6, wins: 0, score: 1375, goals: 0, assists: 1, saves: 10, shots: 4},
{player: 'Klaus', gp: 19, wins: 10, score: 6224, goals: 12, assists: 10, saves: 21, shots: 61},
{player: 'Kns', gp: 21, wins: 12, score: 7944, goals: 10, assists: 12, saves: 37, shots: 58},
{player: 'Kofyr', gp: 35, wins: 27, score: 12121, goals: 19, assists: 15, saves: 50, shots: 90},
{player: 'Korp', gp: 7, wins: 1, score: 2213, goals: 2, assists: 2, saves: 15, shots: 15},
{player: 'Krepezy', gp: 7, wins: 1, score: 2882, goals: 3, assists: 0, saves: 15, shots: 17},
{player: 'Kv1', gp: 26, wins: 16, score: 10457, goals: 25, assists: 20, saves: 36, shots: 79},
{player: 'Kxrvin', gp: 11, wins: 5, score: 3606, goals: 9, assists: 5, saves: 12, shots: 25},
{player: 'Kylo', gp: 14, wins: 7, score: 4625, goals: 8, assists: 6, saves: 24, shots: 32},
{player: 'Lacks  ar', gp: 11, wins: 3, score: 2758, goals: 0, assists: 5, saves: 15, shots: 16},
{player: 'Lagly', gp: 15, wins: 6, score: 4608, goals: 6, assists: 8, saves: 24, shots: 26},
{player: 'Laxin', gp: 18, wins: 9, score: 7043, goals: 12, assists: 7, saves: 25, shots: 66},
{player: 'Lct', gp: 16, wins: 12, score: 6779, goals: 18, assists: 14, saves: 23, shots: 50},
{player: 'Le0', gp: 7, wins: 1, score: 2006, goals: 0, assists: 3, saves: 11, shots: 9},
{player: 'Lev', gp: 16, wins: 6, score: 5416, goals: 9, assists: 6, saves: 28, shots: 33},
{player: 'Lickse', gp: 11, wins: 4, score: 4150, goals: 10, assists: 6, saves: 13, shots: 35},
{player: 'Life', gp: 9, wins: 3, score: 3367, goals: 5, assists: 5, saves: 15, shots: 21},
{player: 'Lj', gp: 35, wins: 27, score: 10555, goals: 15, assists: 11, saves: 49, shots: 87},
{player: 'Lostt', gp: 26, wins: 18, score: 9996, goals: 23, assists: 20, saves: 32, shots: 97},
{player: 'Lucas06', gp: 10, wins: 4, score: 3886, goals: 7, assists: 2, saves: 17, shots: 43},
{player: 'Luiisp', gp: 23, wins: 18, score: 9204, goals: 24, assists: 20, saves: 29, shots: 72},
{player: 'Lunar', gp: 16, wins: 12, score: 8446, goals: 27, assists: 13, saves: 25, shots: 68},
{player: 'Lunatic', gp: 12, wins: 6, score: 4921, goals: 11, assists: 6, saves: 23, shots: 33},
{player: 'Lunr', gp: 18, wins: 9, score: 6815, goals: 8, assists: 11, saves: 31, shots: 58},
{player: 'Lxucha', gp: 9, wins: 3, score: 3192, goals: 5, assists: 7, saves: 14, shots: 21},
{player: 'Lynx555', gp: 23, wins: 12, score: 7872, goals: 10, assists: 15, saves: 36, shots: 51},
{player: 'M0nkey m00n', gp: 25, wins: 18, score: 10583, goals: 18, assists: 13, saves: 58, shots: 83},
{player: 'M6r', gp: 23, wins: 12, score: 8646, goals: 20, assists: 8, saves: 35, shots: 77},
{player: 'M7md', gp: 34, wins: 16, score: 15241, goals: 32, assists: 20, saves: 68, shots: 105},
{player: 'M7sn', gp: 17, wins: 9, score: 6358, goals: 6, assists: 14, saves: 37, shots: 29},
{player: 'Machi', gp: 6, wins: 0, score: 1819, goals: 2, assists: 1, saves: 11, shots: 11},
{player: 'Madhin987', gp: 15, wins: 7, score: 6050, goals: 17, assists: 9, saves: 20, shots: 54},
{player: 'Mage', gp: 25, wins: 14, score: 9703, goals: 18, assists: 21, saves: 26, shots: 91},
{player: 'Majicbear', gp: 32, wins: 23, score: 12205, goals: 28, assists: 20, saves: 45, shots: 98},
{player: 'Matthew', gp: 17, wins: 7, score: 5811, goals: 10, assists: 11, saves: 25, shots: 41},
{player: 'Mav', gp: 10, wins: 4, score: 3110, goals: 2, assists: 2, saves: 17, shots: 20},
{player: 'Maxeew', gp: 12, wins: 8, score: 4720, goals: 13, assists: 7, saves: 15, shots: 28},
{player: 'Mazzen509', gp: 1, wins: 0, score: 356, goals: 0, assists: 0, saves: 3, shots: 1},
{player: 'Mech', gp: 8, wins: 2, score: 3101, goals: 5, assists: 2, saves: 16, shots: 22},
{player: 'Meshinn', gp: 24, wins: 12, score: 8330, goals: 11, assists: 17, saves: 39, shots: 70},
{player: 'Mesho', gp: 17, wins: 9, score: 6384, goals: 10, assists: 7, saves: 28, shots: 55},
{player: 'Mikeboy', gp: 8, wins: 2, score: 2630, goals: 0, assists: 5, saves: 17, shots: 18},
{player: 'Mildpork', gp: 8, wins: 2, score: 2342, goals: 5, assists: 1, saves: 11, shots: 19},
{player: 'Milo', gp: 8, wins: 3, score: 3302, goals: 4, assists: 6, saves: 20, shots: 16},
{player: 'Misery', gp: 21, wins: 12, score: 9442, goals: 13, assists: 16, saves: 51, shots: 71},
{player: 'Misty', gp: 7, wins: 1, score: 2149, goals: 0, assists: 3, saves: 11, shots: 21},
{player: 'Mock', gp: 17, wins: 8, score: 6899, goals: 10, assists: 10, saves: 33, shots: 42},
{player: 'Motion', gp: 10, wins: 3, score: 3928, goals: 4, assists: 3, saves: 23, shots: 26},
{player: 'Motta', gp: 26, wins: 16, score: 11870, goals: 31, assists: 24, saves: 34, shots: 93},
{player: 'Mtzr', gp: 15, wins: 8, score: 5794, goals: 14, assists: 9, saves: 20, shots: 44},
{player: 'N1tr', gp: 7, wins: 1, score: 1864, goals: 2, assists: 4, saves: 7, shots: 15},
{player: 'Nachosky', gp: 17, wins: 7, score: 6206, goals: 12, assists: 7, saves: 29, shots: 42},
{player: 'Nadr', gp: 11, wins: 4, score: 4180, goals: 12, assists: 4, saves: 14, shots: 43},
{player: 'Naizak', gp: 23, wins: 12, score: 8906, goals: 23, assists: 14, saves: 28, shots: 64},
{player: 'Nass', gp: 18, wins: 11, score: 6648, goals: 11, assists: 9, saves: 28, shots: 49},
{player: 'Nasty', gp: 11, wins: 4, score: 4122, goals: 6, assists: 2, saves: 25, shots: 24},
{player: 'Ne0n', gp: 10, wins: 3, score: 4275, goals: 5, assists: 6, saves: 28, shots: 41},
{player: 'Nerve', gp: 17, wins: 8, score: 6405, goals: 8, assists: 8, saves: 32, shots: 31},
{player: 'Nico', gp: 28, wins: 17, score: 10292, goals: 17, assists: 17, saves: 47, shots: 68},
{player: 'Night', gp: 11, wins: 4, score: 3383, goals: 6, assists: 6, saves: 13, shots: 31},
{player: 'No one', gp: 11, wins: 5, score: 4526, goals: 12, assists: 2, saves: 26, shots: 27},
{player: 'Noly', gp: 13, wins: 5, score: 5048, goals: 11, assists: 5, saves: 19, shots: 36},
{player: 'Nory', gp: 8, wins: 2, score: 3374, goals: 9, assists: 2, saves: 17, shots: 25},
{player: 'Nuq', gp: 17, wins: 7, score: 7066, goals: 13, assists: 7, saves: 37, shots: 53},
{player: 'Nush', gp: 14, wins: 6, score: 4369, goals: 5, assists: 4, saves: 26, shots: 25},
{player: 'Nvi', gp: 12, wins: 10, score: 4200, goals: 10, assists: 8, saves: 14, shots: 29},
{player: 'Nwpo', gp: 25, wins: 18, score: 10659, goals: 21, assists: 13, saves: 50, shots: 94},
{player: 'O0vvl', gp: 18, wins: 9, score: 6192, goals: 7, assists: 6, saves: 37, shots: 47},
{player: 'Oaly', gp: 24, wins: 17, score: 10307, goals: 21, assists: 24, saves: 42, shots: 89},
{player: 'Onizumaa', gp: 6, wins: 0, score: 1993, goals: 3, assists: 4, saves: 9, shots: 17},
{player: 'Oski', gp: 18, wins: 11, score: 8036, goals: 19, assists: 9, saves: 32, shots: 64},
{player: 'Ovampierz', gp: 9, wins: 3, score: 4484, goals: 4, assists: 6, saves: 26, shots: 26},
{player: 'Paarth', gp: 10, wins: 4, score: 3606, goals: 7, assists: 6, saves: 15, shots: 27},
{player: 'Pan', gp: 19, wins: 10, score: 6709, goals: 13, assists: 8, saves: 33, shots: 50},
{player: 'Peanutss|', gp: 7, wins: 1, score: 1875, goals: 1, assists: 3, saves: 6, shots: 8},
{player: 'Percy', gp: 11, wins: 4, score: 5027, goals: 8, assists: 4, saves: 28, shots: 37},
{player: 'Phys', gp: 7, wins: 1, score: 2308, goals: 3, assists: 4, saves: 10, shots: 15},
{player: 'Pigeon', gp: 16, wins: 6, score: 5525, goals: 6, assists: 10, saves: 28, shots: 38},
{player: 'Pluvo', gp: 11, wins: 4, score: 4089, goals: 5, assists: 7, saves: 18, shots: 34},
{player: 'Pndh', gp: 11, wins: 4, score: 3061, goals: 4, assists: 5, saves: 11, shots: 20},
{player: 'Porsas52', gp: 14, wins: 7, score: 5800, goals: 14, assists: 8, saves: 24, shots: 39},
{player: 'Pzy', gp: 23, wins: 10, score: 8218, goals: 10, assists: 15, saves: 44, shots: 68},
{player: 'Radosin', gp: 15, wins: 8, score: 5781, goals: 9, assists: 7, saves: 31, shots: 45},
{player: 'Ravioli', gp: 19, wins: 11, score: 6151, goals: 13, assists: 9, saves: 21, shots: 52},
{player: 'Ray', gp: 6, wins: 0, score: 2062, goals: 4, assists: 2, saves: 9, shots: 18},
{player: 'Reekkan', gp: 7, wins: 1, score: 2852, goals: 2, assists: 1, saves: 17, shots: 16},
{player: 'Rehzzy', gp: 9, wins: 3, score: 2727, goals: 5, assists: 1, saves: 11, shots: 27},
{player: 'Reis', gp: 9, wins: 3, score: 3016, goals: 4, assists: 3, saves: 12, shots: 33},
{player: 'Relatingwave', gp: 14, wins: 6, score: 5180, goals: 7, assists: 9, saves: 25, shots: 28},
{player: 'Remiik', gp: 7, wins: 1, score: 2885, goals: 4, assists: 3, saves: 18, shots: 18},
{player: 'Renshiro', gp: 11, wins: 5, score: 3494, goals: 9, assists: 3, saves: 13, shots: 33},
{player: 'Resonal', gp: 16, wins: 6, score: 5443, goals: 10, assists: 4, saves: 24, shots: 31},
{player: 'Reveal', gp: 21, wins: 13, score: 8106, goals: 10, assists: 15, saves: 40, shots: 71},
{player: 'Reysbull', gp: 20, wins: 15, score: 7076, goals: 9, assists: 19, saves: 28, shots: 55},
{player: 'Rez', gp: 17, wins: 8, score: 6872, goals: 11, assists: 12, saves: 27, shots: 49},
{player: 'Rezears', gp: 17, wins: 9, score: 6860, goals: 10, assists: 9, saves: 36, shots: 61},
{player: 'Riet', gp: 9, wins: 3, score: 3743, goals: 5, assists: 6, saves: 23, shots: 22},
{player: 'Rigorous', gp: 15, wins: 7, score: 5295, goals: 8, assists: 12, saves: 22, shots: 34},
{player: 'Rise', gp: 32, wins: 23, score: 13245, goals: 29, assists: 25, saves: 49, shots: 112},
{player: 'Risk', gp: 12, wins: 10, score: 5208, goals: 18, assists: 8, saves: 7, shots: 41},
{player: 'Rmn', gp: 8, wins: 2, score: 2941, goals: 4, assists: 7, saves: 13, shots: 26},
{player: 'Roman', gp: 8, wins: 2, score: 2526, goals: 5, assists: 2, saves: 12, shots: 16},
{player: 'Roods', gp: 17, wins: 7, score: 7224, goals: 8, assists: 11, saves: 39, shots: 44},
{player: 'Rooster', gp: 17, wins: 7, score: 5816, goals: 14, assists: 2, saves: 27, shots: 50},
{player: 'Rqfts', gp: 14, wins: 7, score: 5389, goals: 12, assists: 8, saves: 26, shots: 24},
{player: 'Rrei', gp: 3, wins: 0, score: 704, goals: 1, assists: 1, saves: 2, shots: 6},
{player: 'Rw9', gp: 21, wins: 16, score: 8923, goals: 18, assists: 21, saves: 36, shots: 80},
{player: 'Rxii', gp: 9, wins: 3, score: 2554, goals: 4, assists: 1, saves: 14, shots: 23},
{player: 'S5-cosmic', gp: 6, wins: 0, score: 1779, goals: 2, assists: 1, saves: 9, shots: 17},
{player: 'Sadness', gp: 20, wins: 15, score: 8203, goals: 21, assists: 9, saves: 30, shots: 51},
{player: 'Schalkg', gp: 11, wins: 3, score: 3849, goals: 8, assists: 3, saves: 19, shots: 22},
{player: 'Scorch', gp: 17, wins: 8, score: 5817, goals: 8, assists: 8, saves: 35, shots: 28},
{player: 'Scream33', gp: 7, wins: 1, score: 2508, goals: 1, assists: 3, saves: 16, shots: 13},
{player: 'Scrub', gp: 27, wins: 17, score: 9450, goals: 20, assists: 12, saves: 32, shots: 82},
{player: 'Seikoo', gp: 11, wins: 4, score: 4008, goals: 5, assists: 3, saves: 18, shots: 31},
{player: 'Sek', gp: 15, wins: 6, score: 4331, goals: 6, assists: 3, saves: 19, shots: 42},
{player: 'Shad', gp: 8, wins: 2, score: 2904, goals: 3, assists: 4, saves: 17, shots: 16},
{player: 'Shadow', gp: 19, wins: 10, score: 6028, goals: 12, assists: 9, saves: 23, shots: 46},
{player: 'Shezz!', gp: 7, wins: 1, score: 3033, goals: 5, assists: 3, saves: 15, shots: 18},
{player: 'Shin', gp: 8, wins: 3, score: 3013, goals: 9, assists: 2, saves: 10, shots: 19},
{player: 'Shoogies', gp: 7, wins: 1, score: 2320, goals: 1, assists: 0, saves: 20, shots: 14},
{player: 'Shu', gp: 12, wins: 4, score: 3314, goals: 3, assists: 6, saves: 11, shots: 21},
{player: 'Simas', gp: 23, wins: 10, score: 7754, goals: 17, assists: 9, saves: 28, shots: 60},
{player: 'Skillsteal', gp: 6, wins: 0, score: 1739, goals: 4, assists: 1, saves: 7, shots: 14},
{player: 'Smokez', gp: 8, wins: 2, score: 3130, goals: 7, assists: 1, saves: 14, shots: 21},
{player: 'Snipjz', gp: 10, wins: 4, score: 3364, goals: 3, assists: 6, saves: 15, shots: 24},
{player: 'Snixy', gp: 8, wins: 2, score: 3633, goals: 3, assists: 9, saves: 23, shots: 15},
{player: 'Snoozy', gp: 12, wins: 6, score: 4258, goals: 8, assists: 9, saves: 22, shots: 27},
{player: 'Snowyy', gp: 23, wins: 17, score: 8230, goals: 24, assists: 15, saves: 29, shots: 75},
{player: 'Solanun', gp: 8, wins: 2, score: 2474, goals: 2, assists: 5, saves: 14, shots: 17},
{player: 'Sosa', gp: 22, wins: 8, score: 6672, goals: 14, assists: 5, saves: 24, shots: 58},
{player: 'Soulgenie', gp: 12, wins: 4, score: 4515, goals: 7, assists: 3, saves: 31, shots: 19},
{player: 'Speed', gp: 14, wins: 6, score: 4587, goals: 8, assists: 2, saves: 20, shots: 37},
{player: 'Sphinx', gp: 12, wins: 10, score: 6390, goals: 20, assists: 17, saves: 15, shots: 42},
{player: 'Sqqp', gp: 15, wins: 7, score: 6517, goals: 15, assists: 7, saves: 26, shots: 54},
{player: 'Squig', gp: 7, wins: 1, score: 1441, goals: 2, assists: 0, saves: 3, shots: 14},
{player: 'Squishy', gp: 7, wins: 1, score: 2629, goals: 2, assists: 1, saves: 19, shots: 16},
{player: 'Stake', gp: 19, wins: 11, score: 7931, goals: 15, assists: 16, saves: 30, shots: 47},
{player: 'Stizzy', gp: 17, wins: 8, score: 6655, goals: 12, assists: 9, saves: 32, shots: 57},
{player: 'Suco', gp: 25, wins: 14, score: 11720, goals: 19, assists: 11, saves: 63, shots: 82},
{player: 'Superlachie', gp: 19, wins: 15, score: 8070, goals: 18, assists: 10, saves: 32, shots: 66},
{player: 'Suspect', gp: 25, wins: 13, score: 10615, goals: 22, assists: 12, saves: 52, shots: 77},
{player: 'Svrnd', gp: 3, wins: 0, score: 1013, goals: 2, assists: 2, saves: 5, shots: 8},
{player: 'Sweaty', gp: 23, wins: 18, score: 8550, goals: 23, assists: 16, saves: 27, shots: 72},
{player: 'Swiftt', gp: 26, wins: 18, score: 8236, goals: 18, assists: 18, saves: 26, shots: 65},
{player: 'Syn', gp: 10, wins: 4, score: 2721, goals: 4, assists: 2, saves: 16, shots: 14},
{player: 'T3chnic', gp: 11, wins: 4, score: 3305, goals: 6, assists: 7, saves: 11, shots: 27},
{player: 'T7lm', gp: 17, wins: 9, score: 7434, goals: 15, assists: 4, saves: 34, shots: 66},
{player: 'Taha273', gp: 12, wins: 6, score: 5325, goals: 11, assists: 8, saves: 22, shots: 30},
{player: 'Tatagane', gp: 7, wins: 1, score: 2277, goals: 4, assists: 2, saves: 7, shots: 16},
{player: 'Tawk', gp: 22, wins: 13, score: 8050, goals: 12, assists: 8, saves: 39, shots: 59},
{player: 'Tehqoz', gp: 23, wins: 17, score: 10615, goals: 26, assists: 18, saves: 38, shots: 87},
{player: 'Tempoh', gp: 23, wins: 12, score: 8436, goals: 16, assists: 6, saves: 41, shots: 63},
{player: 'Teschow', gp: 18, wins: 10, score: 6043, goals: 9, assists: 10, saves: 30, shots: 44},
{player: 'Thyyder', gp: 7, wins: 1, score: 2534, goals: 6, assists: 0, saves: 13, shots: 15},
{player: 'Tims', gp: 7, wins: 1, score: 2631, goals: 3, assists: 3, saves: 15, shots: 9},
{player: 'Tms', gp: 10, wins: 4, score: 4910, goals: 12, assists: 7, saves: 21, shots: 36},
{player: 'Torres8232', gp: 25, wins: 13, score: 9338, goals: 13, assists: 14, saves: 46, shots: 69},
{player: 'Torsos', gp: 23, wins: 17, score: 8278, goals: 16, assists: 19, saves: 29, shots: 57},
{player: 'Tossis', gp: 6, wins: 0, score: 1764, goals: 2, assists: 2, saves: 10, shots: 11},
{player: 'Tox', gp: 17, wins: 9, score: 6227, goals: 8, assists: 5, saves: 34, shots: 37},
{player: 'Toxiic', gp: 8, wins: 2, score: 3449, goals: 6, assists: 2, saves: 19, shots: 16},
{player: 'Trk511', gp: 25, wins: 18, score: 9375, goals: 20, assists: 15, saves: 38, shots: 79},
{player: 'Trook', gp: 14, wins: 6, score: 4305, goals: 6, assists: 2, saves: 24, shots: 30},
{player: 'Trstxnz', gp: 12, wins: 6, score: 5917, goals: 10, assists: 7, saves: 35, shots: 23},
{player: 'Twistt', gp: 9, wins: 3, score: 3418, goals: 4, assists: 2, saves: 20, shots: 26},
{player: 'Twiz', gp: 21, wins: 12, score: 6681, goals: 14, assists: 6, saves: 29, shots: 66},
{player: 'Twnzr', gp: 18, wins: 10, score: 6494, goals: 9, assists: 10, saves: 35, shots: 46},
{player: 'Umbroken', gp: 19, wins: 10, score: 6416, goals: 10, assists: 8, saves: 33, shots: 40},
{player: 'Validzetsubusoro', gp: 12, wins: 10, score: 4516, goals: 12, assists: 10, saves: 15, shots: 30},
{player: 'Vatira', gp: 28, wins: 18, score: 10692, goals: 19, assists: 13, saves: 45, shots: 94},
{player: 'Vav', gp: 11, wins: 5, score: 3469, goals: 6, assists: 4, saves: 15, shots: 20},
{player: 'Vfbi', gp: 11, wins: 4, score: 4304, goals: 6, assists: 7, saves: 18, shots: 36},
{player: 'Vorce', gp: 10, wins: 3, score: 3356, goals: 5, assists: 3, saves: 13, shots: 25},
{player: 'Vulty', gp: 11, wins: 4, score: 4088, goals: 6, assists: 4, saves: 25, shots: 26},
{player: 'Wahvey', gp: 25, wins: 13, score: 7532, goals: 8, assists: 11, saves: 37, shots: 58},
{player: 'Wee_casper', gp: 7, wins: 1, score: 2040, goals: 4, assists: 1, saves: 9, shots: 18},
{player: 'Wellace', gp: 13, wins: 5, score: 4184, goals: 6, assists: 8, saves: 16, shots: 31},
{player: 'Werty', gp: 25, wins: 13, score: 7427, goals: 15, assists: 8, saves: 29, shots: 47},
{player: 'Wiiilooo', gp: 11, wins: 5, score: 3741, goals: 5, assists: 4, saves: 21, shots: 24},
{player: 'Willie', gp: 15, wins: 7, score: 6415, goals: 12, assists: 12, saves: 29, shots: 61},
{player: 'Wisty', gp: 25, wins: 14, score: 10261, goals: 17, assists: 15, saves: 48, shots: 74},
{player: 'Wolftic', gp: 7, wins: 1, score: 1663, goals: 0, assists: 1, saves: 10, shots: 12},
{player: 'Wozyen', gp: 6, wins: 0, score: 2461, goals: 6, assists: 3, saves: 13, shots: 13},
{player: 'Xprt', gp: 13, wins: 5, score: 5779, goals: 13, assists: 9, saves: 28, shots: 36},
{player: 'Xyro', gp: 7, wins: 1, score: 2081, goals: 4, assists: 5, saves: 9, shots: 13},
{player: 'Yanxnz', gp: 26, wins: 18, score: 11149, goals: 25, assists: 19, saves: 38, shots: 85},
{player: 'Yazeed', gp: 18, wins: 9, score: 7035, goals: 13, assists: 10, saves: 28, shots: 66},
{player: 'Ynxy love sosa', gp: 8, wins: 2, score: 2893, goals: 5, assists: 3, saves: 13, shots: 15},
{player: 'Yujin', gp: 15, wins: 8, score: 5378, goals: 9, assists: 8, saves: 22, shots: 45},
{player: 'Zany', gp: 13, wins: 6, score: 3700, goals: 5, assists: 8, saves: 12, shots: 26},
{player: 'Zen', gp: 17, wins: 8, score: 7703, goals: 15, assists: 9, saves: 33, shots: 53},
{player: 'Zenulous', gp: 7, wins: 1, score: 1845, goals: 4, assists: 1, saves: 7, shots: 15},
{player: 'Zeyad', gp: 11, wins: 3, score: 4143, goals: 5, assists: 4, saves: 20, shots: 33},
{player: 'Zombie', gp: 17, wins: 8, score: 5695, goals: 11, assists: 5, saves: 27, shots: 41},
{player: 'Ztro', gp: 6, wins: 0, score: 2352, goals: 5, assists: 1, saves: 13, shots: 20},
]
export let kickoffLANPlayers = [
{player: '2piece', gp: 12, wins: 7, score: 5586, goals: 8, assists: 10, saves: 29, shots: 39},
{player: 'Acronik', gp: 4, wins: 1, score: 1076, goals: 1, assists: 0, saves: 9, shots: 2},
{player: 'Atow', gp: 9, wins: 8, score: 3572, goals: 6, assists: 13, saves: 11, shots: 31},
{player: 'Chronic', gp: 9, wins: 4, score: 4346, goals: 7, assists: 8, saves: 23, shots: 23},
{player: 'Exotiik', gp: 7, wins: 4, score: 2700, goals: 6, assists: 5, saves: 9, shots: 24},
{player: 'Firstkiller', gp: 9, wins: 4, score: 4520, goals: 10, assists: 5, saves: 18, shots: 28},
{player: 'Giuk', gp: 4, wins: 1, score: 1963, goals: 4, assists: 2, saves: 11, shots: 11},
{player: 'Joreuz', gp: 3, wins: 0, score: 1052, goals: 1, assists: 1, saves: 5, shots: 9},
{player: 'Lj', gp: 9, wins: 4, score: 2980, goals: 2, assists: 5, saves: 18, shots: 16},
{player: 'Nico', gp: 4, wins: 1, score: 1543, goals: 3, assists: 2, saves: 8, shots: 10},
{player: 'Wahvey', gp: 12, wins: 7, score: 5248, goals: 15, assists: 4, saves: 19, shots: 41},
{player: 'Crr', gp: 3, wins: 0, score: 1110, goals: 2, assists: 2, saves: 5, shots: 10},
{player: 'Diaz', gp: 9, wins: 4, score: 5138, goals: 10, assists: 9, saves: 26, shots: 25},
{player: 'Juicy', gp: 9, wins: 8, score: 3102, goals: 5, assists: 5, saves: 16, shots: 28},
{player: 'Justin', gp: 3, wins: 0, score: 852, goals: 0, assists: 0, saves: 8, shots: 4},
{player: 'Kofyr', gp: 9, wins: 4, score: 3738, goals: 5, assists: 4, saves: 22, shots: 28},
{player: 'Majicbear', gp: 3, wins: 0, score: 696, goals: 0, assists: 1, saves: 5, shots: 7},
{player: 'Oaly', gp: 3, wins: 0, score: 1442, goals: 3, assists: 3, saves: 7, shots: 20},
{player: 'Reveal', gp: 9, wins: 4, score: 3427, goals: 6, assists: 1, saves: 19, shots: 24},
{player: 'Rise', gp: 3, wins: 0, score: 1153, goals: 1, assists: 0, saves: 7, shots: 8},
{player: 'Stizzy', gp: 7, wins: 4, score: 2466, goals: 7, assists: 3, saves: 7, shots: 32},
{player: 'Tawk', gp: 12, wins: 7, score: 6328, goals: 14, assists: 13, saves: 25, shots: 58},
{player: 'Vatira', gp: 9, wins: 8, score: 4509, goals: 16, assists: 2, saves: 12, shots: 47},
{player: 'Zen', gp: 7, wins: 4, score: 3040, goals: 6, assists: 5, saves: 13, shots: 23},
]
export let regional2Players = [
{player: 'Abscrazy', gp: 18, wins: 7, score: 7001, goals: 17, assists: 7, saves: 27, shots: 50},
{player: 'Bunney', gp: 9, wins: 3, score: 4127, goals: 9, assists: 6, saves: 17, shots: 24},
{player: 'Blue', gp: 6, wins: 0, score: 2272, goals: 3, assists: 5, saves: 11, shots: 18},
{player: 'Cata', gp: 18, wins: 18, score: 7661, goals: 20, assists: 19, saves: 23, shots: 70},
{player: 'Easy', gp: 22, wins: 12, score: 7618, goals: 17, assists: 12, saves: 30, shots: 50},
{player: 'Fnsi', gp: 14, wins: 6, score: 5680, goals: 11, assists: 3, saves: 31, shots: 33},
{player: 'Gz valid', gp: 27, wins: 14, score: 10396, goals: 21, assists: 20, saves: 37, shots: 61},
{player: 'Glasso', gp: 6, wins: 0, score: 1955, goals: 5, assists: 3, saves: 4, shots: 19},
{player: 'Heater', gp: 7, wins: 1, score: 2586, goals: 6, assists: 2, saves: 11, shots: 13},
{player: 'Hireo', gp: 8, wins: 2, score: 2476, goals: 5, assists: 2, saves: 9, shots: 23},
{player: 'Kenny', gp: 22, wins: 12, score: 8351, goals: 19, assists: 14, saves: 38, shots: 61},
{player: 'Kashby', gp: 17, wins: 12, score: 8228, goals: 16, assists: 23, saves: 24, shots: 72},
{player: 'Kevin', gp: 18, wins: 18, score: 7385, goals: 25, assists: 21, saves: 13, shots: 60},
{player: 'Kxrvin', gp: 18, wins: 7, score: 7055, goals: 17, assists: 10, saves: 29, shots: 52},
{player: 'Kylo', gp: 7, wins: 1, score: 2531, goals: 6, assists: 6, saves: 7, shots: 22},
{player: 'Lct', gp: 23, wins: 15, score: 8695, goals: 17, assists: 15, saves: 39, shots: 67},
{player: 'Lunar', gp: 23, wins: 15, score: 9589, goals: 27, assists: 14, saves: 29, shots: 67},
{player: 'Lunatic', gp: 11, wins: 4, score: 3708, goals: 9, assists: 2, saves: 16, shots: 21},
{player: 'Madhin', gp: 6, wins: 0, score: 1968, goals: 4, assists: 2, saves: 7, shots: 21},
{player: 'Maxeew', gp: 17, wins: 12, score: 7102, goals: 22, assists: 11, saves: 21, shots: 64},
{player: 'Misty', gp: 22, wins: 12, score: 7127, goals: 16, assists: 16, saves: 22, shots: 47},
{player: 'Mohanned', gp: 17, wins: 6, score: 5709, goals: 7, assists: 12, saves: 25, shots: 35},
{player: 'Omexy', gp: 7, wins: 1, score: 2441, goals: 3, assists: 5, saves: 12, shots: 13},
{player: 'Rayy14', gp: 17, wins: 6, score: 5720, goals: 14, assists: 6, saves: 33, shots: 30},
{player: 'Rigorous', gp: 14, wins: 6, score: 4087, goals: 6, assists: 7, saves: 17, shots: 23},
{player: 'Sphinx', gp: 18, wins: 18, score: 8985, goals: 30, assists: 23, saves: 16, shots: 77},
{player: 'Taha273', gp: 11, wins: 4, score: 3724, goals: 4, assists: 7, saves: 21, shots: 18},
{player: 'Tank', gp: 8, wins: 2, score: 2808, goals: 5, assists: 3, saves: 13, shots: 23},
{player: 'Tossis', gp: 17, wins: 6, score: 6818, goals: 12, assists: 8, saves: 27, shots: 54},
{player: 'Vav', gp: 18, wins: 7, score: 4805, goals: 8, assists: 11, saves: 17, shots: 33},
{player: 'Ballerrees', gp: 23, wins: 15, score: 9740, goals: 26, assists: 24, saves: 33, shots: 66},
{player: 'Eco', gp: 14, wins: 6, score: 4347, goals: 9, assists: 4, saves: 17, shots: 38},
{player: 'Furlashh', gp: 17, wins: 12, score: 5650, goals: 17, assists: 11, saves: 14, shots: 49},
{player: 'Jb0x', gp: 11, wins: 4, score: 3470, goals: 6, assists: 5, saves: 13, shots: 26},
{player: 'Jocse', gp: 9, wins: 3, score: 2465, goals: 3, assists: 3, saves: 13, shots: 16},
{player: 'Machi', gp: 11, wins: 5, score: 4158, goals: 10, assists: 7, saves: 19, shots: 23},
{player: 'Mikan', gp: 10, wins: 4, score: 3429, goals: 4, assists: 6, saves: 17, shots: 22},
{player: 'Nai', gp: 27, wins: 14, score: 8441, goals: 24, assists: 12, saves: 30, shots: 63},
{player: 'Paraapelka', gp: 11, wins: 5, score: 4647, goals: 11, assists: 7, saves: 22, shots: 31},
{player: 'Porsas52', gp: 9, wins: 3, score: 3107, goals: 9, assists: 4, saves: 12, shots: 17},
{player: 'Ripoopi', gp: 8, wins: 2, score: 2185, goals: 1, assists: 4, saves: 13, shots: 10},
{player: 'Riskiwnl', gp: 27, wins: 14, score: 10364, goals: 22, assists: 16, saves: 46, shots: 75},
{player: 'Ryzen', gp: 11, wins: 5, score: 4356, goals: 12, assists: 12, saves: 14, shots: 28},
{player: 'Shaolon', gp: 10, wins: 4, score: 3504, goals: 8, assists: 4, saves: 15, shots: 27},
{player: 'Vinlll', gp: 10, wins: 4, score: 3700, goals: 7, assists: 6, saves: 14, shots: 31},
{player: 'Anoriq de bagnolet', gp: 7, wins: 1, score: 2573, goals: 6, assists: 0, saves: 6, shots: 19},
{player: 'Apparentlyjack', gp: 30, wins: 15, score: 9433, goals: 11, assists: 12, saves: 50, shots: 75},
{player: 'Archie', gp: 18, wins: 12, score: 7807, goals: 20, assists: 14, saves: 27, shots: 68},
{player: 'Atomik', gp: 20, wins: 9, score: 9551, goals: 8, assists: 9, saves: 69, shots: 44},
{player: 'Atow', gp: 32, wins: 23, score: 14259, goals: 35, assists: 20, saves: 62, shots: 120},
{player: 'Aztral', gp: 8, wins: 2, score: 2997, goals: 3, assists: 6, saves: 17, shots: 17},
{player: 'Chausette45', gp: 7, wins: 1, score: 2464, goals: 4, assists: 2, saves: 17, shots: 21},
{player: 'Compact', gp: 17, wins: 7, score: 6129, goals: 8, assists: 8, saves: 32, shots: 47},
{player: 'Everinho', gp: 7, wins: 1, score: 2781, goals: 8, assists: 4, saves: 13, shots: 21},
{player: 'Exotiik', gp: 19, wins: 13, score: 7041, goals: 16, assists: 14, saves: 28, shots: 60},
{player: 'Growlii', gp: 12, wins: 5, score: 4876, goals: 11, assists: 7, saves: 17, shots: 39},
{player: 'John', gp: 12, wins: 5, score: 4311, goals: 7, assists: 7, saves: 19, shots: 34},
{player: 'Joreuz', gp: 25, wins: 14, score: 10946, goals: 19, assists: 11, saves: 59, shots: 86},
{player: 'Joyo', gp: 30, wins: 15, score: 10857, goals: 23, assists: 17, saves: 41, shots: 94},
{player: 'Little motion', gp: 8, wins: 2, score: 2400, goals: 3, assists: 6, saves: 6, shots: 20},
{player: 'Mat', gp: 17, wins: 7, score: 5235, goals: 10, assists: 5, saves: 23, shots: 35},
{player: 'Ne0n', gp: 8, wins: 2, score: 1976, goals: 2, assists: 2, saves: 10, shots: 12},
{player: 'Osaft   ', gp: 12, wins: 5, score: 4663, goals: 4, assists: 5, saves: 25, shots: 29},
{player: 'Oski', gp: 18, wins: 12, score: 8159, goals: 20, assists: 13, saves: 37, shots: 59},
{player: 'Pisky', gp: 12, wins: 5, score: 3887, goals: 6, assists: 4, saves: 17, shots: 32},
{player: 'Pluvo', gp: 7, wins: 1, score: 2647, goals: 4, assists: 2, saves: 16, shots: 20},
{player: 'Radosinho', gp: 10, wins: 4, score: 4433, goals: 8, assists: 5, saves: 24, shots: 24},
{player: 'Rezears', gp: 20, wins: 9, score: 7615, goals: 9, assists: 6, saves: 49, shots: 42},
{player: 'Rizex', gp: 12, wins: 5, score: 4609, goals: 8, assists: 4, saves: 23, shots: 33},
{player: 'Rysfox', gp: 12, wins: 5, score: 3897, goals: 5, assists: 3, saves: 19, shots: 33},
{player: 'Seikoo', gp: 30, wins: 15, score: 12680, goals: 23, assists: 14, saves: 69, shots: 96},
{player: 'Tempoh', gp: 19, wins: 10, score: 7596, goals: 15, assists: 12, saves: 30, shots: 55},
{player: 'Tox', gp: 20, wins: 9, score: 7476, goals: 10, assists: 8, saves: 42, shots: 45},
{player: 'Accro', gp: 19, wins: 10, score: 7746, goals: 19, assists: 12, saves: 33, shots: 51},
{player: 'Bibbaba', gp: 12, wins: 5, score: 3976, goals: 7, assists: 3, saves: 16, shots: 20},
{player: 'Crr', gp: 25, wins: 14, score: 9178, goals: 22, assists: 11, saves: 35, shots: 65},
{player: 'Dayyshift', gp: 17, wins: 7, score: 6084, goals: 9, assists: 8, saves: 30, shots: 41},
{player: 'Ejby', gp: 19, wins: 10, score: 6164, goals: 6, assists: 10, saves: 31, shots: 35},
{player: 'Ivn', gp: 12, wins: 5, score: 4171, goals: 6, assists: 4, saves: 23, shots: 25},
{player: 'Juicy', gp: 32, wins: 23, score: 9849, goals: 15, assists: 15, saves: 39, shots: 105},
{player: 'Mozza', gp: 8, wins: 2, score: 2279, goals: 2, assists: 1, saves: 16, shots: 18},
{player: 'Mtzr', gp: 10, wins: 4, score: 3870, goals: 6, assists: 2, saves: 22, shots: 34},
{player: 'Nass', gp: 18, wins: 12, score: 7545, goals: 14, assists: 17, saves: 30, shots: 49},
{player: 'Oaly', gp: 25, wins: 14, score: 9668, goals: 16, assists: 23, saves: 37, shots: 86},
{player: 'Rust ez95', gp: 8, wins: 2, score: 3392, goals: 7, assists: 2, saves: 19, shots: 17},
{player: 'Scream33', gp: 12, wins: 5, score: 3869, goals: 6, assists: 6, saves: 18, shots: 33},
{player: 'Skyrix', gp: 7, wins: 1, score: 2715, goals: 2, assists: 7, saves: 17, shots: 15},
{player: 'Smashy', gp: 7, wins: 1, score: 2418, goals: 4, assists: 7, saves: 8, shots: 20},
{player: 'Stizzy', gp: 19, wins: 13, score: 6739, goals: 15, assists: 13, saves: 23, shots: 62},
{player: 'Vatira', gp: 32, wins: 23, score: 14357, goals: 31, assists: 28, saves: 58, shots: 131},
{player: 'Vorce', gp: 8, wins: 2, score: 3534, goals: 6, assists: 2, saves: 21, shots: 22},
{player: 'Yujin', gp: 10, wins: 4, score: 2886, goals: 3, assists: 4, saves: 16, shots: 22},
{player: 'Zen', gp: 19, wins: 13, score: 8137, goals: 18, assists: 13, saves: 30, shots: 86},
{player: 'Abdullah', gp: 21, wins: 11, score: 7208, goals: 13, assists: 8, saves: 33, shots: 58},
{player: 'B2sel', gp: 12, wins: 5, score: 4379, goals: 5, assists: 8, saves: 23, shots: 33},
{player: 'Bang', gp: 13, wins: 7, score: 4845, goals: 2, assists: 10, saves: 24, shots: 32},
{player: 'Dark', gp: 8, wins: 2, score: 2990, goals: 5, assists: 1, saves: 12, shots: 26},
{player: 'Drknown', gp: 28, wins: 18, score: 11649, goals: 18, assists: 15, saves: 64, shots: 73},
{player: 'Fera', gp: 8, wins: 2, score: 2060, goals: 0, assists: 2, saves: 11, shots: 20},
{player: 'Fktor', gp: 8, wins: 2, score: 3546, goals: 4, assists: 6, saves: 16, shots: 27},
{player: 'Fsol', gp: 12, wins: 5, score: 4052, goals: 6, assists: 3, saves: 22, shots: 26},
{player: 'Ghaazi511', gp: 21, wins: 11, score: 7541, goals: 15, assists: 10, saves: 29, shots: 60},
{player: 'Hmo', gp: 7, wins: 1, score: 2154, goals: 5, assists: 2, saves: 8, shots: 22},
{player: 'Hatem', gp: 20, wins: 13, score: 9177, goals: 19, assists: 15, saves: 42, shots: 58},
{player: 'Kiileerrz', gp: 27, wins: 18, score: 11996, goals: 23, assists: 23, saves: 54, shots: 101},
{player: 'M0nkey m00n', gp: 28, wins: 20, score: 14329, goals: 40, assists: 22, saves: 59, shots: 99},
{player: 'M6r', gp: 6, wins: 0, score: 1560, goals: 1, assists: 2, saves: 7, shots: 15},
{player: 'M7md', gp: 27, wins: 11, score: 8876, goals: 13, assists: 13, saves: 42, shots: 71},
{player: 'M7sn', gp: 23, wins: 11, score: 7025, goals: 9, assists: 11, saves: 37, shots: 59},
{player: 'Mesho', gp: 23, wins: 11, score: 8214, goals: 18, assists: 10, saves: 30, shots: 71},
{player: 'Nadr', gp: 15, wins: 8, score: 6667, goals: 9, assists: 12, saves: 35, shots: 42},
{player: 'Naizak', gp: 6, wins: 0, score: 2106, goals: 3, assists: 4, saves: 7, shots: 16},
{player: 'Nawaf', gp: 17, wins: 6, score: 7549, goals: 10, assists: 7, saves: 46, shots: 42},
{player: 'No one', gp: 8, wins: 2, score: 1897, goals: 4, assists: 1, saves: 9, shots: 17},
{player: 'Nush', gp: 11, wins: 3, score: 4206, goals: 5, assists: 8, saves: 24, shots: 30},
{player: 'Nwpo', gp: 28, wins: 20, score: 12477, goals: 36, assists: 23, saves: 41, shots: 117},
{player: 'Raed', gp: 7, wins: 1, score: 2167, goals: 2, assists: 4, saves: 10, shots: 14},
{player: 'Rez', gp: 13, wins: 7, score: 5594, goals: 10, assists: 5, saves: 29, shots: 37},
{player: 'Riet', gp: 6, wins: 0, score: 1887, goals: 3, assists: 0, saves: 9, shots: 22},
{player: 'Rw9', gp: 27, wins: 18, score: 10082, goals: 24, assists: 13, saves: 38, shots: 85},
{player: 'Sqqp', gp: 20, wins: 13, score: 7926, goals: 14, assists: 15, saves: 34, shots: 67},
{player: 'Suspect', gp: 28, wins: 18, score: 11787, goals: 24, assists: 14, saves: 63, shots: 76},
{player: 'Swizx', gp: 17, wins: 6, score: 5419, goals: 3, assists: 8, saves: 30, shots: 36},
{player: 'T7lm', gp: 23, wins: 11, score: 9255, goals: 18, assists: 14, saves: 39, shots: 93},
{player: 'Trook', gp: 11, wins: 3, score: 3525, goals: 2, assists: 5, saves: 20, shots: 25},
{player: 'Twiz', gp: 11, wins: 3, score: 4377, goals: 11, assists: 4, saves: 18, shots: 29},
{player: 'Yazeed', gp: 12, wins: 5, score: 4172, goals: 7, assists: 2, saves: 19, shots: 31},
{player: 'Chikage', gp: 13, wins: 7, score: 5954, goals: 10, assists: 5, saves: 32, shots: 39},
{player: 'Doffy', gp: 17, wins: 6, score: 7217, goals: 11, assists: 3, saves: 46, shots: 48},
{player: 'Dralii', gp: 27, wins: 18, score: 10991, goals: 25, assists: 16, saves: 38, shots: 105},
{player: 'Isl6nii', gp: 15, wins: 8, score: 6302, goals: 16, assists: 3, saves: 26, shots: 58},
{player: 'Israkan', gp: 8, wins: 2, score: 3055, goals: 6, assists: 2, saves: 12, shots: 37},
{player: 'Lynx', gp: 6, wins: 0, score: 2385, goals: 6, assists: 3, saves: 5, shots: 22},
{player: 'Nmj', gp: 8, wins: 2, score: 3518, goals: 5, assists: 6, saves: 11, shots: 31},
{player: 'O0vvl', gp: 20, wins: 13, score: 9395, goals: 20, assists: 7, saves: 41, shots: 57},
{player: 'Ovampiierz', gp: 15, wins: 8, score: 5688, goals: 8, assists: 11, saves: 26, shots: 31},
{player: 'Ops', gp: 28, wins: 18, score: 12198, goals: 22, assists: 19, saves: 62, shots: 71},
{player: 'T9berh', gp: 7, wins: 1, score: 2582, goals: 5, assists: 1, saves: 15, shots: 22},
{player: 'Trk511', gp: 28, wins: 20, score: 13252, goals: 26, assists: 37, saves: 56, shots: 100},
{player: 'Ztro', gp: 6, wins: 0, score: 2159, goals: 2, assists: 1, saves: 15, shots: 12},
{player: 'Aziz', gp: 12, wins: 4, score: 4806, goals: 5, assists: 10, saves: 24, shots: 28},
{player: 'Amphis', gp: 12, wins: 5, score: 3696, goals: 8, assists: 7, saves: 15, shots: 25},
{player: 'Ben', gp: 8, wins: 2, score: 2541, goals: 5, assists: 2, saves: 12, shots: 15},
{player: 'Bossk', gp: 10, wins: 4, score: 3558, goals: 7, assists: 6, saves: 13, shots: 37},
{player: 'Caleb', gp: 17, wins: 12, score: 7378, goals: 14, assists: 14, saves: 29, shots: 75},
{player: 'Chub', gp: 22, wins: 11, score: 8917, goals: 13, assists: 17, saves: 50, shots: 46},
{player: 'Corrupt', gp: 12, wins: 4, score: 3439, goals: 6, assists: 5, saves: 13, shots: 21},
{player: 'Dreameh', gp: 10, wins: 4, score: 4580, goals: 15, assists: 3, saves: 18, shots: 37},
{player: 'Electro', gp: 7, wins: 1, score: 2373, goals: 3, assists: 5, saves: 15, shots: 15},
{player: 'Eminence', gp: 6, wins: 0, score: 1670, goals: 0, assists: 0, saves: 12, shots: 7},
{player: 'Fever', gp: 15, wins: 14, score: 6241, goals: 20, assists: 10, saves: 15, shots: 53},
{player: 'Frenchie', gp: 12, wins: 4, score: 3861, goals: 9, assists: 4, saves: 16, shots: 27},
{player: 'Kekkles', gp: 22, wins: 14, score: 8703, goals: 24, assists: 11, saves: 33, shots: 79},
{player: 'Khrade', gp: 17, wins: 6, score: 6105, goals: 17, assists: 8, saves: 19, shots: 49},
{player: 'Krepezy', gp: 17, wins: 6, score: 5557, goals: 9, assists: 5, saves: 28, shots: 32},
{player: 'Misty', gp: 11, wins: 4, score: 4365, goals: 12, assists: 7, saves: 14, shots: 33},
{player: 'Fiberr', gp: 21, wins: 15, score: 10458, goals: 29, assists: 20, saves: 38, shots: 83},
{player: 'Superlachie', gp: 21, wins: 15, score: 9007, goals: 23, assists: 17, saves: 25, shots: 85},
{player: 'Gus', gp: 21, wins: 15, score: 9099, goals: 20, assists: 22, saves: 35, shots: 70},
{player: 'Rooster', gp: 22, wins: 11, score: 8543, goals: 20, assists: 9, saves: 32, shots: 66},
{player: 'Scorch', gp: 22, wins: 11, score: 7434, goals: 9, assists: 13, saves: 43, shots: 47},
{player: 'Scrub', gp: 12, wins: 5, score: 4054, goals: 5, assists: 5, saves: 20, shots: 33},
{player: 'Torsos', gp: 15, wins: 14, score: 6274, goals: 13, assists: 18, saves: 18, shots: 42},
{player: 'Zombie', gp: 22, wins: 11, score: 7549, goals: 13, assists: 9, saves: 37, shots: 45},
{player: 'Bal', gp: 11, wins: 4, score: 3866, goals: 10, assists: 5, saves: 13, shots: 33},
{player: 'Bananahead', gp: 15, wins: 14, score: 6423, goals: 20, assists: 11, saves: 20, shots: 61},
{player: 'Bazlito', gp: 8, wins: 2, score: 2562, goals: 2, assists: 3, saves: 15, shots: 17},
{player: 'Cornet', gp: 7, wins: 1, score: 2571, goals: 4, assists: 2, saves: 11, shots: 10},
{player: 'Duggy', gp: 15, wins: 7, score: 4718, goals: 12, assists: 5, saves: 22, shots: 34},
{player: 'Euxsy', gp: 11, wins: 4, score: 3983, goals: 8, assists: 11, saves: 10, shots: 28},
{player: 'Evohpaniniwine', gp: 22, wins: 14, score: 7403, goals: 16, assists: 18, saves: 29, shots: 55},
{player: 'Fades', gp: 12, wins: 5, score: 4745, goals: 13, assists: 8, saves: 14, shots: 44},
{player: 'Hntr', gp: 17, wins: 12, score: 7034, goals: 18, assists: 13, saves: 23, shots: 58},
{player: 'Kaka', gp: 17, wins: 12, score: 6811, goals: 12, assists: 13, saves: 31, shots: 56},
{player: 'Laxin', gp: 22, wins: 14, score: 8557, goals: 13, assists: 10, saves: 38, shots: 61},
{player: 'Lux', gp: 6, wins: 0, score: 1673, goals: 1, assists: 0, saves: 9, shots: 11},
{player: 'Matthew', gp: 22, wins: 11, score: 9257, goals: 18, assists: 9, saves: 46, shots: 62},
{player: 'Nab53', gp: 7, wins: 1, score: 2753, goals: 6, assists: 3, saves: 16, shots: 14},
{player: 'Nerve', gp: 22, wins: 11, score: 7961, goals: 20, assists: 11, saves: 23, shots: 62},
{player: 'Nsaniity', gp: 6, wins: 0, score: 1893, goals: 0, assists: 1, saves: 14, shots: 4},
{player: 'Prompt', gp: 15, wins: 7, score: 6091, goals: 10, assists: 9, saves: 31, shots: 31},
{player: 'Rell', gp: 8, wins: 2, score: 2162, goals: 2, assists: 3, saves: 11, shots: 16},
{player: 'Remiik', gp: 11, wins: 4, score: 2772, goals: 3, assists: 5, saves: 12, shots: 20},
{player: 'Rez', gp: 15, wins: 7, score: 6295, goals: 13, assists: 12, saves: 26, shots: 58},
{player: 'Shin', gp: 10, wins: 4, score: 3945, goals: 6, assists: 12, saves: 15, shots: 26},
{player: 'Tatagane', gp: 11, wins: 4, score: 4193, goals: 13, assists: 2, saves: 14, shots: 32},
{player: 'Tims', gp: 11, wins: 4, score: 3611, goals: 2, assists: 7, saves: 20, shots: 18},
{player: 'Wt', gp: 17, wins: 6, score: 6509, goals: 8, assists: 11, saves: 37, shots: 41},
{player: 'Angel of salvation', gp: 11, wins: 3, score: 3907, goals: 6, assists: 5, saves: 18, shots: 34},
{player: 'Aztr', gp: 24, wins: 18, score: 8518, goals: 20, assists: 8, saves: 31, shots: 73},
{player: 'Bemmz', gp: 20, wins: 13, score: 7101, goals: 15, assists: 7, saves: 31, shots: 64},
{player: 'Brenox3k', gp: 9, wins: 3, score: 2648, goals: 5, assists: 2, saves: 9, shots: 24},
{player: 'Drufinho', gp: 28, wins: 16, score: 10584, goals: 18, assists: 17, saves: 45, shots: 86},
{player: 'Davitrox', gp: 22, wins: 11, score: 8821, goals: 21, assists: 15, saves: 35, shots: 78},
{player: 'Folly', gp: 17, wins: 8, score: 6556, goals: 10, assists: 9, saves: 36, shots: 41},
{player: 'Granad', gp: 6, wins: 0, score: 1754, goals: 1, assists: 2, saves: 13, shots: 7},
{player: 'Kns', gp: 20, wins: 10, score: 6951, goals: 14, assists: 8, saves: 27, shots: 42},
{player: 'Le0', gp: 11, wins: 5, score: 4895, goals: 6, assists: 11, saves: 26, shots: 18},
{player: 'Lostt', gp: 17, wins: 11, score: 5514, goals: 11, assists: 9, saves: 19, shots: 47},
{player: 'Motta', gp: 17, wins: 10, score: 6163, goals: 19, assists: 4, saves: 17, shots: 60},
{player: 'Reisplasma', gp: 7, wins: 2, score: 2672, goals: 3, assists: 2, saves: 17, shots: 12},
{player: 'Reysbull', gp: 24, wins: 18, score: 8533, goals: 14, assists: 14, saves: 36, shots: 64},
{player: 'Rmn', gp: 22, wins: 11, score: 9909, goals: 21, assists: 14, saves: 42, shots: 74},
{player: 'Tyzai', gp: 6, wins: 0, score: 1949, goals: 1, assists: 0, saves: 16, shots: 7},
{player: 'Umbroken', gp: 10, wins: 3, score: 3418, goals: 6, assists: 3, saves: 14, shots: 24},
{player: 'Viitin', gp: 11, wins: 3, score: 4991, goals: 10, assists: 1, saves: 25, shots: 35},
{player: 'Brad', gp: 20, wins: 13, score: 6374, goals: 12, assists: 4, saves: 29, shots: 53},
{player: 'Brugnerott  ', gp: 6, wins: 0, score: 2079, goals: 4, assists: 4, saves: 9, shots: 14},
{player: 'Caard', gp: 11, wins: 5, score: 4719, goals: 14, assists: 3, saves: 16, shots: 37},
{player: 'Crn ', gp: 24, wins: 15, score: 8946, goals: 14, assists: 15, saves: 40, shots: 64},
{player: 'Dappluto', gp: 9, wins: 3, score: 3266, goals: 6, assists: 6, saves: 12, shots: 23},
{player: 'Davi', gp: 11, wins: 5, score: 3801, goals: 7, assists: 6, saves: 18, shots: 25},
{player: 'Dreankz', gp: 6, wins: 0, score: 2628, goals: 3, assists: 1, saves: 13, shots: 11},
{player: 'Droppz', gp: 20, wins: 13, score: 7851, goals: 17, assists: 15, saves: 28, shots: 54},
{player: 'Edu', gp: 11, wins: 3, score: 4348, goals: 4, assists: 8, saves: 26, shots: 26},
{player: 'Flare', gp: 22, wins: 11, score: 6631, goals: 12, assists: 12, saves: 24, shots: 57},
{player: 'Ianpinheiro', gp: 9, wins: 3, score: 2979, goals: 2, assists: 2, saves: 20, shots: 14},
{player: 'Kevinacho', gp: 20, wins: 10, score: 5685, goals: 8, assists: 14, saves: 23, shots: 47},
{player: 'Klaus queridinho', gp: 10, wins: 3, score: 3040, goals: 6, assists: 2, saves: 11, shots: 23},
{player: 'Kv1', gp: 28, wins: 16, score: 8387, goals: 12, assists: 20, saves: 38, shots: 59},
{player: 'Lagly', gp: 17, wins: 8, score: 6378, goals: 13, assists: 8, saves: 35, shots: 45},
{player: 'Lucas06', gp: 12, wins: 4, score: 3876, goals: 8, assists: 5, saves: 14, shots: 24},
{player: 'Lxucha', gp: 7, wins: 2, score: 2190, goals: 3, assists: 4, saves: 8, shots: 22},
{player: 'Mav', gp: 12, wins: 4, score: 4044, goals: 7, assists: 3, saves: 26, shots: 23},
{player: 'Misery', gp: 20, wins: 10, score: 8075, goals: 15, assists: 8, saves: 41, shots: 51},
{player: 'Mottarl', gp: 11, wins: 6, score: 4292, goals: 8, assists: 7, saves: 20, shots: 21},
{player: 'Pan', gp: 10, wins: 3, score: 3631, goals: 4, assists: 7, saves: 18, shots: 25},
{player: 'Sad', gp: 24, wins: 18, score: 10721, goals: 16, assists: 18, saves: 56, shots: 74},
{player: 'Sek', gp: 17, wins: 8, score: 5833, goals: 9, assists: 7, saves: 23, shots: 62},
{player: 'Snipjz', gp: 12, wins: 4, score: 4459, goals: 5, assists: 7, saves: 30, shots: 28},
{player: 'Suco', gp: 24, wins: 15, score: 10072, goals: 20, assists: 14, saves: 46, shots: 84},
{player: 'Swiftt', gp: 17, wins: 11, score: 5321, goals: 13, assists: 11, saves: 13, shots: 50},
{player: 'Thunder', gp: 6, wins: 0, score: 1723, goals: 2, assists: 0, saves: 13, shots: 10},
{player: 'Ttvstarwindss', gp: 6, wins: 0, score: 2060, goals: 2, assists: 3, saves: 13, shots: 9},
{player: 'Twis', gp: 7, wins: 2, score: 2947, goals: 7, assists: 2, saves: 14, shots: 21},
{player: 'Wisty', gp: 24, wins: 15, score: 9230, goals: 21, assists: 18, saves: 31, shots: 60},
{player: 'Yanxnz', gp: 17, wins: 11, score: 7742, goals: 16, assists: 12, saves: 28, shots: 65},
{player: '2die4', gp: 22, wins: 16, score: 10287, goals: 26, assists: 13, saves: 51, shots: 73},
{player: 'Bananacat', gp: 14, wins: 6, score: 5763, goals: 14, assists: 7, saves: 21, shots: 41},
{player: 'Cyx511', gp: 14, wins: 6, score: 4572, goals: 13, assists: 8, saves: 12, shots: 33},
{player: 'Dapz', gp: 17, wins: 9, score: 5715, goals: 7, assists: 11, saves: 36, shots: 33},
{player: 'Dcln', gp: 17, wins: 9, score: 6448, goals: 11, assists: 8, saves: 27, shots: 43},
{player: 'Devour', gp: 27, wins: 16, score: 10088, goals: 24, assists: 14, saves: 38, shots: 84},
{player: 'Eliakimza', gp: 13, wins: 6, score: 4596, goals: 10, assists: 10, saves: 14, shots: 30},
{player: 'Friction', gp: 10, wins: 4, score: 3225, goals: 4, assists: 3, saves: 18, shots: 19},
{player: 'Galaxii', gp: 7, wins: 1, score: 2487, goals: 7, assists: 2, saves: 7, shots: 20},
{player: 'Goldninja', gp: 12, wins: 5, score: 4137, goals: 9, assists: 12, saves: 15, shots: 30},
{player: 'Jeff', gp: 19, wins: 9, score: 7147, goals: 10, assists: 10, saves: 39, shots: 41},
{player: 'Lickse', gp: 7, wins: 1, score: 2509, goals: 8, assists: 2, saves: 5, shots: 26},
{player: 'Lorax', gp: 11, wins: 4, score: 3559, goals: 7, assists: 5, saves: 16, shots: 27},
{player: 'Luiisp', gp: 22, wins: 16, score: 10109, goals: 26, assists: 16, saves: 36, shots: 82},
{player: 'M$hnn', gp: 17, wins: 9, score: 5928, goals: 13, assists: 5, saves: 24, shots: 37},
{player: 'Marmoan', gp: 12, wins: 5, score: 5887, goals: 14, assists: 8, saves: 23, shots: 37},
{player: 'N1tr', gp: 30, wins: 15, score: 9805, goals: 23, assists: 16, saves: 33, shots: 107},
{player: 'Renshiro', gp: 12, wins: 4, score: 3709, goals: 6, assists: 5, saves: 14, shots: 35},
{player: 'Schalkg', gp: 10, wins: 4, score: 4038, goals: 6, assists: 2, saves: 27, shots: 17},
{player: 'Shadow', gp: 12, wins: 5, score: 3825, goals: 5, assists: 5, saves: 16, shots: 32},
{player: 'Skillsteal', gp: 27, wins: 16, score: 8356, goals: 21, assists: 14, saves: 27, shots: 74},
{player: 'Snowyy', gp: 21, wins: 18, score: 8380, goals: 22, assists: 19, saves: 29, shots: 86},
{player: 'Stake', gp: 19, wins: 9, score: 9195, goals: 19, assists: 15, saves: 43, shots: 48},
{player: 'Sweaty', gp: 22, wins: 16, score: 9473, goals: 17, assists: 12, saves: 47, shots: 64},
{player: 'Torres8232', gp: 13, wins: 6, score: 5095, goals: 13, assists: 4, saves: 20, shots: 46},
{player: 'Teschow', gp: 20, wins: 9, score: 6831, goals: 13, assists: 14, saves: 22, shots: 48},
{player: 'Weecasper', gp: 14, wins: 6, score: 4572, goals: 7, assists: 6, saves: 20, shots: 27},
{player: 'Werty', gp: 13, wins: 6, score: 3380, goals: 6, assists: 6, saves: 7, shots: 33},
{player: 'Wiiilooo', gp: 8, wins: 2, score: 2686, goals: 3, assists: 5, saves: 16, shots: 16},
{player: 'Egleoreo', gp: 8, wins: 2, score: 2395, goals: 1, assists: 5, saves: 15, shots: 11},
{player: 'Gunz', gp: 21, wins: 18, score: 9864, goals: 23, assists: 13, saves: 41, shots: 95},
{player: 'Halouest', gp: 8, wins: 2, score: 3253, goals: 10, assists: 1, saves: 12, shots: 27},
{player: 'Insp1re', gp: 27, wins: 16, score: 10945, goals: 22, assists: 19, saves: 39, shots: 82},
{player: 'Ji', gp: 7, wins: 1, score: 1643, goals: 2, assists: 5, saves: 7, shots: 13},
{player: 'Kam', gp: 30, wins: 15, score: 12354, goals: 20, assists: 25, saves: 53, shots: 99},
{player: 'Kayvee', gp: 11, wins: 4, score: 4482, goals: 8, assists: 5, saves: 24, shots: 33},
{player: 'Kexii', gp: 30, wins: 15, score: 12794, goals: 24, assists: 17, saves: 60, shots: 85},
{player: 'Lacks  ar', gp: 10, wins: 4, score: 3434, goals: 3, assists: 6, saves: 16, shots: 16},
{player: 'Marssyy', gp: 12, wins: 4, score: 4263, goals: 5, assists: 6, saves: 28, shots: 27},
{player: 'Olam06', gp: 11, wins: 4, score: 3315, goals: 3, assists: 7, saves: 15, shots: 23},
{player: 'Onizumaa', gp: 12, wins: 4, score: 4122, goals: 8, assists: 3, saves: 16, shots: 30},
{player: 'Pandak', gp: 7, wins: 1, score: 2021, goals: 2, assists: 3, saves: 13, shots: 13},
{player: 'Ravioli', gp: 19, wins: 9, score: 8221, goals: 20, assists: 10, saves: 38, shots: 52},
{player: 'Strutic', gp: 7, wins: 1, score: 2615, goals: 2, assists: 5, saves: 14, shots: 25},
{player: 'Tehqoz', gp: 21, wins: 18, score: 9862, goals: 25, assists: 17, saves: 33, shots: 87},
{player: 'Tweex', gp: 20, wins: 9, score: 7038, goals: 15, assists: 8, saves: 26, shots: 62},
{player: 'Twnzr', gp: 20, wins: 9, score: 7557, goals: 16, assists: 8, saves: 38, shots: 47},
{player: 'Xyro', gp: 7, wins: 1, score: 2108, goals: 2, assists: 2, saves: 12, shots: 9},
{player: '2piece', gp: 18, wins: 12, score: 7079, goals: 9, assists: 13, saves: 41, shots: 47},
{player: 'Aqua', gp: 7, wins: 1, score: 2245, goals: 4, assists: 2, saves: 8, shots: 13},
{player: 'Atomic', gp: 13, wins: 11, score: 4500, goals: 12, assists: 6, saves: 15, shots: 40},
{player: 'Beastmode', gp: 13, wins: 11, score: 5116, goals: 14, assists: 8, saves: 19, shots: 35},
{player: 'Cheese', gp: 18, wins: 9, score: 6935, goals: 15, assists: 8, saves: 33, shots: 47},
{player: 'Chronic', gp: 12, wins: 9, score: 4738, goals: 8, assists: 4, saves: 28, shots: 28},
{player: 'Comm', gp: 7, wins: 3, score: 2263, goals: 2, assists: 5, saves: 11, shots: 14},
{player: 'Crispy', gp: 10, wins: 5, score: 3617, goals: 9, assists: 4, saves: 12, shots: 26},
{player: 'Daniel', gp: 13, wins: 11, score: 4687, goals: 6, assists: 12, saves: 20, shots: 43},
{player: 'Evoh', gp: 18, wins: 11, score: 7116, goals: 16, assists: 7, saves: 33, shots: 59},
{player: 'Firstkiller', gp: 15, wins: 7, score: 6383, goals: 12, assists: 8, saves: 34, shots: 42},
{player: 'Fiv3up', gp: 18, wins: 11, score: 6137, goals: 15, assists: 8, saves: 25, shots: 57},
{player: 'Gyro', gp: 7, wins: 1, score: 1753, goals: 2, assists: 0, saves: 10, shots: 17},
{player: 'Juice', gp: 7, wins: 3, score: 1915, goals: 5, assists: 2, saves: 7, shots: 21},
{player: 'Lev', gp: 8, wins: 2, score: 2049, goals: 5, assists: 4, saves: 9, shots: 19},
{player: 'Lj', gp: 15, wins: 7, score: 4886, goals: 7, assists: 6, saves: 24, shots: 34},
{player: 'Mech', gp: 11, wins: 5, score: 3848, goals: 6, assists: 2, saves: 19, shots: 19},
{player: 'Pndh', gp: 9, wins: 3, score: 3108, goals: 5, assists: 2, saves: 13, shots: 21},
{player: 'Paarth', gp: 7, wins: 1, score: 2076, goals: 1, assists: 3, saves: 12, shots: 16},
{player: 'Royales', gp: 5, wins: 1, score: 1770, goals: 0, assists: 2, saves: 15, shots: 10},
{player: 'Speed', gp: 6, wins: 1, score: 1721, goals: 0, assists: 2, saves: 11, shots: 9},
{player: 'Taroco', gp: 7, wins: 3, score: 2481, goals: 7, assists: 1, saves: 12, shots: 22},
{player: 'Wahvey', gp: 18, wins: 12, score: 5979, goals: 15, assists: 5, saves: 20, shots: 52},
{player: 'Aris', gp: 9, wins: 3, score: 2328, goals: 0, assists: 6, saves: 14, shots: 15},
{player: 'Arju', gp: 6, wins: 1, score: 1331, goals: 1, assists: 0, saves: 6, shots: 13},
{player: 'Beasty', gp: 5, wins: 1, score: 1398, goals: 2, assists: 0, saves: 7, shots: 13},
{player: 'Bora', gp: 18, wins: 11, score: 6078, goals: 9, assists: 13, saves: 21, shots: 59},
{player: 'Diaz', gp: 12, wins: 9, score: 4693, goals: 8, assists: 5, saves: 24, shots: 34},
{player: 'Dvo', gp: 5, wins: 1, score: 1319, goals: 2, assists: 2, saves: 4, shots: 15},
{player: 'Frosty', gp: 18, wins: 9, score: 7303, goals: 11, assists: 8, saves: 35, shots: 54},
{player: 'Justin', gp: 6, wins: 3, score: 2610, goals: 7, assists: 2, saves: 11, shots: 23},
{player: 'Justuszzz', gp: 5, wins: 1, score: 1464, goals: 2, assists: 1, saves: 8, shots: 9},
{player: 'Kofyr', gp: 15, wins: 7, score: 5477, goals: 9, assists: 7, saves: 28, shots: 36},
{player: 'Life', gp: 11, wins: 5, score: 3533, goals: 4, assists: 3, saves: 20, shots: 17},
{player: 'Majicbear', gp: 6, wins: 3, score: 2425, goals: 4, assists: 3, saves: 13, shots: 9},
{player: 'Matt', gp: 5, wins: 1, score: 1820, goals: 5, assists: 1, saves: 6, shots: 14},
{player: 'Noly', gp: 11, wins: 5, score: 3721, goals: 3, assists: 4, saves: 25, shots: 21},
{player: 'Pigeon', gp: 8, wins: 2, score: 2974, goals: 4, assists: 1, saves: 21, shots: 19},
{player: 'Percy', gp: 9, wins: 3, score: 2974, goals: 6, assists: 1, saves: 15, shots: 16},
{player: 'Pzy', gp: 10, wins: 5, score: 2921, goals: 5, assists: 5, saves: 12, shots: 26},
{player: 'Relatingwave', gp: 6, wins: 1, score: 1370, goals: 1, assists: 0, saves: 5, shots: 12},
{player: 'Resonal', gp: 8, wins: 2, score: 2392, goals: 3, assists: 4, saves: 14, shots: 14},
{player: 'Reveal', gp: 12, wins: 9, score: 4658, goals: 7, assists: 8, saves: 24, shots: 33},
{player: 'Rise', gp: 6, wins: 3, score: 1783, goals: 1, assists: 7, saves: 5, shots: 19},
{player: 'Simas', gp: 10, wins: 5, score: 3660, goals: 5, assists: 5, saves: 16, shots: 35},
{player: 'Sosa', gp: 18, wins: 9, score: 4417, goals: 6, assists: 8, saves: 19, shots: 40},
{player: 'Tawk', gp: 18, wins: 12, score: 6499, goals: 14, assists: 9, saves: 24, shots: 56},
{player: 'X', gp: 5, wins: 1, score: 1257, goals: 1, assists: 3, saves: 5, shots: 9},
]
export let regional3Players = []
export let major1Players = []
export let regional4Players = []
export let regional5Players = []
export let regional6Players = []
export let major2Players = []
export let championshipPlayers = []
const regionalTable = `
<tr>
  <th>Team Name</th><th>Player</th><th>Team</th><th>Points</th><th>Total</th>
</tr>
`
const kickofftable = `
<tr>
  <th>Team</th><th>Picks</th><th>Total</th>
</tr>
`
const majortable = `
<tr>
  <th>Team</th><th>Picks</th><th>Group Stage</th><th>Playoffs</th><th>Total</th>
</tr>
`
const champtable = `
<tr>
  <th>Championship</th><th>Picks</th><th>Play-in</th><th>Groups</th><th>Playoffs</th><th>Total</th>
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
    calculateTeamScore()
    determinePlayerRating()
    if(evt === 'Regional 1'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployPlacements(Regional1Placements, 1)
      deployReg(Regional1, 1, regional1Players)
      deployMatchups(Regional1Matchups, 1)
      deployTops(regional1Players)
    } else if(evt === 'Regional 2'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployPlacements(Regional2Placements, 1)
      deployReg(Regional2, 2, regional2Players)
      deployMatchups(Regional2Matchups, 2)
      deployTops(regional2Players)
    } else if(evt === 'Regional 3'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployPlacements(Regional3Placements, 1)
      deployReg(Regional3, 3, regional3Players)
      deployMatchups(Regional3Matchups, 3)
      deployTops(regional3Players)
    } else if(evt === 'Regional 4'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployPlacements(Regional4Placements, 2)
      deployReg(Regional4, 4, regional4Players)
      deployMatchups(Regional4Matchups, 4)
      deployTops(regional4Players)
    } else if(evt === 'Regional 5'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployPlacements(Regional5Placements, 2)
      deployReg(Regional5, 5, regional5Players)
      deployMatchups(Regional5Matchups, 5)
      deployTops(regional5Players)
    } else if(evt === 'Regional 6'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores'
      deployPlacements(Regional6Placements, 2)
      deployReg(Regional6, 6, regional6Players)
      deployMatchups(Regional6Matchups, 6)
      deployTops(regional6Players)
    } else if(evt === 'Kickoff LAN'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x2)'
      deployMaj('kickoff')
      deployPlacements(Placements, 7, EventPoints[`Kickoff`].length)
      deployTops(kickoffLANPlayers)
      // deployMatchups(KickoffMatchups, 7)
      document.getElementById('pointsInfo').innerHTML = kickoffPointsInfo
      KickoffPointsInfo()
    } else if(evt === 'Major 1'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x3)'
      deployMaj('major1')
      deployPlacements(Placements, 8, EventPoints['Major1'].length)
      deployTops(major1Players)
      deployMatchups(Major1Matchups, 8)
      document.getElementById('pointsInfo').innerHTML = major1PointsInfo
      Major1PointsInfo()
    } else if(evt === 'Major 2'){
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x3)'
      deployMaj('major2')
      deployPlacements(Placements, 9, EventPoints['Major2'].length)
      deployTops(major2Players)
      deployMatchups(Major2Matchups, 9)
      document.getElementById('pointsInfo').innerHTML = major2PointsInfo
      Major2PointsInfo()
    } else if(evt === 'Championship') {
      document.getElementById('scoresMultiplier').innerHTML = 'Scores(x5)'
      deployMaj('champ')
      deployTops(championshipPlayers)
      deployMatchups(ChampionshipMatchups, 10)
      deployPlacements(Placements, 10, EventPoints['Champ'].length)
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
  const teamFound = teams.find(t => t.team === searchTerm);

  if (!teamFound) {
    return [];
  }

  const details = [
    teamFound.region || 'N/A',
    teamFound.split1Pts,
    teamFound.split2Pts,
    teamFound.totalSeasonPts,
    teamFound.team.toLowerCase().replaceAll(" ","_").replaceAll(".",""),
  ];
  return details;
}
export function getPlayerScore(searchTerm, searchArray){
  const player = searchArray.find(p => p.player === searchTerm);
  if (!player) {return 0;}
  if(player.gp === 0){player.gp = 1}
  const score = Math.round((player.score/100 + player.goals/5 + player.assists/5 + player.saves/15 + player.shots/20) * player.wins / player.gp)
  return score;
}
export function getTeamScore(searchTerm, searchArray){
  const team = searchArray.find(t => t.team === searchTerm);
  if (!team) {return 0;}
  if(team.gp === 0){team.gp = 1}
  const score = Math.round(((team.score/10) + team.goals + team.assists + team.saves + team.shots ) * team.wins / team.gp)
  return score;
}
export function calculateTeamScore(){
  teams.forEach((id) =>{
    const playersOnTeam = players.filter(p => p.team === id.team);
    playersOnTeam.sort((a, b) => a.role.localeCompare(b.role))
    playersOnTeam.forEach((player) => {
      if(player.role === ''){
        id.gp = player.gp
        id.wins = player.wins
        id.score += player.score
        id.goals += player.goals
        id.assists += player.assists
        id.saves += player.saves
        id.shots += player.shots
      }
    })
    console.log(id)
  })
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
        const Player = document.createElement('td');
        const playerLink = document.createElement('a');
        const Points = document.createElement('td');
        const Total = document.createElement('td');
        const team = getPlayerDetails(event[id.shortname][i], players)[0]
        const region = getTeamDetails(team)[0]
        let position = ''

        Player.id = id.shortname
        Points.id = id.shortname
        if(i > 2){
          position = '(Sub)'
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
        
        playerLink.textContent = `${event[id.shortname][i]} ${position}`
        playerLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.shortname][i])}`
        teamName.id = id.shortname
        teamRegion.id = id.shortname
        teamLink.textContent = `${team} (${region})`
        teamRegion.textContent = region
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(team)}`
        
        Player.appendChild(playerLink)
        teamName.appendChild(teamLink)
        newRow.appendChild(Player);
        newRow.appendChild(teamName);
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
    const kickoffCell = document.createElement('td');
    const maj1Cell = document.createElement('td');
    const maj2Cell = document.createElement('td');
    const champCell = document.createElement('td');
    const totalCell = document.createElement('td');


    
    teamName.id = id.shortname
    playinCell.id = id.shortname
    groupsCell.id = id.shortname
    playoffsCell.id = id.shortname
    totalCell.id = id.shortname
    maj1Cell.id = id.shortname
    maj2Cell.id = id.shortname
    champCell.id = id.shortname
    kickoffCell.id = id.shortname
    
    memberLink.textContent = id.name
    memberLink.href = `${path}/profile.html?name=${encodeURIComponent(id.name)}`
    teamName.appendChild(memberLink)
    newRow.appendChild(teamName);

    if(iden === 'major1'){
      maj1Cell.textContent = id.M1G/points['groups'][0] + id.M1PS/points['playoff'][0] + id.M1PF/points['playoff'][1]
      groupsCell.textContent = id.M1G
      playoffsCell.textContent = id.M1PS + id.M1PF
      totalCell.textContent = id.M1T
      newRow.appendChild(maj1Cell);
      newRow.appendChild(groupsCell);
      newRow.appendChild(playoffsCell);
      newRow.appendChild(totalCell);
    } else if(iden === 'major2'){
      maj2Cell.textContent = id.M2G/points['groups'][0] + id.M2PS/points['playoff'][0] + id.M2PF/points['playoff'][1]
      groupsCell.textContent = id.M2G
      playoffsCell.textContent = id.M2PS + id.M2PF
      totalCell.textContent = id.M2T
      newRow.appendChild(maj2Cell);
      newRow.appendChild(groupsCell);
      newRow.appendChild(playoffsCell);
      newRow.appendChild(totalCell);
    } else if(iden === 'champ'){
      champCell.textContent = id.CHPI/points['playin'][0] + id.CHG/points['groups'][0] + id.CHPS/points['playoff'][0] + id.CHPF/points['playoff'][1]
      playinCell.textContent = id.CHPI
      groupsCell.textContent = id.CHG
      playoffsCell.textContent = id.CHPS + id.CHPF
      totalCell.textContent = id.CHT
      newRow.appendChild(champCell);
      newRow.appendChild(playinCell);
      newRow.appendChild(groupsCell);
      newRow.appendChild(playoffsCell);
      newRow.appendChild(totalCell);
    } else {
      totalCell.textContent = id.KO
      kickoffCell.textContent = (id.KO/(points['kickoff'][0]*2))
      newRow.appendChild(kickoffCell)
      newRow.appendChild(totalCell);
    }

    tableBody.appendChild(newRow);
  })
}
function deployPlacements(event, eventNumber, length){
  if(eventNumber < 7){
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
        //checks to see if team is listed in teams list
        const teamUppercase = getTeamDetails(event[id.reg][i])[0]
        if(teamUppercase){
          teamLink.id = (event[id.reg][i]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
          teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event[id.reg][i])}`
        } else {
          teamLink.style = 'color: red;'
        }
        pts.textContent = EventPoints[`Regional${eventNumber}`][i]
      } else {
        team.textContent = "TBD"
        pts.textContent = EventPoints[`Regional${eventNumber}`][i]
      }
      
      pts.id = 'points'
      
      team.appendChild(teamLink)
      newRow.appendChild(team);
      newRow.appendChild(pts);
      
      tableBody.appendChild(newRow);
    }
  })
  } else {
    const placements = `
    <table id="border_box_white">
      <tbody class="section" id="majplacements">
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


    if(eventNumber === 7){
      pts.textContent = EventPoints[`Kickoff`][i]
      teamLink.textContent = event['Kickoff'][i]
      if (event['Kickoff'][i] != 'TBD'){
        teamLink.id = (getTeamDetails(event['Kickoff'][i])[4])
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Kickoff'][i])}`
      }
    } else if(eventNumber === 8){
      teamLink.textContent = event['Major1'][i]
      if (event['Major1'][i] != 'TBD'){
        teamLink.id = (getTeamDetails(event['Major1'][i])[4])
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Major1'][i])}`
      }
      pts.textContent = EventPoints[`Major1`][i]
    } else if(eventNumber === 9){
      teamLink.textContent = event['Major2'][i]
      if (event['Major2'][i] != 'TBD'){
        teamLink.id = (getTeamDetails(event['Major2'][i])[4])
        teamLink.href = `${path}/profile.html?name=${encodeURIComponent(event['Major2'][i])}`
      }
      pts.textContent = EventPoints[`Major2`][i]
    } else if(eventNumber === 10){
      teamLink.textContent = event['Champ'][i]
      if (event['Champ'][i] != 'TBD'){
        teamLink.id = (getTeamDetails(event['Champ'][i])[4])
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
}
function deployMatchups(event, eventNumber){ //RegionalXMatchups
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
    let determineVS1
    let determineVS2
    if(member1 && member2){
      switch (eventNumber){
      case 1:
        determineVS1 = member1.R1
        determineVS2 = member2.R1
        break
      case 2:
        determineVS1 = member1.R2
        determineVS2 = member2.R2
        break
      case 3:
        determineVS1 = member1.R3
        determineVS2 = member2.R3
        break
      case 4:
        determineVS1 = member1.R4
        determineVS2 = member2.R4
        break
      case 5:
        determineVS1 = member1.R5
        determineVS2 = member2.R5
        break
      case 6:
        determineVS1 = member1.R6
        determineVS2 = member2.R6
        break
      case 7:
        determineVS1 = member1.KO
        determineVS2 = member2.KO
        break
      case 8:
        determineVS1 = member1.M1T
        determineVS2 = member2.M1T
        break
      case 9:
        determineVS1 = member1.M2T
        determineVS2 = member2.M2T
        break
      case 10:
        determineVS1 = member1.CHT
        determineVS2 = member2.CHT
        break
      }
    }
    if(event[i] != 'TBD'){
      team1.id = member1.shortname
      team1Link.textContent = member1.name
      team1Link.href = `${path}/profile.html?name=${encodeURIComponent(member1.name)}`
    } else {
      team1Link.textContent = event[i]
    }
    if(determineVS1 > determineVS2){
      vs.textContent = 'W-vs----'
    } else if(determineVS2 > determineVS1){
      vs.textContent = '----vs-W'
    } else {
      vs.textContent = 'vs'
    }
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
