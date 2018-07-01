var homeDayGames = {
"Jun 13": "1:20 pm",
"Jun 20": "1:20 pm",
"Jun 29": "4:05 pm",
"Jun 30": "1:20 pm",
"Jul 1": "1:20 pm",
"Jul 3": "1:20 pm",
"Jul 4": "1:20 pm",
"Jul 6": "1:20 pm",
"Jul 7": "1:20 pm",
"Jul 8": "1:20 pm",
"Jul 20": "1:20 pm",
"Jul 21": "12:05 pm",
"Jul 22": "1:20 pm",
"Jul 25": "1:20 pm",
"Jul 26": "1:20 pm",
"Aug 3": "1:20 pm",
"Aug 4": "1:20 pm",
"Aug 5": "1:20 pm",
"Aug 10": "1:20 pm",
"Aug 11": "3:05 pm",
"Aug 14": "1:20 pm",
"Aug 15": "1:20 pm",
"Aug 24": "1:20 pm",
"Aug 25": "1:20 pm",
"Aug 26": "1:20 pm",
"Aug 29": "1:20 pm",
"Sep 14": "1:20 pm",
"Sep 15": "3:05 pm",
"Sep 16": "1:20 pm",
"Sep 28": "1:20 pm",
"Sep 30": "2:20 pm"
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
