!function(t){var e={};function r(u){if(e[u])return e[u].exports;var i=e[u]={i:u,l:!1,exports:{}};return t[u].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,u){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:u})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var u=Object.create(null);if(r.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(u,i,function(e){return t[e]}.bind(null,i));return u},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){const u=r(1),i=new Vue({el:"#js-result",data:{results:[]},computed:{bingoResults:function(){return this.results.length%31==0&&$(".result:last-child").after('<div style="display:table-row"></div>'),this.results}}}),s=new Vue({el:"#js-open",data:{bingoNumber:""},methods:{play:function(){u.audioPlay($("#audio")[0]),u.shuffle({coreObj:this,coreDataKey:"bingoNumber",resultObj:i,resultDataKye:"results"})}}});$(document).on("click keydown touchstart","body",function(){s.play()})},function(t,e){t.exports=new class{constructor(t){this.max=t,this.isShuffle=!1,this.isAudioPlay=!1,this.numbers=[];for(let e=1;e<=t;e++)this.numbers.push(e)}audioPlay(t){this.isAudioPlay||(this.audioObj=t,t.play(),this.isAudioPlay=!0)}audioStop(){0!=this.isAudioPlay&&(this.audioObj.pause(),this.audioObj.currentTime=0,this.isAudioPlay=!1)}shuffle(t){if(this.isShuffle)return;this.isShuffle=!0;let e=this.numbers.length;if(0==e)return void this.audioStop();let r=0,u=setInterval(()=>{let i=Math.floor(Math.random()*e);t.coreObj[t.coreDataKey]=this.numbers[i],r>=20&&(clearInterval(u),t.resultObj[t.resultDataKye].push({text:this.numbers[i]}),this.numbers.splice(i,1),this.isShuffle=!1),r++,t.jestCallback&&t.jestCallback()},100);return u}}(75)}]);