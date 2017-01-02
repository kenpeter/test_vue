<template>
  <div>
    <!-- 1st way, model changes, then view change -->
    <input type="text" v-model="message">
    
    <!-- 2nd way, view changed by someone else, the model is changed -->
    <p>{{ message }}</p>
  </div>
</template>

<script>
  // export
  // default, why export default, like export default
  export default {
    // es6, es5 is data: function()
    data() {
      // always return
      // this time return json obj.
      // now func becomes props
      return {
        message: "default msg"
      }
    }
  
  }
</script>
