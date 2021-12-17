<template>
<div v-show= "showInput">
  <!-- <p> Correct word:{{score}}</p> -->
  <span> Speed: {{speed }} WPM</span>
  <br>
<div class= "box mt border input-field" v-show= "showInput">
    <div>
        <div ref= "progress" class= "">
        </div>
    </div>
  <div ref= "span" class= "mt-2 mb-2 pl-1">
         <span v-for= "words in splitParagraph" >
        {{words}}
         </span>
  </div>
  <input type="text" placeholder= "type here" @keypress= "romanTyping"  ref= "input"
  class= "mb-4 mt-4 input"   :disabled= "!isPlaying">
</div>

</div>
</template>

<script>
export default {    
    props: ['isPlaying', 'autoFocus','currentTime', 'isNewGame','showInput'],
    emits:['game-over','keypressed'],
    data(){
        return{
            index: 0,
            aarkoIndex: 0,
            paragraph: [],
            score: 0,
            splitWordIndex: 0,
            splitParagraph: [],
            splitWord: [],
            correctWord: [],
            speed: 0


        }
    },
     mounted() {    
        // this.splitParagraph = this.paragraph.split('')  //split paragraph into alphabets
        // this.splitWord = this.paragraph.split(' ')      //splits the paragraph into words without space
        
        this.$refs.input.addEventListener('input',  (event) =>{  
        const allWords = this.$refs.span.querySelectorAll('span')
        const inputValue = this.$refs.input.value.split('')
        let index = 0
        
        const length = inputValue.length
        if(event.data !== " " &&  event.inputType !== "deleteContentBackward"){

            do{
            const character = inputValue[index]
            
                if(character == null){
                    allWords[this.aarkoIndex].classList.remove('correct')
                    allWords[this.aarkoIndex].classList.remove('incorrect')
                }
                 else if (character === allWords[this.aarkoIndex].innerText ) {
                        allWords[this.aarkoIndex].classList.add('correct')
                        allWords[this.aarkoIndex].classList.remove('incorrect')}
                else {
                    allWords[this.aarkoIndex].classList.remove('correct')
                    allWords[this.aarkoIndex].classList.add('incorrect')
                }
                index++
                
                }while(index < length);

                this.aarkoIndex++
        }
        else if(event.data === " "){
            this.aarkoIndex++
            this.$refs.input.value = null

        }
        else if( event.inputType === "deleteContentBackward")  {
            if(event.originalTarget.value + 1 === ""){
            this.aarkoIndex
            allWords[this.aarkoIndex].classList.remove('correct')
            allWords[this.aarkoIndex].classList.remove('incorrect')
            }
            else {
            this.aarkoIndex--
            
            allWords[this.aarkoIndex].classList.remove('correct')
            allWords[this.aarkoIndex].classList.remove('incorrect')
            
            }
            
            
        }
        })
        
    },

    methods: {
        romanTyping(event){
            if(this.splitParagraph[this.index] === event.key){ 
                if(event.keyCode !== 32){
                    this.correctWord.push(event.key)
                    this.checkWord()
                }
                else{
                    this.correctWord.push(event.key)
                    this.handleSpace()
                }
                this.index ++
            }

        },
        updateInfo(){
            
            this.splitParagraph = this.paragraph.split('')  //split paragraph into alphabets
            this.splitWord = this.paragraph.split(' ')      //splits the paragraph into words without space
            
        },
        // backSpace(event){                                       // handle the backspace and deletekey
        //     if(event.keyCode === 8 && event.keyCode === 46){
        //         console.log(this.splitWord[this.splitWordIndex])
        //         console.log("is this running")
        //         this.index --
        //     }  
        // },
        checkWord(){
            if(this.correctWord.length == this.splitWord[this.splitWordIndex].length){
                this.correctWord = []
                this.splitWordIndex ++
                 // this.$refs.input.value =  ''
                
            }
        },

        handleSpace(){
            this.score ++
            this.correctWord = []
            this.$refs.input.value = null
            
        },
        resetInput(){
            this.index= 0
            this.score= 0
            this.splitWordIndex= 0
            this.splitParagraph= []
            this.splitWord= []
            this.correctWord= []
            this.speed= 0
            this.aarkoIndex = 0
            const allWords = this.$refs.span.querySelectorAll('span')
            allWords.forEach((word,index) =>{
                word.classList.remove('correct')
                word.classList.remove('incorrect')
            })
        }
    },
    watch: {
        index(maxValue){
            this.speed = Math.round((this.score / this.currentTime)*60)
            

            if(maxValue === this.splitParagraph.length){
                console.log(" सक्कियो")
                this.$refs.input.blur()
                this.$emit('game-over', true)
            
            }

        },
        autoFocus(){
            setTimeout(() =>this.$refs.input.focus() , 10)
            
        },
        // currentTime(value){
        //     console.log("is this running in every 1 sec")
        //     this.speed = Math.round((this.score / value) *60)
        //     console.log(this.speed)
        // }
        isNewGame(){
            this.resetInput()
        }
    }
}
</script>

<style scoped>
.input-field{
    padding: 1px;
    background-color:#f6fbff;
    margin-left: 30vw;
    margin-right: 30vw;
    position: relative;
}
.input{
    width: 90%;
}
.correct{
    color:#99cc00;
}
.incorrect{
    background-color: rgb(224, 158, 158);
}
</style>