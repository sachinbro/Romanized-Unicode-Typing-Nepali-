(function(t){function e(e){for(var n,s,o=e[0],u=e[1],c=e[2],l=0,p=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);h&&h(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var u=i[o];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var h=u;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},2336:function(t,e,i){"use strict";i("eb84")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),r=Object(n["d"])("h1",null," Romanized Unicode Typing(Nepali)",-1),a=["disabled"];function s(t,e,i,s,o,u){var c=Object(n["g"])("Main"),h=Object(n["g"])("TheTime"),l=Object(n["g"])("TypingField");return Object(n["f"])(),Object(n["c"])(n["a"],null,[r,Object(n["e"])(c,{onParagraph:u.paragraphSelect,ref:"main"},null,8,["onParagraph"]),Object(n["e"])(h,{isPlaying:o.isPlaying,gameFinished:o.gameFinished,onCurrentTime:u.updateTime,onTimeup:u.gameOver,isNewGame:o.isNewGame,ref:"time"},null,8,["isPlaying","gameFinished","onCurrentTime","onTimeup","isNewGame"]),Object(n["e"])(l,{isPlaying:o.isPlaying,autoFocus:o.autoFocus,currentTime:o.currentTime,onGameOver:u.gameOver,isNewGame:o.isNewGame,ref:"typingfield"},null,8,["isPlaying","autoFocus","currentTime","onGameOver","isNewGame"]),Object(n["d"])("button",{onClick:e[0]||(e[0]=function(){return u.play&&u.play.apply(u,arguments)}),disabled:!1}," Play"),Object(n["d"])("button",{onClick:e[1]||(e[1]=function(){return u.loadNewGame&&u.loadNewGame.apply(u,arguments)}),disabled:!o.newButton}," New Game",8,a)],64)}function o(t,e,i,r,a,s){return Object(n["f"])(),Object(n["c"])("p",null,Object(n["h"])(a.paragraphObject[a.randomValue].text),1)}var u={emits:["paragraph"],data:function(){return{randomValue:0,paragraphObject:[{author:"लक्ष्मीप्रसाद देवकोटा",article:"भिखारी ",text:"हेर भिखारी अडि अडि आयो करुण दृष्टिले नजर उठायो । गाढा दुखको मौन प्रकाश । झिना आशा-तार बजायो घाम उज्यालो आँगन पास । एक बिन्दुमा गोल खसायो जीवनको इतिहास । ",difficulty:"medium"},{author:"भानुभक्त आचार्य",article:"घाँसी",text:"भर् जन्म घाँस तिर मन् दिई धन कमायो। नाम क्यै रहोस् प छि भनेर कुवा खनायो। घाँसी दरिद्र घरको तर बुद्धि कस्तो। म भानुभक्त धनी भैकन किन यस्तो । ",difficulty:"medium"},{author:"लक्ष्मीप्रसाद देवकोटा",article:"मुना मदन",text:"क्षेत्रीको छोरो यो पाउ छुन्छ, घिनले छुदैन मानिस ठूलो दिलले हुन्छ, जातले हुदैन। ",difficulty:"easy"},{author:"लक्ष्मीप्रसाद देवकोटा",article:"मुना मदन",text:"हातका मैला सुनका थैला के गर्नु धनले साग र सिस्नु खाएको बेस आनन्दी मनले। ",difficulty:"easy"},{author:"भैरव अर्याल",article:"जय भुडि",text:"दोस्रो छ- घ्याम्पे भुडी । जो हाँडीघोप्टे भुँडीभन्दा अलि सानो भए पनि स्वभावमा भने प्रायः उस्तैउस्तै हुन्छ । तेस्रो हो-टाकनटुकन भुँडी । जसलाई नैवेद्य जुटाउन सत्रतिर दाह्रा ङिच्च्याई टाकनटुकन नगरी हुँदैन ",difficulty:"medium"},{author:"भैरव अर्याल",article:"जय भुडि",text:" हेरिल्याएको खण्डमा कृष्ण हुन् कि क्राइष्ट हुन्, बुद्ध हुन् कि कन्फ्युसियस हुन् सबै देवात्माहरु भुँडीबाट मर्त्यलोकमा अवरोहण गरेका हुन् । महर्षि हुन् कि मार्क्स हुन्, सन्त हुन् कि सार्त्र हुन्, सबै दार्शनिकहरु भुँडीमै निर्मित भएर देखा परेका हुन् ",difficulty:"hard"}]}},mounted:function(){this.randomValue=Math.floor(Math.random()*this.paragraphObject.length),this.$emit("paragraph",this.paragraphObject[this.randomValue].text)},methods:{random:function(){this.randomValue=Math.floor(Math.random()*this.paragraphObject.length),this.$emit("paragraph",this.paragraphObject[this.randomValue].text)}}},c=i("6b0d"),h=i.n(c);const l=h()(u,[["render",o]]);var p=l,d=["disabled"],m=Object(n["d"])("br",null,null,-1);function f(t,e,i,r,a,s){return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["d"])("input",{type:"text",placeholder:"type here",onKeypress:e[0]||(e[0]=function(){return s.romanTyping&&s.romanTyping.apply(s,arguments)}),ref:"input",disabled:!i.isPlaying},null,40,d),Object(n["d"])("p",null," Correct word:"+Object(n["h"])(a.score),1),Object(n["d"])("span",null," Speed: "+Object(n["h"])(a.speed)+" WPM",1),m],64)}i("ac1f"),i("1276");var g={props:["isPlaying","autoFocus","currentTime","isNewGame"],emits:["game-over"],data:function(){return{index:0,paragraph:[],score:0,splitWordIndex:0,splitParagraph:[],splitWord:[],correctWord:[],speed:0}},mounted:function(){this.splitParagraph=this.paragraph.split(""),this.splitWord=this.paragraph.split(" "),this.$refs.input.addEventListener("keypress",(function(t){}))},methods:{romanTyping:function(t){this.splitParagraph[this.index]===t.key&&(32!==t.keyCode?(this.correctWord.push(t.key),this.checkWord()):(this.correctWord.push(t.key),this.handleSpace()),this.index++)},updateInfo:function(){this.splitParagraph=this.paragraph.split(""),this.splitWord=this.paragraph.split(" ")},checkWord:function(){this.correctWord.length==this.splitWord[this.splitWordIndex].length&&(this.correctWord=[],this.splitWordIndex++)},handleSpace:function(){this.score++,this.correctWord=[],this.$refs.input.value=null},resetInput:function(){this.index=0,this.score=0,this.splitWordIndex=0,this.splitParagraph=[],this.splitWord=[],this.correctWord=[],this.speed=0}},watch:{index:function(t){this.speed=Math.round(this.score/this.currentTime*60),t===this.splitParagraph.length&&(console.log(" सक्कियो"),this.$refs.input.blur(),this.$emit("game-over",!0))},autoFocus:function(){var t=this;setTimeout((function(){return t.$refs.input.focus()}),10)},isNewGame:function(){this.resetInput()}}};const b=h()(g,[["render",f]]);var y=b,O=Object(n["d"])("br",null,null,-1);function j(t,e,i,r,a,s){return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["d"])("span",null,"time:"+Object(n["h"])(a.cuteTime),1),O],64)}i("4d90");var T={props:["isPlaying","gameFinished","isNewGame"],emits:["current-time","timeup"],data:function(){return{showTimer:!1,time:0,cuteTime:"00:00"}},mounted:function(){},methods:{startTime:function(){var t=this;this.timer=setInterval((function(){t.time+=1,t.$emit("current-time",t.time)}),1e3)},endTime:function(){clearInterval(this.timer)},resetTimer:function(){this.time=0,this.cuteTime=0}},watch:{isPlaying:function(){var t=this;this.isPlaying&&setTimeout((function(){t.showTimer=!0,t.startTime()}),10)},time:function(){var t=Math.floor(this.time/60),e=this.time%60;t=String(t).padStart(2,"0"),e=String(e).padStart(2,"0"),this.cuteTime=t+":"+e,300===this.time&&(console.log("time is up"),this.endTime(),this.$emit("timeup"))},gameFinished:function(){this.gameFinished&&this.endTime()},isNewGame:function(){this.resetTimer()}}};const v=h()(T,[["render",j]]);var w=v,P={name:"App",components:{Main:p,TypingField:y,TheTime:w},data:function(){return{isPlaying:!1,isNewGame:!1,showPlayButton:!1,currentTime:0,gameFinished:!1,autoFocus:!1,newButton:!1,anotherGame:!1,paragraph:""}},mounted:function(){},methods:{play:function(){this.isPlaying=!0,this.autoFocus=!0,this.newButton=!0},gameOver:function(t){this.gameFinished=t,this.isPlaying=!t,this.newButton=!0},updateTime:function(t){this.currentTime=t},newGame:function(){this.isNewGame=!0},paragraphSelect:function(t){this.paragraph=t,this.$refs.typingfield.paragraph=t,this.$refs.typingfield.updateInfo()},loadNewGame:function(){this.$refs.typingfield.resetInput(),this.$refs.time.resetTimer(),this.$refs.main.random()}}};i("2336");const x=h()(P,[["render",s]]);var G=x;Object(n["b"])(G).mount("#app")},eb84:function(t,e,i){}});
//# sourceMappingURL=app.a4067dd3.js.map