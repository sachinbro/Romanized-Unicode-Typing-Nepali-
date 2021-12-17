<template>
    <span v-if= "showInput">Time:{{cuteTime}}</span>
    <br>
</template>

<script>
    export default {
        props:['isPlaying', 'gameFinished', 'isNewGame', 'showInput'],
        emits:['current-time','timeup'],
        data(){
            return{
                showTimer: false,
                time : '00:00',
                cuteTime: '00:00',
            }
         },
        mounted(){
           
            },
            
        methods:{
            startTime(){
                this.timer = setInterval(() =>{
                    this.time +=1
                    this.$emit('current-time', this.time)
                },1000)
            },
            endTime(){
                clearInterval(this.timer)
            },
            resetTimer(){
                this.time = 0
                this.cuteTime = 0

            }

        },
        watch:{
            isPlaying(){
                 if(this.isPlaying){
                    setTimeout(() =>{
                    this.showTimer = true
                    this.startTime()},10)
             }
            },
            time(){
    
                let minutes = Math.floor(this.time /60) 
                let seconds = this.time % 60 
                minutes = String(minutes).padStart(2,"0")
                seconds = String(seconds).padStart(2,"0")
                this.cuteTime = minutes + ":" + seconds
                if(this.time === 300){
                    console.log("time is up")
                    this.endTime()
                    this.$emit('timeup')
                }

            },
            gameFinished(){
                if(this.gameFinished){
                    this.resetTimer()
                        this.endTime()
                        
                    

                }
            },
            isNewGame(){
                this.resetTimer()
            },

        }

}
</script>

<style>

</style>