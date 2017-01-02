<template>
  <!-- one root element -->
  <div>
    <h1>This is msg</h1>
    <my-input></my-input>
  </div>
</template>

<script>
  // Input.vue, no module.exports = 
  import MyInput from "./MyInput.vue";

  // because it may be used in other place
  export default {
    // component key word
    components: {
      "my-input": MyInput
    }  
  }
</script>
