<template>
<div v-if= "!showInput">
  <h3>
    Steps to follow before race:
  </h3>
  <ol>
  <li> Make sure you have  <b>Nepali Unicode Romanized layout </b>enabled </li>
  <li> If you don't know how to enable <a href="" target= "_blank">follow </a> this link </li>
  </ol>
  </div>
</template>

<script>
export default {
    props:['showInput']

}
</script>

<style>
h3, li {
    text-align: left;
     margin-left: 30vw;
    margin-right: 30vw;
}

</style>