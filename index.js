const [red, green, blue] = [236, 240, 241]
const body = document.body;

// get element by class name
const buttons = document.getElementsByClassName('social-btns')[0];
const arrow = document.getElementsByClassName('arrow')[0];
const github_div = document.getElementById('github-div'); 
const title = document.getElementById('title');

// minified welcome message and console.log manager
console.log(`██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗██╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝██║
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  ██║
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  ╚═╝
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗██╗
╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝

𝙿𝚕𝚎𝚊𝚜𝚎 𝚍𝚘𝚗'𝚝 𝚙𝚊𝚜𝚝𝚎 𝚝𝚑𝚒𝚗𝚐𝚜 𝚑𝚎𝚛𝚎 𝚞𝚗𝚕𝚎𝚜𝚜 𝚢𝚘𝚞 𝚔𝚗𝚘𝚠 𝚠𝚑𝚊𝚝 𝚢𝚘𝚞'𝚛𝚎 𝚍𝚘𝚒𝚗𝚐

𝚆𝚊𝚗𝚝 𝚝𝚘 𝚍𝚎𝚋𝚞𝚐 𝚝𝚑𝚒𝚗𝚐𝚜? 𝚃𝚛𝚢 𝚕𝚘𝚐𝚐𝚎𝚛.𝚎𝚗𝚊𝚋𝚕𝚎𝙻𝚘𝚐𝚐𝚎𝚛()
`);


// code for custom console.log()
var logger=function(){var oldConsoleLog=null;var pub={};pub.enableLogger=function enableLogger(){if(oldConsoleLog==null)
return;window.console.log=oldConsoleLog;localStorage.consoleLog="enabled";return "Logger Enabled!"};pub.disableLogger=function disableLogger(){oldConsoleLog=console.log;window.console.log=function(){};localStorage.consoleLog="disabled";return "Logger Disabled!"};return pub}();if(localStorage.consoleLog=="enabled"){logger.enableLogger()}else{logger.disableLogger()};

// force start at top

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener('scroll', () => {
    arrow.style.opacity = 1 - (50*(window.scrollY / body.offsetHeight));
    const y = 1 + (window.scrollY || window.pageYOffset) / 150
    const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
});

// fade out div on scroll down

// pin div using scrolltrigger

ScrollTrigger.create({
  trigger: "#social-btns",
  start: 0,
  end: 800,
  pin: true,
  onToggle: self => console.log("toggled, isActive:", self.isActive),
  onUpdate: self => {
    console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  }
});

// github api

function getTimeSinceIso(iso) {
    let currentTime = new Date();
    let expireTime = new Date(iso);

    let seconds = Math.floor((currentTime - expireTime) / 1000);
    let minutes = Math.floor((currentTime - expireTime) / (1000 * 60));
    let hours = Math.floor((currentTime - expireTime) / (1000 * 60 * 60));
    let days = Math.floor((currentTime - expireTime) / (1000 * 60 * 60 * 24));
    let weeks = Math.floor((currentTime - expireTime) / (1000 * 60 * 60 * 24 * 7));
    let months = Math.floor((currentTime - expireTime) / (1000 * 60 * 60 * 24 * 30));
    let years = Math.floor((currentTime - expireTime) / (1000 * 60 * 60 * 24 * 365));

    console.log({seconds, minutes, hours, days, weeks, months, years});

    if (years > 0) {
        let unit;
        years > 1 ? unit = "years" : unit = "year";
        return years + ` ${unit} ago`;
    } else if (months > 0) {
        let unit;
        months > 1 ? unit = "months" : unit = "month";
        return months +` ${unit} ago`;
    } else if (weeks > 0) {
        let unit;
        weeks > 1 ? unit = "weeks" : unit = "week";
        return weeks + ` ${unit} ago`;
    }  else if (days > 0) {
        let unit;
        days > 1 ? unit = "days" : unit = "day";
        return days + ` ${unit} ago`;
    } else if (hours > 0) {
        let unit;
        hours > 1 ? unit = "hours" : unit = "hour";
        return hours + ` ${unit} ago`;
    } else if (minutes > 0) {
        let unit;
        minutes > 1 ? unit = "minutes" : unit = "minute";
        return minutes + ` ${unit} ago`;
    } else {
        let unit;
        seconds > 1 ? unit = "seconds" : unit = "second";
        return seconds + ` ${unit} ago`;
    };
};  

console.log(title);

console.log(github_div);

let jsondata = "";
let apiUrl = 'https://api.github.com/users/eiiot/repos';

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function github() {
    repos = await getJson(apiUrl);

    console.log(repos);

    // sort repos by new commits
    repos.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.pushed_at) - new Date(a.pushed_at);
    });
      
    for (let i = 0; i < repos.length; i++) {
        // move archived repos to the bottom
        if (repos[i].archived) {
            repos.push(repos[i]);
            repos.splice(i, 1);
        };
    };

    console.log(repos);
    
    // create a div for every repo
    for (let i = 0; i < repos.length; i++) {
        let repo = repos[i];
        let repo_name = repo.full_name;
        let repo_url = repo.html_url;
        let repo_description = repo.description;
        let repo_last_commit_ISO = repo.pushed_at;
        let archived = repo.archived;

        let repo_last_commit_time;
        let repo_archived_css;

        if (!archived) {
            repo_last_commit_time = getTimeSinceIso(repo_last_commit_ISO);
            repo_archived_css = "";
        } else {
            repo_last_commit_time = "Archived";
            repo_archived_css = "repo-archived";
        };

        let div = document.createElement('a')
        div.className = 'github-href'
        div.href = repo_url;
        div.innerHTML = `
        <div class="github-repo">
          <div class="repo-name">${repo_name}</div>
          <div class="repo-desc">${repo_description != null ? repo_description : ''}</div> 
          <div class="repo-date ${repo_archived_css}"><a>${repo_last_commit_time}</a></div>
        </div>
        `;

        github_div.appendChild(div)
    };
};

github();