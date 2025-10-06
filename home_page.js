import { players } from "./player_data.js";

let tops = ['score', 'goals', 'assists', 'saves', 'shots']
const regions = ['eu', 'na', 'oce', 'sam', 'mena', 'apac', 'ssa']
let path1 = ''
let path = '/RLCS-2026-Fantasy-Website'
window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/index.html`) {
    console.log('Index page has loaded!');
    deployScores()
    deployPrize()
  } else if (window.location.pathname === `${path}/regional_1.html`) {
    console.log('Regional 1 page has loaded!');
    deployReg(Regional1)
    deployRegPlacements(Regional1Placements)
    deployTops(Regional1Tops)
  } else if (window.location.pathname === `${path}/regional_2.html`) {
    console.log('Regional 2 page has loaded!');
    deployReg(Regional2)
    deployRegPlacements(Regional2Placements)
    deployTops(Regional2Tops)
  } else if (window.location.pathname === `${path}/regional_3.html`) {
    console.log('Regional 3 page has loaded!');
    deployReg(Regional3)
    deployRegPlacements(Regional3Placements)
    deployTops(Regional3Tops)
  } else if (window.location.pathname === `${path}/major_1.html`) {
    console.log('Major 1 page has loaded!');
    deployMaj(Major1)
    deployMajPlacements(Major1Placements)
    deployTops(Major1Tops)
  } else if (window.location.pathname === `${path}/regional_4.html`) {
    console.log('Regional 4 page has loaded!');
    deployReg(Regional4)
    deployRegPlacements(Regional4Placements)
    deployTops(Regional4Tops)
  } else if (window.location.pathname === `${path}/regional_5.html`) {
    console.log('Regional 5 page has loaded!');
    deployReg(Regional5)
    deployRegPlacements(Regional5Placements)
    deployTops(Regional5Tops)
  } else if (window.location.pathname === `${path}/regional_6.html`) {
    console.log('Regional 6 page has loaded!');
    deployReg(Regional6)
    deployRegPlacements(Regional6Placements)
    deployTops(Regional6Tops)
  } else if (window.location.pathname === `${path}/major_2.html`) {
    console.log('Major 2 page has loaded!');
    deployMaj(Major2)
    deployMajPlacements(Major2Placements)
    deployTops(Major2Tops)
  } else if (window.location.pathname === `${path}/championship.html`) {
    console.log('Championship page has loaded!');
    deployChamp()
    deployChampPlacements()
    deployTops(ChampionshipTops)
  } else if (window.location.pathname === `${path}/info.html`) {
    console.log('Info page has loaded!');
  } else {
    console.log("main event listener is working but nothing else is")
  }
});

export const members = [
  {name: 'Flip Lord', shortname: 'flip'},
  {name: 'Doofenschmirtz inc.',  shortname: 'doof'},
  {name: 'Goofy Goobers',  shortname: 'goof'},
  {name: '24 Karat Gold',  shortname: 'gold'},
  {name: 'Skibbideeznuts',  shortname: 'skib'},
  {name: 'Team Canada',  shortname: 'cana'},
  {name: 'Potus',  shortname: 'pots'},
  {name: 'Brother Yuri',  shortname: 'yuri'},
  {name: 'Mahtoose',  shortname: 'maht'},
  {name: 'Dwayne "The Sock" Johnson',  shortname: 'sock'},
]
export let points = {
    'playin' : [200, 300],
    'groupA' : [300, 400],
    'groupB' : [300, 400],
    'playoff' : [400, 600]
}
export let split1 = {
    'Regional': [15, 10, 7, 7, 5, 5, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1],
    'Major': [30, 20, 14, 14, 10, 10, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3],
}
export let split2 = {
    'Regional': [18, 12, 8, 8, 6, 6, 4, 4, 2, 2, 2, 2, 1, 1, 1, 1],
    'Major': [36, 24, 16, 16, 12, 12, 8, 8, 6, 6, 6, 5, 5, 5, 5, 4],
}


let Regional1 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0]
}
let Regional1Placements = {
    'eu' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'na' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'oce' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'sam' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'mena' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'apac' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'ssa' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
}
let Regional1Tops = {
    'score' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}
let Regional2 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0]
}
let Regional2Placements = {
    'eu' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'na' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'oce' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'sam' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'mena' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'apac' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'ssa' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
}
let Regional2Tops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}
let Regional3 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0]
}
let Regional3Placements = {
    'eu' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'na' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'oce' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'sam' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'mena' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'apac' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
    'ssa' : ['', split1['Regional'][0], '', split1['Regional'][1], '', split1['Regional'][2], '', split1['Regional'][3], '', split1['Regional'][4], '', split1['Regional'][5], '', split1['Regional'][6], '', split1['Regional'][7], '', split1['Regional'][8], '', split1['Regional'][9], '', split1['Regional'][10], '', split1['Regional'][11], '', split1['Regional'][12], '', split1['Regional'][13], '', split1['Regional'][14], '', split1['Regional'][15]],
}
let Regional3Tops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}
let Major1 = {
  'flip' : [0],
  'doof' : [0],
  'goof' : [0],
  'gold' : [0],
  'skib' : [0],
  'cana' : [0],
  'pots' : [0],
  'yuri' : [0],
  'maht' : [0],
  'sock' : [0]
}
let Major1Placements = {
    'major' : ['', split1['Major'][0], '', split1['Major'][1], '', split1['Major'][2], '', split1['Major'][3], '', split1['Major'][4], '', split1['Major'][5], '', split1['Major'][6], '', split1['Major'][7], '', split1['Major'][8], '', split1['Major'][9], '', split1['Major'][10], '', split1['Major'][11], '', split1['Major'][12], '', split1['Major'][13], '', split1['Major'][14], '', split1['Major'][15]],
}
let Major1Tops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}


let Regional4 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0]
}
let Regional4Placements = {
    'eu' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'na' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'oce' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'sam' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'mena' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'apac' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'ssa' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
}
let Regional4Tops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}
let Regional5 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0]
}
let Regional5Placements = {
    'eu' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'na' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'oce' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'sam' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'mena' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'apac' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'ssa' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
}
let Regional5Tops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}
let Regional6 = {
  'flip' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'doof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'goof' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'gold' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'skib' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'cana' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'pots' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'yuri' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'maht' : ['', '', '', 0, '', '', '', 0, '', '', '', 0],
  'sock' : ['', '', '', 0, '', '', '', 0, '', '', '', 0]
}
let Regional6Placements = {
    'eu' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'na' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'oce' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'sam' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'mena' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'apac' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
    'ssa' : ['', split2['Regional'][0], '', split2['Regional'][1], '', split2['Regional'][2], '', split2['Regional'][3], '', split2['Regional'][4], '', split2['Regional'][5], '', split2['Regional'][6], '', split2['Regional'][7], '', split2['Regional'][8], '', split2['Regional'][9], '', split2['Regional'][10], '', split2['Regional'][11], '', split2['Regional'][12], '', split2['Regional'][13], '', split2['Regional'][14], '', split2['Regional'][15]],
}
let Regional6Tops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}


let Major2 = {
  'flip' : [0],
  'doof' : [0],
  'goof' : [0],
  'gold' : [0],
  'skib' : [0],
  'cana' : [0],
  'pots' : [0],
  'yuri' : [0],
  'maht' : [0],
  'sock' : [0]
}
let Major2Placements = {
    'major' : ['', split2['Major'][0], '', split2['Major'][1], '', split2['Major'][2], '', split2['Major'][3], '', split2['Major'][4], '', split2['Major'][5], '', split2['Major'][6], '', split2['Major'][7], '', split2['Major'][8], '', split2['Major'][9], '', split2['Major'][10], '', split2['Major'][11], '', split2['Major'][12], '', split2['Major'][13], '', split2['Major'][14], '', split2['Major'][15]],
}
let Major2Tops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}

let Championship = {
  //(max): PISemi(6), PIQuals(4), GASemi(6), GAQuals(4), GBSemi(6), GBQuals(4), POSemi(8), POFinals(3)
  'flip' : [0, 0, 0, 0, 0, 0, 0, 0],
  'doof' : [0, 0, 0, 0, 0, 0, 0, 0],
  'goof' : [0, 0, 0, 0, 0, 0, 0, 0],
  'gold' : [0, 0, 0, 0, 0, 0, 0, 0],
  'skib' : [0, 0, 0, 0, 0, 0, 0, 0],
  'cana' : [0, 0, 0, 0, 0, 0, 0, 0],
  'pots' : [0, 0, 0, 0, 0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0, 0, 0, 0, 0],
  'maht' : [0, 0, 0, 0, 0, 0, 0, 0],
  'sock' : [0, 0, 0, 0, 0, 0, 0, 0],
}
let ChampionshipPlacements = {
    'champ' : ['1st', '', '2nd', '', '3rd-4th', '', '3rd-4th', '', '5th-6th', '', '5th-6th', '', '7th-8th', '', '7th-8th', '', '9th-12th', '', '9th-12th', '', '9th-12th', '', '9th-12th', '', '13th-16th', '', '13th-16th', '', '13th-16th', '', '13th-16th', '', '17th-18th', '', '17th-18th', '', '19th-20th', '', '19th-20th', ''],
}
let ChampionshipTops = {
    'score' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'goals' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'assists' : ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'saves' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
    'shots' :   ['', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0],
}



let EventSums = { //*****Do not manipulate this data*****
  // Regionals 1-6
  'flip' : [0, 0, 0, 0, 0, 0],
  'doof' : [0, 0, 0, 0, 0, 0],
  'goof' : [0, 0, 0, 0, 0, 0],
  'gold' : [0, 0, 0, 0, 0, 0],
  'skib' : [0, 0, 0, 0, 0, 0],
  'cana' : [0, 0, 0, 0, 0, 0],
  'pots' : [0, 0, 0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0, 0, 0],
  'maht' : [0, 0, 0, 0, 0, 0],
  'sock' : [0, 0, 0, 0, 0, 0],
}
let splitSums = { //*****Do not manipulate this data*****
  // split 1-2, Championship, total
  'flip' : [0, 0, 0, 0],
  'doof' : [0, 0, 0, 0],
  'goof' : [0, 0, 0, 0],
  'gold' : [0, 0, 0, 0],
  'skib' : [0, 0, 0, 0],
  'cana' : [0, 0, 0, 0],
  'pots' : [0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0],
  'maht' : [0, 0, 0, 0],
  'sock' : [0, 0, 0, 0],
}
let champRounds = { //*****Do not manipulate this data*****
  // this is for calculating the totals for playin, groupA, groupB, playoffs, total
  'flip' : [0, 0, 0, 0, 0],
  'doof' : [0, 0, 0, 0, 0],
  'goof' : [0, 0, 0, 0, 0],
  'gold' : [0, 0, 0, 0, 0],
  'skib' : [0, 0, 0, 0, 0],
  'cana' : [0, 0, 0, 0, 0],
  'pots' : [0, 0, 0, 0, 0],
  'yuri' : [0, 0, 0, 0, 0],
  'maht' : [0, 0, 0, 0, 0],
  'sock' : [0, 0, 0, 0, 0],
}
let playerScores = { //*****Do not manipulate this data*****
    'flip': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'doof': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'goof': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'gold': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'skib': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'cana': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'pots': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'yuri': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'maht': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'sock': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};
let prizes = {
  'flip' : [0.00, 0.0, 0.0],
  'doof' : [0.0, 0.0, 0.0],
  'goof' : [0.0, 0.0, 0.0],
  'gold' : [0.0, 0.0, 0.0],
  'skib' : [0.0, 0.0, 0.0],
  'cana' : [0.0, 0.0, 0.0],
  'pots' : [0.0, 0.0, 0.0],
  'yuri' : [0.0, 0.0, 0.0],
  'maht' : [0.0, 0.0, 0.0],
  'sock' : [0.0, 0.0, 0.0],
}



members.forEach((id)=>{
  champRounds[id.shortname][0] = Championship[`${id.shortname}`][0]*points['playin'][0]+Championship[`${id.shortname}`][1]*points['playin'][1]
  champRounds[id.shortname][1] = Championship[`${id.shortname}`][2]*points['groupA'][0]+Championship[`${id.shortname}`][3]*points['groupA'][1]
  champRounds[id.shortname][2] = Championship[`${id.shortname}`][4]*points['groupB'][0]+Championship[`${id.shortname}`][5]*points['groupB'][1]
  champRounds[id.shortname][3] = Championship[`${id.shortname}`][6]*points['playoff'][0]+Championship[`${id.shortname}`][7]*points['playoff'][1]
  champRounds[id.shortname][4] = (champRounds[id.shortname][0] + champRounds[id.shortname][1] + champRounds[id.shortname][2] + champRounds[id.shortname][3])*5
  splitSums[id.shortname][2] = champRounds[id.shortname][4]
  for (let i = 3; i < 12; i += 4) {//adding regional points from each player into event sums
    EventSums[id.shortname][0] += Regional1[id.shortname][i];
    EventSums[id.shortname][1] += Regional2[id.shortname][i];
    EventSums[id.shortname][2] += Regional3[id.shortname][i];
    EventSums[id.shortname][3] += Regional4[id.shortname][i];
    EventSums[id.shortname][4] += Regional5[id.shortname][i];
    EventSums[id.shortname][5] += Regional6[id.shortname][i];
  }
  // Adding each split event up into one sum for prize distribution
  // Adding Multipliers to Major 1, 2, and championship
  Major1[id.shortname][0] = Major1[id.shortname][0]*3
  Major2[id.shortname][0] = Major2[id.shortname][0]*3
  splitSums[id.shortname][0] = EventSums[id.shortname][0] + EventSums[id.shortname][1] + EventSums[id.shortname][2] + Major1[id.shortname][0]
  splitSums[id.shortname][1] = EventSums[id.shortname][3] + EventSums[id.shortname][4] + EventSums[id.shortname][5] + Major2[id.shortname][0]
  splitSums[id.shortname][3] = splitSums[id.shortname][0] + splitSums[id.shortname][1] + splitSums[id.shortname][2]
  // Deploying scores to the array of playerScores Objects
  playerScores[id.shortname] = [EventSums[id.shortname][0], EventSums[id.shortname][1], EventSums[id.shortname][2], Major1[id.shortname][0], splitSums[id.shortname][0], 
                                EventSums[id.shortname][3], EventSums[id.shortname][4], EventSums[id.shortname][5], Major2[id.shortname][0], splitSums[id.shortname][1], splitSums[id.shortname][2], splitSums[id.shortname][3]];
})
function deployTops(event){
    tops.forEach((id) => {
        for (let i = 0; i < 20; i += 2){
            const tableBody = document.getElementById(`${id}`);
            const newRow = document.createElement('tr');
            const team = document.createElement('td');
            const pts = document.createElement('td');

            team.textContent = event[id][i]
            team.id = 'team'
            pts.textContent = event[id][i+1]
            pts.id = 'points'


            newRow.appendChild(team);
            newRow.appendChild(pts);
            
            tableBody.appendChild(newRow);
        }
    })
}
function deployReg(event){
  members.forEach((id) =>{
    const tableBody = document.getElementById('regionalScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    teamName.rowSpan = 4
    teamName.id = id.shortname
    tableBody.appendChild(newRow);
    newRow.appendChild(teamName);
    for (let i = 0; i < 12; i += 4){
      event[id.shortname][i+1] = getTeam(players, event[id.shortname][i])
      event[id.shortname][i+2] = getRegion(players, event[id.shortname][i])
      const tableBody = document.getElementById('regionalScoreCard');
      const newRow = document.createElement('tr');
      const PlayerCell = document.createElement('td');
      const PlayerTeam = document.createElement('td');
      const PlayerRegion = document.createElement('td');
      const PlayerPoints = document.createElement('td');
      
      PlayerCell.id = id.shortname
      PlayerTeam.id = id.shortname
      PlayerRegion.id = id.shortname
      PlayerPoints.id = id.shortname
      teamName.textContent = id.name
      PlayerCell.textContent = event[id.shortname][i]
      PlayerTeam.textContent = event[id.shortname][i+1]
      PlayerRegion.textContent = event[id.shortname][i+2]
      PlayerPoints.textContent = event[id.shortname][i+3]
      

      newRow.appendChild(PlayerCell);
      newRow.appendChild(PlayerTeam);
      newRow.appendChild(PlayerRegion);
      newRow.appendChild(PlayerPoints);
      
      tableBody.appendChild(newRow);
    }
  })
}
function deployRegPlacements(event){
    regions.forEach((id) => {
        for (let i = 0; i < 36; i += 2){
            const tableBody = document.getElementById(`${id}`);
            const newRow = document.createElement('tr');

            const team = document.createElement('td');
            const pts = document.createElement('td');

            team.textContent = event[id][i]
            team.id = 'team'
            pts.textContent = event[id][i+1]
            pts.id = 'points'

            newRow.appendChild(team);
            newRow.appendChild(pts);
            
            tableBody.appendChild(newRow);
        }
    })
}
function deployMaj(event){
  members.forEach((id) =>{
    const tableBody = document.getElementById('majorScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const teamPoints = document.createElement('td');
    
    teamName.id = id.shortname
    teamPoints.id = id.shortname
    teamName.textContent = id.name
    teamPoints.textContent = event[id.shortname][0]
    
    newRow.appendChild(teamName);
    newRow.appendChild(teamPoints);
    
    tableBody.appendChild(newRow);
  })
}
function deployMajPlacements(event){
  for (let i = 0; i < 36; i += 2){
    const tableBody = document.getElementById('Major-placements');
    const newRow = document.createElement('tr');
    const team = document.createElement('td');
    const pts = document.createElement('td');

    team.textContent = event['major'][i]
    team.id = 'team'
    pts.textContent = event['major'][i+1]
    pts.id = 'points'


    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  }
}
function deployChamp(){
  console.log('champ function working')
  // ChampionshipBracket()
  members.forEach((id)=>{
    const tableBody = document.getElementById('championshipScoreCard');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const playinCell = document.createElement('td');
    const groupACell = document.createElement('td');
    const groupBCell = document.createElement('td');
    const playoffCell = document.createElement('td');
    const totalCell = document.createElement('td');
    
    teamName.id = id.shortname
    playinCell.id = id.shortname
    groupACell.id = id.shortname
    groupBCell.id = id.shortname
    playoffCell.id = id.shortname
    totalCell.id = id.shortname
    teamName.textContent = id.name
    playinCell.textContent = champRounds[id.shortname][0]
    groupACell.textContent = champRounds[id.shortname][1]
    groupBCell.textContent = champRounds[id.shortname][2]
    playoffCell.textContent = champRounds[id.shortname][3]
    totalCell.textContent = champRounds[id.shortname][4]
    
    newRow.appendChild(teamName);
    newRow.appendChild(playinCell);
    newRow.appendChild(groupACell);
    newRow.appendChild(groupBCell);
    newRow.appendChild(playoffCell);
    newRow.appendChild(totalCell);
    
    tableBody.appendChild(newRow);
  })
}
function deployChampPlacements(){
    for (let i = 0; i < 40; i += 2){
        const tableBody = document.getElementById('champ-placements');
        const newRow = document.createElement('tr');
        const place = document.createElement('td');
        const team = document.createElement('td');

        place.textContent = ChampionshipPlacements['champ'][i]
        place.id = 'team'
        team.textContent = ChampionshipPlacements['champ'][i+1]
        team.id = 'points'

        newRow.appendChild(place);
        newRow.appendChild(team);
        
        tableBody.appendChild(newRow);
    }
}
function deployPrize(){
  members.forEach((id) =>{
      const tableBody = document.getElementById('prizeTable');
      const newRow = document.createElement('tr');
      const teamName = document.createElement('td');
      const split1Winnings = document.createElement('td');
      const split2Winnings = document.createElement('td');
      const championshipWinnings = document.createElement('td');
      const totalWinnings = document.createElement('td');
      
      teamName.id = id.shortname
      split1Winnings.id = id.shortname
      split2Winnings.id = id.shortname
      championshipWinnings.id = id.shortname
      totalWinnings.id = id.shortname
      teamName.textContent = id.name
      split1Winnings.textContent = "$" + (prizes[id.shortname][0]).toFixed(2)
      split2Winnings.textContent = "$" + (prizes[id.shortname][1]).toFixed(2)
      championshipWinnings.textContent = "$" + (prizes[id.shortname][2]).toFixed(2)
      totalWinnings.textContent = "$" + (prizes[id.shortname][0] +prizes[id.shortname][1] +prizes[id.shortname][2]).toFixed(2)
      

      newRow.appendChild(teamName);
      newRow.appendChild(split1Winnings);
      newRow.appendChild(split2Winnings);
      newRow.appendChild(championshipWinnings);
      newRow.appendChild(totalWinnings);
      
      tableBody.appendChild(newRow);
  })
}
function deployScores(){
  members.forEach((id)=>{
    // deploying scores to table
    const tableBody = document.getElementById('totalScores');
    const newRow = document.createElement('tr');
    const teamName = document.createElement('td');
    const reg1Total = document.createElement('td');
    const reg2Total = document.createElement('td');
    const reg3Total = document.createElement('td');
    const maj1Total = document.createElement('td');
    const split1Total = document.createElement('td');
    const reg4Total = document.createElement('td');
    const reg5Total = document.createElement('td');
    const reg6Total = document.createElement('td');
    const maj2Total = document.createElement('td');
    const split2Total = document.createElement('td');
    const championshipTotal = document.createElement('td');
    const total = document.createElement('td');
    
    teamName.id = id.shortname
    reg1Total.id = id.shortname
    reg2Total.id = id.shortname
    reg3Total.id = id.shortname
    maj1Total.id = id.shortname
    split1Total.id = id.shortname
    reg4Total.id = id.shortname
    reg5Total.id = id.shortname
    reg6Total.id = id.shortname
    maj2Total.id = id.shortname
    split2Total.id = id.shortname
    championshipTotal.id = id.shortname
    total.id = id.shortname

    teamName.textContent = id.name
    reg1Total.textContent = playerScores[id.shortname][0]
    reg2Total.textContent = playerScores[id.shortname][1]
    reg3Total.textContent = playerScores[id.shortname][2]
    maj1Total.textContent = playerScores[id.shortname][3]
    split1Total.textContent = playerScores[id.shortname][4]
    reg4Total.textContent = playerScores[id.shortname][5]
    reg5Total.textContent = playerScores[id.shortname][6]
    reg6Total.textContent = playerScores[id.shortname][7]
    maj2Total.textContent = playerScores[id.shortname][8]
    split2Total.textContent = playerScores[id.shortname][9]
    championshipTotal.textContent = playerScores[id.shortname][10]
    total.textContent = playerScores[id.shortname][11]
    

    newRow.appendChild(teamName);
    newRow.appendChild(reg1Total)
    newRow.appendChild(reg2Total)
    newRow.appendChild(reg3Total)
    newRow.appendChild(maj1Total)
    newRow.appendChild(split1Total)
    newRow.appendChild(reg4Total)
    newRow.appendChild(reg5Total)
    newRow.appendChild(reg6Total)
    newRow.appendChild(maj2Total)
    newRow.appendChild(split2Total)
    newRow.appendChild(championshipTotal)
    newRow.appendChild(total)
    
    tableBody.appendChild(newRow);
  })
}
function getRegion(playerData, searchTerm) {
  const player = playerData.find(player => player.name === searchTerm);
  return player ? player.region : null;
}
function getTeam(playerData, searchTerm) {
  const player = playerData.find(player => player.name === searchTerm);
  return player ? player.team : null;
}

