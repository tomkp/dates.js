log=console.log;var Dates={};
Dates.i18n={en_GB:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fr_Fr:{days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],shortDays:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],months:["janvier",
"f\ufffdvrier","mars","avril","mai","juin","juillet","ao\ufffdt","septembre","octobre","novembre","d\ufffdcembre"],shortMonths:["janv.","f\ufffdvr.","mars","avr.","mai","juin","juil.","ao\ufffdt","sept.","oct.","nov.","d\ufffdc."]}};
Dates.parse=function(c,g,e){e=e||"en_GB";log("date '",c,"' format '",g,", locale '",e,"'");var b=new Date;b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0);var k=function(a,m){for(var j=0;j<a.length&&m!=a[j];)j++;return j},f={dd:function(a){b.setDate(a)},d:function(a){b.setDate(a)},MMMM:function(a){b.setMonth(k(Dates.i18n[e].months,a))},MMM:function(a){b.setMonth(k(Dates.i18n[e].shortMonths,a))},MM:function(a){b.setMonth(Number(a)-1)},M:function(a){b.setMonth(Number(a)-1)},yyyy:function(a){b.setYear(a)},
yy:function(a){a=Number(a);var m=(new Date).getFullYear();if(a+2E3-m<20)a+=2E3;b.setYear(a)},HH:function(a){b.setHours(a)},H:function(a){b.setHours(a)},mm:function(a){b.setMinutes(a)},ss:function(a){b.setSeconds(a)},SSS:function(a){b.setMilliseconds(a)},SS:function(a){b.setMilliseconds(a)},S:function(a){b.setMilliseconds(a)},T:function(){},E:function(){},Z:function(){}},h=0,d;g=g.split(/[^A-Za-z]/);c=c.split(/[^A-Za-z0-9]/);for(var l=0;l<g.length;l++){var o=g[l],n=c[l],i=f[o];if(i!=undefined){i(n);
h=0}else for(;(d=/d{1,2}|M{1,4}|yy(?:yy)|H{1,2}|m{1,2}|s{1,2}|S{1,3}|\w/g.exec(o))!==null;){i=f[d];if(i!=undefined)if(d[0].match(/MMMM/)){d=/\D+/.exec(n);i(d[0]);h+=d[0].length}else{d=n.substr(h,d[0].length);i(d);h+=d.length}else h+=d[0].length}}return b};
Dates.format=function(c,g,e){e=e||"en_GB";var b=function(f){return f<10?"0"+f:f};c=new Date(c);var k={dd:function(){return b(c.getDate())},d:function(){return c.getDate()},MMMM:function(){return Dates.i18n[e].months[c.getMonth()]},MMM:function(){return Dates.i18n[e].shortMonths[c.getMonth()]},MM:function(){return b(c.getMonth()+1)},M:function(){return c.getMonth()+1},yyyy:function(){return c.getFullYear()},yy:function(){return String(c.getFullYear()).substr(2,2)},HH:function(){return b(c.getHours())},
mm:function(){return b(c.getMinutes())},ss:function(){return b(c.getSeconds())},SSS:function(){return b(c.getMilliseconds())},SS:function(){return b(c.getMilliseconds())},S:function(){return c.getMilliseconds()}};return g.replace(/dd|d|M{1,4}|yyyy|yy|HH|mm|ss|S{1,3}/g,function(f,h){return k[f](f,h)})};