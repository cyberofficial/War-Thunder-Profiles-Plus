// Naval battles
var AB_N_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(1)").innerText;
if (AB_N_Battles == "" || AB_N_Battles == "N/A" || AB_N_Battles == "-") {
    AB_N_Battles = "0";
}
var RB_N_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(1)").innerText;
if (RB_N_Battles == "" || RB_N_Battles == "N/A" || RB_N_Battles == "-") {
    RB_N_Battles = "0";
}

document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(1)").innerText = parseInt(AB_N_Battles) + parseInt(RB_N_Battles);

// Ship battles
var AB_N_Ship_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(2)").innerText;
if (AB_N_Ship_Battles == "" || AB_N_Ship_Battles == "N/A" || AB_N_Ship_Battles == "-") {
    AB_N_Ship_Battles = "0";
}
var RB_N_Ship_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(2)").innerText;
if (RB_N_Ship_Battles == "" || RB_N_Ship_Battles == "N/A" || RB_N_Ship_Battles == "-") {
    RB_N_Ship_Battles = "0";
}

document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(2)").innerText = parseInt(AB_N_Ship_Battles) + parseInt(RB_N_Ship_Battles);

// Motor torpedo boat battles
var AB_N_MTB_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(3)").innerText;
if (AB_N_MTB_Battles == "" || AB_N_MTB_Battles == "N/A" || AB_N_MTB_Battles == "-") {
    AB_N_MTB_Battles = "0";
}
var RB_N_MTB_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(3)").innerText;
if (RB_N_MTB_Battles == "" || RB_N_MTB_Battles == "N/A" || RB_N_MTB_Battles == "-") {
    RB_N_MTB_Battles = "0";
}

document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(3)").innerText = parseInt(AB_N_MTB_Battles) + parseInt(RB_N_MTB_Battles);

// Motor gun boat battles
var AB_N_MGB_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(4)").innerText;
if (AB_N_MGB_Battles == "" || AB_N_MGB_Battles == "N/A" || AB_N_MGB_Battles == "-") {
    AB_N_MGB_Battles = "0";
}
var RB_N_MGB_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(4)").innerText;
if (RB_N_MGB_Battles == "" || RB_N_MGB_Battles == "N/A" || RB_N_MGB_Battles == "-") {
    RB_N_MGB_Battles = "0";
}

document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(4)").innerText = parseInt(AB_N_MGB_Battles) + parseInt(RB_N_MGB_Battles);

// Motor torpedo gun boat battles
var AB_N_MTGB_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(5)").innerText;
if (AB_N_MTGB_Battles == "" || AB_N_MTGB_Battles == "N/A" || AB_N_MTGB_Battles == "-") {
    AB_N_MTGB_Battles = "0";
}
var RB_N_MTGB_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(5)").innerText;
if (RB_N_MTGB_Battles == "" || RB_N_MTGB_Battles == "N/A" || RB_N_MTGB_Battles == "-") {
    RB_N_MTGB_Battles = "0";
}

document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(5)").innerText = parseInt(AB_N_MTGB_Battles) + parseInt(RB_N_MTGB_Battles);


// Sub-chaser battles
var AB_N_SC_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(6)").innerText;
if (AB_N_SC_Battles == "" || AB_N_SC_Battles == "N/A" || AB_N_SC_Battles == "-") {
    AB_N_SC_Battles = "0";
}
var RB_N_SC_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(6)").innerText;
if (RB_N_SC_Battles == "" || RB_N_SC_Battles == "N/A" || RB_N_SC_Battles == "-") {
    RB_N_SC_Battles = "0";
}

document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(6)").innerText = parseInt(AB_N_SC_Battles) + parseInt(RB_N_SC_Battles);

// Destroyer battles
var AB_N_D_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(7)").innerText;
if (AB_N_D_Battles == "" || AB_N_D_Battles == "N/A" || AB_N_D_Battles == "-") {
    AB_N_D_Battles = "0";
}
var RB_N_D_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(7)").innerText;
if (RB_N_D_Battles == "" || RB_N_D_Battles == "N/A" || RB_N_D_Battles == "-") {
    RB_N_D_Battles = "0";
}

