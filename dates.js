
/*
y 	Year 	                Year 	1996; 96
M 	Month in year 	        Month 	July; Jul; 07
w 	Week in year 	        Number 	27
d 	Day in month 	        Number 	10
E 	Day in week 	        Text 	Tuesday; Tue
H 	Hour in day (0-23) 	    Number 	0
h 	Hour in am/pm (1-12) 	Number 	12
m 	Minute in hour 	        Number 	30
s 	Second in minute 	    Number 	55
S 	Millisecond 	        Number 	978
Z 	Time zone 	            RFC 822 time zone 	-0800
 */


log = console.log;


var Dates = {
};


Dates.i18n = {
    en_GB: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    fr_Fr: {
        days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
        months: ["janvier", "f�vrier", "mars", "avril", "mai", "juin", "juillet", "ao�t", "septembre", "octobre", "novembre", "d�cembre"],
        shortMonths: ["janv.", "f�vr.", "mars", "avr.", "mai", "juin", "juil.", "ao�t", "sept.", "oct.", "nov.", "d�c."]
    }
};


Dates.parse = function(dateStr, format, locale) {
    locale = locale || "en_GB";

    log("date '", dateStr, "' format '", format, ", locale '", locale, "'");

    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    var indexOf = function(arr, value) {
        var i = 0;
        while (i < arr.length && value != arr[i]) {
            i++;
        }
        return i;
    };

    var funcs = {
        "dd": function(value) {
            date.setDate(value);
        },
        "d": function(value) {
            date.setDate(value);
        },
        "MMMM": function(value) {
            date.setMonth(indexOf(Dates.i18n[locale].months, value));
        },
        "MMM": function(value) {
            date.setMonth(indexOf(Dates.i18n[locale].shortMonths, value));
        },
        "MM": function(value) {
            date.setMonth(Number(value) - 1);
        },
        "M": function(value) {
            date.setMonth(Number(value) - 1);
        },
        "yyyy": function(value) {
            date.setYear(value);
        },
        "yy": function(value) {
            //80 years before and 20 after
            value = Number(value);
            var thisYear = new Date().getFullYear();
            if ((value + 2000) - thisYear < 20) (value += 2000);
            date.setYear(value);
        },
        "HH": function(value) {
            date.setHours(value);
        },
        "H": function(value) {
            date.setHours(value);
        },
        "mm": function(value) {
            date.setMinutes(value);
        },
        "ss": function(value) {
            date.setSeconds(value);
        },
        "SSS": function(value) {
            date.setMilliseconds(value);
        },
        "SS": function(value) {
            date.setMilliseconds(value);
        },
        "S": function(value) {
            date.setMilliseconds(value);
        },
        "T": function() {
            // ignore
        },
        "E": function() {
            // ignore
        },
        "Z": function() {
            // UTC?
        }
    };

    var index = 0, token;
    var formatTokens = format.split(/[^A-Za-z]/);
    var dateTokens = dateStr.split(/[^A-Za-z0-9]/);
    for (var i = 0; i < formatTokens.length; i++) {
        var formatToken = formatTokens[i];
        var dateToken = dateTokens[i];
        var func = funcs[formatToken];
        if (func != undefined) {
            // straightforward match
            func(dateToken);
            index = 0;
        } else {
            // need to split format
            var res;
            while ((res = /d{1,2}|M{1,4}|yy(?:yy)|H{1,2}|m{1,2}|s{1,2}|S{1,3}|\w/g.exec(formatToken)) !== null) {
                //log("res '", res, "', date token '", dateToken, "'");
                func = funcs[res];
                if (func != undefined) {
                    if (res[0].match(/MMMM/)) {
                        token = /\D+/.exec(dateToken);
                        func(token[0]);
                        index += token[0].length;
                    } else {
                        token = dateToken.substr(index, res[0].length);
                        func(token);
                        index += token.length;
                    }
                }  else {
                    // any non formatting characters
                    index += res[0].length;
                }
            }
        }
    }
    return date;
};



Dates.format = function(date, format, locale) {

    locale = locale || "en_GB";
    
    var pad = function(num) {
        return num < 10 ? "0" + num : num;
    };

    date = new Date(date);

    var funcs = {
        dd: function() {
            return pad(date.getDate());
        },
        d: function() {
            return date.getDate();
        },
        MMMM: function() {
            return Dates.i18n[locale].months[date.getMonth()];
        },
        MMM: function() {
            return Dates.i18n[locale].shortMonths[date.getMonth()];
        },
        MM: function() {
            return pad((date.getMonth() + 1));
        },
        M: function() {
            return (date.getMonth() + 1);
        },
        yyyy: function() {
            return date.getFullYear();
        },
        yy: function() {
            return String(date.getFullYear()).substr(2,2);
        },
        HH: function() {
            return pad(date.getHours());
        },
        mm: function() {
            return pad(date.getMinutes());
        },
        ss: function() {
            return pad(date.getSeconds());
        },
        SSS: function() {
            return pad(date.getMilliseconds());
        },
        SS: function() {
            return pad(date.getMilliseconds());
        },
        S: function() {
            return date.getMilliseconds();
        }
    };

    return format.replace(/dd|d|M{1,4}|yyyy|yy|HH|mm|ss|S{1,3}/g, function(match, index) {
        return funcs[match](match, index);
    });
};