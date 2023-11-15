
// AVIATION //
// Air battles
var AV_AB_AirBattles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(1)").innerText;
if (AV_AB_AirBattles == "" || AV_AB_AirBattles == "N/A" || AV_AB_AirBattles == "0") {
    AV_AB_AirBattles = 0;
}
var AV_RB_AirBattles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.historyFightTab > li:nth-child(1)").innerText;
if (AV_RB_AirBattles == "" || AV_RB_AirBattles == "N/A" || AV_RB_AirBattles == "0") {
    AV_RB_AirBattles = 0;
}
var AV_SB_AirBattles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.simulationFightTab > li:nth-child(1)").innerText;
if (AV_SB_AirBattles == "" || AV_SB_AirBattles == "N/A" || AV_SB_AirBattles == "0") {
    AV_SB_AirBattles = 0;
}

// Sum of all Air Battles
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(1)").innerText = parseInt(AV_AB_AirBattles) + parseInt(AV_RB_AirBattles) + parseInt(AV_SB_AirBattles);

// Air battles in fighters
var AV_AB_Fighters = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(2)").innerText;
if (AV_AB_Fighters == "" || AV_AB_Fighters == "N/A" || AV_AB_Fighters == "0") {
    AV_AB_Fighters = 0;
}
var AV_RB_Fighters = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.historyFightTab > li:nth-child(2)").innerText;
if (AV_RB_Fighters == "" || AV_RB_Fighters == "N/A" || AV_RB_Fighters == "0") {
    AV_RB_Fighters = 0;
}
var AV_SB_Fighters = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.simulationFightTab > li:nth-child(2)").innerText;
if (AV_SB_Fighters == "" || AV_SB_Fighters == "N/A" || AV_SB_Fighters == "0") {
    AV_SB_Fighters = 0;
}

document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(2)").innerText = parseInt(AV_AB_Fighters) + parseInt(AV_RB_Fighters) + parseInt(AV_SB_Fighters);

// Air battles in bombers
var AV_AB_Bombers = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(3)").innerText;
if (AV_AB_Bombers == "" || AV_AB_Bombers == "N/A" || AV_AB_Bombers == "0") {
    AV_AB_Bombers = 0;
}
var AV_RB_Bombers = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.historyFightTab > li:nth-child(3)").innerText;
if (AV_RB_Bombers == "" || AV_RB_Bombers == "N/A" || AV_RB_Bombers == "0") {
    AV_RB_Bombers = 0;
}
var AV_SB_Bombers = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.simulationFightTab > li:nth-child(3)").innerText;
if (AV_SB_Bombers == "" || AV_SB_Bombers == "N/A" || AV_SB_Bombers == "0") {
    AV_SB_Bombers = 0;
}
// sum
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(3)").innerText = parseInt(AV_AB_Bombers) + parseInt(AV_RB_Bombers) + parseInt(AV_SB_Bombers);

// Air battles in attackers
var AV_AB_Attackers = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(4)").innerText;
if (AV_AB_Attackers == "" || AV_AB_Attackers == "N/A" || AV_AB_Attackers == "0") {
    AV_AB_Attackers = 0;
}
var AV_RB_Attackers = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.historyFightTab > li:nth-child(4)").innerText;
if (AV_RB_Attackers == "" || AV_RB_Attackers == "N/A" || AV_RB_Attackers == "0") {
    AV_RB_Attackers = 0;
}
var AV_SB_Attackers = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.simulationFightTab > li:nth-child(4)").innerText;
if (AV_SB_Attackers == "" || AV_SB_Attackers == "N/A" || AV_SB_Attackers == "0") {
    AV_SB_Attackers = 0;
}
// sum
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(4)").innerText = parseInt(AV_AB_Attackers) + parseInt(AV_RB_Attackers) + parseInt(AV_SB_Attackers);

// Time played in air battles
// from content_script.js use function convertTimeToMinutes(timeString)