document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(7)").innerText = parseInt(AB_N_D_Battles) + parseInt(RB_N_D_Battles);

// Naval ferry barge battles
var AB_N_NFB_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(8)").innerText;
if (AB_N_NFB_Battles == "" || AB_N_NFB_Battles == "N/A" || AB_N_NFB_Battles == "-") {
    AB_N_NFB_Battles = "0";
}
var RB_N_NFB_Battles = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(8)").innerText;
if (RB_N_NFB_Battles == "" || RB_N_NFB_Battles == "N/A" || RB_N_NFB_Battles == "-") {
    RB_N_NFB_Battles = "0";
}

document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(8)").innerText = parseInt(AB_N_NFB_Battles) + parseInt(RB_N_NFB_Battles);

// Time played naval
var AB_N_Time_Played = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[2]/li[9]', document, null, 9, null);
if (AB_N_Time_Played.singleNodeValue.innerText == "N/A") {
    AB_N_Time_Played.singleNodeValue.innerText = "0m";
}
AB_N_Time_Played.singleNodeValue.innerText = (convertTimeToMinutes(AB_N_Time_Played.singleNodeValue.innerText) / 60).toFixed(0) + " hours";
var RB_N_Time_Played = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[3]/li[9]', document, null, 9, null);
if (RB_N_Time_Played.singleNodeValue.innerText == "N/A") {
    RB_N_Time_Played.singleNodeValue.innerText = "0m";
}
RB_N_Time_Played.singleNodeValue.innerText = (convertTimeToMinutes(RB_N_Time_Played.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// Sum of Time played naval
var AB_N_Time_Played_Hours = AB_N_Time_Played.singleNodeValue.innerText.replace(/\D/g,'');
var RB_N_Time_Played_Hours = RB_N_Time_Played.singleNodeValue.innerText.replace(/\D/g,'');
var Sum_N_Time_Played_Hours = parseInt(AB_N_Time_Played_Hours) + parseInt(RB_N_Time_Played_Hours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(9)").innerText = Sum_N_Time_Played_Hours.toFixed(0) + " hours";

// Time played on ship
var AB_N_Time_Played_On_Ship = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[2]/li[10]', document, null, 9, null);
if (AB_N_Time_Played_On_Ship.singleNodeValue.innerText == "N/A") {
    AB_N_Time_Played_On_Ship.singleNodeValue.innerText = "0m";
}
AB_N_Time_Played_On_Ship.singleNodeValue.innerText = (convertTimeToMinutes(AB_N_Time_Played_On_Ship.singleNodeValue.innerText) / 60).toFixed(0) + " hours";
var RB_N_Time_Played_On_Ship = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[3]/li[10]', document, null, 9, null);
if (RB_N_Time_Played_On_Ship.singleNodeValue.innerText == "N/A") {
    RB_N_Time_Played_On_Ship.singleNodeValue.innerText = "0m";
}
RB_N_Time_Played_On_Ship.singleNodeValue.innerText = (convertTimeToMinutes(RB_N_Time_Played_On_Ship.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// Sum of Time played on ship
var AB_N_Time_Played_On_Ship_Hours = AB_N_Time_Played_On_Ship.singleNodeValue.innerText.replace(/\D/g,'');
var RB_N_Time_Played_On_Ship_Hours = RB_N_Time_Played_On_Ship.singleNodeValue.innerText.replace(/\D/g,'');
var Sum_N_Time_Played_On_Ship_Hours = parseInt(AB_N_Time_Played_On_Ship_Hours) + parseInt(RB_N_Time_Played_On_Ship_Hours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(10)").innerText = Sum_N_Time_Played_On_Ship_Hours.toFixed(0) + " hours";

// Time played on motor torpedo boat
var AB_N_Time_Played_On_MTB = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[2]/li[11]', document, null, 9, null);
if (AB_N_Time_Played_On_MTB.singleNodeValue.innerText == "N/A") {
    AB_N_Time_Played_On_MTB.singleNodeValue.innerText = "0m";
}
AB_N_Time_Played_On_MTB.singleNodeValue.innerText = (convertTimeToMinutes(AB_N_Time_Played_On_MTB.singleNodeValue.innerText) / 60).toFixed(0) + " hours";
var RB_N_Time_Played_On_MTB = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[3]/li[11]', document, null, 9, null);
if (RB_N_Time_Played_On_MTB.singleNodeValue.innerText == "N/A") {
    RB_N_Time_Played_On_MTB.singleNodeValue.innerText = "0m";
}
RB_N_Time_Played_On_MTB.singleNodeValue.innerText = (convertTimeToMinutes(RB_N_Time_Played_On_MTB.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// Sum of Time played on motor torpedo boat
var AB_N_Time_Played_On_MTB_Hours = AB_N_Time_Played_On_MTB.singleNodeValue.innerText.replace(/\D/g,'');
var RB_N_Time_Played_On_MTB_Hours = RB_N_Time_Played_On_MTB.singleNodeValue.innerText.replace(/\D/g,'');
var Sum_N_Time_Played_On_MTB_Hours = parseInt(AB_N_Time_Played_On_MTB_Hours) + parseInt(RB_N_Time_Played_On_MTB_Hours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(11)").innerText = Sum_N_Time_Played_On_MTB_Hours.toFixed(0) + " hours";

// Time played on motor gun boat
var AB_N_Time_Played_On_MGB = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[2]/li[12]', document, null, 9, null);
if (AB_N_Time_Played_On_MGB.singleNodeValue.innerText == "N/A") {
    AB_N_Time_Played_On_MGB.singleNodeValue.innerText = "0m";
}
AB_N_Time_Played_On_MGB.singleNodeValue.innerText = (convertTimeToMinutes(AB_N_Time_Played_On_MGB.singleNodeValue.innerText) / 60).toFixed(0) + " hours";
var RB_N_Time_Played_On_MGB = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[3]/li[12]', document, null, 9, null);
if (RB_N_Time_Played_On_MGB.singleNodeValue.innerText == "N/A") {
    RB_N_Time_Played_On_MGB.singleNodeValue.innerText = "0m";
}
RB_N_Time_Played_On_MGB.singleNodeValue.innerText = (convertTimeToMinutes(RB_N_Time_Played_On_MGB.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// Sum of Time played on motor gun boat
var AB_N_Time_Played_On_MGB_Hours = AB_N_Time_Played_On_MGB.singleNodeValue.innerText.replace(/\D/g,'');
var RB_N_Time_Played_On_MGB_Hours = RB_N_Time_Played_On_MGB.singleNodeValue.innerText.replace(/\D/g,'');
var Sum_N_Time_Played_On_MGB_Hours = parseInt(AB_N_Time_Played_On_MGB_Hours) + parseInt(RB_N_Time_Played_On_MGB_Hours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(12)").innerText = Sum_N_Time_Played_On_MGB_Hours.toFixed(0) + " hours";

// Time played on motor torpedo gun boat
var AB_N_Time_Played_On_MTGB = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[2]/li[13]', document, null, 9, null);
if (AB_N_Time_Played_On_MTGB.singleNodeValue.innerText == "N/A") {
    AB_N_Time_Played_On_MTGB.singleNodeValue.innerText = "0m";
}
AB_N_Time_Played_On_MTGB.singleNodeValue.innerText = (convertTimeToMinutes(AB_N_Time_Played_On_MTGB.singleNodeValue.innerText) / 60).toFixed(0) + " hours";
var RB_N_Time_Played_On_MTGB = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[3]/li[13]', document, null, 9, null);
if (RB_N_Time_Played_On_MTGB.singleNodeValue.innerText == "N/A") {
    RB_N_Time_Played_On_MTGB.singleNodeValue.innerText = "0m";
}
RB_N_Time_Played_On_MTGB.singleNodeValue.innerText = (convertTimeToMinutes(RB_N_Time_Played_On_MTGB.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// Sum of Time played on motor torpedo gun boat
var AB_N_Time_Played_On_MTGB_Hours = AB_N_Time_Played_On_MTGB.singleNodeValue.innerText.replace(/\D/g,'');
var RB_N_Time_Played_On_MTGB_Hours = RB_N_Time_Played_On_MTGB.singleNodeValue.innerText.replace(/\D/g,'');
var Sum_N_Time_Played_On_MTGB_Hours = parseInt(AB_N_Time_Played_On_MTGB_Hours) + parseInt(RB_N_Time_Played_On_MTGB_Hours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(13)").innerText = Sum_N_Time_Played_On_MTGB_Hours.toFixed(0) + " hours";

// Time played on sub-chaser
var AB_N_Time_Played_On_SC = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[2]/li[14]', document, null, 9, null);
if (AB_N_Time_Played_On_SC.singleNodeValue.innerText == "N/A") {
    AB_N_Time_Played_On_SC.singleNodeValue.innerText = "0m";
}
AB_N_Time_Played_On_SC.singleNodeValue.innerText = (convertTimeToMinutes(AB_N_Time_Played_On_SC.singleNodeValue.innerText) / 60).toFixed(0) + " hours";
var RB_N_Time_Played_On_SC = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[3]/li[14]', document, null, 9, null);
if (RB_N_Time_Played_On_SC.singleNodeValue.innerText == "N/A") {
    RB_N_Time_Played_On_SC.singleNodeValue.innerText = "0m";
}
RB_N_Time_Played_On_SC.singleNodeValue.innerText = (convertTimeToMinutes(RB_N_Time_Played_On_SC.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// Sum of Time played on sub-chaser
var AB_N_Time_Played_On_SC_Hours = AB_N_Time_Played_On_SC.singleNodeValue.innerText.replace(/\D/g,'');
var RB_N_Time_Played_On_SC_Hours = RB_N_Time_Played_On_SC.singleNodeValue.innerText.replace(/\D/g,'');
var Sum_N_Time_Played_On_SC_Hours = parseInt(AB_N_Time_Played_On_SC_Hours) + parseInt(RB_N_Time_Played_On_SC_Hours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(14)").innerText = Sum_N_Time_Played_On_SC_Hours.toFixed(0) + " hours";

// Time played on destroyer
var AB_N_Time_Played_On_D = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[2]/li[15]', document, null, 9, null);
if (AB_N_Time_Played_On_D.singleNodeValue.innerText == "N/A") {
    AB_N_Time_Played_On_D.singleNodeValue.innerText = "0m";
}
AB_N_Time_Played_On_D.singleNodeValue.innerText = (convertTimeToMinutes(AB_N_Time_Played_On_D.singleNodeValue.innerText) / 60).toFixed(0) + " hours";
var RB_N_Time_Played_On_D = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[3]/li[15]', document, null, 9, null);
if (RB_N_Time_Played_On_D.singleNodeValue.innerText == "N/A") {
    RB_N_Time_Played_On_D.singleNodeValue.innerText = "0m";
}
RB_N_Time_Played_On_D.singleNodeValue.innerText = (convertTimeToMinutes(RB_N_Time_Played_On_D.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// Sum of Time played on destroyer
var AB_N_Time_Played_On_D_Hours = AB_N_Time_Played_On_D.singleNodeValue.innerText.replace(/\D/g,'');
var RB_N_Time_Played_On_D_Hours = RB_N_Time_Played_On_D.singleNodeValue.innerText.replace(/\D/g,'');
var Sum_N_Time_Played_On_D_Hours = parseInt(AB_N_Time_Played_On_D_Hours) + parseInt(RB_N_Time_Played_On_D_Hours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(15)").innerText = Sum_N_Time_Played_On_D_Hours.toFixed(0) + " hours";

// Time played on naval ferry barge
var AB_N_Time_Played_On_NFB = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[2]/li[16]', document, null, 9, null);
if (AB_N_Time_Played_On_NFB.singleNodeValue.innerText == "N/A") {
    AB_N_Time_Played_On_NFB.singleNodeValue.innerText = "0m";
}
AB_N_Time_Played_On_NFB.singleNodeValue.innerText = (convertTimeToMinutes(AB_N_Time_Played_On_NFB.singleNodeValue.innerText) / 60).toFixed(0) + " hours";
var RB_N_Time_Played_On_NFB = document.evaluate('/html/body/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div/div[3]/ul[3]/li[16]', document, null, 9, null);
if (RB_N_Time_Played_On_NFB.singleNodeValue.innerText == "N/A") {
    RB_N_Time_Played_On_NFB.singleNodeValue.innerText = "0m";
}
RB_N_Time_Played_On_NFB.singleNodeValue.innerText = (convertTimeToMinutes(RB_N_Time_Played_On_NFB.singleNodeValue.innerText) / 60).toFixed(0) + " hours";

// Sum of Time played on naval ferry barge
var AB_N_Time_Played_On_NFB_Hours = AB_N_Time_Played_On_NFB.singleNodeValue.innerText.replace(/\D/g,'');
var RB_N_Time_Played_On_NFB_Hours = RB_N_Time_Played_On_NFB.singleNodeValue.innerText.replace(/\D/g,'');
var Sum_N_Time_Played_On_NFB_Hours = parseInt(AB_N_Time_Played_On_NFB_Hours) + parseInt(RB_N_Time_Played_On_NFB_Hours);
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(16)").innerText = Sum_N_Time_Played_On_NFB_Hours.toFixed(0) + " hours";

// Total targets destroyed
var AB_N_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(17)").innerText;
if (AB_N_Targets_Destroyed == "" || AB_N_Targets_Destroyed == "N/A" || AB_N_Targets_Destroyed == "-") {
    AB_N_Targets_Destroyed = "0";
}
var RB_N_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(17)").innerText;
if (RB_N_Targets_Destroyed == "" || RB_N_Targets_Destroyed == "N/A" || RB_N_Targets_Destroyed == "-") {
    RB_N_Targets_Destroyed = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(17)").innerText = parseInt(AB_N_Targets_Destroyed) + parseInt(RB_N_Targets_Destroyed);

// Air targets destroyed
var AB_N_Air_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(18)").innerText;
if (AB_N_Air_Targets_Destroyed == "" || AB_N_Air_Targets_Destroyed == "N/A" || AB_N_Air_Targets_Destroyed == "-") {
    AB_N_Air_Targets_Destroyed = "0";
}
var RB_N_Air_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(18)").innerText;
if (RB_N_Air_Targets_Destroyed == "" || RB_N_Air_Targets_Destroyed == "N/A" || RB_N_Air_Targets_Destroyed == "-") {
    RB_N_Air_Targets_Destroyed = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(18)").innerText = parseInt(AB_N_Air_Targets_Destroyed) + parseInt(RB_N_Air_Targets_Destroyed);

// Ground targets destroyed
var AB_N_Ground_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(19)").innerText;
if (AB_N_Ground_Targets_Destroyed == "" || AB_N_Ground_Targets_Destroyed == "N/A" || AB_N_Ground_Targets_Destroyed == "-") {
    AB_N_Ground_Targets_Destroyed = "0";
}
var RB_N_Ground_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(19)").innerText;
if (RB_N_Ground_Targets_Destroyed == "" || RB_N_Ground_Targets_Destroyed == "N/A" || RB_N_Ground_Targets_Destroyed == "-") {
    RB_N_Ground_Targets_Destroyed = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(19)").innerText = parseInt(AB_N_Ground_Targets_Destroyed) + parseInt(RB_N_Ground_Targets_Destroyed);

// Naval targets destroyed
var AB_N_Naval_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(20)").innerText;
if (AB_N_Naval_Targets_Destroyed == "" || AB_N_Naval_Targets_Destroyed == "N/A" || AB_N_Naval_Targets_Destroyed == "-") {
    AB_N_Naval_Targets_Destroyed = "0";
}
var RB_N_Naval_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab > li:nth-child(20)").innerText;
if (RB_N_Naval_Targets_Destroyed == "" || RB_N_Naval_Targets_Destroyed == "N/A" || RB_N_Naval_Targets_Destroyed == "-") {
    RB_N_Naval_Targets_Destroyed = "0";
}
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(20)").innerText = parseInt(AB_N_Naval_Targets_Destroyed) + parseInt(RB_N_Naval_Targets_Destroyed);

// Changle Fleet tab to show "Fleet (<hours>"
var FleetHours = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab > li:nth-child(9)").innerText;
document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > ul > li:nth-child(3)").innerText = "Fleet (" + FleetHours + ")";