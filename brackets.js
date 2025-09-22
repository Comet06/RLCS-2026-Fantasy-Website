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



// Bracket form functions
function playin(){
let winnerPuqfm1 = '';
let winnerPuqfm2 = '';
let winnerPuqfm3 = '';
let winnerPuqfm4 = '';
let winnerPusfm1 = '';
let winnerPusfm2 = '';
let winnerPlqfm1 = '';
let winnerPlqfm2 = '';
let winnerPlsfm1 = '';
let winnerPlsfm2 = '';
let loserPuqfm1 = '';
let loserPuqfm2 = '';
let loserPuqfm3 = '';
let loserPuqfm4 = '';
let loserPusfm1 = '';
let loserPusfm2 = '';
function puqfm1(winner, loser){
  document.getElementById("winner_puqfm1").innerHTML=winner;
  document.getElementById("loser_puqfm1").innerHTML=loser;
  winnerPuqfm1 = winner;
  loserPuqfm1 = loser;
}
function puqfm2(winner, loser){
  document.getElementById("winner_puqfm2").innerHTML=winner;
  document.getElementById("loser_puqfm2").innerHTML=loser;
  winnerPuqfm2 = winner;
  loserPuqfm2 = loser;
}
function puqfm3(winner, loser){
  document.getElementById("winner_puqfm3").innerHTML=winner;
  document.getElementById("loser_puqfm3").innerHTML=loser;
  winnerPuqfm3 = winner;
  loserPuqfm3 = loser;
}
function puqfm4(winner, loser){
  document.getElementById("winner_puqfm4").innerHTML=winner;
  document.getElementById("loser_puqfm4").innerHTML=loser;
  winnerPuqfm4 = winner;
  loserPuqfm4 = loser;
}
function pusfm1(winner, loser){
  document.getElementById("winner_pusfm1").innerHTML=winner;
  document.getElementById("loser_pusfm1").innerHTML=loser;
  winnerPusfm1 = winner;
  loserPusfm1 = loser;
}
function pusfm2(winner, loser){
  document.getElementById("winner_pusfm2").innerHTML=winner;
  document.getElementById("loser_pusfm2").innerHTML=loser;
  winnerPusfm2 = winner;
  loserPusfm2 = loser;
}
function plqfm1(winner){
  document.getElementById("winner_plqfm1").innerHTML=winner;
  winnerPlqfm1 = winner;
}
function plqfm2(winner){
  document.getElementById("winner_plqfm2").innerHTML=winner;
  winnerPlqfm2 = winner;
}
function plsfm1(winner){
  document.getElementById("winner_plsfm1").innerHTML=winner;
  document.getElementById("ps3").innerHTML=winner;
  winnerPlsfm1 = winner;
}
function plsfm2(winner){
  document.getElementById("winner_plsfm2").innerHTML=winner;
  document.getElementById("ps4").innerHTML=winner;
  winnerPlsfm2 = winner;
}
}
function groupA(){
    // GROUP A
let winnerGAuqfm1 = ''
let winnerGAuqfm2 = ''
let winnerGAuqfm3 = ''
let winnerGAuqfm4 = ''
let winnerGAusfm1 = ''
let winnerGAusfm2 = ''
let winnerGAlqfm1 = ''
let winnerGAlqfm2 = ''
let winnerGAlsfm1 = ''
let winnerGAlsfm2 = ''
let loserGAuqfm1 = ''
let loserGAuqfm2 = ''
let loserGAuqfm3 = ''
let loserGAuqfm4 = ''
let loserGAusfm1 = ''
let loserGAusfm2 = ''
let GAUH = ''
let GAUL = ''
let GALH = ''
let GALL = ''
function gauqfm1(winner, loser){
  document.getElementById("winner_gauqfm1").innerHTML=winner;
  document.getElementById("loser_gauqfm1").innerHTML=loser;
  winnerGAuqfm1 = winner
  loserGAuqfm1 = loser
}
function gauqfm2(winner, loser){
  document.getElementById("winner_gauqfm2").innerHTML=winner;
  document.getElementById("loser_gauqfm2").innerHTML=loser;
  winnerGAuqfm2 = winner
  loserGAuqfm2 = loser
}
function gauqfm3(winner, loser){
  document.getElementById("winner_gauqfm3").innerHTML=winner;
  document.getElementById("loser_gauqfm3").innerHTML=loser;
  winnerGAuqfm3 = winner
  loserGAuqfm3 = loser
}
function gauqfm4(winner, loser){
  document.getElementById("winner_gauqfm4").innerHTML=winner;
  document.getElementById("loser_gauqfm4").innerHTML=loser;
  winnerGAuqfm4 = winner
  loserGAuqfm4 = loser
}
function gausfm1(winner, loser){
  document.getElementById("winner_gausfm1").innerHTML=winner;
  document.getElementById("gauhs").innerHTML=winner;
  document.getElementById("loser_gausfm1").innerHTML=loser;
  winnerGAusfm1 = winner
  loserGAusfm1 = loser
  GAUH = winner
}
function gausfm2(winner, loser){
  document.getElementById("winner_gausfm2").innerHTML=winner;
  document.getElementById("gauls").innerHTML=winner;
  document.getElementById("loser_gausfm2").innerHTML=loser;
  winnerGAusfm2 = winner
  loserGAusfm2 = loser
  GAUL = winner
}
function galqfm1(winner){
  document.getElementById("winner_galqfm1").innerHTML=winner;
  winnerGAlqfm1 = winner
}
function galqfm2(winner){
  document.getElementById("winner_galqfm2").innerHTML=winner;
  winnerGAlqfm2 = winner
}
function galsfm1(winner){
  document.getElementById("winner_galsfm1").innerHTML=winner;
  document.getElementById("galhs").innerHTML=winner;
  winnerGAlsfm1 = winner
  GALH = winner
}
function galsfm2(winner){
  document.getElementById("winner_galsfm2").innerHTML=winner;
  document.getElementById("galls").innerHTML=winner;
  winnerGAlsfm2 = winner
  GALL = winner
}
}
function groupB(){
    // GROUP B
let winnerGBuqfm1 = ''
let winnerGBuqfm2 = ''
let winnerGBuqfm3 = ''
let winnerGBuqfm4 = ''
let winnerGBusfm1 = ''
let winnerGBusfm2 = ''
let winnerGBlqfm1 = ''
let winnerGBlqfm2 = ''
let winnerGBlsfm1 = ''
let winnerGBlsfm2 = ''
let loserGBuqfm1 = ''
let loserGBuqfm2 = ''
let loserGBuqfm3 = ''
let loserGBuqfm4 = ''
let loserGBusfm1 = ''
let loserGBusfm2 = ''
let GBUH = ''
let GBUL = ''
let GBLH = ''
let GBLL = ''
function gbuqfm1(winner, loser){
  document.getElementById("winner_gbuqfm1").innerHTML=winner;
  document.getElementById("loser_gbuqfm1").innerHTML=loser;
  winnerGBuqfm1 = winner
  loserGBuqfm1 = loser
}
function gbuqfm2(winner, loser){
  document.getElementById("winner_gbuqfm2").innerHTML=winner;
  document.getElementById("loser_gbuqfm2").innerHTML=loser;
  winnerGBuqfm2 = winner
  loserGBuqfm2 = loser
}
function gbuqfm3(winner, loser){
  document.getElementById("winner_gbuqfm3").innerHTML=winner;
  document.getElementById("loser_gbuqfm3").innerHTML=loser;
  winnerGBuqfm3 = winner
  loserGBuqfm3 = loser
}
function gbuqfm4(winner, loser){
  document.getElementById("winner_gbuqfm4").innerHTML=winner;
  document.getElementById("loser_gbuqfm4").innerHTML=loser;
  winnerGBuqfm4 = winner
  loserGBuqfm4 = loser
}
function gbusfm1(winner, loser){
  document.getElementById("winner_gbusfm1").innerHTML=winner;
  document.getElementById("gbuhs").innerHTML=winner;
  document.getElementById("loser_gbusfm1").innerHTML=loser;
  winnerGBusfm1 = winner
  loserGBusfm1 = loser
  GBUH = winner
}
function gbusfm2(winner, loser){
  document.getElementById("winner_gbusfm2").innerHTML=winner;
  document.getElementById("gbuls").innerHTML=winner;
  document.getElementById("loser_gbusfm2").innerHTML=loser;
  winnerGBusfm2 = winner
  loserGBusfm2 = loser
  GBUL = winner
}
function gblqfm1(winner){
  document.getElementById("winner_gblqfm1").innerHTML=winner;
  winnerGBlqfm1 = winner
}
function gblqfm2(winner){
  document.getElementById("winner_gblqfm2").innerHTML=winner;
  winnerGBlqfm2 = winner
}
function gblsfm1(winner){
  document.getElementById("winner_gblsfm1").innerHTML=winner;
  document.getElementById("gblhs").innerHTML=winner;
  winnerGBlsfm1 = winner
  GBLH = winner
}
function gblsfm2(winner){
  document.getElementById("winner_gblsfm2").innerHTML=winner;
  document.getElementById("gblls").innerHTML=winner;
  winnerGBlsfm2 = winner
  GBLL = winner
}
}
function playoff(){
    // Playoffs
let winnerPOuqfm1 = '';
let winnerPOuqfm2 = '';
let loserPOuqfm1 = '';
let loserPOuqfm2 = '';
let winnerPOlrm1 = '';
let winnerPOlrm2 = '';
let winnerPOlqfm1 = '';
let winnerPOlqfm2 = '';
let winnerPOlsfm1 = '';
let winnerPOlsfm2 = '';
function pouqfm1(winner, loser){
  document.getElementById("winner_pouqfm1").innerHTML=winner;
  document.getElementById("loser_pouqfm1").innerHTML=loser;
  winnerPOuqfm1 = winner;
  loserPOuqfm1 = loser;
}
function pouqfm2(winner, loser){
  document.getElementById("winner_pouqfm2").innerHTML=winner;
  document.getElementById("loser_pouqfm2").innerHTML=loser;
  winnerPOuqfm2 = winner
  loserPOuqfm2 = loser
}
function polrm1(winner){
  document.getElementById("winner_polrm1").innerHTML=winner;
  winnerPOlrm1 = winner;
}
function polrm2(winner){
  document.getElementById("winner_polrm2").innerHTML=winner;
  winnerPOlrm2 = winner;
}
function polqfm1(winner){
  document.getElementById("winner_polqfm1").innerHTML=winner;
  winnerPOlqfm1 = winner;
}
function polqfm2(winner){
  document.getElementById("winner_polqfm2").innerHTML=winner;
  winnerPOlqfm2 = winner;
}
function polsfm1(winner){
  document.getElementById("winner_polsfm1").innerHTML=winner;
  winnerPOlsfm1 = winner
}
function polsfm2(winner){
  document.getElementById("winner_polsfm2").innerHTML=winner;
  winnerPOlsfm2 = winner
}
function finalWinner(winner){
  document.getElementById("tourneyWinner").innerHTML=winner;
}
}