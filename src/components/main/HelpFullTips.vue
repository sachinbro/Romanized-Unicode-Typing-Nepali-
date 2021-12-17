<template>
<div class= " tips">
  <img src="../../../src/assets/layout.jpg" alt="This is layout" width="550" height="300" class= "mt-4 d-none-sm " v-if= "!showInput" >
        <!-- <span class= "col-7" v-if= "!showInput">
        <ul>
            <li> क्ष = क +  ् + ष</li>
            <li> त्र = त +  ् + र</li>
            <li> ज्ञ = ज +  ् + ञ</li>
            <li> त्त = त +  ् + त</li>
            <li> द्ध = द +  ् + ध</li>
            <li> श्र = श +  ् + र</li>
            <li> द्य = द +  ् + य</li>
            <li> दृ = द + shift+R </li>

        </ul>
        </span> -->
</div>
</template>

<script>
export default {
    props:['showInput']

}
</script>

<style scoped>

</style>