var homeDayGames = {
  "Jun 20": "7:05 pm",
  "Jun 21": "1:20 pm",
  "Jun 22": "1:20 pm",
  "Jun 23": "1:20 pm",
  "Jun 24": "7:05 pm",
  "Jun 25": "7:05 pm",
  "Jun 26": "7:05 pm",
  "Jun 27": "1:20 pm",
  "Jul 12": "1:20 pm",
  "Jul 13": "1:20 pm",
  "Jul 14": "1:20 pm",
  "Jul 15": "7:05 pm",
  "Jul 16": "7:05 pm",
  "Jul 17": "1:20 pm",
  "Jul 19": "1:20 pm",
  "Jul 20": "1:20 pm",
  "Jul 21": "1:20 pm",
  "Aug 2": "1:20 pm",
  "Aug 3": "1:20 pm",
  "Aug 4": "1:20 pm",
  "Aug 5": "7:05 pm",
  "Aug 6": "7:05 pm",
  "Aug 7": "1:20 pm",
  "Aug 20": "7:05 pm",
  "Aug 21": "7:05 pm",
  "Aug 22": "1:20 pm",
  "Aug 23": "1:20 pm",
  "Aug 24": "1:20 pm",
  "Aug 25": "1:20 pm",
  "Aug 30": "1:20 pm",
  "Aug 31": "1:20 pm",
  "Sep 1": "1:20 pm",
  "Sep 2": "1:20 pm",
  "Sep 3": "7:05 pm",
  "Sep 13": "3:05 pm",
  "Sep 14": "1:20 pm",
  "Sep 15": "1:20 pm",
  "Sep 16": "7:05 pm",
  "Sep 17": "7:05 pm",
  "Sep 18": "7:05 pm",
  "Sep 19": "7:05 pm",
  "Sep 20": "1:20 pm",
  "Sep 21": "1:20 pm",
  "Sep 22": "1:20 pm"
};

window.onload = function() {
  var today = new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric'});

  const nope = "NO";
  const yep = "🚨🚨 YES 🚨🚨";

  var gameTime = homeDayGames[today];

  if (gameTime) {
    document.getElementById("bigMoney").innerHTML = yep;
    document.getElementById("details").innerHTML =gameTime;
  }
  else {
   document.getElementById("bigMoney").innerHTML = nope;
  }
}
