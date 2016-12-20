(function(){var d;window.AmCharts?d=window.AmCharts:(d={},window.AmCharts=d,d.themes={},d.maps={},d.inheriting={},d.charts=[],d.onReadyArray=[],d.useUTC=!1,d.updateRate=60,d.uid=0,d.lang={},d.translations={},d.mapTranslations={},d.windows={},d.initHandlers=[]);d.Class=function(a){var b=function(){arguments[0]!==d.inheriting&&(this.events={},this.construct.apply(this,arguments))};a.inherits?(b.prototype=new a.inherits(d.inheriting),b.base=a.inherits.prototype,delete a.inherits):(b.prototype.createEvents=
function(){for(var a=0,b=arguments.length;a<b;a++)this.events[arguments[a]]=[]},b.prototype.listenTo=function(a,b,c){this.removeListener(a,b,c);a.events[b].push({handler:c,scope:this})},b.prototype.addListener=function(a,b,c){this.removeListener(this,a,b);a&&this.events[a]&&this.events[a].push({handler:b,scope:c})},b.prototype.removeListener=function(a,b,c){if(a&&a.events&&(a=a.events[b]))for(b=a.length-1;0<=b;b--)a[b].handler===c&&a.splice(b,1)},b.prototype.fire=function(a){for(var b=this.events[a.type],
c=0,d=b.length;c<d;c++){var k=b[c];k.handler.call(k.scope,a)}});for(var c in a)b.prototype[c]=a[c];return b};d.addChart=function(a){window.requestAnimationFrame?d.animationRequested||(d.animationRequested=!0,window.requestAnimationFrame(d.update)):d.updateInt||(d.updateInt=setInterval(function(){d.update()},Math.round(1E3/d.updateRate)));d.charts.push(a)};d.removeChart=function(a){for(var b=d.charts,c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);0===b.length&&d.updateInt&&(clearInterval(d.updateInt),
d.updateInt=NaN)};d.isModern=!0;d.getIEVersion=function(){var a=0,b,c;"Microsoft Internet Explorer"==navigator.appName&&(b=navigator.userAgent,c=/MSIE ([0-9]{1,}[.0-9]{0,})/,null!==c.exec(b)&&(a=parseFloat(RegExp.$1)));return a};d.applyLang=function(a,b){var c=d.translations;b.dayNames=d.extend({},d.dayNames);b.shortDayNames=d.extend({},d.shortDayNames);b.monthNames=d.extend({},d.monthNames);b.shortMonthNames=d.extend({},d.shortMonthNames);b.amString="am";b.pmString="pm";c&&(c=c[a])&&(d.lang=c,c.monthNames&&
(b.dayNames=d.extend({},c.dayNames),b.shortDayNames=d.extend({},c.shortDayNames),b.monthNames=d.extend({},c.monthNames),b.shortMonthNames=d.extend({},c.shortMonthNames)),c.am&&(b.amString=c.am),c.pm&&(b.pmString=c.pm))};d.IEversion=d.getIEVersion();9>d.IEversion&&0<d.IEversion&&(d.isModern=!1,d.isIE=!0);d.dx=0;d.dy=0;if(document.addEventListener||window.opera)d.isNN=!0,d.isIE=!1,d.dx=.5,d.dy=.5;document.attachEvent&&(d.isNN=!1,d.isIE=!0,d.isModern||(d.dx=0,d.dy=0));window.chrome&&(d.chrome=!0);d.handleMouseUp=
function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleReleaseOutside&&e.handleReleaseOutside(a)}};d.handleMouseMove=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleMouseMove&&e.handleMouseMove(a)}};d.handleWheel=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];if(e&&e.mouseIsOver){e.mouseWheelScrollEnabled||e.mouseWheelZoomEnabled?e.handleWheel&&e.handleWheel(a):a.stopPropagation&&a.stopPropagation();break}}};d.resetMouseOver=function(){for(var a=
d.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};d.ready=function(a){d.onReadyArray.push(a)};d.handleLoad=function(){d.isReady=!0;for(var a=d.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(d.processDelay)?c():setTimeout(c,d.processDelay*b)}};d.addInitHandler=function(a,b){d.initHandlers.push({method:a,types:b})};d.callInitHandler=function(a){var b=d.initHandlers;if(d.initHandlers)for(var c=0;c<b.length;c++){var e=b[c];e.types?d.isInArray(e.types,a.type)&&e.method(a):e.method(a)}};
d.getUniqueId=function(){d.uid++;return"AmChartsEl-"+d.uid};d.isNN&&(document.addEventListener("mousemove",d.handleMouseMove),document.addEventListener("mouseup",d.handleMouseUp,!0),window.addEventListener("load",d.handleLoad,!0),window.addEventListener("DOMMouseScroll",d.handleWheel,!0),document.addEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.attachEvent("onmousemove",d.handleMouseMove),document.attachEvent("onmouseup",d.handleMouseUp),window.attachEvent("onload",d.handleLoad),
document.attachEvent("onmousewheel",d.handleWheel));d.clear=function(){var a=d.charts;if(a)for(var b=a.length-1;0<=b;b--)a[b].clear();d.updateInt&&clearInterval(d.updateInt);d.charts=[];d.isNN&&(document.removeEventListener("mousemove",d.handleMouseMove,!0),document.removeEventListener("mouseup",d.handleMouseUp,!0),window.removeEventListener("load",d.handleLoad,!0),window.removeEventListener("DOMMouseScroll",d.handleWheel,!0),document.removeEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.detachEvent("onmousemove",
d.handleMouseMove),document.detachEvent("onmouseup",d.handleMouseUp),window.detachEvent("onload",d.handleLoad))};d.makeChart=function(a,b,c){var e=b.type,h=b.theme;d.isString(h)&&(h=d.themes[h],b.theme=h);var f;switch(e){case "serial":f=new d.AmSerialChart(h);break;case "xy":f=new d.AmXYChart(h);break;case "pie":f=new d.AmPieChart(h);break;case "radar":f=new d.AmRadarChart(h);break;case "gauge":f=new d.AmAngularGauge(h);break;case "funnel":f=new d.AmFunnelChart(h);break;case "map":f=new d.AmMap(h);
break;case "stock":f=new d.AmStockChart(h);break;case "gantt":f=new d.AmGanttChart(h)}d.extend(f,b);d.isReady?isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c):d.ready(function(){isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c)});return f};d.realWrite=function(a,b){a.write(b)};d.updateCount=0;d.validateAt=Math.round(d.updateRate/10);d.update=function(){var a=d.charts;d.updateCount++;var b=!1;d.updateCount==d.validateAt&&(b=!0,d.updateCount=0);if(a)for(var c=a.length-1;0<=
c;c--)a[c].update&&a[c].update(),b&&(a[c].autoResize?a[c].validateSize&&a[c].validateSize():a[c].premeasure&&a[c].premeasure());window.requestAnimationFrame&&window.requestAnimationFrame(d.update)};d.bezierX=3;d.bezierY=6;"complete"==document.readyState&&d.handleLoad()})();(function(){var d=window.AmCharts;d.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case "true":case "yes":case "1":return!0;case "false":case "no":case "0":case null:return!1;default:return Boolean(a)}};d.removeFromArray=function(a,b){var c;if(void 0!==b&&void 0!==a)for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};d.getPath=function(){var a=document.getElementsByTagName("script");if(a)for(var b=0;b<a.length;b++){var c=a[b].src;if(-1!==c.search(/\/(amcharts|ammap)\.js/))return c.replace(/\/(amcharts|ammap)\.js.*/,
"/")}};d.normalizeUrl=function(a){return""!==a&&-1===a.search(/\/$/)?a+"/":a};d.isAbsolute=function(a){return 0===a.search(/^http[s]?:|^\//)};d.isInArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};d.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};d.wordwrap=function(a,b,c,e){var h,f,g,k;a+="";if(1>b)return a;h=-1;for(a=(k=a.split(/\r\n|\n|\r/)).length;++h<a;k[h]+=
g){g=k[h];for(k[h]="";g.length>b;k[h]+=d.trim(g.slice(0,f))+((g=g.slice(f)).length?c:""))f=2==e||(f=g.slice(0,b+1).match(/\S*(\s)?$/))[1]?b:f.input.length-f[0].length||1==e&&b||f.input.length+(f=g.slice(b).match(/^\S*/))[0].length;g=d.trim(g)}return k.join(c)};d.trim=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};d.wrappedText=function(a,b,c,e,h,f,g,k){var l=d.text(a,b,c,e,h,f,g);if(l){var m=l.getBBox();if(m.width>k){var n="\n";d.isModern||(n="<br>");k=Math.floor(k/(m.width/
b.length));2<k&&(k-=2);b=d.wordwrap(b,k,n,!0);l.remove();l=d.text(a,b,c,e,h,f,g)}}return l};d.getStyle=function(a,b){var c="";document.defaultView&&document.defaultView.getComputedStyle?c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b):a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};d.removePx=function(a){if(void 0!==a)return Number(a.substring(0,a.length-2))};d.getURL=function(a,b){if(a)if("_self"!=b&&b)if("_top"==b&&window.top)window.top.location.href=
a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else if("_blank"==b)window.open(a);else{var c=document.getElementsByName(b)[0];c?c.src=a:(c=d.windows[b])?c.opener&&!c.opener.closed?c.location.href=a:d.windows[b]=window.open(a):d.windows[b]=window.open(a)}else window.location.href=a};d.ifArray=function(a){return a&&"object"==typeof a&&0<a.length?!0:!1};d.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var e=b[c];if(e){if(e[a])e[a]();var d=e.length;if(0<d){var f;for(f=0;f<
d;f++){var g=e[f];if(g&&g[a])g[a]()}}}}};d.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};d.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};d.toCoordinate=function(a,b,c){var e;void 0!==a&&(a=String(a),c&&c<b&&(b=c),e=Number(a),-1!=a.indexOf("!")&&(e=b-Number(a.substr(1))),-1!=
a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};d.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};d.isDefined=function(a){return void 0===a?!1:!0};d.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};d.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};d.toFixed=function(a,b){var c=String(Math.round(a*Math.pow(10,b)));if(0<b){var e=c.length;if(e<b){var d;for(d=0;d<b-e;d++)c="0"+c}e=c.substring(0,c.length-b);""===e&&(e=0);return e+
"."+c.substring(c.length-b,c.length)}return String(c)};d.formatDuration=function(a,b,c,e,h,f){var g=d.intervals,k=f.decimalSeparator;if(a>=g[b].contains){var l=a-Math.floor(a/g[b].contains)*g[b].contains;"ss"==b?(l=d.formatNumber(l,f),1==l.split(k)[0].length&&(l="0"+l)):l=d.roundTo(l,f.precision);("mm"==b||"hh"==b)&&10>l&&(l="0"+l);c=l+""+e[b]+""+c;a=Math.floor(a/g[b].contains);b=g[b].nextInterval;return d.formatDuration(a,b,c,e,h,f)}"ss"==b&&(a=d.formatNumber(a,f),1==a.split(k)[0].length&&(a="0"+
a));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+e[b]+""+c;if(g[h].count>g[b].count)for(a=g[b].count;a<g[h].count;a++)b=g[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+e[b]+""+c:"DD"==b&&(c="0"+e[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};d.formatNumber=function(a,b,c,e,h){a=d.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var f=b.decimalSeparator;b=b.thousandsSeparator;var g;g=0>a?"-":"";a=Math.abs(a);var k=String(a),l=!1;-1!=k.indexOf("e")&&(l=!0);0<=c&&!l&&(k=
d.toFixed(a,c));var m="";if(l)m=k;else{var k=k.split("."),l=String(k[0]),n;for(n=l.length;0<=n;n-=3)m=n!=l.length?0!==n?l.substring(n-3,n)+b+m:l.substring(n-3,n)+m:l.substring(n-3,n);void 0!==k[1]&&(m=m+f+k[1]);void 0!==c&&0<c&&"0"!=m&&(m=d.addZeroes(m,f,c))}m=g+m;""===g&&!0===e&&0!==a&&(m="+"+m);!0===h&&(m+="%");return m};d.addZeroes=function(a,b,c){a=a.split(b);void 0===a[1]&&0<c&&(a[1]="0");return a[1].length<c?(a[1]+="0",d.addZeroes(a[0]+b+a[1],b,c)):void 0!==a[1]?a[0]+b+a[1]:a[0]};d.scientificToNormal=
function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-e;c++)b+="0"}return b};d.toScientific=function(a,b){if(0===a)return"0";var c=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),e=String(e).split(".").join(b);return String(e)+"e"+c};d.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<
0).toString(16)).substr(-6)};d.hitTest=function(a,b,c){var e=!1,h=a.x,f=a.x+a.width,g=a.y,k=a.y+a.height,l=d.isInRectangle;e||(e=l(h,g,b));e||(e=l(h,k,b));e||(e=l(f,g,b));e||(e=l(f,k,b));e||!0===c||(e=d.hitTest(b,a,!0));return e};d.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?!0:!1};d.isPercents=function(a){if(-1!=String(a).indexOf("%"))return!0};d.formatValue=function(a,b,c,e,h,f,g,k){if(b){void 0===h&&(h="");var l;for(l=0;l<c.length;l++){var m=c[l],
n=b[m];void 0!==n&&(n=f?d.addPrefix(n,k,g,e):d.formatNumber(n,e),a=a.replace(new RegExp("\\[\\["+h+""+m+"\\]\\]","g"),n))}}return a};d.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),e;for(e=0;e<c.length;e++){var d=c[e],d=d.substr(2,d.length-4);void 0!==b[d]&&(a=a.replace(new RegExp("\\[\\["+d+"\\]\\]","g"),b[d]))}}return a};d.massReplace=function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var e=b[c];void 0===e&&(e="");a=a.replace(c,e)}return a};d.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,
"")};d.addPrefix=function(a,b,c,e,h){var f=d.formatNumber(a,e),g="",k,l,m;if(0===a)return"0";0>a&&(g="-");a=Math.abs(a);if(1<a)for(k=b.length-1;-1<k;k--){if(a>=b[k].number&&(l=a/b[k].number,m=Number(e.precision),1>m&&(m=1),c=d.roundTo(l,m),m=d.formatNumber(c,{precision:-1,decimalSeparator:e.decimalSeparator,thousandsSeparator:e.thousandsSeparator}),!h||l==c)){f=g+""+m+""+b[k].prefix;break}}else for(k=0;k<c.length;k++)if(a<=c[k].number){l=a/c[k].number;m=Math.abs(Math.floor(Math.log(l)*Math.LOG10E));
l=d.roundTo(l,m);f=g+""+l+""+c[k].prefix;break}return f};d.remove=function(a){a&&a.remove()};d.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};d.getObjById=function(a,b){var c,e;for(e=0;e<a.length;e++){var d=a[e];if(d.id==b){c=d;break}}return c};d.applyTheme=function(a,b,c){b||(b=d.theme);b&&b[c]&&d.extend(a,b[c])};d.isString=function(a){return"string"==typeof a?!0:!1};d.extend=function(a,b,c){var e;a||(a={});for(e in b)c?a.hasOwnProperty(e)||
(a[e]=b[e]):a[e]=b[e];return a};d.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};d.processObject=function(a,b,c,e){if(!1===a instanceof b&&(a=e?d.extend(new b(c),a):d.extend(a,new b(c),!0),a.listeners))for(var h in a.listeners)b=a.listeners[h],a.addListener(b.event,b.method);return a};d.fixNewLines=function(a){var b=RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};d.fixBrakes=function(a){if(d.isModern){var b=
RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=d.fixNewLines(a);return a};d.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)d.deleteObject(a[c],b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a)a[c]&&("object"==typeof a[c]&&d.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(e){}}};d.bounce=function(a,b,c,e,d){return(b/=d)<1/2.75?7.5625*e*b*b+c:b<2/2.75?e*(7.5625*(b-=1.5/
2.75)*b+.75)+c:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+.9375)+c:e*(7.5625*(b-=2.625/2.75)*b+.984375)+c};d.easeInOutQuad=function(a,b,c,e,d){b/=d/2;if(1>b)return e/2*b*b+c;b--;return-e/2*(b*(b-2)-1)+c};d.easeInSine=function(a,b,c,e,d){return-e*Math.cos(b/d*(Math.PI/2))+e+c};d.easeOutSine=function(a,b,c,e,d){return e*Math.sin(b/d*(Math.PI/2))+c};d.easeOutElastic=function(a,b,c,e,d){a=1.70158;var f=0,g=e;if(0===b)return c;if(1==(b/=d))return c+e;f||(f=.3*d);g<Math.abs(e)?(g=e,a=f/4):a=f/(2*Math.PI)*Math.asin(e/
g);return g*Math.pow(2,-10*b)*Math.sin(2*(b*d-a)*Math.PI/f)+e+c};d.fixStepE=function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return d.generateNumber(1,b)};d.generateNumber=function(a,b){var c="",e;e=0>b?Math.abs(b)-1:Math.abs(b);var d;for(d=0;d<e;d++)c+="0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)};d.setCN=function(a,b,c,e){if(a.addClassNames&&b&&(b=b.node)&&c){var d=b.getAttribute("class");a=a.classNamePrefix+"-";e&&(a="");d?b.setAttribute("class",
d+" "+a+c):b.setAttribute("class",a+c)}};d.parseDefs=function(a,b){for(var c in a){var e=typeof a[c];if(0<a[c].length&&"object"==e)for(var h=0;h<a[c].length;h++)e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c][h],e);else"object"==e?(e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c],e)):b.setAttribute(c,a[c])}}})();(function(){var d=window.AmCharts;d.AxisBase=d.Class({construct:function(a){this.createEvents("clickItem","rollOverItem","rollOutItem");this.titleDY=this.y=this.x=this.dy=this.dx=0;this.axisThickness=1;this.axisColor="#000000";this.axisAlpha=1;this.gridCount=this.tickLength=5;this.gridAlpha=.15;this.gridThickness=1;this.gridColor="#000000";this.dashLength=0;this.labelFrequency=1;this.showLastLabel=this.showFirstLabel=!0;this.fillColor="#FFFFFF";this.fillAlpha=0;this.labelsEnabled=!0;this.labelRotation=
0;this.autoGridCount=!0;this.offset=0;this.guides=[];this.visible=!0;this.counter=0;this.guides=[];this.ignoreAxisWidth=this.inside=!1;this.minHorizontalGap=75;this.minVerticalGap=35;this.titleBold=!0;this.minorGridEnabled=!1;this.minorGridAlpha=.07;this.autoWrap=!1;this.titleAlign="middle";this.labelOffset=0;this.bcn="axis-";this.centerLabels=!1;this.firstDayOfWeek=1;this.centerLabelOnFullPeriod=this.markPeriodChange=this.boldPeriodBeginning=!0;this.periods=[{period:"ss",count:1},{period:"ss",count:5},
{period:"ss",count:10},{period:"ss",count:30},{period:"mm",count:1},{period:"mm",count:5},{period:"mm",count:10},{period:"mm",count:30},{period:"hh",count:1},{period:"hh",count:3},{period:"hh",count:6},{period:"hh",count:12},{period:"DD",count:1},{period:"DD",count:2},{period:"DD",count:3},{period:"DD",count:4},{period:"DD",count:5},{period:"WW",count:1},{period:"MM",count:1},{period:"MM",count:2},{period:"MM",count:3},{period:"MM",count:6},{period:"YYYY",count:1},{period:"YYYY",count:2},{period:"YYYY",
count:5},{period:"YYYY",count:10},{period:"YYYY",count:50},{period:"YYYY",count:100}];this.dateFormats=[{period:"fff",format:"JJ:NN:SS"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},{period:"hh",format:"JJ:NN"},{period:"DD",format:"MMM DD"},{period:"WW",format:"MMM DD"},{period:"MM",format:"MMM"},{period:"YYYY",format:"YYYY"}];this.nextPeriod={fff:"ss",ss:"mm",mm:"hh",hh:"DD",DD:"MM",MM:"YYYY"};d.applyTheme(this,a,"AxisBase")},zoom:function(a,b){this.start=a;this.end=b;this.dataChanged=
!0;this.draw()},fixAxisPosition:function(){var a=this.position;"H"==this.orientation?("left"==a&&(a="bottom"),"right"==a&&(a="top")):("bottom"==a&&(a="left"),"top"==a&&(a="right"));this.position=a},init:function(){this.createBalloon()},draw:function(){var a=this.chart;this.prevBY=this.prevBX=NaN;this.allLabels=[];this.counter=0;this.destroy();this.fixAxisPosition();this.setBalloonBounds();this.labels=[];var b=a.container,c=b.set();a.gridSet.push(c);this.set=c;b=b.set();a.axesLabelsSet.push(b);this.labelsSet=
b;this.axisLine=new this.axisRenderer(this);this.autoGridCount?("V"==this.orientation?(a=this.height/this.minVerticalGap,3>a&&(a=3)):a=this.width/this.minHorizontalGap,this.gridCountR=Math.max(a,1)):this.gridCountR=this.gridCount;this.axisWidth=this.axisLine.axisWidth;this.addTitle()},setOrientation:function(a){this.orientation=a?"H":"V"},addTitle:function(){var a=this.title;this.titleLabel=null;if(a){var b=this.chart,c=this.titleColor;void 0===c&&(c=b.color);var e=this.titleFontSize;isNaN(e)&&(e=
b.fontSize+1);a=d.text(b.container,a,c,b.fontFamily,e,this.titleAlign,this.titleBold);d.setCN(b,a,this.bcn+"title");this.titleLabel=a}},positionTitle:function(){var a=this.titleLabel;if(a){var b,c,e=this.labelsSet,h={};0<e.length()?h=e.getBBox():(h.x=0,h.y=0,h.width=this.width,h.height=this.height,d.VML&&(h.y+=this.y,h.x+=this.x));e.push(a);var e=h.x,f=h.y;d.VML&&(this.rotate?e-=this.x:f-=this.y);var g=h.width,h=h.height,k=this.width,l=this.height,m=0,n=a.getBBox().height/2,q=this.inside,p=this.titleAlign;
switch(this.position){case "top":b="left"==p?-1:"right"==p?k:k/2;c=f-10-n;break;case "bottom":b="left"==p?-1:"right"==p?k:k/2;c=f+h+10+n;break;case "left":b=e-10-n;q&&(b-=5);m=-90;c=("left"==p?l+1:"right"==p?-1:l/2)+this.titleDY;break;case "right":b=e+g+10+n,q&&(b+=7),c=("left"==p?l+2:"right"==p?-2:l/2)+this.titleDY,m=-90}this.marginsChanged?(a.translate(b,c),this.tx=b,this.ty=c):a.translate(this.tx,this.ty);this.marginsChanged=!1;isNaN(this.titleRotation)||(m=this.titleRotation);0!==m&&a.rotate(m)}},
pushAxisItem:function(a,b){var c=this,e=a.graphics();0<e.length()&&(b?c.labelsSet.push(e):c.set.push(e));if(e=a.getLabel())this.labelsSet.push(e),e.click(function(b){c.handleMouse(b,a,"clickItem")}).mouseover(function(b){c.handleMouse(b,a,"rollOverItem")}).mouseout(function(b){c.handleMouse(b,a,"rollOutItem")})},handleMouse:function(a,b,c){this.fire({type:c,value:b.value,serialDataItem:b.serialDataItem,axis:this,target:b.label,chart:this.chart,event:a})},addGuide:function(a){for(var b=this.guides,
c=!1,e=b.length,h=0;h<b.length;h++)b[h]==a&&(c=!0,e=h);a=d.processObject(a,d.Guide,this.theme);a.id||(a.id="guideAuto"+e+"_"+(new Date).getTime());c||b.push(a)},removeGuide:function(a){var b=this.guides,c;for(c=0;c<b.length;c++)b[c]==a&&b.splice(c,1)},handleGuideOver:function(a){clearTimeout(this.chart.hoverInt);var b=a.graphics.getBBox(),c=this.x+b.x+b.width/2,b=this.y+b.y+b.height/2,e=a.fillColor;void 0===e&&(e=a.lineColor);this.chart.showBalloon(a.balloonText,e,!0,c,b)},handleGuideOut:function(){this.chart.hideBalloon()},
addEventListeners:function(a,b){var c=this;a.mouseover(function(){c.handleGuideOver(b)});a.touchstart(function(){c.handleGuideOver(b)});a.mouseout(function(){c.handleGuideOut(b)})},getBBox:function(){var a;this.labelsSet&&(a=this.labelsSet.getBBox());a?d.VML||(a={x:a.x+this.x,y:a.y+this.y,width:a.width,height:a.height}):a={x:0,y:0,width:0,height:0};return a},destroy:function(){d.remove(this.set);d.remove(this.labelsSet);var a=this.axisLine;a&&d.remove(a.axisSet);d.remove(this.grid0)},chooseMinorFrequency:function(a){for(var b=
10;0<b;b--)if(a/b==Math.round(a/b))return a/b},parseDatesDraw:function(){var a,b=this.chart,c=this.showFirstLabel,e=this.showLastLabel,h,f="",g=d.extractPeriod(this.minPeriod),k=d.getPeriodDuration(g.period,g.count),l,m,n,q,p,t=this.firstDayOfWeek,r=this.boldPeriodBeginning;a=this.minorGridEnabled;var u,y=this.gridAlpha,x,w=this.choosePeriod(0),B=w.period,w=w.count,z=d.getPeriodDuration(B,w);z<k&&(B=g.period,w=g.count,z=k);g=B;"WW"==g&&(g="DD");this.stepWidth=this.getStepWidth(this.timeDifference);
var A=Math.ceil(this.timeDifference/z)+5,C=l=d.resetDateToMin(new Date(this.startTime-z),B,w,t).getTime();if(g==B&&1==w&&this.centerLabelOnFullPeriod||this.autoWrap||this.centerLabels)n=z*this.stepWidth,this.autoWrap&&!this.centerLabels&&(n=-n);this.cellWidth=k*this.stepWidth;q=Math.round(l/z);k=-1;q/2==Math.round(q/2)&&(k=-2,l-=z);q=this.firstTime;var D=0,J=0;a&&1<w&&(u=this.chooseMinorFrequency(w),x=d.getPeriodDuration(B,u),"DD"==B&&(x+=d.getPeriodDuration("hh")));if(0<this.gridCountR)for(A-5-k>
this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),a=k;a<=A;a++){p=q+z*(a+Math.floor((C-q)/z))-D;"DD"==B&&(p+=36E5);p=d.resetDateToMin(new Date(p),B,w,t).getTime();"MM"==B&&(h=(p-l)/z,1.5<=(p-l)/z&&(p=p-(h-1)*z+d.getPeriodDuration("DD",3),p=d.resetDateToMin(new Date(p),B,1).getTime(),D+=z));h=(p-this.startTime)*this.stepWidth;if("radar"==b.type){if(h=this.axisWidth-h,0>h||h>this.axisWidth)continue}else this.rotate?"date"==this.type&&"middle"==this.gridPosition&&
(J=-z*this.stepWidth/2):"date"==this.type&&(h=this.axisWidth-h);f=!1;this.nextPeriod[g]&&(f=this.checkPeriodChange(this.nextPeriod[g],1,p,l,g));l=!1;f&&this.markPeriodChange?(f=this.dateFormatsObject[this.nextPeriod[g]],this.twoLineMode&&(f=this.dateFormatsObject[g]+"\n"+f,f=d.fixBrakes(f)),l=!0):f=this.dateFormatsObject[g];r||(l=!1);this.currentDateFormat=f;f=d.formatDate(new Date(p),f,b);if(a==k&&!c||a==A&&!e)f=" ";this.labelFunction&&(f=this.labelFunction(f,new Date(p),this,B,w,m).toString());
this.boldLabels&&(l=!0);m=new this.axisItemRenderer(this,h,f,!1,n,J,!1,l);this.pushAxisItem(m);m=l=p;if(!isNaN(u))for(h=1;h<w;h+=u)this.gridAlpha=this.minorGridAlpha,f=p+x*h,f=d.resetDateToMin(new Date(f),B,u,t).getTime(),f=new this.axisItemRenderer(this,(f-this.startTime)*this.stepWidth,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0),this.pushAxisItem(f);this.gridAlpha=y}},choosePeriod:function(a){var b=d.getPeriodDuration(this.periods[a].period,this.periods[a].count),c=this.periods;return this.timeDifference<
b&&0<a?c[a-1]:Math.ceil(this.timeDifference/b)<=this.gridCountR?c[a]:a+1<c.length?this.choosePeriod(a+1):c[a]},getStepWidth:function(a){var b;this.startOnAxis?(b=this.axisWidth/(a-1),1==a&&(b=this.axisWidth)):b=this.axisWidth/a;return b},timeZoom:function(a,b){this.startTime=a;this.endTime=b},minDuration:function(){var a=d.extractPeriod(this.minPeriod);return d.getPeriodDuration(a.period,a.count)},checkPeriodChange:function(a,b,c,e,h){c=new Date(c);var f=new Date(e),g=this.firstDayOfWeek;e=b;"DD"==
a&&(b=1);c=d.resetDateToMin(c,a,b,g).getTime();b=d.resetDateToMin(f,a,b,g).getTime();return"DD"==a&&"hh"!=h&&c-b<d.getPeriodDuration(a,e)?!1:c!=b?!0:!1},generateDFObject:function(){this.dateFormatsObject={};var a;for(a=0;a<this.dateFormats.length;a++){var b=this.dateFormats[a];this.dateFormatsObject[b.period]=b.format}},hideBalloon:function(){this.balloon&&this.balloon.hide&&this.balloon.hide();this.prevBY=this.prevBX=NaN},formatBalloonText:function(a){return a},showBalloon:function(a,b,c,e){var d=
this.offset;switch(this.position){case "bottom":b=this.height+d;break;case "top":b=-d;break;case "left":a=-d;break;case "right":a=this.width+d}c||(c=this.currentDateFormat);if("V"==this.orientation){if(0>b||b>this.height)return;if(isNaN(b)){this.hideBalloon();return}b=this.adjustBalloonCoordinate(b,e);e=this.coordinateToValue(b)}else{if(0>a||a>this.width)return;if(isNaN(a)){this.hideBalloon();return}a=this.adjustBalloonCoordinate(a,e);e=this.coordinateToValue(a)}var f;if(d=this.chart.chartCursor)f=
d.index;this.balloon&&void 0!==e&&this.balloon.enabled&&(this.balloonTextFunction?e=this.balloonTextFunction(e):this.balloonText?e=this.formatBalloonText(this.balloonText,f,c):isNaN(e)||(e=this.formatValue(e,c)),a!=this.prevBX||b!=this.prevBY)&&(this.balloon.setPosition(a,b),this.prevBX=a,this.prevBY=b,e&&this.balloon.showBalloon(e))},adjustBalloonCoordinate:function(a){return a},createBalloon:function(){var a=this.chart,b=a.chartCursor;b&&(b=b.cursorPosition,"mouse"!=b&&(this.stickBalloonToCategory=
!0),"start"==b&&(this.stickBalloonToStart=!0),"ValueAxis"==this.cname&&(this.stickBalloonToCategory=!1));this.balloon&&(this.balloon.destroy&&this.balloon.destroy(),d.extend(this.balloon,a.balloon,!0))},setBalloonBounds:function(){var a=this.balloon;if(a){var b=this.chart;a.cornerRadius=0;a.shadowAlpha=0;a.borderThickness=1;a.borderAlpha=1;a.adjustBorderColor=!1;a.showBullet=!1;this.balloon=a;a.chart=b;a.mainSet=b.plotBalloonsSet;a.pointerWidth=this.tickLength;if(this.parseDates||"date"==this.type)a.pointerWidth=
0;b="V";"V"==this.orientation&&(b="H");this.stickBalloonToCategory||(a.animationDuration=0);var c,e,d,f,g=this.inside,k=this.width,l=this.height;switch(this.position){case "bottom":c=0;e=k;g?(d=0,f=l):(d=l,f=l+1E3);break;case "top":c=0;e=k;g?(d=0,f=l):(d=-1E3,f=0);break;case "left":d=0;f=l;g?(c=0,e=k):(c=-1E3,e=0);break;case "right":d=0,f=l,g?(c=0,e=k):(c=k,e=k+1E3)}a.drop||(a.pointerOrientation=b);a.setBounds(c,d,e,f)}}})})();(function(){var d=window.AmCharts;d.ValueAxis=d.Class({inherits:d.AxisBase,construct:function(a){this.cname="ValueAxis";this.createEvents("axisChanged","logarithmicAxisFailed","axisZoomed");d.ValueAxis.base.construct.call(this,a);this.dataChanged=!0;this.stackType="none";this.position="left";this.unitPosition="right";this.includeAllValues=this.recalculateToPercents=this.includeHidden=this.includeGuidesInMinMax=this.integersOnly=!1;this.durationUnits={DD:"d. ",hh:":",mm:":",ss:""};this.scrollbar=!1;
this.baseValue=0;this.radarCategoriesEnabled=!0;this.gridType="polygons";this.useScientificNotation=!1;this.axisTitleOffset=10;this.pointPosition="axis";this.minMaxMultiplier=1;this.logGridLimit=2;this.totalTextOffset=this.treatZeroAs=0;this.minPeriod="ss";this.relativeStart=0;this.relativeEnd=1;d.applyTheme(this,a,this.cname)},updateData:function(){0>=this.gridCountR&&(this.gridCountR=1);this.totals=[];this.data=this.chart.chartData;var a=this.chart;"xy"!=a.type&&(this.stackGraphs("smoothedLine"),
this.stackGraphs("line"),this.stackGraphs("column"),this.stackGraphs("step"));this.recalculateToPercents&&this.recalculate();this.synchronizationMultiplier&&this.synchronizeWith?(d.isString(this.synchronizeWith)&&(this.synchronizeWith=a.getValueAxisById(this.synchronizeWith)),this.synchronizeWith&&(this.synchronizeWithAxis(this.synchronizeWith),this.foundGraphs=!0)):(this.foundGraphs=!1,this.getMinMax(),0===this.start&&this.end==this.data.length-1&&isNaN(this.minZoom)&&isNaN(this.maxZoom)&&(this.fullMin=
this.min,this.fullMax=this.max,"date"!=this.type&&(isNaN(this.minimum)||(this.fullMin=this.minimum),isNaN(this.maximum)||(this.fullMax=this.maximum)),this.logarithmic&&(this.fullMin=this.logMin,0===this.fullMin&&(this.fullMin=this.treatZeroAs)),"date"==this.type&&(this.minimumDate||(this.fullMin=this.minRR),this.maximumDate||(this.fullMax=this.maxRR))))},draw:function(){d.ValueAxis.base.draw.call(this);var a=this.chart,b=this.set;this.labelRotationR=this.labelRotation;d.setCN(a,this.set,"value-axis value-axis-"+
this.id);d.setCN(a,this.labelsSet,"value-axis value-axis-"+this.id);d.setCN(a,this.axisLine.axisSet,"value-axis value-axis-"+this.id);var c=this.type;"duration"==c&&(this.duration="ss");!0===this.dataChanged&&(this.updateData(),this.dataChanged=!1);"date"==c&&(this.logarithmic=!1,this.min=this.minRR,this.max=this.maxRR,this.reversed=!1,this.getDateMinMax());if(this.logarithmic){var e=this.treatZeroAs,h=this.getExtremes(0,this.data.length-1).min;this.logMin=h;this.minReal<h&&(this.minReal=h);isNaN(this.minReal)&&
(this.minReal=h);0<e&&0===h&&(this.minReal=h=e);if(0>=h||0>=this.minimum){this.fire({type:"logarithmicAxisFailed",chart:a});return}}this.grid0=null;var f,g,k=a.dx,l=a.dy,e=!1,h=this.logarithmic;if(isNaN(this.min)||isNaN(this.max)||!this.foundGraphs||Infinity==this.min||-Infinity==this.max)e=!0;else{var m=this.labelFrequency,n=this.showFirstLabel,q=this.showLastLabel,p=1;f=0;this.minCalc=this.min;this.maxCalc=this.max;this.strictMinMax&&(isNaN(this.minimum)||(this.min=this.minimum),isNaN(this.maximum)||
(this.max=this.maximum));isNaN(this.minZoom)||(this.minReal=this.min=this.minZoom);isNaN(this.maxZoom)||(this.max=this.maxZoom);if(this.logarithmic){var t=Math.log(this.fullMax)*Math.LOG10E-Math.log(this.fullMin)*Math.LOG10E,r=Math.log(this.max)/Math.LN10-Math.log(this.fullMin)*Math.LOG10E;this.relativeStart=(Math.log(this.minReal)/Math.LN10-Math.log(this.fullMin)*Math.LOG10E)/t;this.relativeEnd=r/t}else this.relativeStart=d.fitToBounds((this.min-this.fullMin)/(this.fullMax-this.fullMin),0,1),this.relativeEnd=
d.fitToBounds((this.max-this.fullMin)/(this.fullMax-this.fullMin),0,1);var t=Math.round((this.maxCalc-this.minCalc)/this.step)+1,u;!0===h?(u=Math.log(this.max)*Math.LOG10E-Math.log(this.minReal)*Math.LOG10E,this.stepWidth=this.axisWidth/u,u>this.logGridLimit&&(t=Math.ceil(Math.log(this.max)*Math.LOG10E)+1,f=Math.round(Math.log(this.minReal)*Math.LOG10E),t>this.gridCountR&&(p=Math.ceil(t/this.gridCountR)))):this.stepWidth=this.axisWidth/(this.max-this.min);var y=0;1>this.step&&-1<this.step&&(y=d.getDecimals(this.step));
this.integersOnly&&(y=0);y>this.maxDecCount&&(y=this.maxDecCount);r=this.precision;isNaN(r)||(y=r);isNaN(this.maxZoom)&&(this.max=d.roundTo(this.max,this.maxDecCount),this.min=d.roundTo(this.min,this.maxDecCount));g={};g.precision=y;g.decimalSeparator=a.nf.decimalSeparator;g.thousandsSeparator=a.nf.thousandsSeparator;this.numberFormatter=g;var x,w=this.guides,B=w.length;if(0<B){var z=this.fillAlpha;for(g=this.fillAlpha=0;g<B;g++){var A=w[g],C=NaN,D=A.above;isNaN(A.toValue)||(C=this.getCoordinate(A.toValue),
x=new this.axisItemRenderer(this,C,"",!0,NaN,NaN,A),this.pushAxisItem(x,D));var J=NaN;isNaN(A.value)||(J=this.getCoordinate(A.value),x=new this.axisItemRenderer(this,J,A.label,!0,NaN,(C-J)/2,A),this.pushAxisItem(x,D));isNaN(C)&&(J-=3,C=J+3);isNaN(C-J)||(x=new this.guideFillRenderer(this,J,C,A),this.pushAxisItem(x,D),x=x.graphics(),A.graphics=x,A.balloonText&&this.addEventListeners(x,A))}this.fillAlpha=z}this.exponential=!1;for(g=f;g<t;g+=p)w=d.roundTo(this.step*g+this.min,y),-1!=String(w).indexOf("e")&&
(this.exponential=!0);this.duration&&(this.maxInterval=d.getMaxInterval(this.max,this.duration));var y=this.step,H,w=this.minorGridAlpha;this.minorGridEnabled&&(H=this.getMinorGridStep(y,this.stepWidth*y));if(this.autoGridCount||0!==this.gridCount)if("date"==c)this.generateDFObject(),this.timeDifference=this.max-this.min,this.maxTime=this.lastTime=this.max,this.startTime=this.firstTime=this.min,this.parseDatesDraw();else for(t>=this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=
this.autoRotateAngle),h&&t++,g=f;g<t;g+=p)if(c=y*g+this.minCalc,c=d.roundTo(c,this.maxDecCount+1),!this.integersOnly||Math.round(c)==c)if(isNaN(r)||Number(d.toFixed(c,r))==c){!0===h&&(0===c&&(c=this.minReal),u>this.logGridLimit&&(c=Math.pow(10,g)));x=this.formatValue(c,!1,g);Math.round(g/m)!=g/m&&(x=void 0);if(0===g&&!n||g==t-1&&!q)x=" ";f=this.getCoordinate(c);var R;this.rotate&&this.autoWrap&&(R=this.stepWidth*y-10);x=new this.axisItemRenderer(this,f,x,void 0,R,void 0,void 0,this.boldLabels);this.pushAxisItem(x);
if(c==this.baseValue&&"radar"!=a.type){var L,P;x=this.width;B=this.height;"H"==this.orientation?0<=f&&f<=x+1&&(L=[f,f,f+k],P=[B,0,l]):0<=f&&f<=B+1&&(L=[0,x,x+k],P=[f,f,f+l]);L&&(f=d.fitToBounds(2*this.gridAlpha,0,1),isNaN(this.zeroGridAlpha)||(f=this.zeroGridAlpha),f=d.line(a.container,L,P,this.gridColor,f,1,this.dashLength),f.translate(this.x,this.y),this.grid0=f,a.axesSet.push(f),f.toBack(),d.setCN(a,f,this.bcn+"zero-grid-"+this.id),d.setCN(a,f,this.bcn+"zero-grid"))}if(!isNaN(H)&&0<w&&g<t-1){f=
y/H;h&&(H=y*(g+p)+this.minCalc,H=d.roundTo(H,this.maxDecCount+1),u>this.logGridLimit&&(H=Math.pow(10,g+p)),f=10,H=(H-c)/f);x=this.gridAlpha;this.gridAlpha=this.minorGridAlpha;for(B=1;B<f;B++)z=this.getCoordinate(c+H*B),z=new this.axisItemRenderer(this,z,"",!1,0,0,!1,!1,0,!0),this.pushAxisItem(z);this.gridAlpha=x}}u=this.baseValue;this.min>this.baseValue&&this.max>this.baseValue&&(u=this.min);this.min<this.baseValue&&this.max<this.baseValue&&(u=this.max);h&&u<this.minReal&&(u=this.minReal);this.baseCoord=
this.getCoordinate(u,!0);u={type:"axisChanged",target:this,chart:a};u.min=h?this.minReal:this.min;u.max=this.max;this.fire(u);this.axisCreated=!0}h=this.axisLine.set;u=this.labelsSet;b.translate(this.x,this.y);u.translate(this.x,this.y);this.positionTitle();"radar"!=a.type&&h.toFront();!this.visible||e?(b.hide(),h.hide(),u.hide()):(b.show(),h.show(),u.show());this.axisY=this.y;this.axisX=this.x},getDateMinMax:function(){this.minimumDate&&(this.minimumDate instanceof Date||(this.minimumDate=d.getDate(this.minimumDate,
this.chart.dataDateFormat,"fff")),this.min=this.minimumDate.getTime());this.maximumDate&&(this.maximumDate instanceof Date||(this.maximumDate=d.getDate(this.maximumDate,this.chart.dataDateFormat,"fff")),this.max=this.maximumDate.getTime())},formatValue:function(a,b,c){var e=this.exponential,h=this.logarithmic,f=this.numberFormatter,g=this.chart;if(f)return!0===this.logarithmic&&(e=-1!=String(a).indexOf("e")?!0:!1),this.useScientificNotation&&(e=!0),this.usePrefixes&&(e=!1),e?(c=-1==String(a).indexOf("e")?
a.toExponential(15):String(a),e=c.split("e"),c=Number(e[0]),e=Number(e[1]),c=d.roundTo(c,14),10==c&&(c=1,e+=1),c=c+"e"+e,0===a&&(c="0"),1==a&&(c="1")):(h&&(e=String(a).split("."),e[1]?(f.precision=e[1].length,0>c&&(f.precision=Math.abs(c)),b&&1<a&&(f.precision=0)):f.precision=-1),c=this.usePrefixes?d.addPrefix(a,g.prefixesOfBigNumbers,g.prefixesOfSmallNumbers,f,!b):d.formatNumber(a,f,f.precision)),this.duration&&(b&&(f.precision=0),c=d.formatDuration(a,this.duration,"",this.durationUnits,this.maxInterval,
f)),"date"==this.type&&(c=d.formatDate(new Date(a),this.currentDateFormat,g)),this.recalculateToPercents?c+="%":(b=this.unit)&&(c="left"==this.unitPosition?b+c:c+b),this.labelFunction&&(c="date"==this.type?this.labelFunction(c,new Date(a),this).toString():this.labelFunction(a,c,this).toString()),c},getMinorGridStep:function(a,b){var c=[5,4,2];60>b&&c.shift();for(var e=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),d=0;d<c.length;d++){var f=a/c[d],g=Math.floor(Math.log(Math.abs(f))*Math.LOG10E);if(!(1<
Math.abs(e-g)))if(1>a){if(g=Math.pow(10,-g)*f,g==Math.round(g))return f}else if(f==Math.round(f))return f}},stackGraphs:function(a){var b=this.stackType;"stacked"==b&&(b="regular");"line"==b&&(b="none");"100% stacked"==b&&(b="100%");this.stackType=b;var c=[],e=[],h=[],f=[],g,k=this.chart.graphs,l,m,n,q,p,t=this.baseValue,r=!1;if("line"==a||"step"==a||"smoothedLine"==a)r=!0;if(r&&("regular"==b||"100%"==b))for(q=0;q<k.length;q++)n=k[q],n.stackGraph=null,n.hidden||(m=n.type,n.chart==this.chart&&n.valueAxis==
this&&a==m&&n.stackable&&(l&&(n.stackGraph=l),l=n));n=this.start-10;l=this.end+10;q=this.data.length-1;n=d.fitToBounds(n,0,q);l=d.fitToBounds(l,0,q);for(p=n;p<=l;p++){var u=0;for(q=0;q<k.length;q++)if(n=k[q],n.hidden)n.newStack&&(h[p]=NaN,e[p]=NaN);else if(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable)if(m=this.data[p].axes[this.id].graphs[n.id],g=m.values.value,isNaN(g))n.newStack&&(h[p]=NaN,e[p]=NaN);else{var y=d.getDecimals(g);u<y&&(u=y);isNaN(f[p])?f[p]=Math.abs(g):f[p]+=
Math.abs(g);f[p]=d.roundTo(f[p],u);y=n.fillToGraph;r&&y&&(y=this.data[p].axes[this.id].graphs[y.id])&&(m.values.open=y.values.value);"regular"==b&&(r&&(isNaN(c[p])?(c[p]=g,m.values.close=g,m.values.open=this.baseValue):(isNaN(g)?m.values.close=c[p]:m.values.close=g+c[p],m.values.open=c[p],c[p]=m.values.close)),"column"==a&&(n.newStack&&(h[p]=NaN,e[p]=NaN),m.values.close=g,0>g?(m.values.close=g,isNaN(e[p])?m.values.open=t:(m.values.close+=e[p],m.values.open=e[p]),e[p]=m.values.close):(m.values.close=
g,isNaN(h[p])?m.values.open=t:(m.values.close+=h[p],m.values.open=h[p]),h[p]=m.values.close)))}}for(p=this.start;p<=this.end;p++)for(q=0;q<k.length;q++)(n=k[q],n.hidden)?n.newStack&&(h[p]=NaN,e[p]=NaN):(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable&&(m=this.data[p].axes[this.id].graphs[n.id],g=m.values.value,isNaN(g)||(c=g/f[p]*100,m.values.percents=c,m.values.total=f[p],n.newStack&&(h[p]=NaN,e[p]=NaN),"100%"==b&&(isNaN(e[p])&&(e[p]=0),isNaN(h[p])&&(h[p]=0),0>c?(m.values.close=
d.fitToBounds(c+e[p],-100,100),m.values.open=e[p],e[p]=m.values.close):(m.values.close=d.fitToBounds(c+h[p],-100,100),m.values.open=h[p],h[p]=m.values.close)))))},recalculate:function(){var a=this.chart,b=a.graphs,c;for(c=0;c<b.length;c++){var e=b[c];if(e.valueAxis==this){var h="value";if("candlestick"==e.type||"ohlc"==e.type)h="open";var f,g,k=this.end+2,k=d.fitToBounds(this.end+1,0,this.data.length-1),l=this.start;0<l&&l--;var m;g=this.start;e.compareFromStart&&(g=0);if(!isNaN(a.startTime)&&(m=
a.categoryAxis)){var n=m.minDuration(),n=new Date(a.startTime+n/2),q=d.resetDateToMin(new Date(a.startTime),m.minPeriod).getTime();d.resetDateToMin(new Date(n),m.minPeriod).getTime()>q&&g++}if(m=a.recalculateFromDate)m=d.getDate(m,a.dataDateFormat,"fff"),g=a.getClosestIndex(a.chartData,"time",m.getTime(),!0,0,a.chartData.length),k=a.chartData.length-1;for(m=g;m<=k&&(g=this.data[m].axes[this.id].graphs[e.id],f=g.values[h],e.recalculateValue&&(f=g.dataContext[e.valueField+e.recalculateValue]),isNaN(f));m++);
this.recBaseValue=f;for(h=l;h<=k;h++){g=this.data[h].axes[this.id].graphs[e.id];g.percents={};var l=g.values,p;for(p in l)g.percents[p]="percents"!=p?l[p]/f*100-100:l[p]}}}},getMinMax:function(){var a=!1,b=this.chart,c=b.graphs,e;for(e=0;e<c.length;e++){var h=c[e].type;("line"==h||"step"==h||"smoothedLine"==h)&&this.expandMinMax&&(a=!0)}a&&(0<this.start&&this.start--,this.end<this.data.length-1&&this.end++);"serial"==b.type&&(!0!==b.categoryAxis.parseDates||a||this.end<this.data.length-1&&this.end++);
this.includeAllValues&&(this.start=0,this.end=this.data.length-1);a=this.minMaxMultiplier;b=this.getExtremes(this.start,this.end);this.min=b.min;this.max=b.max;this.minRR=this.min;this.maxRR=this.max;a=(this.max-this.min)*(a-1);this.min-=a;this.max+=a;a=this.guides.length;if(this.includeGuidesInMinMax&&0<a)for(b=0;b<a;b++)c=this.guides[b],c.toValue<this.min&&(this.min=c.toValue),c.value<this.min&&(this.min=c.value),c.toValue>this.max&&(this.max=c.toValue),c.value>this.max&&(this.max=c.value);isNaN(this.minimum)||
(this.min=this.minimum);isNaN(this.maximum)||(this.max=this.maximum);"date"==this.type&&this.getDateMinMax();this.min>this.max&&(a=this.max,this.max=this.min,this.min=a);isNaN(this.minZoom)||(this.min=this.minZoom);isNaN(this.maxZoom)||(this.max=this.maxZoom);this.minCalc=this.min;this.maxCalc=this.max;this.minReal=this.min;this.maxReal=this.max;0===this.min&&0===this.max&&(this.max=9);this.min>this.max&&(this.min=this.max-1);a=this.min;b=this.max;c=this.max-this.min;e=0===c?Math.pow(10,Math.floor(Math.log(Math.abs(this.max))*
Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;isNaN(this.maximum)&&(this.max=Math.ceil(this.max/e)*e+e);isNaN(this.minimum)&&(this.min=Math.floor(this.min/e)*e-e);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);"100%"==this.stackType&&(this.min=0>this.min?-100:0,this.max=0>this.max?0:100);c=this.max-this.min;e=Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;this.step=Math.ceil(c/this.gridCountR/e)*e;c=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*
Math.LOG10E));c=d.fixStepE(c);e=Math.ceil(this.step/c);5<e&&(e=10);5>=e&&2<e&&(e=5);this.step=Math.ceil(this.step/(c*e))*c*e;1>c?(this.maxDecCount=Math.abs(Math.log(Math.abs(c))*Math.LOG10E),this.maxDecCount=Math.round(this.maxDecCount),this.step=d.roundTo(this.step,this.maxDecCount+1)):this.maxDecCount=0;this.min=this.step*Math.floor(this.min/this.step);this.max=this.step*Math.ceil(this.max/this.step);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);1<this.minReal&&1<this.max-this.minReal&&
(this.minReal=Math.floor(this.minReal));c=Math.pow(10,Math.floor(Math.log(Math.abs(this.minReal))*Math.LOG10E));0===this.min&&(this.minReal=c);0===this.min&&1<this.minReal&&(this.minReal=1);0<this.min&&0<this.minReal-this.step&&(this.minReal=this.min+this.step<this.minReal?this.min+this.step:this.min);this.logarithmic&&(2<Math.log(b)*Math.LOG10E-Math.log(a)*Math.LOG10E?(this.minReal=this.min=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E)),this.max=Math.pow(10,Math.ceil(Math.log(Math.abs(b))*
Math.LOG10E))):(a=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,Math.pow(10,Math.floor(Math.log(Math.abs(this.min))*Math.LOG10E))/10<a&&(this.minReal=this.min=10*a)))},getExtremes:function(a,b){var c,e,d;for(d=a;d<=b;d++){var f=this.data[d].axes[this.id].graphs,g;for(g in f)if(f.hasOwnProperty(g)){var k=this.chart.graphsById[g];if(k.includeInMinMax&&(!k.hidden||this.includeHidden)){isNaN(c)&&(c=Infinity);isNaN(e)&&(e=-Infinity);this.foundGraphs=!0;k=f[g].values;this.recalculateToPercents&&
(k=f[g].percents);var l;if(this.minMaxField)l=k[this.minMaxField],l<c&&(c=l),l>e&&(e=l);else for(var m in k)k.hasOwnProperty(m)&&"percents"!=m&&"total"!=m&&(l=k[m],l<c&&(c=l),l>e&&(e=l))}}}return{min:c,max:e}},zoomOut:function(){this.zoomToRelativeValues(0,1);this.maxZoom=this.minZoom=NaN},zoomToRelativeValues:function(a,b,c){if(this.reversed){var e=a;a=1-b;b=1-e}var d=this.fullMax,e=this.fullMin,f=e+(d-e)*a,g=e+(d-e)*b;this.logarithmic&&(d=Math.log(d)*Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.pow(10,
d*a+Math.log(e)*Math.LOG10E),g=Math.pow(10,d*b+Math.log(e)*Math.LOG10E));return this.zoomToValues(f,g,c)},zoomToValues:function(a,b,c){if(b<a){var e=b;b=a;a=e}var d=this.fullMax,e=this.fullMin;this.relativeStart=(a-e)/(d-e);this.relativeEnd=(b-e)/(d-e);if(this.logarithmic){var d=Math.log(d)*Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.log(b)/Math.LN10-Math.log(e)*Math.LOG10E;this.relativeStart=(Math.log(a)/Math.LN10-Math.log(e)*Math.LOG10E)/d;this.relativeEnd=f/d}if(this.minZoom!=a||this.maxZoom!=b)return this.minZoom=
a,this.maxZoom=b,c||(c={type:"axisZoomed"},c.chart=this.chart,c.valueAxis=this,c.startValue=a,c.endValue=b,c.relativeStart=this.relativeStart,c.relativeEnd=this.relativeEnd,this.fire(c)),!0},coordinateToValue:function(a){if(isNaN(a))return NaN;var b=this.axisWidth,c=this.stepWidth,e=this.reversed,d=this.rotate,f=this.min,g=this.minReal;return!0===this.logarithmic?Math.pow(10,(d?!0===e?(b-a)/c:a/c:!0===e?a/c:(b-a)/c)+Math.log(g)*Math.LOG10E):!0===e?d?f-(a-b)/c:a/c+f:d?a/c+f:f-(a-b)/c},getCoordinate:function(a,
b){if(isNaN(a))return NaN;var c=this.rotate,e=this.reversed,d=this.axisWidth,f=this.stepWidth,g=this.min,k=this.minReal;!0===this.logarithmic?(0===a&&(a=this.treatZeroAs),g=Math.log(a)*Math.LOG10E-Math.log(k)*Math.LOG10E,c=c?!0===e?d-f*g:f*g:!0===e?f*g:d-f*g):c=!0===e?c?d-f*(a-g):f*(a-g):c?f*(a-g):d-f*(a-g);1E7<Math.abs(c)&&(c=c/Math.abs(c)*1E7);b||(c=Math.round(c));return c},synchronizeWithAxis:function(a){this.synchronizeWith=a;this.listenTo(this.synchronizeWith,"axisChanged",this.handleSynchronization)},
handleSynchronization:function(){if(this.synchronizeWith){d.isString(this.synchronizeWith)&&(this.synchronizeWith=this.chart.getValueAxisById(this.synchronizeWith));var a=this.synchronizeWith,b=a.min,c=a.max,a=a.step,e=this.synchronizationMultiplier;e&&(this.min=b*e,this.max=c*e,this.step=a*e,b=Math.abs(Math.log(Math.abs(Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E))))*Math.LOG10E),this.maxDecCount=b=Math.round(b),this.draw())}}})})();(function(){var d=window.AmCharts;d.RecAxis=d.Class({construct:function(a){var b=a.chart,c=a.axisThickness,e=a.axisColor,h=a.axisAlpha,f=a.offset,g=a.dx,k=a.dy,l=a.x,m=a.y,n=a.height,q=a.width,p=b.container;"H"==a.orientation?(e=d.line(p,[0,q],[0,0],e,h,c),this.axisWidth=a.width,"bottom"==a.position?(k=c/2+f+n+m-1,c=l):(k=-c/2-f+m+k,c=g+l)):(this.axisWidth=a.height,"right"==a.position?(e=d.line(p,[0,0,-g],[0,n,n-k],e,h,c),k=m+k,c=c/2+f+g+q+l-1):(e=d.line(p,[0,0],[0,n],e,h,c),k=m,c=-c/2-f+l));e.translate(c,
k);c=b.container.set();c.push(e);b.axesSet.push(c);d.setCN(b,e,a.bcn+"line");this.axisSet=c;this.set=e}})})();(function(){var d=window.AmCharts;d.RecItem=d.Class({construct:function(a,b,c,e,h,f,g,k,l,m,n,q){b=Math.round(b);var p=a.chart;this.value=c;void 0==c&&(c="");l||(l=0);void 0==e&&(e=!0);var t=p.fontFamily,r=a.fontSize;void 0==r&&(r=p.fontSize);var u=a.color;void 0==u&&(u=p.color);void 0!==n&&(u=n);var y=a.chart.container,x=y.set();this.set=x;var w=a.axisThickness,B=a.axisColor,z=a.axisAlpha,A=a.tickLength,C=a.gridAlpha,D=a.gridThickness,J=a.gridColor,H=a.dashLength,R=a.fillColor,L=a.fillAlpha,P=a.labelsEnabled;
n=a.labelRotationR;var ia=a.counter,I=a.inside,Z=a.labelOffset,va=a.dx,la=a.dy,Oa=a.orientation,ea=a.position,ca=a.previousCoord,X=a.height,ya=a.width,da=a.offset,fa,za;g?(void 0!==g.id&&(q=p.classNamePrefix+"-guide-"+g.id),P=!0,isNaN(g.tickLength)||(A=g.tickLength),void 0!=g.lineColor&&(J=g.lineColor),void 0!=g.color&&(u=g.color),isNaN(g.lineAlpha)||(C=g.lineAlpha),isNaN(g.dashLength)||(H=g.dashLength),isNaN(g.lineThickness)||(D=g.lineThickness),!0===g.inside&&(I=!0,0<da&&(da=0)),isNaN(g.labelRotation)||
(n=g.labelRotation),isNaN(g.fontSize)||(r=g.fontSize),g.position&&(ea=g.position),void 0!==g.boldLabel&&(k=g.boldLabel),isNaN(g.labelOffset)||(Z=g.labelOffset)):""===c&&(A=0);m&&!isNaN(a.minorTickLength)&&(A=a.minorTickLength);var ga="start";0<h&&(ga="middle");a.centerLabels&&(ga="middle");var T=n*Math.PI/180,Y,Ca,G=0,v=0,ma=0,ha=Y=0,Pa=0;"V"==Oa&&(n=0);var ba;P&&""!==c&&(ba=a.autoWrap&&0===n?d.wrappedText(y,c,u,t,r,ga,k,Math.abs(h),0):d.text(y,c,u,t,r,ga,k),ga=ba.getBBox(),ha=ga.width,Pa=ga.height);
if("H"==Oa){if(0<=b&&b<=ya+1&&(0<A&&0<z&&b+l<=ya+1&&(fa=d.line(y,[b+l,b+l],[0,A],B,z,D),x.push(fa)),0<C&&(za=d.line(y,[b,b+va,b+va],[X,X+la,la],J,C,D,H),x.push(za))),v=0,G=b,g&&90==n&&I&&(G-=r),!1===e?(ga="start",v="bottom"==ea?I?v+A:v-A:I?v-A:v+A,G+=3,0<h&&(G+=h/2-3,ga="middle"),0<n&&(ga="middle")):ga="middle",1==ia&&0<L&&!g&&!m&&ca<ya&&(e=d.fitToBounds(b,0,ya),ca=d.fitToBounds(ca,0,ya),Y=e-ca,0<Y&&(Ca=d.rect(y,Y,a.height,R,L),Ca.translate(e-Y+va,la),x.push(Ca))),"bottom"==ea?(v+=X+r/2+da,I?(0<n?
(v=X-ha/2*Math.sin(T)-A-3,G+=ha/2*Math.cos(T)-4+2):0>n?(v=X+ha*Math.sin(T)-A-3+2,G+=-ha*Math.cos(T)-Pa*Math.sin(T)-4):v-=A+r+3+3,v-=Z):(0<n?(v=X+ha/2*Math.sin(T)+A+3,G-=ha/2*Math.cos(T)):0>n?(v=X+A+3-ha/2*Math.sin(T)+2,G+=ha/2*Math.cos(T)):v+=A+w+3+3,v+=Z)):(v+=la+r/2-da,G+=va,I?(0<n?(v=ha/2*Math.sin(T)+A+3,G-=ha/2*Math.cos(T)):v+=A+3,v+=Z):(0<n?(v=-(ha/2)*Math.sin(T)-A-6,G+=ha/2*Math.cos(T)):v-=A+r+3+w+3,v-=Z)),"bottom"==ea?Y=(I?X-A-1:X+w-1)+da:(ma=va,Y=(I?la:la-A-w+1)-da),f&&(G+=f),f=G,0<n&&(f+=
ha/2*Math.cos(T)),ba&&(r=0,I&&(r=ha/2*Math.cos(T)),f+r>ya+2||0>f))ba.remove(),ba=null}else{0<=b&&b<=X+1&&(0<A&&0<z&&b+l<=X+1&&(fa=d.line(y,[0,A+1],[b+l,b+l],B,z,D),x.push(fa)),0<C&&(za=d.line(y,[0,va,ya+va],[b,b+la,b+la],J,C,D,H),x.push(za)));ga="end";if(!0===I&&"left"==ea||!1===I&&"right"==ea)ga="start";v=b-Pa/2+2;1==ia&&0<L&&!g&&!m&&(e=d.fitToBounds(b,0,X),ca=d.fitToBounds(ca,0,X),T=e-ca,Ca=d.polygon(y,[0,a.width,a.width,0],[0,0,T,T],R,L),Ca.translate(va,e-T+la),x.push(Ca));v+=r/2;"right"==ea?(G+=
va+ya+da,v+=la,I?(f||(v-=r/2+3),G=G-(A+4)-Z):(G+=A+4+w,v-=2,G+=Z)):I?(G+=A+4-da,f||(v-=r/2+3),g&&(G+=va,v+=la),G+=Z):(G+=-A-w-4-2-da,v-=2,G-=Z);fa&&("right"==ea?(ma+=va+da+ya-1,Y+=la,ma=I?ma-w:ma+w):(ma-=da,I||(ma-=A+w)));f&&(v+=f);I=-3;"right"==ea&&(I+=la);ba&&(v>X+1||v<I)&&(ba.remove(),ba=null)}fa&&(fa.translate(ma,Y),d.setCN(p,fa,a.bcn+"tick"),d.setCN(p,fa,q,!0),g&&d.setCN(p,fa,"guide"));!1===a.visible&&(fa&&fa.remove(),ba&&(ba.remove(),ba=null));ba&&(ba.attr({"text-anchor":ga}),ba.translate(G,
v,NaN,!0),0!==n&&ba.rotate(-n,a.chart.backgroundColor),a.allLabels.push(ba),this.label=ba,d.setCN(p,ba,a.bcn+"label"),d.setCN(p,ba,q,!0),g&&d.setCN(p,ba,"guide"));za&&(d.setCN(p,za,a.bcn+"grid"),d.setCN(p,za,q,!0),g&&d.setCN(p,za,"guide"));Ca&&(d.setCN(p,Ca,a.bcn+"fill"),d.setCN(p,Ca,q,!0));m?za&&d.setCN(p,za,a.bcn+"grid-minor"):(a.counter=0===ia?1:0,a.previousCoord=b);0===this.set.node.childNodes.length&&this.set.remove()},graphics:function(){return this.set},getLabel:function(){return this.label}})})();(function(){var d=window.AmCharts;d.RecFill=d.Class({construct:function(a,b,c,e){var h=a.dx,f=a.dy,g=a.orientation,k=0;if(c<b){var l=b;b=c;c=l}var m=e.fillAlpha;isNaN(m)&&(m=0);var l=a.chart.container,n=e.fillColor;"V"==g?(b=d.fitToBounds(b,0,a.height),c=d.fitToBounds(c,0,a.height)):(b=d.fitToBounds(b,0,a.width),c=d.fitToBounds(c,0,a.width));c-=b;isNaN(c)&&(c=4,k=2,m=0);0>c&&"object"==typeof n&&(n=n.join(",").split(",").reverse());"V"==g?(g=d.rect(l,a.width,c,n,m),g.translate(h,b-k+f)):(g=d.rect(l,
c,a.height,n,m),g.translate(b-k+h,f));d.setCN(a.chart,g,"guide-fill");e.id&&d.setCN(a.chart,g,"guide-fill-"+e.id);this.set=l.set([g])},graphics:function(){return this.set},getLabel:function(){}})})();(function(){var d=window.AmCharts;d.AmChart=d.Class({construct:function(a){this.svgIcons=this.tapToActivate=!0;this.theme=a;this.classNamePrefix="amcharts";this.addClassNames=!1;this.version="3.18.6";d.addChart(this);this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=
0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.usePrefixes=!1;this.autoResize=!0;this.autoDisplay=!1;this.addCodeCredits=!0;this.precision=-1;this.percentPrecision=2;this.decimalSeparator=".";this.thousandsSeparator=",";this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;this.timeOuts=[];this.creditsPosition="top-left";var b=document.createElement("div"),c=b.style;c.overflow="hidden";c.position="relative";
c.textAlign="left";this.chartDiv=b;b=document.createElement("div");c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.legendDiv=b;this.titleHeight=0;this.hideBalloonTime=150;this.handDrawScatter=2;this.handDrawThickness=1;this.prefixesOfBigNumbers=[{number:1E3,prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,
prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:.001,prefix:"m"}];this.panEventsEnabled=!0;this.product="amcharts";this.animations=[];this.balloon=new d.AmBalloon(this.theme);this.balloon.chart=this;this.processTimeout=0;this.processCount=1E3;this.animatable=[];d.applyTheme(this,a,"AmChart")},drawChart:function(){0<this.realWidth&&0<this.realHeight&&(this.drawBackground(),
this.redrawLabels(),this.drawTitles(),this.brr(),this.renderFix(),this.chartDiv&&(this.boundingRect=this.chartDiv.getBoundingClientRect()))},drawBackground:function(){d.remove(this.background);var a=this.container,b=this.backgroundColor,c=this.backgroundAlpha,e=this.set;d.isModern||0!==c||(c=.001);var h=this.updateWidth();this.realWidth=h;var f=this.updateHeight();this.realHeight=f;b=d.polygon(a,[0,h-1,h-1,0],[0,0,f-1,f-1],b,c,1,this.borderColor,this.borderAlpha);d.setCN(this,b,"bg");this.background=
b;e.push(b);if(b=this.backgroundImage)a=a.image(b,0,0,h,f),d.setCN(this,b,"bg-image"),this.bgImg=a,e.push(a)},drawTitles:function(a){var b=this.titles;this.titleHeight=0;if(d.ifArray(b)){var c=20,e;for(e=0;e<b.length;e++){var h=b[e],h=d.processObject(h,d.Title,this.theme);if(!1!==h.enabled){var f=h.color;void 0===f&&(f=this.color);var g=h.size;isNaN(g)&&(g=this.fontSize+2);isNaN(h.alpha);var k=this.marginLeft,l=!0;void 0!==h.bold&&(l=h.bold);f=d.wrappedText(this.container,h.text,f,this.fontFamily,
g,"middle",l,this.realWidth-35);f.translate(k+(this.realWidth-this.marginRight-k)/2,c);f.node.style.pointerEvents="none";h.sprite=f;d.setCN(this,f,"title");h.id&&d.setCN(this,f,"title-"+h.id);f.attr({opacity:h.alpha});c+=f.getBBox().height+5;a?f.remove():this.freeLabelsSet.push(f)}}this.titleHeight=c-10}},write:function(a){var b=this;if(b.listeners)for(var c=0;c<b.listeners.length;c++){var e=b.listeners[c];b.addListener(e.event,e.method)}b.fire({type:"buildStarted",chart:b});b.afterWriteTO&&clearTimeout(b.afterWriteTO);
0<b.processTimeout?b.afterWriteTO=setTimeout(function(){b.afterWrite.call(b,a)},b.processTimeout):b.afterWrite(a)},afterWrite:function(a){if(a="object"!=typeof a?document.getElementById(a):a){for(;a.firstChild;)a.removeChild(a.firstChild);this.div=a;a.style.overflow="hidden";a.style.textAlign="left";var b=this.chartDiv,c=this.legendDiv,e=this.legend,h=c.style,f=b.style;this.measure();this.previousHeight=this.divRealHeight;this.previousWidth=this.divRealWidth;var g,k=document.createElement("div");
g=k.style;g.position="relative";this.containerDiv=k;k.className=this.classNamePrefix+"-main-div";b.className=this.classNamePrefix+"-chart-div";a.appendChild(k);var l=this.exportConfig;l&&d.AmExport&&!this.AmExport&&(this.AmExport=new d.AmExport(this,l));this.amExport&&d.AmExport&&(this.AmExport=d.extend(this.amExport,new d.AmExport(this),!0));this.AmExport&&this.AmExport.init&&this.AmExport.init();if(e)if(e=this.addLegend(e,e.divId),e.enabled)switch(e.position){case "bottom":k.appendChild(b);k.appendChild(c);
break;case "top":k.appendChild(c);k.appendChild(b);break;case "absolute":g.width=a.style.width;g.height=a.style.height;h.position="absolute";f.position="absolute";void 0!==e.left&&(h.left=e.left+"px");void 0!==e.right&&(h.right=e.right+"px");void 0!==e.top&&(h.top=e.top+"px");void 0!==e.bottom&&(h.bottom=e.bottom+"px");e.marginLeft=0;e.marginRight=0;k.appendChild(b);k.appendChild(c);break;case "right":g.width=a.style.width;g.height=a.style.height;h.position="relative";f.position="absolute";k.appendChild(b);
k.appendChild(c);break;case "left":g.width=a.style.width;g.height=a.style.height;h.position="absolute";f.position="relative";k.appendChild(b);k.appendChild(c);break;case "outside":k.appendChild(b)}else k.appendChild(b);else k.appendChild(b);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);this.initChart()}},createLabelsSet:function(){d.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.balloon=d.processObject(this.balloon,
d.AmBalloon,this.theme);window.AmCharts_path&&(this.path=window.AmCharts_path);void 0===this.path&&(this.path=d.getPath());void 0===this.path&&(this.path="amcharts/");this.path=d.normalizeUrl(this.path);void 0===this.pathToImages&&(this.pathToImages=this.path+"images/");this.initHC||(d.callInitHandler(this),this.initHC=!0);d.applyLang(this.language,this);var a=this.numberFormatter;a&&(isNaN(a.precision)||(this.precision=a.precision),void 0!==a.thousandsSeparator&&(this.thousandsSeparator=a.thousandsSeparator),
void 0!==a.decimalSeparator&&(this.decimalSeparator=a.decimalSeparator));(a=this.percentFormatter)&&!isNaN(a.precision)&&(this.percentPrecision=a.precision);this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.destroy();(a=this.container)?(a.container.innerHTML="",a.width=this.realWidth,a.height=this.realHeight,
a.addDefs(this),this.chartDiv.appendChild(a.container)):a=new d.AmDraw(this.chartDiv,this.realWidth,this.realHeight,this);this.container=a;this.extension=".png";this.svgIcons&&d.SVG&&(this.extension=".svg");this.checkDisplay();a.chart=this;d.VML||d.SVG?(a.handDrawn=this.handDrawn,a.handDrawScatter=this.handDrawScatter,a.handDrawThickness=this.handDrawThickness,d.remove(this.set),this.set=a.set(),d.remove(this.gridSet),this.gridSet=a.set(),d.remove(this.cursorLineSet),this.cursorLineSet=a.set(),d.remove(this.graphsBehindSet),
this.graphsBehindSet=a.set(),d.remove(this.bulletBehindSet),this.bulletBehindSet=a.set(),d.remove(this.columnSet),this.columnSet=a.set(),d.remove(this.graphsSet),this.graphsSet=a.set(),d.remove(this.trendLinesSet),this.trendLinesSet=a.set(),d.remove(this.axesSet),this.axesSet=a.set(),d.remove(this.cursorSet),this.cursorSet=a.set(),d.remove(this.scrollbarsSet),this.scrollbarsSet=a.set(),d.remove(this.bulletSet),this.bulletSet=a.set(),d.remove(this.freeLabelsSet),this.freeLabelsSet=a.set(),d.remove(this.axesLabelsSet),
this.axesLabelsSet=a.set(),d.remove(this.balloonsSet),this.balloonsSet=a.set(),d.remove(this.plotBalloonsSet),this.plotBalloonsSet=a.set(),d.remove(this.zoomButtonSet),this.zoomButtonSet=a.set(),d.remove(this.zbSet),this.zbSet=null,d.remove(this.linkSet),this.linkSet=a.set()):this.fire({type:"failed",chart:this})},premeasure:function(){var a=this.div;if(a){this.boundingRect=this.chartDiv.getBoundingClientRect();var b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);
if(b!=this.mw||c!=this.mh)this.mw=b,this.mh=c,this.measure()}},measure:function(){var a=this.div;if(a){var b=this.chartDiv,c=a.offsetWidth,e=a.offsetHeight,h=this.container;a.clientHeight&&(c=a.clientWidth,e=a.clientHeight);var f=d.removePx(d.getStyle(a,"padding-left")),g=d.removePx(d.getStyle(a,"padding-right")),k=d.removePx(d.getStyle(a,"padding-top")),l=d.removePx(d.getStyle(a,"padding-bottom"));isNaN(f)||(c-=f);isNaN(g)||(c-=g);isNaN(k)||(e-=k);isNaN(l)||(e-=l);f=a.style;a=f.width;f=f.height;
-1!=a.indexOf("px")&&(c=d.removePx(a));-1!=f.indexOf("px")&&(e=d.removePx(f));e=Math.round(e);c=Math.round(c);a=Math.round(d.toCoordinate(this.width,c));f=Math.round(d.toCoordinate(this.height,e));(c!=this.previousWidth||e!=this.previousHeight)&&0<a&&0<f&&(b.style.width=a+"px",b.style.height=f+"px",b.style.padding=0,h&&h.setSize(a,f),this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme),this.balloon.setBounds(2,2,a-2,f));this.balloon.chart=this;this.realWidth=a;this.realHeight=f;this.divRealWidth=
c;this.divRealHeight=e}},checkDisplay:function(){if(this.autoDisplay&&this.container){var a=d.rect(this.container,10,10),b=a.getBBox();0===b.width&&0===b.height&&(this.divRealHeight=this.divRealWidth=this.realHeight=this.realWidth=0,this.previousWidth=this.previousHeight=NaN);a.remove()}},destroy:function(){this.chartDiv.innerHTML="";this.clearTimeOuts();this.legend&&this.legend.destroy()},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=
[]},clear:function(a){d.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();this.container&&(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));a||d.removeChart(this);if(a=this.div)for(;a.firstChild;)a.removeChild(a.firstChild);this.legend&&this.legend.destroy()},setMouseCursor:function(a){"auto"==a&&d.isNN&&(a="default");this.chartDiv.style.cursor=
a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;for(b=0;b<a.length;b++)this.drawLabel(a[b])},drawLabel:function(a){if(this.container&&!1!==a.enabled){a=d.processObject(a,d.Label,this.theme);var b=a.y,c=a.text,e=a.align,h=a.size,f=a.color,g=a.rotation,k=a.alpha,l=a.bold,m=d.toCoordinate(a.x,this.realWidth),b=d.toCoordinate(b,this.realHeight);m||(m=0);b||(b=0);void 0===f&&(f=this.color);isNaN(h)&&(h=this.fontSize);e||(e="start");
"left"==e&&(e="start");"right"==e&&(e="end");"center"==e&&(e="middle",g?b=this.realHeight-b+b/2:m=this.realWidth/2-m);void 0===k&&(k=1);void 0===g&&(g=0);b+=h/2;c=d.text(this.container,c,f,this.fontFamily,h,e,l,k);c.translate(m,b);d.setCN(this,c,"label");a.id&&d.setCN(this,c,"label-"+a.id);0!==g&&c.rotate(g);a.url?(c.setAttr("cursor","pointer"),c.click(function(){d.getURL(a.url)})):c.node.style.pointerEvents="none";this.labelsSet.push(c);this.labels.push(c)}},addLabel:function(a,b,c,e,d,f,g,k,l,m){a=
{x:a,y:b,text:c,align:e,size:d,color:f,alpha:k,rotation:g,bold:l,url:m,enabled:!0};this.container&&this.drawLabel(a);this.allLabels.push(a)},clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,
b=this.divRealHeight,c=this.legend;if(c){var e=this.legendDiv,d=e.offsetWidth;isNaN(c.width)||(d=c.width);c.ieW&&(d=c.ieW);var f=e.offsetHeight,e=e.style,g=this.chartDiv.style,c=c.position;if("right"==c||"left"==c){a-=d;if(0>a||isNaN(a))a=0;g.width=a+"px";this.balloon.setBounds(2,2,a-2,this.realHeight);"left"==c?(g.left=d+"px",e.left="0px"):(g.left="0px",e.left=a+"px");b>f&&(e.top=(b-f)/2+"px")}}return a},getTitleHeight:function(){this.drawTitles(!0);return this.titleHeight},addTitle:function(a,b,
c,e,d){isNaN(b)&&(b=this.fontSize+2);a={text:a,size:b,color:c,alpha:e,bold:d,enabled:!0};this.titles.push(a);return a},handleWheel:function(a){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,a.shiftKey);a.preventDefault&&a.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.hideBalloonReal();this.handleMouseMove();this.tmx=this.mouseX;this.tmy=this.mouseY},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<
this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)&&(this.tapped=!0)):this.tapped=!1},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?(a.panEventsEnabled&&(b.style.msTouchAction="none",b.style.touchAction="none"),"ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",function(b){a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleMouseMove.call(a,
b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0),document.addEventListener("touchstart",function(b){a.handleDocTouchStart.call(a,b)}),document.addEventListener("touchend",function(b){a.handleDocTouchEnd.call(a,b)})),b.addEventListener("mousedown",function(b){a.mouseIsOver=!0;a.handleMouseMove.call(a,b);a.handleMouseDown.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,
b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},dispDUpd:function(){this.skipEvents||(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),this.chartRendered||(this.fire({type:"rendered",chart:this}),this.chartRendered=
!0),this.fire({type:"drawn",chart:this}));this.skipEvents=!1},validateSize:function(){var a=this;a.premeasure();a.checkDisplay();if(a.divRealWidth!=a.previousWidth||a.divRealHeight!=a.previousHeight){var b=a.legend;if(0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){a.legendInitTO&&clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},10);a.timeOuts.push(c);a.legendInitTO=c}a.marginsUpdated="xy"!=a.type?!1:!0;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},
10);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix&&b.renderFix();clearTimeout(a.resizedTO);a.resizedTO=setTimeout(function(){a.fire({type:"resized",chart:a})},10);a.previousHeight=a.divRealHeight;a.previousWidth=a.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=
b},validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(a,b){this.initTO&&clearTimeout(this.initTO);a&&(this.dataChanged=!0,this.marginsUpdated=!1);this.skipEvents=b;this.chartRendered=!1;this.write(this.div)},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearTimeout(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},
a.hideBalloonTime)},cleanChart:function(){},hideBalloonReal:function(){var a=this.balloon;a&&a.hide()},showBalloon:function(a,b,c,e,d){var f=this;clearTimeout(f.balloonTO);clearTimeout(f.hoverInt);f.balloonTO=setTimeout(function(){f.showBalloonReal.call(f,a,b,c,e,d)},1)},showBalloonReal:function(a,b,c,e,d){this.handleMouseMove();var f=this.balloon;f.enabled&&(f.followCursor(!1),f.changeColor(b),!c||f.fixedPosition?(f.setPosition(e,d),isNaN(e)||isNaN(d)?f.followCursor(!0):f.followCursor(!1)):f.followCursor(!0),
a&&f.showBalloon(a))},handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO);d.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){var a=this;d.resetMouseOver();a.outTO&&clearTimeout(a.outTO);a.outTO=setTimeout(function(){a.handleMouseOutReal()},10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(a){a||(a=window.event);this.mouse2Y=this.mouse2X=NaN;var b,c,e,d;if(a){if(a.touches){var f=a.touches.item(1);f&&this.panEventsEnabled&&this.boundingRect&&
(e=f.clientX-this.boundingRect.left,d=f.clientY-this.boundingRect.top);a=a.touches.item(0);if(!a)return}else this.wasTouched=!1;this.boundingRect&&a.clientX&&(b=a.clientX-this.boundingRect.left,c=a.clientY-this.boundingRect.top);isNaN(e)?this.mouseX=b:(this.mouseX=Math.min(b,e),this.mouse2X=Math.max(b,e));isNaN(d)?this.mouseY=c:(this.mouseY=Math.min(c,d),this.mouse2Y=Math.max(c,d))}},handleTouchStart:function(a){this.hideBalloonReal();a&&(a.touches&&this.tapToActivate&&!this.tapped||!this.panRequired)||
(this.handleMouseMove(a),this.handleMouseDown(a))},handleTouchEnd:function(a){this.wasTouched=!0;this.handleMouseMove(a);d.resetMouseOver();this.handleReleaseOutside(a)},handleReleaseOutside:function(){},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&(this.panEventsEnabled?a.preventDefault():a.touches||a.preventDefault())},addLegend:function(a,b){a=d.processObject(a,d.AmLegend,this.theme);a.divId=b;a.ieW=0;var c;c="object"!=typeof b&&b?document.getElementById(b):
b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;return a},removeLegend:function(){this.legend=void 0;this.legendDiv.innerHTML=""},handleResize:function(){(d.isPercents(this.width)||d.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!d.VML){var a=this.container;a&&a.renderFix()}},getSVG:function(){if(d.hasSVG)return this.container},animate:function(a,b,c,e,h,f,g){a["an_"+b]&&d.removeFromArray(this.animations,
a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:e,time:h,effect:f,suffix:g};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&b.setData(a)},stopAnim:function(a){d.removeFromArray(this.animations,a)},updateAnimations:function(){var a;this.container&&this.container.update();if(this.animations)for(a=this.animations.length-1;0<=a;a--){var b=this.animations[a],c=d.updateRate*b.time,e=b.frame+1,h=b.obj,f=b.attribute;if(e<=c){b.frame++;var g=Number(b.from),
k=Number(b.to)-g,c=d[b.effect](0,e,g,k,c);0===k?(this.animations.splice(a,1),h.node.style[f]=Number(b.to)+b.suffix):h.node.style[f]=c+b.suffix}else h.node.style[f]=Number(b.to)+b.suffix,h.animationFinished=!0,this.animations.splice(a,1)}},update:function(){this.updateAnimations();var a=this.animatable;if(0<a.length){for(var b=!0,c=a.length-1;0<=c;c--){var e=a[c];e&&(e.animationFinished?a.splice(c,1):b=!1)}b&&(this.fire({type:"animationFinished",chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==
window.top}catch(a){return!0}},brr:function(){if(!this.hideCredits){var a="amcharts.com",b=window.location.hostname.split("."),c;2<=b.length&&(c=b[b.length-2]+"."+b[b.length-1]);this.amLink&&(b=this.amLink.parentNode)&&b.removeChild(this.amLink);b=this.creditsPosition;if(c!=a||!0===this.inIframe()){var a="http://www."+a,e=c=0,d=this.realWidth,f=this.realHeight,g=this.type;if("serial"==g||"xy"==g||"gantt"==g)c=this.marginLeftReal,e=this.marginTopReal,d=c+this.plotAreaWidth,f=e+this.plotAreaHeight;
var g=a+"/javascript-charts/",k="JavaScript charts",l="JS chart by amCharts";"ammap"==this.product&&(g=a+"/javascript-maps/",k="Interactive JavaScript maps",l="JS map by amCharts");a=document.createElement("a");l=document.createTextNode(l);a.setAttribute("href",g);a.setAttribute("title",k);a.appendChild(l);this.chartDiv.appendChild(a);this.amLink=a;g=a.style;g.position="absolute";g.textDecoration="none";g.color=this.color;g.fontFamily=this.fontFamily;g.fontSize=this.fontSize+"px";g.opacity=.7;g.display=
"block";var k=a.offsetWidth,a=a.offsetHeight,l=5+c,m=e+5;"bottom-left"==b&&(l=5+c,m=f-a-3);"bottom-right"==b&&(l=d-k-5,m=f-a-3);"top-right"==b&&(l=d-k-5,m=e+5);g.left=l+"px";g.top=m+"px"}}}});d.Slice=d.Class({construct:function(){}});d.SerialDataItem=d.Class({construct:function(){}});d.GraphDataItem=d.Class({construct:function(){}});d.Guide=d.Class({construct:function(a){this.cname="Guide";d.applyTheme(this,a,this.cname)}});d.Title=d.Class({construct:function(a){this.cname="Title";d.applyTheme(this,
a,this.cname)}});d.Label=d.Class({construct:function(a){this.cname="Label";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.AmGraph=d.Class({construct:function(a){this.cname="AmGraph";this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.type="line";this.stackable=!0;this.columnCount=1;this.columnIndex=0;this.centerCustomBullets=this.showBalloon=!0;this.maxBulletSize=50;this.minBulletSize=4;this.balloonText="[[value]]";this.hidden=this.scrollbar=this.animationPlayed=!1;
this.pointPosition="middle";this.depthCount=1;this.includeInMinMax=!0;this.negativeBase=0;this.visibleInLegend=!0;this.showAllValueLabels=!1;this.showBulletsAt=this.showBalloonAt="close";this.lineThickness=1;this.dashLength=0;this.connect=!0;this.lineAlpha=1;this.bullet="none";this.bulletBorderThickness=2;this.bulletBorderAlpha=0;this.bulletAlpha=1;this.bulletSize=8;this.cornerRadiusTop=this.hideBulletsCount=this.bulletOffset=0;this.cursorBulletAlpha=1;this.gradientOrientation="vertical";this.dy=
this.dx=0;this.periodValue="";this.clustered=!0;this.periodSpan=1;this.y=this.x=0;this.switchable=!0;this.tcc=this.minDistance=1;this.labelRotation=0;this.labelAnchor="auto";this.labelOffset=3;this.bcn="graph-";this.dateFormat="MMM DD, YYYY";this.noRounding=!0;d.applyTheme(this,a,this.cname)},init:function(){this.createBalloon()},draw:function(){var a=this.chart,b=a.type;if(a.drawGraphs){isNaN(this.precision)||(this.numberFormatter?this.numberFormatter.precision=this.precision:this.numberFormatter=
{precision:this.precision,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator});var c=a.container;this.container=c;this.destroy();var e=c.set();this.set=e;e.translate(this.x,this.y);var h=c.set();this.bulletSet=h;h.translate(this.x,this.y);this.behindColumns?(a.graphsBehindSet.push(e),a.bulletBehindSet.push(h)):(a.graphsSet.push(e),a.bulletSet.push(h));var f=this.bulletAxis;d.isString(f)&&(this.bulletAxis=a.getValueAxisById(f));c=c.set();d.remove(this.columnsSet);this.columnsSet=
c;d.setCN(a,e,"graph-"+this.type);d.setCN(a,e,"graph-"+this.id);d.setCN(a,h,"graph-"+this.type);d.setCN(a,h,"graph-"+this.id);this.columnsArray=[];this.ownColumns=[];this.allBullets=[];this.animationArray=[];h=this.labelPosition;h||(f=this.valueAxis.stackType,h="top","column"==this.type&&(a.rotate&&(h="right"),"100%"==f||"regular"==f)&&(h="middle"),this.labelPosition=h);d.ifArray(this.data)&&(a=!1,"xy"==b?this.xAxis.axisCreated&&this.yAxis.axisCreated&&(a=!0):this.valueAxis.axisCreated&&(a=!0),!this.hidden&&
a&&this.createGraph());e.push(c)}},createGraph:function(){var a=this,b=a.chart;a.startAlpha=b.startAlpha;a.seqAn=b.sequencedAnimation;a.baseCoord=a.valueAxis.baseCoord;void 0===a.fillAlphas&&(a.fillAlphas=0);a.bulletColorR=a.bulletColor;void 0===a.bulletColorR&&(a.bulletColorR=a.lineColorR,a.bulletColorNegative=a.negativeLineColor);void 0===a.bulletAlpha&&(a.bulletAlpha=a.lineAlpha);if("step"==c||d.VML)a.noRounding=!1;var c=b.type;"gantt"==c&&(c="serial");clearTimeout(a.playedTO);if(!isNaN(a.valueAxis.min)&&
!isNaN(a.valueAxis.max)){switch(c){case "serial":a.categoryAxis&&(a.createSerialGraph(),"candlestick"==a.type&&1>a.valueAxis.minMaxMultiplier&&a.positiveClip(a.set));break;case "radar":a.createRadarGraph();break;case "xy":a.createXYGraph(),a.positiveClip(a.set)}a.playedTO=setTimeout(function(){a.setAnimationPlayed.call(a)},500*a.chart.startDuration)}},setAnimationPlayed:function(){this.animationPlayed=!0},createXYGraph:function(){var a=[],b=[],c=this.xAxis,e=this.yAxis;this.pmh=e.height;this.pmw=
c.width;this.pmy=this.pmx=0;var d;for(d=this.start;d<=this.end;d++){var f=this.data[d].axes[c.id].graphs[this.id],g=f.values,k=g.x,l=g.y,g=c.getCoordinate(k,this.noRounding),m=e.getCoordinate(l,this.noRounding);if(!isNaN(k)&&!isNaN(l)&&(a.push(g),b.push(m),f.x=g,f.y=m,k=this.createBullet(f,g,m,d),l=this.labelText)){var l=this.createLabel(f,l),n=0;k&&(n=k.size);this.positionLabel(f,g,m,l,n)}}this.drawLineGraph(a,b);this.launchAnimation()},createRadarGraph:function(){var a=this.valueAxis.stackType,
b=[],c=[],e=[],d=[],f,g,k,l,m;for(m=this.start;m<=this.end;m++){var n=this.data[m].axes[this.valueAxis.id].graphs[this.id],q,p;"none"==a||"3d"==a?q=n.values.value:(q=n.values.close,p=n.values.open);if(isNaN(q))this.connect||(this.drawLineGraph(b,c,e,d),b=[],c=[],e=[],d=[]);else{var t=this.valueAxis.getCoordinate(q,this.noRounding)-this.height,t=t*this.valueAxis.rMultiplier,r=-360/(this.end-this.start+1)*m;"middle"==this.valueAxis.pointPosition&&(r-=180/(this.end-this.start+1));q=t*Math.sin(r/180*
Math.PI);t*=Math.cos(r/180*Math.PI);b.push(q);c.push(t);if(!isNaN(p)){var u=this.valueAxis.getCoordinate(p,this.noRounding)-this.height,u=u*this.valueAxis.rMultiplier,y=u*Math.sin(r/180*Math.PI),r=u*Math.cos(r/180*Math.PI);e.push(y);d.push(r);isNaN(k)&&(k=y);isNaN(l)&&(l=r)}r=this.createBullet(n,q,t,m);n.x=q;n.y=t;if(y=this.labelText)y=this.createLabel(n,y),u=0,r&&(u=r.size),this.positionLabel(n,q,t,y,u);isNaN(f)&&(f=q);isNaN(g)&&(g=t)}}b.push(f);c.push(g);isNaN(k)||(e.push(k),d.push(l));this.drawLineGraph(b,
c,e,d);this.launchAnimation()},positionLabel:function(a,b,c,e,d){if(e){var f=this.chart,g=this.valueAxis,k="middle",l=!1,m=this.labelPosition,n=e.getBBox(),q=this.chart.rotate,p=a.isNegative;c-=n.height/4/2;void 0!==a.labelIsNegative&&(p=a.labelIsNegative);switch(m){case "right":m=q?p?"left":"right":"right";break;case "top":m=q?"top":p?"bottom":"top";break;case "bottom":m=q?"bottom":p?"top":"bottom";break;case "left":m=q?p?"right":"left":"left"}var t=a.columnGraphics,r=0,u=0;t&&(r=t.x,u=t.y);var y=
this.labelOffset;switch(m){case "right":k="start";b+=d/2+y;break;case "top":c=g.reversed?c+(d/2+n.height/2+y):c-(d/2+n.height/2+y);break;case "bottom":c=g.reversed?c-(d/2+n.height/2+y):c+(d/2+n.height/2+y);break;case "left":k="end";b-=d/2+y;break;case "inside":"column"==this.type&&(l=!0,q?p?(k="end",b=r-3-y):(k="start",b=r+3+y):c=p?u+7+y:u-10-y);break;case "middle":"column"==this.type&&(l=!0,q?b-=(b-r)/2+y-3:c-=(c-u)/2+y-3)}"auto"!=this.labelAnchor&&(k=this.labelAnchor);e.attr({"text-anchor":k});
this.labelRotation&&e.rotate(this.labelRotation);e.translate(b,c);!this.showAllValueLabels&&t&&l&&(n=e.getBBox(),n.height>a.columnHeight||n.width>a.columnWidth)&&(e.remove(),e=null);e&&(0>b||b>this.width||0>c||c>this.height)&&(e.remove(),e=null);if(e&&("serial"==f.type||"gantt"==f.type))if(q){if(0>c||c>this.height)e.remove(),e=null}else if(0>b||b>this.width)e.remove(),e=null;e&&this.allBullets.push(e);return e}},getGradRotation:function(){var a=270;"horizontal"==this.gradientOrientation&&(a=0);return this.gradientRotation=
a},createSerialGraph:function(){this.dashLengthSwitched=this.fillColorsSwitched=this.lineColorSwitched=void 0;var a=this.chart,b=this.id,c=this.index,e=this.data,h=this.chart.container,f=this.valueAxis,g=this.type,k=this.columnWidthReal,l=this.showBulletsAt;isNaN(this.columnWidth)||(k=this.columnWidth);isNaN(k)&&(k=.8);var m=this.useNegativeColorIfDown,n=this.width,q=this.height,p=this.y,t=this.rotate,r=this.columnCount,u=d.toCoordinate(this.cornerRadiusTop,k/2),y=this.connect,x=[],w=[],B,z,A,C,D=
this.chart.graphs.length,J,H=this.dx/this.tcc,R=this.dy/this.tcc,L=f.stackType,P=this.start,ia=this.end,I=this.scrollbar,Z="graph-column-";I&&(Z="scrollbar-graph-column-");var va=this.categoryAxis,la=this.baseCoord,Oa=this.negativeBase,ea=this.columnIndex,ca=this.lineThickness,X=this.lineAlpha,ya=this.lineColorR,da=this.dashLength,fa=this.set,za,ga=this.getGradRotation(),T=this.chart.columnSpacing,Y=va.cellWidth,Ca=(Y*k-r)/r;T>Ca&&(T=Ca);var G,v,ma,ha=q,Pa=n,ba=0,tb=0,ub,vb,gb,hb,wb=this.fillColorsR,
Qa=this.negativeFillColors,Ja=this.negativeLineColor,Ya=this.fillAlphas,Za=this.negativeFillAlphas;"object"==typeof Ya&&(Ya=Ya[0]);"object"==typeof Za&&(Za=Za[0]);var xb=this.noRounding;"step"==g&&(xb=!1);var ib=f.getCoordinate(f.min);f.logarithmic&&(ib=f.getCoordinate(f.minReal));this.minCoord=ib;this.resetBullet&&(this.bullet="none");if(!(I||"line"!=g&&"smoothedLine"!=g&&"step"!=g||(1==e.length&&"step"!=g&&"none"==this.bullet&&(this.bullet="round",this.resetBullet=!0),!Qa&&void 0==Ja||m))){var Ua=
Oa;Ua>f.max&&(Ua=f.max);Ua<f.min&&(Ua=f.min);f.logarithmic&&(Ua=f.minReal);var Ka=f.getCoordinate(Ua),Nb=f.getCoordinate(f.max);t?(ha=q,Pa=Math.abs(Nb-Ka),ub=q,vb=Math.abs(ib-Ka),hb=tb=0,f.reversed?(ba=0,gb=Ka):(ba=Ka,gb=0)):(Pa=n,ha=Math.abs(Nb-Ka),vb=n,ub=Math.abs(ib-Ka),gb=ba=0,f.reversed?(hb=p,tb=Ka):hb=Ka)}var La=Math.round;this.pmx=La(ba);this.pmy=La(tb);this.pmh=La(ha);this.pmw=La(Pa);this.nmx=La(gb);this.nmy=La(hb);this.nmh=La(ub);this.nmw=La(vb);d.isModern||(this.nmy=this.nmx=0,this.nmh=
this.height);this.clustered||(r=1);k="column"==g?(Y*k-T*(r-1))/r:Y*k;1>k&&(k=1);var Ob=this.fixedColumnWidth;isNaN(Ob)||(k=Ob);var M;if("line"==g||"step"==g||"smoothedLine"==g){if(0<P){for(M=P-1;-1<M;M--)if(G=e[M],v=G.axes[f.id].graphs[b],ma=v.values.value,!isNaN(ma)){P=M;break}if(this.lineColorField)for(M=P;-1<M;M--)if(G=e[M],v=G.axes[f.id].graphs[b],v.lineColor){this.bulletColorSwitched=this.lineColorSwitched=v.lineColor;break}if(this.fillColorsField)for(M=P;-1<M;M--)if(G=e[M],v=G.axes[f.id].graphs[b],
v.fillColors){this.fillColorsSwitched=v.fillColors;break}if(this.dashLengthField)for(M=P;-1<M;M--)if(G=e[M],v=G.axes[f.id].graphs[b],!isNaN(v.dashLength)){this.dashLengthSwitched=v.dashLength;break}}if(ia<e.length-1)for(M=ia+1;M<e.length;M++)if(G=e[M],v=G.axes[f.id].graphs[b],ma=v.values.value,!isNaN(ma)){ia=M;break}}ia<e.length-1&&ia++;var U=[],V=[],Ra=!1;if("line"==g||"step"==g||"smoothedLine"==g)if(this.stackable&&"regular"==L||"100%"==L||this.fillToGraph)Ra=!0;var Pb=this.noStepRisers,jb=-1E3,
kb=-1E3,lb=this.minDistance,Sa=!0,$a=!1,yb=0,zb=0;for(M=P;M<=ia;M++){G=e[M];v=G.axes[f.id].graphs[b];v.index=M;var ab,Ta=NaN;if(m&&void 0==this.openField)for(var Ab=M+1;Ab<e.length&&(!e[Ab]||!(ab=e[M+1].axes[f.id].graphs[b])||!ab.values||(Ta=ab.values.value,isNaN(Ta)));Ab++);var S,Q,K,aa,na=NaN,E=NaN,F=NaN,O=NaN,N=NaN,pa=NaN,qa=NaN,ra=NaN,sa=NaN,wa=NaN,Da=NaN,ja=NaN,ka=NaN,W=NaN,Bb=NaN,Cb=NaN,ta=NaN,ua=void 0,Ma=wb,Va=Ya,Ha=ya,Aa,Ea,Db=this.proCandlesticks,mb=this.topRadius,Fa=q-1,oa=n-1,bb=this.pattern;
void 0!=v.pattern&&(bb=v.pattern);isNaN(v.alpha)||(Va=v.alpha);isNaN(v.dashLength)||(da=v.dashLength);var Ia=v.values;f.recalculateToPercents&&(Ia=v.percents);if(Ia){W=this.stackable&&"none"!=L&&"3d"!=L?Ia.close:Ia.value;if("candlestick"==g||"ohlc"==g)W=Ia.close,Cb=Ia.low,qa=f.getCoordinate(Cb),Bb=Ia.high,sa=f.getCoordinate(Bb);ta=Ia.open;F=f.getCoordinate(W,xb);isNaN(ta)||(N=f.getCoordinate(ta,xb),m&&"regular"!=L&&"100%"!=L&&(Ta=ta,ta=N=NaN));m&&(void 0==this.openField?ab&&(ab.isNegative=Ta<W?!0:
!1,isNaN(Ta)&&(v.isNegative=!Sa)):v.isNegative=Ta>W?!0:!1);if(!I)switch(this.showBalloonAt){case "close":v.y=F;break;case "open":v.y=N;break;case "high":v.y=sa;break;case "low":v.y=qa}var na=G.x[va.id],Wa=this.periodSpan-1;"step"!=g||isNaN(G.cellWidth)||(Y=G.cellWidth);var xa=Math.floor(Y/2)+Math.floor(Wa*Y/2),Ga=xa,nb=0;"left"==this.stepDirection&&(nb=(2*Y+Wa*Y)/2,na-=nb);"center"==this.stepDirection&&(nb=Y/2,na-=nb);"start"==this.pointPosition&&(na-=Y/2+Math.floor(Wa*Y/2),xa=0,Ga=Math.floor(Y)+
Math.floor(Wa*Y));"end"==this.pointPosition&&(na+=Y/2+Math.floor(Wa*Y/2),xa=Math.floor(Y)+Math.floor(Wa*Y),Ga=0);if(Pb){var Eb=this.columnWidth;isNaN(Eb)||(xa*=Eb,Ga*=Eb)}I||(v.x=na);-1E5>na&&(na=-1E5);na>n+1E5&&(na=n+1E5);t?(E=F,O=N,N=F=na,isNaN(ta)&&!this.fillToGraph&&(O=la),pa=qa,ra=sa):(O=E=na,isNaN(ta)&&!this.fillToGraph&&(N=la));if(!Db&&W<ta||Db&&W<za)v.isNegative=!0,Qa&&(Ma=Qa),Za&&(Va=Za),void 0!=Ja&&(Ha=Ja);$a=!1;isNaN(W)||(m?W>Ta?(Sa&&($a=!0),Sa=!1):(Sa||($a=!0),Sa=!0):v.isNegative=W<Oa?
!0:!1,za=W);var Qb=!1;I&&a.chartScrollbar.ignoreCustomColors&&(Qb=!0);Qb||(void 0!=v.color&&(Ma=v.color),v.fillColors&&(Ma=v.fillColors));switch(g){case "line":if(isNaN(W))y||(this.drawLineGraph(x,w,U,V),x=[],w=[],U=[],V=[]);else{if(Math.abs(E-jb)>=lb||Math.abs(F-kb)>=lb)x.push(E),w.push(F),jb=E,kb=F;wa=E;Da=F;ja=E;ka=F;!Ra||isNaN(N)||isNaN(O)||(U.push(O),V.push(N));if($a||void 0!=v.lineColor&&v.lineColor!=this.lineColorSwitched||void 0!=v.fillColors&&v.fillColors!=this.fillColorsSwitched||!isNaN(v.dashLength))this.drawLineGraph(x,
w,U,V),x=[E],w=[F],U=[],V=[],!Ra||isNaN(N)||isNaN(O)||(U.push(O),V.push(N)),m?Sa?(this.lineColorSwitched=ya,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Qa):(this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors),this.dashLengthSwitched=v.dashLength;v.gap&&(this.drawLineGraph(x,w,U,V),x=[],w=[],U=[],V=[])}break;case "smoothedLine":if(isNaN(W))y||(this.drawSmoothedGraph(x,w,U,V),x=[],w=[],U=[],V=[]);else{if(Math.abs(E-jb)>=lb||Math.abs(F-kb)>=lb)x.push(E),
w.push(F),jb=E,kb=F;wa=E;Da=F;ja=E;ka=F;!Ra||isNaN(N)||isNaN(O)||(U.push(O),V.push(N));void 0==v.lineColor&&void 0==v.fillColors&&isNaN(v.dashLength)||(this.drawSmoothedGraph(x,w,U,V),x=[E],w=[F],U=[],V=[],!Ra||isNaN(N)||isNaN(O)||(U.push(O),V.push(N)),this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,this.dashLengthSwitched=v.dashLength);v.gap&&(this.drawSmoothedGraph(x,w,U,V),x=[],w=[],U=[],V=[])}break;case "step":if(!isNaN(W)){t?(isNaN(B)||(x.push(B),w.push(F-xa)),w.push(F-
xa),x.push(E),w.push(F+Ga),x.push(E),!Ra||isNaN(N)||isNaN(O)||(isNaN(A)||(U.push(A),V.push(N-xa)),U.push(O),V.push(N-xa),U.push(O),V.push(N+Ga))):(isNaN(z)||(w.push(z),x.push(E-xa)),x.push(E-xa),w.push(F),x.push(E+Ga),w.push(F),!Ra||isNaN(N)||isNaN(O)||(isNaN(C)||(U.push(O-xa),V.push(C)),U.push(O-xa),V.push(N),U.push(O+Ga),V.push(N)));B=E;z=F;A=O;C=N;wa=E;Da=F;ja=E;ka=F;if($a||void 0!=v.lineColor||void 0!=v.fillColors||!isNaN(v.dashLength)){var ec=x[x.length-2],fc=w[w.length-2];x.pop();w.pop();this.drawLineGraph(x,
w,U,V);x=[ec];w=[fc];t?(w.push(F+Ga),x.push(E)):(x.push(E+Ga),w.push(F));U=[];V=[];this.lineColorSwitched=v.lineColor;this.fillColorsSwitched=v.fillColors;this.dashLengthSwitched=v.dashLength;m&&(Sa?(this.lineColorSwitched=ya,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Qa))}if(Pb||v.gap)B=z=NaN,this.drawLineGraph(x,w,U,V),x=[],w=[],U=[],V=[]}else if(!y){if(1>=this.periodSpan||1<this.periodSpan&&E-B>xa+Ga)B=z=NaN;this.drawLineGraph(x,w,U,V);x=[];w=[];U=[];V=[]}break;
case "column":Aa=Ha;void 0!=v.lineColor&&(Aa=v.lineColor);if(!isNaN(W)){m||(v.isNegative=W<Oa?!0:!1);v.isNegative&&(Qa&&(Ma=Qa),void 0!=Ja&&(Aa=Ja));var Rb=f.min,Sb=f.max,ob=ta;isNaN(ob)&&(ob=Oa);if(!(W<Rb&&ob<Rb||W>Sb&&ob>Sb)){var Ba;if(t){"3d"==L?(Q=F-(r/2-this.depthCount+1)*(k+T)+T/2+R*ea,S=O+H*ea,Ba=ea):(Q=Math.floor(F-(r/2-ea)*(k+T)+T/2),S=O,Ba=0);K=k;wa=E;Da=Q+k/2;ja=E;ka=Q+k/2;Q+K>q+Ba*R&&(K=q-Q+Ba*R);Q<Ba*R&&(K+=Q,Q=Ba*R);aa=E-O;var gc=S;S=d.fitToBounds(S,0,n);aa+=gc-S;aa=d.fitToBounds(aa,
-S,n-S+H*ea);v.labelIsNegative=0>aa?!0:!1;0===aa&&1/W===1/-0&&(v.labelIsNegative=!0);isNaN(G.percentWidthValue)||(K=this.height*G.percentWidthValue/100,Q=zb,zb+=K,Da=Q+K/2);K=d.roundTo(K,2);aa=d.roundTo(aa,2);Q<q&&0<K&&(ua=new d.Cuboid(h,aa,K,H-a.d3x,R-a.d3y,Ma,Va,ca,Aa,X,ga,u,t,da,bb,mb,Z),v.columnWidth=Math.abs(aa),v.columnHeight=Math.abs(K))}else{"3d"==L?(S=E-(r/2-this.depthCount+1)*(k+T)+T/2+H*ea,Q=N+R*ea,Ba=ea):(S=E-(r/2-ea)*(k+T)+T/2,Q=N,Ba=0);K=k;wa=S+k/2;Da=F;ja=S+k/2;ka=F;S+K>n+Ba*H&&(K=
n-S+Ba*H);S<Ba*H&&(K+=S-Ba*H,S=Ba*H);aa=F-N;v.labelIsNegative=0<aa?!0:!1;0===aa&&-0===W&&(v.labelIsNegative=!0);var hc=Q;Q=d.fitToBounds(Q,this.dy,q);aa+=hc-Q;aa=d.fitToBounds(aa,-Q+R*ea,q-Q);isNaN(G.percentWidthValue)||(K=this.width*G.percentWidthValue/100,S=yb,yb+=K,wa=S+K/2);K=d.roundTo(K,2);aa=d.roundTo(aa,2);S<n+ea*H&&0<K&&(this.showOnAxis&&(Q-=R/2),ua=new d.Cuboid(h,K,aa,H-a.d3x,R-a.d3y,Ma,Va,ca,Aa,this.lineAlpha,ga,u,t,da,bb,mb,Z),v.columnHeight=Math.abs(aa),v.columnWidth=Math.abs(K))}}if(ua){Ea=
ua.set;d.setCN(a,ua.set,"graph-"+this.type);d.setCN(a,ua.set,"graph-"+this.id);v.className&&d.setCN(a,ua.set,v.className,!0);v.columnGraphics=Ea;S=d.roundTo(S,2);Q=d.roundTo(Q,2);Ea.translate(S,Q);(v.url||this.showHandOnHover)&&Ea.setAttr("cursor","pointer");if(!I){"none"==L&&(J=t?(this.end+1-M)*D-c:D*M+c);"3d"==L&&(t?(J=(this.end+1-M)*D-c-1E3*this.depthCount,wa+=H*this.columnIndex,ja+=H*this.columnIndex,v.y+=H*this.columnIndex):(J=(D-c)*(M+1)+1E3*this.depthCount,Da+=R*this.columnIndex,ka+=R*this.columnIndex,
v.y+=R*this.columnIndex));if("regular"==L||"100%"==L)J=t?0<Ia.value?(this.end+1-M)*D+c:(this.end+1-M)*D-c:0<Ia.value?D*M+c:D*M-c;this.columnsArray.push({column:ua,depth:J});v.x=t?Q+K/2:S+K/2;this.ownColumns.push(ua);this.animateColumns(ua,M,E,O,F,N);this.addListeners(Ea,v)}this.columnsSet.push(Ea)}}break;case "candlestick":if(!isNaN(ta)&&!isNaN(W)){var Xa,cb;Aa=Ha;void 0!=v.lineColor&&(Aa=v.lineColor);wa=E;ka=Da=F;ja=E;if(t){"open"==l&&(ja=O);"high"==l&&(ja=ra);"low"==l&&(ja=pa);E=d.fitToBounds(E,
0,oa);O=d.fitToBounds(O,0,oa);pa=d.fitToBounds(pa,0,oa);ra=d.fitToBounds(ra,0,oa);if(0===E&&0===O&&0===pa&&0===ra)continue;if(E==oa&&O==oa&&pa==oa&&ra==oa)continue;Q=F-k/2;S=O;K=k;Q+K>q&&(K=q-Q);0>Q&&(K+=Q,Q=0);if(Q<q&&0<K){var Fb,Gb;W>ta?(Fb=[E,ra],Gb=[O,pa]):(Fb=[O,ra],Gb=[E,pa]);!isNaN(ra)&&!isNaN(pa)&&F<q&&0<F&&(Xa=d.line(h,Fb,[F,F],Aa,X,ca),cb=d.line(h,Gb,[F,F],Aa,X,ca));aa=E-O;ua=new d.Cuboid(h,aa,K,H,R,Ma,Ya,ca,Aa,X,ga,u,t,da,bb,mb,Z)}}else{"open"==l&&(ka=N);"high"==l&&(ka=sa);"low"==l&&(ka=
qa);F=d.fitToBounds(F,0,Fa);N=d.fitToBounds(N,0,Fa);qa=d.fitToBounds(qa,0,Fa);sa=d.fitToBounds(sa,0,Fa);if(0===F&&0===N&&0===qa&&0===sa)continue;if(F==Fa&&N==Fa&&qa==Fa&&sa==Fa)continue;S=E-k/2;Q=N+ca/2;K=k;S+K>n&&(K=n-S);0>S&&(K+=S,S=0);aa=F-N;if(S<n&&0<K){Db&&W>=ta&&(Va=0);var ua=new d.Cuboid(h,K,aa,H,R,Ma,Va,ca,Aa,X,ga,u,t,da,bb,mb,Z),Hb,Ib;W>ta?(Hb=[F,sa],Ib=[N,qa]):(Hb=[N,sa],Ib=[F,qa]);!isNaN(sa)&&!isNaN(qa)&&E<n&&0<E&&(Xa=d.line(h,[E,E],Hb,Aa,X,ca),cb=d.line(h,[E,E],Ib,Aa,X,ca),d.setCN(a,Xa,
this.bcn+"line-high"),v.className&&d.setCN(a,Xa,v.className,!0),d.setCN(a,cb,this.bcn+"line-low"),v.className&&d.setCN(a,cb,v.className,!0))}}ua&&(Ea=ua.set,v.columnGraphics=Ea,fa.push(Ea),Ea.translate(S,Q-ca/2),(v.url||this.showHandOnHover)&&Ea.setAttr("cursor","pointer"),Xa&&(fa.push(Xa),fa.push(cb)),I||(v.x=t?Q+K/2:S+K/2,this.animateColumns(ua,M,E,O,F,N),this.addListeners(Ea,v)))}break;case "ohlc":if(!(isNaN(ta)||isNaN(Bb)||isNaN(Cb)||isNaN(W))){var Tb=h.set();fa.push(Tb);W<ta&&(v.isNegative=!0,
void 0!=Ja&&(Ha=Ja));var pb,qb,rb;if(t){ka=F;ja=E;"open"==l&&(ja=O);"high"==l&&(ja=ra);"low"==l&&(ja=pa);pa=d.fitToBounds(pa,0,oa);ra=d.fitToBounds(ra,0,oa);if(0===E&&0===O&&0===pa&&0===ra)continue;if(E==oa&&O==oa&&pa==oa&&ra==oa)continue;var Jb=F-k/2,Jb=d.fitToBounds(Jb,0,q),Ub=d.fitToBounds(F,0,q),Kb=F+k/2,Kb=d.fitToBounds(Kb,0,q);0<=O&&O<=oa&&(qb=d.line(h,[O,O],[Jb,Ub],Ha,X,ca,da));0<F&&F<q&&(pb=d.line(h,[pa,ra],[F,F],Ha,X,ca,da));0<=E&&E<=oa&&(rb=d.line(h,[E,E],[Ub,Kb],Ha,X,ca,da))}else{ka=F;
"open"==l&&(ka=N);"high"==l&&(ka=sa);"low"==l&&(ka=qa);var ja=E,qa=d.fitToBounds(qa,0,Fa),sa=d.fitToBounds(sa,0,Fa),Lb=E-k/2,Lb=d.fitToBounds(Lb,0,n),Vb=d.fitToBounds(E,0,n),Mb=E+k/2,Mb=d.fitToBounds(Mb,0,n);0<=N&&N<=Fa&&(qb=d.line(h,[Lb,Vb],[N,N],Ha,X,ca,da));0<E&&E<n&&(pb=d.line(h,[E,E],[qa,sa],Ha,X,ca,da));0<=F&&F<=Fa&&(rb=d.line(h,[Vb,Mb],[F,F],Ha,X,ca,da))}fa.push(qb);fa.push(pb);fa.push(rb);d.setCN(a,qb,this.bcn+"stroke-open");d.setCN(a,rb,this.bcn+"stroke-close");d.setCN(a,pb,this.bcn+"stroke");
v.className&&d.setCN(a,Tb,v.className,!0);wa=E;Da=F}}if(!I&&!isNaN(W)){var Wb=this.hideBulletsCount;if(this.end-this.start<=Wb||0===Wb){var Xb=this.createBullet(v,ja,ka,M),Yb=this.labelText;if(Yb&&!isNaN(wa)&&!isNaN(wa)){var ic=this.createLabel(v,Yb),Zb=0;Xb&&(Zb=Xb.size);this.positionLabel(v,wa,Da,ic,Zb)}if("regular"==L||"100%"==L){var $b=f.totalText;if($b){var Na=this.createLabel(v,$b,f.totalTextColor);d.setCN(a,Na,this.bcn+"label-total");this.allBullets.push(Na);if(Na){var ac=Na.getBBox(),bc=ac.width,
cc=ac.height,db,eb,sb=f.totalTextOffset,dc=f.totals[M];dc&&dc.remove();var fb=0;"column"!=g&&(fb=this.bulletSize);t?(eb=Da,db=0>W?E-bc/2-2-fb-sb:E+bc/2+3+fb+sb):(db=wa,eb=0>W?F+cc/2+fb+sb:F-cc/2-3-fb-sb);Na.translate(db,eb);f.totals[M]=Na;t?(0>eb||eb>q)&&Na.remove():(0>db||db>n)&&Na.remove()}}}}}}}if("line"==g||"step"==g||"smoothedLine"==g)"smoothedLine"==g?this.drawSmoothedGraph(x,w,U,V):this.drawLineGraph(x,w,U,V),I||this.launchAnimation();this.bulletsHidden&&this.hideBullets();this.customBulletsHidden&&
this.hideCustomBullets()},animateColumns:function(a,b){var c=this,e=c.chart.startDuration;0<e&&!c.animationPlayed&&(c.seqAn?(a.set.hide(),c.animationArray.push(a),e=setTimeout(function(){c.animate.call(c)},e/(c.end-c.start+1)*(b-c.start)*1E3),c.timeOuts.push(e)):c.animate(a),c.chart.animatable.push(a))},createLabel:function(a,b,c){var e=this.chart,h=a.labelColor;h||(h=this.color);h||(h=e.color);c&&(h=c);c=this.fontSize;void 0===c&&(this.fontSize=c=e.fontSize);var f=this.labelFunction;b=e.formatString(b,
a);b=d.cleanFromEmpty(b);f&&(b=f(a,b));if(void 0!==b&&""!==b)return a=d.text(this.container,b,h,e.fontFamily,c),a.node.style.pointerEvents="none",d.setCN(e,a,this.bcn+"label"),this.bulletSet.push(a),a},positiveClip:function(a){a.clipRect(this.pmx,this.pmy,this.pmw,this.pmh)},negativeClip:function(a){a.clipRect(this.nmx,this.nmy,this.nmw,this.nmh)},drawLineGraph:function(a,b,c,e){var h=this;if(1<a.length){var f=h.noRounding,g=h.set,k=h.chart,l=h.container,m=l.set(),n=l.set();g.push(n);g.push(m);var q=
h.lineAlpha,p=h.lineThickness,g=h.fillAlphas,t=h.lineColorR,r=h.negativeLineAlpha;isNaN(r)&&(r=q);var u=h.lineColorSwitched;u&&(t=u);var u=h.fillColorsR,y=h.fillColorsSwitched;y&&(u=y);var x=h.dashLength;(y=h.dashLengthSwitched)&&(x=y);var y=h.negativeLineColor,w=h.negativeFillColors,B=h.negativeFillAlphas,z=h.baseCoord;0!==h.negativeBase&&(z=h.valueAxis.getCoordinate(h.negativeBase,f),z>h.height&&(z=h.height),0>z&&(z=0));q=d.line(l,a,b,t,q,p,x,!1,!0,f);d.setCN(k,q,h.bcn+"stroke");m.push(q);m.click(function(a){h.handleGraphEvent(a,
"clickGraph")}).mouseover(function(a){h.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){h.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){h.chart.handleMouseMove(a)}).touchend(function(a){h.chart.handleTouchEnd(a)});void 0===y||h.useNegativeColorIfDown||(p=d.line(l,a,b,y,r,p,x,!1,!0,f),d.setCN(k,p,h.bcn+"stroke"),d.setCN(k,p,h.bcn+"stroke-negative"),n.push(p));if(0<g||0<B)if(p=a.join(";").split(";"),r=b.join(";").split(";"),q=k.type,"serial"==q||"radar"==q?0<c.length?(c.reverse(),
e.reverse(),p=a.concat(c),r=b.concat(e)):"radar"==q?(r.push(0),p.push(0)):h.rotate?(r.push(r[r.length-1]),p.push(z),r.push(r[0]),p.push(z),r.push(r[0]),p.push(p[0])):(p.push(p[p.length-1]),r.push(z),p.push(p[0]),r.push(z),p.push(a[0]),r.push(r[0])):"xy"==q&&(b=h.fillToAxis)&&(d.isString(b)&&(b=k.getValueAxisById(b)),"H"==b.orientation?(z="top"==b.position?0:b.height,p.push(p[p.length-1]),r.push(z),p.push(p[0]),r.push(z),p.push(a[0]),r.push(r[0])):(z="left"==b.position?0:b.width,r.push(r[r.length-
1]),p.push(z),r.push(r[0]),p.push(z),r.push(r[0]),p.push(p[0]))),a=h.gradientRotation,0<g&&(b=d.polygon(l,p,r,u,g,1,"#000",0,a,f),b.pattern(h.pattern,NaN,k.path),d.setCN(k,b,h.bcn+"fill"),m.push(b)),w||void 0!==y)isNaN(B)&&(B=g),w||(w=y),f=d.polygon(l,p,r,w,B,1,"#000",0,a,f),d.setCN(k,f,h.bcn+"fill"),d.setCN(k,f,h.bcn+"fill-negative"),f.pattern(h.pattern,NaN,k.path),n.push(f),n.click(function(a){h.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){h.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){h.handleGraphEvent(a,
"rollOutGraph")}).touchmove(function(a){h.chart.handleMouseMove(a)}).touchend(function(a){h.chart.handleTouchEnd(a)});h.applyMask(n,m)}},applyMask:function(a,b){var c=a.length();"serial"!=this.chart.type||this.scrollbar||(this.positiveClip(b),0<c&&this.negativeClip(a))},drawSmoothedGraph:function(a,b,c,e){if(1<a.length){var h=this.set,f=this.chart,g=this.container,k=g.set(),l=g.set();h.push(l);h.push(k);var m=this.lineAlpha,n=this.lineThickness,h=this.dashLength,q=this.fillAlphas,p=this.lineColorR,
t=this.fillColorsR,r=this.negativeLineColor,u=this.negativeFillColors,y=this.negativeFillAlphas,x=this.baseCoord,w=this.lineColorSwitched;w&&(p=w);(w=this.fillColorsSwitched)&&(t=w);w=this.negativeLineAlpha;isNaN(w)&&(w=m);m=new d.Bezier(g,a,b,p,m,n,t,0,h);d.setCN(f,m,this.bcn+"stroke");k.push(m.path);void 0!==r&&(n=new d.Bezier(g,a,b,r,w,n,t,0,h),d.setCN(f,n,this.bcn+"stroke"),d.setCN(f,n,this.bcn+"stroke-negative"),l.push(n.path));0<q&&(m=a.join(";").split(";"),p=b.join(";").split(";"),n="",0<c.length?
(c.push("M"),e.push("M"),c.reverse(),e.reverse(),m=a.concat(c),p=b.concat(e)):(this.rotate?(n+=" L"+x+","+b[b.length-1],n+=" L"+x+","+b[0]):(n+=" L"+a[a.length-1]+","+x,n+=" L"+a[0]+","+x),n+=" L"+a[0]+","+b[0]),c=new d.Bezier(g,m,p,NaN,0,0,t,q,h,n),d.setCN(f,c,this.bcn+"fill"),c.path.pattern(this.pattern,NaN,f.path),k.push(c.path),u||void 0!==r)&&(y||(y=q),u||(u=r),a=new d.Bezier(g,a,b,NaN,0,0,u,y,h,n),a.path.pattern(this.pattern,NaN,f.path),d.setCN(f,a,this.bcn+"fill"),d.setCN(f,a,this.bcn+"fill-negative"),
l.push(a.path));this.applyMask(l,k)}},launchAnimation:function(){var a=this,b=a.chart.startDuration;if(0<b&&!a.animationPlayed){var c=a.set,e=a.bulletSet;d.VML||(c.attr({opacity:a.startAlpha}),e.attr({opacity:a.startAlpha}));c.hide();e.hide();a.seqAn?(b=setTimeout(function(){a.animateGraphs.call(a)},a.index*b*1E3),a.timeOuts.push(b)):a.animateGraphs()}},animateGraphs:function(){var a=this.chart,b=this.set,c=this.bulletSet,e=this.x,d=this.y;b.show();c.show();var f=a.startDuration,g=a.startEffect;b&&
(this.rotate?(b.translate(-1E3,d),c.translate(-1E3,d)):(b.translate(e,-1E3),c.translate(e,-1E3)),b.animate({opacity:1,translate:e+","+d},f,g),c.animate({opacity:1,translate:e+","+d},f,g),a.animatable.push(b))},animate:function(a){var b=this.chart,c=this.animationArray;!a&&0<c.length&&(a=c[0],c.shift());c=d[d.getEffect(b.startEffect)];b=b.startDuration;a&&(this.rotate?a.animateWidth(b,c):a.animateHeight(b,c),a.set.show())},legendKeyColor:function(){var a=this.legendColor,b=this.lineAlpha;void 0===
a&&(a=this.lineColorR,0===b&&(b=this.fillColorsR)&&(a="object"==typeof b?b[0]:b));return a},legendKeyAlpha:function(){var a=this.legendAlpha;void 0===a&&(a=this.lineAlpha,this.fillAlphas>a&&(a=this.fillAlphas),0===a&&(a=this.bulletAlpha),0===a&&(a=1));return a},createBullet:function(a,b,c){if(!isNaN(b)&&!isNaN(c)&&("none"!=this.bullet||this.customBullet||a.bullet||a.customBullet)){var e=this.chart,h=this.container,f=this.bulletOffset,g=this.bulletSize;isNaN(a.bulletSize)||(g=a.bulletSize);var k=a.values.value,
l=this.maxValue,m=this.minValue,n=this.maxBulletSize,q=this.minBulletSize;isNaN(l)||(isNaN(k)||(g=(k-m)/(l-m)*(n-q)+q),m==l&&(g=n));l=g;this.bulletAxis&&(g=a.values.error,isNaN(g)||(k=g),g=this.bulletAxis.stepWidth*k);g<this.minBulletSize&&(g=this.minBulletSize);this.rotate?b=a.isNegative?b-f:b+f:c=a.isNegative?c+f:c-f;q=this.bulletColorR;a.lineColor&&(this.bulletColorSwitched=a.lineColor);this.bulletColorSwitched&&(q=this.bulletColorSwitched);a.isNegative&&void 0!==this.bulletColorNegative&&(q=this.bulletColorNegative);
void 0!==a.color&&(q=a.color);var p;"xy"==e.type&&this.valueField&&(p=this.pattern,a.pattern&&(p=a.pattern));f=this.bullet;a.bullet&&(f=a.bullet);var k=this.bulletBorderThickness,m=this.bulletBorderColorR,n=this.bulletBorderAlpha,t=this.bulletAlpha;m||(m=q);this.useLineColorForBulletBorder&&(m=this.lineColorR,this.lineColorSwitched&&(m=this.lineColorSwitched));var r=a.alpha;isNaN(r)||(t=r);p=d.bullet(h,f,g,q,t,k,m,n,l,0,p,e.path);l=this.customBullet;a.customBullet&&(l=a.customBullet);l&&(p&&p.remove(),
"function"==typeof l?(l=new l,l.chart=e,a.bulletConfig&&(l.availableSpace=c,l.graph=this,l.graphDataItem=a,l.bulletY=c,a.bulletConfig.minCoord=this.minCoord-c,l.bulletConfig=a.bulletConfig),l.write(h),p&&l.showBullet&&l.set.push(p),a.customBulletGraphics=l.cset,p=l.set):(p=h.set(),h=h.image(l,0,0,g,g),p.push(h),this.centerCustomBullets&&h.translate(-g/2,-g/2)));if(p){(a.url||this.showHandOnHover)&&p.setAttr("cursor","pointer");if("serial"==e.type||"gantt"==e.type)if(-.5>b||b>this.width||c<-g/2||c>
this.height)p.remove(),p=null;p&&(this.bulletSet.push(p),p.translate(b,c),this.addListeners(p,a),this.allBullets.push(p));a.bx=b;a.by=c;d.setCN(e,p,this.bcn+"bullet");a.className&&d.setCN(e,p,a.className,!0)}p?(p.size=g||0,a.bulletGraphics=p):p={size:0};p.graphDataItem=a;return p}},showBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!1;for(b=0;b<a.length;b++)a[b].show()},hideBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!0;for(b=0;b<a.length;b++)a[b].hide()},showCustomBullets:function(){var a=
this.allBullets,b;this.customBulletsHidden=!1;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c.customBulletGraphics&&c.customBulletGraphics.show()}},hideCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!0;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c.customBulletGraphics&&c.customBulletGraphics.hide()}},addListeners:function(a,b){var c=this;a.mouseover(function(a){c.handleRollOver(b,a)}).mouseout(function(a){c.handleRollOut(b,a)}).touchend(function(a){c.handleRollOver(b,
a);c.chart.panEventsEnabled&&c.handleClick(b,a)}).touchstart(function(a){c.handleRollOver(b,a)}).click(function(a){c.handleClick(b,a)}).dblclick(function(a){c.handleDoubleClick(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)})},handleRollOver:function(a,b){this.handleGraphEvent(b,"rollOverGraph");if(a){var c=this.chart,e={type:"rollOverGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);clearTimeout(c.hoverInt);(c=c.chartCursor)&&c.valueBalloonsEnabled||
this.showGraphBalloon(a,"V",!0)}},handleRollOut:function(a,b){if(a){var c={type:"rollOutGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}this.handleGraphEvent(b,"rollOutGraph");(c=this.chart.chartCursor)&&c.valueBalloonsEnabled||this.hideBalloon()},handleClick:function(a,b){if(a){var c={type:"clickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c);d.getURL(a.url,this.urlTarget)}this.handleGraphEvent(b,
"clickGraph")},handleGraphEvent:function(a,b){var c={type:b,graph:this,target:this,chart:this.chart,event:a};this.fire(c);this.chart.fire(c)},handleRightClick:function(a,b){if(a){var c={type:"rightClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},handleDoubleClick:function(a,b){if(a){var c={type:"doubleClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},zoom:function(a,
b){this.start=a;this.end=b;this.draw()},changeOpacity:function(a){var b=this.set;b&&b.setAttr("opacity",a);if(b=this.ownColumns){var c;for(c=0;c<b.length;c++){var e=b[c].set;e&&e.setAttr("opacity",a)}}(b=this.bulletSet)&&b.setAttr("opacity",a)},destroy:function(){d.remove(this.set);d.remove(this.bulletSet);var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},createBalloon:function(){var a=this.chart;this.balloon?this.balloon.destroy&&this.balloon.destroy():this.balloon=
{};var b=this.balloon;d.extend(b,a.balloon,!0);b.chart=a;b.mainSet=a.plotBalloonsSet},hideBalloon:function(){var a=this,b=a.chart;b.chartCursor?b.chartCursor.valueBalloonsEnabled||b.hideBalloon():b.hideBalloon();clearTimeout(a.hoverInt);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},b.hideBalloonTime)},hideBalloonReal:function(){this.balloon&&this.balloon.hide();this.fixBulletSize()},fixBulletSize:function(){if(d.isModern){var a=this.resizedDItem;if(a){var b=a.bulletGraphics;b&&!b.doNotScale&&
(b.translate(a.bx,a.by,1),b.setAttr("fill-opacity",this.bulletAlpha),b.setAttr("stroke-opacity",this.bulletBorderAlpha))}this.resizedDItem=null}},showGraphBalloon:function(a,b,c,e,h){var f=this.chart,g=this.balloon,k=0,l=0,m=f.chartCursor,n=!0;m?m.valueBalloonsEnabled||(g=f.balloon,k=this.x,l=this.y,n=!1):(g=f.balloon,k=this.x,l=this.y,n=!1);clearTimeout(this.hoverInt);f.chartCursor&&(this.currentDataItem=a);this.resizeBullet(a,e,h);if(g&&g.enabled&&this.showBalloon&&!this.hidden){var m=f.formatString(this.balloonText,
a,!0),q=this.balloonFunction;q&&(m=q(a,a.graph));m&&(m=d.cleanFromEmpty(m));m&&""!==m?(e=f.getBalloonColor(this,a),g.drop||(g.pointerOrientation=b),b=a.x,h=a.y,f.rotate&&(b=a.y,h=a.x),b+=k,h+=l,isNaN(b)||isNaN(h)?this.hideBalloonReal():(a=this.width,q=this.height,n&&g.setBounds(k,l,a+k,q+l),g.changeColor(e),g.setPosition(b,h),g.fixPrevious(),g.fixedPosition&&(c=!1),!c&&"radar"!=f.type&&(b<k||b>a+k||h<l||h>q+l)?(g.showBalloon(m),g.hide(0)):(g.followCursor(c),g.showBalloon(m)))):(this.hideBalloonReal(),
this.resizeBullet(a,e,h))}else this.hideBalloonReal()},resizeBullet:function(a,b,c){this.fixBulletSize();if(a&&d.isModern&&(1!=b||!isNaN(c))){var e=a.bulletGraphics;e&&!e.doNotScale&&(e.translate(a.bx,a.by,b),isNaN(c)||(e.setAttr("fill-opacity",c),e.setAttr("stroke-opacity",c)),this.resizedDItem=a)}}})})();(function(){var d=window.AmCharts;d.ChartCursor=d.Class({construct:function(a){this.cname="ChartCursor";this.createEvents("changed","zoomed","onHideCursor","onShowCursor","draw","selected","moved","panning","zoomStarted");this.enabled=!0;this.cursorAlpha=1;this.selectionAlpha=.2;this.cursorColor="#CC0000";this.categoryBalloonAlpha=1;this.color="#FFFFFF";this.type="cursor";this.zoomed=!1;this.zoomable=!0;this.pan=!1;this.categoryBalloonDateFormat="MMM DD, YYYY";this.categoryBalloonText="[[category]]";
this.categoryBalloonEnabled=this.valueBalloonsEnabled=!0;this.rolledOver=!1;this.cursorPosition="middle";this.bulletsEnabled=this.skipZoomDispatch=!1;this.bulletSize=8;this.selectWithoutZooming=this.oneBalloonOnly=!1;this.graphBulletSize=1.7;this.animationDuration=.3;this.zooming=!1;this.adjustment=0;this.avoidBalloonOverlapping=!0;this.leaveCursor=!1;this.leaveAfterTouch=!0;this.valueZoomable=!1;this.balloonPointerOrientation="horizontal";this.hLineEnabled=this.vLineEnabled=!0;this.vZoomEnabled=
this.hZoomEnabled=!1;d.applyTheme(this,a,this.cname)},draw:function(){this.destroy();var a=this.chart;a.panRequired=!0;var b=a.container;this.rotate=a.rotate;this.container=b;this.prevLineHeight=this.prevLineWidth=NaN;b=b.set();b.translate(this.x,this.y);this.set=b;a.cursorSet.push(b);this.createElements();d.isString(this.limitToGraph)&&(this.limitToGraph=d.getObjById(a.graphs,this.limitToGraph),this.fullWidth=!1,this.cursorPosition="middle");this.pointer=this.balloonPointerOrientation.substr(0,1).toUpperCase();
this.isHidden=!1;this.hideLines();this.valueLineAxis||(this.valueLineAxis=a.valueAxes[0])},createElements:function(){var a=this.chart,b=a.dx,c=a.dy,e=this.width,h=this.height,f,g,k=this.cursorAlpha;f=this.valueLineAlpha;this.rotate?g=k:(g=f,f=k);"xy"==a.type&&(f=g=k);this.vvLine=d.line(this.container,[b,0,0],[c,0,h],this.cursorColor,f,1);d.setCN(a,this.vvLine,"cursor-line");d.setCN(a,this.vvLine,"cursor-line-vertical");this.hhLine=d.line(this.container,[0,e,e+b],[0,0,c],this.cursorColor,g,1);d.setCN(a,
this.hhLine,"cursor-line");d.setCN(a,this.hhLine,"cursor-line-horizontal");this.vLine=this.rotate?this.vvLine:this.hhLine;this.set.push(this.vvLine);this.set.push(this.hhLine);this.set.node.style.pointerEvents="none";this.fullLines=this.container.set();a=a.cursorLineSet;a.push(this.fullLines);a.translate(this.x,this.y);a.clipRect(0,0,e,h);this.set.clipRect(0,0,e,h)},update:function(){var a=this.chart,b=a.mouseX-this.x,c=a.mouseY-this.y;this.mouseX=b;this.mouseY=c;this.mouse2X=a.mouse2X-this.x;this.mouse2Y=
a.mouse2Y-this.y;var e;if(a.chartData&&0<a.chartData.length){this.mouseIsOver()?(this.hideGraphBalloons=!1,this.rolledOver=e=!0,this.updateDrawing(),this.vvLine&&isNaN(this.fx)&&(a.rotate||!this.limitToGraph)&&this.vvLine.translate(b,0),!this.hhLine||!isNaN(this.fy)||a.rotate&&this.limitToGraph||this.hhLine.translate(0,c),isNaN(this.mouse2X)?this.dispatchMovedEvent(b,c):e=!1):this.forceShow||this.hideCursor();if(this.zooming){if(!isNaN(this.mouse2X)){isNaN(this.mouse2X0)||this.dispatchPanEvent();
return}if(this.pan){this.dispatchPanEvent();return}(this.hZoomEnabled||this.vZoomEnabled)&&this.zooming&&this.updateSelection()}e&&this.showCursor()}},updateDrawing:function(){this.drawing&&this.chart.setMouseCursor("crosshair");this.drawingNow&&(d.remove(this.drawingLine),this.drawingLine=d.line(this.container,[this.drawStartX,this.mouseX],[this.drawStartY,this.mouseY],this.cursorColor,1,1))},fixWidth:function(a){if(this.fullWidth&&this.prevLineWidth!=a){var b=this.vvLine,c=0;b&&(b.remove(),c=b.x);
b=this.container.set();b.translate(c,0);c=d.rect(this.container,a,this.height,this.cursorColor,this.cursorAlpha,0);d.setCN(this.chart,c,"cursor-fill");c.translate(-a/2,0);b.push(c);this.vvLine=b;this.fullLines.push(b);this.prevLineWidth=a}},fixHeight:function(a){if(this.fullWidth&&this.prevLineHeight!=a){var b=this.hhLine,c=0;b&&(b.remove(),c=b.y);b=this.container.set();b.translate(0,c);c=d.rect(this.container,this.width,a,this.cursorColor,this.cursorAlpha);c.translate(0,-a/2);b.push(c);this.fullLines.push(b);
this.hhLine=b;this.prevLineHeight=a}},fixVLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineX)){var c=0,e=this.mouseX;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate||(c="bottom"==d.position?this.height:-this.height),e=a)}this.vvLine.translate(e,c)}else this.prevLineX!=a&&this.vvLine.translate(this.prevLineX,this.prevLineY);this.fx=a;this.prevLineX!=a&&(c=this.animationDuration,this.zooming&&(c=0),this.vvLine.stop(),this.vvLine.animate({translate:a+","+b},c,"easeOutSine"),
this.prevLineX=a,this.prevLineY=b)}},fixHLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineY)){var c=0,e=this.mouseY;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate&&(c="right"==d.position?this.width:-this.width),e=a)}this.hhLine.translate(c,e)}else this.prevLineY!=a&&this.hhLine.translate(this.prevLineX,this.prevLineY);this.fy=a;this.prevLineY!=a&&(c=this.animationDuration,this.zooming&&(c=0),this.hhLine.stop(),this.hhLine.animate({translate:b+","+a},c,"easeOutSine"),
this.prevLineY=a,this.prevLineX=b)}},hideCursor:function(a){this.forceShow=!1;this.chart.wasTouched&&this.leaveAfterTouch||this.isHidden||this.leaveCursor||(this.hideLines(),this.isHidden=!0,this.index=this.prevLineY=this.prevLineX=this.mouseY0=this.mouseX0=this.fy=this.fx=NaN,a?this.chart.handleCursorHide():this.fire({target:this,chart:this.chart,type:"onHideCursor"}),this.chart.setMouseCursor("auto"))},hideLines:function(){this.vvLine&&this.vvLine.hide();this.hhLine&&this.hhLine.hide();this.fullLines&&
this.fullLines.hide();this.isHidden=!0;this.chart.handleCursorHide()},showCursor:function(a){this.drawing||(this.vLineEnabled&&this.vvLine&&this.vvLine.show(),this.hLineEnabled&&this.hhLine&&this.hhLine.show(),this.isHidden=!1,this.updateFullLine(),a||this.fire({target:this,chart:this.chart,type:"onShowCursor"}),this.pan&&this.chart.setMouseCursor("move"))},updateFullLine:function(){this.zooming&&this.fullWidth&&this.selection&&(this.rotate?0<this.selection.height&&this.hhLine.hide():0<this.selection.width&&
this.vvLine.hide())},updateSelection:function(){if(!this.pan){var a=this.mouseX,b=this.mouseY;isNaN(this.fx)||(a=this.fx);isNaN(this.fy)||(b=this.fy);this.clearSelection();var c=this.mouseX0,e=this.mouseY0,h=this.width,f=this.height,a=d.fitToBounds(a,0,h),b=d.fitToBounds(b,0,f),g;a<c&&(g=a,a=c,c=g);b<e&&(g=b,b=e,e=g);this.hZoomEnabled?h=a-c:c=0;this.vZoomEnabled?f=b-e:e=0;isNaN(this.mouse2X)&&0<Math.abs(h)&&0<Math.abs(f)&&(a=this.chart,b=d.rect(this.container,h,f,this.cursorColor,this.selectionAlpha),
d.setCN(a,b,"cursor-selection"),b.width=h,b.height=f,b.translate(c,e),this.set.push(b),this.selection=b);this.updateFullLine()}},mouseIsOver:function(){var a=this.mouseX,b=this.mouseY;if(this.justReleased)return this.justReleased=!1,!0;if(this.mouseIsDown)return!0;if(!this.chart.mouseIsOver)return this.handleMouseOut(),!1;if(0<a&&a<this.width&&0<b&&b<this.height)return!0;this.handleMouseOut()},fixPosition:function(){this.prevY=this.prevX=NaN},handleMouseDown:function(){this.update();if(this.mouseIsOver())if(this.mouseIsDown=
!0,this.mouseX0=this.mouseX,this.mouseY0=this.mouseY,this.mouse2X0=this.mouse2X,this.mouse2Y0=this.mouse2Y,this.drawing)this.drawStartY=this.mouseY,this.drawStartX=this.mouseX,this.drawingNow=!0;else if(this.dispatchMovedEvent(this.mouseX,this.mouseY),!this.pan&&isNaN(this.mouse2X0)&&(isNaN(this.fx)||(this.mouseX0=this.fx),isNaN(this.fy)||(this.mouseY0=this.fy)),this.hZoomEnabled||this.vZoomEnabled){this.zooming=!0;var a={chart:this.chart,target:this,type:"zoomStarted"};a.x=this.mouseX/this.width;
a.y=this.mouseY/this.height;this.index0=a.index=this.index;this.timestamp0=this.timestamp;this.fire(a)}},registerInitialMouse:function(){},handleReleaseOutside:function(){this.mouseIsDown=!1;if(this.drawingNow){this.drawingNow=!1;d.remove(this.drawingLine);var a=this.drawStartX,b=this.drawStartY,c=this.mouseX,e=this.mouseY,h=this.chart;(2<Math.abs(a-c)||2<Math.abs(b-e))&&this.fire({type:"draw",target:this,chart:h,initialX:a,initialY:b,finalX:c,finalY:e})}this.zooming&&(this.zooming=!1,this.selectWithoutZooming?
this.dispatchZoomEvent("selected"):(this.hZoomEnabled||this.vZoomEnabled)&&this.dispatchZoomEvent("zoomed"),this.rolledOver&&this.dispatchMovedEvent(this.mouseX,this.mouseY));this.mouse2Y0=this.mouse2X0=this.mouseY0=this.mouseX0=NaN},dispatchZoomEvent:function(a){if(!this.pan){var b=this.selection;if(b&&3<Math.abs(b.width)&&3<Math.abs(b.height)){var c=Math.min(this.index,this.index0),e=Math.max(this.index,this.index0),d=c,f=e,g=this.chart,k=g.chartData,l=g.categoryAxis;l&&l.parseDates&&!l.equalSpacing&&
(d=k[c]?k[c].time:Math.min(this.timestamp0,this.timestamp),f=k[e]?g.getEndTime(k[e].time):Math.max(this.timestamp0,this.timestamp));var b={type:a,chart:this.chart,target:this,end:f,start:d,startIndex:c,endIndex:e,selectionHeight:b.height,selectionWidth:b.width,selectionY:b.y,selectionX:b.x},m;this.hZoomEnabled&&4<Math.abs(this.mouseX0-this.mouseX)&&(b.startX=this.mouseX0/this.width,b.endX=this.mouseX/this.width,m=!0);this.vZoomEnabled&&4<Math.abs(this.mouseY0-this.mouseY)&&(b.startY=1-this.mouseY0/
this.height,b.endY=1-this.mouseY/this.height,m=!0);m&&(this.prevY=this.prevX=NaN,this.fire(b),"selected"!=a&&this.clearSelection());this.hideCursor()}}},dispatchMovedEvent:function(a,b,c,e){a=Math.round(a);b=Math.round(b);if(!this.isHidden&&(a!=this.prevX||b!=this.prevY||"changed"==c)){c||(c="moved");var d=this.fx,f=this.fy;isNaN(d)&&(d=a);isNaN(f)&&(f=b);var g=!1;this.zooming&&this.pan&&(g=!0);g={hidden:this.isHidden,type:c,chart:this.chart,target:this,x:a,y:b,finalX:d,finalY:f,zooming:this.zooming,
panning:g,mostCloseGraph:this.mostCloseGraph,index:this.index,skip:e,hideBalloons:this.hideGraphBalloons};this.rotate?(g.position=b,g.finalPosition=f):(g.position=a,g.finalPosition=d);this.prevX=a;this.prevY=b;e?this.chart.handleCursorMove(g):(this.fire(g),"changed"==c&&this.chart.fire(g))}},dispatchPanEvent:function(){if(this.mouseIsDown){var a=d.roundTo((this.mouseX-this.mouseX0)/this.width,3),b=d.roundTo((this.mouseY-this.mouseY0)/this.height,3),c=d.roundTo((this.mouse2X-this.mouse2X0)/this.width,
3),e=d.roundTo((this.mouse2Y-this.mouse2Y0)/this.height,2),h=!1;0!==Math.abs(a)&&0!==Math.abs(b)&&(h=!0);if(this.prevDeltaX==a||this.prevDeltaY==b)h=!1;isNaN(c)||isNaN(e)||(0!==Math.abs(c)&&0!==Math.abs(e)&&(h=!0),this.prevDelta2X!=c&&this.prevDelta2Y!=e)||(h=!1);h&&(this.hideLines(),this.fire({type:"panning",chart:this.chart,target:this,deltaX:a,deltaY:b,delta2X:c,delta2Y:e,index:this.index}),this.prevDeltaX=a,this.prevDeltaY=b,this.prevDelta2X=c,this.prevDelta2Y=e)}},clearSelection:function(){var a=
this.selection;a&&(a.width=0,a.height=0,a.remove())},destroy:function(){this.clear();d.remove(this.selection);this.selection=null;clearTimeout(this.syncTO);d.remove(this.set)},clear:function(){},setTimestamp:function(a){this.timestamp=a},setIndex:function(a,b){a!=this.index&&(this.index=a,b||this.isHidden||this.dispatchMovedEvent(this.mouseX,this.mouseY,"changed"))},handleMouseOut:function(){this.enabled&&this.rolledOver&&(this.leaveCursor||this.setIndex(void 0),this.forceShow=!1,this.hideCursor(),
this.rolledOver=!1)},showCursorAt:function(a){var b=this.chart.categoryAxis;b&&this.setPosition(b.categoryToCoordinate(a))},setPosition:function(a){var b=this.chart,c=b.categoryAxis;if(c){var e,d,f=c.coordinateToValue(a);c.showBalloonAt(f);this.forceShow=!0;c.stickBalloonToCategory?b.rotate?this.fixHLine(a,0):this.fixVLine(a,0):(this.showCursor(),b.rotate?this.hhLine.translate(0,a):this.vvLine.translate(a,0));b.rotate?e=a:d=a;this.dispatchMovedEvent(d,e);b.rotate?(this.vvLine&&this.vvLine.hide(),
this.hhLine&&this.hhLine.show()):(this.hhLine&&this.hhLine.hide(),this.vvLine&&this.vvLine.show());this.updateFullLine();this.isHidden=!1;this.dispatchMovedEvent(d,e,"moved",!0)}},enableDrawing:function(a){this.enabled=!a;this.hideCursor();this.drawing=a},syncWithCursor:function(a,b){clearTimeout(this.syncTO);a&&(a.isHidden?this.hideCursor(!0):this.syncWithCursorReal(a,b))},isZooming:function(a){this.zooming=a},syncWithCursorReal:function(a,b){var c=a.vvLine,e=a.hhLine;this.index=a.index;this.forceShow=
!0;this.zooming&&this.pan||this.showCursor(!0);this.hideGraphBalloons=b;this.justReleased=a.justReleased;this.zooming=a.zooming;this.index0=a.index0;this.mouseX0=a.mouseX0;this.mouseY0=a.mouseY0;this.mouse2X0=a.mouse2X0;this.mouse2Y0=a.mouse2Y0;this.timestamp0=a.timestamp0;this.prevDeltaX=a.prevDeltaX;this.prevDeltaY=a.prevDeltaY;this.prevDelta2X=a.prevDelta2X;this.prevDelta2Y=a.prevDelta2Y;this.fx=a.fx;this.fy=a.fy;this.index=a.index;a.zooming&&this.updateSelection();var d=a.mouseX,f=a.mouseY;this.rotate?
(d=NaN,this.vvLine&&this.vvLine.hide(),this.hhLine&&e&&(isNaN(a.fy)?this.hhLine.translate(0,a.mouseY):this.fixHLine(a.fy,0))):(f=NaN,this.hhLine&&this.hhLine.hide(),this.vvLine&&c&&(isNaN(a.fx)?this.vvLine.translate(a.mouseX,0):this.fixVLine(a.fx,0)));this.dispatchMovedEvent(d,f,"moved",!0)}})})();(function(){var d=window.AmCharts;d.SimpleChartScrollbar=d.Class({construct:function(a){this.createEvents("zoomed","zoomStarted","zoomEnded");this.backgroundColor="#D4D4D4";this.backgroundAlpha=1;this.selectedBackgroundColor="#EFEFEF";this.scrollDuration=this.selectedBackgroundAlpha=1;this.resizeEnabled=!0;this.hideResizeGrips=!1;this.scrollbarHeight=20;this.updateOnReleaseOnly=!1;9>document.documentMode&&(this.updateOnReleaseOnly=!0);this.dragIconHeight=this.dragIconWidth=35;this.dragIcon="dragIconRoundBig";
this.enabled=!0;this.percentStart=this.offset=0;this.percentEnd=1;d.applyTheme(this,a,"SimpleChartScrollbar")},draw:function(){var a=this;a.destroy();if(a.enabled){var b=a.chart.container,c=a.rotate,e=a.chart;e.panRequired=!0;var h=b.set();a.set=h;e.scrollbarsSet.push(h);var f,g;c?(f=a.scrollbarHeight,g=e.plotAreaHeight):(g=a.scrollbarHeight,f=e.plotAreaWidth);a.width=f;if((a.height=g)&&f){var k=d.rect(b,f,g,a.backgroundColor,a.backgroundAlpha,1,a.backgroundColor,a.backgroundAlpha);d.setCN(e,k,"scrollbar-bg");
a.bg=k;h.push(k);k=d.rect(b,f,g,"#000",.005);h.push(k);a.invisibleBg=k;k.click(function(){a.handleBgClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()}).touchend(function(){a.handleBgClick()});k=d.rect(b,f,g,a.selectedBackgroundColor,a.selectedBackgroundAlpha);d.setCN(e,k,"scrollbar-bg-selected");a.selectedBG=k;h.push(k);f=d.rect(b,f,g,"#000",.005);a.dragger=f;h.push(f);f.mousedown(function(b){a.handleDragStart(b)}).mouseup(function(){a.handleDragStop()}).mouseover(function(){a.handleDraggerOver()}).mouseout(function(){a.handleMouseOut()}).touchstart(function(b){a.handleDragStart(b)}).touchend(function(){a.handleDragStop()});
f=e.pathToImages;g=a.dragIcon.replace(/\.[a-z]*$/i,"");c?(k=f+g+"H"+e.extension,f=a.dragIconWidth,c=a.dragIconHeight):(k=f+g+e.extension,c=a.dragIconWidth,f=a.dragIconHeight);g=b.image(k,0,0,c,f);d.setCN(e,g,"scrollbar-grip-left");k=b.image(k,0,0,c,f);d.setCN(e,k,"scrollbar-grip-right");var l=10,m=20;e.panEventsEnabled&&(l=25,m=a.scrollbarHeight);var n=d.rect(b,l,m,"#000",.005),q=d.rect(b,l,m,"#000",.005);q.translate(-(l-c)/2,-(m-f)/2);n.translate(-(l-c)/2,-(m-f)/2);c=b.set([g,q]);b=b.set([k,n]);
a.iconLeft=c;h.push(a.iconLeft);a.iconRight=b;h.push(b);c.mousedown(function(){a.leftDragStart()}).mouseup(function(){a.leftDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.leftDragStart()}).touchend(function(){a.leftDragStop()});b.mousedown(function(){a.rightDragStart()}).mouseup(function(){a.rightDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.rightDragStart()}).touchend(function(){a.rightDragStop()});
d.ifArray(e.chartData)?h.show():h.hide();a.hideDragIcons();a.clipDragger(!1)}h.translate(a.x,a.y);h.node.style.msTouchAction="none";h.node.style.touchAction="none"}},updateScrollbarSize:function(a,b){if(!isNaN(a)&&!isNaN(b)){a=Math.round(a);b=Math.round(b);var c=this.dragger,e,d,f,g,k;this.rotate?(e=0,d=a,f=this.width+1,g=b-a,c.setAttr("height",b-a),c.setAttr("y",d)):(e=a,d=0,f=b-a,g=this.height+1,k=b-a,c.setAttr("x",e),c.setAttr("width",k));this.clipAndUpdate(e,d,f,g)}},update:function(){var a,b=
!1,c,e,d=this.x,f=this.y,g=this.dragger,k=this.getDBox();if(k){c=k.x+d;e=k.y+f;var l=k.width,k=k.height,m=this.rotate,n=this.chart,q=this.width,p=this.height,t=n.mouseX,r=n.mouseY;a=this.initialMouse;this.forceClip&&this.clipDragger(!0);n.mouseIsOver&&(this.dragging&&(n=this.initialCoord,m?(a=n+(r-a),0>a&&(a=0),n=p-k,a>n&&(a=n),g.setAttr("y",a)):(a=n+(t-a),0>a&&(a=0),n=q-l,a>n&&(a=n),g.setAttr("x",a)),this.clipDragger(!0)),this.resizingRight&&(m?(a=r-e,a+e>p+f&&(a=p-e+f),0>a?(this.resizingRight=!1,
b=this.resizingLeft=!0):(0===a&&(a=.1),g.setAttr("height",a))):(a=t-c,a+c>q+d&&(a=q-c+d),0>a?(this.resizingRight=!1,b=this.resizingLeft=!0):(0===a&&(a=.1),g.setAttr("width",a))),this.clipDragger(!0)),this.resizingLeft&&(m?(c=e,e=r,e<f&&(e=f),e>p+f&&(e=p+f),a=!0===b?c-e:k+c-e,0>a?(this.resizingRight=!0,this.resizingLeft=!1,g.setAttr("y",c+k-f)):(0===a&&(a=.1),g.setAttr("y",e-f),g.setAttr("height",a))):(e=t,e<d&&(e=d),e>q+d&&(e=q+d),a=!0===b?c-e:l+c-e,0>a?(this.resizingRight=!0,this.resizingLeft=!1,
g.setAttr("x",c+l-d)):(0===a&&(a=.1),g.setAttr("x",e-d),g.setAttr("width",a))),this.clipDragger(!0)))}},stopForceClip:function(){this.animating=this.forceClip=!1},clipDragger:function(a){var b=this.getDBox();if(b){var c=b.x,d=b.y,h=b.width,b=b.height,f=!1;if(this.rotate){if(c=0,h=this.width+1,this.clipY!=d||this.clipH!=b)f=!0}else if(d=0,b=this.height+1,this.clipX!=c||this.clipW!=h)f=!0;f&&(this.clipAndUpdate(c,d,h,b),a&&(this.updateOnReleaseOnly||this.dispatchScrollbarEvent()))}},maskGraphs:function(){},
clipAndUpdate:function(a,b,c,d){this.clipX=a;this.clipY=b;this.clipW=c;this.clipH=d;this.selectedBG.setAttr("width",c);this.selectedBG.setAttr("height",d);this.selectedBG.translate(a,b);this.updateDragIconPositions();this.maskGraphs(a,b,c,d)},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart;a.hideBalloon();var b=this.getDBox(),c=b.x,d=b.y,h=b.width,f=b.height,g,k;this.rotate?(b=d,g=this.height/f,k=1-d/this.height,c=1-(d+f)/this.height):(b=c,g=this.width/
h,k=c/this.width,c=(c+h)/this.width);this.fire({type:"zoomed",position:b,chart:a,target:this,multiplier:g,relativeStart:c,relativeEnd:k})}},updateDragIconPositions:function(){var a=this.getDBox(),b=a.x,c=a.y,d=this.iconLeft,h=this.iconRight,f,g,k=this.scrollbarHeight;this.rotate?(f=this.dragIconWidth,g=this.dragIconHeight,d.translate((k-g)/2,c-f/2),h.translate((k-g)/2,c+a.height-f/2)):(f=this.dragIconHeight,g=this.dragIconWidth,d.translate(b-g/2,(k-f)/2),h.translate(b-g/2+a.width,(k-f)/2))},showDragIcons:function(){this.resizeEnabled&&
(this.iconLeft.show(),this.iconRight.show())},hideDragIcons:function(){if(!this.resizingLeft&&!this.resizingRight&&!this.dragging){if(this.hideResizeGrips||!this.resizeEnabled)this.iconLeft.hide(),this.iconRight.hide();this.removeCursors()}},removeCursors:function(){this.chart.setMouseCursor("auto")},fireZoomEvent:function(a){this.fire({type:a,chart:this.chart,target:this})},percentZoom:function(a,b){if(this.dragger&&this.enabled){this.dragger.stop();isNaN(a)&&(a=0);isNaN(b)&&(b=1);var c,d,h;this.rotate?
(c=this.height,d=c-c*b,h=c-c*a):(c=this.width,h=c*b,d=c*a);this.updateScrollbarSize(d,h);this.clipDragger(!1);this.percentStart=a;this.percentEnd=b}},destroy:function(){this.clear();d.remove(this.set);d.remove(this.iconRight);d.remove(this.iconLeft)},clear:function(){},handleDragStart:function(){if(this.enabled){this.fireZoomEvent("zoomStarted");var a=this.chart;this.dragger.stop();this.removeCursors();this.dragging=!0;var b=this.getDBox();this.rotate?(this.initialCoord=b.y,this.initialMouse=a.mouseY):
(this.initialCoord=b.x,this.initialMouse=a.mouseX)}},handleDragStop:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent());this.dragging=!1;this.mouseIsOver&&this.removeCursors();this.update();this.fireZoomEvent("zoomEnded")},handleDraggerOver:function(){this.handleMouseOver()},leftDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingLeft=!0},leftDragStop:function(){this.resizingLeft=!1;this.mouseIsOver||this.removeCursors();
this.updateOnRelease();this.fireZoomEvent("zoomEnded")},rightDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingRight=!0},rightDragStop:function(){this.resizingRight=!1;this.mouseIsOver||this.removeCursors();this.updateOnRelease();this.fireZoomEvent("zoomEnded")},iconRollOut:function(){this.removeCursors()},iconRollOver:function(){this.rotate?this.chart.setMouseCursor("ns-resize"):this.chart.setMouseCursor("ew-resize");this.handleMouseOver()},getDBox:function(){if(this.dragger)return this.dragger.getBBox()},
handleBgClick:function(){var a=this;if(!a.resizingRight&&!a.resizingLeft){a.zooming=!0;var b,c,e=a.scrollDuration,h=a.dragger;b=a.getDBox();var f=b.height,g=b.width;c=a.chart;var k=a.y,l=a.x,m=a.rotate;m?(b="y",c=c.mouseY-f/2-k,c=d.fitToBounds(c,0,a.height-f)):(b="x",c=c.mouseX-g/2-l,c=d.fitToBounds(c,0,a.width-g));a.updateOnReleaseOnly?(a.skipEvent=!1,h.setAttr(b,c),a.dispatchScrollbarEvent(),a.clipDragger()):(a.animating=!0,c=Math.round(c),m?h.animate({y:c},e,">"):h.animate({x:c},e,">"),a.forceClip=
!0,clearTimeout(a.forceTO),a.forceTO=setTimeout(function(){a.stopForceClip.call(a)},5E3*e))}},updateOnRelease:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent())},handleReleaseOutside:function(){if(this.set){if(this.resizingLeft||this.resizingRight||this.dragging)this.updateOnRelease(),this.removeCursors();this.animating=this.mouseIsOver=this.dragging=this.resizingRight=this.resizingLeft=!1;this.hideDragIcons();this.update()}},handleMouseOver:function(){this.mouseIsOver=
!0;this.showDragIcons()},handleMouseOut:function(){this.mouseIsOver=!1;this.hideDragIcons()}})})();(function(){var d=window.AmCharts;d.ChartScrollbar=d.Class({inherits:d.SimpleChartScrollbar,construct:function(a){this.cname="ChartScrollbar";d.ChartScrollbar.base.construct.call(this,a);this.graphLineColor="#BBBBBB";this.graphLineAlpha=0;this.graphFillColor="#BBBBBB";this.graphFillAlpha=1;this.selectedGraphLineColor="#888888";this.selectedGraphLineAlpha=0;this.selectedGraphFillColor="#888888";this.selectedGraphFillAlpha=1;this.gridCount=0;this.gridColor="#FFFFFF";this.gridAlpha=.7;this.skipEvent=
this.autoGridCount=!1;this.color="#FFFFFF";this.scrollbarCreated=!1;this.oppositeAxis=!0;d.applyTheme(this,a,this.cname)},init:function(){var a=this.categoryAxis,b=this.chart,c=this.gridAxis;a||("CategoryAxis"==this.gridAxis.cname?(this.catScrollbar=!0,a=new d.CategoryAxis,a.id="scrollbar"):(a=new d.ValueAxis,a.data=b.chartData,a.id=c.id,a.type=c.type,a.maximumDate=c.maximumDate,a.minimumDate=c.minimumDate,a.minPeriod=c.minPeriod),this.categoryAxis=a);a.chart=b;a.dateFormats=c.dateFormats;a.markPeriodChange=
c.markPeriodChange;a.boldPeriodBeginning=c.boldPeriodBeginning;a.labelFunction=c.labelFunction;a.axisItemRenderer=d.RecItem;a.axisRenderer=d.RecAxis;a.guideFillRenderer=d.RecFill;a.inside=!0;a.fontSize=this.fontSize;a.tickLength=0;a.axisAlpha=0;d.isString(this.graph)&&(this.graph=d.getObjById(b.graphs,this.graph));(a=this.graph)&&this.catScrollbar&&(c=this.valueAxis,c||(this.valueAxis=c=new d.ValueAxis,c.visible=!1,c.scrollbar=!0,c.axisItemRenderer=d.RecItem,c.axisRenderer=d.RecAxis,c.guideFillRenderer=
d.RecFill,c.labelsEnabled=!1,c.chart=b),b=this.unselectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.unselectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers),b=this.selectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.selectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers));this.scrollbarCreated=!0},draw:function(){var a=this;d.ChartScrollbar.base.draw.call(a);if(a.enabled){a.scrollbarCreated||a.init();var b=a.chart,c=b.chartData,e=a.categoryAxis,h=a.rotate,
f=a.x,g=a.y,k=a.width,l=a.height,m=a.gridAxis,n=a.set;e.setOrientation(!h);e.parseDates=m.parseDates;"ValueAxis"==a.categoryAxis.cname&&(e.rotate=!h);e.equalSpacing=m.equalSpacing;e.minPeriod=m.minPeriod;e.startOnAxis=m.startOnAxis;e.width=k-1;e.height=l;e.gridCount=a.gridCount;e.gridColor=a.gridColor;e.gridAlpha=a.gridAlpha;e.color=a.color;e.tickLength=0;e.axisAlpha=0;e.autoGridCount=a.autoGridCount;e.parseDates&&!e.equalSpacing&&e.timeZoom(b.firstTime,b.lastTime);e.minimum=a.gridAxis.fullMin;e.maximum=
a.gridAxis.fullMax;e.strictMinMax=!0;e.zoom(0,c.length-1);if((m=a.graph)&&a.catScrollbar){var q=a.valueAxis,p=m.valueAxis;q.id=p.id;q.rotate=h;q.setOrientation(h);q.width=k;q.height=l;q.dataProvider=c;q.reversed=p.reversed;q.logarithmic=p.logarithmic;q.gridAlpha=0;q.axisAlpha=0;n.push(q.set);h?(q.y=g,q.x=0):(q.x=f,q.y=0);var f=Infinity,g=-Infinity,t;for(t=0;t<c.length;t++){var r=c[t].axes[p.id].graphs[m.id].values,u;for(u in r)if(r.hasOwnProperty(u)&&"percents"!=u&&"total"!=u){var y=r[u];y<f&&(f=
y);y>g&&(g=y)}}Infinity!=f&&(q.minimum=f);-Infinity!=g&&(q.maximum=g+.1*(g-f));f==g&&(--q.minimum,q.maximum+=1);void 0!==a.minimum&&(q.minimum=a.minimum);void 0!==a.maximum&&(q.maximum=a.maximum);q.zoom(0,c.length-1);u=a.unselectedGraph;u.id=m.id;u.bcn="scrollbar-graph-";u.rotate=h;u.chart=b;u.data=c;u.valueAxis=q;u.chart=m.chart;u.categoryAxis=a.categoryAxis;u.periodSpan=m.periodSpan;u.valueField=m.valueField;u.openField=m.openField;u.closeField=m.closeField;u.highField=m.highField;u.lowField=m.lowField;
u.lineAlpha=a.graphLineAlpha;u.lineColorR=a.graphLineColor;u.fillAlphas=a.graphFillAlpha;u.fillColorsR=a.graphFillColor;u.connect=m.connect;u.hidden=m.hidden;u.width=k;u.height=l;u.pointPosition=m.pointPosition;u.stepDirection=m.stepDirection;u.periodSpan=m.periodSpan;p=a.selectedGraph;p.id=m.id;p.bcn=u.bcn+"selected-";p.rotate=h;p.chart=b;p.data=c;p.valueAxis=q;p.chart=m.chart;p.categoryAxis=e;p.periodSpan=m.periodSpan;p.valueField=m.valueField;p.openField=m.openField;p.closeField=m.closeField;p.highField=
m.highField;p.lowField=m.lowField;p.lineAlpha=a.selectedGraphLineAlpha;p.lineColorR=a.selectedGraphLineColor;p.fillAlphas=a.selectedGraphFillAlpha;p.fillColorsR=a.selectedGraphFillColor;p.connect=m.connect;p.hidden=m.hidden;p.width=k;p.height=l;p.pointPosition=m.pointPosition;p.stepDirection=m.stepDirection;p.periodSpan=m.periodSpan;b=a.graphType;b||(b=m.type);u.type=b;p.type=b;c=c.length-1;u.zoom(0,c);p.zoom(0,c);p.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});
u.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});n.push(u.set);n.push(p.set)}n.push(e.set);n.push(e.labelsSet);a.bg.toBack();a.invisibleBg.toFront();a.dragger.toFront();a.iconLeft.toFront();a.iconRight.toFront()}},timeZoom:function(a,b,c){this.startTime=a;this.endTime=b;this.timeDifference=b-a;this.skipEvent=!d.toBoolean(c);this.zoomScrollbar();this.skipEvent||this.dispatchScrollbarEvent()},zoom:function(a,b){this.start=
a;this.end=b;this.skipEvent=!0;this.zoomScrollbar()},dispatchScrollbarEvent:function(){if("ValueAxis"==this.categoryAxis.cname)d.ChartScrollbar.base.dispatchScrollbarEvent.call(this);else if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart.chartData,b,c,e=this.dragger.getBBox();b=e.x;var h=e.y,f=e.width,e=e.height,g=this.chart;this.rotate?(b=h,c=e):c=f;f={type:"zoomed",target:this};f.chart=g;var k=this.categoryAxis,l=this.stepWidth,h=g.minSelectedTime,e=!1;if(k.parseDates&&!k.equalSpacing){if(a=
g.lastTime,g=g.firstTime,k=Math.round(b/l)+g,b=this.dragging?k+this.timeDifference:Math.round((b+c)/l)+g,k>b&&(k=b),0<h&&b-k<h&&(b=Math.round(k+(b-k)/2),e=Math.round(h/2),k=b-e,b+=e,e=!0),b>a&&(b=a),b-h<k&&(k=b-h),k<g&&(k=g),k+h>b&&(b=k+h),k!=this.startTime||b!=this.endTime)this.startTime=k,this.endTime=b,f.start=k,f.end=b,f.startDate=new Date(k),f.endDate=new Date(b),this.fire(f)}else if(k.startOnAxis||(b+=l/2),c-=this.stepWidth/2,h=k.xToIndex(b),b=k.xToIndex(b+c),h!=this.start||this.end!=b)k.startOnAxis&&
(this.resizingRight&&h==b&&b++,this.resizingLeft&&h==b&&(0<h?h--:b=1)),this.start=h,this.end=this.dragging?this.start+this.difference:b,f.start=this.start,f.end=this.end,k.parseDates&&(a[this.start]&&(f.startDate=new Date(a[this.start].time)),a[this.end]&&(f.endDate=new Date(a[this.end].time))),this.fire(f);e&&this.zoomScrollbar()}},zoomScrollbar:function(){if(!(this.dragging||this.resizingLeft||this.resizingRight||this.animating)&&this.dragger&&this.enabled){var a,b;a=this.chart;var c=a.chartData,
d=this.categoryAxis;d.parseDates&&!d.equalSpacing?(c=d.stepWidth,d=a.firstTime,a=c*(this.startTime-d),b=c*(this.endTime-d)):(a=c[this.start].x[d.id],b=c[this.end].x[d.id],c=d.stepWidth,d.startOnAxis||(d=c/2,a-=d,b+=d));this.stepWidth=c;this.updateScrollbarSize(a,b)}},maskGraphs:function(a,b,c,d){var h=this.selectedGraph;h&&h.set.clipRect(a,b,c,d)},handleDragStart:function(){d.ChartScrollbar.base.handleDragStart.call(this);this.difference=this.end-this.start;this.timeDifference=this.endTime-this.startTime;
0>this.timeDifference&&(this.timeDifference=0)},handleBackgroundClick:function(){d.ChartScrollbar.base.handleBackgroundClick.call(this);this.dragging||(this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&(this.timeDifference=0))}})})();(function(){var d=window.AmCharts;d.AmBalloon=d.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maxWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor=
"#000000";this.fadeOutDuration=this.animationDuration=.3;this.fixedPosition=!0;this.offsetY=6;this.offsetX=1;this.textAlign="center";this.disableMouseEvents=!0;this.deltaSignX=this.deltaSignY=1;d.isModern||(this.offsetY*=1.5);this.sdy=this.sdx=0;d.applyTheme(this,a,this.cname)},draw:function(){var a=this.pointToX,b=this.pointToY;d.isModern||(this.drop=!1);var c=this.chart;d.VML&&(this.fadeOutDuration=0);this.xAnim&&c.stopAnim(this.xAnim);this.yAnim&&c.stopAnim(this.yAnim);this.sdy=this.sdx=0;if(!isNaN(a)){var e=
this.follow,h=c.container,f=this.set;d.remove(f);this.removeDiv();f=h.set();f.node.style.pointerEvents="none";this.set=f;this.mainSet?(this.mainSet.push(this.set),this.sdx=this.mainSet.x,this.sdy=this.mainSet.y):c.balloonsSet.push(f);if(this.show){var g=this.l,k=this.t,l=this.r,m=this.b,n=this.balloonColor,q=this.fillColor,p=this.borderColor,t=q;void 0!=n&&(this.adjustBorderColor?t=p=n:q=n);var r=this.horizontalPadding,u=this.verticalPadding,y=this.pointerWidth,x=this.pointerOrientation,w=this.cornerRadius,
B=c.fontFamily,z=this.fontSize;void 0==z&&(z=c.fontSize);var n=document.createElement("div"),A=c.classNamePrefix;n.className=A+"-balloon-div";this.className&&(n.className=n.className+" "+A+"-balloon-div-"+this.className);A=n.style;this.disableMouseEvents&&(A.pointerEvents="none");A.position="absolute";var C=this.minWidth,D="";isNaN(C)||(D="min-width:"+(C-2*r)+"px; ");n.innerHTML='<div style="text-align:'+this.textAlign+"; "+D+"max-width:"+this.maxWidth+"px; font-size:"+z+"px; color:"+this.color+"; font-family:"+
B+'">'+this.text+"</div>";c.chartDiv.appendChild(n);this.textDiv=n;var J=n.offsetWidth,H=n.offsetHeight;n.clientHeight&&(J=n.clientWidth,H=n.clientHeight);B=H+2*u;D=J+2*r;!isNaN(C)&&D<C&&(D=C);window.opera&&(B+=2);var R=!1,z=this.offsetY;c.handDrawn&&(z+=c.handDrawScatter+2);"H"!=x?(C=a-D/2,b<k+B+10&&"down"!=x?(R=!0,e&&(b+=z),z=b+y,this.deltaSignY=-1):(e&&(b-=z),z=b-B-y,this.deltaSignY=1)):(2*y>B&&(y=B/2),z=b-B/2,a<g+(l-g)/2?(C=a+y,this.deltaSignX=-1):(C=a-D-y,this.deltaSignX=1));z+B>=m&&(z=m-B);
z<k&&(z=k);C<g&&(C=g);C+D>l&&(C=l-D);var k=z+u,m=C+r,L=this.shadowAlpha,P=this.shadowColor,r=this.borderThickness,ia=this.bulletSize,I,u=this.fillAlpha,Z=this.borderAlpha;this.showBullet&&(I=d.circle(h,ia,t,u),f.push(I));this.drop?(g=D/1.6,l=0,"V"==x&&(x="down"),"H"==x&&(x="left"),"down"==x&&(C=a+1,z=b-g-g/3),"up"==x&&(l=180,C=a+1,z=b+g+g/3),"left"==x&&(l=270,C=a+g+g/3+2,z=b),"right"==x&&(l=90,C=a-g-g/3+2,z=b),k=z-H/2+1,m=C-J/2-1,q=d.drop(h,g,l,q,u,r,p,Z)):0<w||0===y?(0<L&&(a=d.rect(h,D,B,q,0,r+1,
P,L,w),d.isModern?a.translate(1,1):a.translate(4,4),f.push(a)),q=d.rect(h,D,B,q,u,r,p,Z,w)):(t=[],w=[],"H"!=x?(g=a-C,g>D-y&&(g=D-y),g<y&&(g=y),t=[0,g-y,a-C,g+y,D,D,0,0],w=R?[0,0,b-z,0,0,B,B,0]:[B,B,b-z,B,B,0,0,B]):(x=b-z,x>B-y&&(x=B-y),x<y&&(x=y),w=[0,x-y,b-z,x+y,B,B,0,0],t=a<g+(l-g)/2?[0,0,C<a?0:a-C,0,0,D,D,0]:[D,D,C+D>a?D:a-C,D,D,0,0,D]),0<L&&(a=d.polygon(h,t,w,q,0,r,P,L),a.translate(1,1),f.push(a)),q=d.polygon(h,t,w,q,u,r,p,Z));this.bg=q;f.push(q);q.toFront();d.setCN(c,q,"balloon-bg");this.className&&
d.setCN(c,q,"balloon-bg-"+this.className);h=1*this.deltaSignX;m+=this.sdx;k+=this.sdy;A.left=m+"px";A.top=k+"px";f.translate(C-h,z,1,!0);q=q.getBBox();this.bottom=z+B+1;this.yPos=q.y+z;I&&I.translate(this.pointToX-C+h,b-z);b=this.animationDuration;0<this.animationDuration&&!e&&!isNaN(this.prevX)&&(f.translate(this.prevX,this.prevY,NaN,!0),f.animate({translate:C-h+","+z},b,"easeOutSine"),n&&(A.left=this.prevTX+"px",A.top=this.prevTY+"px",this.xAnim=c.animate({node:n},"left",this.prevTX,m,b,"easeOutSine",
"px"),this.yAnim=c.animate({node:n},"top",this.prevTY,k,b,"easeOutSine","px")));this.prevX=C-h;this.prevY=z;this.prevTX=m;this.prevTY=k}}},fixPrevious:function(){this.rPrevX=this.prevX;this.rPrevY=this.prevY;this.rPrevTX=this.prevTX;this.rPrevTY=this.prevTY},restorePrevious:function(){this.prevX=this.rPrevX;this.prevY=this.rPrevY;this.prevTX=this.rPrevTX;this.prevTY=this.rPrevTY},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX-this.offsetX*this.deltaSignX-this.sdx,b=this.chart.mouseY-
this.sdy;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0===this.cornerRadius)this.draw();else{var c=this.set;if(c){var d=c.getBBox(),a=a-d.width/2,h=b-d.height-10;a<this.l&&(a=this.l);a>this.r-d.width&&(a=this.r-d.width);h<this.t&&(h=b+10);c.translate(a,h);b=this.textDiv.style;b.left=a+this.horizontalPadding+"px";b.top=h+this.verticalPadding+"px"}}}},changeColor:function(a){this.balloonColor=a},setBounds:function(a,b,c,d){this.l=a;this.t=
b;this.r=c;this.b=d;this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(a){if(this.text!=a||this.positionChanged)this.text=a,this.isHiding=!1,this.show=!0,this.destroyTO&&clearTimeout(this.destroyTO),a=this.chart,this.fadeAnim1&&a.stopAnim(this.fadeAnim1),this.fadeAnim2&&a.stopAnim(this.fadeAnim2),this.draw(),this.positionChanged=!1},hide:function(a){var b=this;b.text=void 0;isNaN(a)&&(a=b.fadeOutDuration);var c=b.chart;if(0<a&&!b.isHiding){b.isHiding=!0;b.destroyTO&&clearTimeout(b.destroyTO);
b.destroyTO=setTimeout(function(){b.destroy.call(b)},1E3*a);b.follow=!1;b.show=!1;var d=b.set;d&&(d.setAttr("opacity",b.fillAlpha),b.fadeAnim1=d.animate({opacity:0},a,"easeInSine"));b.textDiv&&(b.fadeAnim2=c.animate({node:b.textDiv},"opacity",1,0,a,"easeInSine",""))}else b.show=!1,b.follow=!1,b.destroy()},setPosition:function(a,b){if(a!=this.pointToX||b!=this.pointToY)this.previousX=this.pointToX,this.previousY=this.pointToY,this.pointToX=a,this.pointToY=b,this.positionChanged=!0},followCursor:function(a){var b=
this;b.follow=a;clearInterval(b.interval);var c=b.chart.mouseX-b.sdx,d=b.chart.mouseY-b.sdy;!isNaN(c)&&a&&(b.pointToX=c-b.offsetX*b.deltaSignX,b.pointToY=d,b.followMouse(),b.interval=setInterval(function(){b.followMouse.call(b)},40))},removeDiv:function(){if(this.textDiv){var a=this.textDiv.parentNode;a&&a.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval);d.remove(this.set);this.removeDiv();this.set=null}})})();(function(){var d=window.AmCharts;d.AmCoordinateChart=d.Class({inherits:d.AmChart,construct:function(a){d.AmCoordinateChart.base.construct.call(this,a);this.theme=a;this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.startAlpha=1;this.startDuration=0;this.startEffect="elastic";this.sequencedAnimation=!0;this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" ");
this.balloonDateFormat="MMM DD, YYYY";this.valueAxes=[];this.graphs=[];this.guides=[];this.gridAboveGraphs=!1;d.applyTheme(this,a,"AmCoordinateChart")},initChart:function(){d.AmCoordinateChart.base.initChart.call(this);this.drawGraphs=!0;var a=this.categoryAxis;a&&(this.categoryAxis=d.processObject(a,d.CategoryAxis,this.theme));this.processValueAxes();this.createValueAxes();this.processGraphs();this.processGuides();d.VML&&(this.startAlpha=1);this.setLegendData(this.graphs);this.gridAboveGraphs&&this.gridSet.toFront()},
createValueAxes:function(){if(0===this.valueAxes.length){var a=new d.ValueAxis;this.addValueAxis(a)}},parseData:function(){this.processValueAxes();this.processGraphs()},parseSerialData:function(a){this.chartData=[];if(a)if(0<this.processTimeout){var b=a.length/this.processCount;this.parseCount=Math.ceil(b)-1;for(var c=0;c<b;c++)this.delayParseSerialData(a,c)}else this.parseCount=0,this.parsePartSerialData(a,0,a.length,0);else this.onDataUpdated()},delayParseSerialData:function(a,b){var c=this,d=c.processCount;
setTimeout(function(){c.parsePartSerialData.call(c,a,b*d,(b+1)*d,b)},c.processTimeout)},parsePartSerialData:function(a,b,c,e){c>a.length&&(c=a.length);var h=this.graphs,f={},g=this.seriesIdField;g||(g=this.categoryField);var k=!1,l,m=this.categoryAxis,n,q,p;m&&(k=m.parseDates,n=m.forceShowField,p=m.classNameField,q=m.labelColorField,l=m.categoryFunction);var t,r,u={},y;k&&(t=d.extractPeriod(m.minPeriod),r=t.period,t=t.count,y=d.getPeriodDuration(r,t));var x={};this.lookupTable=x;var w,B=this.dataDateFormat,
z={};for(w=b;w<c;w++){var A={},C=a[w];b=C[this.categoryField];A.dataContext=C;A.category=l?l(b,C,m):String(b);n&&(A.forceShow=C[n]);p&&(A.className=C[p]);q&&(A.labelColor=C[q]);x[C[g]]=A;if(k&&(m.categoryFunction?b=m.categoryFunction(b,C,m):(!B||b instanceof Date||(b=b.toString()+" |"),b=d.getDate(b,B,m.minPeriod)),b=d.resetDateToMin(b,r,t,m.firstDayOfWeek),A.category=b,A.time=b.getTime(),isNaN(A.time)))continue;var D=this.valueAxes;A.axes={};A.x={};var J;for(J=0;J<D.length;J++){var H=D[J].id;A.axes[H]=
{};A.axes[H].graphs={};var R;for(R=0;R<h.length;R++){b=h[R];var L=b.id,P=1.1;isNaN(b.gapPeriod)||(P=b.gapPeriod);var ia=b.periodValue;if(b.valueAxis.id==H){A.axes[H].graphs[L]={};var I={};I.index=w;var Z=C;b.dataProvider&&(Z=f);I.values=this.processValues(Z,b,ia);!b.connect&&z&&z[L]&&0<P&&A.time-u[L]>=y*P&&(z[L].gap=!0);this.processFields(b,I,Z);I.category=A.category;I.serialDataItem=A;I.graph=b;A.axes[H].graphs[L]=I;u[L]=A.time;z[L]=I}}}this.chartData[w]=A}if(this.parseCount==e){for(a=0;a<h.length;a++)b=
h[a],b.dataProvider&&this.parseGraphData(b);this.dataChanged=!1;this.dispatchDataUpdated=!0;this.onDataUpdated()}},processValues:function(a,b,c){var e={},h,f=!1;"candlestick"!=b.type&&"ohlc"!=b.type||""===c||(f=!0);for(var g="value error open close low high".split(" "),k=0;k<g.length;k++){var l=g[k];"value"!=l&&"error"!=l&&f&&(c=l.charAt(0).toUpperCase()+l.slice(1));var m=a[b[l+"Field"]+c];null!==m&&(h=Number(m),isNaN(h)||(e[l]=h),"date"==b.valueAxis.type&&void 0!==m&&(h=d.getDate(m,b.chart.dataDateFormat),
e[l]=h.getTime()))}return e},parseGraphData:function(a){var b=a.dataProvider,c=a.seriesIdField;c||(c=this.seriesIdField);c||(c=this.categoryField);var d;for(d=0;d<b.length;d++){var h=b[d],f=this.lookupTable[String(h[c])],g=a.valueAxis.id;f&&(g=f.axes[g].graphs[a.id],g.serialDataItem=f,g.values=this.processValues(h,a,a.periodValue),this.processFields(a,g,h))}},addValueAxis:function(a){a.chart=this;this.valueAxes.push(a);this.validateData()},removeValueAxesAndGraphs:function(){var a=this.valueAxes,
b;for(b=a.length-1;-1<b;b--)this.removeValueAxis(a[b])},removeValueAxis:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--){var d=b[c];d&&d.valueAxis==a&&this.removeGraph(d)}b=this.valueAxes;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);this.validateData()},addGraph:function(a){this.graphs.push(a);this.chooseGraphColor(a,this.graphs.length-1);this.validateData()},removeGraph:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--)b[c]==a&&(b.splice(c,1),a.destroy());this.validateData()},
handleValueAxisZoom:function(){},processValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.ValueAxis,this.theme);a[b]=c;c.chart=this;c.init();this.listenTo(c,"axisZoomed",this.handleValueAxisZoom);c.id||(c.id="valueAxisAuto"+b+"_"+(new Date).getTime());void 0===c.usePrefixes&&(c.usePrefixes=this.usePrefixes)}},processGuides:function(){var a=this.guides,b=this.categoryAxis;if(a)for(var c=0;c<a.length;c++){var e=a[c];(void 0!==e.category||void 0!==e.date)&&
b&&b.addGuide(e);e.id||(e.id="guideAuto"+c+"_"+(new Date).getTime());var h=e.valueAxis;h?(d.isString(h)&&(h=this.getValueAxisById(h)),h?h.addGuide(e):this.valueAxes[0].addGuide(e)):isNaN(e.value)||this.valueAxes[0].addGuide(e)}},processGraphs:function(){var a=this.graphs,b;this.graphsById={};for(b=0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.AmGraph,this.theme);a[b]=c;this.chooseGraphColor(c,b);c.chart=this;c.init();d.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||
(c.valueAxis=this.valueAxes[0]);c.id||(c.id="graphAuto"+b+"_"+(new Date).getTime());this.graphsById[c.id]=c}},formatString:function(a,b,c){var e=b.graph,h=e.valueAxis;h.duration&&b.values.value&&(h=d.formatDuration(b.values.value,h.duration,"",h.durationUnits,h.maxInterval,h.numberFormatter),a=a.split("[[value]]").join(h));a=d.massReplace(a,{"[[title]]":e.title,"[[description]]":b.description});a=c?d.fixNewLines(a):d.fixBrakes(a);return a=d.cleanFromEmpty(a)},getBalloonColor:function(a,b,c){var e=
a.lineColor,h=a.balloonColor;c&&(h=e);c=a.fillColorsR;"object"==typeof c?e=c[0]:void 0!==c&&(e=c);b.isNegative&&(c=a.negativeLineColor,a=a.negativeFillColors,"object"==typeof a?c=a[0]:void 0!==a&&(c=a),void 0!==c&&(e=c));void 0!==b.color&&(e=b.color);void 0!==b.lineColor&&(e=b.lineColor);b=b.fillColors;void 0!==b&&(e=b,d.ifArray(b)&&(e=b[0]));void 0===h&&(h=e);return h},getGraphById:function(a){return d.getObjById(this.graphs,a)},getValueAxisById:function(a){return d.getObjById(this.valueAxes,a)},
processFields:function(a,b,c){if(a.itemColors){var e=a.itemColors,h=b.index;b.color=h<e.length?e[h]:d.randomColor()}e="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className".split(" ");for(h=0;h<e.length;h++){var f=e[h],g=a[f+"Field"];g&&(g=c[g],d.isDefined(g)&&(b[f]=g))}b.dataContext=c},chooseGraphColor:function(a,b){if(a.lineColor)a.lineColorR=a.lineColor;else{var c;c=this.colors.length>b?this.colors[b]:a.lineColorR?
a.lineColorR:d.randomColor();a.lineColorR=c}a.fillColorsR=a.fillColors?a.fillColors:a.lineColorR;a.bulletBorderColorR=a.bulletBorderColor?a.bulletBorderColor:a.useLineColorForBulletBorder?a.lineColorR:a.bulletColor;a.bulletColorR=a.bulletColor?a.bulletColor:a.lineColorR;if(c=this.patterns)a.pattern=c[b]},handleLegendEvent:function(a){var b=a.type;a=a.dataItem;if(!this.legend.data&&a){var c=a.hidden,d=a.showBalloon;switch(b){case "clickMarker":this.textClickEnabled&&(d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a));
break;case "clickLabel":d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a);break;case "rollOverItem":c||this.highlightGraph(a);break;case "rollOutItem":c||this.unhighlightGraph();break;case "hideItem":this.hideGraph(a);break;case "showItem":this.showGraph(a)}}},highlightGraph:function(a){var b=this.graphs,c,d=.2;this.legend&&(d=this.legend.rollOverGraphAlpha);if(1!=d)for(c=0;c<b.length;c++){var h=b[c];h!=a&&h.changeOpacity(d)}},unhighlightGraph:function(){var a;this.legend&&(a=this.legend.rollOverGraphAlpha);
if(1!=a){a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].changeOpacity(1)}},showGraph:function(a){a.switchable&&(a.hidden=!1,this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),this.chartCreated&&this.initChart())},hideGraph:function(a){a.switchable&&(this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),a.hidden=!0,this.chartCreated&&this.initChart())},hideGraphsBalloon:function(a){a.showBalloon=!1;this.updateLegend()},showGraphsBalloon:function(a){a.showBalloon=!0;this.updateLegend()},
updateLegend:function(){this.legend&&this.legend.invalidateSize()},resetAnimation:function(){var a=this.graphs;if(a){var b;for(b=0;b<a.length;b++)a[b].animationPlayed=!1}},animateAgain:function(){this.resetAnimation();this.validateNow()}})})();(function(){var d=window.AmCharts;d.TrendLine=d.Class({construct:function(a){this.cname="TrendLine";this.createEvents("click");this.isProtected=!1;this.dashLength=0;this.lineColor="#00CC00";this.lineThickness=this.lineAlpha=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.destroy();var b=a.chart,c=b.container,e,h,f,g,k=a.categoryAxis,l=a.initialDate,m=a.initialCategory,n=a.finalDate,q=a.finalCategory,p=a.valueAxis,t=a.valueAxisX,r=a.initialXValue,u=a.finalXValue,y=a.initialValue,x=
a.finalValue,w=p.recalculateToPercents,B=b.dataDateFormat;k&&(l&&(l=d.getDate(l,B,"fff"),a.initialDate=l,e=k.dateToCoordinate(l)),m&&(e=k.categoryToCoordinate(m)),n&&(n=d.getDate(n,B,"fff"),a.finalDate=n,h=k.dateToCoordinate(n)),q&&(h=k.categoryToCoordinate(q)));t&&!w&&(isNaN(r)||(e=t.getCoordinate(r)),isNaN(u)||(h=t.getCoordinate(u)));p&&!w&&(isNaN(y)||(f=p.getCoordinate(y)),isNaN(x)||(g=p.getCoordinate(x)));if(!(isNaN(e)||isNaN(h)||isNaN(f)||isNaN(f))){b.rotate?(k=[f,g],g=[e,h]):(k=[e,h],g=[f,g]);
l=a.lineColor;f=d.line(c,k,g,l,a.lineAlpha,a.lineThickness,a.dashLength);e=k;h=g;q=k[1]-k[0];p=g[1]-g[0];0===q&&(q=.01);0===p&&(p=.01);m=q/Math.abs(q);n=p/Math.abs(p);p=90*Math.PI/180-Math.asin(q/(q*p/Math.abs(q*p)*Math.sqrt(Math.pow(q,2)+Math.pow(p,2))));q=Math.abs(5*Math.cos(p));p=Math.abs(5*Math.sin(p));e.push(k[1]-m*p,k[0]-m*p);h.push(g[1]+n*q,g[0]+n*q);g=d.polygon(c,e,h,l,.005,0);c=c.set([g,f]);c.translate(b.marginLeftReal,b.marginTopReal);b.trendLinesSet.push(c);d.setCN(b,f,"trend-line");d.setCN(b,
f,"trend-line-"+a.id);a.line=f;a.set=c;if(f=a.initialImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[0]+f.offsetX,h[0]+f.offsetY),c.push(f.set);if(f=a.finalImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[1]+f.offsetX,h[1]+f.offsetY),c.push(f.set);g.mouseup(function(){a.handleLineClick()}).mouseover(function(){a.handleLineOver()}).mouseout(function(){a.handleLineOut()});g.touchend&&g.touchend(function(){a.handleLineClick()});c.clipRect(0,0,b.plotAreaWidth,
b.plotAreaHeight)}},handleLineClick:function(){this.fire({type:"click",trendLine:this,chart:this.chart})},handleLineOver:function(){var a=this.rollOverColor;void 0!==a&&this.line.attr({stroke:a});this.balloonText&&(clearTimeout(this.chart.hoverInt),a=this.line.getBBox(),this.chart.showBalloon(this.balloonText,this.lineColor,!0,this.x+a.x+a.width/2,this.y+a.y+a.height/2))},handleLineOut:function(){this.line.attr({stroke:this.lineColor});this.balloonText&&this.chart.hideBalloon()},destroy:function(){d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.Image=d.Class({construct:function(a){this.cname="Image";this.height=this.width=20;this.rotation=this.offsetY=this.offsetX=0;this.balloonColor=this.color="#000000";this.opacity=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.set&&a.set.remove();var b=a.chart.container;a.set=b.set();var c,d;a.url?(c=b.image(a.url,0,0,a.width,a.height),d=1):a.svgPath&&(c=b.path(a.svgPath),c.setAttr("fill",a.color),c.setAttr("stroke",a.outlineColor),b=c.getBBox(),d=
Math.min(a.width/b.width,a.height/b.height));c&&(c.setAttr("opacity",a.opacity),a.set.rotate(a.rotation),c.translate(-a.width/2,-a.height/2,d),a.balloonText&&c.mouseover(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}).mouseout(function(){a.chart.hideBalloon()}).touchend(function(){a.chart.hideBalloon()}).touchstart(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}),a.set.push(c))},translate:function(a,b){this.set&&this.set.translate(a,b)}})})();(function(){var d=window.AmCharts;d.circle=function(a,b,c,e,h,f,g,k,l){0>=b&&(b=.001);if(void 0==h||0===h)h=.01;void 0===f&&(f="#000000");void 0===g&&(g=0);e={fill:c,stroke:f,"fill-opacity":e,"stroke-width":h,"stroke-opacity":g};a=isNaN(l)?a.circle(0,0,b).attr(e):a.ellipse(0,0,b,l).attr(e);k&&a.gradient("radialGradient",[c,d.adjustLuminosity(c,-.6)]);return a};d.text=function(a,b,c,e,h,f,g,k){f||(f="middle");"right"==f&&(f="end");"left"==f&&(f="start");isNaN(k)&&(k=1);void 0!==b&&(b=String(b),d.isIE&&
!d.isModern&&(b=b.replace("&amp;","&"),b=b.replace("&","&amp;")));c={fill:c,"font-family":e,"font-size":h+"px",opacity:k};!0===g&&(c["font-weight"]="bold");c["text-anchor"]=f;return a.text(b,c)};d.polygon=function(a,b,c,e,h,f,g,k,l,m,n){isNaN(f)&&(f=.01);isNaN(k)&&(k=h);var q=e,p=!1;"object"==typeof q&&1<q.length&&(p=!0,q=q[0]);void 0===g&&(g=q);h={fill:q,stroke:g,"fill-opacity":h,"stroke-width":f,"stroke-opacity":k};void 0!==n&&0<n&&(h["stroke-dasharray"]=n);n=d.dx;f=d.dy;a.handDrawn&&(c=d.makeHD(b,
c,a.handDrawScatter),b=c[0],c=c[1]);g=Math.round;m&&(b[t]=d.roundTo(b[t],5),c[t]=d.roundTo(c[t],5),g=Number);k="M"+(g(b[0])+n)+","+(g(c[0])+f);for(var t=1;t<b.length;t++)m&&(b[t]=d.roundTo(b[t],5),c[t]=d.roundTo(c[t],5)),k+=" L"+(g(b[t])+n)+","+(g(c[t])+f);a=a.path(k+" Z").attr(h);p&&a.gradient("linearGradient",e,l);return a};d.rect=function(a,b,c,e,h,f,g,k,l,m,n){if(isNaN(b)||isNaN(c))return a.set();isNaN(f)&&(f=0);void 0===l&&(l=0);void 0===m&&(m=270);isNaN(h)&&(h=0);var q=e,p=!1;"object"==typeof q&&
(q=q[0],p=!0);void 0===g&&(g=q);void 0===k&&(k=h);b=Math.round(b);c=Math.round(c);var t=0,r=0;0>b&&(b=Math.abs(b),t=-b);0>c&&(c=Math.abs(c),r=-c);t+=d.dx;r+=d.dy;h={fill:q,stroke:g,"fill-opacity":h,"stroke-opacity":k};void 0!==n&&0<n&&(h["stroke-dasharray"]=n);a=a.rect(t,r,b,c,l,f).attr(h);p&&a.gradient("linearGradient",e,m);return a};d.bullet=function(a,b,c,e,h,f,g,k,l,m,n,q,p){var t;"circle"==b&&(b="round");switch(b){case "round":t=d.circle(a,c/2,e,h,f,g,k);break;case "square":t=d.polygon(a,[-c/
2,c/2,c/2,-c/2],[c/2,c/2,-c/2,-c/2],e,h,f,g,k,m-180,void 0,p);break;case "rectangle":t=d.polygon(a,[-c,c,c,-c],[c/2,c/2,-c/2,-c/2],e,h,f,g,k,m-180,void 0,p);break;case "diamond":t=d.polygon(a,[-c/2,0,c/2,0],[0,-c/2,0,c/2],e,h,f,g,k);break;case "triangleUp":t=d.triangle(a,c,0,e,h,f,g,k);break;case "triangleDown":t=d.triangle(a,c,180,e,h,f,g,k);break;case "triangleLeft":t=d.triangle(a,c,270,e,h,f,g,k);break;case "triangleRight":t=d.triangle(a,c,90,e,h,f,g,k);break;case "bubble":t=d.circle(a,c/2,e,h,
f,g,k,!0);break;case "line":t=d.line(a,[-c/2,c/2],[0,0],e,h,f,g,k);break;case "yError":t=a.set();t.push(d.line(a,[0,0],[-c/2,c/2],e,h,f));t.push(d.line(a,[-l,l],[-c/2,-c/2],e,h,f));t.push(d.line(a,[-l,l],[c/2,c/2],e,h,f));break;case "xError":t=a.set(),t.push(d.line(a,[-c/2,c/2],[0,0],e,h,f)),t.push(d.line(a,[-c/2,-c/2],[-l,l],e,h,f)),t.push(d.line(a,[c/2,c/2],[-l,l],e,h,f))}t&&t.pattern(n,NaN,q);return t};d.triangle=function(a,b,c,d,h,f,g,k){if(void 0===f||0===f)f=1;void 0===g&&(g="#000");void 0===
k&&(k=0);d={fill:d,stroke:g,"fill-opacity":h,"stroke-width":f,"stroke-opacity":k};b/=2;var l;0===c&&(l=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==c&&(l=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==c&&(l=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==c&&(l=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(l).attr(d)};d.line=function(a,b,c,e,h,f,g,k,l,m,n){if(a.handDrawn&&!n)return d.handDrawnLine(a,b,c,e,h,f,g,k,l,m,n);f={fill:"none","stroke-width":f};void 0!==g&&0<g&&(f["stroke-dasharray"]=
g);isNaN(h)||(f["stroke-opacity"]=h);e&&(f.stroke=e);e=Math.round;m&&(e=Number,b[0]=d.roundTo(b[0],5),c[0]=d.roundTo(c[0],5));m=d.dx;h=d.dy;g="M"+(e(b[0])+m)+","+(e(c[0])+h);for(k=1;k<b.length;k++)b[k]=d.roundTo(b[k],5),c[k]=d.roundTo(c[k],5),g+=" L"+(e(b[k])+m)+","+(e(c[k])+h);if(d.VML)return a.path(g,void 0,!0).attr(f);l&&(g+=" M0,0 L0,0");return a.path(g).attr(f)};d.makeHD=function(a,b,c){for(var d=[],h=[],f=1;f<a.length;f++)for(var g=Number(a[f-1]),k=Number(b[f-1]),l=Number(a[f]),m=Number(b[f]),
n=Math.round(Math.sqrt(Math.pow(l-g,2)+Math.pow(m-k,2))/50)+1,l=(l-g)/n,m=(m-k)/n,q=0;q<=n;q++){var p=k+q*m+Math.random()*c;d.push(g+q*l+Math.random()*c);h.push(p)}return[d,h]};d.handDrawnLine=function(a,b,c,e,h,f,g,k,l,m){var n,q=a.set();for(n=1;n<b.length;n++)for(var p=[b[n-1],b[n]],t=[c[n-1],c[n]],t=d.makeHD(p,t,a.handDrawScatter),p=t[0],t=t[1],r=1;r<p.length;r++)q.push(d.line(a,[p[r-1],p[r]],[t[r-1],t[r]],e,h,f+Math.random()*a.handDrawThickness-a.handDrawThickness/2,g,k,l,m,!0));return q};d.doNothing=
function(a){return a};d.drop=function(a,b,c,d,h,f,g,k){var l=1/180*Math.PI,m=c-20,n=Math.sin(m*l)*b,q=Math.cos(m*l)*b,p=Math.sin((m+40)*l)*b,t=Math.cos((m+40)*l)*b,r=.8*b,u=-b/3,y=b/3;0===c&&(u=-u,y=0);180==c&&(y=0);90==c&&(u=0);270==c&&(u=0,y=-y);c={fill:d,stroke:g,"stroke-width":f,"stroke-opacity":k,"fill-opacity":h};b="M"+n+","+q+" A"+b+","+b+",0,1,1,"+p+","+t+(" A"+r+","+r+",0,0,0,"+(Math.sin((m+20)*l)*b+y)+","+(Math.cos((m+20)*l)*b+u));b+=" A"+r+","+r+",0,0,0,"+n+","+q;return a.path(b,void 0,
void 0,"1000,1000").attr(c)};d.wedge=function(a,b,c,e,h,f,g,k,l,m,n,q,p,t){var r=Math.round;f=r(f);g=r(g);k=r(k);var u=r(g/f*k),y=d.VML,x=359.5+f/100;359.94<x&&(x=359.94);h>=x&&(h=x);var w=1/180*Math.PI,x=b+Math.sin(e*w)*k,B=c-Math.cos(e*w)*u,z=b+Math.sin(e*w)*f,A=c-Math.cos(e*w)*g,C=b+Math.sin((e+h)*w)*f,D=c-Math.cos((e+h)*w)*g,J=b+Math.sin((e+h)*w)*k,w=c-Math.cos((e+h)*w)*u,H={fill:d.adjustLuminosity(m.fill,-.2),"stroke-opacity":0,"fill-opacity":m["fill-opacity"]},R=0;180<Math.abs(h)&&(R=1);e=a.set();
var L;y&&(x=r(10*x),z=r(10*z),C=r(10*C),J=r(10*J),B=r(10*B),A=r(10*A),D=r(10*D),w=r(10*w),b=r(10*b),l=r(10*l),c=r(10*c),f*=10,g*=10,k*=10,u*=10,1>Math.abs(h)&&1>=Math.abs(C-z)&&1>=Math.abs(D-A)&&(L=!0));h="";var P;q&&(H["fill-opacity"]=0,H["stroke-opacity"]=m["stroke-opacity"]/2,H.stroke=m.stroke);if(0<l){P=" M"+x+","+(B+l)+" L"+z+","+(A+l);y?(L||(P+=" A"+(b-f)+","+(l+c-g)+","+(b+f)+","+(l+c+g)+","+z+","+(A+l)+","+C+","+(D+l)),P+=" L"+J+","+(w+l),0<k&&(L||(P+=" B"+(b-k)+","+(l+c-u)+","+(b+k)+","+
(l+c+u)+","+J+","+(l+w)+","+x+","+(l+B)))):(P+=" A"+f+","+g+",0,"+R+",1,"+C+","+(D+l)+" L"+J+","+(w+l),0<k&&(P+=" A"+k+","+u+",0,"+R+",0,"+x+","+(B+l)));P+=" Z";var ia=l;y&&(ia/=10);for(var I=0;I<ia;I+=10){var Z=a.path(P,void 0,void 0,"1000,1000").attr(H);e.push(Z);Z.translate(0,-I)}P=a.path(" M"+x+","+B+" L"+x+","+(B+l)+" L"+z+","+(A+l)+" L"+z+","+A+" L"+x+","+B+" Z",void 0,void 0,"1000,1000").attr(H);l=a.path(" M"+C+","+D+" L"+C+","+(D+l)+" L"+J+","+(w+l)+" L"+J+","+w+" L"+C+","+D+" Z",void 0,void 0,
"1000,1000").attr(H);e.push(P);e.push(l)}y?(L||(h=" A"+r(b-f)+","+r(c-g)+","+r(b+f)+","+r(c+g)+","+r(z)+","+r(A)+","+r(C)+","+r(D)),g=" M"+r(x)+","+r(B)+" L"+r(z)+","+r(A)+h+" L"+r(J)+","+r(w)):g=" M"+x+","+B+" L"+z+","+A+(" A"+f+","+g+",0,"+R+",1,"+C+","+D)+" L"+J+","+w;0<k&&(y?L||(g+=" B"+(b-k)+","+(c-u)+","+(b+k)+","+(c+u)+","+J+","+w+","+x+","+B):g+=" A"+k+","+u+",0,"+R+",0,"+x+","+B);a.handDrawn&&(k=d.line(a,[x,z],[B,A],m.stroke,m.thickness*Math.random()*a.handDrawThickness,m["stroke-opacity"]),
e.push(k));k=a.path(g+" Z",void 0,void 0,"1000,1000").attr(m);if(n){u=[];for(y=0;y<n.length;y++)u.push(d.adjustLuminosity(m.fill,n[y]));"radial"!=t||d.isModern||(u=[]);0<u.length&&k.gradient(t+"Gradient",u)}d.isModern&&"radial"==t&&k.grad&&(k.grad.setAttribute("gradientUnits","userSpaceOnUse"),k.grad.setAttribute("r",f),k.grad.setAttribute("gradientTransform","translate("+(b-a.width/2)+","+(c-a.height/2)+")"));k.pattern(q,NaN,p);e.wedge=k;e.push(k);return e};d.rgb2hex=function(a){return(a=a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&
4===a.length?"#"+("0"+parseInt(a[1],10).toString(16)).slice(-2)+("0"+parseInt(a[2],10).toString(16)).slice(-2)+("0"+parseInt(a[3],10).toString(16)).slice(-2):""};d.adjustLuminosity=function(a,b){a&&-1!=a.indexOf("rgb")&&(a=d.rgb2hex(a));a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));b=b||0;var c="#",e,h;for(h=0;3>h;h++)e=parseInt(a.substr(2*h,2),16),e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),c+=("00"+
e).substr(e.length);return c}})();(function(){var d=window.AmCharts;d.Bezier=d.Class({construct:function(a,b,c,e,h,f,g,k,l,m){"object"==typeof g&&(g=g[0]);"object"==typeof k&&(k=k[0]);0===k&&(g="none");f={fill:g,"fill-opacity":k,"stroke-width":f};void 0!==l&&0<l&&(f["stroke-dasharray"]=l);isNaN(h)||(f["stroke-opacity"]=h);e&&(f.stroke=e);e="M"+Math.round(b[0])+","+Math.round(c[0]);h=[];for(l=0;l<b.length;l++)h.push({x:Number(b[l]),y:Number(c[l])});1<h.length&&(b=this.interpolate(h),e+=this.drawBeziers(b));m?e+=m:d.VML||(e+="M0,0 L0,0");
this.path=a.path(e).attr(f);this.node=this.path.node},interpolate:function(a){var b=[];b.push({x:a[0].x,y:a[0].y});var c=a[1].x-a[0].x,e=a[1].y-a[0].y,h=d.bezierX,f=d.bezierY;b.push({x:a[0].x+c/h,y:a[0].y+e/f});var g;for(g=1;g<a.length-1;g++){var k=a[g-1],l=a[g],e=a[g+1];isNaN(e.x)&&(e=l);isNaN(l.x)&&(l=k);isNaN(k.x)&&(k=l);c=e.x-l.x;e=e.y-k.y;k=l.x-k.x;k>c&&(k=c);b.push({x:l.x-k/h,y:l.y-e/f});b.push({x:l.x,y:l.y});b.push({x:l.x+k/h,y:l.y+e/f})}e=a[a.length-1].y-a[a.length-2].y;c=a[a.length-1].x-
a[a.length-2].x;b.push({x:a[a.length-1].x-c/h,y:a[a.length-1].y-e/f});b.push({x:a[a.length-1].x,y:a[a.length-1].y});return b},drawBeziers:function(a){var b="",c;for(c=0;c<(a.length-1)/3;c++)b+=this.drawBezierMidpoint(a[3*c],a[3*c+1],a[3*c+2],a[3*c+3]);return b},drawBezierMidpoint:function(a,b,c,d){var h=Math.round,f=this.getPointOnSegment(a,b,.75),g=this.getPointOnSegment(d,c,.75),k=(d.x-a.x)/16,l=(d.y-a.y)/16,m=this.getPointOnSegment(a,b,.375);a=this.getPointOnSegment(f,g,.375);a.x-=k;a.y-=l;b=this.getPointOnSegment(g,
f,.375);b.x+=k;b.y+=l;c=this.getPointOnSegment(d,c,.375);k=this.getMiddle(m,a);f=this.getMiddle(f,g);g=this.getMiddle(b,c);m=" Q"+h(m.x)+","+h(m.y)+","+h(k.x)+","+h(k.y);m+=" Q"+h(a.x)+","+h(a.y)+","+h(f.x)+","+h(f.y);m+=" Q"+h(b.x)+","+h(b.y)+","+h(g.x)+","+h(g.y);return m+=" Q"+h(c.x)+","+h(c.y)+","+h(d.x)+","+h(d.y)},getMiddle:function(a,b){return{x:(a.x+b.x)/2,y:(a.y+b.y)/2}},getPointOnSegment:function(a,b,c){return{x:a.x+(b.x-a.x)*c,y:a.y+(b.y-a.y)*c}}})})();(function(){var d=window.AmCharts;d.AmDraw=d.Class({construct:function(a,b,c,e){d.SVG_NS="http://www.w3.org/2000/svg";d.SVG_XLINK="http://www.w3.org/1999/xlink";d.hasSVG=!!document.createElementNS&&!!document.createElementNS(d.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");d.hasSVG?(d.SVG=!0,b=this.createSvgElement("svg"),a.appendChild(b),this.container=b,this.addDefs(e),this.R=new d.SVGRenderer(this)):d.isIE&&d.VMLRenderer&&
(d.VML=!0,d.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?(b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),d.vmlStyleSheet=b):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new d.VMLRenderer(this,e),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(d.SVG_NS,
a)},circle:function(a,b,c,e){var h=new d.AmDObject("circle",this);h.attr({r:c,cx:a,cy:b});this.addToContainer(h.node,e);return h},ellipse:function(a,b,c,e,h){var f=new d.AmDObject("ellipse",this);f.attr({rx:c,ry:e,cx:a,cy:b});this.addToContainer(f.node,h);return f},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,e,h,f,g){var k=new d.AmDObject("rect",this);d.VML&&(h=Math.round(100*h/Math.min(c,e)),c+=2*f,e+=2*f,k.bw=f,k.node.style.marginLeft=
-f,k.node.style.marginTop=-f);1>c&&(c=1);1>e&&(e=1);k.attr({x:a,y:b,width:c,height:e,rx:h,ry:h,"stroke-width":f});this.addToContainer(k.node,g);return k},image:function(a,b,c,e,h,f){var g=new d.AmDObject("image",this);g.attr({x:b,y:c,width:e,height:h});this.R.path(g,a);this.addToContainer(g.node,f);return g},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,e){var h=new d.AmDObject("path",this);e||(e="100,100");
h.attr({cs:e});c?h.attr({dd:a}):h.attr({d:a});this.addToContainer(h.node,b);return h},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=this.container,b=a.style;b.top="0px";b.left="0px";try{var c=a.getBoundingClientRect(),d=c.left-Math.round(c.left),h=c.top-Math.round(c.top);d&&(b.left=d+"px");h&&(b.top=h+"px")}catch(f){}},update:function(){this.R.update()},addDefs:function(a){if(d.hasSVG){var b=this.createSvgElement("desc"),
c=this.container;c.setAttribute("version","1.1");c.style.position="absolute";this.setSize(this.width,this.height);d.rtl&&(c.setAttribute("direction","rtl"),c.style.left="auto",c.style.right="0px");a&&(a.addCodeCredits&&b.appendChild(document.createTextNode("JavaScript chart by amCharts "+a.version)),c.appendChild(b),a.defs&&(b=this.createSvgElement("defs"),c.appendChild(b),d.parseDefs(a.defs,b),this.defs=b))}}})})();(function(){var d=window.AmCharts;d.AmDObject=d.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,d){this.R.clipRect(this,a,b,c,d)},translate:function(a,b,c,d){d||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=
c;this.angle&&this.rotate(this.angle)},rotate:function(a,b){this.R.rotate(this,a,b);this.angle=a},animate:function(a,b,c){for(var e in a)if(a.hasOwnProperty(e)){var h=e,f=a[e];c=d.getEffect(c);this.R.animate(this,h,f,b,c)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var c=a.clipPath;c&&b.appendChild(c);(a=a.grad)&&b.appendChild(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.stop();this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=
a.childNodes.length;)a.removeChild(a.firstChild)},hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;b&&b.appendChild(a)}},toPrevious:function(){var a=this.node;a&&this.prevNextNode&&(a=a.parentNode)&&a.insertBefore(this.prevNextNode,null)},toBack:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;
var b=a.parentNode;if(b){var c=b.firstChild;c&&b.insertBefore(a,c)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchmove:function(a){this.R.addListener(this,
"touchmove",a);return this},touchstart:function(a){this.R.addListener(this,"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},contextmenu:function(a){this.node.addEventListener?this.node.addEventListener("contextmenu",a,!0):this.R.addListener(this,"contextmenu",a);return this},stop:function(){d.removeFromArray(this.R.animations,this.an_translate);d.removeFromArray(this.R.animations,this.an_y);d.removeFromArray(this.R.animations,this.an_x)},length:function(){return this.node.childNodes.length},
gradient:function(a,b,c){this.R.gradient(this,a,b,c)},pattern:function(a,b,c){a&&this.R.pattern(this,a,b,c)}})})();(function(){var d=window.AmCharts;d.VMLRenderer=d.Class({construct:function(a,b){this.chart=b;this.D=a;this.cNames={circle:"oval",ellipse:"oval",rect:"roundrect",path:"shape"};this.styleMap={x:"left",y:"top",width:"width",height:"height","font-family":"fontFamily","font-size":"fontSize",visibility:"visibility"}},create:function(a,b){var c;if("group"==b)c=document.createElement("div"),a.type="div";else if("text"==b)c=document.createElement("div"),a.type="text";else if("image"==b)c=document.createElement("img"),
a.type="image";else{a.type="shape";a.shapeType=this.cNames[b];c=document.createElement("amvml:"+this.cNames[b]);var d=document.createElement("amvml:stroke");c.appendChild(d);a.stroke=d;var h=document.createElement("amvml:fill");c.appendChild(h);a.fill=h;h.className="amvml";d.className="amvml";c.className="amvml"}c.style.position="absolute";c.style.top=0;c.style.left=0;return c},path:function(a,b){a.node.setAttribute("src",b)},setAttr:function(a,b,c){if(void 0!==c){var e;8===document.documentMode&&
(e=!0);var h=a.node,f=a.type,g=h.style;"r"==b&&(g.width=2*c,g.height=2*c);"oval"==a.shapeType&&("rx"==b&&(g.width=2*c),"ry"==b&&(g.height=2*c));"roundrect"==a.shapeType&&("width"!=b&&"height"!=b||--c);"cursor"==b&&(g.cursor=c);"cx"==b&&(g.left=c-d.removePx(g.width)/2);"cy"==b&&(g.top=c-d.removePx(g.height)/2);var k=this.styleMap[b];"width"==k&&0>c&&(c=0);void 0!==k&&(g[k]=c);"text"==f&&("text-anchor"==b&&(a.anchor=c,k=h.clientWidth,"end"==c&&(g.marginLeft=-k+"px"),"middle"==c&&(g.marginLeft=-(k/2)+
"px",g.textAlign="center"),"start"==c&&(g.marginLeft="0px")),"fill"==b&&(g.color=c),"font-weight"==b&&(g.fontWeight=c));if(g=a.children)for(k=0;k<g.length;k++)g[k].setAttr(b,c);if("shape"==f){"cs"==b&&(h.style.width="100px",h.style.height="100px",h.setAttribute("coordsize",c));"d"==b&&h.setAttribute("path",this.svgPathToVml(c));"dd"==b&&h.setAttribute("path",c);f=a.stroke;a=a.fill;"stroke"==b&&(e?f.color=c:f.setAttribute("color",c));"stroke-width"==b&&(e?f.weight=c:f.setAttribute("weight",c));"stroke-opacity"==
b&&(e?f.opacity=c:f.setAttribute("opacity",c));"stroke-dasharray"==b&&(g="solid",0<c&&3>c&&(g="dot"),3<=c&&6>=c&&(g="dash"),6<c&&(g="longdash"),e?f.dashstyle=g:f.setAttribute("dashstyle",g));if("fill-opacity"==b||"opacity"==b)0===c?e?a.on=!1:a.setAttribute("on",!1):e?a.opacity=c:a.setAttribute("opacity",c);"fill"==b&&(e?a.color=c:a.setAttribute("color",c));"rx"==b&&(e?h.arcSize=c+"%":h.setAttribute("arcsize",c+"%"))}}},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},
text:function(a,b,c){var e=new d.AmDObject("text",this.D),h=e.node;h.style.whiteSpace="pre";h.innerHTML=a;this.D.addToContainer(h,c);this.attr(e,b);return e},getBBox:function(a){return this.getBox(a.node)},getBox:function(a){var b=a.offsetLeft,c=a.offsetTop,d=a.offsetWidth,h=a.offsetHeight,f;if(a.hasChildNodes()){var g,k,l;for(l=0;l<a.childNodes.length;l++){f=this.getBox(a.childNodes[l]);var m=f.x;isNaN(m)||(isNaN(g)?g=m:m<g&&(g=m));var n=f.y;isNaN(n)||(isNaN(k)?k=n:n<k&&(k=n));m=f.width+m;isNaN(m)||
(d=Math.max(d,m));f=f.height+n;isNaN(f)||(h=Math.max(h,f))}0>g&&(b+=g);0>k&&(c+=k)}return{x:b,y:c,width:d,height:h}},setText:function(a,b){var c=a.node;c&&(c.innerHTML=b);this.setAttr(a,"text-anchor",a.anchor)},addListener:function(a,b,c){a.node["on"+b]=c},move:function(a,b,c){var e=a.node,h=e.style;"text"==a.type&&(c-=d.removePx(h.fontSize)/2-1);"oval"==a.shapeType&&(b-=d.removePx(h.width)/2,c-=d.removePx(h.height)/2);a=a.bw;isNaN(a)||(b-=a,c-=a);isNaN(b)||isNaN(c)||(e.style.left=b+"px",e.style.top=
c+"px")},svgPathToVml:function(a){var b=a.split(" ");a="";var c,d=Math.round,h;for(h=0;h<b.length;h++){var f=b[h],g=f.substring(0,1),f=f.substring(1),k=f.split(","),l=d(k[0])+","+d(k[1]);"M"==g&&(a+=" m "+l);"L"==g&&(a+=" l "+l);"Z"==g&&(a+=" x e");if("Q"==g){var m=c.length,n=c[m-1],q=k[0],p=k[1],l=k[2],t=k[3];c=d(c[m-2]/3+2/3*q);n=d(n/3+2/3*p);q=d(2/3*q+l/3);p=d(2/3*p+t/3);a+=" c "+c+","+n+","+q+","+p+","+l+","+t}"A"==g&&(a+=" wa "+f);"B"==g&&(a+=" at "+f);c=k}return a},animate:function(a,b,c,d,
h){var f=a.node,g=this.chart;a.animationFinished=!1;if("translate"==b){b=c.split(",");c=b[1];var k=f.offsetTop;g.animate(a,"left",f.offsetLeft,b[0],d,h,"px");g.animate(a,"top",k,c,d,h,"px")}},clipRect:function(a,b,c,d,h){a=a.node;0===b&&0===c?(a.style.width=d+"px",a.style.height=h+"px",a.style.overflow="hidden"):a.style.clip="rect("+c+"px "+(b+d)+"px "+(c+h)+"px "+b+"px)"},rotate:function(a,b,c){if(0!==Number(b)){var e=a.node;a=e.style;c||(c=this.getBGColor(e.parentNode));a.backgroundColor=c;a.paddingLeft=
1;c=b*Math.PI/180;var h=Math.cos(c),f=Math.sin(c),g=d.removePx(a.left),k=d.removePx(a.top),l=e.offsetWidth,e=e.offsetHeight;b/=Math.abs(b);a.left=g+l/2-l/2*Math.cos(c)-b*e/2*Math.sin(c)+3;a.top=k-b*l/2*Math.sin(c)+b*e/2*Math.sin(c);a.cssText=a.cssText+"; filter:progid:DXImageTransform.Microsoft.Matrix(M11='"+h+"', M12='"+-f+"', M21='"+f+"', M22='"+h+"', sizingmethod='auto expand');"}},getBGColor:function(a){var b="#FFFFFF";if(a.style){var c=a.style.backgroundColor;""!==c?b=c:a.parentNode&&(b=this.getBGColor(a.parentNode))}return b},
set:function(a){var b=new d.AmDObject("group",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},gradient:function(a,b,c,d){var h="";"radialGradient"==b&&(b="gradientradial",c.reverse());"linearGradient"==b&&(b="gradient");var f;for(f=0;f<c.length;f++)h+=Math.round(100*f/(c.length-1))+"% "+c[f],f<c.length-1&&(h+=",");a=a.fill;90==d?d=0:270==d?d=180:180==d?d=90:0===d&&(d=270);8===document.documentMode?(a.type=b,a.angle=d):(a.setAttribute("type",b),
a.setAttribute("angle",d));h&&(a.colors.value=h)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);this.D.remove(a.node)},disableSelection:function(a){void 0!==typeof a.onselectstart&&(a.onselectstart=function(){return!1});a.style.cursor="default"},pattern:function(a,b,c,e){c=a.node;a=a.fill;var h="none";b.color&&(h=b.color);c.fillColor=h;b=b.url;d.isAbsolute(b)||(b=e+b);8===document.documentMode?(a.type="tile",a.src=b):(a.setAttribute("type","tile"),a.setAttribute("src",b))},update:function(){}})})();(function(){var d=window.AmCharts;d.SVGRenderer=d.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(d.SVG_NS,b)},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},setAttr:function(a,b,c){void 0!==c&&a.node.setAttribute(b,c)},animate:function(a,b,c,e,h){a.animationFinished=!1;var f=a.node;a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);"translate"==b?(f=(f=f.getAttribute("transform"))?String(f).substring(10,
f.length-1):"0,0",f=f.split(", ").join(" "),f=f.split(" ").join(","),0===f&&(f="0,0")):f=Number(f.getAttribute(b));c={obj:a,frame:0,attribute:b,from:f,to:c,time:e,effect:h};this.animations.push(c);a["an_"+b]=c},update:function(){var a,b=this.animations;for(a=b.length-1;0<=a;a--){var c=b[a],e=c.time*d.updateRate,h=c.frame+1,f=c.obj,g=c.attribute,k,l,m;h<=e?(c.frame++,"translate"==g?(k=c.from.split(","),g=Number(k[0]),k=Number(k[1]),isNaN(k)&&(k=0),l=c.to.split(","),m=Number(l[0]),l=Number(l[1]),m=
0===m-g?m:Math.round(d[c.effect](0,h,g,m-g,e)),c=0===l-k?l:Math.round(d[c.effect](0,h,k,l-k,e)),g="transform",c="translate("+m+","+c+")"):(l=Number(c.from),k=Number(c.to),m=k-l,c=d[c.effect](0,h,l,m,e),isNaN(c)&&(c=k),0===m&&this.animations.splice(a,1)),this.setAttr(f,g,c)):("translate"==g?(l=c.to.split(","),m=Number(l[0]),l=Number(l[1]),f.translate(m,l)):(k=Number(c.to),this.setAttr(f,g,k)),f.animationFinished=!0,this.animations.splice(a,1))}},getBBox:function(a){if(a=a.node)try{return a.getBBox()}catch(b){}return{width:0,
height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(d.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,c,e,h){var f=a.node,g=a.clipPath;g&&this.D.remove(g);var k=f.parentNode;k&&(f=document.createElementNS(d.SVG_NS,"clipPath"),g=d.getUniqueId(),f.setAttribute("id",g),this.D.rect(b,c,e,h,0,0,f),k.appendChild(f),b="#",d.baseHref&&!d.isIE&&(b=this.removeTarget(window.location.href)+b),this.setAttr(a,"clip-path","url("+b+g+")"),this.clipPathC++,a.clipPath=f)},text:function(a,b,c){var e=new d.AmDObject("text",
this.D);a=String(a).split("\n");var h=d.removePx(b["font-size"]),f;for(f=0;f<a.length;f++){var g=this.create(null,"tspan");g.appendChild(document.createTextNode(a[f]));g.setAttribute("y",(h+2)*f+Math.round(h/2));g.setAttribute("x",0);e.node.appendChild(g)}e.node.setAttribute("y",Math.round(h/2));this.attr(e,b);this.D.addToContainer(e.node,c);return e},setText:function(a,b){var c=a.node;c&&(c.removeChild(c.firstChild),c.appendChild(document.createTextNode(b)))},move:function(a,b,c,d){isNaN(b)&&(b=
0);isNaN(c)&&(c=0);b="translate("+b+","+c+")";d&&(b=b+" scale("+d+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var c=a.node.getAttribute("transform"),d="rotate("+b+")";c&&(d=c+" "+d);this.setAttr(a,"transform",d)},set:function(a){var b=new d.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},addListener:function(a,b,c){a.node["on"+b]=c},gradient:function(a,b,c,e){var h=a.node,f=a.grad;f&&this.D.remove(f);b=document.createElementNS(d.SVG_NS,
b);f=d.getUniqueId();b.setAttribute("id",f);if(!isNaN(e)){var g=0,k=0,l=0,m=0;90==e?l=100:270==e?m=100:180==e?g=100:0===e&&(k=100);b.setAttribute("x1",g+"%");b.setAttribute("x2",k+"%");b.setAttribute("y1",l+"%");b.setAttribute("y2",m+"%")}for(e=0;e<c.length;e++)g=document.createElementNS(d.SVG_NS,"stop"),k=100*e/(c.length-1),0===e&&(k=0),g.setAttribute("offset",k+"%"),g.setAttribute("stop-color",c[e]),b.appendChild(g);h.parentNode.appendChild(b);c="#";d.baseHref&&!d.isIE&&(c=this.removeTarget(window.location.href)+
c);h.setAttribute("fill","url("+c+f+")");a.grad=b},removeTarget:function(a){return a.split("#")[0]},pattern:function(a,b,c,e){var h=a.node;isNaN(c)&&(c=1);var f=a.patternNode;f&&this.D.remove(f);var f=document.createElementNS(d.SVG_NS,"pattern"),g=d.getUniqueId(),k=b;b.url&&(k=b.url);d.isAbsolute(k)||(k=e+k);e=Number(b.width);isNaN(e)&&(e=4);var l=Number(b.height);isNaN(l)&&(l=4);e/=c;l/=c;c=b.x;isNaN(c)&&(c=0);var m=-Math.random()*Number(b.randomX);isNaN(m)||(c=m);m=b.y;isNaN(m)&&(m=0);var n=-Math.random()*
Number(b.randomY);isNaN(n)||(m=n);f.setAttribute("id",g);f.setAttribute("width",e);f.setAttribute("height",l);f.setAttribute("patternUnits","userSpaceOnUse");f.setAttribute("xlink:href",k);b.color&&(n=document.createElementNS(d.SVG_NS,"rect"),n.setAttributeNS(null,"height",e),n.setAttributeNS(null,"width",l),n.setAttributeNS(null,"fill",b.color),f.appendChild(n));this.D.image(k,0,0,e,l,f).translate(c,m);k="#";d.baseHref&&!d.isIE&&(k=this.removeTarget(window.location.href)+k);h.setAttribute("fill",
"url("+k+g+")");a.patternNode=f;h.parentNode.appendChild(f)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);a.patternNode&&this.D.remove(a.patternNode);this.D.remove(a.node)}})})();(function(){var d=window.AmCharts;d.AmLegend=d.Class({construct:function(a){this.enabled=!0;this.cname="AmLegend";this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","rollOverItem","rollOutItem","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType=
"square";this.markerSize=16;this.markerBorderThickness=this.markerBorderAlpha=1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.backgroundColor="#FFFFFF";this.backgroundAlpha=
0;this.useGraphSettings=!1;this.showEntries=!0;d.applyTheme(this,a,this.cname)},setData:function(a){this.legendData=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];var a=this.legendData;this.enabled&&(d.ifArray(a)||d.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,c=this.width,e=a.divRealWidth,h=a.divRealHeight,f=this.div,g=this.legendData;this.data&&(g=this.data);isNaN(this.fontSize)&&(this.fontSize=
a.fontSize);if("right"==b||"left"==b)this.maxColumns=1,this.autoMargins&&(this.marginLeft=this.marginRight=10);else if(this.autoMargins){this.marginRight=a.marginRight;this.marginLeft=a.marginLeft;var k=a.autoMarginOffset;"bottom"==b?(this.marginBottom=k,this.marginTop=0):(this.marginTop=k,this.marginBottom=0)}c=void 0!==c?d.toCoordinate(c,e):"right"!=b&&"left"!=b?a.realWidth:0<this.ieW?this.ieW:a.realWidth;"outside"==b?(c=f.offsetWidth,h=f.offsetHeight,f.clientHeight&&(c=f.clientWidth,h=f.clientHeight)):
(isNaN(c)||(f.style.width=c+"px"),f.className="amChartsLegend "+a.classNamePrefix+"-legend-div");this.divWidth=c;(b=this.container)?(b.container.innerHTML="",f.appendChild(b.container),b.width=c,b.height=h,b.setSize(c,h),b.addDefs(a)):b=new d.AmDraw(f,c,h,a);this.container=b;this.lx=0;this.ly=8;h=this.markerSize;h>this.fontSize&&(this.ly=h/2-1);0<h&&(this.lx+=h+this.markerLabelGap);this.titleWidth=0;if(h=this.title)h=d.text(this.container,h,this.color,a.fontFamily,this.fontSize,"start",!0),d.setCN(a,
h,"legend-title"),h.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),a=h.getBBox(),this.titleWidth=a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<g.length;a++)this.createEntry(g[a]);for(a=this.index=0;a<g.length;a++)this.createValue(g[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+this.titleWidth,c=this.marginRight,e=this.marginTop,h=this.marginBottom,f=this.horizontalGap,
g=this.div,k=this.divWidth,l=this.maxColumns,m=this.verticalGap,n=this.spacing,q=k-c-b,p=0,t=0,r=this.container;this.set&&this.set.remove();var u=r.set();this.set=u;var y=r.set();u.push(y);var x=this.entries,w,B;for(B=0;B<x.length;B++){w=x[B].getBBox();var z=w.width;z>p&&(p=z);w=w.height;w>t&&(t=w)}var z=t=0,A=f,C=0,D=0;for(B=0;B<x.length;B++){var J=x[B];this.reversedOrder&&(J=x[x.length-B-1]);w=J.getBBox();var H;this.equalWidths?H=z*(p+n+this.markerLabelGap):(H=A,A=A+w.width+f+n);w.height>D&&(D=
w.height);H+w.width>q&&0<B&&0!==z&&(t++,H=z=0,A=H+w.width+f+n,C=C+D+m,D=0);J.translate(H,C);z++;!isNaN(l)&&z>=l&&(z=0,t++,C=C+D+m,A=f,D=0);y.push(J)}w=y.getBBox();l=w.height+2*m-1;"left"==a||"right"==a?(n=w.width+2*f,k=n+b+c,g.style.width=k+"px",this.ieW=k):n=k-b-c-1;c=d.polygon(this.container,[0,n,n,0],[0,0,l,l],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);d.setCN(this.chart,c,"legend-bg");u.push(c);u.translate(b,e);c.toBack();b=f;if("top"==a||"bottom"==a||"absolute"==
a||"outside"==a)"center"==this.align?b=f+(n-w.width)/2:"right"==this.align&&(b=f+n-w.width);y.translate(b,m+1);this.titleHeight>l&&(l=this.titleHeight);a=l+e+h+1;0>a&&(a=0);a>this.chart.divRealHeight&&(g.style.top="0px");g.style.height=Math.round(a)+"px";r.setSize(this.divWidth,a)},createEntry:function(a){if(!1!==a.visibleInLegend&&!a.hideFromLegend){var b=this.chart,c=a.markerType;a.legendEntryWidth=this.markerSize;c||(c=this.markerType);var e=a.color,h=a.alpha;a.legendKeyColor&&(e=a.legendKeyColor());
a.legendKeyAlpha&&(h=a.legendKeyAlpha());var f;!0===a.hidden&&(f=e=this.markerDisabledColor);var g=a.pattern,k=a.customMarker;k||(k=this.customMarker);var l=this.container,m=this.markerSize,n=0,q=0,p=m/2;if(this.useGraphSettings){c=a.type;this.switchType=void 0;if("line"==c||"step"==c||"smoothedLine"==c||"ohlc"==c)g=l.set(),a.hidden||(e=a.lineColorR,f=a.bulletBorderColorR),n=d.line(l,[0,2*m],[m/2,m/2],e,a.lineAlpha,a.lineThickness,a.dashLength),d.setCN(b,n,"graph-stroke"),g.push(n),a.bullet&&(a.hidden||
(e=a.bulletColorR),n=d.bullet(l,a.bullet,a.bulletSize,e,a.bulletAlpha,a.bulletBorderThickness,f,a.bulletBorderAlpha))&&(d.setCN(b,n,"graph-bullet"),n.translate(m+1,m/2),g.push(n)),p=0,n=m,q=m/3;else{var t;a.getGradRotation&&(t=a.getGradRotation(),0===t&&(t=180));n=a.fillColorsR;!0===a.hidden&&(n=e);if(g=this.createMarker("rectangle",n,a.fillAlphas,a.lineThickness,e,a.lineAlpha,t,g,a.dashLength))p=m,g.translate(p,m/2);n=m}d.setCN(b,g,"graph-"+c);d.setCN(b,g,"graph-"+a.id)}else if(k)g=l.image(k,0,0,
m,m);else{var r;isNaN(this.gradientRotation)||(r=180+this.gradientRotation);(g=this.createMarker(c,e,h,void 0,void 0,void 0,r,g))&&g.translate(m/2,m/2)}d.setCN(b,g,"legend-marker");this.addListeners(g,a);l=l.set([g]);this.switchable&&a.switchable&&l.setAttr("cursor","pointer");void 0!==a.id&&d.setCN(b,l,"legend-item-"+a.id);d.setCN(b,l,a.className,!0);(f=this.switchType)&&"none"!=f&&0<m&&("x"==f?(t=this.createX(),t.translate(m/2,m/2)):t=this.createV(),t.dItem=a,!0!==a.hidden?"x"==f?t.hide():t.show():
"x"!=f&&t.hide(),this.switchable||t.hide(),this.addListeners(t,a),a.legendSwitch=t,l.push(t),d.setCN(b,t,"legend-switch"));f=this.color;a.showBalloon&&this.textClickEnabled&&void 0!==this.selectedColor&&(f=this.selectedColor);this.useMarkerColorForLabels&&(f=e);!0===a.hidden&&(f=this.markerDisabledColor);e=d.massReplace(this.labelText,{"[[title]]":a.title});t=this.fontSize;g&&(m<=t&&g.translate(p,m/2+this.ly-t/2+(t+2-m)/2-q),a.legendEntryWidth=g.getBBox().width);var u;e&&(e=d.fixBrakes(e),a.legendTextReal=
e,u=this.labelWidth,u=isNaN(u)?d.text(this.container,e,f,b.fontFamily,t,"start"):d.wrappedText(this.container,e,f,b.fontFamily,t,"start",!1,u,0),d.setCN(b,u,"legend-label"),u.translate(this.lx+n,this.ly),l.push(u),b=u.getBBox().width,this.maxLabelWidth<b&&(this.maxLabelWidth=b));this.entries[this.index]=l;a.legendEntry=this.entries[this.index];a.legendLabel=u;this.index++}},addListeners:function(a,b){var c=this;a&&a.mouseover(function(a){c.rollOverMarker(b,a)}).mouseout(function(a){c.rollOutMarker(b,
a)}).click(function(a){c.clickMarker(b,a)})},rollOverMarker:function(a,b){this.switchable&&this.dispatch("rollOverMarker",a,b);this.dispatch("rollOverItem",a,b)},rollOutMarker:function(a,b){this.switchable&&this.dispatch("rollOutMarker",a,b);this.dispatch("rollOutItem",a,b)},clickMarker:function(a,b){this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b));this.dispatch("clickMarker",a,b)},rollOverLabel:function(a,b){a.hidden||(this.textClickEnabled&&a.legendLabel&&
a.legendLabel.attr({fill:this.rollOverColor}),this.dispatch("rollOverItem",a,b))},rollOutLabel:function(a,b){if(!a.hidden){if(this.textClickEnabled&&a.legendLabel){var c=this.color;void 0!==this.selectedColor&&a.showBalloon&&(c=this.selectedColor);this.useMarkerColorForLabels&&(c=a.lineColor,void 0===c&&(c=a.color));a.legendLabel.attr({fill:c})}this.dispatch("rollOutItem",a,b)}},clickLabel:function(a,b){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a,b):this.switchable&&(!0===a.hidden?
this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b))},dispatch:function(a,b,c){a={type:a,dataItem:b,target:this,event:c,chart:this.chart};this.chart&&this.chart.handleLegendEvent(a);this.fire(a)},createValue:function(a){var b=this,c=b.fontSize,e=b.chart;if(!1!==a.visibleInLegend&&!a.hideFromLegend){var h=b.maxLabelWidth;b.forceWidth&&(h=b.labelWidth);b.equalWidths||(b.valueAlign="left");"left"==b.valueAlign&&(h=a.legendEntry.getBBox().width);var f=h;if(b.valueText&&0<b.valueWidth){var g=b.color;
b.useMarkerColorForValues&&(g=a.color,a.legendKeyColor&&(g=a.legendKeyColor()));!0===a.hidden&&(g=b.markerDisabledColor);var k=b.valueText,h=h+b.lx+b.markerLabelGap+b.valueWidth,l="end";"left"==b.valueAlign&&(h-=b.valueWidth,l="start");g=d.text(b.container,k,g,b.chart.fontFamily,c,l);d.setCN(e,g,"legend-value");g.translate(h,b.ly);b.entries[b.index].push(g);f+=b.valueWidth+2*b.markerLabelGap;g.dItem=a;b.valueLabels.push(g)}b.index++;e=b.markerSize;e<c+7&&(e=c+7,d.VML&&(e+=3));c=b.container.rect(a.legendEntryWidth,
0,f,e,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005});c.dItem=a;b.entries[b.index-1].push(c);c.mouseover(function(c){b.rollOverLabel(a,c)}).mouseout(function(c){b.rollOutLabel(a,c)}).click(function(c){b.clickLabel(a,c)})}},createV:function(){var a=this.markerSize;return d.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,e=d.line(c,[-a,a],[-a,a]).attr(b),
a=d.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([e,a])},createMarker:function(a,b,c,e,h,f,g,k,l){var m=this.markerSize,n=this.container;h||(h=this.markerBorderColor);h||(h=b);isNaN(e)&&(e=this.markerBorderThickness);isNaN(f)&&(f=this.markerBorderAlpha);return d.bullet(n,a,m,b,c,e,h,f,m,g,k,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,e=this.data;if(a)for(c=0;c<a.length;c++){var h=a[c],f=h.dItem,g=" ";if(e)f.value?
h.text(f.value):h.text("");else{var k;if(void 0!==f.type){k=f.currentDataItem;var l=this.periodValueText;f.legendPeriodValueText&&(l=f.legendPeriodValueText);k?(g=this.valueText,f.legendValueText&&(g=f.legendValueText),g=b.formatString(g,k)):l&&b.formatPeriodString&&(l=d.massReplace(l,{"[[title]]":f.title}),g=b.formatPeriodString(l,f))}else g=b.formatString(this.valueText,f);if(l=this.valueFunction)k&&(f=k),g=l(f,g);h.text(g)}}},renderFix:function(){if(!d.VML&&this.enabled){var a=this.container;a&&
a.renderFix()}},destroy:function(){this.div.innerHTML="";d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.formatMilliseconds=function(a,b){if(-1!=a.indexOf("fff")){var c=b.getMilliseconds(),d=String(c);10>c&&(d="00"+c);10<=c&&100>c&&(d="0"+c);a=a.replace(/fff/g,d)}return a};d.extractPeriod=function(a){var b=d.stripNumbers(a),c=1;b!=a&&(c=Number(a.slice(0,a.indexOf(b))));return{period:b,count:c}};d.getDate=function(a,b,c){return a instanceof Date?d.newDate(a,c):b&&isNaN(a)?d.stringToDate(a,b):new Date(a)};d.daysInMonth=function(a){return(new Date(a.getYear(),a.getMonth()+
1,0)).getDate()};d.newDate=function(a,b){return b&&-1==b.indexOf("fff")?new Date(a):new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds())};d.resetDateToMin=function(a,b,c,e){void 0===e&&(e=1);var h,f,g,k,l,m,n;d.useUTC?(h=a.getUTCFullYear(),f=a.getUTCMonth(),g=a.getUTCDate(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),n=a.getUTCMilliseconds(),a=a.getUTCDay()):(h=a.getFullYear(),f=a.getMonth(),g=a.getDate(),k=a.getHours(),l=
a.getMinutes(),m=a.getSeconds(),n=a.getMilliseconds(),a=a.getDay());switch(b){case "YYYY":h=Math.floor(h/c)*c;f=0;g=1;n=m=l=k=0;break;case "MM":f=Math.floor(f/c)*c;g=1;n=m=l=k=0;break;case "WW":g=a>=e?g-a+e:g-(7+a)+e;n=m=l=k=0;break;case "DD":n=m=l=k=0;break;case "hh":k=Math.floor(k/c)*c;n=m=l=0;break;case "mm":l=Math.floor(l/c)*c;n=m=0;break;case "ss":m=Math.floor(m/c)*c;n=0;break;case "fff":n=Math.floor(n/c)*c}d.useUTC?(a=new Date,a.setUTCFullYear(h,f,g),a.setUTCHours(k,l,m,n)):a=new Date(h,f,g,
k,l,m,n);return a};d.getPeriodDuration=function(a,b){void 0===b&&(b=1);var c;switch(a){case "YYYY":c=316224E5;break;case "MM":c=26784E5;break;case "WW":c=6048E5;break;case "DD":c=864E5;break;case "hh":c=36E5;break;case "mm":c=6E4;break;case "ss":c=1E3;break;case "fff":c=1}return c*b};d.intervals={s:{nextInterval:"ss",contains:1E3},ss:{nextInterval:"mm",contains:60,count:0},mm:{nextInterval:"hh",contains:60,count:1},hh:{nextInterval:"DD",contains:24,count:2},DD:{nextInterval:"",contains:Infinity,count:3}};
d.getMaxInterval=function(a,b){var c=d.intervals;return a>=c[b].contains?(a=Math.round(a/c[b].contains),b=c[b].nextInterval,d.getMaxInterval(a,b)):"ss"==b?c[b].nextInterval:b};d.dayNames="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");d.shortDayNames="Sun Mon Tue Wed Thu Fri Sat".split(" ");d.monthNames="January February March April May June July August September October November December".split(" ");d.shortMonthNames="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
d.getWeekNumber=function(a){a=new Date(a);a.setHours(0,0,0);a.setDate(a.getDate()+4-(a.getDay()||7));var b=new Date(a.getFullYear(),0,1);return Math.ceil(((a-b)/864E5+1)/7)};d.stringToDate=function(a,b){var c={},e=[{pattern:"YYYY",period:"year"},{pattern:"YY",period:"year"},{pattern:"MM",period:"month"},{pattern:"M",period:"month"},{pattern:"DD",period:"date"},{pattern:"D",period:"date"},{pattern:"JJ",period:"hours"},{pattern:"J",period:"hours"},{pattern:"HH",period:"hours"},{pattern:"H",period:"hours"},
{pattern:"KK",period:"hours"},{pattern:"K",period:"hours"},{pattern:"LL",period:"hours"},{pattern:"L",period:"hours"},{pattern:"NN",period:"minutes"},{pattern:"N",period:"minutes"},{pattern:"SS",period:"seconds"},{pattern:"S",period:"seconds"},{pattern:"QQQ",period:"milliseconds"},{pattern:"QQ",period:"milliseconds"},{pattern:"Q",period:"milliseconds"}],h=!0,f=b.indexOf("AA");-1!=f&&(a.substr(f,2),"pm"==a.toLowerCase&&(h=!1));var f=b,g,k,l;for(l=0;l<e.length;l++)k=e[l].period,c[k]=0,"date"==k&&(c[k]=
1);for(l=0;l<e.length;l++)if(g=e[l].pattern,k=e[l].period,-1!=b.indexOf(g)){var m=d.getFromDateString(g,a,f);b=b.replace(g,"");if("KK"==g||"K"==g||"LL"==g||"L"==g)h||(m+=12);c[k]=m}d.useUTC?(e=new Date,e.setUTCFullYear(c.year,c.month,c.date),e.setUTCHours(c.hours,c.minutes,c.seconds,c.milliseconds)):e=new Date(c.year,c.month,c.date,c.hours,c.minutes,c.seconds,c.milliseconds);return e};d.getFromDateString=function(a,b,c){if(void 0!==b)return c=c.indexOf(a),b=String(b),b=b.substr(c,a.length),"0"==b.charAt(0)&&
(b=b.substr(1,b.length-1)),b=Number(b),isNaN(b)&&(b=0),-1!=a.indexOf("M")&&b--,b};d.formatDate=function(a,b,c){c||(c=d);var e,h,f,g,k,l,m,n,q=d.getWeekNumber(a);d.useUTC?(e=a.getUTCFullYear(),h=a.getUTCMonth(),f=a.getUTCDate(),g=a.getUTCDay(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),n=a.getUTCMilliseconds()):(e=a.getFullYear(),h=a.getMonth(),f=a.getDate(),g=a.getDay(),k=a.getHours(),l=a.getMinutes(),m=a.getSeconds(),n=a.getMilliseconds());var p=String(e).substr(2,2),t="0"+g;b=b.replace(/W/g,
q);q=k;24==q&&(q=0);var r=q;10>r&&(r="0"+r);b=b.replace(/JJ/g,r);b=b.replace(/J/g,q);r=k;0===r&&(r=24,-1!=b.indexOf("H")&&(f--,0===f&&(e=new Date(a),e.setDate(e.getDate()-1),h=e.getMonth(),f=e.getDate(),e=e.getFullYear())));a=h+1;9>h&&(a="0"+a);q=f;10>f&&(q="0"+f);var u=r;10>u&&(u="0"+u);b=b.replace(/HH/g,u);b=b.replace(/H/g,r);r=k;11<r&&(r-=12);u=r;10>u&&(u="0"+u);b=b.replace(/KK/g,u);b=b.replace(/K/g,r);r=k;0===r&&(r=12);12<r&&(r-=12);u=r;10>u&&(u="0"+u);b=b.replace(/LL/g,u);b=b.replace(/L/g,r);
r=l;10>r&&(r="0"+r);b=b.replace(/NN/g,r);b=b.replace(/N/g,l);l=m;10>l&&(l="0"+l);b=b.replace(/SS/g,l);b=b.replace(/S/g,m);m=n;10>m&&(m="00"+m);100>m&&(m="0"+m);l=n;10>l&&(l="00"+l);b=b.replace(/QQQ/g,m);b=b.replace(/QQ/g,l);b=b.replace(/Q/g,n);b=12>k?b.replace(/A/g,c.amString):b.replace(/A/g,c.pmString);b=b.replace(/YYYY/g,"@IIII@");b=b.replace(/YY/g,"@II@");b=b.replace(/MMMM/g,"@XXXX@");b=b.replace(/MMM/g,"@XXX@");b=b.replace(/MM/g,"@XX@");b=b.replace(/M/g,"@X@");b=b.replace(/DD/g,"@RR@");b=b.replace(/D/g,
"@R@");b=b.replace(/EEEE/g,"@PPPP@");b=b.replace(/EEE/g,"@PPP@");b=b.replace(/EE/g,"@PP@");b=b.replace(/E/g,"@P@");b=b.replace(/@IIII@/g,e);b=b.replace(/@II@/g,p);b=b.replace(/@XXXX@/g,c.monthNames[h]);b=b.replace(/@XXX@/g,c.shortMonthNames[h]);b=b.replace(/@XX@/g,a);b=b.replace(/@X@/g,h+1);b=b.replace(/@RR@/g,q);b=b.replace(/@R@/g,f);b=b.replace(/@PPPP@/g,c.dayNames[g]);b=b.replace(/@PPP@/g,c.shortDayNames[g]);b=b.replace(/@PP@/g,t);return b=b.replace(/@P@/g,g)};d.changeDate=function(a,b,c,e,h){if(d.useUTC)return d.changeUTCDate(a,
b,c,e,h);var f=-1;void 0===e&&(e=!0);void 0===h&&(h=!1);!0===e&&(f=1);switch(b){case "YYYY":a.setFullYear(a.getFullYear()+c*f);e||h||a.setDate(a.getDate()+1);break;case "MM":b=a.getMonth();a.setMonth(a.getMonth()+c*f);a.getMonth()>b+c*f&&a.setDate(a.getDate()-1);e||h||a.setDate(a.getDate()+1);break;case "DD":a.setDate(a.getDate()+c*f);break;case "WW":a.setDate(a.getDate()+c*f*7);break;case "hh":a.setHours(a.getHours()+c*f);break;case "mm":a.setMinutes(a.getMinutes()+c*f);break;case "ss":a.setSeconds(a.getSeconds()+
c*f);break;case "fff":a.setMilliseconds(a.getMilliseconds()+c*f)}return a};d.changeUTCDate=function(a,b,c,d,h){var f=-1;void 0===d&&(d=!0);void 0===h&&(h=!1);!0===d&&(f=1);switch(b){case "YYYY":a.setUTCFullYear(a.getUTCFullYear()+c*f);d||h||a.setUTCDate(a.getUTCDate()+1);break;case "MM":b=a.getUTCMonth();a.setUTCMonth(a.getUTCMonth()+c*f);a.getUTCMonth()>b+c*f&&a.setUTCDate(a.getUTCDate()-1);d||h||a.setUTCDate(a.getUTCDate()+1);break;case "DD":a.setUTCDate(a.getUTCDate()+c*f);break;case "WW":a.setUTCDate(a.getUTCDate()+
c*f*7);break;case "hh":a.setUTCHours(a.getUTCHours()+c*f);break;case "mm":a.setUTCMinutes(a.getUTCMinutes()+c*f);break;case "ss":a.setUTCSeconds(a.getUTCSeconds()+c*f);break;case "fff":a.setUTCMilliseconds(a.getUTCMilliseconds()+c*f)}return a}})();
define("amcharts", function(){});

(function(){var e=window.AmCharts;e.AmRectangularChart=e.Class({inherits:e.AmCoordinateChart,construct:function(a){e.AmRectangularChart.base.construct.call(this,a);this.theme=a;this.createEvents("zoomed","changed");this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=20;this.depth3D=this.angle=0;this.plotAreaFillColors="#FFFFFF";this.plotAreaFillAlphas=0;this.plotAreaBorderColor="#000000";this.plotAreaBorderAlpha=0;this.maxZoomFactor=20;this.zoomOutButtonImageSize=19;this.zoomOutButtonImage=
"lens";this.zoomOutText="Show all";this.zoomOutButtonColor="#e5e5e5";this.zoomOutButtonAlpha=0;this.zoomOutButtonRollOverAlpha=1;this.zoomOutButtonPadding=8;this.trendLines=[];this.autoMargins=!0;this.marginsUpdated=!1;this.autoMarginOffset=10;e.applyTheme(this,a,"AmRectangularChart")},initChart:function(){e.AmRectangularChart.base.initChart.call(this);this.updateDxy();!this.marginsUpdated&&this.autoMargins&&(this.resetMargins(),this.drawGraphs=!1);this.processScrollbars();this.updateMargins();this.updatePlotArea();
this.updateScrollbars();this.updateTrendLines();this.updateChartCursor();this.updateValueAxes();this.scrollbarOnly||this.updateGraphs()},drawChart:function(){e.AmRectangularChart.base.drawChart.call(this);this.drawPlotArea();if(e.ifArray(this.chartData)){var a=this.chartCursor;a&&a.draw()}},resetMargins:function(){var a={},b;if("xy"==this.type){var c=this.xAxes,d=this.yAxes;for(b=0;b<c.length;b++){var g=c[b];g.ignoreAxisWidth||(g.setOrientation(!0),g.fixAxisPosition(),a[g.position]=!0)}for(b=0;b<
d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(!1),c.fixAxisPosition(),a[c.position]=!0)}else{d=this.valueAxes;for(b=0;b<d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(this.rotate),c.fixAxisPosition(),a[c.position]=!0);(b=this.categoryAxis)&&!b.ignoreAxisWidth&&(b.setOrientation(!this.rotate),b.fixAxisPosition(),b.fixAxisPosition(),a[b.position]=!0)}a.left&&(this.marginLeft=0);a.right&&(this.marginRight=0);a.top&&(this.marginTop=0);a.bottom&&(this.marginBottom=0);this.fixMargins=
a},measureMargins:function(){var a=this.valueAxes,b,c=this.autoMarginOffset,d=this.fixMargins,g=this.realWidth,h=this.realHeight,f=c,e=c,l=g;b=h;var m;for(m=0;m<a.length;m++)a[m].handleSynchronization(),b=this.getAxisBounds(a[m],f,l,e,b),f=Math.round(b.l),l=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);if(a=this.categoryAxis)b=this.getAxisBounds(a,f,l,e,b),f=Math.round(b.l),l=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);d.left&&f<c&&(this.marginLeft=Math.round(-f+c));d.right&&l>=g-c&&
(this.marginRight=Math.round(l-g+c));d.top&&e<c+this.titleHeight&&(this.marginTop=Math.round(this.marginTop-e+c+this.titleHeight));d.bottom&&b>h-c&&(this.marginBottom=Math.round(this.marginBottom+b-h+c));this.initChart()},getAxisBounds:function(a,b,c,d,g){if(!a.ignoreAxisWidth){var e=a.labelsSet,f=a.tickLength;a.inside&&(f=0);if(e)switch(e=a.getBBox(),a.position){case "top":a=e.y;d>a&&(d=a);break;case "bottom":a=e.y+e.height;g<a&&(g=a);break;case "right":a=e.x+e.width+f+3;c<a&&(c=a);break;case "left":a=
e.x-f,b>a&&(b=a)}}return{l:b,t:d,r:c,b:g}},drawZoomOutButton:function(){var a=this;if(!a.zbSet){var b=a.container.set();a.zoomButtonSet.push(b);var c=a.color,d=a.fontSize,g=a.zoomOutButtonImageSize,h=a.zoomOutButtonImage.replace(/\.[a-z]*$/i,""),f=e.lang.zoomOutText||a.zoomOutText,k=a.zoomOutButtonColor,l=a.zoomOutButtonAlpha,m=a.zoomOutButtonFontSize,q=a.zoomOutButtonPadding;isNaN(m)||(d=m);(m=a.zoomOutButtonFontColor)&&(c=m);var m=a.zoomOutButton,n;m&&(m.fontSize&&(d=m.fontSize),m.color&&(c=m.color),
m.backgroundColor&&(k=m.backgroundColor),isNaN(m.backgroundAlpha)||(a.zoomOutButtonRollOverAlpha=m.backgroundAlpha));var p=m=0;void 0!==a.pathToImages&&h&&(n=a.container.image(a.pathToImages+h+a.extension,0,0,g,g),e.setCN(a,n,"zoom-out-image"),b.push(n),n=n.getBBox(),m=n.width+5);void 0!==f&&(c=e.text(a.container,f,c,a.fontFamily,d,"start"),e.setCN(a,c,"zoom-out-label"),d=c.getBBox(),p=n?n.height/2-3:d.height/2,c.translate(m,p),b.push(c));n=b.getBBox();c=1;e.isModern||(c=0);k=e.rect(a.container,n.width+
2*q+5,n.height+2*q-2,k,1,1,k,c);k.setAttr("opacity",l);k.translate(-q,-q);e.setCN(a,k,"zoom-out-bg");b.push(k);k.toBack();a.zbBG=k;n=k.getBBox();b.translate(a.marginLeftReal+a.plotAreaWidth-n.width+q,a.marginTopReal+q);b.hide();b.mouseover(function(){a.rollOverZB()}).mouseout(function(){a.rollOutZB()}).click(function(){a.clickZB()}).touchstart(function(){a.rollOverZB()}).touchend(function(){a.rollOutZB();a.clickZB()});for(l=0;l<b.length;l++)b[l].attr({cursor:"pointer"});a.zbSet=b}},rollOverZB:function(){this.rolledOverZB=
!0;this.zbBG.setAttr("opacity",this.zoomOutButtonRollOverAlpha)},rollOutZB:function(){this.rolledOverZB=!1;this.zbBG.setAttr("opacity",this.zoomOutButtonAlpha)},clickZB:function(){this.rolledOverZB=!1;this.zoomOut()},zoomOut:function(){this.zoomOutValueAxes()},drawPlotArea:function(){var a=this.dx,b=this.dy,c=this.marginLeftReal,d=this.marginTopReal,g=this.plotAreaWidth-1,h=this.plotAreaHeight-1,f=this.plotAreaFillColors,k=this.plotAreaFillAlphas,l=this.plotAreaBorderColor,m=this.plotAreaBorderAlpha;
"object"==typeof k&&(k=k[0]);f=e.polygon(this.container,[0,g,g,0,0],[0,0,h,h,0],f,k,1,l,m,this.plotAreaGradientAngle);e.setCN(this,f,"plot-area");f.translate(c+a,d+b);this.set.push(f);0!==a&&0!==b&&(f=this.plotAreaFillColors,"object"==typeof f&&(f=f[0]),f=e.adjustLuminosity(f,-.15),g=e.polygon(this.container,[0,a,g+a,g,0],[0,b,b,0,0],f,k,1,l,m),e.setCN(this,g,"plot-area-bottom"),g.translate(c,d+h),this.set.push(g),a=e.polygon(this.container,[0,0,a,a,0],[0,h,h+b,b,0],f,k,1,l,m),e.setCN(this,a,"plot-area-left"),
a.translate(c,d),this.set.push(a));(c=this.bbset)&&this.scrollbarOnly&&c.remove()},updatePlotArea:function(){var a=this.updateWidth(),b=this.updateHeight(),c=this.container;this.realWidth=a;this.realWidth=b;c&&this.container.setSize(a,b);var c=this.marginLeftReal,d=this.marginTopReal,a=a-c-this.marginRightReal-this.dx,b=b-d-this.marginBottomReal;1>a&&(a=1);1>b&&(b=1);this.plotAreaWidth=Math.round(a);this.plotAreaHeight=Math.round(b);this.plotBalloonsSet.translate(c,d)},updateDxy:function(){this.dx=
Math.round(this.depth3D*Math.cos(this.angle*Math.PI/180));this.dy=Math.round(-this.depth3D*Math.sin(this.angle*Math.PI/180));this.d3x=Math.round(this.columnSpacing3D*Math.cos(this.angle*Math.PI/180));this.d3y=Math.round(-this.columnSpacing3D*Math.sin(this.angle*Math.PI/180))},updateMargins:function(){var a=this.getTitleHeight();this.titleHeight=a;this.marginTopReal=this.marginTop-this.dy;this.fixMargins&&!this.fixMargins.top&&(this.marginTopReal+=a);this.marginBottomReal=this.marginBottom;this.marginLeftReal=
this.marginLeft;this.marginRightReal=this.marginRight},updateValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b];this.setAxisRenderers(c);this.updateObjectSize(c)}},setAxisRenderers:function(a){a.axisRenderer=e.RecAxis;a.guideFillRenderer=e.RecFill;a.axisItemRenderer=e.RecItem;a.marginsChanged=!0},updateGraphs:function(){var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.index=b;c.rotate=this.rotate;this.updateObjectSize(c)}},updateObjectSize:function(a){a.width=this.plotAreaWidth-
1;a.height=this.plotAreaHeight-1;a.x=this.marginLeftReal;a.y=this.marginTopReal;a.dx=this.dx;a.dy=this.dy},updateChartCursor:function(){var a=this.chartCursor;a&&(a=e.processObject(a,e.ChartCursor,this.theme),this.updateObjectSize(a),this.addChartCursor(a),a.chart=this)},processScrollbars:function(){var a=this.chartScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),this.addChartScrollbar(a))},updateScrollbars:function(){},removeChartCursor:function(){e.callMethod("destroy",[this.chartCursor]);
this.chartCursor=null},zoomTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b];c.valueAxis.recalculateToPercents?c.set&&c.set.hide():(c.x=this.marginLeftReal,c.y=this.marginTopReal,c.draw())}},handleCursorValueZoom:function(){},addTrendLine:function(a){this.trendLines.push(a)},zoomOutValueAxes:function(){for(var a=this.valueAxes,b=0;b<a.length;b++)a[b].zoomOut()},removeTrendLine:function(a){var b=this.trendLines,c;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1)},adjustMargins:function(a,
b){var c=a.position,d=a.scrollbarHeight+a.offset;a.enabled&&("top"==c?b?this.marginLeftReal+=d:this.marginTopReal+=d:b?this.marginRightReal+=d:this.marginBottomReal+=d)},getScrollbarPosition:function(a,b,c){var d="bottom",g="top";a.oppositeAxis||(g=d,d="top");a.position=b?"bottom"==c||"left"==c?d:g:"top"==c||"right"==c?d:g},updateChartScrollbar:function(a,b){if(a){a.rotate=b;var c=this.marginTopReal,d=this.marginLeftReal,g=a.scrollbarHeight,e=this.dx,f=this.dy,k=a.offset;"top"==a.position?b?(a.y=
c,a.x=d-g-k):(a.y=c-g+f-k,a.x=d+e):b?(a.y=c+f,a.x=d+this.plotAreaWidth+e+k):(a.y=c+this.plotAreaHeight+k,a.x=this.marginLeftReal)}},showZB:function(a){var b=this.zbSet;a&&(b=this.zoomOutText,""!==b&&b&&this.drawZoomOutButton());if(b=this.zbSet)this.zoomButtonSet.push(b),a?b.show():b.hide(),this.rollOutZB()},handleReleaseOutside:function(a){e.AmRectangularChart.base.handleReleaseOutside.call(this,a);(a=this.chartCursor)&&a.handleReleaseOutside&&a.handleReleaseOutside()},handleMouseDown:function(a){e.AmRectangularChart.base.handleMouseDown.call(this,
a);var b=this.chartCursor;b&&b.handleMouseDown&&!this.rolledOverZB&&b.handleMouseDown(a)},update:function(){e.AmRectangularChart.base.update.call(this);this.chartCursor&&this.chartCursor.update&&this.chartCursor.update()},handleScrollbarValueZoom:function(a){this.relativeZoomValueAxes(a.target.valueAxes,a.relativeStart,a.relativeEnd);this.zoomAxesAndGraphs()},zoomValueScrollbar:function(a){if(a&&a.enabled){var b=a.valueAxes[0],c=b.relativeStart,d=b.relativeEnd;b.reversed&&(d=1-c,c=1-b.relativeEnd);
a.percentZoom(c,d)}},zoomAxesAndGraphs:function(){if(!this.scrollbarOnly){var a=this.valueAxes,b;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);a=this.graphs;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);(b=this.chartCursor)&&b.clearSelection();this.zoomTrendLines()}},handleValueAxisZoomReal:function(a,b){var c=a.relativeStart,d=a.relativeEnd;if(c>d)var g=c,c=d,d=g;this.relativeZoomValueAxes(b,c,d);this.updateAfterValueZoom()},updateAfterValueZoom:function(){this.zoomAxesAndGraphs();
this.zoomScrollbar()},relativeZoomValueAxes:function(a,b,c){b=e.fitToBounds(b,0,1);c=e.fitToBounds(c,0,1);if(b>c){var d=b;b=c;c=d}var d=1/this.maxZoomFactor,g=e.getDecimals(d)+4;c-b<d&&(c=b+(c-b)/2,b=c-d/2,c+=d/2);b=e.roundTo(b,g);c=e.roundTo(c,g);d=!1;if(a){for(g=0;g<a.length;g++){var h=a[g].zoomToRelativeValues(b,c,!0);h&&(d=h)}this.showZB()}return d},addChartCursor:function(a){e.callMethod("destroy",[this.chartCursor]);a&&(this.listenTo(a,"moved",this.handleCursorMove),this.listenTo(a,"zoomed",
this.handleCursorZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted),this.listenTo(a,"panning",this.handleCursorPanning),this.listenTo(a,"onHideCursor",this.handleCursorHide));this.chartCursor=a},handleCursorChange:function(){},handleCursorMove:function(a){var b,c=this.valueAxes;for(b=0;b<c.length;b++)a.panning||c[b].showBalloon(a.x,a.y)},handleCursorZoom:function(a){if(this.skipZoomed)this.skipZoomed=!1;else{var b=this.startX0,c=this.endX0,d=this.endY0,g=this.startY0,e=a.startX,f=a.endX,
k=a.startY,l=a.endY;this.startX0=this.endX0=this.startY0=this.endY0=NaN;this.handleCursorZoomReal(b+e*(c-b),b+f*(c-b),g+k*(d-g),g+l*(d-g),a)}},handleCursorHide:function(){var a,b=this.valueAxes;for(a=0;a<b.length;a++)b[a].hideBalloon();b=this.graphs;for(a=0;a<b.length;a++)b[a].hideBalloonReal()}})})();(function(){var e=window.AmCharts;e.AmSerialChart=e.Class({inherits:e.AmRectangularChart,construct:function(a){this.type="serial";e.AmSerialChart.base.construct.call(this,a);this.cname="AmSerialChart";this.theme=a;this.columnSpacing=5;this.columnSpacing3D=0;this.columnWidth=.8;var b=new e.CategoryAxis(a);b.chart=this;this.categoryAxis=b;this.zoomOutOnDataUpdate=!0;this.mouseWheelZoomEnabled=this.mouseWheelScrollEnabled=this.rotate=this.skipZoom=!1;this.minSelectedTime=0;e.applyTheme(this,a,this.cname)},
initChart:function(){e.AmSerialChart.base.initChart.call(this);this.updateCategoryAxis(this.categoryAxis,this.rotate,"categoryAxis");if(this.dataChanged)this.parseData();else this.onDataUpdated();this.drawGraphs=!0},onDataUpdated:function(){var a=this.countColumns(),b=this.chartData,c=this.graphs,d;for(d=0;d<c.length;d++){var g=c[d];g.data=b;g.columnCount=a}0<b.length&&(this.firstTime=this.getStartTime(b[0].time),this.lastTime=this.getEndTime(b[b.length-1].time));this.drawChart();this.autoMargins&&
!this.marginsUpdated?(this.marginsUpdated=!0,this.measureMargins()):this.dispDUpd()},handleWheelReal:function(a,b){if(!this.wheelBusy){var c=this.categoryAxis,d=c.parseDates,g=c.minDuration(),e=c=1;this.mouseWheelZoomEnabled?b||(c=-1):b&&(c=-1);var f=this.chartData.length,k=this.lastTime,l=this.firstTime;0>a?d?(f=this.endTime-this.startTime,d=this.startTime+c*g,g=this.endTime+e*g,0<e&&0<c&&g>=k&&(g=k,d=k-f),this.zoomToDates(new Date(d),new Date(g))):(0<e&&0<c&&this.end>=f-1&&(c=e=0),d=this.start+
c,g=this.end+e,this.zoomToIndexes(d,g)):d?(f=this.endTime-this.startTime,d=this.startTime-c*g,g=this.endTime-e*g,0<e&&0<c&&d<=l&&(d=l,g=l+f),this.zoomToDates(new Date(d),new Date(g))):(0<e&&0<c&&1>this.start&&(c=e=0),d=this.start-c,g=this.end-e,this.zoomToIndexes(d,g))}},validateData:function(a){this.marginsUpdated=!1;this.zoomOutOnDataUpdate&&!a&&(this.endTime=this.end=this.startTime=this.start=NaN);e.AmSerialChart.base.validateData.call(this)},drawChart:function(){if(0<this.realWidth&&0<this.realHeight){e.AmSerialChart.base.drawChart.call(this);
var a=this.chartData;if(e.ifArray(a)){var b=this.chartScrollbar;!b||!this.marginsUpdated&&this.autoMargins||b.draw();(b=this.valueScrollbar)&&b.draw();var a=a.length-1,c,b=this.categoryAxis;if(b.parseDates&&!b.equalSpacing){if(b=this.startTime,c=this.endTime,isNaN(b)||isNaN(c))b=this.firstTime,c=this.lastTime}else if(b=this.start,c=this.end,isNaN(b)||isNaN(c))b=0,c=a;this.endTime=this.startTime=this.end=this.start=void 0;this.zoom(b,c)}}else this.cleanChart()},cleanChart:function(){e.callMethod("destroy",
[this.valueAxes,this.graphs,this.categoryAxis,this.chartScrollbar,this.chartCursor,this.valueScrollbar])},updateCategoryAxis:function(a,b,c){a.chart=this;a.id=c;a.rotate=b;a.setOrientation(!this.rotate);a.init();this.setAxisRenderers(a);this.updateObjectSize(a)},updateValueAxes:function(){e.AmSerialChart.base.updateValueAxes.call(this);var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],d=this.rotate;c.rotate=d;c.setOrientation(d);d=this.categoryAxis;if(!d.startOnAxis||d.parseDates)c.expandMinMax=
!0}},getStartTime:function(a){var b=this.categoryAxis;return e.resetDateToMin(new Date(a),b.minPeriod,1,b.firstDayOfWeek).getTime()},getEndTime:function(a){var b=e.extractPeriod(this.categoryAxis.minPeriod);return e.changeDate(new Date(a),b.period,b.count,!0).getTime()-1},updateMargins:function(){e.AmSerialChart.base.updateMargins.call(this);var a=this.chartScrollbar;a&&(this.getScrollbarPosition(a,this.rotate,this.categoryAxis.position),this.adjustMargins(a,this.rotate));if(a=this.valueScrollbar)this.getScrollbarPosition(a,
!this.rotate,this.valueAxes[0].position),this.adjustMargins(a,!this.rotate)},updateScrollbars:function(){e.AmSerialChart.base.updateScrollbars.call(this);this.updateChartScrollbar(this.chartScrollbar,this.rotate);this.updateChartScrollbar(this.valueScrollbar,!this.rotate)},zoom:function(a,b){var c=this.categoryAxis;c.parseDates&&!c.equalSpacing?this.timeZoom(a,b):this.indexZoom(a,b);isNaN(a)&&this.zoomOutValueAxes();this.updateLegendValues()},timeZoom:function(a,b){var c=this.maxSelectedTime;isNaN(c)||
(b!=this.endTime&&b-a>c&&(a=b-c),a!=this.startTime&&b-a>c&&(b=a+c));var d=this.minSelectedTime;if(0<d&&b-a<d){var g=Math.round(a+(b-a)/2),d=Math.round(d/2);a=g-d;b=g+d}d=this.chartData;g=this.categoryAxis;if(e.ifArray(d)&&(a!=this.startTime||b!=this.endTime)){var h=g.minDuration(),f=this.firstTime,k=this.lastTime;a||(a=f,isNaN(c)||(a=k-c));b||(b=k);a>k&&(a=k);b<f&&(b=f);a<f&&(a=f);b>k&&(b=k);b<a&&(b=a+h);b-a<h/5&&(b<k?b=a+h/5:a=b-h/5);this.startTime=a;this.endTime=b;c=d.length-1;h=this.getClosestIndex(d,
"time",a,!0,0,c);d=this.getClosestIndex(d,"time",b,!1,h,c);g.timeZoom(a,b);g.zoom(h,d);this.start=e.fitToBounds(h,0,c);this.end=e.fitToBounds(d,0,c);this.zoomAxesAndGraphs();this.zoomScrollbar();this.fixCursor();this.showZB();this.updateColumnsDepth();this.dispatchTimeZoomEvent()}},showZB:function(){var a,b=this.categoryAxis;b&&b.parseDates&&!b.equalSpacing&&(this.startTime>this.firstTime&&(a=!0),this.endTime<this.lastTime&&(a=!0));0<this.start&&(a=!0);this.end<this.chartData.length-1&&(a=!0);if(b=
this.valueAxes)b=b[0],0!==b.relativeStart&&(a=!0),1!=b.relativeEnd&&(a=!0);e.AmSerialChart.base.showZB.call(this,a)},updateAfterValueZoom:function(){e.AmSerialChart.base.updateAfterValueZoom.call(this);this.updateColumnsDepth()},indexZoom:function(a,b){var c=this.maxSelectedSeries;isNaN(c)||(b!=this.end&&b-a>c&&(a=b-c),a!=this.start&&b-a>c&&(b=a+c));if(a!=this.start||b!=this.end){var d=this.chartData.length-1;isNaN(a)&&(a=0,isNaN(c)||(a=d-c));isNaN(b)&&(b=d);b<a&&(b=a);b>d&&(b=d);a>d&&(a=d-1);0>a&&
(a=0);this.start=a;this.end=b;this.categoryAxis.zoom(a,b);this.zoomAxesAndGraphs();this.zoomScrollbar();this.fixCursor();0!==a||b!=this.chartData.length-1?this.showZB(!0):this.showZB(!1);this.updateColumnsDepth();this.dispatchIndexZoomEvent()}},updateGraphs:function(){e.AmSerialChart.base.updateGraphs.call(this);var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.columnWidthReal=this.columnWidth;c.categoryAxis=this.categoryAxis;e.isString(c.fillToGraph)&&(c.fillToGraph=this.graphsById[c.fillToGraph])}},
zoomAxesAndGraphs:function(){e.AmSerialChart.base.zoomAxesAndGraphs.call(this);this.updateColumnsDepth()},updateColumnsDepth:function(){if(0!==this.depth3D||0!==this.angle){var a,b=this.graphs,c;this.columnsArray=[];for(a=0;a<b.length;a++){c=b[a];var d=c.columnsArray;if(d){var g;for(g=0;g<d.length;g++)this.columnsArray.push(d[g])}}this.columnsArray.sort(this.compareDepth);if(0<this.columnsArray.length){b=this.columnsSet;d=this.container.set();this.columnSet.push(d);for(a=0;a<this.columnsArray.length;a++)d.push(this.columnsArray[a].column.set);
c&&d.translate(c.x,c.y);this.columnsSet=d;e.remove(b)}}},compareDepth:function(a,b){return a.depth>b.depth?1:-1},zoomScrollbar:function(){var a=this.chartScrollbar,b=this.categoryAxis;if(a){if(!this.zoomedByScrollbar){var c=a.dragger;c&&c.stop()}this.zoomedByScrollbar=!1;b.parseDates&&!b.equalSpacing?a.timeZoom(this.startTime,this.endTime):a.zoom(this.start,this.end)}this.zoomValueScrollbar(this.valueScrollbar)},updateTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b],
c=e.processObject(c,e.TrendLine,this.theme);a[b]=c;c.chart=this;c.id||(c.id="trendLineAuto"+b+"_"+(new Date).getTime());e.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.categoryAxis=this.categoryAxis}},countColumns:function(){var a=0,b=this.valueAxes.length,c=this.graphs.length,d,g,e=!1,f,k;for(k=0;k<b;k++){g=this.valueAxes[k];var l=g.stackType;if("100%"==l||"regular"==l)for(e=!1,f=0;f<c;f++)d=this.graphs[f],d.tcc=1,d.valueAxis==
g&&"column"==d.type&&(!e&&d.stackable&&(a++,e=!0),(!d.stackable&&d.clustered||d.newStack)&&a++,d.columnIndex=a-1,d.clustered||(d.columnIndex=0));if("none"==l||"3d"==l){e=!1;for(f=0;f<c;f++)d=this.graphs[f],d.valueAxis==g&&"column"==d.type&&(d.clustered?(d.tcc=1,d.newStack&&(a=0),d.hidden||(d.columnIndex=a,a++)):d.hidden||(e=!0,d.tcc=1,d.columnIndex=0));e&&0===a&&(a=1)}if("3d"==l){g=1;for(k=0;k<c;k++)d=this.graphs[k],d.newStack&&g++,d.depthCount=g,d.tcc=a;a=g}}return a},parseData:function(){e.AmSerialChart.base.parseData.call(this);
this.parseSerialData(this.dataProvider)},getCategoryIndexByValue:function(a){var b=this.chartData,c;for(c=0;c<b.length;c++)if(b[c].category==a)return c},handleScrollbarZoom:function(a){this.zoomedByScrollbar=!0;this.zoom(a.start,a.end)},dispatchTimeZoomEvent:function(){if(this.drawGraphs&&(this.prevStartTime!=this.startTime||this.prevEndTime!=this.endTime)){var a={type:"zoomed"};a.startDate=new Date(this.startTime);a.endDate=new Date(this.endTime);a.startIndex=this.start;a.endIndex=this.end;this.startIndex=
this.start;this.endIndex=this.end;this.startDate=a.startDate;this.endDate=a.endDate;this.prevStartTime=this.startTime;this.prevEndTime=this.endTime;var b=this.categoryAxis,c=e.extractPeriod(b.minPeriod).period,b=b.dateFormatsObject[c];a.startValue=e.formatDate(a.startDate,b,this);a.endValue=e.formatDate(a.endDate,b,this);a.chart=this;a.target=this;this.fire(a)}},dispatchIndexZoomEvent:function(){if(this.drawGraphs&&(this.prevStartIndex!=this.start||this.prevEndIndex!=this.end)){this.startIndex=this.start;
this.endIndex=this.end;var a=this.chartData;if(e.ifArray(a)&&!isNaN(this.start)&&!isNaN(this.end)){var b={chart:this,target:this,type:"zoomed"};b.startIndex=this.start;b.endIndex=this.end;b.startValue=a[this.start].category;b.endValue=a[this.end].category;this.categoryAxis.parseDates&&(this.startTime=a[this.start].time,this.endTime=a[this.end].time,b.startDate=new Date(this.startTime),b.endDate=new Date(this.endTime));this.prevStartIndex=this.start;this.prevEndIndex=this.end;this.fire(b)}}},updateLegendValues:function(){this.legend&&
this.legend.updateValues()},getClosestIndex:function(a,b,c,d,e,h){0>e&&(e=0);h>a.length-1&&(h=a.length-1);var f=e+Math.round((h-e)/2),k=a[f][b];return c==k?f:1>=h-e?d?e:Math.abs(a[e][b]-c)<Math.abs(a[h][b]-c)?e:h:c==k?f:c<k?this.getClosestIndex(a,b,c,d,e,f):this.getClosestIndex(a,b,c,d,f,h)},zoomToIndexes:function(a,b){var c=this.chartData;if(c){var d=c.length;0<d&&(0>a&&(a=0),b>d-1&&(b=d-1),d=this.categoryAxis,d.parseDates&&!d.equalSpacing?this.zoom(c[a].time,this.getEndTime(c[b].time)):this.zoom(a,
b))}},zoomToDates:function(a,b){var c=this.chartData;if(c)if(this.categoryAxis.equalSpacing){var d=this.getClosestIndex(c,"time",a.getTime(),!0,0,c.length);b=e.resetDateToMin(b,this.categoryAxis.minPeriod,1);c=this.getClosestIndex(c,"time",b.getTime(),!1,0,c.length);this.zoom(d,c)}else this.zoom(a.getTime(),b.getTime())},zoomToCategoryValues:function(a,b){this.chartData&&this.zoom(this.getCategoryIndexByValue(a),this.getCategoryIndexByValue(b))},formatPeriodString:function(a,b){if(b){var c=["value",
"open","low","high","close"],d="value open low high close average sum count".split(" "),g=b.valueAxis,h=this.chartData,f=b.numberFormatter;f||(f=this.nf);for(var k=0;k<c.length;k++){for(var l=c[k],m=0,q=0,n,p,x,u,B,r=0,t=0,C,v,w,A,z,G=this.start;G<=this.end;G++){var y=h[G];if(y&&(y=y.axes[g.id].graphs[b.id])){if(y.values){var D=y.values[l];if(this.rotate){if(0>y.x||y.x>y.graph.height)D=NaN}else if(0>y.x||y.x>y.graph.width)D=NaN;if(!isNaN(D)){isNaN(n)&&(n=D);p=D;if(isNaN(x)||x>D)x=D;if(isNaN(u)||u<
D)u=D;B=e.getDecimals(m);var F=e.getDecimals(D),m=m+D,m=e.roundTo(m,Math.max(B,F));q++;B=m/q}}if(y.percents&&(y=y.percents[l],!isNaN(y))){isNaN(C)&&(C=y);v=y;if(isNaN(w)||w>y)w=y;if(isNaN(A)||A<y)A=y;z=e.getDecimals(r);D=e.getDecimals(y);r+=y;r=e.roundTo(r,Math.max(z,D));t++;z=r/t}}}r={open:C,close:v,high:A,low:w,average:z,sum:r,count:t};a=e.formatValue(a,{open:n,close:p,high:u,low:x,average:B,sum:m,count:q},d,f,l+"\\.",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=e.formatValue(a,
r,d,this.pf,"percents\\."+l+"\\.")}}return a=e.cleanFromEmpty(a)},formatString:function(a,b,c){if(b){var d=b.graph;if(void 0!==a){if(-1!=a.indexOf("[[category]]")){var g=b.serialDataItem.category;if(this.categoryAxis.parseDates){var h=this.balloonDateFormat,f=this.chartCursor;f&&f.categoryBalloonDateFormat&&(h=f.categoryBalloonDateFormat);h=e.formatDate(g,h,this);-1!=h.indexOf("fff")&&(h=e.formatMilliseconds(h,g));g=h}a=a.replace(/\[\[category\]\]/g,String(g))}g=d.numberFormatter;g||(g=this.nf);h=
b.graph.valueAxis;(f=h.duration)&&!isNaN(b.values.value)&&(f=e.formatDuration(b.values.value,f,"",h.durationUnits,h.maxInterval,g),a=a.replace(RegExp("\\[\\[value\\]\\]","g"),f));"date"==h.type&&(h=e.formatDate(new Date(b.values.value),d.dateFormat,this),f=RegExp("\\[\\[value\\]\\]","g"),a=a.replace(f,h),h=e.formatDate(new Date(b.values.open),d.dateFormat,this),f=RegExp("\\[\\[open\\]\\]","g"),a=a.replace(f,h));d="value open low high close total".split(" ");h=this.pf;a=e.formatValue(a,b.percents,
d,h,"percents\\.");a=e.formatValue(a,b.values,d,g,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=e.formatValue(a,b.values,["percents"],h);-1!=a.indexOf("[[")&&(a=e.formatDataContextValue(a,b.dataContext));-1!=a.indexOf("[[")&&b.graph.customData&&(a=e.formatDataContextValue(a,b.graph.customData));a=e.AmSerialChart.base.formatString.call(this,a,b,c)}return a}},updateChartCursor:function(){e.AmSerialChart.base.updateChartCursor.call(this);var a=this.chartCursor,b=this.categoryAxis;
if(a){var c=a.categoryBalloonAlpha,d=a.categoryBalloonColor,g=a.color;void 0===d&&(d=a.cursorColor);var h=a.valueZoomable,f=a.zoomable,k=a.valueLineEnabled;this.rotate?(a.vLineEnabled=k,a.hZoomEnabled=h,a.vZoomEnabled=f):(a.hLineEnabled=k,a.vZoomEnabled=h,a.hZoomEnabled=f);if(a.valueLineBalloonEnabled)for(k=0;k<this.valueAxes.length;k++)h=this.valueAxes[k],(f=h.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,h.balloon=f;else for(f=
0;f<this.valueAxes.length;f++)h=this.valueAxes[f],h.balloon&&(h.balloon=null);b&&(b.balloonTextFunction=a.categoryBalloonFunction,a.categoryLineAxis=b,b.balloonText=a.categoryBalloonText,a.categoryBalloonEnabled&&((f=b.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,b.balloon=f),b.balloon&&(b.balloon.enabled=a.categoryBalloonEnabled))}},addChartScrollbar:function(a){e.callMethod("destroy",[this.chartScrollbar]);a&&(a.chart=this,
this.listenTo(a,"zoomed",this.handleScrollbarZoom));this.rotate?void 0===a.width&&(a.width=a.scrollbarHeight):void 0===a.height&&(a.height=a.scrollbarHeight);a.gridAxis=this.categoryAxis;this.chartScrollbar=a},addValueScrollbar:function(a){e.callMethod("destroy",[this.valueScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarValueZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted));var b=a.scrollbarHeight;this.rotate?void 0===a.height&&(a.height=b):void 0===a.width&&
(a.width=b);a.gridAxis||(a.gridAxis=this.valueAxes[0]);a.valueAxes=this.valueAxes;this.valueScrollbar=a},removeChartScrollbar:function(){e.callMethod("destroy",[this.chartScrollbar]);this.chartScrollbar=null},removeValueScrollbar:function(){e.callMethod("destroy",[this.valueScrollbar]);this.valueScrollbar=null},handleReleaseOutside:function(a){e.AmSerialChart.base.handleReleaseOutside.call(this,a);e.callMethod("handleReleaseOutside",[this.chartScrollbar,this.valueScrollbar])},update:function(){e.AmSerialChart.base.update.call(this);
this.chartScrollbar&&this.chartScrollbar.update&&this.chartScrollbar.update();this.valueScrollbar&&this.valueScrollbar.update&&this.valueScrollbar.update()},processScrollbars:function(){e.AmSerialChart.base.processScrollbars.call(this);var a=this.valueScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),a.id="valueScrollbar",this.addValueScrollbar(a))},handleValueAxisZoom:function(a){this.handleValueAxisZoomReal(a,this.valueAxes)},zoomOut:function(){e.AmSerialChart.base.zoomOut.call(this);
this.zoom()},getNextItem:function(a){var b=a.index,c=this.chartData,d=a.graph;if(b+1<c.length)for(b+=1;b<c.length;b++)if(a=c[b])if(a=a.axes[d.valueAxis.id].graphs[d.id],!isNaN(a.y))return a},handleCursorZoomReal:function(a,b,c,d,e){var h=e.target,f,k;this.rotate?(isNaN(a)||isNaN(b)||this.relativeZoomValueAxes(this.valueAxes,a,b)&&this.updateAfterValueZoom(),h.vZoomEnabled&&(f=e.start,k=e.end)):(isNaN(c)||isNaN(d)||this.relativeZoomValueAxes(this.valueAxes,c,d)&&this.updateAfterValueZoom(),h.hZoomEnabled&&
(f=e.start,k=e.end));isNaN(f)||isNaN(k)||(a=this.categoryAxis,a.parseDates&&!a.equalSpacing?this.zoomToDates(new Date(f),new Date(k)):this.zoomToIndexes(f,k))},handleCursorZoomStarted:function(){var a=this.valueAxes;if(a){var a=a[0],b=a.relativeStart,c=a.relativeEnd;a.reversed&&(b=1-a.relativeEnd,c=1-a.relativeStart);this.rotate?(this.startX0=b,this.endX0=c):(this.startY0=b,this.endY0=c)}this.categoryAxis&&(this.start0=this.start,this.end0=this.end,this.startTime0=this.startTime,this.endTime0=this.endTime)},
fixCursor:function(){this.chartCursor&&this.chartCursor.fixPosition();this.prevCursorItem=null},handleCursorMove:function(a){e.AmSerialChart.base.handleCursorMove.call(this,a);var b=a.target,c=this.categoryAxis;if(a.panning)this.handleCursorHide(a);else if(this.chartData&&!b.isHidden){var d=this.graphs;if(d){var g;g=c.xToIndex(this.rotate?a.y:a.x);if(g=this.chartData[g]){var h,f,k,l;if(b.oneBalloonOnly){var m=Infinity;for(h=0;h<d.length;h++)if(f=d[h],f.balloon.enabled&&f.showBalloon&&!f.hidden){k=
f.valueAxis.id;k=g.axes[k].graphs[f.id];k=k.y;"top"==f.showBalloonAt&&(k=0);"bottom"==f.showBalloonAt&&(k=this.height);var q=b.mouseX,n=b.mouseY;k=this.rotate?Math.abs(q-k):Math.abs(n-k);k<m&&(m=k,l=f)}b.mostCloseGraph=l}if(this.prevCursorItem!=g||l!=this.prevMostCloseGraph){m=[];for(h=0;h<d.length;h++)f=d[h],k=f.valueAxis.id,k=g.axes[k].graphs[f.id],b.showNextAvailable&&isNaN(k.y)&&(k=this.getNextItem(k)),l&&f!=l?(f.showGraphBalloon(k,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.hide(0)):
b.valueBalloonsEnabled?(f.balloon.showBullet=b.bulletsEnabled,f.balloon.bulletSize=b.bulletSize/2,a.hideBalloons||(f.showGraphBalloon(k,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.set&&m.push({balloon:f.balloon,y:f.balloon.pointToY}))):(f.currentDataItem=k,f.resizeBullet(k,b.graphBulletSize,b.graphBulletAlpha));b.avoidBalloonOverlapping&&this.arrangeBalloons(m);this.prevCursorItem=g}this.prevMostCloseGraph=l}}c.showBalloon(a.x,a.y,b.categoryBalloonDateFormat,a.skip);this.updateLegendValues()}},
handleCursorHide:function(a){e.AmSerialChart.base.handleCursorHide.call(this,a);a=this.categoryAxis;this.prevCursorItem=null;this.updateLegendValues();a&&a.hideBalloon();a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].currentDataItem=null},handleCursorPanning:function(a){var b=a.target,c,d=a.deltaX,g=a.deltaY,h=a.delta2X,f=a.delta2Y;a=!1;if(this.rotate){isNaN(h)&&(h=d,a=!0);var k=this.endX0;c=this.startX0;var l=k-c,k=k-l*h,m=l;a||(m=0);a=e.fitToBounds(c-l*d,0,1-m)}else isNaN(f)&&(f=g,a=!0),k=this.endY0,
c=this.startY0,l=k-c,k+=l*g,m=l,a||(m=0),a=e.fitToBounds(c+l*f,0,1-m);c=e.fitToBounds(k,m,1);var q;b.valueZoomable&&(q=this.relativeZoomValueAxes(this.valueAxes,a,c));var n;c=this.categoryAxis;this.rotate&&(d=g,h=f);a=!1;isNaN(h)&&(h=d,a=!0);if(b.zoomable&&(0<Math.abs(d)||0<Math.abs(h)))if(c.parseDates&&!c.equalSpacing){if(f=this.startTime0,g=this.endTime0,c=g-f,h*=c,l=this.firstTime,k=this.lastTime,m=c,a||(m=0),a=Math.round(e.fitToBounds(f-c*d,l,k-m)),h=Math.round(e.fitToBounds(g-h,l+m,k)),this.startTime!=
a||this.endTime!=h)n={chart:this,target:b,type:"zoomed",start:a,end:h},this.skipZoomed=!0,b.fire(n),this.zoom(a,h),n=!0}else if(f=this.start0,g=this.end0,c=g-f,d=Math.round(c*d),h=Math.round(c*h),l=this.chartData.length-1,a||(c=0),a=e.fitToBounds(f-d,0,l-c),c=e.fitToBounds(g-h,c,l),this.start!=a||this.end!=c)this.skipZoomed=!0,b.fire({chart:this,target:b,type:"zoomed",start:a,end:c}),this.zoom(a,c),n=!0;!n&&q&&this.updateAfterValueZoom()},arrangeBalloons:function(a){var b=this.plotAreaHeight;a.sort(this.compareY);
var c,d,e,h=this.plotAreaWidth,f=a.length;for(c=0;c<f;c++)d=a[c].balloon,d.setBounds(0,0,h,b),d.restorePrevious(),d.draw(),b=d.yPos-3;a.reverse();for(c=0;c<f;c++){d=a[c].balloon;var b=d.bottom,k=d.bottom-d.yPos;0<c&&b-k<e+3&&(d.setBounds(0,e+3,h,e+k+3),d.restorePrevious(),d.draw());d.set&&d.set.show();e=d.bottom}},compareY:function(a,b){return a.y<b.y?1:-1}})})();(function(){var e=window.AmCharts;e.Cuboid=e.Class({construct:function(a,b,c,d,e,h,f,k,l,m,q,n,p,x,u,B,r){this.set=a.set();this.container=a;this.h=Math.round(c);this.w=Math.round(b);this.dx=d;this.dy=e;this.colors=h;this.alpha=f;this.bwidth=k;this.bcolor=l;this.balpha=m;this.dashLength=x;this.topRadius=B;this.pattern=u;this.rotate=p;this.bcn=r;p?0>b&&0===q&&(q=180):0>c&&270==q&&(q=90);this.gradientRotation=q;0===d&&0===e&&(this.cornerRadius=n);this.draw()},draw:function(){var a=this.set;a.clear();
var b=this.container,c=b.chart,d=this.w,g=this.h,h=this.dx,f=this.dy,k=this.colors,l=this.alpha,m=this.bwidth,q=this.bcolor,n=this.balpha,p=this.gradientRotation,x=this.cornerRadius,u=this.dashLength,B=this.pattern,r=this.topRadius,t=this.bcn,C=k,v=k;"object"==typeof k&&(C=k[0],v=k[k.length-1]);var w,A,z,G,y,D,F,L,M,Q=l;B&&(l=0);var E,H,I,J,K=this.rotate;if(0<Math.abs(h)||0<Math.abs(f))if(isNaN(r))F=v,v=e.adjustLuminosity(C,-.2),v=e.adjustLuminosity(C,-.2),w=e.polygon(b,[0,h,d+h,d,0],[0,f,f,0,0],
v,l,1,q,0,p),0<n&&(M=e.line(b,[0,h,d+h],[0,f,f],q,n,m,u)),A=e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],v,l,1,q,0,p),A.translate(h,f),0<n&&(z=e.line(b,[h,h],[f,f+g],q,n,m,u)),G=e.polygon(b,[0,0,h,h,0],[0,g,g+f,f,0],v,l,1,q,0,p),y=e.polygon(b,[d,d,d+h,d+h,d],[0,g,g+f,f,0],v,l,1,q,0,p),0<n&&(D=e.line(b,[d,d+h,d+h,d],[0,f,g+f,g],q,n,m,u)),v=e.adjustLuminosity(F,.2),F=e.polygon(b,[0,h,d+h,d,0],[g,g+f,g+f,g,g],v,l,1,q,0,p),0<n&&(L=e.line(b,[0,h,d+h],[g,g+f,g+f],q,n,m,u));else{var N,O,P;K?(N=g/2,v=h/2,P=g/2,O=
d+h/2,H=Math.abs(g/2),E=Math.abs(h/2)):(v=d/2,N=f/2,O=d/2,P=g+f/2+1,E=Math.abs(d/2),H=Math.abs(f/2));I=E*r;J=H*r;.1<E&&.1<E&&(w=e.circle(b,E,C,l,m,q,n,!1,H),w.translate(v,N));.1<I&&.1<I&&(F=e.circle(b,I,e.adjustLuminosity(C,.5),l,m,q,n,!1,J),F.translate(O,P))}l=Q;1>Math.abs(g)&&(g=0);1>Math.abs(d)&&(d=0);!isNaN(r)&&(0<Math.abs(h)||0<Math.abs(f))?(k=[C],k={fill:k,stroke:q,"stroke-width":m,"stroke-opacity":n,"fill-opacity":l},K?(l="M0,0 L"+d+","+(g/2-g/2*r),m=" B",0<d&&(m=" A"),e.VML?(l+=m+Math.round(d-
I)+","+Math.round(g/2-J)+","+Math.round(d+I)+","+Math.round(g/2+J)+","+d+",0,"+d+","+g,l=l+(" L0,"+g)+(m+Math.round(-E)+","+Math.round(g/2-H)+","+Math.round(E)+","+Math.round(g/2+H)+",0,"+g+",0,0")):(l+="A"+I+","+J+",0,0,0,"+d+","+(g-g/2*(1-r))+"L0,"+g,l+="A"+E+","+H+",0,0,1,0,0"),E=90):(m=d/2-d/2*r,l="M0,0 L"+m+","+g,e.VML?(l="M0,0 L"+m+","+g,m=" B",0>g&&(m=" A"),l+=m+Math.round(d/2-I)+","+Math.round(g-J)+","+Math.round(d/2+I)+","+Math.round(g+J)+",0,"+g+","+d+","+g,l+=" L"+d+",0",l+=m+Math.round(d/
2+E)+","+Math.round(H)+","+Math.round(d/2-E)+","+Math.round(-H)+","+d+",0,0,0"):(l+="A"+I+","+J+",0,0,0,"+(d-d/2*(1-r))+","+g+"L"+d+",0",l+="A"+E+","+H+",0,0,1,0,0"),E=180),b=b.path(l).attr(k),b.gradient("linearGradient",[C,e.adjustLuminosity(C,-.3),e.adjustLuminosity(C,-.3),C],E),K?b.translate(h/2,0):b.translate(0,f/2)):b=0===g?e.line(b,[0,d],[0,0],q,n,m,u):0===d?e.line(b,[0,0],[0,g],q,n,m,u):0<x?e.rect(b,d,g,k,l,m,q,n,x,p,u):e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],k,l,m,q,n,p,!1,u);d=isNaN(r)?0>g?[w,
M,A,z,G,y,D,F,L,b]:[F,L,A,z,G,y,w,M,D,b]:K?0<d?[w,b,F]:[F,b,w]:0>g?[w,b,F]:[F,b,w];e.setCN(c,b,t+"front");e.setCN(c,A,t+"back");e.setCN(c,F,t+"top");e.setCN(c,w,t+"bottom");e.setCN(c,G,t+"left");e.setCN(c,y,t+"right");for(w=0;w<d.length;w++)if(A=d[w])a.push(A),e.setCN(c,A,t+"element");B&&b.pattern(B,NaN,c.path)},width:function(a){isNaN(a)&&(a=0);this.w=Math.round(a);this.draw()},height:function(a){isNaN(a)&&(a=0);this.h=Math.round(a);this.draw()},animateHeight:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rh=c.h;c.frame=0;c.height(1);setTimeout(function(){c.updateHeight.call(c)},1E3/e.updateRate)},updateHeight:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rh-1,b),a.height(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateHeight.call(a)}):setTimeout(function(){a.updateHeight.call(a)},1E3/e.updateRate)):(a.height(a.rh),a.animationFinished=!0)},animateWidth:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rw=c.w;c.frame=0;c.width(1);setTimeout(function(){c.updateWidth.call(c)},1E3/e.updateRate)},updateWidth:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rw-1,b),a.width(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateWidth.call(a)}):setTimeout(function(){a.updateWidth.call(a)},1E3/e.updateRate)):(a.width(a.rw),a.animationFinished=!0)}})})();(function(){var e=window.AmCharts;e.CategoryAxis=e.Class({inherits:e.AxisBase,construct:function(a){this.cname="CategoryAxis";e.CategoryAxis.base.construct.call(this,a);this.minPeriod="DD";this.equalSpacing=this.parseDates=!1;this.position="bottom";this.startOnAxis=!1;this.gridPosition="middle";this.safeDistance=30;this.stickBalloonToCategory=!1;e.applyTheme(this,a,this.cname)},draw:function(){e.CategoryAxis.base.draw.call(this);this.generateDFObject();var a=this.chart.chartData;this.data=a;this.labelRotationR=
this.labelRotation;this.type=null;if(e.ifArray(a)){var b,c=this.chart;"scrollbar"!=this.id?(e.setCN(c,this.set,"category-axis"),e.setCN(c,this.labelsSet,"category-axis"),e.setCN(c,this.axisLine.axisSet,"category-axis")):this.bcn=this.id+"-";var d=this.start,g=this.labelFrequency,h=0,f=this.end-d+1,k=this.gridCountR,l=this.showFirstLabel,m=this.showLastLabel,q,n,p="",p=e.extractPeriod(this.minPeriod),x=e.getPeriodDuration(p.period,p.count),u,B,r,t,C=this.rotate;q=this.firstDayOfWeek;n=this.boldPeriodBeginning;
b=e.resetDateToMin(new Date(a[a.length-1].time+1.05*x),this.minPeriod,1,q).getTime();this.firstTime=c.firstTime;this.endTime>b&&(this.endTime=b);t=this.minorGridEnabled;B=this.gridAlpha;var v,w=0,A=0;if(this.widthField)for(b=this.start;b<=this.end;b++)if(v=this.data[b]){var z=Number(this.data[b].dataContext[this.widthField]);isNaN(z)||(w+=z,v.widthValue=z)}if(this.parseDates&&!this.equalSpacing)this.lastTime=a[a.length-1].time,this.maxTime=e.resetDateToMin(new Date(this.lastTime+1.05*x),this.minPeriod,
1,q).getTime(),this.timeDifference=this.endTime-this.startTime,this.parseDatesDraw();else if(!this.parseDates){if(this.cellWidth=this.getStepWidth(f),f<k&&(k=f),h+=this.start,this.stepWidth=this.getStepWidth(f),0<k)for(k=Math.floor(f/k),f=this.chooseMinorFrequency(k),p=h,p/2==Math.round(p/2)&&p--,0>p&&(p=0),v=0,this.widthField&&(p=this.start),this.end-p+1>=this.autoRotateCount&&(this.labelRotationR=this.autoRotateAngle),b=p;b<=this.end+2;b++){n=!1;0<=b&&b<this.data.length?(u=this.data[b],p=u.category,
n=u.forceShow):p="";if(t&&!isNaN(f))if(b/f==Math.round(b/f)||n)b/k==Math.round(b/k)||n||(this.gridAlpha=this.minorGridAlpha,p=void 0);else continue;else if(b/k!=Math.round(b/k)&&!n)continue;q=this.getCoordinate(b-h);r=0;"start"==this.gridPosition&&(q-=this.cellWidth/2,r=this.cellWidth/2);n=!0;a=r;"start"==this.tickPosition&&(a=0,n=!1,r=0);if(b==d&&!l||b==this.end&&!m)p=void 0;Math.round(v/g)!=v/g&&(p=void 0);v++;z=this.cellWidth;C&&(z=NaN,this.ignoreAxisWidth||!c.autoMargins)&&(z="right"==this.position?
c.marginRight:c.marginLeft,z-=this.tickLength+10);this.labelFunction&&u&&(p=this.labelFunction(p,u,this));p=e.fixBrakes(p);x=!1;this.boldLabels&&(x=!0);b>this.end&&"start"==this.tickPosition&&(p=" ");this.rotate&&this.inside&&(r-=2);isNaN(u.widthValue)||(u.percentWidthValue=u.widthValue/w*100,z=this.rotate?this.height*u.widthValue/w:this.width*u.widthValue/w,q=A,A+=z,r=z/2);r=new this.axisItemRenderer(this,q,p,n,z,r,void 0,x,a,!1,u.labelColor,u.className);r.serialDataItem=u;this.pushAxisItem(r);this.gridAlpha=
B}}else if(this.parseDates&&this.equalSpacing){h=this.start;this.startTime=this.data[this.start].time;this.endTime=this.data[this.end].time;this.timeDifference=this.endTime-this.startTime;b=this.choosePeriod(0);g=b.period;u=b.count;b=e.getPeriodDuration(g,u);b<x&&(g=p.period,u=p.count,b=x);B=g;"WW"==B&&(B="DD");this.currentDateFormat=this.dateFormatsObject[B];this.stepWidth=this.getStepWidth(f);k=Math.ceil(this.timeDifference/b)+1;x=e.resetDateToMin(new Date(this.startTime-b),g,u,q).getTime();this.cellWidth=
this.getStepWidth(f);p=Math.round(x/b);d=-1;p/2==Math.round(p/2)&&(d=-2,x-=b);p=this.start;p/2==Math.round(p/2)&&p--;0>p&&(p=0);A=this.end+2;A>=this.data.length&&(A=this.data.length);v=!1;v=!l;this.previousPos=-1E3;20<this.labelRotationR&&(this.safeDistance=5);a=p;if(this.data[p].time!=e.resetDateToMin(new Date(this.data[p].time),g,u,q).getTime())for(q=0,z=x,b=p;b<A;b++)f=this.data[b].time,this.checkPeriodChange(g,u,f,z)&&(q++,2<=q&&(a=b,b=A),z=f);t&&1<u&&(f=this.chooseMinorFrequency(u),e.getPeriodDuration(g,
f));if(0<this.gridCountR)for(b=p;b<A;b++)if(f=this.data[b].time,this.checkPeriodChange(g,u,f,x)&&b>=a){q=this.getCoordinate(b-this.start);t=!1;this.nextPeriod[B]&&(t=this.checkPeriodChange(this.nextPeriod[B],1,f,x,B));x=!1;t&&this.markPeriodChange?(t=this.dateFormatsObject[this.nextPeriod[B]],x=!0):t=this.dateFormatsObject[B];p=e.formatDate(new Date(f),t,c);if(b==d&&!l||b==k&&!m)p=" ";v?v=!1:(n||(x=!1),q-this.previousPos>this.safeDistance*Math.cos(this.labelRotationR*Math.PI/180)&&(this.labelFunction&&
(p=this.labelFunction(p,new Date(f),this,g,u,r)),this.boldLabels&&(x=!0),r=new this.axisItemRenderer(this,q,p,void 0,void 0,void 0,void 0,x),t=r.graphics(),this.pushAxisItem(r),t=t.getBBox().width,e.isModern||(t-=q),this.previousPos=q+t));r=x=f}}for(b=l=0;b<this.data.length;b++)if(v=this.data[b])this.parseDates&&!this.equalSpacing?(m=v.time,d=this.cellWidth,"MM"==this.minPeriod&&(d=864E5*e.daysInMonth(new Date(m))*this.stepWidth,v.cellWidth=d),m=Math.round((m-this.startTime)*this.stepWidth+d/2)):
m=this.getCoordinate(b-h),v.x[this.id]=m;if(this.widthField)for(b=this.start;b<=this.end;b++)v=this.data[b],d=v.widthValue,v.percentWidthValue=d/w*100,this.rotate?(m=this.height*d/w/2+l,l=this.height*d/w+l):(m=this.width*d/w/2+l,l=this.width*d/w+l),v.x[this.id]=m;w=this.guides.length;for(b=0;b<w;b++)l=this.guides[b],n=k=k=t=d=NaN,m=l.above,l.toCategory&&(k=c.getCategoryIndexByValue(l.toCategory),isNaN(k)||(d=this.getCoordinate(k-h),l.expand&&(d+=this.cellWidth/2),r=new this.axisItemRenderer(this,
d,"",!0,NaN,NaN,l),this.pushAxisItem(r,m))),l.category&&(n=c.getCategoryIndexByValue(l.category),isNaN(n)||(t=this.getCoordinate(n-h),l.expand&&(t-=this.cellWidth/2),k=(d-t)/2,r=new this.axisItemRenderer(this,t,l.label,!0,NaN,k,l),this.pushAxisItem(r,m))),n=c.dataDateFormat,l.toDate&&(!n||l.toDate instanceof Date||(l.toDate=l.toDate.toString()+" |"),l.toDate=e.getDate(l.toDate,n),this.equalSpacing?(k=c.getClosestIndex(this.data,"time",l.toDate.getTime(),!1,0,this.data.length-1),isNaN(k)||(d=this.getCoordinate(k-
h))):d=(l.toDate.getTime()-this.startTime)*this.stepWidth,r=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,l),this.pushAxisItem(r,m)),l.date&&(!n||l.date instanceof Date||(l.date=l.date.toString()+" |"),l.date=e.getDate(l.date,n),this.equalSpacing?(n=c.getClosestIndex(this.data,"time",l.date.getTime(),!1,0,this.data.length-1),isNaN(n)||(t=this.getCoordinate(n-h))):t=(l.date.getTime()-this.startTime)*this.stepWidth,k=(d-t)/2,n=!0,l.toDate&&(n=!1),r="H"==this.orientation?new this.axisItemRenderer(this,
t,l.label,n,2*k,NaN,l):new this.axisItemRenderer(this,t,l.label,!1,NaN,k,l),this.pushAxisItem(r,m)),(0<d||0<t)&&(d<this.width||t<this.width)&&(d=new this.guideFillRenderer(this,t,d,l),t=d.graphics(),this.pushAxisItem(d,m),l.graphics=t,t.index=b,l.balloonText&&this.addEventListeners(t,l));if(c=c.chartCursor)C?c.fixHeight(this.cellWidth):(c.fixWidth(this.cellWidth),c.fullWidth&&this.balloon&&(this.balloon.minWidth=this.cellWidth));this.previousHeight=G}this.axisCreated=!0;this.set.translate(this.x,
this.y);this.labelsSet.translate(this.x,this.y);this.labelsSet.show();this.positionTitle();(C=this.axisLine.set)&&C.toFront();var G=this.getBBox().height;2<G-this.previousHeight&&this.autoWrap&&!this.parseDates&&(this.axisCreated=this.chart.marginsUpdated=!1)},xToIndex:function(a){var b=this.data,c=this.chart,d=c.rotate,g=this.stepWidth,h;if(this.parseDates&&!this.equalSpacing)a=this.startTime+Math.round(a/g)-this.minDuration()/2,h=c.getClosestIndex(b,"time",a,!1,this.start,this.end+1);else if(this.widthField)for(c=
Infinity,g=this.start;g<=this.end;g++){var f=this.data[g];f&&(f=Math.abs(f.x[this.id]-a),f<c&&(c=f,h=g))}else this.startOnAxis||(a-=g/2),h=this.start+Math.round(a/g);h=e.fitToBounds(h,0,b.length-1);var k;b[h]&&(k=b[h].x[this.id]);d?k>this.height+1&&h--:k>this.width+1&&h--;0>k&&h++;return h=e.fitToBounds(h,0,b.length-1)},dateToCoordinate:function(a){return this.parseDates&&!this.equalSpacing?(a.getTime()-this.startTime)*this.stepWidth:this.parseDates&&this.equalSpacing?(a=this.chart.getClosestIndex(this.data,
"time",a.getTime(),!1,0,this.data.length-1),this.getCoordinate(a-this.start)):NaN},categoryToCoordinate:function(a){if(this.chart){var b=this.chart.getCategoryIndexByValue(a);if(!isNaN(b))return this.getCoordinate(b-this.start);if(this.parseDates)return this.dateToCoordinate(new Date(a))}else return NaN},coordinateToDate:function(a){return this.equalSpacing?(a=this.xToIndex(a),new Date(this.data[a].time)):new Date(this.startTime+a/this.stepWidth)},coordinateToValue:function(a){a=this.xToIndex(a);
if(a=this.data[a])return this.parseDates?a.time:a.category},getCoordinate:function(a){a*=this.stepWidth;this.startOnAxis||(a+=this.stepWidth/2);return Math.round(a)},formatValue:function(a,b){b||(b=this.currentDateFormat);this.parseDates&&(a=e.formatDate(new Date(a),b,this.chart));return a},showBalloonAt:function(a){a=this.parseDates?this.dateToCoordinate(new Date(a)):this.categoryToCoordinate(a);return this.adjustBalloonCoordinate(a)},formatBalloonText:function(a,b,c){var d="",g="",h=this.chart,
f=this.data[b];if(f)if(this.parseDates)d=e.formatDate(f.category,c,h),b=e.changeDate(new Date(f.category),this.minPeriod,1),g=e.formatDate(b,c,h),-1!=d.indexOf("fff")&&(d=e.formatMilliseconds(d,f.category),g=e.formatMilliseconds(g,b));else{var k;this.data[b+1]&&(k=this.data[b+1]);d=e.fixNewLines(f.category);k&&(g=e.fixNewLines(k.category))}a=a.replace(/\[\[category\]\]/g,String(d));return a=a.replace(/\[\[toCategory\]\]/g,String(g))},adjustBalloonCoordinate:function(a,b){var c=this.xToIndex(a),d=
this.chart.chartCursor;if(this.stickBalloonToCategory){var e=this.data[c];e&&(a=e.x[this.id]);this.stickBalloonToStart&&(a-=this.cellWidth/2);var h=0;if(d){var f=d.limitToGraph;f&&(h=e.axes[f.valueAxis.id].graphs[f.id].y);this.rotate?("left"==this.position?(f&&(h-=d.width),0<h&&(h=0)):0>h&&(h=0),d.fixHLine(a,h)):("top"==this.position?(f&&(h-=d.height),0<h&&(h=0)):0>h&&(h=0),d.fixVLine(a,h))}}d&&!b&&(d.setIndex(c),this.parseDates&&d.setTimestamp(this.coordinateToDate(a).getTime()));return a}})})();
define("amcharts.serial", ["amcharts"], (function (global) {
    return function () {
        var ret, fn;
       fn = function () {
                        AmCharts.isReady = true;
                    };
        ret = fn.apply(global, arguments);
        return ret || global.AmCharts;
    };
}(this)));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Axis',["../common/PropertyExt","../common/Class"], factory);
    } else {
        root.amchart_Axis = factory(root.common_PropertyExt, root.common_Class);
    }
}(this, function(PropertyExt, Class) {
    function Axis() {
        Class.call(this);
        PropertyExt.call(this);
    }
    Axis.prototype = Object.create(Class.prototype);
    Axis.prototype.constructor = Axis;
    Axis.prototype.mixin(PropertyExt);

    Axis.prototype.constructor = Axis;
    Axis.prototype._class += " amchart_Axis";

    Axis.prototype.publish("type", null, "set", "X/Y Axis Text Font Size",["x","y"],{tags:["Basic","Shared"]}); //just incase we need it

    Axis.prototype.id = function (_) {
        if (!arguments.length) return this._id;
        this._id = _;
        return this;
    };

    Axis.prototype.render = function (callback) {
        this._owningWidget.render(callback);
    };

    return Axis;
}));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/SerialAxis',["./Axis", "d3"], factory);
    } else {
        root.amchart_SerialAxis = factory(root.amchart_Axis, root.d3);
    }
}(this, function(Axis, d3) {
    function SerialAxis() {
        Axis.call(this);

        this._parser = d3.time.format("%Y-%m-%d").parse;
    }
    SerialAxis.prototype = Object.create(Axis.prototype);
    SerialAxis.prototype.constructor = SerialAxis;
    SerialAxis.prototype._class += " amchart_SerialAxis";

    SerialAxis.prototype.publish("axisFontSize", null, "number", "X/Y Axis Text Font Size",null,{tags:["Basic","Shared"]});
    SerialAxis.prototype.publish("axisBaselineColor", "#000000", "html-color", "X Axis Baseline Color",null,{tags:["Basic","Shared"]});
    SerialAxis.prototype.publish("axisFontColor", "#000000", "html-color", "Horizontal Axis Text Style (Color)",null,{tags:["Basic","Shared"]});
    SerialAxis.prototype.publish("axisTitle", "", "string", "X-Axis Title",null,{tags:["Basic","Shared"]});
    SerialAxis.prototype.publish("axisTitleFontSize", null, "number", "Vertical Axis Title Text Style (Font Size)",null,{tags:["Basic","Shared"]});
    SerialAxis.prototype.publish("axisTitleFontColor", "#000000", "html-color", "Axis Title Text Style (Color)",null,{tags:["Basic","Shared"]});
    SerialAxis.prototype.publish("axisLabelRotation", 0, "number", "Axis Label Rotation", null, {min:0,max:90,step:0.1,inputType:"range",tags:["Intermediate","Shared"]});
    SerialAxis.prototype.publish("axisLineWidth", 1, "number", "Axis Line Width",null,{tags:["Intermediate","Shared"]});
    SerialAxis.prototype.publish("axisAlpha", 1, "number", "Axis Alpha",null,{tags:["Intermediate"]});
    SerialAxis.prototype.publish("axisAutoGridCount", true, "boolean", "Specifies Whether Number of GridCount Is Specified Automatically, According To The Axis Size",null,{tags:["Advanced"]});
    SerialAxis.prototype.publish("axisGridPosition", "start", "set", "Specifies If A Grid Line Is Placed On The Center of A Cell or On The Beginning of A Cell", ["start","middle"],{tags:["Advanced"]});
    SerialAxis.prototype.publish("axisBoldPeriodBeginning", true, "boolean", "When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold.",null,{tags:["Intermediate"]});
    SerialAxis.prototype.publish("axisDashLength", 0, "number", "Length of a dash. 0 means line is not dashed.",null,{tags:["Advanced"]});
    SerialAxis.prototype.publish("axisFillAlpha", 0, "number", "Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]});
    SerialAxis.prototype.publish("axisFillColor", null, "html-color", "Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]});
    SerialAxis.prototype.publish("axisGridAlpha", 0.0, "number", "Grid alpha.",null,{tags:["Intermediate"]});
    //SerialAxis.prototype.publish("axisMinimum", null, "number", "",null,{tags:["Intermediate"]});

    SerialAxis.prototype.publish("startOnAxis", true, "boolean", "Draw Chart Starting On Axis.",null,{tags:["Intermediate"]});
    SerialAxis.prototype.publish("axisTypeTimePattern", "%Y-%m-%d", "string", "Time Series Pattern");
    SerialAxis.prototype.publish("axisType", "ordinal", "set", "X-Axis Type", ["ordinal", "linear", "time", "pow", "log", "none"]);
    SerialAxis.prototype.publish("axisTickFormat", "", "string", "Y-Axis Tick Format");
    
    SerialAxis.prototype.publish("position", null, "set", "Position of Axis", ["top", "bottom", "left", "right"]);

    var axisTypeTimePattern = SerialAxis.prototype.axisTypeTimePattern;
    SerialAxis.prototype.axisTypeTimePattern = function (_) {
        var retVal = axisTypeTimePattern.apply(this, arguments);
        if (arguments.length) {
            this._parser = d3.time.format(_).parse;
        }
        return retVal;
    };

    return SerialAxis;
}));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/CommonSerial',["d3", "../common/HTMLWidget", "amcharts.serial", "require", "../common/Utility", "./SerialAxis"], factory);
    } else {
        root.amchart_CommonSerial = factory(root.d3, root.common_HTMLWidget, root.AmCharts, root.require, root.common_Utility, root.amchart_SerialAxis);
    }
}(this, function(d3, HTMLWidget, AmCharts, require, Utility, Axis) {
    function CommonSerial() {
        HTMLWidget.call(this);
        this._tag = "div";

        this._chart = {};

        this._selected = null;
        this._selections = [];

        this._dataUpdated = 0;
        this._prevDataUpdated = -1;
        this._columnsUpdated = 0;
        this._prevColumnsUpdated = -1;

        this._dateParserData = d3.time.format("%Y-%m-%d").parse;
        this._dateParserValue = d3.time.format("%Y-%m-%d").parse;

        this._colorObj = {};
        this._selectionObj = {};

        this._xAxis = new Axis();
        this._xAxis.owningWidget  = this;

        this._yAxis = new Axis();
        this._yAxis.owningWidget  = this;
    }

    CommonSerial.prototype = Object.create(HTMLWidget.prototype);
    CommonSerial.prototype.constructor = CommonSerial;
    CommonSerial.prototype._class += " amchart_CommonSerial";

    CommonSerial.prototype.publish("backwardsCompatible", true, "boolean", "Allow use of old publish parameters");

    CommonSerial.prototype.publish("xAxes", [], "propertyArray", "xAxis", null, { max: 1, tags: ["Basic"] }); // max number of xAxes
    CommonSerial.prototype.publish("yAxes", [], "propertyArray", "yAxis", null, { tags: ["Basic"] });
    
    CommonSerial.prototype.publish("fontSize", 11, "number", "Font Size",null,{tags:["Basic","Shared"]});
    CommonSerial.prototype.publish("fontFamily", "Verdana", "string", "Font Name",null,{tags:["Basic","Shared","Shared"]});
    CommonSerial.prototype.publish("fontColor", "#000000", "html-color", "Font Color",null,{tags:["Basic","Shared"]});

    CommonSerial.prototype.publish("lineWidth", 1, "number", "Line Thickness", null, {min:0,max:10,step:1,inputType:"range",tags:["Basic","Shared"]});
    CommonSerial.prototype.publish("lineColor", null, "html-color", "Color of the data/content lines",null,{tags:["Basic","Shared"]});
    CommonSerial.prototype.publish("lineOpacity", 1, "number", "Line Opacity", null, {min:0,max:1,step:0.001,inputType:"range",tags:["Basic","Shared"]});

    CommonSerial.prototype.publish("dashedLineStyle", 0, "number", "Length of Dashed Line. 0 = none",null,{tags:["Advanced","Shared"]});

    CommonSerial.prototype.publish("marginLeft", null, "number", "Margin (Left)",null,{tags:["Intermediate"]});
    CommonSerial.prototype.publish("marginRight", null, "number", "Margin (Right)",null,{tags:["Intermediate"]});
    CommonSerial.prototype.publish("marginTop", null, "number", "Margin (Top)",null,{tags:["Intermediate"]});
    CommonSerial.prototype.publish("marginBottom", null, "number", "Margin (Bottom)",null,{tags:["Intermediate"]});

    CommonSerial.prototype.publish("showScrollbar", false, "boolean", "Show Chart Scrollbar",null,{tags:["Intermediate","Shared"]});

    CommonSerial.prototype.publish("orientation", "horizontal", "set", "Orientation",["horizontal","vertical"],{tags:["Intermediate"]});

    CommonSerial.prototype.publish("startDuration", 0.3, "number", "Start Duration (sec)",null,{tags:["Private"]});
    CommonSerial.prototype.publish("useImgPatterns", false, "boolean", "Enable Image Pattern backgrounds",null,{tags:["Private"]});
    CommonSerial.prototype.publish("imgPatternArr", '["../ampatterns/black/pattern2.png"]', "string", "Background Pattern Images (Not used if '[]')",null,{inputType:"textarea",tags:["Private"]});

    CommonSerial.prototype.publish("useClonedPalette", false, "boolean", "Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]});

    CommonSerial.prototype.publish("axisMinPeriod", "MM", "string", "Minimum period when parsing dates");

    //CommonSerial.prototype.publish("balloonType", "amchart", "set", "Balloon Type", ["hpcc", "amchart"]); TODO

    CommonSerial.prototype.publish("selectionColor", "#f00", "html-color", "Font Color",null,{tags:["Basic"]});
    CommonSerial.prototype.publish("selectionMode", "simple", "set", "Selection Mode", ["simple", "multi"], { tags: ["Intermediate"] });

    CommonSerial.prototype.publish("showCursor", false, "boolean", "Show Chart Scrollbar",null,{tags:["Intermediate","Shared"]});

    CommonSerial.prototype.publish("showFirstLabel", true, "boolean", "Show first label",null,{tags:["Intermediate","Shared"]});
    CommonSerial.prototype.publish("showLastLabel", true, "boolean", "Show last label",null,{tags:["Intermediate","Shared"]});

    CommonSerial.prototype.publish("equalSpacing", false, "boolean", "Show Chart Scrollbar",null,{tags:["Intermediate","Shared"]});

    CommonSerial.prototype.publish("paletteGrouping", "By Column", "set", "Palette Grouping",["By Category","By Column"],{tags:["Basic"]});

    CommonSerial.prototype.publish("y2", [], "array", "Columns to associate with second Y-Axis");

    CommonSerial.prototype.publish("axisLineWidth", 1, "number", "Axis Line Width",null,{tags:["Intermediate","Shared"]});

    CommonSerial.prototype.publish("axisAlpha", 1, "number", "Axis Alpha",null,{tags:["Intermediate"]}); // share?

    CommonSerial.prototype.publish("startOnAxis", true, "boolean", "Draw Chart Starting On Axis.",null,{tags:["Intermediate"]});  

    CommonSerial.prototype.publish("xAxisShowAllLabels", false, "boolean", "show All Category Axis Labels",null,{tags:["Intermediate"]});    

    // proxy

    CommonSerial.prototype.publish("axisFontSize", null, "number", "X/Y Axis Text Font Size",null,{tags:["Basic","Shared"]});

    CommonSerial.prototype.publishProxy("xAxisBaselineColor", "_xAxis", "axisBaselineColor");
    CommonSerial.prototype.publishProxy("yAxisBaselineColor", "_yAxis", "axisBaselineColor");

    CommonSerial.prototype.publishProxy("xAxisFontColor", "_xAxis", "axisFontColor");
    CommonSerial.prototype.publishProxy("yAxisFontColor", "_yAxis", "axisFontColor");

    CommonSerial.prototype.publishProxy("xAxisTitle", "_xAxis", "axisTitle");
    CommonSerial.prototype.publishProxy("yAxisTitle", "_yAxis", "axisTitle");

    CommonSerial.prototype.publishProxy("xAxisTitleFontSize", "_xAxis", "axisTitleFontSize");
    CommonSerial.prototype.publishProxy("yAxisTitleFontSize", "_yAxis", "axisTitleFontSize");

    CommonSerial.prototype.publishProxy("xAxisTitleFontColor", "_xAxis", "axisTitleFontColor");
    CommonSerial.prototype.publishProxy("yAxisTitleFontColor", "_yAxis", "axisTitleFontColor");

    CommonSerial.prototype.publishProxy("xAxisLabelRotation", "_xAxis", "axisLabelRotation");
    CommonSerial.prototype.publishProxy("yAxisLabelRotation", "_yAxis", "axisLabelRotation");

    CommonSerial.prototype.publishProxy("xAxisAutoGridCount", "_xAxis", "axisAutoGridCount");
    CommonSerial.prototype.publishProxy("yAxisAutoGridCount", "_yAxis", "axisAutoGridCount"); // need to add?

    CommonSerial.prototype.publishProxy("xAxisGridPosition", "_xAxis", "axisGridPosition");

    CommonSerial.prototype.publishProxy("xAxisBoldPeriodBeginning", "_xAxis", "axisBoldPeriodBeginning");
    CommonSerial.prototype.publishProxy("yAxisBoldPeriodBeginning", "_yAxis", "axisBoldPeriodBeginning");

    CommonSerial.prototype.publishProxy("xAxisDashLength", "_xAxis", "axisDashLength");
    CommonSerial.prototype.publishProxy("yAxisDashLength", "_yAxis", "axisDashLength");

    CommonSerial.prototype.publishProxy("xAxisFillAlpha", "_xAxis", "axisFillAlpha");
    CommonSerial.prototype.publishProxy("yAxisFillAlpha", "_yAxis", "axisFillAlpha");

    CommonSerial.prototype.publishProxy("xAxisFillColor", "_xAxis", "axisFillColor");
    CommonSerial.prototype.publishProxy("yAxisFillColor", "_yAxis", "axisFillColor");

    CommonSerial.prototype.publishProxy("xAxisGridAlpha", "_xAxis", "axisGridAlpha");
    CommonSerial.prototype.publishProxy("yAxisGridAlpha", "_yAxis", "axisGridAlpha");

    CommonSerial.prototype.publishProxy("xAxisTypeTimePattern", "_xAxis", "axisTypeTimePattern");
    CommonSerial.prototype.publishProxy("yAxisTypeTimePattern", "_yAxis", "axisTypeTimePattern");

    CommonSerial.prototype.publishProxy("xAxisType", "_xAxis", "axisType");
    CommonSerial.prototype.publishProxy("yAxisType", "_yAxis", "axisType");

    CommonSerial.prototype.publishProxy("xAxisTickFormat", "_xAxis", "axisTickFormat");
    CommonSerial.prototype.publishProxy("yAxisTickFormat", "_yAxis", "axisTickFormat");

    CommonSerial.prototype._origBackwardsCompatible = CommonSerial.prototype.backwardsCompatible;
    CommonSerial.prototype.backwardsCompatible = function(_) {
      var retVal = CommonSerial.prototype._origBackwardsCompatible.apply(this, arguments);
        if (arguments.length) {
            this.switchProperties(_);
        }
        return retVal;
    };

    CommonSerial.prototype.switchProperties = function(val) {
        if (val === true) {
            CommonSerial.prototype.excludeObjs = ["amchart_SerialAxis"];
            // hide the regular ones with the exclude tags?
        } else {
            CommonSerial.prototype.excludeObjs = [];
        }
    };

    CommonSerial.prototype.xAxis = function (idx) {
        if (!this.xAxes()[idx]) {
            var xAxis = new Axis();
            xAxis._owningWidget = this;
            this.xAxes()[idx] = xAxis;
        }
        return this.xAxes()[idx];
    };

    CommonSerial.prototype.yAxis = function (idx) {
        if (!this.yAxes()[idx]) {
            var yAxis = new Axis();
            yAxis._owningWidget = this;
            this.yAxes()[idx] = yAxis;
        }
        return this.yAxes()[idx];
    };

    CommonSerial.prototype.formatData = function (d) {
        switch (this.xAxes()[0].axisType()) {
            case "time":
                return this.xAxes()[0]._parser(typeof d === "number" ? d.toString() : d);
            default:
                return d;
        }
    };

    CommonSerial.prototype.formatValue = function (d) {
        if (!d) {
            return d;
        }

        // NOT REALLY NEEDED
        if (d instanceof Array) {
            return d.map(function (item) {
                return this.formatValue(item);
            }, this);
        }

        switch (this.yAxes()[0].axisType()) {
            case "time":
                return this.yAxes()[0]._parser(typeof d === "number" ? d.toString() : d);
            default:
                if (typeof d === "string") {
                    return +d;
                }
                return d;
        }
    };

    CommonSerial.prototype.amFormatData = function(dataArr) {
        this._rangeType = null;
        var dataObjArr = [];
        var context = this;

        dataArr.forEach(function(dataRow) {
            var dataObj = {};
            dataRow.forEach(function(cell, cIdx) {
                var colName = context.columns()[cIdx];
                if (cell instanceof Array) {
                    var idx = cIdx - 1;
                    if (cell.length === 2) {
                        dataObj["openField" + idx] = context.formatValue(cell[0]);
                        dataObj["valueField" + idx] = context.formatValue(cell[1]);
                        context._rangeType = "normal";
                    } else {
                        dataObj["lowField" + idx] = context.formatValue(cell[0]);
                        dataObj["openField" + idx] = context.formatValue(cell[1]);
                        dataObj["closeField" + idx] = context.formatValue(cell[2]);
                        dataObj["highField" + idx] = context.formatValue(cell[3]);
                        context._rangeType = "candle-ohlc";
                    }
                } else {
                    if (cIdx === 0) {
                        dataObj[colName] = context.formatData(cell);
                    } else if (cIdx >= context.columns().length) {
                        dataObj[colName] = cell;
                    } else {
                        dataObj[colName] = context.formatValue(cell);
                    }
                }
            });
            dataObj.__origRow = dataRow;
            dataObjArr.push(dataObj);
        });

        if (this.xAxisType() === "time") {
            var sortField = context.columns()[0];
            dataObjArr.sort(function (a, b) {
                return a[sortField] - b[sortField];
            });
            this.data(dataObjArr.map(function (row) {
                var retVal = row.__origRow;
                delete row.__origRow;
                return retVal;
            }));
        }

        return dataObjArr;
    };

    CommonSerial.prototype.updateChartOptions = function() {
        var context = this;
        this._chart.type = "serial";
        this._chart.startDuration = this.startDuration();
        this._chart.rotate = this.orientation() === "vertical";

        this._chart.color = this.fontColor();
        this._chart.fontSize = this.fontSize();
        this._chart.fontFamily = this.fontFamily();

        this._chart.categoryAxis = {};
        //this._chart.titles = [];

        var xAxis = this.xAxes()[0];

        //xAxis.type("x");

        this._chart.categoryAxis.position =  xAxis.position() ? xAxis.position() : "bottom";
        this._chart.categoryAxis.autoGridCount = xAxis.axisAutoGridCount();
        this._chart.categoryAxis.gridPosition = xAxis.axisGridPosition();
        this._chart.categoryAxis.axisAlpha = xAxis.axisAlpha();
        this._chart.categoryAxis.gridAlpha = xAxis.axisGridAlpha();
        this._chart.categoryAxis.startOnAxis = xAxis.startOnAxis();
        this._chart.categoryAxis.labelRotation = xAxis.axisLabelRotation();
        this._chart.categoryAxis.title = xAxis.axisTitle();

        this._chart.categoryAxis.axisColor = xAxis.axisBaselineColor();
        this._chart.categoryAxis.axisThickness = xAxis.axisLineWidth();
        this._chart.categoryAxis.boldPeriodBeginning = xAxis.axisBoldPeriodBeginning();
        this._chart.categoryAxis.dashLength = xAxis.axisDashLength();
        this._chart.categoryAxis.fillAlpha = xAxis.axisFillAlpha();
        this._chart.categoryAxis.fillColor = xAxis.axisFillColor();
        this._chart.categoryAxis.fontSize = xAxis.axisFontSize();
        this._chart.categoryAxis.color = xAxis.axisFontColor();
        this._chart.categoryAxis.titleColor = xAxis.axisTitleFontColor();
        this._chart.categoryAxis.titleFontSize = xAxis.axisTitleFontSize();

        this._chart.categoryAxis.showFirstLabel = this.showFirstLabel();
        this._chart.categoryAxis.showLastLabel = this.showLastLabel();

        this._chart.categoryAxis.equalSpacing = this.equalSpacing();

        switch(xAxis.axisType()) {
            case "time":
                this._chart.categoryAxis.parseDates = true;
                this._chart.categoryAxis.minPeriod = this.axisMinPeriod() ? this.axisMinPeriod() : undefined;
                this._chart.categoryAxis.logarithmic = false;

                if (xAxis.axisTickFormat()) {
                    this.dataFormatter = d3.time.format(xAxis.axisTickFormat());
                } else if (xAxis.axisTypeTimePattern()) {
                    this.dataFormatter = d3.time.format(xAxis.axisTypeTimePattern());
                } else {
                    this.dataFormatter =  function(v) { return v; };
                }

                break;
            case "log":
                this._chart.categoryAxis.parseDates = false;
                this._chart.categoryAxis.logarithmic = true;
                this.dataFormatter = xAxis.axisTickFormat() ? d3.format(xAxis.axisTickFormat()) : function(v) { return v; };
                break;
            case "linear":
                /* falls through */
            default:
                this._chart.categoryAxis.parseDates = false;
                this._chart.categoryAxis.logarithmic = false;
                this.dataFormatter = xAxis.axisTickFormat() ? d3.format(xAxis.axisTickFormat()) : function(v) { return v; };
                break;
        }

        this._chart.categoryAxis.labelFunction = function(v1, v2, v3) {
            switch (xAxis.axisType()) {
                case "time":
                    return context.dataFormatter(xAxis.axisTickFormat() || xAxis.axisTypeTimePattern()  ? new Date(v2) : v2);
                default:
                    return context.dataFormatter(v1);
            }
        };

        for (var i = 0; i < this.yAxes().length; i++) {
            var yAxis = this.yAxes()[i];
            //yAxis.type("y");

            if (!this._chart.valueAxes[i]) {
                this._chart.valueAxes.push(new AmCharts.ValueAxis());
            }

            this._chart.valueAxes[i].id = "v" + i;
            this._chart.valueAxes[i].position = yAxis.position() ? yAxis.position() : "left";
            this._chart.valueAxes[i].title = yAxis.axisTitle();
            this._chart.valueAxes[i].titleColor = yAxis.axisTitleFontColor();
            this._chart.valueAxes[i].titleFontSize = yAxis.axisTitleFontSize();
            this._chart.valueAxes[i].axisThickness = yAxis.axisLineWidth();
            this._chart.valueAxes[i].color = yAxis.axisFontColor();
            this._chart.valueAxes[i].fontSize = yAxis.axisFontSize();
            this._chart.valueAxes[i].axisColor = yAxis.axisBaselineColor();
            this._chart.valueAxes[i].axisAlpha = yAxis.axisAlpha();
            this._chart.valueAxes[i].fillColor = yAxis.axisFillColor();
            this._chart.valueAxes[i].fillAlpha = yAxis.axisFillAlpha();

            this._chart.valueAxes[i].gridAlpha = yAxis.axisGridAlpha();
            this._chart.valueAxes[i].dashLength = yAxis.axisDashLength();
            this._chart.valueAxes[i].boldPeriodBeginning = yAxis.axisBoldPeriodBeginning();

            this._chart.valueAxes[i].autoGridCount = yAxis.axisAutoGridCount();

            switch(yAxis.axisType()) {
                case "time":
                    this._chart.valueAxes[i].type = "date";
                    this._chart.valueAxes[i].parseDates = true;
                    this._chart.valueAxes[i].minPeriod = this.axisMinPeriod() ? this.axisMinPeriod() : undefined;
                    this._chart.valueAxes[i].logarithmic = false;

                    if (yAxis.axisTickFormat()) {
                        this.valueFormatter = d3.time.format(yAxis.axisTickFormat());
                    } else if (yAxis.axisTypeTimePattern()) {
                        this.valueFormatter = d3.time.format(yAxis.axisTypeTimePattern());
                    } else {
                        this.valueFormatter =  function(v) { return v; };
                    }
                    break;
                case "log":
                    this._chart.valueAxes[i].parseDates = false;
                    this._chart.valueAxes[i].logarithmic = true;
                    this._chart.valueAxes[i].type = "numeric";
                    this.valueFormatter = yAxis.axisTickFormat() ? d3.format(yAxis.axisTickFormat()) : function(v) { return v; };
                    break;
                case "linear":
                    /* falls through */
                default:
                    this._chart.valueAxes[i].parseDates = false;
                    this._chart.valueAxes[i].type = "numeric";
                    this._chart.valueAxes[i].logarithmic = false;
                    this.valueFormatter = yAxis.axisTickFormat() ? d3.format(yAxis.axisTickFormat()) : function(v) { return v; };
                    break;
            }

            this._chart.valueAxes[i].labelFunction = function(v1, v2, v3) {
                switch (yAxis.axisType()) {
                    case "time":
                        return context.valueFormatter(yAxis.axisTickFormat() || yAxis.axisTypeTimePattern() ? new Date(v2) : v2);
                    default:
                        return context.valueFormatter(v1);
                }
            };
        }

        if (this.showScrollbar()) {
            this._chart.chartScrollbar.enabled = true;
        } else {
            this._chart.chartScrollbar.enabled = false;
        }
        
        if (this.showCursor()) {
            this._chart.chartCursor.enabled = true;
            this._chart.chartCursor.valueLineEnabled = true;
            this._chart.chartCursor.valueLineBalloonEnabled = true;
            this._chart.chartCursor.categoryBalloonEnabled = true;
        } else {
            this._chart.chartCursor.enabled = false;
            this._chart.chartCursor.valueLineEnabled = false;
            this._chart.chartCursor.valueLineBalloonEnabled = false;
            this._chart.chartCursor.categoryBalloonEnabled = false;
        }

        this._currXAxisTypes = this.xAxes().map(function(axe) { return axe.axisType(); }).toString();
        this._currYAxisTypes = this.yAxes().map(function(axe) { return axe.axisType(); }).toString();
        this._currXAxisTypeTimePatterns = this.xAxes().map(function(axe) { return axe.axisTypeTimePattern(); }).toString();
        this._currYAxisTypeTimePatterns = this.yAxes().map(function(axe) { return axe.axisTypeTimePattern(); }).toString();

        if (this._dataUpdated > this._prevDataUpdated || this._prevYAxisType !== this._currYAxisTypes || 
            this._prevXAxisType !== this._currXAxisTypes || this._prevXAxisTypeTimePattern !== this._currXAxisTypeTimePatterns || 
            this._prevYAxisTypeTimePattern !== this._currYAxisTypeTimePatterns || (this.paletteGrouping && this._prevPaletteGrouping !== this.paletteGrouping()) ||
            this._columnsUpdated > this._prevColumnsUpdated
        ) {
            this._chart.dataProvider = this.amFormatData(this.data());
        }
        this._chart.dataProvider = this.amFormatData(this.data());
        this._prevDataUpdated = this._dataUpdated;
        this._prevColumnsUpdated = this._columnsUpdated;
        this._prevXAxisTypes = this._currXAxisTypes;
        this._prevYAxisTypes = this._currYAxisTypes;
        this._prevXAxisTypeTimePatterns = this._currXAxisTypeTimePatterns;
        this._prevYAxisTypeTimePatterns = this._currXAxisTypeTimePatterns;

        if (this.paletteGrouping) {
            this._prevPaletteGrouping =  this.paletteGrouping();
        }

        this.amFormatColumns();
        if (xAxis.axisAutoGridCount() === false && this.xAxisShowAllLabels()) {
            this._chart.categoryAxis.gridCount = this._chart.dataProvider.length;
        }

        var color;
        var cType;
        this._chart.colors = [];
        if (context._class.indexOf("amchart_Area") !== -1) {
            cType = "Area";
        }
        this._chart.dataProvider.forEach(function(dataPoint,i){
            context.columns().filter(function (d, i) { return i > 0; }).forEach(function(col, idx) {
                if (context.paletteGrouping() === "By Category") {
                    color = context._palette(i);
                } else {
                    color = context._palette(col); 
                }

                context._chart.colors.push(color); // needed to work with area and line chart and all?

                context._chart.dataProvider[i]["color" + idx] = color;

                if (cType !== "Area") {
                    context._chart.dataProvider[i]["linecolor" + idx] = context.lineColor() ? context.lineColor() : color;
                }

                if (context._colorObj[i] === undefined) {
                    context._colorObj[i] = {};
                }

                context._colorObj[i][idx] = {
                    color: color,
                    lineColor: context.lineColor() ? context.lineColor() : color
                };
            }); 
        });

        return this._chart;
    };

    CommonSerial.prototype.buildGraphObj = function(gType,i) {
        var context = this;
        var gObj = {};

        gObj.id = "g" + i;

        if (this.y2().indexOf(i) !== -1) {
            gObj.valueAxis = "v1";
        } else {
            gObj.valueAxis = "v0";
        }

        gObj.balloonFunction = function(d) {
            //var balloonText = d.category + ", " + context.columns()[d.graph.columnIndex+1]  + ": " + context.data()[d.index][d.graph.columnIndex+1];
            if (d.graph.type === "line") {
                return d.category + ", " + context.columns()[d.graph.index + 1]  + ": " + context.data()[d.index][d.graph.index + 1];
            } else {
                return d.category + ", " + context.columns()[d.graph.columnIndex + 1]  + ": " + context.data()[d.index][d.graph.columnIndex + 1];   
            }
        };
        gObj.lineAlpha = context.lineOpacity();
        gObj.lineColor = context.lineColor();
        gObj.lineThickness = context.lineWidth();
        gObj.dashLength = context.dashedLineStyle(); // TODO: convert to css Array Prop

        gObj.type = gType;

        gObj.title = "";
        var fieldArr = ["value","open","close","high","low"];
        fieldArr.forEach(function(field){
            if(typeof(context["_" + field + "Field"]) !== "undefined" && typeof(context["_" + field + "Field"][i]) !== "undefined"){
                gObj[field+"Field"] = context["_" + field + "Field"][i];
            }
        });

        try {
            if(context.useImgPatterns()) {
                var patternArr = JSON.parse(context.imgPatternArr());
                if(typeof (patternArr[i]) !== "undefined"){
                    gObj.pattern = patternArr[i];
                }
            } else {
                gObj.pattern = "";
            }
        } catch(e) {
            console.log("e:");
            console.log(e);
        }

        gObj.colorField = "color" + i;

        gObj.lineColorField = "linecolor" + i;
        gObj.fillColorsField = "fillcolor" + i;

        return gObj;
    };

    CommonSerial.prototype.amFormatColumns = function(ColArr) {
        this._categoryField = this.columns()[0];
        this._chart.categoryField = this.columns()[0];
        this._openField = [];
        this._closeField = [];
        this._valueField = this.columns().slice(1);
        return this;
    };

    CommonSerial.prototype.enter = function(domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);

        if (this.xAxes().length === 0) {
            this.xAxes().push(this._xAxis);
        }
        if (this.yAxes().length === 0) {
            this.yAxes().push(this._yAxis);
        }
        if (this.y2().length && this.yAxes().length === 1) {
            var y2Axis = new Axis();
            y2Axis.owningWidget  = this;
            this.yAxes().push(y2Axis);
        }

        var context = this;
        var initObj = {
            type: "serial",
            addClassNames: true,
            chartScrollbar: {},
            chartCursor: {
                "enabled": false,
                "valueLineEnabled": false,
                "valueLineBalloonEnabled": false,
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "valueLineAlpha": 0.2,
                "oneBalloonOnly": true,
                "balloonPointerOrientation": "vertical",
                "valueBalloonsEnabled": false // always set false
            }
        };
        if (typeof define === "function" && define.amd) {
            initObj.pathToImages = require.toUrl("amchartsImg");
        }
        this._chart = AmCharts.makeChart(domNode, initObj);
        this._chart.addListener("clickGraphItem", function(e) {
            var graph = e.graph;
            var data  = e.item.dataContext;
            var field;
            var field2;

            if (context._gType === "column") {
                field = graph.fillColorsField;
                field2 = graph.lineColorField;
            } else if (context._gType === "line") {
                field = graph.colorField;
            } else if (context._gType === "area") {
                field = graph.colorField;
            }
            if (field) {
                if (data[field] !== null && data[field] !== undefined) {
                    delete data[field];
                    data[field2] = context._colorObj[e.index][e.target.columnIndex].lineColor;
                    if (context.selectionMode() === "simple") {
                        if (context._selected !== null) {
                            delete context._selected.data[context._selected.field];
                            context._selected.data[context._selected.field2] = context._colorObj[context._selected.dIdx][context._selected.cIdx].lineColor;
                        }
                        context._selected = null;
                    }
                } else {
                    data[field] = context.selectionColor();
                    data[field2] = context.selectionColor();
                    if (context.selectionMode() === "simple") {
                        if (context._selected !== null) {
                            delete context._selected.data[context._selected.field];
                            context._selected.data[context._selected.field2] = context._colorObj[context._selected.dIdx][context._selected.cIdx].lineColor;
                        }
                        context._selected = {
                            field: field,
                            field2: field2,
                            data: data,
                            dIdx: e.index,
                            cIdx: e.target.columnIndex
                        };
                        context._selections.push(context._selected);
                    }
                }
                e.chart.validateData();
            }

            context.click(context.rowToObj(context.data()[e.index]), context.columns()[e.target.columnIndex + 1], context._selected !== null);
        });
    };

    CommonSerial.prototype.update = function(domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);
        
        var context = this;
        
        // assign correct axe to PPs and correct context to PropertyExt Obj
        this.yAxes().forEach(function(axe, idx) {
            if (idx === 0) {
                context._yAxis = axe;
            }
            axe._owningWidget = context;
        });

        this.xAxes().forEach(function(axe, idx) {
            if (idx === 0) {
                context._xAxis = axe;
            }
            axe._owningWidget = context;
        });

        if (this.backwardsCompatible()) {
            this.switchProperties(true);
        } else {
            this.switchProperties(false);
        }

        domNode.style.width = this.size().width + "px";
        domNode.style.height = this.size().height + "px";
        this._palette = this._palette.switch(this.paletteID());
        if (this.useClonedPalette()) {
            this._palette = this._palette.cloneNotExists(this.paletteID() + "_" + this.id());
        }
    };

    CommonSerial.prototype.render = function(callback) {
        return HTMLWidget.prototype.render.apply(this, arguments);
    };

    CommonSerial.prototype.data = function(_) {
        if (arguments.length) {
            this._dataUpdated++;
        }
        return HTMLWidget.prototype.data.apply(this, arguments);
    };

    CommonSerial.prototype.columns = function(_) {
        if (arguments.length) {
            this._columnsUpdated++;
        }
        return HTMLWidget.prototype.columns.apply(this, arguments);
    };

    return CommonSerial;
}));

define('css!src/amchart/Area',[],function(){});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Area',["d3", "./CommonSerial", "amcharts.serial", "../api/INDChart", "css!./Area"], factory);
    } else {
        root.amchart_Area = factory(root.d3, root.amchart_CommonSerial, root.amcharts, root.api_INDChart);
    }
}(this, function(d3, CommonSerial, AmCharts, INDChart) {
    function Area() {
        CommonSerial.call(this);
        this._tag = "div";
        this._gType = "line";
    }
    Area.prototype = Object.create(CommonSerial.prototype);
    Area.prototype.constructor = Area;
    Area.prototype._class += " amchart_Area";
    Area.prototype.implements(INDChart.prototype);

    Area.prototype.publish("paletteID", "default", "set", "Palette ID", Area.prototype._palette.switch(),{tags:["Basic","Shared"]});
    Area.prototype.publish("stacked", false, "boolean", "Stack Chart",null,{tags:["Basic","Shared"]});
    Area.prototype.publish("fillOpacity", 0.7, "number", "Opacity of The Fill Color", null, {min:0,max:1,step:0.001,inputType:"range",tags:["Intermediate","Shared"]});
    Area.prototype.publish("stackType", "regular", "set", "Stack Type",["none","regular","100%"],{tags:["Basic"]});

    Area.prototype.publish("bulletSize", 6, "number", "Bullet Size",null,{tags:["Intermediate"]});
    Area.prototype.publish("bulletType", "round", "set", "Bullet Type", ["none", "round", "square", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "bubble", "diamond"],{tags:["Basic"]});

    Area.prototype.enter = function(domNode, element) {
        CommonSerial.prototype.enter.apply(this, arguments);
    };

    Area.prototype.updateChartOptions = function() {
        CommonSerial.prototype.updateChartOptions.apply(this, arguments);

        // Stacked
        if(this.stacked()){
            this._chart.valueAxes[0].stackType = this.stackType();
        } else {
            this._chart.valueAxes[0].stackType = "none";
        }

        this.buildGraphs(this._gType);

        return this._chart;
    };

    Area.prototype.buildGraphs = function(gType) {
        this._chart.graphs = [];

        for(var i = 0; i < this.columns().length - 1; i++) {
            var gRetVal = CommonSerial.prototype.buildGraphObj.call(this, gType, i);
            var gObj = buildGraphObj.call(this, gRetVal, i);

            this._chart.addGraph(gObj);
        }

        function buildGraphObj(gObj, i) {
            // Area Specific Options
            gObj.fillAlphas = this.fillOpacity();
            gObj.bullet = this.bulletType();
            gObj.bulletSize = this.bulletSize();

            return gObj;
        }
    };

    Area.prototype.update = function(domNode, element) {
        CommonSerial.prototype.update.apply(this, arguments);

        this.updateChartOptions();

        this._chart.validateNow();
        this._chart.validateData();
    };

    return Area;
}));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Column',["d3", "./CommonSerial", "amcharts.serial", "../api/INDChart"], factory);
    } else {
        root.amchart_Column = factory(root.d3, root.amchart_CommonSerial, root.amcharts, root.api_INDChart);
    }
}(this, function(d3, CommonSerial, AmCharts, INDChart) {
    function Column() {
        CommonSerial.call(this);

        this._tag = "div";
        this._gType = "column";

        this.orientation("horizontal");
    }
    Column.prototype = Object.create(CommonSerial.prototype);
    Column.prototype.constructor = Column;
    Column.prototype._class += " amchart_Column";
    Column.prototype.implements(INDChart.prototype);

    Column.prototype.publish("paletteID", "default", "set", "Palette ID", Column.prototype._palette.switch(),{tags:["Basic","Shared"]});
    Column.prototype.publish("stacked", false, "boolean", "Stack Chart",null,{tags:["Basic","Shared"]});
    Column.prototype.publish("fillOpacity", 0.7, "number", "Opacity of The Fill Color", null, {min:0,max:1,step:0.001,inputType:"range",tags:["Intermediate","Shared"]});

    Column.prototype.publish("cylinderBars", false, "boolean", "Cylinder Bars",null,{tags:["Basic"]});
    Column.prototype.publish("circleRadius", 1, "number", "Circle Radius of Cylinder Bars",null,{tags:["Basic"]});

    Column.prototype.publish("columnWidth", 0.62, "number", "Column Width",null,{tags:["Basic"]});

    Column.prototype.publish("Depth3D", 0, "number", "3D Depth (px)",null,{tags:["Basic"]});
    Column.prototype.publish("Angle3D", 0, "number", "3D Angle (Deg)",null,{tags:["Basic"]});

    Column.prototype.publish("stackType", "regular", "set", "Stack Type",["none","regular","100%","3d"],{tags:["Basic"]});
    Column.prototype.publish("useOhlcLines", false, "boolean", "Use OHLC Lines",null,{tags:["Intermediate"]});

    Column.prototype.publish("yAxisDomainLow", null, "number", "Y axis Minimum value",null,{optional:true});
    Column.prototype.publish("yAxisDomainHigh", null, "number", "Y axis Maximum value",null,{optional:true});
    Column.prototype.publish("yAxisBaseValue", null, "number", "Y axis base value",null,{optional:true});
    Column.prototype.publish("yAxisLabelFrequency", 1,"number", "Y axis label frequency",null,{optional:true});
    Column.prototype.publish("yAxisTickCount", null,"number", "Y axis grid count",null,{optional:true});

    Column.prototype.enter = function(domNode, element) {
        CommonSerial.prototype.enter.apply(this, arguments);
    };

    Column.prototype.updateChartOptions = function() {
        CommonSerial.prototype.updateChartOptions.apply(this, arguments);

        if (this._rangeType === "candle-ohlc") {
            this._gType = this.useOhlcLines() ? "ohlc" : "candlestick";
        } else {
            this._gType = "column";
        }

        this.buildGraphs(this._gType);

        // Stacked
        if(this.stacked()){
            this._chart.valueAxes[0].stackType = this.stackType();
        } else {
            this._chart.valueAxes[0].stackType = "none";
        }

        if(this.yAxisDomainLow_exists()){
            this._chart.valueAxes[0].minimum = this.yAxisDomainLow();
        }

        if(this.yAxisDomainHigh_exists()){
            this._chart.valueAxes[0].maximum = this.yAxisDomainHigh();
        }
        this._chart.valueAxes[0].strictMinMax = false;

        if(this.yAxisLabelFrequency_exists()) {
            this._chart.valueAxes[0].labelFrequency = this.yAxisLabelFrequency();
            }

        if(this.yAxisBaseValue_exists()) {
            this._chart.valueAxes[0].baseValue = this.yAxisBaseValue();
            }

        if (this.yAxisTickCount_exists()) {
            this._chart.valueAxes[0].gridCount = this.yAxisTickCount();
        }

        this._chart.depth3D = this.Depth3D();
        this._chart.angle = this.Angle3D();
        this._chart.categoryAxis.startOnAxis = false;

        return this._chart;
    };

    Column.prototype.buildGraphs = function(gType) {
        this._chart.graphs = [];

        for (var i = 0; i < this.columns().length - 1; i++) {
            var gRetVal = CommonSerial.prototype.buildGraphObj.call(this, gType, i);
            var gObj = buildGraphObj.call(this, gRetVal, i);

            this._chart.addGraph(gObj);
        }

        function buildGraphObj(gObj, i) {
            if (this.columnWidth()) {
                gObj.columnWidth = this.columnWidth();
            }

            if (this.cylinderBars()) {
                 gObj.topRadius = this.circleRadius();
            } else {
                 gObj.topRadius = undefined;
            }
            
            if (this._rangeType === "normal") {
                gObj.openField = "openField" + i;
                gObj.valueField = "valueField" + i;
            }
            if (this._rangeType === "candle-ohlc") {
                gObj.lowField = "lowField" + i;
                gObj.openField = "openField" + i;
                gObj.closeField = "closeField" + i;
                gObj.highField = "highField" + i;
            }

            gObj.fillAlphas = this.fillOpacity();

            return gObj;
        }
    };

    Column.prototype.update = function(domNode, element) {
        CommonSerial.prototype.update.apply(this, arguments);

        this.updateChartOptions();

        this._chart.validateNow();
        this._chart.validateData();
    };

    return Column;
}));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Bar',["d3", "./Column", "amcharts.serial", "../api/INDChart"], factory);
    } else {
        root.amchart_Bar = factory(root.d3, root.amchart_Column, root.amcharts, root.api_INDChart);
    }
}(this, function(d3, Column, AmCharts, INDChart) {
    function Bar() {
        Column.call(this);
        this._tag = "div";
        this._gType = "column";

        this.orientation("vertical");
    }
    Bar.prototype = Object.create(Column.prototype);
    Bar.prototype.constructor = Bar;
    Bar.prototype._class += " amchart_Bar";

    return Bar;
}));


define('css!src/amchart/Combo',[],function(){});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Combo',["d3", "./CommonSerial", "amcharts.serial", "../api/INDChart", "css!./Combo"], factory);
    } else {
        root.amchart_Combo = factory(root.d3, root.amchart_CommonSerial, root.amcharts, root.api_INDChart);
    }
}(this, function(d3, CommonSerial, AmCharts, INDChart) {
    function Combo() {
        CommonSerial.call(this);
        this._tag = "div";
        //this._gType = "";
    }
    Combo.prototype = Object.create(CommonSerial.prototype);
    Combo.prototype.constructor = Combo;
    Combo.prototype._class += " amchart_Combo";
    Combo.prototype.implements(INDChart.prototype);

    Combo.prototype.publish("paletteID", "default", "set", "Palette ID", Combo.prototype._palette.switch(),{tags:["Basic","Shared"]});
    Combo.prototype.publish("stacked", false, "boolean", "Stack Chart",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("fillOpacity", 0.2, "number", "Opacity of The Fill Color", null, {min:0,max:1,step:0.001,inputType:"range",tags:["Intermediate","Shared"]});
    Combo.prototype.publish("stackType", "regular", "set", "Stack Type",["none","regular","100%"],{tags:["Basic"]});

    Combo.prototype.publish("bulletSize", 6, "number", "Bullet Size",null,{tags:["Intermediate"]});
    Combo.prototype.publish("bulletType", "round", "set", "Bullet Type", ["none", "round", "square", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "bubble", "diamond"],{tags:["Basic"]});

    Combo.prototype.publish("defaultType", "column", "set", "Default chart type", ["column","line","spline","area","area-spline","step","area-step","scatter"],{tags:["Basic"]});
    Combo.prototype.publish("types", [], "array", "Array of chart types (ex:bar|line|spline|area|area-spline|step|area-step|scatter)",null,{tags:["Basic"]});
    
    Combo.prototype.publish("charts", [], "widgetArray", "widgets", null, { tags: ["Basic"] }); // perhaps we want to load up the params on a chart and pass in the chart and just read the params there?

    Combo.prototype.enter = function(domNode, element) {
        CommonSerial.prototype.enter.apply(this, arguments);
    };

    Combo.prototype.updateChartOptions = function() {
        CommonSerial.prototype.updateChartOptions.apply(this, arguments);

        // Stacked
        if(this.stacked()){
            this._chart.valueAxes[0].stackType = this.stackType();
        } else {
            this._chart.valueAxes[0].stackType = "none";
        }

        this.buildGraphs(this._gType);

        this._chart.categoryAxis.startOnAxis = false;

        return this._chart;
    };

    Combo.prototype.buildGraphs = function() {
        this._chart.graphs = [];

        for (var i = 0; i < this.columns().length - 1; i++) {
            var gType = this.types()[i] || this.defaultType();
            var gRetVal = CommonSerial.prototype.buildGraphObj.call(this, gType, i);
            var gObj = buildGraphObj.call(this, gRetVal, i);

            this._chart.addGraph(gObj);
        }

        function buildGraphObj(gObj, i) {
            // Combo Specific Options
            if (gType !== "line") {
                gObj.fillAlphas = this.fillOpacity();
            }
            if (gType !== "column") {
                gObj.bullet = this.bulletType();
                gObj.bulletSize = this.bulletSize();
            }

            gObj.valueField = this.columns()[i + 1];
            
            gObj.type = gObj.type === "area" ? "line" : gObj.type; // an area chart is a line chart with fillOpacity set
            return gObj;
        }
    };

    Combo.prototype.update = function(domNode, element) {
        CommonSerial.prototype.update.apply(this, arguments);

        this.updateChartOptions();

        this._chart.validateNow();
        this._chart.validateData();
    };

    return Combo;
}));

(function(){var e=window.AmCharts;e.AmSlicedChart=e.Class({inherits:e.AmChart,construct:function(a){this.createEvents("rollOverSlice","rollOutSlice","clickSlice","pullOutSlice","pullInSlice","rightClickSlice");e.AmSlicedChart.base.construct.call(this,a);this.colors="#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" ");this.alpha=1;this.groupPercent=0;this.groupedTitle="Other";
this.groupedPulled=!1;this.groupedAlpha=1;this.marginLeft=0;this.marginBottom=this.marginTop=10;this.marginRight=0;this.hoverAlpha=1;this.outlineColor="#FFFFFF";this.outlineAlpha=0;this.outlineThickness=1;this.startAlpha=0;this.startDuration=1;this.startEffect="bounce";this.sequencedAnimation=!0;this.pullOutDuration=1;this.pullOutEffect="bounce";this.pullOnHover=this.pullOutOnlyOne=!1;this.labelsEnabled=!0;this.labelTickColor="#000000";this.labelTickAlpha=.2;this.hideLabelsPercent=0;this.urlTarget=
"_self";this.autoMarginOffset=10;this.gradientRatio=[];this.maxLabelWidth=200;e.applyTheme(this,a,"AmSlicedChart")},initChart:function(){e.AmSlicedChart.base.initChart.call(this);this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=!1,this.setLegendData(this.chartData));this.drawChart()},handleLegendEvent:function(a){var b=a.type,c=a.dataItem,d=this.legend;if(!d.data&&c){var f=c.hidden;a=a.event;switch(b){case "clickMarker":f||d.switchable||this.clickSlice(c,a);break;case "clickLabel":f||
this.clickSlice(c,a,!1);break;case "rollOverItem":f||this.rollOverSlice(c,!1,a);break;case "rollOutItem":f||this.rollOutSlice(c,a);break;case "hideItem":this.hideSlice(c,a);break;case "showItem":this.showSlice(c,a)}}},invalidateVisibility:function(){this.recalculatePercents();this.initChart();var a=this.legend;a&&a.invalidateSize()},addEventListeners:function(a,b){var c=this;a.mouseover(function(a){c.rollOverSlice(b,!0,a)}).mouseout(function(a){c.rollOutSlice(b,a)}).touchend(function(a){c.rollOverSlice(b,
a)}).touchstart(function(a){}).mouseup(function(a){c.clickSlice(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)})},formatString:function(a,b,c){a=e.formatValue(a,b,["value"],this.nf,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);var d=this.pf.precision;isNaN(this.tempPrec)||(this.pf.precision=this.tempPrec);a=e.formatValue(a,b,["percents"],this.pf);a=e.massReplace(a,{"[[title]]":b.title,"[[description]]":b.description});this.pf.precision=d;-1!=a.indexOf("[[")&&(a=
e.formatDataContextValue(a,b.dataContext));a=c?e.fixNewLines(a):e.fixBrakes(a);return a=e.cleanFromEmpty(a)},startSlices:function(){var a;for(a=0;a<this.chartData.length;a++)0<this.startDuration&&this.sequencedAnimation?this.setStartTO(a):this.startSlice(this.chartData[a])},setStartTO:function(a){var b=this;a=setTimeout(function(){b.startSequenced.call(b)},b.startDuration/b.chartData.length*500*a);b.timeOuts.push(a)},pullSlices:function(a){var b=this.chartData,c;for(c=0;c<b.length;c++){var d=b[c];
d.pulled&&this.pullSlice(d,1,a)}},startSequenced:function(){var a=this.chartData,b;for(b=0;b<a.length;b++)if(!a[b].started){this.startSlice(this.chartData[b]);break}},startSlice:function(a){a.started=!0;var b=a.wedge,c=this.startDuration,d=a.labelSet;b&&0<c&&(0<a.alpha&&b.show(),b.translate(a.startX,a.startY),this.animatable.push(b),b.animate({opacity:1,translate:"0,0"},c,this.startEffect));d&&0<c&&(0<a.alpha&&d.show(),d.translate(a.startX,a.startY),d.animate({opacity:1,translate:"0,0"},c,this.startEffect))},
showLabels:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b];if(0<c.alpha){var d=c.label;d&&d.show();(c=c.tick)&&c.show()}}},showSlice:function(a){isNaN(a)?a.hidden=!1:this.chartData[a].hidden=!1;this.invalidateVisibility()},hideSlice:function(a){isNaN(a)?a.hidden=!0:this.chartData[a].hidden=!0;this.hideBalloon();this.invalidateVisibility()},rollOverSlice:function(a,b,c){isNaN(a)||(a=this.chartData[a]);clearTimeout(this.hoverInt);if(!a.hidden){this.pullOnHover&&this.pullSlice(a,
1);1>this.hoverAlpha&&a.wedge&&a.wedge.attr({opacity:this.hoverAlpha});var d=a.balloonX,f=a.balloonY;a.pulled&&(d+=a.pullX,f+=a.pullY);var h=this.formatString(this.balloonText,a,!0),k=this.balloonFunction;k&&(h=k(a,h));k=e.adjustLuminosity(a.color,-.15);h?this.showBalloon(h,k,b,d,f):this.hideBalloon();0===a.value&&this.hideBalloon();this.fire({type:"rollOverSlice",dataItem:a,chart:this,event:c})}},rollOutSlice:function(a,b){isNaN(a)||(a=this.chartData[a]);a.wedge&&a.wedge.attr({opacity:1});this.hideBalloon();
this.fire({type:"rollOutSlice",dataItem:a,chart:this,event:b})},clickSlice:function(a,b,c){isNaN(a)||(a=this.chartData[a]);a.pulled?this.pullSlice(a,0):this.pullSlice(a,1);e.getURL(a.url,this.urlTarget);c||this.fire({type:"clickSlice",dataItem:a,chart:this,event:b})},handleRightClick:function(a,b){isNaN(a)||(a=this.chartData[a]);this.fire({type:"rightClickSlice",dataItem:a,chart:this,event:b})},drawTicks:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b];if(c.label&&!c.skipTick){var d=
c.ty,d=e.line(this.container,[c.tx0,c.tx,c.tx2],[c.ty0,d,d],this.labelTickColor,this.labelTickAlpha);e.setCN(this,d,this.type+"-tick");e.setCN(this,d,c.className,!0);c.tick=d;c.wedge.push(d)}}},initialStart:function(){var a=this,b=a.startDuration,c=setTimeout(function(){a.showLabels.call(a)},1E3*b);a.timeOuts.push(c);a.chartCreated?a.pullSlices(!0):(a.startSlices(),0<b?(b=setTimeout(function(){a.pullSlices.call(a)},1200*b),a.timeOuts.push(b)):a.pullSlices(!0))},pullSlice:function(a,b,c){var d=this.pullOutDuration;
!0===c&&(d=0);if(c=a.wedge)0<d?(c.animate({translate:b*a.pullX+","+b*a.pullY},d,this.pullOutEffect),a.labelSet&&a.labelSet.animate({translate:b*a.pullX+","+b*a.pullY},d,this.pullOutEffect)):(a.labelSet&&a.labelSet.translate(b*a.pullX,b*a.pullY),c.translate(b*a.pullX,b*a.pullY));1==b?(a.pulled=!0,this.pullOutOnlyOne&&this.pullInAll(a.index),a={type:"pullOutSlice",dataItem:a,chart:this}):(a.pulled=!1,a={type:"pullInSlice",dataItem:a,chart:this});this.fire(a)},pullInAll:function(a){var b=this.chartData,
c;for(c=0;c<this.chartData.length;c++)c!=a&&b[c].pulled&&this.pullSlice(b[c],0)},pullOutAll:function(){var a=this.chartData,b;for(b=0;b<a.length;b++)a[b].pulled||this.pullSlice(a[b],1)},parseData:function(){var a=[];this.chartData=a;var b=this.dataProvider;isNaN(this.pieAlpha)||(this.alpha=this.pieAlpha);if(void 0!==b){var c=b.length,d=0,f,h,k;for(f=0;f<c;f++){h={};var n=b[f];h.dataContext=n;null!==n[this.valueField]&&(h.value=Number(n[this.valueField]));(k=n[this.titleField])||(k="");h.title=k;h.pulled=
e.toBoolean(n[this.pulledField],!1);(k=n[this.descriptionField])||(k="");h.description=k;h.labelRadius=Number(n[this.labelRadiusField]);h.switchable=!0;h.className=n[this.classNameField];h.url=n[this.urlField];k=n[this.patternField];!k&&this.patterns&&(k=this.patterns[f]);h.pattern=k;h.visibleInLegend=e.toBoolean(n[this.visibleInLegendField],!0);k=n[this.alphaField];h.alpha=void 0!==k?Number(k):this.alpha;k=n[this.colorField];void 0!==k&&(h.color=k);h.labelColor=e.toColor(n[this.labelColorField]);
d+=h.value;h.hidden=!1;a[f]=h}for(f=b=0;f<c;f++)h=a[f],h.percents=h.value/d*100,h.percents<this.groupPercent&&b++;1<b&&(this.groupValue=0,this.removeSmallSlices(),a.push({title:this.groupedTitle,value:this.groupValue,percents:this.groupValue/d*100,pulled:this.groupedPulled,color:this.groupedColor,url:this.groupedUrl,description:this.groupedDescription,alpha:this.groupedAlpha,pattern:this.groupedPattern,className:this.groupedClassName,dataContext:{}}));c=this.baseColor;c||(c=this.pieBaseColor);d=this.brightnessStep;
d||(d=this.pieBrightnessStep);for(f=0;f<a.length;f++)c?k=e.adjustLuminosity(c,f*d/100):(k=this.colors[f],void 0===k&&(k=e.randomColor())),void 0===a[f].color&&(a[f].color=k);this.recalculatePercents()}},recalculatePercents:function(){var a=this.chartData,b=0,c,d;for(c=0;c<a.length;c++)d=a[c],!d.hidden&&0<d.value&&(b+=d.value);for(c=0;c<a.length;c++)d=this.chartData[c],d.percents=!d.hidden&&0<d.value?100*d.value/b:0},removeSmallSlices:function(){var a=this.chartData,b;for(b=a.length-1;0<=b;b--)a[b].percents<
this.groupPercent&&(this.groupValue+=a[b].value,a.splice(b,1))},animateAgain:function(){var a=this;a.startSlices();for(var b=0;b<a.chartData.length;b++){var c=a.chartData[b];c.started=!1;var d=c.wedge;d&&(d.setAttr("opacity",a.startAlpha),d.translate(c.startX,c.startY));if(d=c.labelSet)d.setAttr("opacity",a.startAlpha),d.translate(c.startX,c.startY)}b=a.startDuration;0<b?(b=setTimeout(function(){a.pullSlices.call(a)},1200*b),a.timeOuts.push(b)):a.pullSlices()},measureMaxLabel:function(){var a=this.chartData,
b=0,c;for(c=0;c<a.length;c++){var d=a[c],f=this.formatString(this.labelText,d),h=this.labelFunction;h&&(f=h(d,f));d=e.text(this.container,f,this.color,this.fontFamily,this.fontSize);f=d.getBBox().width;f>b&&(b=f);d.remove()}return b}})})();(function(){var e=window.AmCharts;e.AmFunnelChart=e.Class({inherits:e.AmSlicedChart,construct:function(a){this.type="funnel";e.AmFunnelChart.base.construct.call(this,a);this.cname="AmFunnelChart";this.startX=this.startY=0;this.baseWidth="100%";this.neckHeight=this.neckWidth=0;this.rotate=!1;this.valueRepresents="height";this.pullDistance=30;this.labelPosition="center";this.labelText="[[title]]: [[value]]";this.balloonText="[[title]]: [[value]]\n[[description]]";e.applyTheme(this,a,this.cname)},drawChart:function(){e.AmFunnelChart.base.drawChart.call(this);
var a=this.chartData;if(e.ifArray(a))if(0<this.realWidth&&0<this.realHeight){var b=Math.round(this.depth3D*Math.cos(this.angle*Math.PI/180)),c=Math.round(-this.depth3D*Math.sin(this.angle*Math.PI/180)),d=this.container,f=this.startDuration,h=this.rotate,k=this.updateWidth();this.realWidth=k;var n=this.updateHeight();this.realHeight=n;var l=e.toCoordinate,t=l(this.marginLeft,k),u=l(this.marginRight,k),g=l(this.marginTop,n)+this.getTitleHeight(),l=l(this.marginBottom,n);0<b&&0>c&&(this.neckHeight=this.neckWidth=
0,h?l-=c/2:g-=c/2);var u=k-t-u,E=e.toCoordinate(this.baseWidth,u),I=e.toCoordinate(this.neckWidth,u),D=n-l-g,F=e.toCoordinate(this.neckHeight,D),y=g+D-F;h&&(g=n-l,y=g-D+F);this.firstSliceY=g;e.VML&&(this.startAlpha=1);for(var z=u/2+t,G=(D-F)/((E-I)/2),C=1,v=E/2,E=(D-F)*(E+I)/2+I*F,H=g,M=0,F=0;F<a.length;F++){var m=a[F],x;if(!0!==m.hidden&&(this.showZeroSlices||0!==m.percents)){var A=[],q=[],p;if("height"==this.valueRepresents)p=D*m.percents/100;else{var B=-E*m.percents/100/2,K=v;p=-1/(2*G);var r=
Math.pow(K,2)-4*p*B;0>r&&(r=0);p=(Math.sqrt(r)-K)/(2*p);if(!h&&g>=y||h&&g<=y)p=2*-B/I;else if(!h&&g+p>y||h&&g-p<y)x=h?Math.round(p+(g-p-y)):Math.round(p-(g+p-y)),r=x/G,B=2*(-B-(K-r/2)*x)/I,Infinity!=B&&(p=x+B)}B=v-p/G;K=!1;!h&&g+p>y||h&&g-p<y?(B=I/2,A.push(z-v,z+v,z+B,z+B,z-B,z-B),h?(x=p+(g-p-y),g<y&&(x=0),q.push(g,g,g-x,g-p,g-p,g-x,g)):(x=p-(g+p-y),g>y&&(x=0),q.push(g,g,g+x,g+p,g+p,g+x,g)),K=!0):(A.push(z-v,z+v,z+B,z-B),h?q.push(g,g,g-p,g-p):q.push(g,g,g+p,g+p));x=d.set();0<b&&0>c?(q=B/v,A=-1,h||
(A=1),isNaN(C)&&(C=0),A=(new e.Cuboid(d,2*v,A*p,b,c*C,m.color,m.alpha,this.outlineThickness,this.outlineColor,this.outlineAlpha,90,0,!1,0,m.pattern,q)).set,A.translate(z-v,g-c/2*C),C*=q):A=e.polygon(d,A,q,m.color,m.alpha,this.outlineThickness,this.outlineColor,this.outlineAlpha);e.setCN(this,x,"funnel-item");e.setCN(this,A,"funnel-slice");e.setCN(this,x,m.className,!0);x.push(A);this.graphsSet.push(x);h||x.toBack();m.wedge=x;m.index=F;if(q=this.gradientRatio){var r=[],w;for(w=0;w<q.length;w++)r.push(e.adjustLuminosity(m.color,
q[w]));0<r.length&&A.gradient("linearGradient",r);m.pattern&&A.pattern(m.pattern,NaN,this.path)}0<f&&(this.chartCreated||x.setAttr("opacity",this.startAlpha));this.addEventListeners(x,m);m.ty0=g-p/2;this.labelsEnabled&&this.labelText&&m.percents>=this.hideLabelsPercent&&(q=this.formatString(this.labelText,m),(A=this.labelFunction)&&(q=A(m,q)),r=m.labelColor,r||(r=this.color),A=this.labelPosition,w="left","center"==A&&(w="middle"),"left"==A&&(w="right"),""!==q&&(q=e.wrappedText(d,q,r,this.fontFamily,
this.fontSize,w,!1,this.maxLabelWidth),e.setCN(this,q,"funnel-label"),e.setCN(this,q,m.className,!0),q.node.style.pointerEvents="none",x.push(q),r=z,h?(w=g-p/2,m.ty0=w):(w=g+p/2,m.ty0=w,w<H+M+5&&(w=H+M+5),w>n-l&&(w=n-l)),"right"==A&&(r=u+10+t,m.tx0=z+(v-p/2/G),K&&(m.tx0=z+B)),"left"==A&&(m.tx0=z-(v-p/2/G),K&&(m.tx0=z-B),r=t),m.label=q,m.labelX=r,m.labelY=w,m.labelHeight=q.getBBox().height,q.translate(r,w),v=q.getBBox(),H=e.rect(d,v.width+5,v.height+5,"#ffffff",.005),H.translate(r+v.x,w+v.y),x.push(H),
m.hitRect=H,M=q.getBBox().height,H=w));(0===m.alpha||0<f&&!this.chartCreated)&&x.hide();g=h?g-p:g+p;v=B;m.startX=e.toCoordinate(this.startX,k);m.startY=e.toCoordinate(this.startY,n);m.pullX=e.toCoordinate(this.pullDistance,k);m.pullY=0;m.balloonX=z;m.balloonY=m.ty0}}this.arrangeLabels();this.initialStart();(a=this.legend)&&a.invalidateSize()}else this.cleanChart();this.dispDUpd()},arrangeLabels:function(){var a=this.rotate,b;b=a?0:this.realHeight;for(var c=0,d=this.chartData,f=d.length,e,k=0;k<f;k++){e=
d[f-k-1];var n=e.label,l=e.labelY,t=e.labelX,u=e.labelHeight,g=l;a?b+c+5>l&&(g=b+c+5):l+u+5>b&&(g=b-5-u);b=g;c=u;n&&(n.translate(t,g),n=n.getBBox(),e.hitRect&&e.hitRect.translate(t+n.x,g+n.y));e.labelY=g;e.tx=t;e.ty=g;e.tx2=t}"center"!=this.labelPosition&&this.drawTicks()}})})();(function(){var e=window.AmCharts;e.Cuboid=e.Class({construct:function(a,b,c,d,e,h,k,n,l,t,u,g,E,I,D,F,y){this.set=a.set();this.container=a;this.h=Math.round(c);this.w=Math.round(b);this.dx=d;this.dy=e;this.colors=h;this.alpha=k;this.bwidth=n;this.bcolor=l;this.balpha=t;this.dashLength=I;this.topRadius=F;this.pattern=D;this.rotate=E;this.bcn=y;E?0>b&&0===u&&(u=180):0>c&&270==u&&(u=90);this.gradientRotation=u;0===d&&0===e&&(this.cornerRadius=g);this.draw()},draw:function(){var a=this.set;a.clear();
var b=this.container,c=b.chart,d=this.w,f=this.h,h=this.dx,k=this.dy,n=this.colors,l=this.alpha,t=this.bwidth,u=this.bcolor,g=this.balpha,E=this.gradientRotation,I=this.cornerRadius,D=this.dashLength,F=this.pattern,y=this.topRadius,z=this.bcn,G=n,C=n;"object"==typeof n&&(G=n[0],C=n[n.length-1]);var v,H,M,m,x,A,q,p,B,K=l;F&&(l=0);var r,w,J,L,N=this.rotate;if(0<Math.abs(h)||0<Math.abs(k))if(isNaN(y))q=C,C=e.adjustLuminosity(G,-.2),C=e.adjustLuminosity(G,-.2),v=e.polygon(b,[0,h,d+h,d,0],[0,k,k,0,0],
C,l,1,u,0,E),0<g&&(B=e.line(b,[0,h,d+h],[0,k,k],u,g,t,D)),H=e.polygon(b,[0,0,d,d,0],[0,f,f,0,0],C,l,1,u,0,E),H.translate(h,k),0<g&&(M=e.line(b,[h,h],[k,k+f],u,g,t,D)),m=e.polygon(b,[0,0,h,h,0],[0,f,f+k,k,0],C,l,1,u,0,E),x=e.polygon(b,[d,d,d+h,d+h,d],[0,f,f+k,k,0],C,l,1,u,0,E),0<g&&(A=e.line(b,[d,d+h,d+h,d],[0,k,f+k,f],u,g,t,D)),C=e.adjustLuminosity(q,.2),q=e.polygon(b,[0,h,d+h,d,0],[f,f+k,f+k,f,f],C,l,1,u,0,E),0<g&&(p=e.line(b,[0,h,d+h],[f,f+k,f+k],u,g,t,D));else{var O,P,Q;N?(O=f/2,C=h/2,Q=f/2,P=
d+h/2,w=Math.abs(f/2),r=Math.abs(h/2)):(C=d/2,O=k/2,P=d/2,Q=f+k/2+1,r=Math.abs(d/2),w=Math.abs(k/2));J=r*y;L=w*y;.1<r&&.1<r&&(v=e.circle(b,r,G,l,t,u,g,!1,w),v.translate(C,O));.1<J&&.1<J&&(q=e.circle(b,J,e.adjustLuminosity(G,.5),l,t,u,g,!1,L),q.translate(P,Q))}l=K;1>Math.abs(f)&&(f=0);1>Math.abs(d)&&(d=0);!isNaN(y)&&(0<Math.abs(h)||0<Math.abs(k))?(n=[G],n={fill:n,stroke:u,"stroke-width":t,"stroke-opacity":g,"fill-opacity":l},N?(l="M0,0 L"+d+","+(f/2-f/2*y),t=" B",0<d&&(t=" A"),e.VML?(l+=t+Math.round(d-
J)+","+Math.round(f/2-L)+","+Math.round(d+J)+","+Math.round(f/2+L)+","+d+",0,"+d+","+f,l=l+(" L0,"+f)+(t+Math.round(-r)+","+Math.round(f/2-w)+","+Math.round(r)+","+Math.round(f/2+w)+",0,"+f+",0,0")):(l+="A"+J+","+L+",0,0,0,"+d+","+(f-f/2*(1-y))+"L0,"+f,l+="A"+r+","+w+",0,0,1,0,0"),r=90):(t=d/2-d/2*y,l="M0,0 L"+t+","+f,e.VML?(l="M0,0 L"+t+","+f,t=" B",0>f&&(t=" A"),l+=t+Math.round(d/2-J)+","+Math.round(f-L)+","+Math.round(d/2+J)+","+Math.round(f+L)+",0,"+f+","+d+","+f,l+=" L"+d+",0",l+=t+Math.round(d/
2+r)+","+Math.round(w)+","+Math.round(d/2-r)+","+Math.round(-w)+","+d+",0,0,0"):(l+="A"+J+","+L+",0,0,0,"+(d-d/2*(1-y))+","+f+"L"+d+",0",l+="A"+r+","+w+",0,0,1,0,0"),r=180),b=b.path(l).attr(n),b.gradient("linearGradient",[G,e.adjustLuminosity(G,-.3),e.adjustLuminosity(G,-.3),G],r),N?b.translate(h/2,0):b.translate(0,k/2)):b=0===f?e.line(b,[0,d],[0,0],u,g,t,D):0===d?e.line(b,[0,0],[0,f],u,g,t,D):0<I?e.rect(b,d,f,n,l,t,u,g,I,E,D):e.polygon(b,[0,0,d,d,0],[0,f,f,0,0],n,l,t,u,g,E,!1,D);d=isNaN(y)?0>f?[v,
B,H,M,m,x,A,q,p,b]:[q,p,H,M,m,x,v,B,A,b]:N?0<d?[v,b,q]:[q,b,v]:0>f?[v,b,q]:[q,b,v];e.setCN(c,b,z+"front");e.setCN(c,H,z+"back");e.setCN(c,q,z+"top");e.setCN(c,v,z+"bottom");e.setCN(c,m,z+"left");e.setCN(c,x,z+"right");for(v=0;v<d.length;v++)if(H=d[v])a.push(H),e.setCN(c,H,z+"element");F&&b.pattern(F,NaN,c.path)},width:function(a){isNaN(a)&&(a=0);this.w=Math.round(a);this.draw()},height:function(a){isNaN(a)&&(a=0);this.h=Math.round(a);this.draw()},animateHeight:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rh=c.h;c.frame=0;c.height(1);setTimeout(function(){c.updateHeight.call(c)},1E3/e.updateRate)},updateHeight:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rh-1,b),a.height(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateHeight.call(a)}):setTimeout(function(){a.updateHeight.call(a)},1E3/e.updateRate)):(a.height(a.rh),a.animationFinished=!0)},animateWidth:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rw=c.w;c.frame=0;c.width(1);setTimeout(function(){c.updateWidth.call(c)},1E3/e.updateRate)},updateWidth:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rw-1,b),a.width(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateWidth.call(a)}):setTimeout(function(){a.updateWidth.call(a)},1E3/e.updateRate)):(a.width(a.rw),a.animationFinished=!0)}})})();
define("amcharts.funnel", ["amcharts"], (function (global) {
    return function () {
        var ret, fn;
       fn = function () {
                        AmCharts.isReady = true;
                    };
        ret = fn.apply(global, arguments);
        return ret || global.AmCharts;
    };
}(this)));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/CommonFunnel',["d3", "../common/HTMLWidget", "amcharts.funnel", "require"], factory);
    } else {
        root.amchart_CommonFunnel = factory(root.d3, root.common_HTMLWidget, root.AmCharts, root.require);
    }

}(this, function(d3, HTMLWidget, AmCharts, require) {
    function CommonFunnel() {
        HTMLWidget.call(this);
        this._tag = "div";

        this._chart = {};

        this._selected = null;
        this._selections = [];
        
        this._dataUpdated = 0;
        this._prevDataUpdated = -1;
        this._columnsUpdated = 0;
        this._prevColumnsUpdated = -1;
    }
    CommonFunnel.prototype = Object.create(HTMLWidget.prototype);
    CommonFunnel.prototype.constructor = CommonFunnel;
    CommonFunnel.prototype._class += " amchart_CommonFunnel";

    CommonFunnel.prototype.publish("fontSize", 11, "number", "Font Size",null,{tags:["Basic","Shared"]});
    CommonFunnel.prototype.publish("fontFamily", "Verdana", "string", "Font Name",null,{tags:["Basic","Shared","Shared"]});
    CommonFunnel.prototype.publish("fontColor", "#000000", "html-color", "Font Color",null,{tags:["Basic","Shared"]});

    CommonFunnel.prototype.publish("flip", true, "boolean", "Flip Chart",null,{tags:["Intermediate"]});
    CommonFunnel.prototype.publish("reverseDataSorting", false, "boolean", "Reverse Data Sorting",null,{tags:["Intermediate"]});

    CommonFunnel.prototype.publish("labelPosition", "center", "set", "Label Position", ["left","right","center"],{tags:["Intermediate"]});

    CommonFunnel.prototype.publish("showScrollbar", false, "boolean", "Show Chart Scrollbar",null,{tags:["Intermediate"]});

    CommonFunnel.prototype.publish("startDuration", 0.3, "number", "Start Duration (sec)",null,{tags:["Private"]});

    CommonFunnel.prototype.publish("Depth3D", 0, "number", "3D Depth (px)",null,{tags:["Basic"]});
    CommonFunnel.prototype.publish("Angle3D", 0, "number", "3D Angle (Deg)",null,{tags:["Basic"]});

    CommonFunnel.prototype.publish("useClonedPalette", false, "boolean", "Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]});
    CommonFunnel.prototype.publish("selectionMode", "simple", "set", "Selection Mode", ["simple", "multi"], { tags: ["Intermediate"] });
    CommonFunnel.prototype.publish("selectionColor", "#f00", "html-color", "Font Color",null,{tags:["Basic"]});

    CommonFunnel.prototype.updateChartOptions = function() {

        this._chart.startDuration = this.startDuration();
        this._chart.rotate = this.flip();

        this._chart.pullOutOnlyOne = this.selectionMode() === "simple";
        
        this._chart.color = this.fontColor();
        this._chart.colorField = "sliceColor";
        this._chart.fontSize = this.fontSize();
        this._chart.fontFamily = this.fontFamily();

        this._chart.labelPosition = this.labelPosition();

        this.titles = [];
        this.baloon = {};

        this._chart.titleField = this.columns()[0];
        this._chart.valueField = this.columns()[1];

        this._chart.depth3D = this.Depth3D();
        this._chart.angle = this.Angle3D();

        var sortingMethod = function(a,b){ return a[1] > b[1] ? 1 : -1; };
        if(this.reverseDataSorting()){
            sortingMethod = function(a,b){ return a[1] < b[1] ? 1 : -1; };
        }
        this.data().sort(sortingMethod);

        // DataProvider
        if (this._dataUpdated > this._prevDataUpdated || this._columnsUpdated > this._prevColumnsUpdated) {
            this._chart.dataProvider = this.formatData(this.data());
        }
        this._prevDataUpdated = this._dataUpdated;
        this._prevColumnsUpdated = this._columnsUpdated;

        // Color Palette
        this._chart.colors = this.data().map(function (row) {
            return this._palette(row[0]);
        }, this);

        // Scroll Bar
        if (this.showScrollbar()) {
            this._chart.chartScrollbar.enabled = true;
        } else {
            this._chart.chartScrollbar.enabled = false;
        }

        return this._chart;
    };

    CommonFunnel.prototype.formatData = function(dataArr){
        var dataObjArr = [];
        var context = this;
        dataArr.forEach(function(dataRow){
            var dataObj = {};
            context.columns().forEach(function(colName,cIdx){
                dataObj[colName] = dataRow[cIdx];
            });
            dataObjArr.push(dataObj);
        });
        return dataObjArr;
    };

    CommonFunnel.prototype.enter = function(domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        var context = this;
        var initObj = {
            type: "funnel",
            addClassNames: true,
            autoResize: true,
            autoMargins: true,
            chartScrollbar: {}
        };
        if (typeof define === "function" && define.amd) {
            initObj.pathToImages = require.toUrl("amchartsImg");
        }
        this._chart = AmCharts.makeChart(domNode, initObj);
        this._chart.addListener("clickSlice", function(e) {   
            var field = e.chart.colorField;
            var data = e.dataItem.dataContext;

            if (data[field] !== null && data[field] !== undefined) {
                delete data[field];
                if (context.selectionMode() === "simple") {
                    if (context._selected !== null) {
                        delete context._selected.data[context._selected.field];
                    }
                    context._selected = null;
                }
            } else {
                data[field] = context.selectionColor();
                if (context.selectionMode() === "simple") {
                    if (context._selected !== null) {
                        delete context._selected.data[context._selected.field];
                    }
                    context._selected = {
                        field: field,
                        data: data,
                        cIdx: 1,
                        dIdx: e.dataItem.index
                    };
                    context._selections.push(context._selected);
                }
            }

            e.chart.validateData();

            context.click(context.rowToObj(context.data()[e.dataItem.index]), context.columns()[1], context._selected !== null);
        });
    };

    CommonFunnel.prototype.update = function(domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        domNode.style.width = this.size().width + "px";
        domNode.style.height = this.size().height + "px";

        this._palette = this._palette.switch(this.paletteID());
        if (this.useClonedPalette()) {
            this._palette = this._palette.cloneNotExists(this.paletteID() + "_" + this.id());
        }

        this.updateChartOptions();

        this._chart.validateNow();
        this._chart.validateData();
    };

    CommonFunnel.prototype.render = function(callback) {
        return HTMLWidget.prototype.render.apply(this, arguments);
    };


    CommonFunnel.prototype.postUpdate = function (domNode, element) {
        var context = this;
        if (this.labelPosition() !== "center") {
            var containerBoundingClientRect = context._element.select("svg").node().getBoundingClientRect(); // might need to change this selection (could get a bit more accurate results?)
            this.d3LabelSelection = element.selectAll(".amcharts-funnel-item");

            var left = [];
            var right = [];

            this.d3LabelSelection.each(function(d, i) {
                var boundingRect = d3.select(this).node().getBoundingClientRect();

                var labelRightPos = boundingRect.right;
                if (labelRightPos > containerBoundingClientRect.right) {
                    right.push(containerBoundingClientRect.right - labelRightPos);
                }

                var labelLeftPos = boundingRect.left;
                if (labelLeftPos < containerBoundingClientRect.left) {
                    left.push(labelLeftPos - containerBoundingClientRect.left);
                }
            });

            var rightOffset = right.length ? d3.min(right) : 0;
            var leftOffset = left.length ? d3.min(left) : 0;

            var smallerOffset = 0;

            if (rightOffset < 0) {
                smallerOffset += rightOffset;
            }
            if (leftOffset < 0) {
                smallerOffset += leftOffset;
            }

            switch(this.labelPosition()) {
                case "right":
                    this._chart.marginRight = Math.abs(smallerOffset);
                    this._chart.marginLeft = 0;
                    break;
                case "left":
                    this._chart.marginLeft = Math.abs(smallerOffset);
                    this._chart.marginRight = 0;
                    break;
            }
            this._chart.validateNow();
        }
    };

    CommonFunnel.prototype.data = function(_) {
        if (arguments.length) {
            this._dataUpdated++;
        }
        return HTMLWidget.prototype.data.apply(this, arguments);
    };

    return CommonFunnel;
}));

(function(){var d=window.AmCharts;d.AmRadarChart=d.Class({inherits:d.AmCoordinateChart,construct:function(a){this.type="radar";d.AmRadarChart.base.construct.call(this,a);this.cname="AmRadarChart";this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=0;this.radius="35%";d.applyTheme(this,a,this.cname)},initChart:function(){d.AmRadarChart.base.initChart.call(this);if(this.dataChanged)this.parseData();else this.onDataUpdated()},onDataUpdated:function(){this.drawChart()},updateGraphs:function(){var a=
this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.index=b;c.width=this.realRadius;c.height=this.realRadius;c.x=this.marginLeftReal;c.y=this.marginTopReal;c.data=this.chartData}},parseData:function(){d.AmRadarChart.base.parseData.call(this);this.parseSerialData(this.dataProvider)},updateValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b];c.axisRenderer=d.RadAxis;c.guideFillRenderer=d.RadarFill;c.axisItemRenderer=d.RadItem;c.autoGridCount=!1;c.rMultiplier=1;c.x=this.marginLeftReal;
c.y=this.marginTopReal;c.width=this.realRadius;c.height=this.realRadius;c.marginsChanged=!0;c.titleDY=c.y}},drawChart:function(){d.AmRadarChart.base.drawChart.call(this);var a=this.updateWidth(),b=this.updateHeight(),c=this.marginTop+this.getTitleHeight(),f=this.marginLeft,m=this.marginBottom,n=this.marginRight,e=b-c-m;this.marginLeftReal=f+(a-f-n)/2;this.marginTopReal=c+e/2;this.realRadius=d.toCoordinate(this.radius,Math.min(a-f-n,b-c-m),e);this.updateValueAxes();this.updateGraphs();a=this.chartData;
if(d.ifArray(a)){if(0<this.realWidth&&0<this.realHeight){a=a.length-1;c=this.valueAxes;for(b=0;b<c.length;b++)c[b].zoom(0,a);c=this.graphs;for(b=0;b<c.length;b++)c[b].zoom(0,a);(a=this.legend)&&a.invalidateSize()}}else this.cleanChart();this.dispDUpd();this.gridSet.toBack();this.axesSet.toBack();this.set.toBack()},formatString:function(a,b,c){var f=b.graph;-1!=a.indexOf("[[category]]")&&(a=a.replace(/\[\[category\]\]/g,String(b.serialDataItem.category)));f=f.numberFormatter;f||(f=this.nf);a=d.formatValue(a,
b.values,["value"],f,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);-1!=a.indexOf("[[")&&(a=d.formatDataContextValue(a,b.dataContext));return a=d.AmRadarChart.base.formatString.call(this,a,b,c)},cleanChart:function(){d.callMethod("destroy",[this.valueAxes,this.graphs])}})})();(function(){var d=window.AmCharts;d.RadAxis=d.Class({construct:function(a){var b=a.chart,c=a.axisThickness,f=a.axisColor,m=a.axisAlpha;this.set=b.container.set();this.set.translate(a.x,a.y);b.axesSet.push(this.set);var n=a.axisTitleOffset,e=a.radarCategoriesEnabled,r=a.chart.fontFamily,h=a.fontSize;void 0===h&&(h=a.chart.fontSize);var k=a.color;void 0===k&&(k=a.chart.color);if(b){this.axisWidth=a.height;var p=b.chartData,l=p.length,w,z=this.axisWidth;"middle"==a.pointPosition&&"circles"!=a.gridType&&
(a.rMultiplier=Math.cos(180/l*Math.PI/180),z*=a.rMultiplier);for(w=0;w<l;w++){var q=180-360/l*w,g=q;"middle"==a.pointPosition&&(g-=180/l);var t=this.axisWidth*Math.sin(q/180*Math.PI),q=this.axisWidth*Math.cos(q/180*Math.PI);0<m&&(t=d.line(b.container,[0,t],[0,q],f,m,c),this.set.push(t),d.setCN(b,t,a.bcn+"line"));if(e){var x="start",t=(z+n)*Math.sin(g/180*Math.PI),q=(z+n)*Math.cos(g/180*Math.PI);if(180==g||0===g)x="middle",t-=5;0>g&&(x="end",t-=10);180==g&&(q-=5);0===g&&(q+=5);g=d.text(b.container,
p[w].category,k,r,h,x);g.translate(t+5,q);this.set.push(g);d.setCN(b,g,a.bcn+"title")}}}}})})();(function(){var d=window.AmCharts;d.RadItem=d.Class({construct:function(a,b,c,f,m,n,e,r){f=a.chart;void 0===c&&(c="");var h=a.chart.fontFamily,k=a.fontSize;void 0===k&&(k=a.chart.fontSize);var p=a.color;void 0===p&&(p=a.chart.color);var l=a.chart.container;this.set=m=l.set();var w=a.axisColor,z=a.axisAlpha,q=a.tickLength,g=a.gridAlpha,t=a.gridThickness,x=a.gridColor,D=a.dashLength,E=a.fillColor,B=a.fillAlpha,F=a.labelsEnabled;n=a.counter;var G=a.inside,H=a.gridType,u,J=a.labelOffset,A;b-=a.height;
var y;e?(F=!0,void 0!==e.id&&(A=f.classNamePrefix+"-guide-"+e.id),isNaN(e.tickLength)||(q=e.tickLength),void 0!=e.lineColor&&(x=e.lineColor),isNaN(e.lineAlpha)||(g=e.lineAlpha),isNaN(e.dashLength)||(D=e.dashLength),isNaN(e.lineThickness)||(t=e.lineThickness),!0===e.inside&&(G=!0),void 0!==e.boldLabel&&(r=e.boldLabel)):c||(g/=3,q/=2);var I="end",C=-1;G&&(I="start",C=1);var v;F&&(v=d.text(l,c,p,h,k,I,r),v.translate((q+3+J)*C,b),m.push(v),d.setCN(f,v,a.bcn+"label"),e&&d.setCN(f,v,"guide"),d.setCN(f,
v,A,!0),this.label=v,y=d.line(l,[0,q*C],[b,b],w,z,t),m.push(y),d.setCN(f,y,a.bcn+"tick"),e&&d.setCN(f,y,"guide"),d.setCN(f,y,A,!0));b=Math.abs(b);r=[];h=[];if(0<g){if("polygons"==H){u=a.data.length;for(k=0;k<u;k++)p=180-360/u*k,r.push(b*Math.sin(p/180*Math.PI)),h.push(b*Math.cos(p/180*Math.PI));r.push(r[0]);h.push(h[0]);g=d.line(l,r,h,x,g,t,D)}else g=d.circle(l,b,"#FFFFFF",0,t,x,g);m.push(g);d.setCN(f,g,a.bcn+"grid");d.setCN(f,g,A,!0);e&&d.setCN(f,g,"guide")}if(1==n&&0<B&&!e&&""!==c){e=a.previousCoord;
if("polygons"==H){for(k=u;0<=k;k--)p=180-360/u*k,r.push(e*Math.sin(p/180*Math.PI)),h.push(e*Math.cos(p/180*Math.PI));u=d.polygon(l,r,h,E,B)}else u=d.wedge(l,0,0,0,360,b,b,e,0,{fill:E,"fill-opacity":B,stroke:"#000","stroke-opacity":0,"stroke-width":1});m.push(u);d.setCN(f,u,a.bcn+"fill");d.setCN(f,u,A,!0)}!1===a.visible&&(y&&y.hide(),v&&v.hide());""!==c&&(a.counter=0===n?1:0,a.previousCoord=b)},graphics:function(){return this.set},getLabel:function(){return this.label}})})();(function(){var d=window.AmCharts;d.RadarFill=d.Class({construct:function(a,b,c,f){b-=a.axisWidth;c-=a.axisWidth;var m=Math.min(b,c);c=Math.max(b,c);b=a.chart;var n=b.container,e=f.fillAlpha,r=f.fillColor;c=Math.abs(c);var m=Math.abs(m),h=Math.min(c,m);c=Math.max(c,m);var m=h,h=f.angle+90,k=f.toAngle+90;isNaN(h)&&(h=0);isNaN(k)&&(k=360);this.set=n.set();void 0===r&&(r="#000000");isNaN(e)&&(e=0);if("polygons"==a.gridType){var k=[],p=[];a=a.data.length;var l;for(l=0;l<a;l++)h=180-360/a*l,k.push(c*Math.sin(h/
180*Math.PI)),p.push(c*Math.cos(h/180*Math.PI));k.push(k[0]);p.push(p[0]);for(l=a;0<=l;l--)h=180-360/a*l,k.push(m*Math.sin(h/180*Math.PI)),p.push(m*Math.cos(h/180*Math.PI));n=d.polygon(n,k,p,r,e)}else n=d.wedge(n,0,0,h,k-h,c,c,m,0,{fill:r,"fill-opacity":e,stroke:"#000","stroke-opacity":0,"stroke-width":1});d.setCN(b,n,"guide-fill");f.id&&d.setCN(b,n,"guide-fill-"+f.id);this.set.push(n);this.fill=n},graphics:function(){return this.set},getLabel:function(){}})})();
define("amcharts.radar", ["amcharts"], (function (global) {
    return function () {
        var ret, fn;
       fn = function () {
                        AmCharts.isReady = true;
                    };
        ret = fn.apply(global, arguments);
        return ret || global.AmCharts;
    };
}(this)));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/CommonRadar',["d3", "../common/HTMLWidget", "amcharts.radar", "require"], factory);
    } else {
        root.amchart_CommonRadar = factory(root.d3, root.common_HTMLWidget, root.AmCharts, root.require);
    }

}(this, function(d3, HTMLWidget, AmCharts, require) {
    function CommonRadar() {
        HTMLWidget.call(this);
        this._tag = "div";

        this._chart = {};

        this._selected = null;
        this._selections = [];
        
        this._dataUpdated = 0;
        this._prevDataUpdated = -1;
        this._columnsUpdated = 0;
        this._prevColumnsUpdated = -1;
    }
    CommonRadar.prototype = Object.create(HTMLWidget.prototype);
    CommonRadar.prototype.constructor = CommonRadar;
    CommonRadar.prototype._class += " amchart_CommonRadar";

    // NO X-Axis  !!!

    CommonRadar.prototype.publish("fontSize", 11, "number", "Font Size",null,{tags:["Basic","Shared"]});
    CommonRadar.prototype.publish("fontFamily", "Verdana", "string", "Font Name",null,{tags:["Basic","Shared","Shared"]});
    CommonRadar.prototype.publish("fontColor", "#000000", "html-color", "Font Color",null,{tags:["Basic","Shared"]});

    CommonRadar.prototype.publish("lineWidth", 2, "number", "Line Thickness", null, {min:0,max:10,step:1,inputType:"range",tags:["Basic","Shared"]});
    CommonRadar.prototype.publish("lineOpacity", 1, "number", "Line Opacity", null, {min:0,max:1,step:0.001,inputType:"range",tags:["Basic","Shared"]});
    CommonRadar.prototype.publish("dashedLineStyle", 0, "number", "",null,{tags:["Advanced","Shared"]});

    CommonRadar.prototype.publish("yAxisBaselineColor", null, "html-color", "Axis color",null,{tags:["Intermediate","Shared"]});

    CommonRadar.prototype.publish("axisFontSize", undefined, "number", "Size of value labels text. Will use chart's fontSize if not set.",null,{tags:["Basic","Shared"]});
    CommonRadar.prototype.publish("yAxisFontColor", undefined, "string", "Font Name",null,{tags:["Basic","Shared"]});

    CommonRadar.prototype.publish("yAxisTitle", "", "string", "Y-Axis Title",null,{tags:["Basic","Shared"]});
    CommonRadar.prototype.publish("yAxisTitleFontColor", null, "html-color", "Color of axis value labels. Will use chart's color if not set.",null,{tags:["Basic","Shared"]});
    CommonRadar.prototype.publish("yAxisTitleFontSize", null, "html-color", "Font Size of axis value labels. Will use chart's color if not set.",null,{tags:["Basic","Shared"]});

    CommonRadar.prototype.publish("axisLineWidth", 1, "number", "Thickness of axis",null,{tags:["Basic","Shared"]});

    CommonRadar.prototype.publish("marginLeft", null, "number", "Margin (Left)",null,{tags:["Intermediate"]});
    CommonRadar.prototype.publish("marginRight", null, "number", "Margin (Right)",null,{tags:["Intermediate"]});
    CommonRadar.prototype.publish("marginTop", null, "number", "Margin (Top)",null,{tags:["Intermediate"]});
    CommonRadar.prototype.publish("marginBottom", null, "number", "Margin (Bottom)",null,{tags:["Intermediate"]});

    CommonRadar.prototype.publish("showScrollbar", false, "boolean", "Chart Scrollbar",null,{tags:["Intermediate"]});

    CommonRadar.prototype.publish("startDuration", 0.3, "number", "Start Duration (sec)",null,{tags:["Private"]});

    CommonRadar.prototype.publish("yAxisAutoGridCount", true, "boolean", "Specifies whether number of gridCount is specified automatically, acoarding to the axis size",null,{tags:["Advanced"]});
    CommonRadar.prototype.publish("yAxisGridPosition", "start", "set", "Specifies if a grid line is placed on the center of a cell or on the beginning of a cell", ["start","middle"],{tags:["Advanced"]});

    //CommonRadar.prototype.publish("yAxisBoldPeriodBeginning", true, "boolean", "When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold.",null,{tags:["Advanced"]});
    //CommonRadar.prototype.publish("yAxisFillAlpha", 0, "number", "Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]});
    //CommonRadar.prototype.publish("yAxisFillColor", "#FFFFFF", "html-color", "Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]});
    //CommonRadar.prototype.publish("yAxisGridAlpha", 0.2, "number", "Grid alpha.",null,{tags:["Intermediate"]});

    CommonRadar.prototype.publish("yAxisMinimum", [], "array", "",null,{tags:["Advanced"]});
    CommonRadar.prototype.publish("yAxisTitleOffset", [], "array", "",null,{tags:["Advanced"]});
    CommonRadar.prototype.publish("yAxisDashLength", [], "array", "Length of a dash. 0 means line is not dashed.",null,{tags:["Advanced"]});
    CommonRadar.prototype.publish("axisAlpha", 1, "number", "Axis opacity",null,{tags:["Intermediate"]});

    CommonRadar.prototype.publish("circularGrid", false, "boolean", "Circular Grid",null,{tags:["Intermediate"]}); // not dynamic

    CommonRadar.prototype.publish("bulletSize", 9, "number", "Bullet Size",null,{tags:["Intermediate"]});
    CommonRadar.prototype.publish("bulletType", "round", "set", "Bullet Type", ["none", "round", "square", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "bubble", "diamond"],{tags:["Intermediate"]});

    CommonRadar.prototype.publish("fillOpacity", 0.3, "number", "Shape Opacity", null, {min:0,max:1,step:0.001,inputType:"range",tags:["Intermediate"]});
    CommonRadar.prototype.publish("useClonedPalette", false, "boolean", "Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]});

    CommonRadar.prototype.publish("yAxisTickFormat", null, "string", "Y-Axis Tick Format", null, { optional: true });
    
    CommonRadar.prototype.publish("selectionColor", "#f00", "html-color", "Font Color",null,{tags:["Basic"]});
    CommonRadar.prototype.publish("selectionMode", "simple", "set", "Selection Mode", ["simple", "multi"], { tags: ["Intermediate"] });

    CommonRadar.prototype.updateChartOptions = function() {
        var context = this;

        this._chart.theme = "none";
        this._chart.type = "radar";
        this._chart.startDuration = this.startDuration();
        this._chart.categoryField = this.columns()[0];
        this._valueField = this.columns().slice(1);

        this._chart.color = this.fontColor();
        this._chart.fontSize = this.fontSize();
        this._chart.fontFamily = this.fontFamily();

        if (this.marginLeft()) { this._chart.marginLeft = this.marginLeft(); }
        if (this.marginRight()) { this._chart.marginRight = this.marginRight(); }
        if (this.marginTop()) { this._chart.marginTop = this.marginTop(); }
        if (this.marginBottom()) { this._chart.marginBottom = this.marginBottom(); }

        this.titles = [];

        // DataProvider
        if (this._dataUpdated > this._prevDataUpdated || this._columnsUpdated > this._prevColumnsUpdated) {
            this._chart.dataProvider = this.formatData(this.data());
        }
        this._prevDataUpdated = this._dataUpdated;
        this._prevColumnsUpdated = this._columnsUpdated;

        // ValueAxis
        this._chart.valueAxes[0].title = this.yAxisTitle();
        this._chart.valueAxes[0].axisTitleOffset = this.yAxisTitleOffset();
        this._chart.valueAxes[0].minimum = this.yAxisMinimum();
        this._chart.valueAxes[0].axisAlpha = this.axisAlpha();
        this._chart.valueAxes[0].dashLength = this.yAxisDashLength() || this.dashedLineStyle();
        this._chart.valueAxes[0].axisColor = this.yAxisBaselineColor();
        this._chart.valueAxes[0].axisThickness = this.axisLineWidth();
        this._chart.valueAxes[0].titleColor = this.yAxisTitleFontColor();
        this._chart.valueAxes[0].titleFontSize = this.yAxisTitleFontSize();
        this._chart.valueAxes[0].fontSize = this.axisFontSize();
        this._chart.valueAxes[0].color = this.yAxisFontColor();

        this._chart.valueAxes[0].autoGridCount = this.yAxisAutoGridCount();
        this._chart.valueAxes[0].gridPosition = this.yAxisGridPosition();

        this._chart.valueAxes[0].labelFunction = function(d) {
            return d3.format(context.yAxisTickFormat())(d);
        };

        // Color Palette
        this._chart.colors = this.columns().filter(function (d, i) { return i > 0; }).map(function (row) {
            return this._palette(row);
        }, this);

        if(this.circularGrid()){ // not dynamic
            this._chart.valueAxes.forEach(function(va,i){
                context._chart.valueAxes[i].gridType = "circles";
            });
        }

        if (this.showScrollbar()) {
            this._chart.chartScrollbar.enabled = true;
        } else {
            this._chart.chartScrollbar.enabled = false;
        }

        return this._chart;
    };

    CommonRadar.prototype.buildGraphObj = function(gType,i) {
        var context = this;
        var gObj = {};

        gObj.balloonFunction = function(d) {
            var balloonText = d.category + ", " + context.columns()[d.graph.index+1]  + ": " + context.data()[d.index][d.graph.columnIndex+1];
            return balloonText;
        };
        gObj.fillAlphas = context.fillOpacity();
        gObj.lineAlpha = context.lineOpacity();
        gObj.lineThickness = context.lineWidth();
        gObj.bullet = context.bulletType();
        gObj.bulletSize = context.bulletSize();
        gObj.dashLength = context.dashedLineStyle(); // TODO: convert to css Array Prop

        gObj.type = gType;

        gObj.title = "";

        gObj.colorField = "selected" + i;

        return gObj;
    };

    CommonRadar.prototype.formatData = function(dataArr){
        var dataObjArr = [];
        var context = this;
        dataArr.forEach(function(dataRow){
            var dataObj = {};
            context.columns().forEach(function(colName,cIdx){
                dataObj[colName] = dataRow[cIdx];
            });
            dataObjArr.push(dataObj);
        });
        return dataObjArr;
    };

    CommonRadar.prototype.enter = function(domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        var context = this;
        var initObj = {
            type: "radar",
            addClassNames: true,
            chartScrollbar: {}
        };
        if (typeof define === "function" && define.amd) {
            initObj.pathToImages = require.toUrl("amchartsImg");
        }
        this._chart = AmCharts.makeChart(domNode, initObj);
        this._chart.addListener("clickGraphItem", function(e) {
            var graph = e.graph;
            var data  = e.item.dataContext;
            var field = graph.colorField;

            if (data[field] !== null && data[field] !== undefined) {
                delete data[field];
                if (context.selectionMode() === "simple") {
                    if (context._selected !== null) {
                        delete context._selected.data[context._selected.field];
                    }
                    context._selected = null;
                }
            } else {
                data[field] = context.selectionColor();
                if (context.selectionMode() === "simple") {
                    if (context._selected !== null) {
                        delete context._selected.data[context._selected.field];
                    }
                    context._selected = {
                        field: field,
                        data: data,
                        cIdx: e.target.index,
                        dIdx: e.index
                    };
                    context._selections.push(context._selected);
                }
            }

            e.chart.validateData();
            
            context.click(context.rowToObj(context.data()[e.index]), context.columns()[e.target.index + 1], context._selected !== null);
        });
    };

    CommonRadar.prototype.update = function(domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        domNode.style.width = this.size().width + "px";
        domNode.style.height = this.size().height + "px";

        this._palette = this._palette.switch(this.paletteID());
        if (this.useClonedPalette()) {
            this._palette = this._palette.cloneNotExists(this.paletteID() + "_" + this.id());
        }
    };

    CommonRadar.prototype.render = function(callback) {
        return HTMLWidget.prototype.render.apply(this, arguments);
    };

    CommonRadar.prototype.data = function(_) {
        if (arguments.length) {
            this._dataUpdated++;
        }
        return HTMLWidget.prototype.data.apply(this, arguments);
    };

    CommonRadar.prototype.columns = function(_) {
        if (arguments.length) {
            this._columnsUpdated++;
        }
        return HTMLWidget.prototype.columns.apply(this, arguments);
    };

    return CommonRadar;
}));

(function(){var e=window.AmCharts;e.AmRectangularChart=e.Class({inherits:e.AmCoordinateChart,construct:function(a){e.AmRectangularChart.base.construct.call(this,a);this.theme=a;this.createEvents("zoomed","changed");this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=20;this.depth3D=this.angle=0;this.plotAreaFillColors="#FFFFFF";this.plotAreaFillAlphas=0;this.plotAreaBorderColor="#000000";this.plotAreaBorderAlpha=0;this.maxZoomFactor=20;this.zoomOutButtonImageSize=19;this.zoomOutButtonImage=
"lens";this.zoomOutText="Show all";this.zoomOutButtonColor="#e5e5e5";this.zoomOutButtonAlpha=0;this.zoomOutButtonRollOverAlpha=1;this.zoomOutButtonPadding=8;this.trendLines=[];this.autoMargins=!0;this.marginsUpdated=!1;this.autoMarginOffset=10;e.applyTheme(this,a,"AmRectangularChart")},initChart:function(){e.AmRectangularChart.base.initChart.call(this);this.updateDxy();!this.marginsUpdated&&this.autoMargins&&(this.resetMargins(),this.drawGraphs=!1);this.processScrollbars();this.updateMargins();this.updatePlotArea();
this.updateScrollbars();this.updateTrendLines();this.updateChartCursor();this.updateValueAxes();this.scrollbarOnly||this.updateGraphs()},drawChart:function(){e.AmRectangularChart.base.drawChart.call(this);this.drawPlotArea();if(e.ifArray(this.chartData)){var a=this.chartCursor;a&&a.draw()}},resetMargins:function(){var a={},b;if("xy"==this.type){var c=this.xAxes,d=this.yAxes;for(b=0;b<c.length;b++){var g=c[b];g.ignoreAxisWidth||(g.setOrientation(!0),g.fixAxisPosition(),a[g.position]=!0)}for(b=0;b<
d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(!1),c.fixAxisPosition(),a[c.position]=!0)}else{d=this.valueAxes;for(b=0;b<d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(this.rotate),c.fixAxisPosition(),a[c.position]=!0);(b=this.categoryAxis)&&!b.ignoreAxisWidth&&(b.setOrientation(!this.rotate),b.fixAxisPosition(),b.fixAxisPosition(),a[b.position]=!0)}a.left&&(this.marginLeft=0);a.right&&(this.marginRight=0);a.top&&(this.marginTop=0);a.bottom&&(this.marginBottom=0);this.fixMargins=
a},measureMargins:function(){var a=this.valueAxes,b,c=this.autoMarginOffset,d=this.fixMargins,g=this.realWidth,e=this.realHeight,f=c,k=c,m=g;b=e;var l;for(l=0;l<a.length;l++)a[l].handleSynchronization(),b=this.getAxisBounds(a[l],f,m,k,b),f=Math.round(b.l),m=Math.round(b.r),k=Math.round(b.t),b=Math.round(b.b);if(a=this.categoryAxis)b=this.getAxisBounds(a,f,m,k,b),f=Math.round(b.l),m=Math.round(b.r),k=Math.round(b.t),b=Math.round(b.b);d.left&&f<c&&(this.marginLeft=Math.round(-f+c));d.right&&m>=g-c&&
(this.marginRight=Math.round(m-g+c));d.top&&k<c+this.titleHeight&&(this.marginTop=Math.round(this.marginTop-k+c+this.titleHeight));d.bottom&&b>e-c&&(this.marginBottom=Math.round(this.marginBottom+b-e+c));this.initChart()},getAxisBounds:function(a,b,c,d,e){if(!a.ignoreAxisWidth){var h=a.labelsSet,f=a.tickLength;a.inside&&(f=0);if(h)switch(h=a.getBBox(),a.position){case "top":a=h.y;d>a&&(d=a);break;case "bottom":a=h.y+h.height;e<a&&(e=a);break;case "right":a=h.x+h.width+f+3;c<a&&(c=a);break;case "left":a=
h.x-f,b>a&&(b=a)}}return{l:b,t:d,r:c,b:e}},drawZoomOutButton:function(){var a=this;if(!a.zbSet){var b=a.container.set();a.zoomButtonSet.push(b);var c=a.color,d=a.fontSize,g=a.zoomOutButtonImageSize,h=a.zoomOutButtonImage.replace(/\.[a-z]*$/i,""),f=e.lang.zoomOutText||a.zoomOutText,k=a.zoomOutButtonColor,m=a.zoomOutButtonAlpha,l=a.zoomOutButtonFontSize,p=a.zoomOutButtonPadding;isNaN(l)||(d=l);(l=a.zoomOutButtonFontColor)&&(c=l);var l=a.zoomOutButton,q;l&&(l.fontSize&&(d=l.fontSize),l.color&&(c=l.color),
l.backgroundColor&&(k=l.backgroundColor),isNaN(l.backgroundAlpha)||(a.zoomOutButtonRollOverAlpha=l.backgroundAlpha));var r=l=0;void 0!==a.pathToImages&&h&&(q=a.container.image(a.pathToImages+h+a.extension,0,0,g,g),e.setCN(a,q,"zoom-out-image"),b.push(q),q=q.getBBox(),l=q.width+5);void 0!==f&&(c=e.text(a.container,f,c,a.fontFamily,d,"start"),e.setCN(a,c,"zoom-out-label"),d=c.getBBox(),r=q?q.height/2-3:d.height/2,c.translate(l,r),b.push(c));q=b.getBBox();c=1;e.isModern||(c=0);k=e.rect(a.container,q.width+
2*p+5,q.height+2*p-2,k,1,1,k,c);k.setAttr("opacity",m);k.translate(-p,-p);e.setCN(a,k,"zoom-out-bg");b.push(k);k.toBack();a.zbBG=k;q=k.getBBox();b.translate(a.marginLeftReal+a.plotAreaWidth-q.width+p,a.marginTopReal+p);b.hide();b.mouseover(function(){a.rollOverZB()}).mouseout(function(){a.rollOutZB()}).click(function(){a.clickZB()}).touchstart(function(){a.rollOverZB()}).touchend(function(){a.rollOutZB();a.clickZB()});for(m=0;m<b.length;m++)b[m].attr({cursor:"pointer"});a.zbSet=b}},rollOverZB:function(){this.rolledOverZB=
!0;this.zbBG.setAttr("opacity",this.zoomOutButtonRollOverAlpha)},rollOutZB:function(){this.rolledOverZB=!1;this.zbBG.setAttr("opacity",this.zoomOutButtonAlpha)},clickZB:function(){this.rolledOverZB=!1;this.zoomOut()},zoomOut:function(){this.zoomOutValueAxes()},drawPlotArea:function(){var a=this.dx,b=this.dy,c=this.marginLeftReal,d=this.marginTopReal,g=this.plotAreaWidth-1,h=this.plotAreaHeight-1,f=this.plotAreaFillColors,k=this.plotAreaFillAlphas,m=this.plotAreaBorderColor,l=this.plotAreaBorderAlpha;
"object"==typeof k&&(k=k[0]);f=e.polygon(this.container,[0,g,g,0,0],[0,0,h,h,0],f,k,1,m,l,this.plotAreaGradientAngle);e.setCN(this,f,"plot-area");f.translate(c+a,d+b);this.set.push(f);0!==a&&0!==b&&(f=this.plotAreaFillColors,"object"==typeof f&&(f=f[0]),f=e.adjustLuminosity(f,-.15),g=e.polygon(this.container,[0,a,g+a,g,0],[0,b,b,0,0],f,k,1,m,l),e.setCN(this,g,"plot-area-bottom"),g.translate(c,d+h),this.set.push(g),a=e.polygon(this.container,[0,0,a,a,0],[0,h,h+b,b,0],f,k,1,m,l),e.setCN(this,a,"plot-area-left"),
a.translate(c,d),this.set.push(a));(c=this.bbset)&&this.scrollbarOnly&&c.remove()},updatePlotArea:function(){var a=this.updateWidth(),b=this.updateHeight(),c=this.container;this.realWidth=a;this.realWidth=b;c&&this.container.setSize(a,b);var c=this.marginLeftReal,d=this.marginTopReal,a=a-c-this.marginRightReal-this.dx,b=b-d-this.marginBottomReal;1>a&&(a=1);1>b&&(b=1);this.plotAreaWidth=Math.round(a);this.plotAreaHeight=Math.round(b);this.plotBalloonsSet.translate(c,d)},updateDxy:function(){this.dx=
Math.round(this.depth3D*Math.cos(this.angle*Math.PI/180));this.dy=Math.round(-this.depth3D*Math.sin(this.angle*Math.PI/180));this.d3x=Math.round(this.columnSpacing3D*Math.cos(this.angle*Math.PI/180));this.d3y=Math.round(-this.columnSpacing3D*Math.sin(this.angle*Math.PI/180))},updateMargins:function(){var a=this.getTitleHeight();this.titleHeight=a;this.marginTopReal=this.marginTop-this.dy;this.fixMargins&&!this.fixMargins.top&&(this.marginTopReal+=a);this.marginBottomReal=this.marginBottom;this.marginLeftReal=
this.marginLeft;this.marginRightReal=this.marginRight},updateValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b];this.setAxisRenderers(c);this.updateObjectSize(c)}},setAxisRenderers:function(a){a.axisRenderer=e.RecAxis;a.guideFillRenderer=e.RecFill;a.axisItemRenderer=e.RecItem;a.marginsChanged=!0},updateGraphs:function(){var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.index=b;c.rotate=this.rotate;this.updateObjectSize(c)}},updateObjectSize:function(a){a.width=this.plotAreaWidth-
1;a.height=this.plotAreaHeight-1;a.x=this.marginLeftReal;a.y=this.marginTopReal;a.dx=this.dx;a.dy=this.dy},updateChartCursor:function(){var a=this.chartCursor;a&&(a=e.processObject(a,e.ChartCursor,this.theme),this.updateObjectSize(a),this.addChartCursor(a),a.chart=this)},processScrollbars:function(){var a=this.chartScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),this.addChartScrollbar(a))},updateScrollbars:function(){},removeChartCursor:function(){e.callMethod("destroy",[this.chartCursor]);
this.chartCursor=null},zoomTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b];c.valueAxis.recalculateToPercents?c.set&&c.set.hide():(c.x=this.marginLeftReal,c.y=this.marginTopReal,c.draw())}},handleCursorValueZoom:function(){},addTrendLine:function(a){this.trendLines.push(a)},zoomOutValueAxes:function(){for(var a=this.valueAxes,b=0;b<a.length;b++)a[b].zoomOut()},removeTrendLine:function(a){var b=this.trendLines,c;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1)},adjustMargins:function(a,
b){var c=a.position,d=a.scrollbarHeight+a.offset;a.enabled&&("top"==c?b?this.marginLeftReal+=d:this.marginTopReal+=d:b?this.marginRightReal+=d:this.marginBottomReal+=d)},getScrollbarPosition:function(a,b,c){var d="bottom",e="top";a.oppositeAxis||(e=d,d="top");a.position=b?"bottom"==c||"left"==c?d:e:"top"==c||"right"==c?d:e},updateChartScrollbar:function(a,b){if(a){a.rotate=b;var c=this.marginTopReal,d=this.marginLeftReal,e=a.scrollbarHeight,h=this.dx,f=this.dy,k=a.offset;"top"==a.position?b?(a.y=
c,a.x=d-e-k):(a.y=c-e+f-k,a.x=d+h):b?(a.y=c+f,a.x=d+this.plotAreaWidth+h+k):(a.y=c+this.plotAreaHeight+k,a.x=this.marginLeftReal)}},showZB:function(a){var b=this.zbSet;a&&(b=this.zoomOutText,""!==b&&b&&this.drawZoomOutButton());if(b=this.zbSet)this.zoomButtonSet.push(b),a?b.show():b.hide(),this.rollOutZB()},handleReleaseOutside:function(a){e.AmRectangularChart.base.handleReleaseOutside.call(this,a);(a=this.chartCursor)&&a.handleReleaseOutside&&a.handleReleaseOutside()},handleMouseDown:function(a){e.AmRectangularChart.base.handleMouseDown.call(this,
a);var b=this.chartCursor;b&&b.handleMouseDown&&!this.rolledOverZB&&b.handleMouseDown(a)},update:function(){e.AmRectangularChart.base.update.call(this);this.chartCursor&&this.chartCursor.update&&this.chartCursor.update()},handleScrollbarValueZoom:function(a){this.relativeZoomValueAxes(a.target.valueAxes,a.relativeStart,a.relativeEnd);this.zoomAxesAndGraphs()},zoomValueScrollbar:function(a){if(a&&a.enabled){var b=a.valueAxes[0],c=b.relativeStart,d=b.relativeEnd;b.reversed&&(d=1-c,c=1-b.relativeEnd);
a.percentZoom(c,d)}},zoomAxesAndGraphs:function(){if(!this.scrollbarOnly){var a=this.valueAxes,b;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);a=this.graphs;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);(b=this.chartCursor)&&b.clearSelection();this.zoomTrendLines()}},handleValueAxisZoomReal:function(a,b){var c=a.relativeStart,d=a.relativeEnd;if(c>d)var e=c,c=d,d=e;this.relativeZoomValueAxes(b,c,d);this.updateAfterValueZoom()},updateAfterValueZoom:function(){this.zoomAxesAndGraphs();
this.zoomScrollbar()},relativeZoomValueAxes:function(a,b,c){b=e.fitToBounds(b,0,1);c=e.fitToBounds(c,0,1);if(b>c){var d=b;b=c;c=d}var d=1/this.maxZoomFactor,g=e.getDecimals(d)+4;c-b<d&&(c=b+(c-b)/2,b=c-d/2,c+=d/2);b=e.roundTo(b,g);c=e.roundTo(c,g);d=!1;if(a){for(g=0;g<a.length;g++){var h=a[g].zoomToRelativeValues(b,c,!0);h&&(d=h)}this.showZB()}return d},addChartCursor:function(a){e.callMethod("destroy",[this.chartCursor]);a&&(this.listenTo(a,"moved",this.handleCursorMove),this.listenTo(a,"zoomed",
this.handleCursorZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted),this.listenTo(a,"panning",this.handleCursorPanning),this.listenTo(a,"onHideCursor",this.handleCursorHide));this.chartCursor=a},handleCursorChange:function(){},handleCursorMove:function(a){var b,c=this.valueAxes;for(b=0;b<c.length;b++)a.panning||c[b].showBalloon(a.x,a.y)},handleCursorZoom:function(a){if(this.skipZoomed)this.skipZoomed=!1;else{var b=this.startX0,c=this.endX0,d=this.endY0,e=this.startY0,h=a.startX,f=a.endX,
k=a.startY,m=a.endY;this.startX0=this.endX0=this.startY0=this.endY0=NaN;this.handleCursorZoomReal(b+h*(c-b),b+f*(c-b),e+k*(d-e),e+m*(d-e),a)}},handleCursorHide:function(){var a,b=this.valueAxes;for(a=0;a<b.length;a++)b[a].hideBalloon();b=this.graphs;for(a=0;a<b.length;a++)b[a].hideBalloonReal()}})})();(function(){var e=window.AmCharts;e.AmXYChart=e.Class({inherits:e.AmRectangularChart,construct:function(a){this.type="xy";e.AmXYChart.base.construct.call(this,a);this.cname="AmXYChart";this.theme=a;this.createEvents("zoomed");e.applyTheme(this,a,this.cname)},initChart:function(){e.AmXYChart.base.initChart.call(this);this.dataChanged&&this.updateData();this.drawChart();!this.marginsUpdated&&this.autoMargins&&(this.marginsUpdated=!0,this.measureMargins());var a=this.marginLeftReal,b=this.marginTopReal,
c=this.plotAreaWidth,d=this.plotAreaHeight;this.graphsSet.clipRect(a,b,c,d);this.bulletSet.clipRect(a,b,c,d);this.trendLinesSet.clipRect(a,b,c,d);this.drawGraphs=!0;this.showZB()},prepareForExport:function(){var a=this.bulletSet;a.clipPath&&this.container.remove(a.clipPath)},createValueAxes:function(){var a=[],b=[];this.xAxes=a;this.yAxes=b;var c=this.valueAxes,d,g;for(g=0;g<c.length;g++){d=c[g];var h=d.position;if("top"==h||"bottom"==h)d.rotate=!0;d.setOrientation(d.rotate);h=d.orientation;"V"==
h&&b.push(d);"H"==h&&a.push(d)}0===b.length&&(d=new e.ValueAxis(this.theme),d.rotate=!1,d.setOrientation(!1),c.push(d),b.push(d));0===a.length&&(d=new e.ValueAxis(this.theme),d.rotate=!0,d.setOrientation(!0),c.push(d),a.push(d));for(g=0;g<c.length;g++)this.processValueAxis(c[g],g);a=this.graphs;for(g=0;g<a.length;g++)this.processGraph(a[g],g)},drawChart:function(){e.AmXYChart.base.drawChart.call(this);e.ifArray(this.chartData)?(this.chartScrollbar&&this.updateScrollbars(),this.zoomChart()):this.cleanChart();
var a=this.scrollbarH;a&&(this.hideXScrollbar?(a&&a.destroy(),this.scrollbarH=null):a.draw());if(a=this.scrollbarV)this.hideYScrollbar?(a.destroy(),this.scrollbarV=null):a.draw();this.zoomScrollbar();if(!this.autoMargins||this.marginsUpdated)this.dispDUpd(),this.chartCreated=!0},cleanChart:function(){e.callMethod("destroy",[this.valueAxes,this.graphs,this.scrollbarV,this.scrollbarH,this.chartCursor])},zoomChart:function(){this.zoomObjects(this.valueAxes);this.zoomObjects(this.graphs);this.zoomTrendLines();
this.prevPlotAreaWidth=this.plotAreaWidth;this.prevPlotAreaHeight=this.plotAreaHeight},zoomObjects:function(a){var b=a.length,c,d;for(c=0;c<b;c++)d=a[c],d.zoom(0,this.chartData.length-1)},updateData:function(){this.parseData();var a=this.chartData,b=a.length-1,c=this.graphs,d=this.dataProvider,e=-Infinity,h=Infinity,f,k;if(d){for(f=0;f<c.length;f++)if(k=c[f],k.data=a,k.zoom(0,b),k=k.valueField){var m;for(m=0;m<d.length;m++)if(null!==l){var l=Number(d[m][k]);l>e&&(e=l);l<h&&(h=l)}}isNaN(this.minValue)||
(h=this.minValue);isNaN(this.maxValue)||(e=this.maxValue);for(f=0;f<c.length;f++)k=c[f],k.maxValue=e,k.minValue=h;if(a=this.chartCursor)a.type="crosshair",a.valueBalloonsEnabled=!1;this.dataChanged=!1;this.dispatchDataUpdated=!0}},processValueAxis:function(a){a.chart=this;a.minMaxField="H"==a.orientation?"x":"y";a.min=NaN;a.max=NaN},processGraph:function(a){e.isString(a.xAxis)&&(a.xAxis=this.getValueAxisById(a.xAxis));e.isString(a.yAxis)&&(a.yAxis=this.getValueAxisById(a.yAxis));a.xAxis||(a.xAxis=
this.xAxes[0]);a.yAxis||(a.yAxis=this.yAxes[0]);a.valueAxis=a.yAxis},parseData:function(){e.AmXYChart.base.parseData.call(this);this.chartData=[];var a=this.dataProvider,b=this.valueAxes,c=this.graphs,d;if(a)for(d=0;d<a.length;d++){var g={axes:{},x:{},y:{}},h=this.dataDateFormat,f=a[d],k;for(k=0;k<b.length;k++){var m=b[k].id;g.axes[m]={};g.axes[m].graphs={};var l;for(l=0;l<c.length;l++){var p=c[l],q=p.id;if(p.xAxis.id==m||p.yAxis.id==m){var r={};r.serialDataItem=g;r.index=d;var t={},n=f[p.valueField];
null!==n&&(n=Number(n),isNaN(n)||(t.value=n));n=f[p.xField];null!==n&&("date"==p.xAxis.type&&(n=e.getDate(f[p.xField],h).getTime()),n=Number(n),isNaN(n)||(t.x=n));n=f[p.yField];null!==n&&("date"==p.yAxis.type&&(n=e.getDate(f[p.yField],h).getTime()),n=Number(n),isNaN(n)||(t.y=n));n=f[p.errorField];null!==n&&(n=Number(n),isNaN(n)||(t.error=n));r.values=t;this.processFields(p,r,f);r.serialDataItem=g;r.graph=p;g.axes[m].graphs[q]=r}}}this.chartData[d]=g}this.start=0;this.end=this.chartData.length-1},
formatString:function(a,b,c){var d=b.graph,g=d.numberFormatter;g||(g=this.nf);var h,f;"date"==b.graph.xAxis.type&&(h=e.formatDate(new Date(b.values.x),d.dateFormat,this),f=RegExp("\\[\\[x\\]\\]","g"),a=a.replace(f,h));"date"==b.graph.yAxis.type&&(h=e.formatDate(new Date(b.values.y),d.dateFormat,this),f=RegExp("\\[\\[y\\]\\]","g"),a=a.replace(f,h));a=e.formatValue(a,b.values,["value","x","y"],g);-1!=a.indexOf("[[")&&(a=e.formatDataContextValue(a,b.dataContext));return a=e.AmXYChart.base.formatString.call(this,
a,b,c)},addChartScrollbar:function(a){e.callMethod("destroy",[this.chartScrollbar,this.scrollbarH,this.scrollbarV]);if(a){this.chartScrollbar=a;this.scrollbarHeight=a.scrollbarHeight;var b="backgroundColor backgroundAlpha selectedBackgroundColor selectedBackgroundAlpha scrollDuration resizeEnabled hideResizeGrips scrollbarHeight updateOnReleaseOnly".split(" ");if(!this.hideYScrollbar){var c=new e.ChartScrollbar(this.theme);c.skipEvent=!0;c.chart=this;this.listenTo(c,"zoomed",this.handleScrollbarValueZoom);
e.copyProperties(a,c,b);c.rotate=!0;this.scrollbarV=c}this.hideXScrollbar||(c=new e.ChartScrollbar(this.theme),c.skipEvent=!0,c.chart=this,this.listenTo(c,"zoomed",this.handleScrollbarValueZoom),e.copyProperties(a,c,b),c.rotate=!1,this.scrollbarH=c)}},updateTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b],c=e.processObject(c,e.TrendLine,this.theme);a[b]=c;c.chart=this;var d=c.valueAxis;e.isString(d)&&(c.valueAxis=this.getValueAxisById(d));d=c.valueAxisX;e.isString(d)&&
(c.valueAxisX=this.getValueAxisById(d));c.id||(c.id="trendLineAuto"+b+"_"+(new Date).getTime());c.valueAxis||(c.valueAxis=this.yAxes[0]);c.valueAxisX||(c.valueAxisX=this.xAxes[0])}},updateMargins:function(){e.AmXYChart.base.updateMargins.call(this);var a=this.scrollbarV;a&&(this.getScrollbarPosition(a,!0,this.yAxes[0].position),this.adjustMargins(a,!0));if(a=this.scrollbarH)this.getScrollbarPosition(a,!1,this.xAxes[0].position),this.adjustMargins(a,!1)},updateScrollbars:function(){e.AmXYChart.base.updateScrollbars.call(this);
var a=this.scrollbarV;a&&(this.updateChartScrollbar(a,!0),a.valueAxes=this.yAxes,a.gridAxis||(a.gridAxis=this.yAxes[0]));if(a=this.scrollbarH)this.updateChartScrollbar(a,!1),a.valueAxes=this.xAxes,a.gridAxis||(a.gridAxis=this.xAxes[0])},removeChartScrollbar:function(){e.callMethod("destroy",[this.scrollbarH,this.scrollbarV]);this.scrollbarV=this.scrollbarH=null},handleReleaseOutside:function(a){e.AmXYChart.base.handleReleaseOutside.call(this,a);e.callMethod("handleReleaseOutside",[this.scrollbarH,
this.scrollbarV])},update:function(){e.AmXYChart.base.update.call(this);this.scrollbarH&&this.scrollbarH.update&&this.scrollbarH.update();this.scrollbarV&&this.scrollbarV.update&&this.scrollbarV.update()},zoomScrollbar:function(){this.zoomValueScrollbar(this.scrollbarV);this.zoomValueScrollbar(this.scrollbarH)},handleCursorZoomReal:function(a,b,c,d){isNaN(a)||isNaN(b)||this.relativeZoomValueAxes(this.xAxes,a,b);isNaN(c)||isNaN(d)||this.relativeZoomValueAxes(this.yAxes,c,d);this.updateAfterValueZoom()},
handleCursorZoomStarted:function(){if(this.xAxes){var a=this.xAxes[0];this.startX0=a.relativeStart;this.endX0=a.relativeEnd;a.reversed&&(this.startX0=1-a.relativeEnd,this.endX0=1-a.relativeStart)}this.yAxes&&(a=this.yAxes[0],this.startY0=a.relativeStart,this.endY0=a.relativeEnd,a.reversed&&(this.startY0=1-a.relativeEnd,this.endY0=1-a.relativeStart))},updateChartCursor:function(){e.AmXYChart.base.updateChartCursor.call(this);var a=this.chartCursor;if(a){a.valueLineEnabled=!0;a.categoryLineAxis||(a.categoryLineAxis=
this.xAxes[0]);var b=this.valueAxis;if(a.valueLineBalloonEnabled){var c=a.categoryBalloonAlpha,d=a.categoryBalloonColor,g=a.color;void 0===d&&(d=a.cursorColor);for(var h=0;h<this.valueAxes.length;h++){var b=this.valueAxes[h],f=b.balloon;f||(f={});f=e.extend(f,this.balloon,!0);f.fillColor=d;f.balloonColor=d;f.fillAlpha=c;f.borderColor=d;f.color=g;b.balloon=f}}else for(c=0;c<this.valueAxes.length;c++)b=this.valueAxes[c],b.balloon&&(b.balloon=null);a.zoomable&&(this.hideYScrollbar||(a.vZoomEnabled=!0),
this.hideXScrollbar||(a.hZoomEnabled=!0))}},handleCursorPanning:function(a){var b=a.deltaX,c=a.delta2X,d;isNaN(c)&&(c=b,d=!0);var g=this.endX0,h=this.startX0,f=g-h,c=g-f*c,g=f;d||(g=0);b=e.fitToBounds(h-f*b,0,1-g);c=e.fitToBounds(c,g,1);this.relativeZoomValueAxes(this.xAxes,b,c);f=a.deltaY;a=a.delta2Y;isNaN(a)&&(a=f,d=!0);c=this.endY0;b=this.startY0;h=c-b;f=c+h*f;c=h;d||(c=0);d=e.fitToBounds(b+h*a,0,1-c);f=e.fitToBounds(f,c,1);this.relativeZoomValueAxes(this.yAxes,d,f);this.updateAfterValueZoom()},
handleValueAxisZoom:function(a){this.handleValueAxisZoomReal(a,"V"==a.valueAxis.orientation?this.yAxes:this.xAxes)},showZB:function(){var a,b=this.valueAxes;if(b)for(var c=0;c<b.length;c++){var d=b[c];0!==d.relativeStart&&(a=!0);1!=d.relativeEnd&&(a=!0)}e.AmXYChart.base.showZB.call(this,a)}})})();
define("amcharts.xy", ["amcharts"], (function (global) {
    return function () {
        var ret, fn;
       fn = function () {
                        AmCharts.isReady = true;
                    };
        ret = fn.apply(global, arguments);
        return ret || global.AmCharts;
    };
}(this)));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/XYAxis',["./SerialAxis"], factory);
    } else {
        root.amchart_XYAxis = factory(root.amchart_SerialAxis);
    }
}(this, function (SerialAxis) {
    function XYAxis() {
        SerialAxis.call(this);
    }
    XYAxis.prototype = Object.create(SerialAxis.prototype);
    XYAxis.prototype.constructor = XYAxis;
    XYAxis.prototype._class += " amchart_XYAxis";

    XYAxis.prototype.publish("axisAutoGridCount", true, "boolean", "Specifies whether number of gridCount is specified automatically, acoarding to the axis size",null,{ override: true, tags:["Advanced"]});
    XYAxis.prototype.publish("axisGridPosition", "middle", "set", "Specifies if a grid line is placed on the center of a cell or on the beginning of a cell", ["start","middle"],{ override: true, tags:["Advanced"]});
    XYAxis.prototype.publish("axisTickFormat", null, "string", "Y-Axis Tick Format", null, { override: true, optional: true });
    XYAxis.prototype.publish("axisGridPosition", "middle", "set", "Specifies if a grid line is placed on the center of a cell or on the beginning of a cell", ["start","middle"],{ override: true, tags:["Advanced"]});
    XYAxis.prototype.publish("axisGridAlpha", 0.2, "number", "Grid alpha.",null,{override: true, tags:["Intermediate"]});

    return XYAxis;
}));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/CommonXY',["d3", "../common/HTMLWidget", "amcharts.xy", "require", "./XYAxis"], factory);
    } else {
        root.amchart_CommonXY = factory(root.d3, root.common_HTMLWidget, root.AmCharts, root.require, root.amchart_XYAxis);
    }
}(this, function(d3, HTMLWidget, AmCharts, require, Axis) {
    function CommonXY() {
        HTMLWidget.call(this);
        this._tag = "div";

        this._chart = {};

        this._selected = null;
        this._selections = [];

        this._dataUpdated = 0;
        this._prevDataUpdated = -1;
        this._columnsUpdated = 0;
        this._prevColumnsUpdated = -1;
        
        this._xAxis = new Axis();
        this._xAxis._owningWidget  = this;

        this._yAxis = new Axis();
        this._yAxis._owningWidget  = this;
    }

    CommonXY.prototype = Object.create(HTMLWidget.prototype);
    CommonXY.prototype.constructor = CommonXY;
    CommonXY.prototype._class += " amchart_CommonXY";

    CommonXY.prototype.publish("backwardsCompatible", true, "boolean", "Allow use of old publish parameters");

    CommonXY.prototype.publish("xAxes", [], "propertyArray", "widgets", null, { max: 1, tags: ["Basic"] }); // max number of xAxes
    CommonXY.prototype.publish("yAxes", [], "propertyArray", "widgets", null, { tags: ["Basic"] });

    CommonXY.prototype.publish("fontSize", 11, "number", "Font Size",null,{tags:["Basic","Shared"]});
    CommonXY.prototype.publish("fontFamily", "Verdana", "string", "Font Name",null,{tags:["Basic","Shared","Shared"]});
    CommonXY.prototype.publish("fontColor", "#000000", "html-color", "Font Color",null,{tags:["Basic","Shared"]});

    CommonXY.prototype.publish("lineWidth", 0, "number", "Line Thickness", null, {min:0,max:10,step:1,inputType:"range",tags:["Basic","Shared"]});
    CommonXY.prototype.publish("lineColor", null, "html-color", "Color of the data/content lines",null,{tags:["Basic","Shared"]});
    CommonXY.prototype.publish("lineOpacity", 0, "number", "Line Opacity", null, {min:0,max:1,step:0.001,inputType:"range",tags:["Basic","Shared"]});

    CommonXY.prototype.publish("dashedLineStyle", 0, "number", "",null,{tags:["Advanced","Shared"]});

    CommonXY.prototype.publish("showScrollbar", false, "boolean", "Chart Scrollbar",null,{tags:["Intermediate"]});

    CommonXY.prototype.publish("bulletSize", 8, "number", "Bullet Size",null,{tags:["Intermediate"]});
    CommonXY.prototype.publish("bulletType", "round", "set", "Bullet Type", ["none", "round", "square", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "bubble", "diamond"],{tags:["Intermediate"]});

    CommonXY.prototype.publish("marginLeft", 50, "number", "Margin (Left)",null,{tags:["Intermediate"]});
    CommonXY.prototype.publish("marginRight", 10, "number", "Margin (Right)",null,{tags:["Intermediate"]});
    CommonXY.prototype.publish("marginTop", 20, "number", "Margin (Top)",null,{tags:["Intermediate"]});
    CommonXY.prototype.publish("marginBottom", 50, "number", "Margin (Bottom)",null,{tags:["Intermediate"]});

    CommonXY.prototype.publish("selectionColor", "#f00", "html-color", "Font Color",null,{tags:["Basic"]});
    CommonXY.prototype.publish("selectionMode", "simple", "set", "Selection Mode", ["simple", "multi"], { tags: ["Intermediate"] });
    
    CommonXY.prototype.publish("showCursor", false, "boolean", "Show Chart Scrollbar",null,{tags:["Intermediate","Shared"]});

    CommonXY.prototype.publish("useClonedPalette", false, "boolean", "Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]});

    CommonXY.prototype.publishProxy("xAxisType", "_xAxis", "axisType");
    CommonXY.prototype.publishProxy("yAxisType", "_yAxis", "axisType");

    CommonXY.prototype.publishProxy("xAxisTitle", "_xAxis", "axisTitle");
    CommonXY.prototype.publishProxy("yAxisTitle", "_yAxis", "axisTitle");

    CommonXY.prototype.publishProxy("xAxisBaselineColor", "_xAxis", "axisBaselineColor");
    CommonXY.prototype.publishProxy("yAxisBaselineColor", "_yAxis", "axisBaselineColor");

    CommonXY.prototype.publishProxy("xAxisFontColor", "_xAxis", "axisFontColor");
    CommonXY.prototype.publishProxy("yAxisFontColor", "_yAxis", "axisFontColor");

    CommonXY.prototype.publishProxy("xAxisTitleFontSize", "_xAxis", "axisTitleFontSize");
    CommonXY.prototype.publishProxy("yAxisTitleFontSize", "_yAxis", "axisTitleFontSize");

    CommonXY.prototype.publishProxy("xAxisTitleFontColor", "_xAxis", "axisTitleFontColor");
    CommonXY.prototype.publishProxy("yAxisTitleFontColor", "_yAxis", "axisTitleFontColor");

    CommonXY.prototype.publishProxy("xAxisLabelRotation", "_xAxis", "axisLabelRotation");
    CommonXY.prototype.publishProxy("yAxisLabelRotation", "_yAxis", "axisLabelRotation");

    CommonXY.prototype.publish("axisLineWidth", 1, "number", "Thickness of axis",null,{tags:["Intermediate","Shared"]}); //??

    CommonXY.prototype.publishProxy("xAxisAutoGridCount", "_xAxis", "axisAutoGridCount");
    CommonXY.prototype.publishProxy("yAxisAutoGridCount", "_yAxis", "axisAutoGridCount");


    CommonXY.prototype.publishProxy("xAxisGridPosition", "_xAxis", "axisGridPosition");
    CommonXY.prototype.publishProxy("yAxisGridPosition", "_yAxis", "axisGridPosition");

    CommonXY.prototype.publishProxy("xAxisFillAlpha", "_xAxis", "axisFillAlpha");
    CommonXY.prototype.publishProxy("yAxisFillAlpha", "_yAxis", "axisFillAlpha");

    CommonXY.prototype.publishProxy("xAxisFillColor", "_xAxis", "axisFillColor");
    CommonXY.prototype.publishProxy("yAxisFillColor", "_yAxis", "axisFillColor");

    CommonXY.prototype.publishProxy("xAxisGridAlpha", "_xAxis", "axisGridAlpha");
    CommonXY.prototype.publishProxy("yAxisGridAlpha", "_yAxis", "axisGridAlpha");

    CommonXY.prototype.publishProxy("xAxisDashLength", "_xAxis", "axisDashLength");
    CommonXY.prototype.publishProxy("yAxisDashLength", "_yAxis", "axisDashLength");

    //CommonXY.prototype.publish("yAxisMinimum", null, "number", "",null,{tags:["Intermediate"]});

    CommonXY.prototype.publishProxy("xAxisTickFormat", "_xAxis", "axisTickFormat");
    CommonXY.prototype.publishProxy("yAxisTickFormat", "_yAxis", "axisTickFormat");

    CommonXY.prototype.publish("axisAlpha", 1, "number", "Axis opacity",null,{tags:["Intermediate"]}); // need to covnert to axis alpha this need to be publish proxied?

    CommonXY.prototype._origBackwardsCompatible = CommonXY.prototype.backwardsCompatible;
    CommonXY.prototype.backwardsCompatible = function(_) {
      var retVal = CommonXY.prototype._origBackwardsCompatible.apply(this, arguments);
        if (arguments.length) {
            this.switchProperties(_);
        }
        return retVal;
    };

    CommonXY.prototype.switchProperties = function(val) {
        if (val === true) {
            CommonXY.prototype.excludeObjs = ["amchart_XYAxis"];
            // hide the regular ones with the exclude tags?
        } else {
            CommonXY.prototype.excludeObjs = [];
        }
    };

    CommonXY.prototype.xAxis = function (idx) {
        if (!this.xAxes()[idx]) {
            var xAxis = new Axis();
            xAxis._owningWidget = this;
            this.xAxes()[idx] = xAxis;
        }
        return this.xAxes()[idx];
    };

    CommonXY.prototype.yAxis = function (idx) {
        if (!this.yAxes()[idx]) {
            var yAxis = new Axis();
            yAxis._owningWidget = this;
            this.yAxes()[idx] = yAxis;
        }
        return this.yAxes()[idx];
    };

    CommonXY.prototype.updateChartOptions = function() {
        var context = this;

        this._chart.theme = "none";
        this._chart.type = "xy";

        this._chart.color = this.fontColor();
        this._chart.fontSize = this.fontSize();
        this._chart.fontFamily = this.fontFamily();

        // left vAxis must always be 0 and bottom 1 !!

       var vAxisCount = 0;

        for (var iy = 0; iy < this.yAxes().length; iy++) {
            var yAxis = this.yAxes()[iy];

            this._chart.valueAxes[vAxisCount].position = yAxis.position() ? yAxis.position() : "left";
            this._chart.valueAxes[vAxisCount].axisAlpha = yAxis.axisAlpha();
            this._chart.valueAxes[vAxisCount].title = yAxis.axisTitle();
            this._chart.valueAxes[vAxisCount].axisThickness = yAxis.axisLineWidth();
            this._chart.valueAxes[vAxisCount].axisColor = yAxis.axisBaselineColor();
            this._chart.valueAxes[vAxisCount].color = yAxis.axisFontColor();
            this._chart.valueAxes[vAxisCount].titleFontSize = yAxis.axisTitleFontSize();
            this._chart.valueAxes[vAxisCount].titleColor = yAxis.axisTitleFontColor();
            this._chart.valueAxes[vAxisCount].autoGridCount = yAxis.axisAutoGridCount();
            this._chart.valueAxes[vAxisCount].gridPosition = yAxis.axisGridPosition();
            this._chart.valueAxes[vAxisCount].fillAlpha = yAxis.axisFillAlpha();
            this._chart.valueAxes[vAxisCount].fillColor = yAxis.axisFillColor();
            this._chart.valueAxes[vAxisCount].gridAlpha = yAxis.axisGridAlpha();
            this._chart.valueAxes[vAxisCount].dashLength = yAxis.axisDashLength();
            
            this._chart.valueAxes[vAxisCount].labelFunction = function(d) {
                return d3.format(yAxis.axisTickFormat())(d);
            };

            vAxisCount++;
        }

        for (var ix = 0; ix < this.xAxes().length; ix++) {
            var xAxis = this.xAxes()[ix];

            this._chart.valueAxes[vAxisCount].position = xAxis.position() ? xAxis.position() : "bottom";
            this._chart.valueAxes[vAxisCount].axisAlpha = xAxis.axisAlpha();
            this._chart.valueAxes[vAxisCount].title = xAxis.axisTitle();
            this._chart.valueAxes[vAxisCount].axisThickness = xAxis.axisLineWidth();
            this._chart.valueAxes[vAxisCount].axisColor = xAxis.axisBaselineColor();
            this._chart.valueAxes[vAxisCount].color = xAxis.axisFontColor();
            this._chart.valueAxes[vAxisCount].titleFontSize = xAxis.axisTitleFontSize();
            this._chart.valueAxes[vAxisCount].titleColor = xAxis.axisTitleFontColor();
            this._chart.valueAxes[vAxisCount].labelRotation = xAxis.axisLabelRotation();
            this._chart.valueAxes[vAxisCount].autoGridCount = xAxis.axisAutoGridCount();
            this._chart.valueAxes[vAxisCount].gridPosition = xAxis.axisGridPosition();
            this._chart.valueAxes[vAxisCount].fillAlpha = xAxis.axisFillAlpha();
            this._chart.valueAxes[vAxisCount].fillColor = xAxis.axisFillColor();
            this._chart.valueAxes[vAxisCount].gridAlpha = xAxis.axisGridAlpha();
            this._chart.valueAxes[vAxisCount].dashLength = xAxis.axisDashLength();

            if (xAxis.axisType() === "ordinal") {
                this._chart.valueAxes[vAxisCount].integersOnly = true;
                //this._chart.valueAxes[vAxisCount].maximum = this.data().length; // (off for now)
                this._chart.valueAxes[vAxisCount].labelFunction = function(a, b) {
                    if (b > context.data().length) {
                        return ""; // so the the last dots arent on the edge
                    }
                    return context.data().length && b > 0 ? context.data()[b-1][0] : "";
                };
            } else {
                this._chart.valueAxes[vAxisCount].labelFunction = function(d) {
                    return d3.format(xAxis.axisTickFormat())(d);
                };
            }

            vAxisCount++;
        }

        if (this._dataUpdated > this._prevDataUpdated || this._columnsUpdated > this._prevColumnsUpdated) {
            this._chart.dataProvider = this.formatData(this.data());
        }
        this._prevDataUpdated = this._dataUpdated;
        this._prevColumnsUpdated = this._columnsUpdated;

        this._chart.dataProvider.forEach(function(dataPoint,i) {
            context._chart.dataProvider[i].color = context._palette(dataPoint[context.columns()[2]]); // By Y value
            context._chart.dataProvider[i].linecolor = context.lineColor() !== null ? context.lineColor() : context._palette(dataPoint[context.columns()[2]]);
        });

        this._chart.colors = [];

        if (this.showScrollbar()) {
            this._chart.chartScrollbar.enabled = true;
        } else {
            this._chart.chartScrollbar.enabled = false;
        }

        if (this.showCursor()) {
            this._chart.precision = this.xAxes()[0].axisType() === "ordinal" ? 1 : undefined; // so ordinal will work with labelfunction 
            this._chart.chartCursor.enabled = true;
            this._chart.chartCursor.valueLineEnabled = true;
            this._chart.chartCursor.valueLineBalloonEnabled = true;
            this._chart.chartCursor.categoryBalloonEnabled = true;
        } else {
            this._chart.precision = undefined; // so ordinal will work with labelfunction
            this._chart.chartCursor.enabled = false;
            this._chart.chartCursor.valueLineEnabled = false;
            this._chart.chartCursor.valueLineBalloonEnabled = false;
            this._chart.chartCursor.categoryBalloonEnabled = false;
        }

        return this._chart;
    };

    CommonXY.prototype.buildGraphObj = function(gType,i) {
        var context = this;
        var gObj = {};
        
        gObj.id = "g" + i;

        gObj.balloonFunction = function(d) {
            var balloonText = context.columns()[d.graph.index]  + ": " + context.data()[d.index][d.graph.index];
            return balloonText;
        };
        gObj.lineAlpha = context.lineOpacity();
        gObj.lineThickness = context.lineWidth();
        gObj.bullet = context.bulletType();
        gObj.bulletSize = context.bulletSize();
        gObj.dashLength = context.dashedLineStyle(); // TODO: convert to css Array Prop
        gObj.lineAlpha = context.lineOpacity();
        gObj.lineColor = context.lineColor();
        gObj.lineThickness = context.lineWidth();

        gObj.type = gType;

        gObj.colorField = "color" + i;
        gObj.lineColorField = "linecolor";

        // XY Values
        if (this.xAxes()[0].axisType() === "ordinal") {
            gObj.xField = "idx";
            gObj.yField = context.columns()[i];
        }
        if (this.xAxes()[0].axisType() === "linear") {
            gObj.xField = context.columns()[0];
            gObj.yField = context.columns()[1];
        }
        return gObj;
    };

    CommonXY.prototype.formatData = function(dataArr) {
        var context = this;
        var dataObjArr = [];
        dataArr.forEach(function(dataRow, i) {
            var dataObj = {};
            context.columns().forEach(function(colName, cIdx) {
                dataObj[colName] = dataRow[cIdx];
                dataObj["idx"] = i + 1;
            });
            dataObjArr.push(dataObj);
        });
        return dataObjArr;
    };

    CommonXY.prototype.enter = function(domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        
        if (this.xAxes().length === 0) {
            this.xAxes().push(this._xAxis);
        }
        if (this.yAxes().length === 0) {
            this.yAxes().push(this._yAxis);
        }

        var context = this;
        var initObj = {
            type: "xy",
            addClassNames: true,
            autoMargins: true,
            chartScrollbar: {},
            valueAxes: [],
            chartCursor: {
                "enabled": false,
                "valueLineEnabled": false,
                "valueLineBalloonEnabled": false,
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "valueLineAlpha": 0.2,
                "oneBalloonOnly": true,
                "balloonPointerOrientation": "vertical",
                "valueBalloonsEnabled": false //always set false
            },
            graphs: [{}],
            dataProvider: [{}],
            responsive: {
                enabled: true
            }
        };
        if (typeof define === "function" && define.amd) {
            initObj.pathToImages = require.toUrl("amchartsImg");
        }
        this._chart = AmCharts.makeChart(domNode, initObj);
        this._chart.addListener("clickGraphItem", function(e) {
            var graph = e.graph;
            var data  = e.item.dataContext;
            var field = graph.colorField;

            if (data[field] !== null && data[field] !== undefined) {
                delete data[field];
                if (context.selectionMode() === "simple") {
                    if (context._selected !== null) {
                        delete context._selected.data[context._selected.field];
                    }
                    context._selected = null;
                }
            } else {
                data[field] = context.selectionColor();
                if (context.selectionMode() === "simple") {
                    if (context._selected !== null) {
                        delete context._selected.data[context._selected.field];
                    }
                    context._selected = {
                        field: field,
                        data: data,
                        cIdx: e.target.index,
                        dIdx: e.index
                    };
                    context._selections.push(context._selected);
                }
            }

            e.chart.validateData();

            context.click(context.rowToObj(context.data()[e.index]), context.columns()[e.target.index], context._selected !== null);
        });
    };

    CommonXY.prototype.update = function(domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        var context = this;
        
        // assign correct axe to PPs and correct context to PropertyExt Obj
        this.yAxes().forEach(function(axe, idx) {
            if (idx === 0) {
                context._yAxis = axe;
            }
            axe._owningWidget = context;
        });

        this.xAxes().forEach(function(axe, idx) {
            if (idx === 0) {
                context._xAxis = axe;
            }
            axe._owningWidget = context;
        });
        
        if (this.backwardsCompatible()) {
            this.switchProperties(true);
        } else {
            this.switchProperties(false);
        }

        domNode.style.width = this.size().width + "px";
        domNode.style.height = this.size().height + "px";

        this._palette = this._palette.switch(this.paletteID());
        if (this.useClonedPalette()) {
            this._palette = this._palette.cloneNotExists(this.paletteID() + "_" + this.id());
        }
    };

    CommonXY.prototype.render = function(callback) {
        return HTMLWidget.prototype.render.apply(this, arguments);
    };

    CommonXY.prototype.data = function(_) {
        if (arguments.length) {
            this._dataUpdated++;
        }
        return HTMLWidget.prototype.data.apply(this, arguments);
    };
    
    CommonXY.prototype.columns = function(_) {
        if (arguments.length) {
            this._columnsUpdated++;
        }
        return HTMLWidget.prototype.columns.apply(this, arguments);
    };

    return CommonXY;
}));

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Funnel',["d3", "./CommonFunnel", "../api/I2DChart"], factory);
    } else {
        root.amchart_Funnel = factory(root.d3, root.amchart_CommonFunnel, root.api_I2DChart);
    }
}(this, function(d3, CommonFunnel, I2DChart) {
    function Funnel() {
        CommonFunnel.call(this);
    }
    Funnel.prototype = Object.create(CommonFunnel.prototype);
    Funnel.prototype.constructor = Funnel;
    Funnel.prototype._class += " amchart_Funnel";
    Funnel.prototype.implements(I2DChart.prototype);

    Funnel.prototype.publish("paletteID", "default", "set", "Palette ID", Funnel.prototype._palette.switch(), {tags:["Basic","Shared"]});

    Funnel.prototype.publish("neckHeightPercent", 30, "number", "Neck Height %",null,{tags:["Basic"]});
    Funnel.prototype.publish("neckWidthPercent", 40, "number", "Neck Width %",null,{tags:["Basic"]});

    Funnel.prototype.enter = function(domNode, element) {
        CommonFunnel.prototype.enter.apply(this, arguments);
    };

    Funnel.prototype.updateChartOptions = function() {
        CommonFunnel.prototype.updateChartOptions.apply(this, arguments);

        this._chart.balloonFunction = function(d) {
            var balloonText = d.title + ", " + d.value;
            return balloonText;
        };
        this._chart.neckHeight = this.neckHeightPercent()+"%";
        this._chart.neckWidth = this.neckWidthPercent()+"%";
    };

    Funnel.prototype.update = function(domNode, element) {
        CommonFunnel.prototype.update.apply(this, arguments);

        this.updateChartOptions();

        this._chart.validateNow();
        this._chart.validateData();
    };

    return Funnel;
}));

(function(){var c=window.AmCharts;c.AmGanttChart=c.Class({inherits:c.AmSerialChart,construct:function(a){this.type="gantt";c.AmGanttChart.base.construct.call(this,a);this.cname="AmGanttChart";this.period="ss"},initChart:function(){this.dataChanged&&this.processGanttData();c.AmGanttChart.base.initChart.call(this)},parseData:function(){c.AmSerialChart.base.parseData.call(this);this.parseSerialData(this.ganttDataProvider)},processGanttData:function(){var a;this.graphs=[];var u=this.dataProvider;this.ganttDataProvider=
[];var y=this.categoryField,B=this.startField,C=this.endField,D=this.durationField,E=this.startDateField,F=this.endDateField,v=this.colorField,f=this.period,p=c.getDate(this.startDate,this.dataDateFormat,"fff");this.categoryAxis.gridPosition="start";a=this.valueAxis;this.valueAxes=[a];var z;"date"==a.type&&(z=!0);a.minimumDate&&(a.minimumDate=c.getDate(a.minimumDate,t,f));a.maximumDate&&(a.maximumDate=c.getDate(a.maximumDate,t,f));isNaN(a.minimum)||(a.minimumDate=c.changeDate(new Date(p),f,a.minimum,
!0,!0));isNaN(a.maximum)||(a.maximumDate=c.changeDate(new Date(p),f,a.maximum,!0,!0));var t=this.dataDateFormat;if(u)for(a=0;a<u.length;a++){var e=u[a],l={};l[y]=e[y];var w=e[this.segmentsField],m;this.ganttDataProvider.push(l);e=e[v];this.colors[a]||(this.colors[a]=c.randomColor());if(w)for(var g=0;g<w.length;g++){var d=w[g],b=d[B],h=d[C],n=d[D];isNaN(b)&&(b=m);isNaN(n)||(h=b+n);var n="start_"+a+"_"+g,x="end_"+a+"_"+g;l[n]=b;l[x]=h;var q="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className".split(" "),
k,r;for(r in q)k=q[r]+"Field",(m=this.graph[k])&&void 0!==d[m]&&(l[m+"_"+a+"_"+g]=d[m]);m=h;if(z){k=c.getDate(d[E],t,f);var A=c.getDate(d[F],t,f);p&&(isNaN(b)||(k=c.changeDate(new Date(p),f,b,!0,!0)),isNaN(h)||(A=c.changeDate(new Date(p),f,h,!0,!0)));l[n]=k.getTime();l[x]=A.getTime()}h={};c.copyProperties(d,h);b={};c.copyProperties(this.graph,b,!0);for(r in q)k=q[r]+"Field",this.graph[k]&&(b[k]=q[r]+"_"+a+"_"+g);b.customData=h;b.segmentData=d;b.labelFunction=this.graph.labelFunction;b.balloonFunction=
this.graph.balloonFunction;b.customBullet=this.graph.customBullet;b.type="column";b.openField=n;b.valueField=x;b.clustered=!1;d[v]&&(e=d[v]);b.columnWidth=d[this.columnWidthField];void 0===e&&(e=this.colors[a]);(d=this.brightnessStep)&&(e=c.adjustLuminosity(e,g*d/100));void 0===this.graph.lineColor&&(b.lineColor=e);void 0===this.graph.fillColors&&(b.fillColors=e);this.graphs.push(b)}}}})})();
define("amcharts.gantt", ["amcharts","amcharts.serial"], (function (global) {
    return function () {
        var ret, fn;
       fn = function () {
                        AmCharts.isReady = true;
                    };
        ret = fn.apply(global, arguments);
        return ret || global.AmCharts;
    };
}(this)));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Gantt',["d3", "../common/HTMLWidget", "amcharts.gantt", "../api/INDChart", "require"], factory);
    } else {
        root.amchart_Gantt = factory(root.d3, root.common_HTMLWidget, root.AmCharts, root.api_INDChart, root.require);
    }
}(this, function(d3, HTMLWidget, AmCharts, INDChart, require) {
    function Gantt() {
        HTMLWidget.call(this);
        this._tag = "div";
        this._chart = {};
        
        this._selected = null;
        this._selections = [];

        this._dataUpdated = 0;
        this._prevDataUpdated = -1;
        this._columnsUpdated = 0;
        this._prevColumnsUpdated = -1;

        this._dateParserData = d3.time.format("%Y-%m-%d").parse;
    }
    Gantt.prototype = Object.create(HTMLWidget.prototype);
    Gantt.prototype.constructor = Gantt;
    Gantt.prototype._class += " amchart_Gantt";
    Gantt.prototype.implements(INDChart.prototype); // 2d?

    Gantt.prototype.publish("paletteID", "default", "set", "Palette ID", Gantt.prototype._palette.switch(), {tags:["Basic","Shared"]});

    Gantt.prototype.publish("fontFamily", "Verdana", "string", "Label Font Family",null,{tags:["Basic","Shared"]});
    Gantt.prototype.publish("fontSize", 11, "number", "Label Font Size",null,{tags:["Basic","Shared"]});
    Gantt.prototype.publish("fontColor", "#000000", "html-color", "Label Font Color",null,{tags:["Basic","Shared"]});

    Gantt.prototype.publish("depth3D", 0, "number", "3D Depth (px)",null,{tags:["Basic"]});
    Gantt.prototype.publish("angle3D", 0, "number", "3D Angle (Deg)",null,{tags:["Basic"]});

    Gantt.prototype.publish("selectionMode", "simple", "set", "Selection Mode", ["simple", "multi"], { tags: ["Intermediate"] });

    Gantt.prototype.publish("useClonedPalette", false, "boolean", "Enable or disable using a cloned palette", null, { tags: ["Intermediate", "Shared"] });

    Gantt.prototype.publish("timePattern", "%Y-%m-%d", "string", "Time Series Pattern");

    Gantt.prototype.publish("selectionColor", "#f00", "html-color", "Font Color",null,{tags:["Basic"]});

    Gantt.prototype.publish("brightnessStep", 0, "number", "Brightness step",null,{tags:["Basic"]});
    Gantt.prototype.publish("columnWidth", 0.5, "number", "column width",null,{tags:["Basic"]});
    Gantt.prototype.publish("minPeriod", "DD", "string", "Value axis minimum period",null,{tags:["Basic"]});

    Gantt.prototype.publish("guides", [], "array", "Vertical lines",null,{tags:["Intermediate"]});

    var timePattern = Gantt.prototype.timePattern;
    Gantt.prototype.timePattern = function (_) {
        var retVal = timePattern.apply(this, arguments);
        if (arguments.length) {
            this._dateParserData = d3.time.format(_).parse;
        }
        return retVal;
    };

    Gantt.prototype.updateChartOptions = function() {
        var context = this;
        
        this._chart.color = this.fontColor();
        this._chart.fontSize = this.fontSize();
        this._chart.fontFamily = this.fontFamily();

        this._chart.depth3D = this.depth3D();
        this._chart.angle = this.angle3D();

        if (this._dataUpdated > this._prevDataUpdated || this._prevTimePattern !== this.timePattern()) {
            this._chart.dataProvider = [];
            var data = this.amFormattedData();
            for (var key in data) {
                var obj = {};
                obj.category = key;
                obj.segments = [];
                data[key].forEach(function (range) {
                    var segment = { "start": context._dateParserData(range[0]), "end": context._dateParserData(range[1]) };
                    obj.segments.push(segment);
                });
                this._chart.dataProvider.push(obj); 
            }
        }
        this._prevDataUpdated = this._dataUpdated;
        this._prevTimePattern = this.timePattern();
        
        this._chart.dataProvider.forEach(function(dataPoint,i){
            context._chart.dataProvider[i].color = context._palette(i);
        });

        this._chart.columnWidth = this.columnWidth();
        this._chart.colorField = "color";

        this._chart.valueAxes[0].type = "date";
        this._chart.valueAxes[0].minPeriod = this.minPeriod();

        this._chart.brightnessStep = this.brightnessStep() || undefined;

        this._chart.categoryField = "category";
        this._chart.segmentsField = "segments";
        this._chart.startDateField = "start";
        this._chart.endDateField = "end";

        this._chart.guides = this.guides();
    };

    Gantt.prototype.amFormattedData = function() {
        var obj = {};
        this.data().forEach(function (row) {
            if (!obj[row[0]]) {
                obj[row[0]] = [];
            }
            row.forEach(function (data, idx) {
                if (idx === 0) {
                    return;
                }
                obj[row[0]].push(data);
            });
        });
        return obj;
    };

    Gantt.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        var context = this;

        var initObj = {
            "type": "gantt",
            "theme": "none",
            "autoMargins": true,
            "valueAxis": {},
            "graph": {
                "fillAlphas": 1,
                "balloonText": "<b>[[category]]</b>: [[open]] - [[value]]" // TODO replace with balloon function
            },
            "rotate": true,
            "dataProvider": [],
            "chartScrollbar": {},
            "export": {
                "enabled": true
             }
        };

        if (typeof define === "function" && define.amd) {
            initObj.pathToImages = require.toUrl("amchartsImg");
        }
        this._chart = AmCharts.makeChart(domNode, initObj);  
         
        this._chart.addListener("clickGraphItem", function(e) {        
            var data  = e.graph.segmentData;
            var field = "color";

            if (data[field] !== null && data[field] !== undefined) {
                delete data[field];
                if (context.selectionMode() === "simple") {
                    if (context._selected !== null) {
                        delete context._selected.data[context._selected.field];
                    }
                    context._selected = null;
                }
            } else {
                data[field] = context.selectionColor();
                if (context.selectionMode() === "simple") {
                    if (context._selected !== null) {
                        delete context._selected.data[context._selected.field];
                    }
                    context._selected = {
                        field: field,
                        data: data,
                        colIndex: e.target.columnIndex,
                        dIdx: e.index
                    };
                    context._selections.push(context._selected);
                }
            }

            e.chart.validateData();

            context.click(context.rowToObj(context.data()[e.index]), context.columns()[e.target.columnIndex + 1], context._selected !== null);
        });
    };

    Gantt.prototype.update = function(domNode, element) {
        this._palette = this._palette.switch(this.paletteID());
        if (this.useClonedPalette()) {
            this._palette = this._palette.cloneNotExists(this.paletteID() + "_" + this.id());
        }

        domNode.style.width = this.size().width + "px";
        domNode.style.height = this.size().height + "px";

        this.updateChartOptions();

        this._chart.validateNow();
        this._chart.validateData();
    };

    Gantt.prototype.render = function(callback) {
        return HTMLWidget.prototype.render.apply(this, arguments);
    };

    Gantt.prototype.data = function(_) {
        if (arguments.length) {
            this._dataUpdated++;
        }
        return HTMLWidget.prototype.data.apply(this, arguments);
    };

    Gantt.prototype.columns = function(_) {
        if (arguments.length) {
            this._columnsUpdated++;
        }
        return HTMLWidget.prototype.columns.apply(this, arguments);
    };

    return Gantt;
}));


(function(){var c=window.AmCharts;c.GaugeAxis=c.Class({construct:function(a){this.cname="GaugeAxis";this.radius="95%";this.createEvents("rollOverBand","rollOutBand","clickBand");this.labelsEnabled=!0;this.startAngle=-120;this.endAngle=120;this.startValue=0;this.endValue=200;this.gridCount=5;this.tickLength=10;this.minorTickLength=5;this.tickColor="#555555";this.labelFrequency=this.tickThickness=this.tickAlpha=1;this.inside=!0;this.labelOffset=10;this.showLastLabel=this.showFirstLabel=!0;this.axisThickness=
1;this.axisColor="#000000";this.axisAlpha=1;this.gridInside=!0;this.topTextYOffset=0;this.topTextBold=!0;this.bottomTextYOffset=0;this.bottomTextBold=!0;this.centerY=this.centerX="0%";this.bandOutlineAlpha=this.bandOutlineThickness=0;this.bandOutlineColor="#000000";this.bandAlpha=1;this.bcn="gauge-axis";c.applyTheme(this,a,"GaugeAxis")},value2angle:function(a){return(a-this.startValue)/(this.endValue-this.startValue)*(this.endAngle-this.startAngle)+this.startAngle},setTopText:function(a){if(void 0!==
a){this.topText=a;var b=this.chart;if(this.axisCreated){this.topTF&&this.topTF.remove();var e=this.topTextFontSize;e||(e=b.fontSize);var d=this.topTextColor;d||(d=b.color);a=c.text(b.container,a,d,b.fontFamily,e,void 0,this.topTextBold);c.setCN(b,a,"axis-top-label");a.translate(this.centerXReal,this.centerYReal-this.radiusReal/2+this.topTextYOffset);this.set.push(a);this.topTF=a}}},setBottomText:function(a){if(void 0!==a){this.bottomText=a;var b=this.chart;if(this.axisCreated){this.bottomTF&&this.bottomTF.remove();
var e=this.bottomTextFontSize;e||(e=b.fontSize);var d=this.bottomTextColor;d||(d=b.color);a=c.text(b.container,a,d,b.fontFamily,e,void 0,this.bottomTextBold);c.setCN(b,a,"axis-bottom-label");a.translate(this.centerXReal,this.centerYReal+this.radiusReal/2+this.bottomTextYOffset);this.bottomTF=a;this.set.push(a)}}},draw:function(){var a=this.chart,b=a.container.set();this.set=b;c.setCN(a,b,this.bcn);c.setCN(a,b,this.bcn+"-"+this.id);a.graphsSet.push(b);var e=this.startValue,d=this.endValue,g=this.valueInterval;
isNaN(g)&&(g=(d-e)/this.gridCount);var m=this.minorTickInterval;isNaN(m)&&(m=g/5);var u=this.startAngle,k=this.endAngle,h=this.tickLength,d=(d-e)/g+1,v=(k-u)/(d-1),f=v/g;this.singleValueAngle=f;var p=a.container,G=this.tickColor,E=this.tickAlpha,M=this.tickThickness,m=g/m,N=v/m,H=this.minorTickLength,I=this.labelFrequency,y=this.radiusReal;this.inside||(y-=15);var C=a.centerX+c.toCoordinate(this.centerX,a.realWidth),D=a.centerY+c.toCoordinate(this.centerY,a.realHeight);this.centerXReal=C;this.centerYReal=
D;var z={fill:this.axisColor,"fill-opacity":this.axisAlpha,"stroke-width":0,"stroke-opacity":0},r,F;this.gridInside?F=r=y:(r=y-h,F=r+H);var t=this.bands;if(t)for(var q=0;q<t.length;q++){var n=t[q];if(n){var x=n.startValue,B=n.endValue,l=c.toCoordinate(n.radius,y);isNaN(l)&&(l=F);var w=c.toCoordinate(n.innerRadius,y);isNaN(w)&&(w=l-H);var J=u+f*(x-this.startValue),B=f*(B-x),A=n.outlineColor;void 0==A&&(A=this.bandOutlineColor);var K=n.outlineThickness;isNaN(K)&&(K=this.bandOutlineThickness);var L=
n.outlineAlpha;isNaN(L)&&(L=this.bandOutlineAlpha);x=n.alpha;isNaN(x)&&(x=this.bandAlpha);A={fill:n.color,stroke:A,"stroke-width":K,"stroke-opacity":L};n.url&&(A.cursor="pointer");l=c.wedge(p,C,D,J,B,l,l,w,0,A);c.setCN(a,l.wedge,"axis-band");void 0!==n.id&&c.setCN(a,l.wedge,"axis-band-"+n.id);l.setAttr("opacity",x);this.set.push(l);this.addEventListeners(l,n)}}f=this.axisThickness/2;k=c.wedge(p,C,D,u,k-u,r+f,r+f,r-f,0,z);c.setCN(a,k.wedge,"axis-line");b.push(k);k=c.doNothing;c.isModern||(k=Math.round);
g=c.roundTo(g,14);f=c.getDecimals(g);for(z=0;z<d;z++)if(t=e+z*g,r=u+z*v,q=k(C+y*Math.sin(r/180*Math.PI)),n=k(D-y*Math.cos(r/180*Math.PI)),l=k(C+(y-h)*Math.sin(r/180*Math.PI)),w=k(D-(y-h)*Math.cos(r/180*Math.PI)),q=c.line(p,[q,l],[n,w],G,E,M,0,!1,!1,!0),c.setCN(a,q,"axis-tick"),b.push(q),q=-1,l=this.labelOffset,this.inside||(l=-l-h,q=1),n=C+(y-h-l)*Math.sin(r/180*Math.PI),l=D-(y-h-l)*Math.cos(r/180*Math.PI),x=this.fontSize,isNaN(x)&&(x=a.fontSize),w=Math.sin((r-90)/180*Math.PI),J=Math.cos((r-90)/180*
Math.PI),0<I&&this.labelsEnabled&&z/I==Math.round(z/I)&&(this.showLastLabel||z!=d-1)&&(this.showFirstLabel||0!==z)&&(B=this.usePrefixes?c.addPrefix(t,a.prefixesOfBigNumbers,a.prefixesOfSmallNumbers,a.nf,!0):c.formatNumber(t,a.nf,f),(A=this.unit)&&(B="left"==this.unitPosition?A+B:B+A),(A=this.labelFunction)&&(B=A(t)),t=c.text(p,B,a.color,a.fontFamily,x),c.setCN(a,t,"axis-label"),x=t.getBBox(),t.translate(n+q*x.width/2*J,l+q*x.height/2*w),b.push(t)),z<d-1)for(t=1;t<m;t++)w=r+N*t,q=k(C+F*Math.sin(w/
180*Math.PI)),n=k(D-F*Math.cos(w/180*Math.PI)),l=k(C+(F-H)*Math.sin(w/180*Math.PI)),w=k(D-(F-H)*Math.cos(w/180*Math.PI)),q=c.line(p,[q,l],[n,w],G,E,M,0,!1,!1,!0),c.setCN(a,q,"axis-tick-minor"),b.push(q);this.axisCreated=!0;this.setTopText(this.topText);this.setBottomText(this.bottomText);a=a.graphsSet.getBBox();this.width=a.width;this.height=a.height},addListeners:function(a,b){var c=this;b.mouseover(function(a){}).mouseout(function(b){c.fireEvent("rollOutBand",a,b)}).touchend(function(b){c.fireEvent("clickBand",
a,b)}).touchstart(function(b){c.fireEvent("rollOverBand",a,b)}).click(function(b){c.fireEvent("clickBand",a,b)})},fireEvent:function(a,b,c){this.fire({type:a,dataItem:b,chart:this,event:c})},addEventListeners:function(a,b){var e=this,d=e.chart;a.mouseover(function(a){d.showBalloon(b.balloonText,b.color,!0);e.fireEvent("rollOverBand",b,a)}).mouseout(function(a){d.hideBalloon();e.fireEvent("rollOutBand",b,a)}).click(function(a){e.fireEvent("clickBand",b,a);c.getURL(b.url,d.urlTarget)}).touchend(function(a){e.fireEvent("clickBand",
b,a);c.getURL(b.url,d.urlTarget)})}})})();(function(){var c=window.AmCharts;c.GaugeArrow=c.Class({construct:function(a){this.cname="GaugeArrow";this.color="#000000";this.nailAlpha=this.alpha=1;this.startWidth=this.nailRadius=8;this.endWidth=0;this.borderAlpha=1;this.radius="90%";this.nailBorderAlpha=this.innerRadius=0;this.nailBorderThickness=1;this.frame=0;c.applyTheme(this,a,"GaugeArrow")},setValue:function(a){var b=this.chart;b?b.setValue?b.setValue(this,a):this.previousValue=this.value=a:this.previousValue=this.value=a}});c.GaugeBand=
c.Class({construct:function(){this.cname="GaugeBand"}})})();(function(){var c=window.AmCharts;c.AmAngularGauge=c.Class({inherits:c.AmChart,construct:function(a){this.cname="AmAngularGauge";c.AmAngularGauge.base.construct.call(this,a);this.theme=a;this.type="gauge";this.minRadius=this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=10;this.faceColor="#FAFAFA";this.faceAlpha=0;this.faceBorderWidth=1;this.faceBorderColor="#555555";this.faceBorderAlpha=0;this.arrows=[];this.axes=[];this.startDuration=1;this.startEffect="easeOutSine";this.adjustSize=
!0;this.extraHeight=this.extraWidth=0;c.applyTheme(this,a,this.cname)},addAxis:function(a){this.axes.push(a)},formatString:function(a,b){return a=c.formatValue(a,b,["value"],this.nf,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers)},initChart:function(){c.AmAngularGauge.base.initChart.call(this);var a;0===this.axes.length&&(a=new c.GaugeAxis(this.theme),this.addAxis(a));var b;for(b=0;b<this.axes.length;b++)a=this.axes[b],a=c.processObject(a,c.GaugeAxis,this.theme),a.id||(a.id=
"axisAuto"+b+"_"+(new Date).getTime()),a.chart=this,this.axes[b]=a;var e=this.arrows;for(b=0;b<e.length;b++){a=e[b];a=c.processObject(a,c.GaugeArrow,this.theme);a.id||(a.id="arrowAuto"+b+"_"+(new Date).getTime());a.chart=this;e[b]=a;var d=a.axis;c.isString(d)&&(a.axis=c.getObjById(this.axes,d));a.axis||(a.axis=this.axes[0]);isNaN(a.value)&&a.setValue(a.axis.startValue);isNaN(a.previousValue)&&(a.previousValue=a.axis.startValue)}this.setLegendData(e);this.drawChart();this.totalFrames=this.startDuration*
c.updateRate},drawChart:function(){c.AmAngularGauge.base.drawChart.call(this);var a=this.container,b=this.updateWidth();this.realWidth=b;var e=this.updateHeight();this.realHeight=e;var d=c.toCoordinate,g=d(this.marginLeft,b),m=d(this.marginRight,b),u=d(this.marginTop,e)+this.getTitleHeight(),k=d(this.marginBottom,e),h=d(this.radius,b,e),d=b-g-m,v=e-u-k+this.extraHeight;h||(h=Math.min(d,v)/2);h<this.minRadius&&(h=this.minRadius);this.radiusReal=h;this.centerX=(b-g-m)/2+g;this.centerY=(e-u-k)/2+u+this.extraHeight/
2;isNaN(this.gaugeX)||(this.centerX=this.gaugeX);isNaN(this.gaugeY)||(this.centerY=this.gaugeY);var b=this.faceAlpha,e=this.faceBorderAlpha,f;if(0<b||0<e)f=c.circle(a,h,this.faceColor,b,this.faceBorderWidth,this.faceBorderColor,e,!1),f.translate(this.centerX,this.centerY),f.toBack(),(a=this.facePattern)&&f.pattern(a,NaN,this.path);for(b=h=a=0;b<this.axes.length;b++)e=this.axes[b],g=e.radius,e.radiusReal=c.toCoordinate(g,this.radiusReal),e.draw(),m=1,-1!==String(g).indexOf("%")&&(m=1+(100-Number(g.substr(0,
g.length-1)))/100),e.width*m>a&&(a=e.width*m),e.height*m>h&&(h=e.height*m);(b=this.legend)&&b.invalidateSize();if(this.adjustSize&&!this.sizeAdjusted){f&&(f=f.getBBox(),f.width>a&&(a=f.width),f.height>h&&(h=f.height));f=0;if(v>h||d>a)f=Math.min(v-h,d-a);0<f&&(this.extraHeight=v-h,this.sizeAdjusted=!0,this.validateNow())}d=this.arrows.length;for(b=0;b<d;b++)v=this.arrows[b],v.drawnAngle=NaN;this.dispDUpd()},validateSize:function(){this.extraHeight=this.extraWidth=0;this.chartCreated=!1;c.AmAngularGauge.base.validateSize.call(this)},
addArrow:function(a){this.arrows.push(a)},removeArrow:function(a){c.removeFromArray(this.arrows,a);this.validateNow()},removeAxis:function(a){c.removeFromArray(this.axes,a);this.validateNow()},drawArrow:function(a,b){a.set&&a.set.remove();var e=this.container;a.set=e.set();c.setCN(this,a.set,"gauge-arrow");c.setCN(this,a.set,"gauge-arrow-"+a.id);if(!a.hidden){var d=a.axis,g=d.radiusReal,m=d.centerXReal,u=d.centerYReal,k=a.startWidth,h=a.endWidth,v=c.toCoordinate(a.innerRadius,d.radiusReal),f=c.toCoordinate(a.radius,
d.radiusReal);d.inside||(f-=15);var p=a.nailColor;p||(p=a.color);var G=a.nailColor;G||(G=a.color);0<a.nailRadius&&(p=c.circle(e,a.nailRadius,p,a.nailAlpha,a.nailBorderThickness,p,a.nailBorderAlpha),c.setCN(this,p,"gauge-arrow-nail"),a.set.push(p),p.translate(m,u));isNaN(f)&&(f=g-d.tickLength);var d=Math.sin(b/180*Math.PI),g=Math.cos(b/180*Math.PI),p=Math.sin((b+90)/180*Math.PI),E=Math.cos((b+90)/180*Math.PI),e=c.polygon(e,[m-k/2*p+v*d,m+f*d-h/2*p,m+f*d+h/2*p,m+k/2*p+v*d],[u+k/2*E-v*g,u-f*g+h/2*E,
u-f*g-h/2*E,u-k/2*E-v*g],a.color,a.alpha,1,G,a.borderAlpha,void 0,!0);c.setCN(this,e,"gauge-arrow");a.set.push(e);this.graphsSet.push(a.set)}},setValue:function(a,b){a.axis&&a.axis.value2angle&&(a.frame=0,a.previousValue=a.value);a.value=b;var c=this.legend;c&&c.updateValues()},handleLegendEvent:function(a){var b=a.type;a=a.dataItem;if(!this.legend.data&&a)switch(b){case "hideItem":this.hideArrow(a);break;case "showItem":this.showArrow(a)}},hideArrow:function(a){a.set.hide();a.hidden=!0},showArrow:function(a){a.set.show();
a.hidden=!1},updateAnimations:function(){c.AmAngularGauge.base.updateAnimations.call(this);for(var a=this.arrows.length,b,e=0;e<a;e++)if(b=this.arrows[e],b.axis&&b.axis.value2angle){var d;b.frame>=this.totalFrames?d=b.value:(b.frame++,b.clockWiseOnly&&b.value<b.previousValue&&(d=b.axis,b.previousValue-=d.endValue-d.startValue),d=c.getEffect(this.startEffect),d=c[d](0,b.frame,b.previousValue,b.value-b.previousValue,this.totalFrames),isNaN(d)&&(d=b.value));d=b.axis.value2angle(d);b.drawnAngle!=d&&(this.drawArrow(b,
d),b.drawnAngle=d)}}})})();
define("amcharts.gauge", ["amcharts"], (function (global) {
    return function () {
        var ret, fn;
       fn = function () {
                        AmCharts.isReady = true;
                    };
        ret = fn.apply(global, arguments);
        return ret || global.AmCharts;
    };
}(this)));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Gauge',["d3", "../common/HTMLWidget", "amcharts.gauge", "../api/I1DChart", "require"], factory);
    } else {
        root.amchart_Gauge = factory(root.d3, root.common_HTMLWidget, root.AmCharts, root.api_I1DChart, root.require);
    }
}(this, function(d3, HTMLWidget, AmCharts, I1DChart, require) {
    function Gauge() {
        HTMLWidget.call(this);
        this._tag = "div";

        this._chart = {};
    }
    Gauge.prototype = Object.create(HTMLWidget.prototype);
    Gauge.prototype.constructor = Gauge;
    Gauge.prototype._class += " amchart_Gauge";
    Gauge.prototype.implements(I1DChart.prototype);

    Gauge.prototype.publish("paletteID", "default", "set", "Palette ID", Gauge.prototype._palette.switch(), {tags:["Basic","Shared"]});
    Gauge.prototype.publish("low", 0, "number", "Gauge lower bound", null, {tags:["Intermediate","Shared"]});
    Gauge.prototype.publish("high", 100, "number", "Gauge higher bound", null, {tags:["Intermediate","Shared"]});

    Gauge.prototype.publish("fontSize", 11, "number", "Font Size",null,{tags:["Basic","Shared"]});
    Gauge.prototype.publish("fontFamily", "Verdana", "string", "Font Name",null,{tags:["Basic","Shared","Shared"]});
    Gauge.prototype.publish("fontColor", "#000000", "html-color", "Font Color",null,{tags:["Basic","Shared"]});

    Gauge.prototype.publish("axisLineWidth", 1, "number", "Thickness of axis",null,{tags:["Intermediate"]});

    Gauge.prototype.publish("colorType", "a", "set", "", ["a","b","c"],{tags:["Basic"]});

    Gauge.prototype.publish("marginLeft", null, "number", "Margin (Left)",null,{tags:["Intermediate"]});
    Gauge.prototype.publish("marginRight", null, "number", "Margin (Right)",null,{tags:["Intermediate"]});
    Gauge.prototype.publish("marginTop", null, "number", "Margin (Top)",null,{tags:["Intermediate"]});
    Gauge.prototype.publish("marginBottom", null, "number", "Margin (Bottom)",null,{tags:["Intermediate"]});

    Gauge.prototype.publish("numBands", null, "number", "",null,{tags:["Intermediate"]});
    Gauge.prototype.publish("bandsColor", [], "array", "Bands Color",null,{tags:["Basic"]});
    Gauge.prototype.publish("bandsStartValue", [], "array", "Bands Start Value",null,{tags:["Advanced"]});
    Gauge.prototype.publish("bandsEndValue", [], "array", "Bands End Value",null,{tags:["Advanced"]});
    Gauge.prototype.publish("bandsInnerRadius", [], "array", "Bands Inner Radius",null,{tags:["Advanced"]});

    Gauge.prototype.publish("axisAlpha", 0.2, "number", "Axis Alpha",null,{tags:["Intermediate"]});
    Gauge.prototype.publish("tickAlpha", 0.2, "number", "Tick Alpha",null,{tags:["Intermediate"]});
    Gauge.prototype.publish("valueInterval", 20, "number", "Value Interval",null,{tags:["Advanced"]});
    Gauge.prototype.publish("bottomText", "", "string", "Text Along Bottom",null,{tags:["Intermediate"]});
    Gauge.prototype.publish("bottomTextYOffset", -20, "number", "Bottom Text Vertical Offset",null,{tags:["Intermediate"]});

    Gauge.prototype.publish("animatationDuration", 2, "number", "Animation Duration (sec)",null,{tags:["Intermediate"]});

    Gauge.prototype.publish("useClonedPalette", false, "boolean", "Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]});

    Gauge.prototype.updateChartOptions = function() {
        this._chart.type = "gauge";
        this._chart.theme = "none";

        this._chart.startDuration = this.animatationDuration();

        this._chart.color = this.fontColor();
        this._chart.fontSize = this.fontSize();
        this._chart.fontFamily = this.fontFamily();

        this._chart.titles = [];
        this._chart.allLabels = [];

        if (this.marginLeft()) { this._chart.marginLeft = this.marginLeft(); }
        if (this.marginRight()) { this._chart.marginRight = this.marginRight(); }
        if (this.marginTop()) { this._chart.marginTop = this.marginTop(); }
        if (this.marginBottom()) { this._chart.marginBottom = this.marginBottom(); }

        this._chart.axes[0].axisThickness = this.axisLineWidth();
        this._chart.axes[0].axisAlpha = this.axisAlpha();
        this._chart.axes[0].tickAlpha = this.tickAlpha();
        this._chart.axes[0].valueInterval = this.valueInterval();
        this._chart.axes[0].bands = [];
        this._chart.axes[0].bottomText = this.bottomText();
        this._chart.axes[0].bottomTextYOffset = this.bottomTextYOffset();
        this._chart.axes[0].endValue = this.high();
        this._chart.axes[0].startValue = this.low();

        // 3 Color Methods
        var i, l;
        if (this.colorType() === "a") {
            for (i = 0, l = this.numBands(); i < l; i++) {
                var a_band = {
                    color: this.bandsColor()[i],
                    startValue: this.bandsStartValue()[i],
                    endValue: this.bandsEndValue()[i],
                    innerRadius: this.bandsInnerRadius()[i],
                };
                this._chart.axes[0].bands.push(a_band);
            }
        }
        if (this.colorType() === "b") {
            for (i = 0, l = this.high() ; i < l; i++) {
                var b_band = {
                    color: this._palette(i, this.low(), this.high()),
                    startValue: i,
                    endValue: i+1,
                    //innerRadius: this._bandsInnerRadius[i] || "", // this has a cool effect might be useful?
                    innerRadius: this.bandsInnerRadius()[0]
                };
                this._chart.axes[0].bands.push(b_band);
            }
        }
        if (this.colorType() === "c") {
            var c_band = {
                color: this._palette(this.data(), this.low(), this.high()),
                startValue: this.low(),
                endValue: this.high(),
                innerRadius: this.bandsInnerRadius()[0]
            };
            this._chart.axes[0].bands.push(c_band);
        }

        this._chart.axes[0].bottomText = this.bottomText().replace("[[data]]",this.data());

        return this._chart;
    };

    Gauge.prototype.update = function(domNode, element) {
        this._palette = this._palette.switch(this.paletteID());
        if (this.useClonedPalette()) {
            this._palette = this._palette.cloneNotExists(this.paletteID() + "_" + this.id());
        }

        domNode.style.width = this.size().width + "px";
        domNode.style.height = this.size().height + "px";

        this.updateChartOptions();
        this._chart.arrows[0].setValue(this.data());

        this._chart.validateNow();
        this._chart.validateData();
    };

    Gauge.prototype.enter = function(domNode, element) {
        domNode.style.width = this.size().width + "px";
        domNode.style.height = this.size().height + "px";

        var initObj = {
            type: "gauge",
            addClassNames: true,
            axes: [{}],
            arrows:[{}],
        };
        if (typeof define === "function" && define.amd) {
            initObj.pathToImages = require.toUrl("amchartsImg");
        }
        this._chart = AmCharts.makeChart(domNode, initObj);
    };

    return Gauge;
}));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Line',["d3", "./CommonSerial", "../api/INDChart"], factory);
    } else {
        root.amchart_Line = factory(root.d3, root.amchart_CommonSerial, root.api_INDChart);
    }
}(this, function(d3, CommonSerial, INDChart) {
    function Line() {
        CommonSerial.call(this);
        this._tag = "div";
        this._gType = "line";
    }
    Line.prototype = Object.create(CommonSerial.prototype);
    Line.prototype.constructor = Line;
    Line.prototype._class += " amchart_Line";
    Line.prototype.implements(INDChart.prototype);

    Line.prototype.publish("paletteID", "default", "set", "Palette ID", Line.prototype._palette.switch(), {tags:["Basic","Shared"]});
    Line.prototype.publish("smoothLines", false, "boolean", "Causes chart data lines to draw smoothly",null,{tags:["Basic","Shared"]});

    Line.prototype.publish("stepLines", false, "boolean", "Causes chart data lines to draw smoothly",null,{tags:["Basic"]});

    Line.prototype.publish("bulletSize", 6, "number", "Bullet Size",null,{tags:["Intermediate"]});
    Line.prototype.publish("bulletType", "round", "set", "Bullet Type", ["none", "round", "square", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "bubble", "diamond"],{tags:["Basic"]});

    Line.prototype.enter = function(domNode, element) {
        CommonSerial.prototype.enter.apply(this, arguments);
    };

    Line.prototype.updateChartOptions = function() {
        CommonSerial.prototype.updateChartOptions.apply(this, arguments);

        this.buildGraphs(this._gType);

        return this._chart;
    };

    Line.prototype.buildGraphs = function(gType) {
        this._chart.graphs = [];

        for (var i = 0; i < this.columns().length - 1; i++) {
            var gRetVal = CommonSerial.prototype.buildGraphObj.call(this, gType, i);
            var gObj = buildGraphObj.call(this, gRetVal, i);

            this._chart.addGraph(gObj);
        }

        function buildGraphObj(gObj, i) {
            if (this.stepLines()) {
                gObj.type = "step";
            } else if (this.smoothLines()) {
                gObj.type = "smoothedLine";
            } else {
                gObj.type = "line";
            }

            gObj.bullet = this.bulletType();
            gObj.bulletSize = this.bulletSize();

            return gObj;
        }
    };

    Line.prototype.update = function(domNode, element) {
        CommonSerial.prototype.update.apply(this, arguments);

        this.updateChartOptions();

        this._chart.validateNow();
        this._chart.validateData();
    };

    return Line;
}));

(function(){var k=window.AmCharts;k.AmSlicedChart=k.Class({inherits:k.AmChart,construct:function(a){this.createEvents("rollOverSlice","rollOutSlice","clickSlice","pullOutSlice","pullInSlice","rightClickSlice");k.AmSlicedChart.base.construct.call(this,a);this.colors="#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" ");this.alpha=1;this.groupPercent=0;this.groupedTitle="Other";
this.groupedPulled=!1;this.groupedAlpha=1;this.marginLeft=0;this.marginBottom=this.marginTop=10;this.marginRight=0;this.hoverAlpha=1;this.outlineColor="#FFFFFF";this.outlineAlpha=0;this.outlineThickness=1;this.startAlpha=0;this.startDuration=1;this.startEffect="bounce";this.sequencedAnimation=!0;this.pullOutDuration=1;this.pullOutEffect="bounce";this.pullOnHover=this.pullOutOnlyOne=!1;this.labelsEnabled=!0;this.labelTickColor="#000000";this.labelTickAlpha=.2;this.hideLabelsPercent=0;this.urlTarget=
"_self";this.autoMarginOffset=10;this.gradientRatio=[];this.maxLabelWidth=200;k.applyTheme(this,a,"AmSlicedChart")},initChart:function(){k.AmSlicedChart.base.initChart.call(this);this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=!1,this.setLegendData(this.chartData));this.drawChart()},handleLegendEvent:function(a){var b=a.type,c=a.dataItem,d=this.legend;if(!d.data&&c){var g=c.hidden;a=a.event;switch(b){case "clickMarker":g||d.switchable||this.clickSlice(c,a);break;case "clickLabel":g||
this.clickSlice(c,a,!1);break;case "rollOverItem":g||this.rollOverSlice(c,!1,a);break;case "rollOutItem":g||this.rollOutSlice(c,a);break;case "hideItem":this.hideSlice(c,a);break;case "showItem":this.showSlice(c,a)}}},invalidateVisibility:function(){this.recalculatePercents();this.initChart();var a=this.legend;a&&a.invalidateSize()},addEventListeners:function(a,b){var c=this;a.mouseover(function(a){c.rollOverSlice(b,!0,a)}).mouseout(function(a){c.rollOutSlice(b,a)}).touchend(function(a){c.rollOverSlice(b,
a)}).touchstart(function(a){}).mouseup(function(a){c.clickSlice(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)})},formatString:function(a,b,c){a=k.formatValue(a,b,["value"],this.nf,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);var d=this.pf.precision;isNaN(this.tempPrec)||(this.pf.precision=this.tempPrec);a=k.formatValue(a,b,["percents"],this.pf);a=k.massReplace(a,{"[[title]]":b.title,"[[description]]":b.description});this.pf.precision=d;-1!=a.indexOf("[[")&&(a=
k.formatDataContextValue(a,b.dataContext));a=c?k.fixNewLines(a):k.fixBrakes(a);return a=k.cleanFromEmpty(a)},startSlices:function(){var a;for(a=0;a<this.chartData.length;a++)0<this.startDuration&&this.sequencedAnimation?this.setStartTO(a):this.startSlice(this.chartData[a])},setStartTO:function(a){var b=this;a=setTimeout(function(){b.startSequenced.call(b)},b.startDuration/b.chartData.length*500*a);b.timeOuts.push(a)},pullSlices:function(a){var b=this.chartData,c;for(c=0;c<b.length;c++){var d=b[c];
d.pulled&&this.pullSlice(d,1,a)}},startSequenced:function(){var a=this.chartData,b;for(b=0;b<a.length;b++)if(!a[b].started){this.startSlice(this.chartData[b]);break}},startSlice:function(a){a.started=!0;var b=a.wedge,c=this.startDuration,d=a.labelSet;b&&0<c&&(0<a.alpha&&b.show(),b.translate(a.startX,a.startY),this.animatable.push(b),b.animate({opacity:1,translate:"0,0"},c,this.startEffect));d&&0<c&&(0<a.alpha&&d.show(),d.translate(a.startX,a.startY),d.animate({opacity:1,translate:"0,0"},c,this.startEffect))},
showLabels:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b];if(0<c.alpha){var d=c.label;d&&d.show();(c=c.tick)&&c.show()}}},showSlice:function(a){isNaN(a)?a.hidden=!1:this.chartData[a].hidden=!1;this.invalidateVisibility()},hideSlice:function(a){isNaN(a)?a.hidden=!0:this.chartData[a].hidden=!0;this.hideBalloon();this.invalidateVisibility()},rollOverSlice:function(a,b,c){isNaN(a)||(a=this.chartData[a]);clearTimeout(this.hoverInt);if(!a.hidden){this.pullOnHover&&this.pullSlice(a,
1);1>this.hoverAlpha&&a.wedge&&a.wedge.attr({opacity:this.hoverAlpha});var d=a.balloonX,g=a.balloonY;a.pulled&&(d+=a.pullX,g+=a.pullY);var f=this.formatString(this.balloonText,a,!0),h=this.balloonFunction;h&&(f=h(a,f));h=k.adjustLuminosity(a.color,-.15);f?this.showBalloon(f,h,b,d,g):this.hideBalloon();0===a.value&&this.hideBalloon();this.fire({type:"rollOverSlice",dataItem:a,chart:this,event:c})}},rollOutSlice:function(a,b){isNaN(a)||(a=this.chartData[a]);a.wedge&&a.wedge.attr({opacity:1});this.hideBalloon();
this.fire({type:"rollOutSlice",dataItem:a,chart:this,event:b})},clickSlice:function(a,b,c){isNaN(a)||(a=this.chartData[a]);a.pulled?this.pullSlice(a,0):this.pullSlice(a,1);k.getURL(a.url,this.urlTarget);c||this.fire({type:"clickSlice",dataItem:a,chart:this,event:b})},handleRightClick:function(a,b){isNaN(a)||(a=this.chartData[a]);this.fire({type:"rightClickSlice",dataItem:a,chart:this,event:b})},drawTicks:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b];if(c.label&&!c.skipTick){var d=
c.ty,d=k.line(this.container,[c.tx0,c.tx,c.tx2],[c.ty0,d,d],this.labelTickColor,this.labelTickAlpha);k.setCN(this,d,this.type+"-tick");k.setCN(this,d,c.className,!0);c.tick=d;c.wedge.push(d)}}},initialStart:function(){var a=this,b=a.startDuration,c=setTimeout(function(){a.showLabels.call(a)},1E3*b);a.timeOuts.push(c);a.chartCreated?a.pullSlices(!0):(a.startSlices(),0<b?(b=setTimeout(function(){a.pullSlices.call(a)},1200*b),a.timeOuts.push(b)):a.pullSlices(!0))},pullSlice:function(a,b,c){var d=this.pullOutDuration;
!0===c&&(d=0);if(c=a.wedge)0<d?(c.animate({translate:b*a.pullX+","+b*a.pullY},d,this.pullOutEffect),a.labelSet&&a.labelSet.animate({translate:b*a.pullX+","+b*a.pullY},d,this.pullOutEffect)):(a.labelSet&&a.labelSet.translate(b*a.pullX,b*a.pullY),c.translate(b*a.pullX,b*a.pullY));1==b?(a.pulled=!0,this.pullOutOnlyOne&&this.pullInAll(a.index),a={type:"pullOutSlice",dataItem:a,chart:this}):(a.pulled=!1,a={type:"pullInSlice",dataItem:a,chart:this});this.fire(a)},pullInAll:function(a){var b=this.chartData,
c;for(c=0;c<this.chartData.length;c++)c!=a&&b[c].pulled&&this.pullSlice(b[c],0)},pullOutAll:function(){var a=this.chartData,b;for(b=0;b<a.length;b++)a[b].pulled||this.pullSlice(a[b],1)},parseData:function(){var a=[];this.chartData=a;var b=this.dataProvider;isNaN(this.pieAlpha)||(this.alpha=this.pieAlpha);if(void 0!==b){var c=b.length,d=0,g,f,h;for(g=0;g<c;g++){f={};var e=b[g];f.dataContext=e;null!==e[this.valueField]&&(f.value=Number(e[this.valueField]));(h=e[this.titleField])||(h="");f.title=h;f.pulled=
k.toBoolean(e[this.pulledField],!1);(h=e[this.descriptionField])||(h="");f.description=h;f.labelRadius=Number(e[this.labelRadiusField]);f.switchable=!0;f.className=e[this.classNameField];f.url=e[this.urlField];h=e[this.patternField];!h&&this.patterns&&(h=this.patterns[g]);f.pattern=h;f.visibleInLegend=k.toBoolean(e[this.visibleInLegendField],!0);h=e[this.alphaField];f.alpha=void 0!==h?Number(h):this.alpha;h=e[this.colorField];void 0!==h&&(f.color=h);f.labelColor=k.toColor(e[this.labelColorField]);
d+=f.value;f.hidden=!1;a[g]=f}for(g=b=0;g<c;g++)f=a[g],f.percents=f.value/d*100,f.percents<this.groupPercent&&b++;1<b&&(this.groupValue=0,this.removeSmallSlices(),a.push({title:this.groupedTitle,value:this.groupValue,percents:this.groupValue/d*100,pulled:this.groupedPulled,color:this.groupedColor,url:this.groupedUrl,description:this.groupedDescription,alpha:this.groupedAlpha,pattern:this.groupedPattern,className:this.groupedClassName,dataContext:{}}));c=this.baseColor;c||(c=this.pieBaseColor);d=this.brightnessStep;
d||(d=this.pieBrightnessStep);for(g=0;g<a.length;g++)c?h=k.adjustLuminosity(c,g*d/100):(h=this.colors[g],void 0===h&&(h=k.randomColor())),void 0===a[g].color&&(a[g].color=h);this.recalculatePercents()}},recalculatePercents:function(){var a=this.chartData,b=0,c,d;for(c=0;c<a.length;c++)d=a[c],!d.hidden&&0<d.value&&(b+=d.value);for(c=0;c<a.length;c++)d=this.chartData[c],d.percents=!d.hidden&&0<d.value?100*d.value/b:0},removeSmallSlices:function(){var a=this.chartData,b;for(b=a.length-1;0<=b;b--)a[b].percents<
this.groupPercent&&(this.groupValue+=a[b].value,a.splice(b,1))},animateAgain:function(){var a=this;a.startSlices();for(var b=0;b<a.chartData.length;b++){var c=a.chartData[b];c.started=!1;var d=c.wedge;d&&(d.setAttr("opacity",a.startAlpha),d.translate(c.startX,c.startY));if(d=c.labelSet)d.setAttr("opacity",a.startAlpha),d.translate(c.startX,c.startY)}b=a.startDuration;0<b?(b=setTimeout(function(){a.pullSlices.call(a)},1200*b),a.timeOuts.push(b)):a.pullSlices()},measureMaxLabel:function(){var a=this.chartData,
b=0,c;for(c=0;c<a.length;c++){var d=a[c],g=this.formatString(this.labelText,d),f=this.labelFunction;f&&(g=f(d,g));d=k.text(this.container,g,this.color,this.fontFamily,this.fontSize);g=d.getBBox().width;g>b&&(b=g);d.remove()}return b}})})();(function(){var k=window.AmCharts;k.AmPieChart=k.Class({inherits:k.AmSlicedChart,construct:function(a){this.type="pie";k.AmPieChart.base.construct.call(this,a);this.cname="AmPieChart";this.pieBrightnessStep=30;this.minRadius=10;this.depth3D=0;this.startAngle=90;this.angle=this.innerRadius=0;this.startRadius="500%";this.pullOutRadius="20%";this.labelRadius=20;this.labelText="[[title]]: [[percents]]%";this.balloonText="[[title]]: [[percents]]% ([[value]])\n[[description]]";this.previousScale=1;this.adjustPrecision=
!1;this.gradientType="radial";k.applyTheme(this,a,this.cname)},drawChart:function(){k.AmPieChart.base.drawChart.call(this);var a=this.chartData;if(k.ifArray(a)){if(0<this.realWidth&&0<this.realHeight){k.VML&&(this.startAlpha=1);var b=this.startDuration,c=this.container,d=this.updateWidth();this.realWidth=d;var g=this.updateHeight();this.realHeight=g;var f=k.toCoordinate,h=f(this.marginLeft,d),e=f(this.marginRight,d),z=f(this.marginTop,g)+this.getTitleHeight(),n=f(this.marginBottom,g),A,B,l,x=k.toNumber(this.labelRadius),
p=this.measureMaxLabel();p>this.maxLabelWidth&&(p=this.maxLabelWidth);this.labelText&&this.labelsEnabled||(x=p=0);A=void 0===this.pieX?(d-h-e)/2+h:f(this.pieX,this.realWidth);B=void 0===this.pieY?(g-z-n)/2+z:f(this.pieY,g);l=f(this.radius,d,g);l||(d=0<=x?d-h-e-2*p:d-h-e,g=g-z-n,l=Math.min(d,g),g<d&&(l/=1-this.angle/90,l>d&&(l=d)),g=k.toCoordinate(this.pullOutRadius,l),l=(0<=x?l-1.8*(x+g):l-1.8*g)/2);l<this.minRadius&&(l=this.minRadius);g=f(this.pullOutRadius,l);z=k.toCoordinate(this.startRadius,l);
f=f(this.innerRadius,l);f>=l&&(f=l-1);n=k.fitToBounds(this.startAngle,0,360);0<this.depth3D&&(n=270<=n?270:90);n-=90;360<n&&(n-=360);d=l-l*this.angle/90;for(h=p=0;h<a.length;h++)e=a[h],!0!==e.hidden&&(p+=k.roundTo(e.percents,this.pf.precision));p=k.roundTo(p,this.pf.precision);this.tempPrec=NaN;this.adjustPrecision&&100!=p&&(this.tempPrec=this.pf.precision+1);for(var D,h=0;h<a.length;h++)if(e=a[h],!0!==e.hidden&&(this.showZeroSlices||0!==e.percents)){var r=360*e.percents/100,p=Math.sin((n+r/2)/180*
Math.PI),C=d/l*-Math.cos((n+r/2)/180*Math.PI),q=this.outlineColor;q||(q=e.color);var v=this.alpha;isNaN(e.alpha)||(v=e.alpha);q={fill:e.color,stroke:q,"stroke-width":this.outlineThickness,"stroke-opacity":this.outlineAlpha,"fill-opacity":v};e.url&&(q.cursor="pointer");q=k.wedge(c,A,B,n,r,l,d,f,this.depth3D,q,this.gradientRatio,e.pattern,this.path,this.gradientType);k.setCN(this,q,"pie-item");k.setCN(this,q.wedge,"pie-slice");k.setCN(this,q,e.className,!0);this.addEventListeners(q,e);e.startAngle=
n;a[h].wedge=q;0<b&&(this.chartCreated||q.setAttr("opacity",this.startAlpha));e.ix=p;e.iy=C;e.wedge=q;e.index=h;e.label=null;v=c.set();if(this.labelsEnabled&&this.labelText&&e.percents>=this.hideLabelsPercent){var m=n+r/2;0>m&&(m+=360);360<m&&(m-=360);var t=x;isNaN(e.labelRadius)||(t=e.labelRadius,0>t&&(e.skipTick=!0));var r=A+p*(l+t),E=B+C*(l+t),w,u=0;isNaN(D)&&350<m&&1<a.length-h&&(D=h-1+Math.floor((a.length-h)/2));if(0<=t){var y;90>=m&&0<=m?(y=0,w="start",u=8):90<=m&&180>m?(y=1,w="start",u=8):
180<=m&&270>m?(y=2,w="end",u=-8):270<=m&&354>=m?(y=3,w="end",u=-8):354<=m&&(h>D?(y=0,w="start",u=8):(y=3,w="end",u=-8));e.labelQuarter=y}else w="middle";m=this.formatString(this.labelText,e);(t=this.labelFunction)&&(m=t(e,m));t=e.labelColor;t||(t=this.color);""!==m&&(m=k.wrappedText(c,m,t,this.fontFamily,this.fontSize,w,!1,this.maxLabelWidth),k.setCN(this,m,"pie-label"),k.setCN(this,m,e.className,!0),m.translate(r+1.5*u,E),m.node.style.pointerEvents="none",e.ty=E,e.textX=r+1.5*u,v.push(m),this.axesSet.push(v),
e.labelSet=v,e.label=m);e.tx=r;e.tx2=r+u;e.tx0=A+p*l;e.ty0=B+C*l}r=f+(l-f)/2;e.pulled&&(r+=this.pullOutRadiusReal);e.balloonX=p*r+A;e.balloonY=C*r+B;e.startX=Math.round(p*z);e.startY=Math.round(C*z);e.pullX=Math.round(p*g);e.pullY=Math.round(C*g);this.graphsSet.push(q);if(0===e.alpha||0<b&&!this.chartCreated)q.hide(),v&&v.hide();n+=360*e.percents/100;360<n&&(n-=360)}0<x&&this.arrangeLabels();this.pieXReal=A;this.pieYReal=B;this.radiusReal=l;this.innerRadiusReal=f;0<x&&this.drawTicks();this.initialStart();
this.setDepths()}(a=this.legend)&&a.invalidateSize()}else this.cleanChart();this.dispDUpd()},setDepths:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b],d=c.wedge,c=c.startAngle;0<=c&&180>c?d.toFront():180<=c&&d.toBack()}},arrangeLabels:function(){var a=this.chartData,b=a.length,c,d;for(d=b-1;0<=d;d--)c=a[d],0!==c.labelQuarter||c.hidden||this.checkOverlapping(d,c,0,!0,0);for(d=0;d<b;d++)c=a[d],1!=c.labelQuarter||c.hidden||this.checkOverlapping(d,c,1,!1,0);for(d=b-1;0<=d;d--)c=a[d],
2!=c.labelQuarter||c.hidden||this.checkOverlapping(d,c,2,!0,0);for(d=0;d<b;d++)c=a[d],3!=c.labelQuarter||c.hidden||this.checkOverlapping(d,c,3,!1,0)},checkOverlapping:function(a,b,c,d,g){var f,h,e=this.chartData,k=e.length,n=b.label;if(n){if(!0===d)for(h=a+1;h<k;h++)e[h].labelQuarter==c&&(f=this.checkOverlappingReal(b,e[h],c))&&(h=k);else for(h=a-1;0<=h;h--)e[h].labelQuarter==c&&(f=this.checkOverlappingReal(b,e[h],c))&&(h=0);!0===f&&100>g&&isNaN(b.labelRadius)&&(f=b.ty+3*b.iy,b.ty=f,n.translate(b.textX,
f),this.checkOverlapping(a,b,c,d,g+1))}},checkOverlappingReal:function(a,b,c){var d=!1,g=a.label,f=b.label;a.labelQuarter!=c||a.hidden||b.hidden||!f||(g=g.getBBox(),c={},c.width=g.width,c.height=g.height,c.y=a.ty,c.x=a.tx,a=f.getBBox(),f={},f.width=a.width,f.height=a.height,f.y=b.ty,f.x=b.tx,k.hitTest(c,f)&&(d=!0));return d}})})();
define("amcharts.pie", ["amcharts"], (function (global) {
    return function () {
        var ret, fn;
       fn = function () {
                        AmCharts.isReady = true;
                    };
        ret = fn.apply(global, arguments);
        return ret || global.AmCharts;
    };
}(this)));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Pie',["d3", "../common/HTMLWidget", "amcharts.pie", "../api/I2DChart", "require"], factory);
    } else {
        root.amchart_Pie = factory(root.d3, root.common_HTMLWidget, root.AmCharts, root.api_I2DChart, root.require);
    }
}(this, function(d3, HTMLWidget, AmCharts, I2DChart, require) {
    function Pie() {
        HTMLWidget.call(this);
        this._tag = "div";
        this._chart = {};

        this._selected = null;
        this._selections = [];

        this._dataUpdated = 0;
        this._prevDataUpdated = -1;
        this._columnsUpdated = 0;
        this._prevColumnsUpdated = -1;
    }
    Pie.prototype = Object.create(HTMLWidget.prototype);
    Pie.prototype.constructor = Pie;
    Pie.prototype._class += " amchart_Pie";
    Pie.prototype.implements(I2DChart.prototype);

    Pie.prototype.publish("paletteID", "default", "set", "Palette ID", Pie.prototype._palette.switch(), {tags:["Basic","Shared"]});
    Pie.prototype.publish("fontSize", 11, "number", "Font Size",null,{tags:["Basic","Shared"]});
    Pie.prototype.publish("fontFamily", "Verdana", "string", "Font Name",null,{tags:["Basic","Shared","Shared"]});
    Pie.prototype.publish("fontColor", "#000000", "html-color", "Font Color",null,{tags:["Basic","Shared"]});

    Pie.prototype.publish("Depth3D", 0, "number", "3D Depth (px)",null,{tags:["Basic"]});
    Pie.prototype.publish("Angle3D", 0, "number", "3D Angle (Deg)",null,{tags:["Basic"]});

    Pie.prototype.publish("marginLeft", 0, "number", "Margin (Left)",null,{tags:["Intermediate"]});
    Pie.prototype.publish("marginRight", 0, "number", "Margin (Right)",null,{tags:["Intermediate"]});
    Pie.prototype.publish("marginTop", 0, "number", "Margin (Top)",null,{tags:["Intermediate"]});
    Pie.prototype.publish("marginBottom", 0, "number", "Margin (Bottom)",null,{tags:["Intermediate"]});

    Pie.prototype.publish("reverseDataSorting", false, "boolean", "Reverse Data Sorting",null,{tags:["Intermediate"]});

    Pie.prototype.publish("holePercent", 0, "number", "Hole Size (Percent)",null,{tags:["Basic"]});

    Pie.prototype.publish("radius", null, "number", "Radius",null,{tags:["Basic"]});
    Pie.prototype.publish("pieAlpha", [], "array", "Individual Alpha per Slice",null,{tags:["Private"]});

    Pie.prototype.publish("labelPosition", "outside", "set", "Label Position", ["inside","outside"],{tags:["Intermediate"]});

    Pie.prototype.publish("useClonedPalette", false, "boolean", "Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]});
    Pie.prototype.publish("selectionMode", "simple", "set", "Selection Mode", ["simple", "multi"], { tags: ["Intermediate"] });
    Pie.prototype.publish("selectionColor", "#f00", "html-color", "Font Color",null,{tags:["Basic"]});

    Pie.prototype.calcRadius = function (_) {
        return Math.min(this._size.width, this._size.height) / 2 - 2;
    };

    Pie.prototype.updateChartOptions = function() {
        this._chart.type = "pie";
        
        this._chart.labelsEnabled = true;
        if (this.labelPosition()==="inside") {
            this._chart.radius = "50%";
            this._chart.labelRadius = -40;
            this._chart.pullOutRadius = "20%";
        } else {
            this._chart.radius = this.calcRadius();
            this._chart.labelRadius = 20;
            this._chart.pullOutRadius = "20%";
        }

        this._chart.labelFunction = function(d) {
            return d.title;
        };

        this._chart.marginRight = this.marginRight();
        this._chart.marginLeft = this.marginLeft();
        this._chart.marginTop = this.marginTop();
        this._chart.marginBottom = this.marginBottom();

        this._chart.depth3D = this.Depth3D();
        this._chart.angle = this.Angle3D();
        this._chart.innerRadius = this.holePercent()+"%";
        this._chart.fontFamily = this.fontFamily();
        this._chart.fontSize = this.fontSize();
        this._chart.fontSize = this.fontSize();
        this._chart.color = this.fontColor();

        this._chart.titleField = this.columns()[0];
        this._chart.valueField = this.columns()[1];

        var sortingMethod;
        if(this.reverseDataSorting()){
            sortingMethod = function(a,b){ return a[1] < b[1] ? 1 : -1; };
        } else {
            sortingMethod = function(a,b){ return a[1] > b[1] ? 1 : -1; };
        }
        this.data().sort(sortingMethod);

        this._chart.colorField = "sliceColor";

        if (this._dataUpdated > this._prevDataUpdated || this._columnsUpdated > this._prevColumnsUpdated) {
            this._chart.dataProvider = this.formatData(this.data());
        }
        this._prevDataUpdated = this._dataUpdated;
        this._prevColumnsUpdated = this._columnsUpdated;

        this._chart.colors = this.data().map(function (row) {
            return this._palette(row[0]);
        }, this);
        this._chart.pullOutOnlyOne = this.selectionMode() === "simple";

        this.pieAlpha().forEach(function(d,i) {
            if (typeof(this._chart.chartData[i])==="undefined") {
                this._chart.chartData[i] = {};
            }
            this._chart.chartData[i].alpha = d;
        },this);

        return this._chart;
    };

    Pie.prototype.formatData = function(dataArr){
        var dataObjArr = [];
        var context = this;
        dataArr.forEach(function(dataRow){
            var dataObj = {};
            context.columns().forEach(function(colName,cIdx){
                dataObj[colName] = dataRow[cIdx];
            });
            dataObjArr.push(dataObj);
        });
        return dataObjArr;
    };

    Pie.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        var context = this;
        var initObj = {
            type: "pie",
            addClassNames: true,
            theme: "none"
        };
        if (typeof define === "function" && define.amd) {
            initObj.pathToImages = require.toUrl("amchartsImg");
        }
        this._chart = AmCharts.makeChart(domNode, initObj);
        this._chart.addListener("clickSlice", function(e) {
            var field = e.chart.colorField;
            var data = e.dataItem.dataContext;

            if (data[field] !== null && data[field] !== undefined) {
                delete data[field];
                if (context.selectionMode() === "simple") {
                    if (context._selected !== null) {
                        delete context._selected.data[context._selected.field];
                    }
                    context._selected = null;
                }
            } else {
                data[field] = context.selectionColor();
                if (context.selectionMode() === "simple") {
                    if (context._selected !== null) {
                        delete context._selected.data[context._selected.field];
                    }
                    context._selected = {
                        field: field,
                        data: data,
                        cIdx: 1,
                        dIdx: e.dataItem.index
                    };
                    context._selections.push(context._selected);
                }
            }

            e.chart.validateData();

            context.click(context.rowToObj(context.data()[e.dataItem.index]), context.columns()[1], context._selected !== null);
        });
    };

    Pie.prototype.update = function(domNode, element) {
        this._palette = this._palette.switch(this.paletteID());
        if (this.useClonedPalette()) {
            this._palette = this._palette.cloneNotExists(this.paletteID() + "_" + this.id());
        }

        domNode.style.width = this.size().width + "px";
        domNode.style.height = this.size().height + "px";

        this.updateChartOptions();

        this._chart.validateNow();
        this._chart.validateData();
    };

    Pie.prototype.render = function(callback) {
        return HTMLWidget.prototype.render.apply(this, arguments);
   };

    Pie.prototype.postUpdate = function (domNode, element) {
        var context = this;

        var containerBoundingClientRect = context._element.select("svg").node().getBoundingClientRect(); // might need to change this selection (could get a bit more accurate results?)
        this.d3LabelSelection = element.selectAll(".amcharts-pie-label");

        var left = [];
        var right = [];
        var top = [];
        var bottom = [];

        this.d3LabelSelection.each(function(d, i) {
            var boundingRect = d3.select(this).node().getBoundingClientRect();

            var labelTopPos = boundingRect.top;
            if (labelTopPos < containerBoundingClientRect.top) {
                top.push(labelTopPos - containerBoundingClientRect.top);
            }

            var labelBottomPos = boundingRect.bottom;
            if (labelBottomPos > containerBoundingClientRect.bottom) {
                bottom.push(containerBoundingClientRect.bottom - labelTopPos);

            }
            
            var labelRightPos = boundingRect.right; 
            if (labelRightPos > containerBoundingClientRect.right) {
                right.push(containerBoundingClientRect.right - labelRightPos);
            }

            var labelLeftPos = boundingRect.left;
            if (labelLeftPos < containerBoundingClientRect.left) {
                left.push(labelLeftPos - containerBoundingClientRect.left);
            }
        });

        var topOffset = top.length ? d3.min(top) : 0;
        var bottomOffset = bottom.length ? d3.min(bottom) : 0;
        var rightOffset = right.length ? d3.min(right) : 0;
        var leftOffset = left.length ? d3.min(left) : 0;

        var smallerOffset = 0;

        if (topOffset < 0){
            smallerOffset += topOffset;
        }
        if (bottomOffset < 0){
            smallerOffset += bottomOffset;
        }
        if (rightOffset < 0){
            smallerOffset += rightOffset;
        }
        if (leftOffset < 0){
            smallerOffset += leftOffset;
        }

        if (this.calcRadius() + smallerOffset - 20 < this.calcRadius()) {
            this._chart.radius = this.calcRadius() + smallerOffset - 20; // 20 for the label line lengths
            this._chart.validateNow();
        }
    };

    Pie.prototype.data = function(_) {
        if (arguments.length) {
            this._dataUpdated++;
        }
        return HTMLWidget.prototype.data.apply(this, arguments);
    };

    Pie.prototype.columns = function(_) {
        if (arguments.length) {
            this._columnsUpdated++;
        }
        return HTMLWidget.prototype.columns.apply(this, arguments);
    };

    return Pie;
}));

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Polar',["d3", "./CommonRadar", "amcharts.radar", "../api/INDChart"], factory);
    } else {
        root.amchart_Polar = factory(root.d3, root.amchart_CommonRadar, root.amcharts, root.api_INDChart);
    }
}(this, function(d3, CommonRadar, AmCharts, INDChart) {
    function Polar() {
        CommonRadar.call(this);
        this._tag = "div";
        this._gType = "column";
    }
    Polar.prototype = Object.create(CommonRadar.prototype);
    Polar.prototype.constructor = Polar;
    Polar.prototype._class += " amchart_Polar";
    Polar.prototype.implements(INDChart.prototype);

    Polar.prototype.publish("paletteID", "default", "set", "Palette ID", Polar.prototype._palette.switch(), {tags:["Basic","Shared"]});

    Polar.prototype.enter = function(domNode, element) {
        CommonRadar.prototype.enter.apply(this, arguments);
    };

    Polar.prototype.updateChartOptions = function() {
        CommonRadar.prototype.updateChartOptions.apply(this, arguments);

        this.buildGraphs(this._gType);

        return this._chart;
    };

    Polar.prototype.buildGraphs = function(gType) {
        this._chart.graphs = [];

        for (var i = 0; i < this.columns().length - 1; i++) {
            var gRetVal = CommonRadar.prototype.buildGraphObj.call(this, gType, i);
            var gObj = buildGraphObj.call(this, gRetVal, this._valueField[i], i);

            this._chart.addGraph(gObj);
        }

        function buildGraphObj(gObj,valueField) {
            gObj.valueField = valueField;
            return gObj;
        }
    };

    Polar.prototype.update = function(domNode, element) {
        CommonRadar.prototype.update.apply(this, arguments);
        this.updateChartOptions();

        this._chart.validateNow();
        this._chart.validateData();
    };

    return Polar;
}));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Pyramid',["d3", "./CommonFunnel", "amcharts.funnel", "../api/I2DChart"], factory);
    } else {
        root.amchart_Pyramid = factory(root.d3, root.amchart_CommonFunnel, root.amcharts, root.api_I2DChart);
    }
}(this, function(d3, CommonFunnel, AmCharts, I2DChart) {
    function Pyramid() {
        CommonFunnel.call(this);
        this._tag = "div";
    }

    Pyramid.prototype = Object.create(CommonFunnel.prototype);
    Pyramid.prototype.constructor = Pyramid;
    Pyramid.prototype._class += " amchart_Pyramid";
    Pyramid.prototype.implements(I2DChart.prototype);

    Pyramid.prototype.publish("paletteID", "default", "set", "Palette ID", Pyramid.prototype._palette.switch(), {tags:["Basic","Shared"]});

    Pyramid.prototype.enter = function(domNode, element) {
        CommonFunnel.prototype.enter.apply(this, arguments);
    };

    Pyramid.prototype.updateChartOptions = function() {
        CommonFunnel.prototype.updateChartOptions.apply(this, arguments);
    };

    Pyramid.prototype.update = function(domNode, element) {
        CommonFunnel.prototype.update.apply(this, arguments);
    };

    return Pyramid;
}));


(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/amchart/Scatter',["d3", "./CommonXY", "amcharts.xy", "../api/INDChart"], factory);
    } else {
        root.amchart_Scatter = factory(root.d3, root.amchart_CommonXY, root.amcharts, root.api_INDChart);
    }
}(this, function(d3, CommonXY, AmCharts, INDChart) {
    function Scatter() {
        CommonXY.call(this);
        this._tag = "div";

        this._type = "Scatter";
        this._gType = "column";
    }
    Scatter.prototype = Object.create(CommonXY.prototype);
    Scatter.prototype.constructor = Scatter;
    Scatter.prototype._class += " amchart_Scatter";
    Scatter.prototype.implements(INDChart.prototype);

    Scatter.prototype.publish("paletteID", "default", "set", "Palette ID", Scatter.prototype._palette.switch(), {tags:["Basic","Shared"]});

    Scatter.prototype.publish("scatterType", "scatter", "set", "Bullet Type", ["scatter", "bubble"],{tags:["Basic"]});

    Scatter.prototype.enter = function(domNode, element) {
        CommonXY.prototype.enter.apply(this, arguments);
    };

    Scatter.prototype.updateChartOptions = function() {
        CommonXY.prototype.updateChartOptions.apply(this, arguments);

        this.buildGraphs(this._gType);

        return this._chart;
    };

    Scatter.prototype.buildGraphs = function(gType) {
        this._chart.graphs = [];

        for (var i = 0; i < this.columns().length; i++) {
            var gRetVal = CommonXY.prototype.buildGraphObj.call(this, gType, i);
            var gObj = buildGraphObj.call(this, gRetVal, i);

            this._chart.addGraph(gObj);
        }

        function buildGraphObj(gObj) {
            if (this.scatterType() === "bubble") {
                gObj["valueField"] = this.columns()[2];
            } else {
                delete gObj["valueField"];
            }
            return gObj;
        }
    };

    Scatter.prototype.update = function(domNode, element) {
        CommonXY.prototype.update.apply(this, arguments);

        this.updateChartOptions();

        this._chart.validateNow();
        this._chart.validateData();

    };

    return Scatter;
}));

define("hpcc-viz-amchart", function(){});
