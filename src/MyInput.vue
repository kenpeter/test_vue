<template>
  <div>
    <!-- 1st way, model changes, then view change -->
    <!-- v-on:bind == :value -->
    <!-- @input listening changes -->
    <input type="text" :value="msg" @input="changeMessage">
    
    <!-- 2nd way, view changed by someone else, the model is changed -->
    <p>{{ message }}</p>
  </div>
</template>

<script>
  // export
  // default, why export default, like export default
  export default {
    props: ['msg'],
  
    // es6, es5 is data: function()
    data() {
      // always return
      // this time return json obj.
      // now func becomes props
      return {
        message: "default text for input box"
      }
    },
    
    methods: {
      changeMessage(event) {
        this.message = event.target.value;    
        
        // This will fire to whoever listen, so can be parent
        // $ build-in
        this.$emit("msgChanged", this.message);
      }
    }
    
  }
</script>
