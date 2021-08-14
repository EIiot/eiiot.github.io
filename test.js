function getTimeSinceIso(iso) {
    let currentTime = new Date();
    let expireTime = new Date(iso);

    console.log(currentTime);
    console.log(expireTime);

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

console.log(getTimeSinceIso('2021-08-04T21:12:46Z'));

var isoDate = new Date('2021-08-04T21:12:46Z');

console.log(isoDate.toTimeString());