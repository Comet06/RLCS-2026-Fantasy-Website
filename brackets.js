// Championship
let ChampplayinSeeds = ['', '', '', '', //Uppers
                  '', '', '', '',] //lowers
let ChampPI_quarter = {
                        // match winners 1, 2, 3, 4
    'winner-upper' :   ['', '', '', ''],
    'loser-upper' :   ['', '', '', ''],
    'winner-lower' :   ['', '', '', ''],
}
let ChampPI_semis_quals = {
                // Match 1, 2
    'winner-upper-semis' : ['', ''],
    'loser-upper-semis' : ['', ''],
    'winner-upper-quals' : ['', ''],
    'loser-upper-quals' : ['', ''],
    'winner-lower-semis' : ['', ''],
    'winner-lower-quals' : ['', ''],
}
let ChampGA_quarter = {
    'winner-upper' : ['', '', '', ''],
    'loser-upper' : ['', '', '', ''],
    'winner-lower' : ['', '', '', ''],
}
let ChampGA_semis_quals = {
    'winner-upper-semis' : ['', ''],
    'loser-upper-semis' : ['', ''],
    'winner-upper-quals' : ['', ''],
    'loser-upper-quals' : ['', ''],
    'winner-lower-semis' : ['', ''],
    'winner-lower-quals' : ['', ''],
}
let ChampGA_qualified = {
    'groupA' : ['', '', '', '']
}
let ChampGB_quarter = {
    'winner-upper' : ['', '', '', ''],
    'loser-upper' : ['', '', '', ''],
    'winner-lower' : ['', '', '', ''],
}
let ChampGB_semis_quals = {
    'winner-upper-semis' : ['', ''],
    'loser-upper-semis' : ['', ''],
    'winner-upper-quals' : ['', ''],
    'loser-upper-quals' : ['', ''],
    'winner-lower-semis' : ['', ''],
    'winner-lower-quals' : ['', ''],
}
let ChampGB_qualified = {
    'groupB' : ['', '', '', '']
}
let ChampPO_upper = {
    'winner' : ['', '',],
    'loser' : ['', ''],
}
let ChampPO_lower = {
    'round1' : ['', ''],
    'quarter' : ['', ''],
    'semi' : ['', ''],
}
let Champwinner = ''