// check //*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[2]/li[5] for value, if it's "N/A" then set to 0m"
// must usse xapth because of the space in the text
var AV_AB_TimePlayed = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[2]/li[5]', document, null, 9, null);
if (AV_AB_TimePlayed.singleNodeValue.innerText == "N/A") {
    AV_AB_TimePlayed.singleNodeValue.innerText = "0m";
}
// call function from content_script.js then replace the xpath value with the new value and make sure to convert to hours and say hours
AV_AB_TimePlayed.singleNodeValue.innerText = (convertTimeToMinutes(AV_AB_TimePlayed.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

var AV_RB_TimePlayed = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[3]/li[5]', document, null, 9, null);
if (AV_RB_TimePlayed.singleNodeValue.innerText == "N/A") {
    AV_RB_TimePlayed.singleNodeValue.innerText = "0m";
}
AV_RB_TimePlayed.singleNodeValue.innerText = (convertTimeToMinutes(AV_RB_TimePlayed.singleNodeValue.innerText) /60).toFixed(0) + " hours";

var AV_SB_TimePlayed = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[4]/li[5]', document, null, 9, null);
if (AV_SB_TimePlayed.singleNodeValue.innerText == "N/A") {
    AV_SB_TimePlayed.singleNodeValue.innerText = "0m";
}
AV_SB_TimePlayed.singleNodeValue.innerText = (convertTimeToMinutes(AV_SB_TimePlayed.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

// sum of all time played in hours
var AV_AB_TimePlayedHours = AV_AB_TimePlayed.singleNodeValue.innerText.replace(/\D/g,'');
var AV_RB_TimePlayedHours = AV_RB_TimePlayed.singleNodeValue.innerText.replace(/\D/g,'');
var AV_SB_TimePlayedHours = AV_SB_TimePlayed.singleNodeValue.innerText.replace(/\D/g,'');
var AV_TimePlayedHours = parseInt(AV_AB_TimePlayedHours) + parseInt(AV_RB_TimePlayedHours) + parseInt(AV_SB_TimePlayedHours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(5)").innerText = AV_TimePlayedHours + " hours";

// Time played in fighter
var AV_AB_TimePlayedFighters = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[2]/li[6]', document, null, 9, null);
if (AV_AB_TimePlayedFighters.singleNodeValue.innerText == "N/A") {
    AV_AB_TimePlayedFighters.singleNodeValue.innerText = "0m";
}
AV_AB_TimePlayedFighters.singleNodeValue.innerText = (convertTimeToMinutes(AV_AB_TimePlayedFighters.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

var AV_RB_TimePlayedFighters = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[3]/li[6]', document, null, 9, null);
if (AV_RB_TimePlayedFighters.singleNodeValue.innerText == "N/A") {
    AV_RB_TimePlayedFighters.singleNodeValue.innerText = "0m";
}
AV_RB_TimePlayedFighters.singleNodeValue.innerText = (convertTimeToMinutes(AV_RB_TimePlayedFighters.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

var AV_SB_TimePlayedFighters = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[4]/li[6]', document, null, 9, null);
if (AV_SB_TimePlayedFighters.singleNodeValue.innerText == "N/A") {
    AV_SB_TimePlayedFighters.singleNodeValue.innerText = "0m";
}
AV_SB_TimePlayedFighters.singleNodeValue.innerText = (convertTimeToMinutes(AV_SB_TimePlayedFighters.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

// sum of all time played in hours
var AV_AB_TimePlayedFightersHours = AV_AB_TimePlayedFighters.singleNodeValue.innerText.replace(/\D/g,'');
var AV_RB_TimePlayedFightersHours = AV_RB_TimePlayedFighters.singleNodeValue.innerText.replace(/\D/g,'');
var AV_SB_TimePlayedFightersHours = AV_SB_TimePlayedFighters.singleNodeValue.innerText.replace(/\D/g,'');
var AV_TimePlayedFightersHours = parseInt(AV_AB_TimePlayedFightersHours) + parseInt(AV_RB_TimePlayedFightersHours) + parseInt(AV_SB_TimePlayedFightersHours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(6)").innerText = AV_TimePlayedFightersHours + " hours";

// Time played in bomber
var AV_AB_TimePlayedBombers = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[2]/li[7]', document, null, 9, null);
if (AV_AB_TimePlayedBombers.singleNodeValue.innerText == "N/A") {
    AV_AB_TimePlayedBombers.singleNodeValue.innerText = "0m";
}
AV_AB_TimePlayedBombers.singleNodeValue.innerText = (convertTimeToMinutes(AV_AB_TimePlayedBombers.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

var AV_RB_TimePlayedBombers = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[3]/li[7]', document, null, 9, null);
if (AV_RB_TimePlayedBombers.singleNodeValue.innerText == "N/A") {
    AV_RB_TimePlayedBombers.singleNodeValue.innerText = "0m";
}
AV_RB_TimePlayedBombers.singleNodeValue.innerText = (convertTimeToMinutes(AV_RB_TimePlayedBombers.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

var AV_SB_TimePlayedBombers = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[4]/li[7]', document, null, 9, null);
if (AV_SB_TimePlayedBombers.singleNodeValue.innerText == "N/A") {
    AV_SB_TimePlayedBombers.singleNodeValue.innerText = "0m";
}
AV_SB_TimePlayedBombers.singleNodeValue.innerText = (convertTimeToMinutes(AV_SB_TimePlayedBombers.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

// sum of all time played in hours
var AV_AB_TimePlayedBombersHours = AV_AB_TimePlayedBombers.singleNodeValue.innerText.replace(/\D/g,'');
var AV_RB_TimePlayedBombersHours = AV_RB_TimePlayedBombers.singleNodeValue.innerText.replace(/\D/g,'');
var AV_SB_TimePlayedBombersHours = AV_SB_TimePlayedBombers.singleNodeValue.innerText.replace(/\D/g,'');
var AV_TimePlayedBombersHours = parseInt(AV_AB_TimePlayedBombersHours) + parseInt(AV_RB_TimePlayedBombersHours) + parseInt(AV_SB_TimePlayedBombersHours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(7)").innerText = AV_TimePlayedBombersHours + " hours";

// Time played in attackers
var AV_AB_TimePlayedAttackers = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[2]/li[8]', document, null, 9, null);
if (AV_AB_TimePlayedAttackers.singleNodeValue.innerText == "N/A") {
    AV_AB_TimePlayedAttackers.singleNodeValue.innerText = "0m";
}
AV_AB_TimePlayedAttackers.singleNodeValue.innerText = (convertTimeToMinutes(AV_AB_TimePlayedAttackers.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

var AV_RB_TimePlayedAttackers = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[3]/li[8]', document, null, 9, null);
if (AV_RB_TimePlayedAttackers.singleNodeValue.innerText == "N/A") {
    AV_RB_TimePlayedAttackers.singleNodeValue.innerText = "0m";
}
AV_RB_TimePlayedAttackers.singleNodeValue.innerText = (convertTimeToMinutes(AV_RB_TimePlayedAttackers.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

var AV_SB_TimePlayedAttackers = document.evaluate('//*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[1]/ul[4]/li[8]', document, null, 9, null);
if (AV_SB_TimePlayedAttackers.singleNodeValue.innerText == "N/A") {
    AV_SB_TimePlayedAttackers.singleNodeValue.innerText = "0m";
}
AV_SB_TimePlayedAttackers.singleNodeValue.innerText = (convertTimeToMinutes(AV_SB_TimePlayedAttackers.singleNodeValue.innerText) /60 ).toFixed(0) + " hours";

// sum of all time played in hours
var AV_AB_TimePlayedAttackersHours = AV_AB_TimePlayedAttackers.singleNodeValue.innerText.replace(/\D/g,'');
var AV_RB_TimePlayedAttackersHours = AV_RB_TimePlayedAttackers.singleNodeValue.innerText.replace(/\D/g,'');
var AV_SB_TimePlayedAttackersHours = AV_SB_TimePlayedAttackers.singleNodeValue.innerText.replace(/\D/g,'');
var AV_TimePlayedAttackersHours = parseInt(AV_AB_TimePlayedAttackersHours) + parseInt(AV_RB_TimePlayedAttackersHours) + parseInt(AV_SB_TimePlayedAttackersHours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(8)").innerText = AV_TimePlayedAttackersHours + " hours";

// Total targets destroyed
var AV_AB_TargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(9)").innerText;
if (AV_AB_TargetsDestroyed == "" || AV_AB_TargetsDestroyed == "N/A" || AV_AB_TargetsDestroyed == "0") {
    AV_AB_TargetsDestroyed = 0;
}
var AV_RB_TargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.historyFightTab > li:nth-child(9)").innerText;
if (AV_RB_TargetsDestroyed == "" || AV_RB_TargetsDestroyed == "N/A" || AV_RB_TargetsDestroyed == "0") {
    AV_RB_TargetsDestroyed = 0;
}
var AV_SB_TargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.simulationFightTab > li:nth-child(9)").innerText;
if (AV_SB_TargetsDestroyed == "" || AV_SB_TargetsDestroyed == "N/A" || AV_SB_TargetsDestroyed == "0") {
    AV_SB_TargetsDestroyed = 0;
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(9)").innerText = parseInt(AV_AB_TargetsDestroyed) + parseInt(AV_RB_TargetsDestroyed) + parseInt(AV_SB_TargetsDestroyed);

// Air targets destroyed
var AV_AB_AirTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(10)").innerText;
if (AV_AB_AirTargetsDestroyed == "" || AV_AB_AirTargetsDestroyed == "N/A" || AV_AB_AirTargetsDestroyed == "0") {
    AV_AB_AirTargetsDestroyed = 0;
}
var AV_RB_AirTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.historyFightTab > li:nth-child(10)").innerText;
if (AV_RB_AirTargetsDestroyed == "" || AV_RB_AirTargetsDestroyed == "N/A" || AV_RB_AirTargetsDestroyed == "0") {
    AV_RB_AirTargetsDestroyed = 0;
}
var AV_SB_AirTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.simulationFightTab > li:nth-child(10)").innerText;
if (AV_SB_AirTargetsDestroyed == "" || AV_SB_AirTargetsDestroyed == "N/A" || AV_SB_AirTargetsDestroyed == "0") {
    AV_SB_AirTargetsDestroyed = 0;
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(10)").innerText = parseInt(AV_AB_AirTargetsDestroyed) + parseInt(AV_RB_AirTargetsDestroyed) + parseInt(AV_SB_AirTargetsDestroyed);

// Ground targets destroyed
var AV_AB_GroundTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(11)").innerText;
if (AV_AB_GroundTargetsDestroyed == "" || AV_AB_GroundTargetsDestroyed == "N/A" || AV_AB_GroundTargetsDestroyed == "0") {
    AV_AB_GroundTargetsDestroyed = 0;
}
var AV_RB_GroundTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.historyFightTab > li:nth-child(11)").innerText;
if (AV_RB_GroundTargetsDestroyed == "" || AV_RB_GroundTargetsDestroyed == "N/A" || AV_RB_GroundTargetsDestroyed == "0") {
    AV_RB_GroundTargetsDestroyed = 0;
}
var AV_SB_GroundTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.simulationFightTab > li:nth-child(11)").innerText;
if (AV_SB_GroundTargetsDestroyed == "" || AV_SB_GroundTargetsDestroyed == "N/A" || AV_SB_GroundTargetsDestroyed == "0") {
    AV_SB_GroundTargetsDestroyed = 0;
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(11)").innerText = parseInt(AV_AB_GroundTargetsDestroyed) + parseInt(AV_RB_GroundTargetsDestroyed) + parseInt(AV_SB_GroundTargetsDestroyed);

// Naval targets destroyed
var AV_AB_NavalTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(12)").innerText;
if (AV_AB_NavalTargetsDestroyed == "" || AV_AB_NavalTargetsDestroyed == "N/A" || AV_AB_NavalTargetsDestroyed == "0") {
    AV_AB_NavalTargetsDestroyed = 0;
}
var AV_RB_NavalTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.historyFightTab > li:nth-child(12)").innerText;
if (AV_RB_NavalTargetsDestroyed == "" || AV_RB_NavalTargetsDestroyed == "N/A" || AV_RB_NavalTargetsDestroyed == "0") {
    AV_RB_NavalTargetsDestroyed = 0;
}
var AV_SB_NavalTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.simulationFightTab > li:nth-child(12)").innerText;
if (AV_SB_NavalTargetsDestroyed == "" || AV_SB_NavalTargetsDestroyed == "N/A" || AV_SB_NavalTargetsDestroyed == "0") {
    AV_SB_NavalTargetsDestroyed = 0;
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(12)").innerText = parseInt(AV_AB_NavalTargetsDestroyed) + parseInt(AV_RB_NavalTargetsDestroyed) + parseInt(AV_SB_NavalTargetsDestroyed);

// total time played in av
const AV_TotalTimePlayedHours = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab > li:nth-child(5)").innerText;
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > ul > li.user-rate__fightType-item.active").innerText = "Aviation (" + AV_TotalTimePlayedHours + ")";