// GROUND battles
var AB_GB_TOTAL = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(1)").innerText;
if (AB_GB_TOTAL == "" || AB_GB_TOTAL == "N/A" || AB_GB_TOTAL == "-") {
    AB_GB_TOTAL = "0";
}
var RB_GB_TOTAL = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.historyFightTab > li:nth-child(1)").innerText;
if (RB_GB_TOTAL == "" || RB_GB_TOTAL == "N/A" || RB_GB_TOTAL == "-") {
    RB_GB_TOTAL = "0";
}
var SB_GB_TOTAL = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.simulationFightTab > li:nth-child(1)").innerText;
if (SB_GB_TOTAL == "" || SB_GB_TOTAL == "N/A" || SB_GB_TOTAL == "-") {
    SB_GB_TOTAL = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(1)").innerText = parseInt(AB_GB_TOTAL) + parseInt(RB_GB_TOTAL) + parseInt(SB_GB_TOTAL);

// Ground battles in tanks
var AB_GB_TANKS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(2)").innerText;
if (AB_GB_TANKS == "" || AB_GB_TANKS == "N/A" || AB_GB_TANKS == "-") {
    AB_GB_TANKS = "0";
}
var RB_GB_TANKS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.historyFightTab > li:nth-child(2)").innerText;
if (RB_GB_TANKS == "" || RB_GB_TANKS == "N/A" || RB_GB_TANKS == "-") {
    RB_GB_TANKS = "0";
}
var SB_GB_TANKS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.simulationFightTab > li:nth-child(2)").innerText;
if (SB_GB_TANKS == "" || SB_GB_TANKS == "N/A" || SB_GB_TANKS == "-") {
    SB_GB_TANKS = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(2)").innerText = parseInt(AB_GB_TANKS) + parseInt(RB_GB_TANKS) + parseInt(SB_GB_TANKS);

// Ground battles in SPGs
var AB_GB_SPGS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(3)").innerText;
if (AB_GB_SPGS == "" || AB_GB_SPGS == "N/A" || AB_GB_SPGS == "-") {
    AB_GB_SPGS = "0";
}
var RB_GB_SPGS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.historyFightTab > li:nth-child(3)").innerText;
if (RB_GB_SPGS == "" || RB_GB_SPGS == "N/A" || RB_GB_SPGS == "-") {
    RB_GB_SPGS = "0";
}
var SB_GB_SPGS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.simulationFightTab > li:nth-child(3)").innerText;
if (SB_GB_SPGS == "" || SB_GB_SPGS == "N/A" || SB_GB_SPGS == "-") {
    SB_GB_SPGS = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(3)").innerText = parseInt(AB_GB_SPGS) + parseInt(RB_GB_SPGS) + parseInt(SB_GB_SPGS);

// Ground battles in heavy tanks
var AB_GB_HTANKS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(4)").innerText;
if (AB_GB_HTANKS == "" || AB_GB_HTANKS == "N/A" || AB_GB_HTANKS == "-") {
    AB_GB_HTANKS = "0";
}
var RB_GB_HTANKS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.historyFightTab > li:nth-child(4)").innerText;
if (RB_GB_HTANKS == "" || RB_GB_HTANKS == "N/A" || RB_GB_HTANKS == "-") {
    RB_GB_HTANKS = "0";
}
var SB_GB_HTANKS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.simulationFightTab > li:nth-child(4)").innerText;
if (SB_GB_HTANKS == "" || SB_GB_HTANKS == "N/A" || SB_GB_HTANKS == "-") {
    SB_GB_HTANKS = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(4)").innerText = parseInt(AB_GB_HTANKS) + parseInt(RB_GB_HTANKS) + parseInt(SB_GB_HTANKS);

// Ground battles in SPAA
var AB_GB_SPAA = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(5)").innerText;
if (AB_GB_SPAA == "" || AB_GB_SPAA == "N/A" || AB_GB_SPAA == "-") {
    AB_GB_SPAA = "0";
}
var RB_GB_SPAA = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.historyFightTab > li:nth-child(5)").innerText;
if (RB_GB_SPAA == "" || RB_GB_SPAA == "N/A" || RB_GB_SPAA == "-") {
    RB_GB_SPAA = "0";
}
var SB_GB_SPAA = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.simulationFightTab > li:nth-child(5)").innerText;
if (SB_GB_SPAA == "" || SB_GB_SPAA == "N/A" || SB_GB_SPAA == "-") {
    SB_GB_SPAA = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(5)").innerText = parseInt(AB_GB_SPAA) + parseInt(RB_GB_SPAA) + parseInt(SB_GB_SPAA);

// Time played in ground battles
var AB_GB_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[2]/li[6]', document, null, 9, null);
if (AB_GB_TIME.singleNodeValue.innerText == "N/A") {
    AB_GB_TIME.singleNodeValue.innerText = "0m";
}
AB_GB_TIME.singleNodeValue.innerText = (convertTimeToMinutes(AB_GB_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

var RB_GB_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[3]/li[6]', document, null, 9, null);
if (RB_GB_TIME.singleNodeValue.innerText == "N/A") {
    RB_GB_TIME.singleNodeValue.innerText = "0m";
}
RB_GB_TIME.singleNodeValue.innerText = (convertTimeToMinutes(RB_GB_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

var SB_GB_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[4]/li[6]', document, null, 9, null);
if (SB_GB_TIME.singleNodeValue.innerText == "N/A") {
    SB_GB_TIME.singleNodeValue.innerText = "0m";
}
SB_GB_TIME.singleNodeValue.innerText = (convertTimeToMinutes(SB_GB_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// sum of Time played in ground battles
var AB_GB_TIME_HOURS = AB_GB_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var RB_GB_TIME_HOURS = RB_GB_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var SB_GB_TIME_HOURS = SB_GB_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var GB_TIME_HOURS = parseInt(AB_GB_TIME_HOURS) + parseInt(RB_GB_TIME_HOURS) + parseInt(SB_GB_TIME_HOURS);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(6)").innerText = GB_TIME_HOURS + " hours";

// Tank battle time
var AB_GB_TANKS_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[2]/li[7]', document, null, 9, null);
if (AB_GB_TANKS_TIME.singleNodeValue.innerText == "N/A") {
    AB_GB_TANKS_TIME.singleNodeValue.innerText = "0m";
}
AB_GB_TANKS_TIME.singleNodeValue.innerText = (convertTimeToMinutes(AB_GB_TANKS_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

var RB_GB_TANKS_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[3]/li[7]', document, null, 9, null);
if (RB_GB_TANKS_TIME.singleNodeValue.innerText == "N/A") {
    RB_GB_TANKS_TIME.singleNodeValue.innerText = "0m";
}
RB_GB_TANKS_TIME.singleNodeValue.innerText = (convertTimeToMinutes(RB_GB_TANKS_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

var SB_GB_TANKS_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[4]/li[7]', document, null, 9, null);
if (SB_GB_TANKS_TIME.singleNodeValue.innerText == "N/A") {
    SB_GB_TANKS_TIME.singleNodeValue.innerText = "0m";
}
SB_GB_TANKS_TIME.singleNodeValue.innerText = (convertTimeToMinutes(SB_GB_TANKS_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// sum of Tank battle time
var AB_GB_TANKS_TIME_HOURS = AB_GB_TANKS_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var RB_GB_TANKS_TIME_HOURS = RB_GB_TANKS_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var SB_GB_TANKS_TIME_HOURS = SB_GB_TANKS_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var GB_TANKS_TIME_HOURS = parseInt(AB_GB_TANKS_TIME_HOURS) + parseInt(RB_GB_TANKS_TIME_HOURS) + parseInt(SB_GB_TANKS_TIME_HOURS);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(7)").innerText = GB_TANKS_TIME_HOURS + " hours";

// Tank Destroyer battle time
var AB_GB_SPGS_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[2]/li[8]', document, null, 9, null);
if (AB_GB_SPGS_TIME.singleNodeValue.innerText == "N/A") {
    AB_GB_SPGS_TIME.singleNodeValue.innerText = "0m";
}
AB_GB_SPGS_TIME.singleNodeValue.innerText = (convertTimeToMinutes(AB_GB_SPGS_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

var RB_GB_SPGS_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[3]/li[8]', document, null, 9, null);
if (RB_GB_SPGS_TIME.singleNodeValue.innerText == "N/A") {
    RB_GB_SPGS_TIME.singleNodeValue.innerText = "0m";
}
RB_GB_SPGS_TIME.singleNodeValue.innerText = (convertTimeToMinutes(RB_GB_SPGS_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

var SB_GB_SPGS_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[4]/li[8]', document, null, 9, null);
if (SB_GB_SPGS_TIME.singleNodeValue.innerText == "N/A") {
    SB_GB_SPGS_TIME.singleNodeValue.innerText = "0m";
}
SB_GB_SPGS_TIME.singleNodeValue.innerText = (convertTimeToMinutes(SB_GB_SPGS_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// sum of Tank Destroyer battle time
var AB_GB_SPGS_TIME_HOURS = AB_GB_SPGS_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var RB_GB_SPGS_TIME_HOURS = RB_GB_SPGS_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var SB_GB_SPGS_TIME_HOURS = SB_GB_SPGS_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var GB_SPGS_TIME_HOURS = parseInt(AB_GB_SPGS_TIME_HOURS) + parseInt(RB_GB_SPGS_TIME_HOURS) + parseInt(SB_GB_SPGS_TIME_HOURS);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(8)").innerText = GB_SPGS_TIME_HOURS + " hours";

// Heavy Tank battle time
var AB_GB_HTANKS_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[2]/li[9]', document, null, 9, null);
if (AB_GB_HTANKS_TIME.singleNodeValue.innerText == "N/A") {
    AB_GB_HTANKS_TIME.singleNodeValue.innerText = "0m";
}
AB_GB_HTANKS_TIME.singleNodeValue.innerText = (convertTimeToMinutes(AB_GB_HTANKS_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

var RB_GB_HTANKS_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[3]/li[9]', document, null, 9, null);
if (RB_GB_HTANKS_TIME.singleNodeValue.innerText == "N/A") {
    RB_GB_HTANKS_TIME.singleNodeValue.innerText = "0m";
}
RB_GB_HTANKS_TIME.singleNodeValue.innerText = (convertTimeToMinutes(RB_GB_HTANKS_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

var SB_GB_HTANKS_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[4]/li[9]', document, null, 9, null);
if (SB_GB_HTANKS_TIME.singleNodeValue.innerText == "N/A") {
    SB_GB_HTANKS_TIME.singleNodeValue.innerText = "0m";
}
SB_GB_HTANKS_TIME.singleNodeValue.innerText = (convertTimeToMinutes(SB_GB_HTANKS_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// sum of Heavy Tank battle time
var AB_GB_HTANKS_TIME_HOURS = AB_GB_HTANKS_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var RB_GB_HTANKS_TIME_HOURS = RB_GB_HTANKS_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var SB_GB_HTANKS_TIME_HOURS = SB_GB_HTANKS_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var GB_HTANKS_TIME_HOURS = parseInt(AB_GB_HTANKS_TIME_HOURS) + parseInt(RB_GB_HTANKS_TIME_HOURS) + parseInt(SB_GB_HTANKS_TIME_HOURS);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(9)").innerText = GB_HTANKS_TIME_HOURS + " hours";

// SPAA battle time
var AB_GB_SPAA_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[2]/li[10]', document, null, 9, null);
if (AB_GB_SPAA_TIME.singleNodeValue.innerText == "N/A") {
    AB_GB_SPAA_TIME.singleNodeValue.innerText = "0m";
}
AB_GB_SPAA_TIME.singleNodeValue.innerText = (convertTimeToMinutes(AB_GB_SPAA_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

var RB_GB_SPAA_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[3]/li[10]', document, null, 9, null);
if (RB_GB_SPAA_TIME.singleNodeValue.innerText == "N/A") {
    RB_GB_SPAA_TIME.singleNodeValue.innerText = "0m";
}
RB_GB_SPAA_TIME.singleNodeValue.innerText = (convertTimeToMinutes(RB_GB_SPAA_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

var SB_GB_SPAA_TIME = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[2]/ul[4]/li[10]', document, null, 9, null);
if (SB_GB_SPAA_TIME.singleNodeValue.innerText == "N/A") {
    SB_GB_SPAA_TIME.singleNodeValue.innerText = "0m";
}
SB_GB_SPAA_TIME.singleNodeValue.innerText = (convertTimeToMinutes(SB_GB_SPAA_TIME.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// sum of SPAA battle time
var AB_GB_SPAA_TIME_HOURS = AB_GB_SPAA_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var RB_GB_SPAA_TIME_HOURS = RB_GB_SPAA_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var SB_GB_SPAA_TIME_HOURS = SB_GB_SPAA_TIME.singleNodeValue.innerText.replace(/\D/g,'');
var GB_SPAA_TIME_HOURS = parseInt(AB_GB_SPAA_TIME_HOURS) + parseInt(RB_GB_SPAA_TIME_HOURS) + parseInt(SB_GB_SPAA_TIME_HOURS);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(10)").innerText = GB_SPAA_TIME_HOURS + " hours";

// Total targets destroyed
var AB_GB_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(11)").innerText;
if (AB_GB_TARGETS == "" || AB_GB_TARGETS == "N/A" || AB_GB_TARGETS == "-") {
    AB_GB_TARGETS = "0";
}
var RB_GB_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.historyFightTab > li:nth-child(11)").innerText;
if (RB_GB_TARGETS == "" || RB_GB_TARGETS == "N/A" || RB_GB_TARGETS == "-") {
    RB_GB_TARGETS = "0";
}
var SB_GB_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.simulationFightTab > li:nth-child(11)").innerText;
if (SB_GB_TARGETS == "" || SB_GB_TARGETS == "N/A" || SB_GB_TARGETS == "-") {
    SB_GB_TARGETS = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(11)").innerText = parseInt(AB_GB_TARGETS) + parseInt(RB_GB_TARGETS) + parseInt(SB_GB_TARGETS);

// Air targets destroyed
var AB_GB_AIR_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(12)").innerText;
if (AB_GB_AIR_TARGETS == "" || AB_GB_AIR_TARGETS == "N/A" || AB_GB_AIR_TARGETS == "-") {
    AB_GB_AIR_TARGETS = "0";
}
var RB_GB_AIR_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.historyFightTab > li:nth-child(12)").innerText;
if (RB_GB_AIR_TARGETS == "" || RB_GB_AIR_TARGETS == "N/A" || RB_GB_AIR_TARGETS == "-") {
    RB_GB_AIR_TARGETS = "0";
}
var SB_GB_AIR_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.simulationFightTab > li:nth-child(12)").innerText;
if (SB_GB_AIR_TARGETS == "" || SB_GB_AIR_TARGETS == "N/A" || SB_GB_AIR_TARGETS == "-") {
    SB_GB_AIR_TARGETS = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(12)").innerText = parseInt(AB_GB_AIR_TARGETS) + parseInt(RB_GB_AIR_TARGETS) + parseInt(SB_GB_AIR_TARGETS);

// Ground targets destroyed
var AB_GB_GROUND_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(13)").innerText;
if (AB_GB_GROUND_TARGETS == "" || AB_GB_GROUND_TARGETS == "N/A" || AB_GB_GROUND_TARGETS == "-") {
    AB_GB_GROUND_TARGETS = "0";
}
var RB_GB_GROUND_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.historyFightTab > li:nth-child(13)").innerText;
if (RB_GB_GROUND_TARGETS == "" || RB_GB_GROUND_TARGETS == "N/A" || RB_GB_GROUND_TARGETS == "-") {
    RB_GB_GROUND_TARGETS = "0";
}
var SB_GB_GROUND_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.simulationFightTab > li:nth-child(13)").innerText;
if (SB_GB_GROUND_TARGETS == "" || SB_GB_GROUND_TARGETS == "N/A" || SB_GB_GROUND_TARGETS == "-") {
    SB_GB_GROUND_TARGETS = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(13)").innerText = parseInt(AB_GB_GROUND_TARGETS) + parseInt(RB_GB_GROUND_TARGETS) + parseInt(SB_GB_GROUND_TARGETS);

// Naval targets destroyed
var AB_GB_NAVAL_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(14)").innerText;
if (AB_GB_NAVAL_TARGETS == "" || AB_GB_NAVAL_TARGETS == "N/A" || AB_GB_NAVAL_TARGETS == "-") {
    AB_GB_NAVAL_TARGETS = "0";
}
var RB_GB_NAVAL_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.historyFightTab > li:nth-child(14)").innerText;
if (RB_GB_NAVAL_TARGETS == "" || RB_GB_NAVAL_TARGETS == "N/A" || RB_GB_NAVAL_TARGETS == "-") {
    RB_GB_NAVAL_TARGETS = "0";
}
var SB_GB_NAVAL_TARGETS = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.simulationFightTab > li:nth-child(14)").innerText;
if (SB_GB_NAVAL_TARGETS == "" || SB_GB_NAVAL_TARGETS == "N/A" || SB_GB_NAVAL_TARGETS == "-") {
    SB_GB_NAVAL_TARGETS = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab > li:nth-child(14)").innerText = parseInt(AB_GB_NAVAL_TARGETS) + parseInt(RB_GB_NAVAL_TARGETS) + parseInt(SB_GB_NAVAL_TARGETS);