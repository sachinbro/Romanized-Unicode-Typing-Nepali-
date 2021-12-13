<template>
  <h1> Romanized Unicode Typing(Nepali)</h1>
  <TheTime :isPlaying= "isPlaying" :gameFinished= "gameFinished" @current-time= "updateTime" @timeup= "gameOver" :isNewGame= "isNewGame" ref= "time"/>
  <Main @paragraph= "paragraphSelect" ref= "main"/>
  <TypingField  :isPlaying= "isPlaying" 
  :autoFocus= "autoFocus" :currentTime= "currentTime" @game-over= "gameOver" 
  :isNewGame= "isNewGame" @keypressed= "keypressed" ref="typingfield"/>
  <button @click= "play" :disabled= "false"> Play</button>
  <button @click= "loadNewGame" :disabled= "!newButton"> New Game</button>
</template>

<script>
import Main from './components/main/Main.vue'
import TypingField from './components/main/TypingField.vue'
import TheTime from './components/main/TheTime.vue'
export default {
  name: 'App',
  components: {
    Main,
    TypingField,
    TheTime
},
  data(){
    return{
      isPlaying:false,
      isNewGame: false,
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
     
     this.$refs.typingfield.resetInput()
     this.$refs.time.resetTimer()
     this.$refs.main.random()
   },
   keypressed(event){
     
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
</style>
