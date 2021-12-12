<template>
  
    <p>{{paragraphObject[randomValue].text}} </p>

</template>

<script>
export default {
    emits: ['paragraph'],
    data(){
        return{
            randomValue: 0,
            paragraphObject: [
                {
                    author: 'Laxmi Parsad Devkota',
                    article: 'Bikhari Poem',
                    text:   'हेर भिखारी अडि अडि आयो करुण दृष्टिले नजर उठायो । गाढा दुखको मौन प्रकाश । झिना आशा-तार बजायो घाम उज्यालो आँगन पास । एक बिन्दुमा गोल खसायो जीवनको इतिहास । '},
                {
                    author: 'Bhanu Bhakta Acharya',
                    article: 'Ghasi',
                    text:  'भर् जन्म घाँस तिर मन् दिई धन कमायो। नाम क्यै रहोस् प छि भनेर कुवा खनायो। घाँसी दरिद्र घरको तर बुद्धि कस्तो। म भानुभक्त धनी भैकन किन यस्तो । '},
                {
                    author: 'Laxmi Parsad Devkota',
                    article: 'Muna Madan',
                    text: 'क्षेत्रीको छोरो यो पाउ छुन्छ, घिनले छुदैन मानिस ठूलो दिलले हुन्छ, जातले हुदैन। '},
                {
                    author: 'Laxmi Parsad Devkota',
                    article: 'Muna Madan',
                    text:   'हातका मैला सुनका थैला के गर्नु धनले साग र सिस्नु खाएको बेस आनन्दी मनले। '},

            ]
        }
    },
    mounted(){
        this.randomValue =  Math.floor(Math.random() * this.paragraphObject.length)
        this.$emit('paragraph', this.paragraphObject[this.randomValue].text)
        
    },
    methods:{
        random(){
            this.randomValue =  Math.floor(Math.random() * this.paragraphObject.length)
            this.$emit('paragraph', this.paragraphObject[this.randomValue].text)
        }
    },
}
</script>

<style>

</style>