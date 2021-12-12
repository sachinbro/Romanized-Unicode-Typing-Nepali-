<template>
  <input type="text" placeholder= "type here" @keypress= "romanTyping"  ref= "input"   :disabled= "!isPlaying">
  <p> Correct word:{{score}}</p>
  <span> Speed: {{speed }} WPM</span>
  <br>
</template>

<script>
export default {    
    props: ['paragraph','isPlaying', 'autoFocus','currentTime', 'isNewGame'],
    emits:['game-over'],
    data(){
        return{
            index: 0,
            score: 0,
            splitWordIndex: 0,
            splitParagraph: [],
            splitWord: [],
            correctWord: [],
            speed: 0


        }
    },
    async mounted() {
        await this.paragraph
        this.splitParagraph = this.paragraph.split('')  //split paragraph into alphabets
        console.log(this.splitParagraph)
        this.splitWord = this.paragraph.split(' ')      //splits the paragraph into words without space
        this.$refs.input.addEventListener('keypress', (event) =>{   
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
            console.log(this.score)
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

<style>

</style>