(()=>{"use strict";fetch("http://api.openweathermap.org/data/2.5/forecast?q=london&appid=d096eb4766151c74dfd165b926c9914b&units=metric",{mode:"cors"}).then((function(t){return t.json()})).then((function(e){!function(e){const o=[];console.log(e),console.log("temp:",e.list[0].main.temp),console.log("code:",e.list[0].weather[0].id),console.log("wind:",e.list[0].wind.speed);for(let i=0;i<e.list.length;i++)if("12:00:00"===e.list[i].dt_txt.split(" ")[1]||0===i){const s=new t("london",e.list[i].dt_txt.split(" ")[1],e.list[i].dt_txt.split(" ")[0],e.list[i].main.temp,e.list[i].weather[0].id,e.list[i].pop,e.list[i].wind.speed,e.list[i].wind.deg);o.push(s)}console.log(o)}(e)})).catch((function(t){console.log("Error"),console.error(t)}));class t{constructor(t,e,o,i,s,n,l,c){this.location=t,this.time=e,this.date=o,this.temperature=i,this.weatherCode=s,this.probOfPrecip=n,this.windSpeed=l,this.windDeg=c}}})();