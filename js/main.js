function fgoToday() {
  var today = new Date();
  if (today.getHours() < 4) {
    today.setDate(today.getDate() - 1);
  }
  today.setHours(0, 0, 0, 0);
  return today;
}

function days() {
  var today = fgoToday();
  var start = new Date("2023/06/07");
  return (today - start) / 86400000;
}

// ここを編集
var mission_reward = 1210;
var quest_reward = 300;

var pod = (days() + 1) * 3;
var sand = pod * 10 + mission_reward + quest_reward;

var days_required_for_one = Math.ceil((6680 - (sand % 6680)) / 30);
var days_required_for_all = Math.ceil((6680*8 - sand) / 30);

document.getElementById("fgotoday").textContent = fgoToday().toLocaleDateString('ja-JP');
document.getElementById("pods").textContent = pod;
document.getElementById("totalsands").textContent = sand;
document.getElementById("oneclass").textContent = days_required_for_one;
document.getElementById("allclass").textContent = days_required_for_all;