export function ChampionshipBracket(){ // Not Bracket Form
    // Playin
    document.getElementById("w_puq1").innerHTML=ChampPI_quarter['winner-upper'][0];
    document.getElementById("l_puq1").innerHTML=ChampPI_quarter['loser-upper'][0];
    document.getElementById("w_puq2").innerHTML=ChampPI_quarter['winner-upper'][1];
    document.getElementById("l_puq2").innerHTML=ChampPI_quarter['loser-upper'][1];
    document.getElementById("w_puq3").innerHTML=ChampPI_quarter['winner-upper'][2];
    document.getElementById("l_puq3").innerHTML=ChampPI_quarter['loser-upper'][2];
    document.getElementById("w_puq4").innerHTML=ChampPI_quarter['winner-upper'][3];
    document.getElementById("l_puq4").innerHTML=ChampPI_quarter['loser-upper'][3];
    document.getElementById("w_pus1").innerHTML=ChampPI_semis_quals['winner-upper-semis'][0];
    document.getElementById("l_pus1").innerHTML=ChampPI_semis_quals['loser-upper-semis'][0];
    document.getElementById("w_pus2").innerHTML=ChampPI_semis_quals['winner-upper-semis'][1];
    document.getElementById("l_pus2").innerHTML=ChampPI_semis_quals['loser-upper-semis'][1];
    document.getElementById("w_plq1").innerHTML=ChampPI_quarter['winner-lower'][0];
    document.getElementById("w_plq2").innerHTML=ChampPI_quarter['winner-lower'][1];
    document.getElementById("w_pls1").innerHTML=ChampPI_semis_quals['winner-lower-semis'][0];
    document.getElementById("w_pls2").innerHTML=ChampPI_semis_quals['winner-lower-semis'][1];
    // GROUP A
    document.getElementById("w_gauq1").innerHTML=ChampGA_quarter['winner-upper'][0];
    document.getElementById("l_gauq1").innerHTML=ChampGA_quarter['loser-upper'][0];
    document.getElementById("w_gauq2").innerHTML=ChampGA_quarter['winner-upper'][1];
    document.getElementById("l_gauq2").innerHTML=ChampGA_quarter['loser-upper'][1];
    document.getElementById("w_gauq3").innerHTML=ChampGA_quarter['winner-upper'][2];
    document.getElementById("l_gauq3").innerHTML=ChampGA_quarter['loser-upper'][2];
    document.getElementById("w_gauq4").innerHTML=ChampGA_quarter['winner-upper'][3];
    document.getElementById("l_gauq4").innerHTML=ChampGA_quarter['loser-upper'][3];
    document.getElementById("w_gaus1").innerHTML=ChampGA_semis_quals['winner-upper-semis'][0];
    document.getElementById("l_gaus1").innerHTML=ChampGA_semis_quals['loser-upper-semis'][0];
    document.getElementById("w_gaus2").innerHTML=ChampGA_semis_quals['winner-upper-semis'][1];
    document.getElementById("l_gaus2").innerHTML=ChampGA_semis_quals['loser-upper-semis'][1];
    document.getElementById("gauhs").innerHTML=ChampGA_qualified['groupA'][0];
    document.getElementById("gauls").innerHTML=ChampGA_qualified['groupA'][1];
    document.getElementById("w_galq1").innerHTML=ChampGA_semis_quals['winner-lower-quals'][0];
    document.getElementById("w_galq2").innerHTML=ChampGA_semis_quals['winner-lower-quals'][1];
    document.getElementById("w_gals1").innerHTML=ChampGA_semis_quals['winner-lower-semis'][0];
    document.getElementById("w_gals2").innerHTML=ChampGA_semis_quals['winner-lower-semis'][1];
    document.getElementById("galhs").innerHTML=ChampGA_qualified['groupA'][2];
    document.getElementById("galls").innerHTML=ChampGA_qualified['groupA'][3];
    // GROUP B
    document.getElementById("w_gbuq1").innerHTML=ChampGB_quarter['winner-upper'][0];
    document.getElementById("l_gbuq1").innerHTML=ChampGB_quarter['loser-upper'][0];
    document.getElementById("w_gbuq2").innerHTML=ChampGB_quarter['winner-upper'][1];
    document.getElementById("l_gbuq2").innerHTML=ChampGB_quarter['loser-upper'][1];
    document.getElementById("w_gbuq3").innerHTML=ChampGB_quarter['winner-upper'][2];
    document.getElementById("l_gbuq3").innerHTML=ChampGB_quarter['loser-upper'][2];
    document.getElementById("w_gbuq4").innerHTML=ChampGB_quarter['winner-upper'][3];
    document.getElementById("l_gbuq4").innerHTML=ChampGB_quarter['loser-upper'][3];
    document.getElementById("w_gbus1").innerHTML=ChampGB_semis_quals['winner-upper-semis'][0];
    document.getElementById("l_gbus1").innerHTML=ChampGB_semis_quals['loser-upper-semis'][0];
    document.getElementById("w_gbus2").innerHTML=ChampGB_semis_quals['winner-upper-semis'][1];
    document.getElementById("l_gbus2").innerHTML=ChampGB_semis_quals['loser-upper-semis'][1];
    document.getElementById("gbuhs").innerHTML=ChampGB_qualified['groupB'][0];
    document.getElementById("gbuls").innerHTML=ChampGB_qualified['groupB'][1];
    document.getElementById("w_gblq1").innerHTML=ChampGB_semis_quals['winner-lower-quals'][0];
    document.getElementById("w_gblq2").innerHTML=ChampGB_semis_quals['winner-lower-quals'][1];
    document.getElementById("w_gbls1").innerHTML=ChampGB_semis_quals['winner-lower-semis'][0];
    document.getElementById("w_gbls2").innerHTML=ChampGB_semis_quals['winner-lower-semis'][1];
    document.getElementById("gblhs").innerHTML=ChampGB_qualified['groupB'][2];
    document.getElementById("gblls").innerHTML=ChampGB_qualified['groupB'][3];
    // Playoffs
    document.getElementById("w_pouq1").innerHTML=ChampPO_upper['winner'][0];
    document.getElementById("l_pouq1").innerHTML=ChampPO_upper['loser'][0];
    document.getElementById("w_pouq2").innerHTML=ChampPO_upper['winner'][1];
    document.getElementById("l_pouq2").innerHTML=ChampPO_upper['loser'][1];
    document.getElementById("w_polr1").innerHTML=ChampPO_lower['round1'][0];
    document.getElementById("w_polr2").innerHTML=ChampPO_lower['round1'][1];
    document.getElementById("w_polq1").innerHTML=ChampPO_lower['quarter'][0];
    document.getElementById("w_polq2").innerHTML=ChampPO_lower['quarter'][1];
    document.getElementById("w_pols1").innerHTML=ChampPO_lower['semi'][0];
    document.getElementById("w_pols2").innerHTML=ChampPO_lower['semi'][1];
    document.getElementById("winner").innerHTML=Champwinner;
}