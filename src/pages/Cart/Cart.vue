<template>
  <div>
    Cart
  </div>
</template>

<script type="text/ecmascript-6">
import{getHomeDatas} from '../../api'

  export default {
     async mounted(){
        let result = await getHomeDatas()
        console.log(result)
      }
  }
</script>

<style scoped>

 
</style>
