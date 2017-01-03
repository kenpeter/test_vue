<template>
  <!-- one root element -->
  <div>
    <h1>h1: {{ message }}</h1>
    <!-- :msg is props -->
    <my-input :msg="message" @msgChanged="message = $event"></my-input>
  </div>
</template>

<script>
  // Input.vue, no module.exports = 
  import MyInput from "./MyInput.vue";

  // because it may be used in other place
  export default {
    // data: func() {}
    data() {
      return {
        message: "pass message into my-input"
      }
    },
  
    // component key word
    components: {
      "my-input": MyInput
    }  
  }
</script>
