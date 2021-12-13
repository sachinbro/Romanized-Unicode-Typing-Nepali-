<template>
  
    <span v-for= "splitWord in splitWords">
        {{splitWord}}
    </span>

</template>

<script>
export default {
    emits: ['paragraph'],
    data(){
        return{
            randomValue: 0,
            splitWords: [],
            paragraphObject: [
                {
                    author: 'लक्ष्मीप्रसाद देवकोटा',
                    article: 'भिखारी ',
                    text:   'हेर भिखारी अडि अडि आयो करुण दृष्टिले नजर उठायो । गाढा दुखको मौन प्रकाश । झिना आशा-तार बजायो घाम उज्यालो आँगन पास । एक बिन्दुमा गोल खसायो जीवनको इतिहास । ',
                    difficulty: 'medium'},
                {
                    author: 'भानुभक्त आचार्य',
                    article: 'घाँसी',
                    text:  'भर् जन्म घाँस तिर मन् दिई धन कमायो। नाम क्यै रहोस् प छि भनेर कुवा खनायो। घाँसी दरिद्र घरको तर बुद्धि कस्तो। म भानुभक्त धनी भैकन किन यस्तो । ',
                    difficulty: 'medium'},
                {
                    author: 'लक्ष्मीप्रसाद देवकोटा',
                    article: 'मुना मदन',
                    text: 'क्षेत्रीको छोरो यो पाउ छुन्छ, घिनले छुदैन मानिस ठूलो दिलले हुन्छ, जातले हुदैन। ',
                    difficulty: 'easy'},
                {
                    author: 'लक्ष्मीप्रसाद देवकोटा',
                    article: 'मुना मदन',
                    text:   'हातका मैला सुनका थैला के गर्नु धनले साग र सिस्नु खाएको बेस आनन्दी मनले। ',
                    difficulty: 'easy'},
                {
                    author: 'भैरव अर्याल',
                    article: 'जय भुडि' ,
                    text: 'दोस्रो छ-घ्याम्पे भुडी । जो हाँडीघोप्टे भुँडीभन्दा अलि सानो भए पनि स्वभावमा भने प्रायः उस्तैउस्तै हुन्छ । तेस्रो हो-टाकनटुकन भुँडी । जसलाई नैवेद्य जुटाउन सत्रतिर दाह्रा ङिच्च्याई टाकनटुकन नगरी हुँदैन ',
                    difficulty: 'medium'},
                {
                    author: 'भैरव अर्याल',
                    article: 'जय भुडि' ,
                    text: 'हेरिल्याएको खण्डमा कृष्ण हुन् कि क्राइष्ट हुन्, बुद्ध हुन् कि कन्फ्युसियस हुन् सबै देवात्माहरु भुँडीबाट मर्त्यलोकमा अवरोहण गरेका हुन् । महर्षि हुन् कि मार्क्स हुन्, सन्त हुन् कि सार्त्र हुन्, सबै दार्शनिकहरु भुँडीमै निर्मित भएर देखा परेका हुन् ',
                    difficulty: 'hard',
                },
                {
                    author: 'भैरव अर्याल',
                    article: 'जय भुडि' ,
                    text: "'तँ' को आदरार्थी 'तपाईँ' भएजस्तै 'म' को आदरार्थी 'मपाई' हुन्छ । त्यसैले सभ्य भाषामा 'तँ' को ठाउँ 'मपाई' ले नलिनु किन ?",
                    difficulty: 'easy'
                }

            ]
        }
    },
    mounted(){
        this.randomValue =  Math.floor(Math.random() * this.paragraphObject.length)
        this.$emit('paragraph', this.paragraphObject[this.randomValue].text)
        this.splitWords = this.paragraphObject[this.randomValue].text.split('')
        
    },
    methods:{
        random(){
            this.randomValue =  Math.floor(Math.random() * this.paragraphObject.length)
            this.$emit('paragraph', this.paragraphObject[this.randomValue].text)
            this.splitWords = this.paragraphObject[this.randomValue].text.split('')
            console.log("हम")
        },
        
    },
}
</script>

<style>

</style>