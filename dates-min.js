(function(q){var d={i18n:{en_GB:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},pad:function(b){return b<10?"0"+b:b}};d.parse=function(b,g,e){e=e||"en_GB";var c=new Date;c.setHours(0);c.setMinutes(0);c.setSeconds(0);
c.setMilliseconds(0);var i=function(a,n){for(var k=0;k<a.length&&n!=a[k];)k++;return k},l={dd:function(a){c.setDate(a)},d:function(a){c.setDate(a)},MMMM:function(a){c.setMonth(i(d.i18n[e].months,a))},MMM:function(a){c.setMonth(i(d.i18n[e].shortMonths,a))},MM:function(a){c.setMonth(Number(a)-1)},M:function(a){c.setMonth(Number(a)-1)},yyyy:function(a){c.setYear(a)},yy:function(a){a=Number(a);var n=(new Date).getFullYear();if(a+2E3-n<20)a+=2E3;c.setYear(a)},HH:function(a){c.setHours(a)},H:function(a){c.setHours(a)},
mm:function(a){c.setMinutes(a)},ss:function(a){c.setSeconds(a)},SSS:function(a){c.setMilliseconds(a)},SS:function(a){c.setMilliseconds(a)},S:function(a){c.setMilliseconds(a)},T:function(){},E:function(){},Z:function(){}},j=0,f;g=g.split(/[^A-Za-z]/);b=b.split(/[^A-Za-z0-9]/);for(var m=0;m<g.length;m++){var p=g[m],o=b[m],h=l[p];if(h!=undefined){h(o);j=0}else for(;(f=/d{1,2}|M{1,4}|yy(?:yy)|H{1,2}|m{1,2}|s{1,2}|S{1,3}|\w/g.exec(p))!==null;){h=l[f];if(h!=undefined)if(f[0].match(/MMMM/)){f=/\D+/.exec(o);
h(f[0]);j+=f[0].length}else{f=o.substr(j,f[0].length);h(f);j+=f.length}else j+=f[0].length}}return c};d.format=function(b,g,e){e=e||"en_GB";b=new Date(b);var c={dd:function(){return d.pad(b.getDate())},d:function(){return b.getDate()},MMMM:function(){return d.i18n[e].months[b.getMonth()]},MMM:function(){return d.i18n[e].shortMonths[b.getMonth()]},MM:function(){return d.pad(b.getMonth()+1)},M:function(){return b.getMonth()+1},yyyy:function(){return b.getFullYear()},yy:function(){return String(b.getFullYear()).substr(2,
2)},HH:function(){return d.pad(b.getHours())},mm:function(){return d.pad(b.getMinutes())},ss:function(){return d.pad(b.getSeconds())},SSS:function(){return d.pad(b.getMilliseconds())},SS:function(){return d.pad(b.getMilliseconds())},S:function(){return b.getMilliseconds()},EEEE:function(){return d.i18n[e].days[b.getDay()]},EEE:function(){return d.i18n[e].shortDays[b.getDay()]}};return g.replace(/dd|d|M{1,4}|yyyy|yy|HH|mm|ss|S{1,3}/g,function(i,l){return c[i](i,l)})};q.Dates=d})(typeof window==="undefined"?
this:window);
