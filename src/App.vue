<template >
  <h1> Romanized Unicode Typing(Nepali)</h1>
  <TheTime :isPlaying= "isPlaying" :gameFinished= "gameFinished" :isNewGame= "isNewGame" :showInput= "showInput"
   @current-time= "updateTime" @timeup= "gameOver" ref= "time"/>
  <Main @paragraph= "paragraphSelect" ref= "main"/>
  <TypingField  :isPlaying= "isPlaying" :showInput= "showInput"
  :autoFocus= "autoFocus" :currentTime= "currentTime" @game-over= "gameOver" 
  :isNewGame= "isNewGame" @keypressed= "keypressed" ref="typingfield"/>
  <Steps :showInput= "showInput"/>
  <button @click= "loadNewGame" :disabled= "false" class= "btn btn-primary play-button"> Play</button>
  <!-- <button @click= "loadNewGame" :disabled= "!newButton"> New Game</button> -->
  <br>
  <Tips :showInput="showInput"/>
</template>

<script>
import Main from './components/main/Main.vue'
import TypingField from './components/main/TypingField.vue'
import TheTime from './components/main/TheTime.vue'
import Steps from './components/main/Steps.vue'
import Tips from './components/main/HelpFullTips.vue'
export default {
  name: 'App',
  components: {
    Main,
    TypingField,
    TheTime,
    Steps,
    Tips
},
  data(){
    return{
      isPlaying:false,
      isNewGame: false,
      showInput: false,
      showPlayButton: false,
      currentTime: 0,
      gameFinished: false,
      autoFocus: false,
      newButton: false,
      anotherGame: false,
      paragraph: ''
    }
  },
  mounted(){
  },
 methods:{
   play(){
     this.isPlaying = true
     this.autoFocus = true
     this.newButton = true
     this.showInput = false
     
     
   },
   gameOver(event){
     this.gameFinished = event
     this.isPlaying = !event
     this.newButton = true
   },
   updateTime(time){
     this.currentTime = time
   },
   newGame(){
    this.isNewGame = true
    
    
   },
   paragraphSelect(paragraph){
     this.paragraph = paragraph
     this.$refs.typingfield.paragraph = paragraph
     this.$refs.typingfield.updateInfo()
   },
   loadNewGame(){
     this.isPlaying = true
     this.autoFocus = true
     this.newButton = true
     this.showInput = true
     
     this.$refs.typingfield.resetInput()
     this.$refs.time.resetTimer()
     this.$refs.main.random()
   },
   keypressed(event){
     this.$refs.main.check(event)
   }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
.play-button{
  
}

</style>
